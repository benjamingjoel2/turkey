// Static site build: renders every page to ./dist, generates the CSS theme
// from site.config.mjs, and runs checks (contrast, links, "Turkey" usage).
//
//   node build.mjs           build once
//   node build.mjs --watch   rebuild when src/ or site.config.mjs change
import { readFile, writeFile, mkdir, rm, cp, readdir } from 'node:fs/promises';
import { watch } from 'node:fs';
import { spawn } from 'node:child_process';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = dirname(fileURLToPath(import.meta.url));
const DIST = join(ROOT, 'dist');
const PAGES = ['home', 'regions', 'caravan', 'balloon', 'lycian', 'etiquette', 'food', 'plan', 'site'];

// ── Colour maths for the WCAG check ─────────────────────────────────────────
const lum = (hex) => {
  const [r, g, b] = hex.replace('#', '').match(/../g).map((h) => {
    const c = parseInt(h, 16) / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
export const contrast = (a, b) => {
  const [x, y] = [lum(a), lum(b)].sort((m, n) => n - m);
  return (x + 0.05) / (y + 0.05);
};

const kebab = (s) => s.replace(/[A-Z]/g, (c) => '-' + c.toLowerCase());

// An İznik-inspired tile: an eight-pointed star with a rosette, in palette colours.
const tile = (p) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56">
<rect width="56" height="56" fill="${p.iznik}"/>
<path d="M28 6l6 9 10-3-3 10 9 6-9 6 3 10-10-3-6 9-6-9-10 3 3-10-9-6 9-6-3-10 10 3z" fill="none" stroke="${p.turquoiseLight}" stroke-width="1.6"/>
<circle cx="28" cy="28" r="6" fill="${p.saffron}"/><circle cx="28" cy="28" r="2.4" fill="${p.pomegranate}"/>
<circle cx="0" cy="0" r="4" fill="${p.paper}"/><circle cx="56" cy="0" r="4" fill="${p.paper}"/><circle cx="0" cy="56" r="4" fill="${p.paper}"/><circle cx="56" cy="56" r="4" fill="${p.paper}"/>
</svg>`;
  return `url("data:image/svg+xml,${encodeURIComponent(svg.replace(/\n/g, ''))}")`;
};

const favicon = (config) => {
  const p = config.palette;
  const pts = [];
  for (let i = 0; i < 16; i++) {
    const a = (Math.PI / 8) * i - Math.PI / 2;
    const r = i % 2 ? 19.9 : 26;
    pts.push(`${(32 + r * Math.cos(a)).toFixed(1)},${(32 + r * Math.sin(a)).toFixed(1)}`);
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="${p.iznikDeep}"/><polygon points="${pts.join(' ')}" fill="none" stroke="${p.saffron}" stroke-width="3" stroke-linejoin="round"/><circle cx="32" cy="32" r="7" fill="${p.saffron}"/></svg>`;
};

async function build() {
  const t0 = Date.now();
  const config = (await import(pathToFileURL(join(ROOT, 'site.config.mjs')).href)).default;
  const { layout } = await import(pathToFileURL(join(ROOT, 'src/layout.mjs')).href);
  const errors = [];
  const warnings = [];

  // 1. Palette contrast
  for (const [fg, bg] of config.contrastPairs) {
    const ratio = contrast(config.palette[fg], config.palette[bg]);
    if (ratio < 4.5) errors.push(`Contrast ${fg} on ${bg} is ${ratio.toFixed(2)}:1 (needs 4.5:1)`);
  }

  // 2. Pages
  const pages = [];
  for (const name of PAGES) {
    const mod = await import(pathToFileURL(join(ROOT, `src/pages/${name}.mjs`)).href);
    pages.push(...mod.default());
  }

  await rm(DIST, { recursive: true, force: true });
  await mkdir(DIST, { recursive: true });

  const out = new Map();
  for (const page of pages) {
    const file = page.path.endsWith('.html') ? page.path : join(page.path, 'index.html');
    const htmlText = layout(page);
    out.set(page.path, htmlText);
    await mkdir(dirname(join(DIST, file)), { recursive: true });
    await writeFile(join(DIST, file), htmlText);
  }

  // 3. Assets: CSS theme + static files
  const p = config.palette;
  const vars = Object.entries(p).map(([k, v]) => `  --c-${kebab(k)}: ${v};`).join('\n');
  const theme = `:root {\n${vars}\n  --font-display: ${config.fonts.display};\n  --font-body: ${config.fonts.body};\n  --font-mono: ${config.fonts.mono};\n  --tile: ${tile(p)};\n}\n`;
  const css = await readFile(join(ROOT, 'src/assets/styles.css'), 'utf8');
  await writeFile(join(DIST, 'styles.css'), theme + css);
  await writeFile(join(DIST, 'favicon.svg'), favicon(config));
  for (const f of await readdir(join(ROOT, 'src/assets'))) {
    if (f.endsWith('.js')) await cp(join(ROOT, 'src/assets', f), join(DIST, f));
  }
  const urls = pages.filter((pg) => !pg.path.endsWith('.html')).map((pg) => `  <url><loc>${config.siteUrl}${pg.path}</loc></url>`);
  await writeFile(join(DIST, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`);
  await writeFile(join(DIST, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${config.siteUrl}/sitemap.xml\n`);

  // 4. Content checks
  const files = new Set(['/styles.css', '/favicon.svg', '/sitemap.xml', '/robots.txt',
    ...(await readdir(join(ROOT, 'src/assets'))).filter((f) => f.endsWith('.js')).map((f) => '/' + f)]);
  let turkeyCount = 0;
  for (const [path, text] of out) {
    // Internal links and anchors
    for (const [, href] of text.matchAll(/(?:href|src)="(\/[^"]*)"/g)) {
      const [target, hash] = href.split('#');
      const clean = target.split('?')[0] || path;
      if (!out.has(clean) && !files.has(clean)) errors.push(`${path}: broken link ${href}`);
      else if (hash && out.has(clean) && !out.get(clean).includes(`id="${hash}"`)) errors.push(`${path}: missing anchor ${href}`);
    }
    for (const [, href] of text.matchAll(/href="#([^"]+)"/g)) {
      if (!text.includes(`id="${href}"`)) errors.push(`${path}: missing anchor #${href}`);
    }
    // Headings use "Türkiye", never "Turkey"
    for (const [, h] of text.matchAll(/<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/g)) {
      if (/\bTurkey\b/.test(h)) errors.push(`${path}: heading uses "Turkey": ${h.trim()}`);
    }
    if ((text.match(/<h1[\s>]/g) || []).length !== 1) errors.push(`${path}: should have exactly one <h1>`);
    // Visible text only: drop scripts, tags and attribute values.
    const visible = text.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<head>[\s\S]*?<\/head>/, '').replace(/<[^>]+>/g, ' ');
    turkeyCount += (visible.match(/\bTurkey\b/g) || []).length;
  }
  if (turkeyCount !== 1) warnings.push(`"Turkey" appears ${turkeyCount} times in visible text (the brief asks for exactly one mention).`);

  warnings.forEach((w) => console.warn('⚠ ' + w));
  if (errors.length) {
    errors.forEach((e) => console.error('✗ ' + e));
    throw new Error(`${errors.length} check(s) failed`);
  }
  console.log(`✓ Built ${pages.length} pages to dist/ in ${Date.now() - t0} ms (contrast, links and headings checked)`);
}

if (process.argv.includes('--watch')) {
  // ES modules are cached per process, so each rebuild runs in a fresh child.
  const run = () => spawn(process.execPath, [fileURLToPath(import.meta.url)], { stdio: 'inherit' });
  run();
  let timer;
  const again = () => { clearTimeout(timer); timer = setTimeout(run, 150); };
  watch(join(ROOT, 'src'), { recursive: true }, again);
  watch(join(ROOT, 'site.config.mjs'), again);
  console.log('Watching src/ and site.config.mjs for changes…');
} else {
  await build().catch((e) => { console.error(e.message); process.exit(1); });
}
