import { html, esc, photoHero, marker, coords, nn } from '../layout.mjs';
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
  const at = { r: [x + 22, y + 5, 'start'], l: [x - 22, y + 5, 'end'], b: [x, y + 36, 'middle'] }[pos];
  return `<text class="map-label" x="${at[0].toFixed(1)}" y="${at[1].toFixed(1)}" text-anchor="${at[2]}">${esc(short)}</text>`;
};

// The SVG map plus a story panel. `compact` is the home-page version, whose
// pins link to the full page when JavaScript is off.
export function caravanMap({ compact = false } = {}) {
  const base = compact ? '/caravan-route/' : '';
  const data = stops.map((s, i) => ({ id: s.id, n: i + 1, name: s.name, han: s.han, date: s.date, story: s.story,
    coords: coords(s.lat, s.lon), region: s.region ? `/regions/${s.region}/` : '' }));
  const first = data[0];
  const id = compact ? 'map-title-c' : 'map-title';
  return html`<div class="caravan" data-caravan>
  <div class="map-frame">
    <svg class="map" viewBox="0 0 ${MAP.width} ${MAP.height}" role="group" aria-labelledby="${id}">
      <title id="${id}">Map of Türkiye showing historic caravan routes and ${stops.length} stops</title>
      <rect class="map-sea" width="${MAP.width}" height="${MAP.height}"/>
      <path class="map-neighbours" d="${NEIGHBOURS_PATH}"/>
      <path class="map-land" d="${TURKIYE_PATH}"/>
      ${routes.map((r) => `<polyline class="map-route" points="${r.ids.map((i) => byId[i].xy.map((v) => v.toFixed(1)).join(',')).join(' ')}"><title>${esc(r.name)}</title></polyline>`)}
      ${Object.values(byId).map((s) => html`<a class="map-pin" href="${base}#stop-${s.id}" data-stop="${s.id}" aria-label="${s.n}. ${esc(s.name)}: ${esc(s.han)}">
        <circle cx="${s.xy[0].toFixed(1)}" cy="${s.xy[1].toFixed(1)}" r="15"/>
        <text x="${s.xy[0].toFixed(1)}" y="${(s.xy[1] + 4.5).toFixed(1)}" text-anchor="middle">${s.n}</text>
      </a>${label(s)}`)}
    </svg>
    <p class="map-key"><span class="key-route" aria-hidden="true"></span> Caravan roads (simplified) <span aria-hidden="true">·</span> <span class="key-pin" aria-hidden="true">1</span> Stop</p>
  </div>
  <div class="map-panel" aria-live="polite" data-panel>
    <p class="mono">${nn(first.n)} / ${nn(stops.length)} · ${first.coords}</p>
    <h3>${esc(first.name)}</h3>
    <p class="map-han">${esc(first.han)}, ${esc(first.date)}</p>
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
<section class="section section-dark">
  <div class="wrap">
    <div class="section-head">
      <div>${marker(1, 'Signature feature')}<h1 class="display" style="font-size:clamp(2.75rem,7vw,6rem)">The caravan roads of <em>Türkiye</em></h1></div>
      <p class="lede">From the thirteenth century the Seljuk sultans built stone caravanserais along Anatolia’s trade roads, roughly a day’s march apart. Silk, spices and news travelled between Persia, Mesopotamia and the ports. Many of the inns still stand.</p>
    </div>
    ${caravanMap()}
  </div>
</section>
<section class="section">
  <div class="wrap">
    <div class="section-head">
      <div>${marker(2, 'West to east')}<h2>Fourteen <em>stops</em></h2></div>
      <p class="lede">Routes are simplified: there were many roads, and they shifted over the centuries. Dates are approximate construction dates.</p>
    </div>
    <ol class="stops">
      ${stops.map((s, i) => html`<li id="stop-${s.id}" tabindex="-1">
        <span class="s-n">${nn(i + 1)}</span>
        <div>
          <h3>${esc(s.name)}</h3>
          <span class="mono">${coords(s.lat, s.lon)}</span>
          <p class="map-han">${esc(s.han)}, ${esc(s.date)}</p>
          <p>${esc(s.story)}</p>
          ${s.region ? `<p><a href="/regions/${s.region}/">Travel in ${esc(regionName[s.region])}</a></p>` : ''}
        </div>
      </li>`)}
    </ol>
    <p class="small" style="margin-top:2rem">Map outline from <a href="https://www.naturalearthdata.com/">Natural Earth</a> (public domain). New to caravanserais? Read <a href="/journal/what-is-a-caravanserai/">what a caravanserai is and how to read one</a>.</p>
  </div>
</section>`,
  }];
}
