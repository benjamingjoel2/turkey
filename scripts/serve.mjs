// Tiny static server for local preview of ./dist (no dependencies).
//   node scripts/serve.mjs           serve the last build
//   node scripts/serve.mjs --watch   build, serve, and rebuild on changes
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { spawn } from 'node:child_process';
import { join, extname, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(ROOT, 'dist');
const PORT = Number(process.env.PORT) || 3000;
const TYPES = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml', '.xml': 'application/xml', '.txt': 'text/plain; charset=utf-8', '.json': 'application/json',
};

if (process.argv.includes('--watch')) {
  spawn(process.execPath, [join(ROOT, 'build.mjs'), '--watch'], { stdio: 'inherit' });
}

createServer(async (req, res) => {
  let path = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  if (path.includes('..')) { res.writeHead(400).end(); return; }
  let file = join(DIST, path);
  try {
    if ((await stat(file)).isDirectory()) {
      if (!path.endsWith('/')) { res.writeHead(301, { Location: path + '/' }).end(); return; }
      file = join(file, 'index.html');
    }
    res.writeHead(200, { 'Content-Type': TYPES[extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-store' });
    res.end(await readFile(file));
  } catch {
    res.writeHead(404, { 'Content-Type': TYPES['.html'] });
    res.end(await readFile(join(DIST, '404.html')).catch(() => 'Not found'));
  }
}).listen(PORT, () => console.log(`Serving dist/ at http://localhost:${PORT}`));
