export default function Page() {
  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', padding: 32, maxWidth: 820 }}>
      <h1>Alex Social Casting MCP</h1>
      <p>Remote MCP server for Alex Wilson social-room casting.</p>
      <p><strong>MCP endpoint:</strong> <code>/api/mcp</code></p>
      <p><strong>Health:</strong> <code>/api/health</code></p>
      <p><strong>Summer House context:</strong> <code>/api/context/summer_house</code></p>
    </main>
  );
}
