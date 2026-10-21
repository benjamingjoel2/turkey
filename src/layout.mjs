// Shared layout and small HTML helpers used by every page.
import config from '../site.config.mjs';
import { photos } from './data/photos.mjs';
import { sources } from './data/sources.mjs';

export const esc = (s = '') =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Tagged template that joins arrays, so `${list.map(...)}` needs no .join('').
export const html = (strings, ...values) =>
  strings.reduce((out, s, i) => {
    const v = values[i - 1];
    return out + (Array.isArray(v) ? v.join('') : v ?? '') + s;
  });

const WIDTHS = [480, 800, 1200, 1600, 2000];
const cdn = (src, w, h) =>
  `${src}&w=${w}${h ? `&h=${h}` : ''}&fit=crop&crop=entropy&auto=format&q=68`;

// Responsive Unsplash image with its credit underneath.
// ratio: crop to this width/height ratio (e.g. 16/9); defaults to the original.
export function img(key, { sizes = '100vw', eager = false, ratio, className = '', caption = '' } = {}) {
  const p = photos[key];
  if (!p) throw new Error(`Unknown photo "${key}" (add it to src/data/photos.mjs)`);
  const r = ratio || p.w / p.h;
  const srcset = WIDTHS.map((w) => `${cdn(p.src, w, Math.round(w / r))} ${w}w`).join(', ');
  const h = Math.round(1200 / r);
  return html`<figure class="photo ${className}">
  <img src="${esc(cdn(p.src, 1200, h))}" srcset="${esc(srcset)}" sizes="${sizes}" width="1200" height="${h}"
    alt="${esc(p.alt)}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">
  <figcaption>${caption ? `<span class="photo-caption">${caption}</span> ` : ''}<span class="credit">${esc(p.place)}. Photo: <a href="${p.profile}">${esc(p.name)}</a> on <a href="${p.unsplash}">Unsplash</a></span></figcaption>
</figure>`;
}

// A decorative tile panel used where no location-verified photo exists yet.
export function tilePanel(label, className = '') {
  return html`<figure class="photo tile-panel ${className}" role="img" aria-label="${esc(label)}">
  <div class="tile-panel-inner"><span>${esc(label)}</span></div>
  <figcaption><span class="credit">No location-verified photo yet: see <a href="/credits/">credits</a>.</span></figcaption>
</figure>`;
}

const NAV = [
  ['/regions/', 'Regions'],
  ['/caravan-route/', 'Caravan route'],
  ['/food/', 'Food'],
  ['/journeys/', 'Journeys'],
  ['/when-to-go/', 'When to go'],
  ['/stays/', 'Stays'],
  ['/journal/', 'Journal'],
  ['/about/', 'About'],
];

export function layout({ path, title, description, body, scripts = [], bodyClass = '' }) {
  const { brand, siteUrl, contact, locale } = config;
  const fullTitle = path === '/' ? `${brand.name}: ${brand.tagline}` : `${title} · ${brand.name}`;
  const current = (href) => (path === href || (href !== '/' && path.startsWith(href)) ? ' aria-current="page"' : '');
  return html`<!doctype html>
<html lang="${locale}" class="no-js">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(fullTitle)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${siteUrl}${path}">
<meta property="og:title" content="${esc(fullTitle)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${esc(brand.name)}">
<meta name="theme-color" content="${config.palette.iznikDeep}">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://images.unsplash.com">
<link rel="stylesheet" href="/styles.css">
<script>document.documentElement.classList.replace('no-js','js')</script>
</head>
<body class="${bodyClass}">
<a class="skip" href="#main">Skip to content</a>
<header class="site-header">
  <div class="tile-strip" aria-hidden="true"></div>
  <div class="wrap header-inner">
    <a class="brand" href="/"><span class="brand-mark" aria-hidden="true">${esc(brand.monogram)}</span><span class="brand-name">${esc(brand.name)}</span></a>
    <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav">Menu</button>
    <nav id="site-nav" class="site-nav" aria-label="Main">
      <ul>
        ${NAV.map(([href, label]) => `<li><a href="${href}"${current(href)}>${label}</a></li>`)}
        <li><a class="btn btn-small" href="/enquire/"${current('/enquire/')}>Enquire</a></li>
      </ul>
    </nav>
  </div>
</header>
<main id="main">
${body}
${pageSources(path)}
</main>
<footer class="site-footer">
  <div class="wrap footer-grid">
    <div>
      <p class="footer-brand">${esc(brand.name)}</p>
      <p>${esc(brand.tagline)}.</p>
      <p class="small">${esc(brand.nameStory)}</p>
    </div>
    <div>
      <h2 class="footer-h">Plan</h2>
      <ul class="plain">
        <li><a href="/caravan-route/">Caravan-route map</a></li>
        <li><a href="/balloon-guide/">Cappadocia balloon guide</a></li>
        <li><a href="/lycian-way/">Lycian Way planner</a></li>
        <li><a href="/etiquette/">Mosques &amp; Ramadan</a></li>
        <li><a href="/when-to-go/">When to go</a></li>
      </ul>
    </div>
    <div>
      <h2 class="footer-h">Contact</h2>
      <ul class="plain">
        <li><a href="mailto:${esc(contact.email)}">${esc(contact.email)}</a></li>
        <li><a href="tel:${esc(contact.phone.replace(/\s/g, ''))}">${esc(contact.phone)}</a></li>
        ${contact.whatsapp ? `<li><a href="https://wa.me/${esc(contact.whatsapp.replace(/\D/g, ''))}">WhatsApp</a></li>` : ''}
        ${contact.instagram ? `<li><a href="${esc(contact.instagram)}">Instagram</a></li>` : ''}
        <li>${esc(contact.address)}</li>
        <li class="small">${esc(contact.hours)}</li>
      </ul>
    </div>
  </div>
  <div class="wrap footer-base small">
    <p>Visa rules, opening hours, ticket prices and seasons change. We check them, but please confirm with official sources before you travel. <a href="/sources/">Sources</a> · Photos: <a href="/credits/">credits</a>.</p>
    <p>© ${new Date().getFullYear()} ${esc(brand.name)}</p>
  </div>
</footer>
<script src="/main.js" defer></script>
${scripts.map((s) => `<script src="${s}" defer></script>`)}
</body>
</html>
`;
}

// References for facts on this page (from src/data/sources.mjs).
function pageSources(path) {
  const list = sources.filter((s) => s.where.includes(path));
  if (!list.length) return '';
  return html`<aside class="page-sources wrap" aria-labelledby="page-sources-h">
  <h2 id="page-sources-h" class="h4">Sources for this page</h2>
  <ul>${list.map((s) => html`<li><strong>${esc(s.topic)}:</strong> ${s.refs.map(([t, u]) => `<a href="${esc(u)}">${esc(t)}</a>`).join('; ')}</li>`)}</ul>
  <p class="small">Checked October 2026. Details change: see <a href="/sources/">all sources</a>.</p>
</aside>`;
}

// Page intro block used at the top of most pages.
export const pageHead = ({ eyebrow = '', title, lede = '' }) => html`<header class="page-head">
  <div class="wrap">
    ${eyebrow ? `<p class="eyebrow">${eyebrow}</p>` : ''}
    <h1>${title}</h1>
    ${lede ? `<p class="lede">${lede}</p>` : ''}
  </div>
</header>`;
