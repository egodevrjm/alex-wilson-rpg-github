import people from '@/data/people.json';
import btPeople from '@/data/brain-trust-people.json';
import phoenixPeople from '@/data/phoenix-people.json';
import londonLotPeople from '@/data/london-lot-people.json';
import legacyPeople from '@/data/legacy-people.json';
import pressPictureDeskPeople from '@/data/press-picture-desk-people.json';
import rooms from '@/data/rooms.json';

export const dynamic = 'force-dynamic';

function dedupe(items: any[]) {
  const byId = new Map<string, any>();
  for (const item of items) byId.set(item.id, item);
  return Array.from(byId.values());
}

export async function GET() {
  const allPeople = dedupe([
    ...(people as any[]),
    ...(phoenixPeople as any[]),
    ...(londonLotPeople as any[]),
    ...(legacyPeople as any[]),
    ...(pressPictureDeskPeople as any[]),
    ...(btPeople as any[])
  ]);

  return Response.json({
    ok: true,
    name: 'alex-social-casting-mcp-vercel',
    mcp_endpoint: '/api/mcp',
    rooms: (rooms as any[]).length,
    people: allPeople.length,
    brain_trust_eligible: allPeople.filter(person => person.eligible_rooms?.includes('brain_trust')).length,
    summer_house_eligible: allPeople.filter(person => person.eligible_rooms?.includes('summer_house')).length,
    phoenix_hollow_eligible: allPeople.filter(person => person.eligible_rooms?.includes('phoenix_hollow')).length,
    london_lot_eligible: allPeople.filter(person => person.eligible_rooms?.includes('london_lot')).length,
    legacy_eligible: allPeople.filter(person => person.eligible_rooms?.includes('legacy')).length,
    press_picture_desk_eligible: allPeople.filter(person => person.eligible_rooms?.includes('press_picture_desk')).length,
    version_note: 'includes latest group rollout'
  });
}
