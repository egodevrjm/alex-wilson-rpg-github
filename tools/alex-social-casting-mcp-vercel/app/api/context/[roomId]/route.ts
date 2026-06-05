import people from '@/data/people.json';
import phoenixPeople from '@/data/phoenix-people.json';
import londonLotPeople from '@/data/london-lot-people.json';
import legacyPeople from '@/data/legacy-people.json';
import pressPictureDeskPeople from '@/data/press-picture-desk-people.json';
import rooms from '@/data/rooms.json';

export const dynamic = 'force-dynamic';

type Params = { params: Promise<{ roomId: string }> };

export async function GET(request: Request, { params }: Params) {
  const { roomId } = await params;
  const url = new URL(request.url);
  const channel = url.searchParams.get('channel');
  const room = (rooms as any[]).find(item => item.id === roomId);
  if (!room) {
    return Response.json({ error: `Unknown room id: ${roomId}` }, { status: 404 });
  }

  const allPeople = [
    ...(people as any[]),
    ...(phoenixPeople as any[]),
    ...(londonLotPeople as any[]),
    ...(legacyPeople as any[]),
    ...(pressPictureDeskPeople as any[])
  ];

  const eligible_people = allPeople
    .filter(person => person.eligible_rooms?.includes(roomId))
    .filter(person => !channel || person.legacy_channels?.includes(channel))
    .map(person => ({
      id: person.id,
      name: person.name,
      kind: person.kind,
      types: person.types,
      speaking_weight: person.speaking_weight,
      age: person.age_on_2026_06_05 ?? person.age_band,
      regions: person.regions,
      fit: person.summer_circuit_fit,
      legacy_channels: person.legacy_channels,
      voice: person.voice_vernacular_notes,
      look: person.visual_descriptors?.style_shorthand,
      boundary: person.use_boundary
    }));

  return Response.json({ room, channel, eligible_people });
}
