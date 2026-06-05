import people from '@/data/people.json';
import rooms from '@/data/rooms.json';

export const dynamic = 'force-dynamic';

type Params = { params: Promise<{ roomId: string }> };

export async function GET(_request: Request, { params }: Params) {
  const { roomId } = await params;
  const room = (rooms as any[]).find(item => item.id === roomId);
  if (!room) {
    return Response.json({ error: `Unknown room id: ${roomId}` }, { status: 404 });
  }

  const eligible_people = (people as any[])
    .filter(person => person.eligible_rooms?.includes(roomId))
    .map(person => ({
      id: person.id,
      name: person.name,
      kind: person.kind,
      types: person.types,
      speaking_weight: person.speaking_weight,
      age: person.age_on_2026_06_05 ?? person.age_band,
      regions: person.regions,
      fit: person.summer_circuit_fit,
      voice: person.voice_vernacular_notes,
      look: person.visual_descriptors?.style_shorthand,
      boundary: person.use_boundary
    }));

  return Response.json({ room, eligible_people });
}
