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

// "38.64° N · 34.83° E"
export const coords = (lat, lon) =>
  `${Math.abs(lat).toFixed(2)}° ${lat >= 0 ? 'N' : 'S'} · ${Math.abs(lon).toFixed(2)}° ${lon >= 0 ? 'E' : 'W'}`;

// Two-digit index: 1 → "01"
export const nn = (n) => String(n).padStart(2, '0');

// The brand mark: an eight-pointed Seljuk star, as carved on caravanserai portals.
export function star(size = 24, className = 'star') {
  const pts = [];
  for (let i = 0; i < 16; i++) {
    const a = (Math.PI / 8) * i - Math.PI / 2;
    const r = i % 2 ? 7.65 : 10;
    pts.push(`${(12 + r * Math.cos(a)).toFixed(2)},${(12 + r * Math.sin(a)).toFixed(2)}`);
  }
  return `<svg class="${className}" width="${size}" height="${size}" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><polygon points="${pts.join(' ')}" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/><circle cx="12" cy="12" r="2.6" fill="currentColor"/></svg>`;
}

export const arrow = '<svg class="arrow" width="14" height="14" viewBox="0 0 14 14" aria-hidden="true" focusable="false"><path d="M2 7h9M7.5 3.5 11 7l-3.5 3.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';

// Pill button with an arrow disc.
export const button = (href, label, variant = '') =>
  `<a class="btn ${variant}" href="${href}"><span>${label}</span><span class="btn-disc">${arrow}</span></a>`;

const WIDTHS = [480, 800, 1200, 1600, 2000, 2600];
const cdn = (src, w, h) =>
  `${src}&w=${w}${h ? `&h=${h}` : ''}&fit=crop&crop=entropy&auto=format&q=68`;

// Responsive Unsplash image with its credit underneath.
// ratio: crop to this width/height ratio (e.g. 16/9); defaults to the original.
export function img(key, { sizes = '100vw', eager = false, ratio, className = '', credit = true } = {}) {
  const p = photos[key];
  if (!p) throw new Error(`Unknown photo "${key}" (add it to src/data/photos.mjs)`);
  const r = ratio || p.w / p.h;
  const srcset = WIDTHS.filter((w) => w <= p.w).map((w) => `${cdn(p.src, w, Math.round(w / r))} ${w}w`).join(', ');
  const h = Math.round(1200 / r);
  return html`<figure class="photo ${className}">
  <img src="${esc(cdn(p.src, 1200, h))}" srcset="${esc(srcset)}" sizes="${sizes}" width="1200" height="${h}"
    alt="${esc(p.alt)}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">
  ${credit ? photoCredit(key) : ''}
</figure>`;
}

export const photoCredit = (key) => {
  const p = photos[key];
  return `<figcaption class="credit">${esc(p.place)} · Photo <a href="${p.profile}">${esc(p.name)}</a> / <a href="${p.unsplash}">Unsplash</a></figcaption>`;
};

// A decorative tile panel used where no location-verified photo exists yet.
export function tilePanel(label, className = '') {
  return html`<figure class="photo tile-panel ${className}" role="img" aria-label="${esc(label)}">
  <div class="tile-panel-inner">${star(56)}<span>${esc(label)}</span></div>
  <figcaption class="credit">No location-verified photo yet · <a href="/credits/">credits</a></figcaption>
</figure>`;
}

// Full-bleed photo hero with the title over it. The header turns transparent
// over any page that starts with one (see `data-hero` in layout()).
export function photoHero({ photo, eyebrow = '', title, lede = '', meta = '', actions = '', size = 'tall' }) {
  return html`<section class="hero hero-${size}" data-hero>
  ${photo ? img(photo, { eager: true, className: 'hero-media', credit: false }) : `<div class="hero-media tile-bg"></div>`}
  <div class="hero-scrim" aria-hidden="true"></div>
  <div class="hero-content wrap">
    ${eyebrow ? `<p class="eyebrow eyebrow-light">${eyebrow}</p>` : ''}
    <h1 class="display">${title}</h1>
    ${lede || actions ? html`<div class="hero-foot">${lede ? `<p class="lede">${lede}</p>` : ''}${actions ? `<div class="actions">${actions}</div>` : ''}</div>` : ''}
  </div>
  ${meta || photo ? html`<p class="hero-meta wrap"><span class="mono">${meta}</span>${photo ? `<span class="hero-credit">${photoCredit(photo).replace('figcaption', 'span').replace('</figcaption>', '</span>')}</span>` : ''}</p>` : ''}
</section>`;
}

// Text page intro used on pages without a photo hero.
export const pageHead = ({ eyebrow = '', title, lede = '' }) => html`<header class="page-head">
  <div class="wrap">
    ${eyebrow ? `<p class="eyebrow">${eyebrow}</p>` : ''}
    <h1 class="display">${title}</h1>
    ${lede ? `<p class="lede">${lede}</p>` : ''}
  </div>
</header>`;

// Small "(01) Label" section marker.
export const marker = (n, label) => `<p class="marker"><span class="mono">(${nn(n)})</span> ${label}</p>`;

const NAV = [
  ['/regions/', 'Regions'],
  ['/caravan-route/', 'Caravan route'],
  ['/journeys/', 'Journeys'],
  ['/food/', 'Food'],
  ['/when-to-go/', 'When to go'],
  ['/stays/', 'Stays'],
  ['/journal/', 'Journal'],
  ['/about/', 'About'],
];

