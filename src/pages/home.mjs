import config from '../../site.config.mjs';
import { html, img, tilePanel, photoHero, button, marker, coords, nn, arrow } from '../layout.mjs';
import { regions } from '../data/regions.mjs';
import { journeys } from '../data/journeys.mjs';
import { caravanMap } from './caravan.mjs';

export const regionCard = (r, i) => html`<li class="card reveal">
  ${r.photos[0] ? img(r.photos[0], { ratio: 4 / 5, sizes: '(min-width: 64em) 22vw, (min-width: 40em) 46vw, 100vw' }) : tilePanel(r.name)}
  <p class="card-top"><span>${nn(i + 1)}</span><span>${coords(r.lat, r.lon)}</span></p>
  <h3><a class="card-link" href="/regions/${r.slug}/">${r.name}</a></h3>
  <p class="card-sum">${r.summary}</p>
</li>`;

export default function home() {
  const { brand } = config;
  return [{
    path: '/',
    title: 'Home',
    description: `${brand.name} plans slow, small journeys through Türkiye for travellers who love history and food: İstanbul, Cappadocia, the Aegean ruins, the Lycian coast and the east.`,
    scripts: ['/caravan.js'],
    body: html`
<section class="hero hero-home" data-hero>
  ${img('balloons', { eager: true, className: 'hero-media', credit: false, sizes: '100vw' })}
  <div class="hero-scrim" aria-hidden="true"></div>
  <div class="hero-content wrap">
    <p class="eyebrow eyebrow-light">${brand.name} · Private journeys</p>
    <h1 class="display">Türkiye, <em>slowly.</em></h1>
    <div class="hero-foot">
      <p class="lede">${brand.tagline}. For curious travellers who would rather spend the afternoon in a caravanserai than by a pool.</p>
      <div class="actions">${button('/journeys/', 'Sample journeys', 'btn-light')}${button('/caravan-route/', 'The caravan route', 'btn-ghost')}</div>
    </div>
  </div>
  <nav class="hero-index" aria-label="Regions">
    <ol>
      ${regions.map((r, i) => html`<li><a href="/regions/${r.slug}/"><span class="mono">${nn(i + 1)}</span><strong>${r.name.replace(/:.*/, '')}</strong><span class="small">${r.kicker}</span></a></li>`)}
    </ol>
  </nav>
</section>

<section class="section">
  <div class="wrap intro-grid">
    ${marker(1, 'The idea')}
    <div class="reveal">
      <p class="statement">Fewer places, more time in each. We plan private journeys through Türkiye around <em>history</em> and <em>food</em>, with spare days built in for the weather and whatever you find along the way.</p>
      <p class="lede">Türkiye, still often called Turkey in English, is far bigger than its beaches. In one country you can walk a Roman street at Ephesus, sleep in a cave room in Cappadocia, hike between Lycian tombs above the sea and eat breakfast for three hours beside Lake Van.</p>
    </div>
  </div>
  <div class="wrap" style="margin-top:3.5rem">
    <ol class="numbered reveal">
      <li><span class="num">01</span><h3>Small and private</h3><p>Journeys for you and your companions, never coach groups. Family-run stays, local guides where they add something.</p></li>
      <li><span class="num">02</span><h3>Time to linger</h3><p>Sites at opening time, long lunches, rest days. Three sunrises in Cappadocia, not one.</p></li>
      <li><span class="num">03</span><h3>Honest planning</h3><p>We tell you what can go wrong, from balloon cancellations to August heat, and plan around it.</p></li>
    </ol>
  </div>
</section>

<section class="section section-stone">
  <div class="wrap">
    <div class="section-head">
      <div>${marker(2, 'Where to go')}<h2>Eight regions of <em>Türkiye</em></h2></div>
      <div class="actions"><a class="link-arrow" href="/regions/">All regions ${arrow}</a></div>
    </div>
    <ul class="cards">${regions.map(regionCard)}</ul>
  </div>
</section>

<section class="section section-dark">
  <div class="wrap">
    <div class="section-head">
      <div>${marker(3, 'Signature · The caravan road')}<h2>Follow the <em>caravans</em></h2></div>
      <p class="lede">For centuries caravans crossed Anatolia from Persia and Mesopotamia to İstanbul and the coasts, resting in stone inns a day’s march apart. Choose a stop to read its story.</p>
    </div>
    ${caravanMap({ compact: true })}
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="section-head">
      <div>${marker(4, 'Before you go')}<h2>Plan it <em>properly</em></h2></div>
      <p class="lede">Four short guides we wish every traveller read first.</p>
    </div>
    <ul class="tools reveal">
      <li><a href="/balloon-guide/"><span class="mono">01 · Cappadocia</span><strong>The balloon guide</strong><span class="t">When flights run, why they’re cancelled for wind, and how to plan spare mornings.</span><span class="link-arrow">Read ${arrow}</span></a></li>
      <li><a href="/lycian-way/"><span class="mono">02 · Lycian coast</span><strong>Lycian Way planner</strong><span class="t">Pick stages and see distance, difficulty and where you’ll sleep each night.</span><span class="link-arrow">Plan ${arrow}</span></a></li>
      <li><a href="/etiquette/"><span class="mono">03 · Everywhere</span><strong>Mosques &amp; Ramadan</strong><span class="t">Short, respectful notes on visiting mosques and travelling in the fasting month.</span><span class="link-arrow">Read ${arrow}</span></a></li>
      <li><a href="/when-to-go/"><span class="mono">04 · Planning</span><strong>When to go</strong><span class="t">Month by month, region by region, with holidays to plan around.</span><span class="link-arrow">Compare ${arrow}</span></a></li>
    </ul>
  </div>
</section>

<section class="band">
  ${img('mardin', { sizes: '100vw' })}
  <div class="wrap band-content reveal">
    ${marker(5, 'The southeast')}
    <p class="statement">Honey-stone towns above the Mesopotamian plain, and the oldest monuments yet found. The east is the <em>Türkiye</em> few people see.</p>
    ${button('/regions/southeast/', 'Göbekli Tepe &amp; Mardin', 'btn-light')}
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="section-head">
      <div>${marker(6, 'Sample journeys')}<h2>Starting points, <em>not packages</em></h2></div>
      <div class="actions"><a class="link-arrow" href="/journeys/">All journeys ${arrow}</a></div>
    </div>
    <ul class="rows reveal">
      ${journeys.map((j, i) => html`<li><a href="/journeys/#${j.slug}">
        <span class="r-n">${nn(i + 1)}</span>
        <span class="r-title">${j.title}</span>
        <span class="r-meta">${j.regions.map((s) => regions.find((r) => r.slug === s).name.replace(/:.*/, '')).join(' · ')}</span>
        <span class="r-meta">${j.days} days · ${j.pace}</span>
        <span class="r-go">${arrow}</span>
      </a></li>`)}
    </ul>
  </div>
</section>`,
  }];
}
