import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync, cpSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const archiveDir = join(root, 'archive');
const marker = join(root, '.mcp-unpacked');
const expected = join(root, 'app', 'api', 'mcp', 'route.ts');

if (existsSync(marker) && existsSync(expected)) {
  console.log('MCP project already unpacked.');
  process.exit(0);
}

const chunks = readdirSync(archiveDir)
  .filter(name => /^chunk-\d+\.b64$/.test(name))
  .sort();

if (!chunks.length) {
  throw new Error('No archive chunks found in archive/*.b64');
}

console.log(`Unpacking Alex Social Casting MCP from ${chunks.length} archive chunks...`);
const base64 = chunks.map(name => readFileSync(join(archiveDir, name), 'utf8').trim()).join('');
const zipPath = join(root, '.alex-social-casting-mcp-vercel.zip');
const tmpDir = join(root, '.unpacked-mcp');

writeFileSync(zipPath, Buffer.from(base64, 'base64'));
rmSync(tmpDir, { recursive: true, force: true });
mkdirSync(tmpDir, { recursive: true });

try {
  execFileSync('unzip', ['-q', zipPath, '-d', tmpDir], { stdio: 'inherit' });
} catch (error) {
  throw new Error('Failed to unzip archive. The Vercel/Node environment needs the unzip binary available.');
}

const sourceRoot = join(tmpDir, 'alex-social-casting-mcp-vercel');
if (!existsSync(sourceRoot)) {
  throw new Error('Archive did not contain expected alex-social-casting-mcp-vercel folder.');
}

cpSync(sourceRoot, root, { recursive: true, force: true });
writeFileSync(marker, new Date().toISOString());
rmSync(tmpDir, { recursive: true, force: true });
rmSync(zipPath, { force: true });
console.log('MCP project unpacked successfully.');
