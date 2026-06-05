import people from '@/data/people.json';
import phoenixPeople from '@/data/phoenix-people.json';
import rooms from '@/data/rooms.json';

export const dynamic = 'force-dynamic';

export async function GET() {
  const allPeople = [...(people as any[]), ...(phoenixPeople as any[])];
  return Response.json({
    ok: true,
    name: 'alex-social-casting-mcp-vercel',
    mcp_endpoint: '/api/mcp',
    rooms: (rooms as any[]).length,
    people: allPeople.length,
    summer_house_eligible: allPeople.filter(person => person.eligible_rooms?.includes('summer_house')).length,
    phoenix_hollow_eligible: allPeople.filter(person => person.eligible_rooms?.includes('phoenix_hollow')).length
  });
}