// References for facts on this page (from src/data/sources.mjs).
function pageSources(path) {
  const list = sources.filter((s) => s.where.includes(path));
  if (!list.length) return '';
  return html`<aside class="page-sources" aria-labelledby="page-sources-h">
  <div class="wrap">
    <h2 id="page-sources-h" class="mono-label">Sources for this page</h2>
    <ul>${list.map((s) => html`<li><strong>${esc(s.topic)}:</strong> ${s.refs.map(([t, u]) => `<a href="${esc(u)}">${esc(t)}</a>`).join('; ')}</li>`)}</ul>
    <p class="small">Checked October 2026. Details change: see <a href="/sources/">all sources</a>.</p>
  </div>
</aside>`;
}

export function layout({ path, title, description, body, scripts = [] }) {
  const { brand, siteUrl, contact, locale, fonts, palette } = config;
  const fullTitle = path === '/' ? `${brand.name}: ${brand.tagline}` : `${title} · ${brand.name}`;
  const current = (href) => (path === href || (href !== '/' && path.startsWith(href)) ? ' aria-current="page"' : '');
  const overlay = body.includes('data-hero');
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
<meta name="theme-color" content="${palette.iznikDeep}">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://images.unsplash.com">
${fonts.googleHref ? `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="${fonts.googleHref.replace(/&/g, '&amp;')}">` : ''}
<link rel="stylesheet" href="/styles.css">
<script>document.documentElement.classList.replace('no-js','js')</script>
</head>
<body class="${overlay ? 'has-hero' : ''}">
<a class="skip" href="#main">Skip to content</a>
<header class="site-header" data-header>
  <div class="header-inner wrap">
    <a class="brand" href="/" aria-label="${esc(brand.name)}, home">${star(26)}<span class="brand-name">${esc(brand.name)}</span></a>
    <nav class="site-nav" id="site-nav" aria-label="Main">
      <ol>
        ${NAV.map(([href, label], i) => `<li><a href="${href}"${current(href)}><span class="nav-n mono" aria-hidden="true">${nn(i + 1)}</span><span class="nav-t">${label}</span></a></li>`)}
      </ol>
      <div class="nav-extra">
        <p class="mono-label">Contact</p>
        <p><a href="mailto:${esc(contact.email)}">${esc(contact.email)}</a><br><a href="tel:${esc(contact.phone.replace(/\s/g, ''))}">${esc(contact.phone)}</a></p>
      </div>
    </nav>
    <div class="header-actions">
      <a class="btn btn-small btn-header" href="/enquire/"${current('/enquire/')}><span>Enquire</span><span class="btn-disc">${arrow}</span></a>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav"><span class="nav-toggle-label">Menu</span><span class="nav-toggle-bars" aria-hidden="true"></span></button>
    </div>
  </div>
</header>
<main id="main">
${body}
${pageSources(path)}
</main>
<footer class="site-footer">
  <div class="wrap">
    ${path === '/enquire/' ? '' : html`<div class="footer-cta">
      <p class="marker marker-light"><span class="mono">(→)</span> Start planning</p>
      <p class="footer-statement">Tell us what you love. We’ll plan the <em>unhurried</em> way.</p>
      <div class="actions">${button('/enquire/', 'Start an enquiry', 'btn-light')}<a class="btn-text" href="mailto:${esc(contact.email)}">${esc(contact.email)}</a></div>
    </div>`}
    <div class="footer-grid">
      <div>
        <p class="mono-label">Explore</p>
        <ul class="plain">${NAV.slice(0, 4).map(([h, l]) => `<li><a href="${h}">${l}</a></li>`)}</ul>
      </div>
      <div>
        <p class="mono-label">Before you go</p>
        <ul class="plain">
          <li><a href="/balloon-guide/">Balloon guide</a></li>
          <li><a href="/lycian-way/">Lycian Way planner</a></li>
          <li><a href="/etiquette/">Mosques &amp; Ramadan</a></li>
          <li><a href="/when-to-go/">When to go</a></li>
        </ul>
      </div>
      <div>
        <p class="mono-label">Studio</p>
        <ul class="plain">${NAV.slice(5).map(([h, l]) => `<li><a href="${h}">${l}</a></li>`)}<li><a href="/sources/">Sources</a></li><li><a href="/credits/">Photo credits</a></li></ul>
      </div>
      <div>
        <p class="mono-label">Contact</p>
        <ul class="plain">
          <li><a href="tel:${esc(contact.phone.replace(/\s/g, ''))}">${esc(contact.phone)}</a></li>
          ${contact.whatsapp ? `<li><a href="https://wa.me/${esc(contact.whatsapp.replace(/\D/g, ''))}">WhatsApp</a></li>` : ''}
          ${contact.instagram ? `<li><a href="${esc(contact.instagram)}">Instagram</a></li>` : ''}
          <li>${esc(contact.address)}</li>
          <li class="small">${esc(contact.hours)}</li>
        </ul>
      </div>
    </div>
    <p class="footer-wordmark" aria-hidden="true">${star(64, 'star footer-star')}${esc(brand.shortName)}</p>
    <div class="footer-base small">
      <p>${esc(brand.nameStory)}</p>
      <p>Visa rules, opening hours, ticket prices and seasons change: please confirm with official sources before you travel.</p>
      <p class="mono">© ${new Date().getFullYear()} ${esc(brand.name)}</p>
    </div>
  </div>
</footer>
<script src="/main.js" defer></script>
${scripts.map((s) => `<script src="${s}" defer></script>`)}
</body>
</html>
`;
}
