import { z } from 'zod';
import { createMcpHandler } from 'mcp-handler';
import peopleData from '@/data/people.json';
import phoenixPeopleData from '@/data/phoenix-people.json';
import londonLotPeopleData from '@/data/london-lot-people.json';
import legacyPeopleData from '@/data/legacy-people.json';
import pressPictureDeskPeopleData from '@/data/press-picture-desk-people.json';
import roomsData from '@/data/rooms.json';
import sourcesData from '@/data/sources.json';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';
export const maxDuration = 60;

const people = [
  ...(peopleData as any[]),
  ...(phoenixPeopleData as any[]),
  ...(londonLotPeopleData as any[]),
  ...(legacyPeopleData as any[]),
  ...(pressPictureDeskPeopleData as any[])
];
const rooms = roomsData as any[];
const sources = sourcesData as any[];
const usageLog: any[] = [];

function jsonText(value: unknown) {
  return { content: [{ type: 'text' as const, text: JSON.stringify(value, null, 2) }] };
}

function findRoom(roomId: string) {
  return rooms.find(room => room.id === roomId);
}

function shouldFilterMode(mode?: string) {
  return Boolean(mode && mode !== 'all' && mode !== '*');
}

function isRealOrCanon(person: any) {
  return person.kind === 'public_candidate' || person.kind === 'canon_real' || person.kind === 'canon_fictional' || person.kind === 'role_placeholder';
}

function isFictionalBackground(person: any) {
  return person.kind === 'fictional_background';
}

function shuffled<T>(items: T[]): T[] {
  return [...items].sort(() => Math.random() - 0.5);
}

function scorePerson(person: any, room: any, args: any, recentIds: Set<string>) {
  let score = 0;
  if (person.eligible_rooms?.includes(room.id)) score += 20;
  if (args.channel && person.legacy_channels?.includes(args.channel)) score += 12;
  if (args.requiredTypes?.some((type: string) => person.types?.includes(type))) score += 8;
  if (args.location && person.regions?.some((region: string) => region.toLowerCase().includes(args.location.toLowerCase()))) score += 5;
  if (person.kind === 'role_placeholder') score += room.mode === 'closed_roles' ? 100 : 4;
  if (person.kind === 'fictional_background') score += room.casting_policy?.prefer_fictional_background ? 8 : 2;
  if (person.kind === 'public_candidate') score += room.mode === 'open_weather' || room.mode === 'server' ? 8 : 2;
  if (person.kind === 'canon_real' || person.kind === 'canon_fictional') score += room.mode === 'closed' ? 10 : 5;
  if (room.casting_policy?.fixed_member_ids?.includes(person.id)) score += 100;
  if (recentIds.has(person.id) && person.avoid_if_recently_used !== false) score -= 30;
  if (args.excludeIds?.includes(person.id)) score -= 1000;
  return score + Math.random();
}

function rankPeople(pool: any[], room: any, args: any, recentIds: Set<string>) {
  return shuffled(pool)
    .map(person => ({ person, score: scorePerson(person, room, args, recentIds) }))
    .sort((a, b) => b.score - a.score)
    .map(item => item.person);
}

function castRoom(room: any, args: any) {
  if (room.mode === 'closed') {
    const fixedIds = room.casting_policy?.fixed_member_ids ?? [];
    return {
      room: { id: room.id, title: room.title, mode: room.mode, register: room.register },
      selected: people.filter(person => fixedIds.includes(person.id)),
      casting_note: 'Closed room: returned canon membership only.',
      guardrails: room.room_rules
    };
  }

  if (room.mode === 'closed_roles') {
    const selected = people.filter(person => person.eligible_rooms?.includes(room.id));
    return {
      room: { id: room.id, title: room.title, mode: room.mode, register: room.register },
      selected,
      casting_note: 'Closed role-room: returned role placeholders only; do not substitute real living editor names.',
      guardrails: room.room_rules,
      counts: {
        total: selected.length,
        role_placeholders: selected.filter(person => person.kind === 'role_placeholder').length
      }
    };
  }

  const recentWindow = room.casting_policy?.avoid_recent_window ?? 2;
  const recentIds = new Set(
    usageLog.filter(entry => entry.room_id === room.id).slice(-recentWindow).flatMap(entry => entry.person_ids)
  );
  const maxPeople = args.maxPeople ?? room.casting_policy?.default_total_visible ?? 15;
  const targetReal = room.casting_policy?.target_real_named_people ?? Math.max(0, maxPeople - 3);
  const targetBackground = room.casting_policy?.target_fictional_background ?? Math.max(0, maxPeople - targetReal);
  const maxReal = args.maxRealNamedPublicFigures ?? room.casting_policy?.max_real_named_public_figures ?? targetReal;
  const maxCanon = room.casting_policy?.max_canon_seed_names ?? 4;

  const eligible = people
    .filter(person => person.eligible_rooms?.includes(room.id))
    .filter(person => !args.excludeIds?.includes(person.id))
    .filter(person => !args.channel || !person.legacy_channels || person.legacy_channels.includes(args.channel))
    .filter(person => !args.requiredTypes?.length || args.requiredTypes.some((type: string) => person.types?.includes(type)));

  const realPool = rankPeople(eligible.filter(isRealOrCanon), room, args, recentIds);
  const backgroundPool = rankPeople(eligible.filter(isFictionalBackground), room, args, recentIds);
  const fallbackPool = rankPeople(eligible, room, args, recentIds);

  const selected: any[] = [];
  let realCount = 0;
  let backgroundCount = 0;
  let canonCount = 0;

  for (const person of realPool) {
    if (selected.length >= maxPeople) break;
    if (realCount >= targetReal || realCount >= maxReal) break;
    const isCanon = person.kind === 'canon_real' || person.kind === 'canon_fictional';
    if (isCanon && canonCount >= maxCanon) continue;
    selected.push(person);
    realCount += 1;
    if (isCanon) canonCount += 1;
  }

  for (const person of backgroundPool) {
    if (selected.length >= maxPeople) break;
    if (backgroundCount >= targetBackground) break;
    if (selected.some(existing => existing.id === person.id)) continue;
    selected.push(person);
    backgroundCount += 1;
  }

  for (const person of fallbackPool) {
    if (selected.length >= maxPeople) break;
    if (selected.some(existing => existing.id === person.id)) continue;
    if (isFictionalBackground(person) && backgroundCount >= targetBackground) continue;
    selected.push(person);
    if (isFictionalBackground(person)) backgroundCount += 1;
    if (isRealOrCanon(person)) realCount += 1;
  }

  return {
    room: { id: room.id, title: room.title, mode: room.mode, register: room.register, channel: args.channel },
    selected: shuffled(selected),
    casting_note: `Open room/server: shuffled selection by social function. Target ratio is ${targetReal} real/canon/public people to ${targetBackground} fictional/background voices.`,
    guardrails: room.room_rules,
    counts: {
      total: selected.length,
      real_canon_public: realCount,
      fictional_background: backgroundCount
    }
  };
}

