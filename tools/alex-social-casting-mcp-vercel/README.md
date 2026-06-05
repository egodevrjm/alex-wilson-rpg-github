# Alex Social Casting MCP — Vercel Remote Server

Remote HTTP MCP server for Alex Wilson social-room casting.

Deploy this folder to Vercel and give Claude/Cursor-style MCP clients this URL:

```text
https://YOUR-VERCEL-PROJECT.vercel.app/api/mcp
```

## What it does

- Closed rooms return canon-locked memberships.
- Open-weather rooms such as Summer House cast dynamically.
- Real public figures are capped and treated only as fictionalised public-social cameos.
- Fictional/background voices preserve scale so the room does not collapse into the same names repeatedly.

## Deploy from Vercel

When importing into Vercel, set the project root directory to:

```text
tools/alex-social-casting-mcp-vercel
```

Framework: Next.js.

## Useful endpoints

- `/api/mcp` — remote MCP endpoint
- `/api/health` — deployment/data health check
- `/api/context/summer_house` — raw room context

## MCP config

```json
{
  "mcpServers": {
    "alex-social-casting": {
      "url": "https://YOUR-VERCEL-PROJECT.vercel.app/api/mcp"
    }
  }
}
```

## Tools exposed

- `list_rooms`
- `get_room_rules`
- `search_people`
- `get_person`
- `cast_room`
- `record_usage`
- `export_room_context`
- `list_sources`

## Safety boundary for real people

Real public people are included only as fictionalised public-social cameos. Do not use this data to assert private facts about sex, drugs, health, crime, abuse, sexuality, or anything defamatory. Voice notes are public-style shorthand, not private personality claims.

## Data note

This branch includes a compact working seed dataset. The larger generated Summer House dataset can be merged into `data/people.json` later.
