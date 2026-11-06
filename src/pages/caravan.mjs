import { html, esc, photoHero, marker, coords, nn } from '../layout.mjs';
import { stops, routes } from '../data/caravan.mjs';
import { regions } from '../data/regions.mjs';

// A short numbered list of the stops, used on the home page.
export function routeList(limit = stops.length) {
  return html`<ol class="route-list">
    ${stops.slice(0, limit).map((s, i) => html`<li><span class="mono">${nn(i + 1)}</span><h3>${esc(s.name)}</h3><p class="map-han">${esc(s.han)}, ${esc(s.date)}</p></li>`)}
  </ol>`;
}

export default function caravan() {
  const regionName = Object.fromEntries(regions.map((r) => [r.slug, r.name]));
  return [{
    path: '/caravan-route/',
    title: 'The caravan route across Türkiye',
    description: 'The historic caravan roads across Türkiye, linking Seljuk caravanserais, Ottoman hans and Silk Road towns, with a short story for each stop.',
    body: html`
<section class="section section-dark">
  <div class="wrap">
    <div class="section-head">
      <div>${marker(1, 'Signature feature')}<h1 class="display" style="font-size:clamp(2.75rem,7vw,6rem)">The caravan roads of <em>Türkiye</em></h1></div>
      <p class="lede">From the thirteenth century the Seljuk sultans built stone caravanserais along Anatolia’s trade roads, roughly a day’s march apart. Silk, spices and news travelled between Persia, Mesopotamia and the ports. Many of the inns still stand.</p>
    </div>
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
    <p class="small" style="margin-top:2rem">New to caravanserais? Read <a href="/journal/what-is-a-caravanserai/">what a caravanserai is and how to read one</a>.</p>
  </div>
</section>`,
  }];
}
