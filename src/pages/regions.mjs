import { html, img, tilePanel, photoHero, pageHead, marker, coords, nn, arrow, star } from '../layout.mjs';
import { regions } from '../data/regions.mjs';
import { journeys } from '../data/journeys.mjs';
import { stays } from '../data/stays.mjs';
import { stops } from '../data/caravan.mjs';
import { regionCard } from './home.mjs';

// Extra "plan this" links shown on particular region pages.
const FEATURES = {
  cappadocia: ['/balloon-guide/', 'Before you go: the Cappadocia balloon guide'],
  'lycian-coast': ['/lycian-way/', 'Plan your Lycian Way stages'],
  istanbul: ['/etiquette/', 'Visiting mosques: a short, respectful guide'],
};

const shortName = (r) => r.name.replace(/:.*/, '');

function regionPage(r, i) {
  const prev = regions[(i - 1 + regions.length) % regions.length];
  const next = regions[(i + 1) % regions.length];
  const js = journeys.filter((j) => j.regions.includes(r.slug));
  const ss = stays.filter((s) => s.region === r.slug);
  const cs = stops.filter((s) => s.region === r.slug);
  const feature = FEATURES[r.slug];
  const [title, sub] = r.name.split(': ');
  return {
    path: `/regions/${r.slug}/`,
    title: `${r.name}, Türkiye`,
    description: `${r.summary} Travel notes on ${r.name}: what to see, what to eat, when to go and how to get there.`,
    body: html`
<article>
${r.photos[0]
  ? photoHero({ photo: r.photos[0], eyebrow: `Region ${nn(i + 1)} / ${nn(regions.length)} · ${r.kicker}`, title: sub ? `${title}: <em>${sub}</em>` : title, lede: r.summary, meta: coords(r.lat, r.lon) })
  : html`<section class="hero hero-tall" data-hero>
      <div class="hero-media tile-panel-inner" aria-hidden="true">${star(120)}</div>
      <div class="hero-scrim" aria-hidden="true"></div>
      <div class="hero-content wrap">
        <p class="eyebrow eyebrow-light">Region ${nn(i + 1)} / ${nn(regions.length)} · ${r.kicker}</p>
        <h1 class="display">${r.name}</h1>
        <div class="hero-foot"><p class="lede">${r.summary}</p></div>
      </div>
      <p class="hero-meta wrap"><span class="mono">${coords(r.lat, r.lon)}</span><span>No location-verified photo yet</span></p>
    </section>`}
<section class="section">
  <div class="wrap region-grid">
    <aside class="facts" aria-label="Practical notes">
      <div><p class="mono-label">What to eat</p><p>${r.eat}</p></div>
      <div><p class="mono-label">When to go</p><p>${r.when} <a href="/when-to-go/">Compare months</a></p></div>
      <div><p class="mono-label">Getting there</p><p>${r.gettingThere}</p></div>
      ${cs.length ? html`<div><p class="mono-label">On the caravan route</p><ul class="plain">${cs.map((s) => `<li><a href="/caravan-route/#stop-${s.id}">${s.han}</a></li>`)}</ul></div>` : ''}
      ${js.length ? html`<div><p class="mono-label">Sample journeys</p><ul class="plain">${js.map((j) => `<li><a href="/journeys/#${j.slug}">${j.title}</a></li>`)}</ul></div>` : ''}
      ${ss.length ? html`<div><p class="mono-label">Stays</p><ul class="plain">${ss.map((s) => `<li>${s.name}</li>`)}</ul><p class="small"><a href="/stays/">About our stays</a></p></div>` : ''}
    </aside>
    <div>
      <div class="region-intro prose reveal">
        ${r.intro.map((p) => `<p>${p}</p>`)}
        ${feature ? `<p class="callout"><a href="${feature[0]}">${feature[1]} →</a></p>` : ''}
      </div>
      ${marker(1, 'Highlights')}
      <ol class="highlights">
        ${r.highlights.map(([t, d], n) => html`<li class="reveal"><span class="h-n">${nn(n + 1)}</span><div><h3>${t}</h3><p>${d}</p></div></li>`)}
      </ol>
      ${r.photos[1] ? `<div class="reveal">${img(r.photos[1], { ratio: 3 / 2, sizes: '(min-width: 62em) 60vw, 100vw' })}</div>` : ''}
    </div>
  </div>
</section>
<nav class="wrap pager" aria-label="More regions">
  <a href="/regions/${prev.slug}/" rel="prev"><span class="mono-label">← Previous region</span><strong>${shortName(prev)}</strong></a>
  <a href="/regions/${next.slug}/" rel="next"><span class="mono-label">Next region →</span><strong>${shortName(next)}</strong></a>
</nav>
</article>`,
  };
}

export default function regionPages() {
  return [
    {
      path: '/regions/',
      title: 'Regions of Türkiye',
      description: 'Eight regions of Türkiye for curious travellers: İstanbul, Cappadocia, the Aegean, Pamukkale, the Lycian coast, the Black Sea, the southeast and Lake Van.',
      body: html`
${pageHead({ eyebrow: 'Where to go', title: 'Regions of <em>Türkiye</em>', lede: 'Türkiye is a big country: İstanbul to Lake Van is around 1,250 km in a straight line, about the distance from London to Vienna. Choose two or three regions and give each time.' })}
<section class="section"><div class="wrap"><ul class="cards">${regions.map(regionCard)}</ul></div></section>`,
    },
    ...regions.map(regionPage),
  ];
}
