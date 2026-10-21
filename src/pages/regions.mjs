import { html, img, tilePanel, pageHead } from '../layout.mjs';
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

function regionPage(r, i) {
  const prev = regions[(i - 1 + regions.length) % regions.length];
  const next = regions[(i + 1) % regions.length];
  const js = journeys.filter((j) => j.regions.includes(r.slug));
  const ss = stays.filter((s) => s.region === r.slug);
  const cs = stops.filter((s) => s.region === r.slug);
  const feature = FEATURES[r.slug];
  return {
    path: `/regions/${r.slug}/`,
    title: `${r.name}, Türkiye`,
    description: `${r.summary} Travel notes on ${r.name}: what to see, what to eat, when to go and how to get there.`,
    body: html`
<article>
${pageHead({ eyebrow: `Regions of Türkiye · ${r.kicker}`, title: r.name, lede: r.summary })}
<div class="wrap">
  ${r.photos[0] ? img(r.photos[0], { eager: true, ratio: 16 / 9, className: 'wide' }) : tilePanel(r.name, 'wide')}
</div>
<section class="section">
  <div class="wrap region-grid">
    <div class="prose">
      ${r.intro.map((p) => `<p>${p}</p>`)}
      ${feature ? `<p class="callout"><a href="${feature[0]}">${feature[1]}</a></p>` : ''}
      <h2>Highlights</h2>
      <dl class="highlights">
        ${r.highlights.map(([t, d]) => `<div><dt>${t}</dt><dd>${d}</dd></div>`)}
      </dl>
      ${r.photos[1] ? img(r.photos[1], { ratio: 3 / 2, sizes: '(min-width: 64em) 40rem, 100vw' }) : ''}
    </div>
    <aside class="facts" aria-label="Practical notes">
      <h2 class="h4">What to eat</h2><p>${r.eat}</p>
      <h2 class="h4">When to go</h2><p>${r.when} <a href="/when-to-go/">Compare months</a>.</p>
      <h2 class="h4">Getting there</h2><p>${r.gettingThere}</p>
      ${cs.length ? html`<h2 class="h4">On the caravan route</h2><ul class="plain">${cs.map((s) => `<li><a href="/caravan-route/#stop-${s.id}">${s.han}</a></li>`)}</ul>` : ''}
      ${js.length ? html`<h2 class="h4">Sample journeys</h2><ul class="plain">${js.map((j) => `<li><a href="/journeys/#${j.slug}">${j.title}</a></li>`)}</ul>` : ''}
      ${ss.length ? html`<h2 class="h4">Stays</h2><ul class="plain">${ss.map((s) => `<li>${s.name}</li>`)}</ul><p class="small"><a href="/stays/">About our stays</a></p>` : ''}
    </aside>
  </div>
</section>
<nav class="wrap pager" aria-label="More regions">
  <a href="/regions/${prev.slug}/" rel="prev"><span class="small">Previous region</span> ${prev.name}</a>
  <a href="/regions/${next.slug}/" rel="next"><span class="small">Next region</span> ${next.name}</a>
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
${pageHead({ eyebrow: 'Where to go', title: 'Regions of Türkiye', lede: 'Türkiye is a big country: İstanbul to Lake Van is around 1,250 km in a straight line, about the distance from London to Vienna. Choose two or three regions and give each time.' })}
<section class="section"><div class="wrap"><ul class="cards">${regions.map(regionCard)}</ul></div></section>`,
    },
    ...regions.map(regionPage),
  ];
}