const handler = createMcpHandler(
  (server: any) => {
    server.tool('list_rooms', 'List configured social rooms. Use mode=all or omit mode to return every room.', { mode: z.string().optional() }, async ({ mode }: any) => {
      return jsonText(rooms.filter(room => (shouldFilterMode(mode) ? room.mode === mode : true)));
    });

    server.tool('get_room_rules', 'Get rules for one room.', { roomId: z.string() }, async ({ roomId }: any) => {
      const room = findRoom(roomId);
      return room ? jsonText(room) : { ...jsonText({ error: `Unknown room id: ${roomId}` }), isError: true };
    });

    server.tool('search_people', 'Search casting people.', {
      query: z.string().optional(),
      roomId: z.string().optional(),
      kind: z.string().optional(),
      type: z.string().optional(),
      channel: z.string().optional(),
      limit: z.number().optional()
    }, async (args: any) => {
      const q = args.query?.toLowerCase();
      const limit = Math.min(Math.max(args.limit ?? 20, 1), 100);
      const results = people
        .filter(person => (args.roomId ? person.eligible_rooms?.includes(args.roomId) : true))
        .filter(person => (args.kind ? person.kind === args.kind : true))
        .filter(person => (args.type ? person.types?.includes(args.type) : true))
        .filter(person => (args.channel ? person.legacy_channels?.includes(args.channel) : true))
        .filter(person => !q || JSON.stringify(person).toLowerCase().includes(q))
        .slice(0, limit);
      return jsonText(results);
    });

    server.tool('get_person', 'Get people by id.', { ids: z.array(z.string()) }, async ({ ids }: any) => {
      const idSet = new Set(ids);
      return jsonText(people.filter(person => idSet.has(person.id)));
    });

    server.tool('cast_room', 'Cast visible speakers for a room.', {
      roomId: z.string(),
      scene: z.string().optional(),
      location: z.string().optional(),
      channel: z.string().optional(),
      requiredTypes: z.array(z.string()).optional(),
      excludeIds: z.array(z.string()).optional(),
      maxRealNamedPublicFigures: z.number().optional(),
      maxPeople: z.number().optional()
    }, async (args: any) => {
      const room = findRoom(args.roomId);
      return room ? jsonText(castRoom(room, args)) : { ...jsonText({ error: `Unknown room id: ${args.roomId}` }), isError: true };
    });

    server.tool('record_usage', 'Record recently used people for repetition avoidance.', {
      roomId: z.string(),
      personIds: z.array(z.string()),
      sceneId: z.string().optional(),
      note: z.string().optional()
    }, async (args: any) => {
      usageLog.push({ timestamp: new Date().toISOString(), room_id: args.roomId, person_ids: args.personIds, scene_id: args.sceneId, note: args.note });
      return jsonText({ ok: true, usageLogLength: usageLog.length });
    });

    server.tool('export_room_context', 'Export room rules and eligible people for prompting.', { roomId: z.string(), channel: z.string().optional() }, async ({ roomId, channel }: any) => {
      const room = findRoom(roomId);
      if (!room) return { ...jsonText({ error: `Unknown room id: ${roomId}` }), isError: true };
      return jsonText({
        room,
        eligible_people: people
          .filter(person => person.eligible_rooms?.includes(roomId))
          .filter(person => !channel || person.legacy_channels?.includes(channel))
      });
    });

    server.tool('list_sources', 'List source records.', {}, async () => jsonText(sources));
  },
  {},
  { basePath: '/api' }
);

export { handler as GET, handler as POST, handler as DELETE };
