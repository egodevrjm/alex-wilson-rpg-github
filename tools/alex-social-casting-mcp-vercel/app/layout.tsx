export const metadata = {
  title: 'Alex Social Casting MCP',
  description: 'Remote MCP server for Alex Wilson social-room casting.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
