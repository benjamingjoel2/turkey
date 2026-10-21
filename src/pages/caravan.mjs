import { html, esc, pageHead } from '../layout.mjs';
import { stops, routes } from '../data/caravan.mjs';
import { regions } from '../data/regions.mjs';
import { MAP, TURKIYE_PATH, NEIGHBOURS_PATH } from '../data/map-outline.mjs';

const project = (lon, lat) => [(lon - MAP.lon0) * MAP.k * MAP.s, (MAP.lat1 - lat) * MAP.s];
const byId = Object.fromEntries(stops.map((s, i) => [s.id, { ...s, n: i + 1, xy: project(s.lon, s.lat) }]));

// Labels drawn next to pins. Stops in the tight Cappadocia cluster rely on
// their number and the panel/list instead.
const LABELS = {
  istanbul: 'r', bursa: 'r', konya: 'l', kayseri: 'b', sivas: 'r', erzurum: 'l',
  trabzon: 'l', dogubayazit: 'b', urfa: 'b', mardin: 'b', alara: 'b',
};
const label = (s) => {
  const pos = LABELS[s.id];
  if (!pos) return '';
  const [x, y] = s.xy;
  const short = s.name.replace(/ \(.*\)/, '');
  const at = { r: [x + 22, y + 6, 'start'], l: [x - 22, y + 6, 'end'], b: [x, y + 38, 'middle'] }[pos];
  return `<text class="map-label" x="${at[0].toFixed(1)}" y="${at[1].toFixed(1)}" text-anchor="${at[2]}">${esc(short)}</text>`;
};

// The SVG map plus a story panel. `compact` is the home-page version, whose
// pins link to the full page when JavaScript is off.
export function caravanMap({ compact = false } = {}) {
  const base = compact ? '/caravan-route/' : '';
  const data = stops.map((s, i) => ({ id: s.id, n: i + 1, name: s.name, han: s.han, date: s.date, story: s.story,
    region: s.region ? `/regions/${s.region}/` : '' }));
  const first = data[0];
  return html`<div class="caravan" data-caravan>
  <div class="map-frame">
    <svg class="map" viewBox="0 0 ${MAP.width} ${MAP.height}" role="group" aria-labelledby="map-title${compact ? '-c' : ''}">
      <title id="map-title${compact ? '-c' : ''}">Map of Türkiye showing historic caravan routes and ${stops.length} stops</title>
      <rect class="map-sea" width="${MAP.width}" height="${MAP.height}"/>
      <path class="map-neighbours" d="${NEIGHBOURS_PATH}"/>
      <path class="map-land" d="${TURKIYE_PATH}"/>
      ${routes.map((r) => `<polyline class="map-route" points="${r.ids.map((id) => byId[id].xy.map((v) => v.toFixed(1)).join(',')).join(' ')}"><title>${esc(r.name)}</title></polyline>`)}
      ${Object.values(byId).map((s) => html`<a class="map-pin" href="${base}#stop-${s.id}" data-stop="${s.id}" aria-label="${s.n}. ${esc(s.name)}: ${esc(s.han)}">
        <circle cx="${s.xy[0].toFixed(1)}" cy="${s.xy[1].toFixed(1)}" r="16"/>
        <text x="${s.xy[0].toFixed(1)}" y="${(s.xy[1] + 5.5).toFixed(1)}" text-anchor="middle">${s.n}</text>
      </a>${label(s)}`)}
    </svg>
    <p class="map-key small"><span class="key-route" aria-hidden="true"></span> Main caravan roads (simplified) · <span class="key-pin" aria-hidden="true">1</span> Stop</p>
  </div>
  <div class="map-panel" aria-live="polite" data-panel>
    <p class="eyebrow">Stop ${first.n} of ${stops.length}</p>
    <h3>${esc(first.name)}</h3>
    <p class="map-han">${esc(first.han)} · ${esc(first.date)}</p>
    <p>${esc(first.story)}</p>
    <p class="small">Choose a numbered stop on the map${compact ? '' : ', or read them all below'}.</p>
  </div>
  <script type="application/json" data-stops>${JSON.stringify(data).replace(/</g, '\\u003c')}</script>
</div>`;
}

export default function caravan() {
  const regionName = Object.fromEntries(regions.map((r) => [r.slug, r.name]));
  return [{
    path: '/caravan-route/',
    title: 'The caravan-route map of Türkiye',
    description: 'An interactive map of the historic caravan roads across Türkiye, linking Seljuk caravanserais, Ottoman hans and Silk Road towns, with a short story for each stop.',
    scripts: ['/caravan.js'],
    body: html`
${pageHead({ eyebrow: 'Signature feature', title: 'The caravan roads of Türkiye',
  lede: 'From the thirteenth century the Seljuk sultans built stone caravanserais along Anatolia’s trade roads, roughly a day’s march apart. Silk, spices and news travelled between Persia, Mesopotamia and the ports of İstanbul, the Black Sea and the Mediterranean. Many of the inns still stand.' })}
<section class="section">
  <div class="wrap">${caravanMap()}</div>
</section>
<section class="section section-stone">
  <div class="wrap">
    <h2>The stops, west to east</h2>
    <ol class="stops">
      ${stops.map((s) => html`<li id="stop-${s.id}" tabindex="-1">
        <h3>${esc(s.name)}</h3>
        <p class="map-han">${esc(s.han)} · ${esc(s.date)}</p>
        <p>${esc(s.story)}</p>
        ${s.region ? `<p><a href="/regions/${s.region}/">Travel in ${esc(regionName[s.region])}</a></p>` : ''}
      </li>`)}
    </ol>
    <p class="small">Routes are simplified: in reality there were many roads, which shifted over the centuries. Dates are approximate construction dates. Map outline from <a href="https://www.naturalearthdata.com/">Natural Earth</a> (public domain).</p>
    <p>New to caravanserais? Read <a href="/journal/what-is-a-caravanserai/">what a caravanserai is and how to read one</a>.</p>
  </div>
</section>`,
  }];
}
