import config from '../../site.config.mjs';
import { html, img, tilePanel } from '../layout.mjs';
import { regions } from '../data/regions.mjs';
import { journeys } from '../data/journeys.mjs';
import { caravanMap } from './caravan.mjs';

export const regionCard = (r) => html`<li class="card">
  ${r.photos[0] ? img(r.photos[0], { ratio: 4 / 3, sizes: '(min-width: 64em) 22rem, (min-width: 40em) 45vw, 100vw' }) : tilePanel(r.name)}
  <div class="card-body">
    <p class="eyebrow">${r.kicker}</p>
    <h3><a class="card-link" href="/regions/${r.slug}/">${r.name}</a></h3>
    <p>${r.summary}</p>
  </div>
</li>`;

export default function home() {
  const { brand } = config;
  return [{
    path: '/',
    title: 'Home',
    description: `${brand.name} plans slow, small journeys through Türkiye for travellers who love history and food: İstanbul, Cappadocia, the Aegean ruins, the Lycian coast and the east.`,
    body: html`
<section class="hero">
  ${img('balloons', { eager: true, ratio: 16 / 9, className: 'hero-img' })}
  <div class="hero-text">
    <div class="wrap">
      <p class="eyebrow eyebrow-light">${brand.name}</p>
      <h1>Türkiye, beyond the resort</h1>
      <p class="lede">${brand.tagline}. For curious travellers who would rather spend the afternoon in a caravanserai than by a pool.</p>
      <p class="actions"><a class="btn" href="/journeys/">See sample journeys</a> <a class="btn btn-ghost" href="/caravan-route/">Explore the caravan route</a></p>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap prose-wide intro-grid">
    <div>
      <h2>Slow travel across Türkiye</h2>
      <p>Türkiye, still often called Turkey in English, is far bigger than its beaches. In one country you can walk a Roman street at Ephesus, sleep in a cave room in Cappadocia, hike between Lycian tombs above the sea and eat breakfast for three hours beside Lake Van.</p>
      <p>We plan small, unhurried journeys around history and food: fewer places, more time in each, with spare days built in for the weather and for whatever you find along the way.</p>
    </div>
    <ul class="principles">
      <li><strong>Small and private.</strong> Journeys for you and your companions, not coach groups.</li>
      <li><strong>Time to linger.</strong> Sites at opening time, long lunches, rest days.</li>
      <li><strong>Honest planning.</strong> We tell you what can go wrong, from balloon cancellations to summer heat.</li>
    </ul>
  </div>
</section>

<section class="section section-stone">
  <div class="wrap">
    <div class="section-head">
      <h2>Regions of Türkiye</h2>
      <a href="/regions/">All regions</a>
    </div>
    <ul class="cards">${regions.map(regionCard)}</ul>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="section-head">
      <h2>Following the caravans</h2>
      <a href="/caravan-route/">Open the full map</a>
    </div>
    <p class="lede-sm">For seven centuries caravans crossed Anatolia from Persia and Mesopotamia to İstanbul and the coasts, sleeping in stone inns a day’s march apart. Choose a stop to read its story.</p>
    ${caravanMap({ compact: true })}
  </div>
</section>

<section class="section section-blue">
  <div class="wrap">
    <h2>Before you go</h2>
    <ul class="features">
      <li><a href="/balloon-guide/"><span class="feature-k">Cappadocia</span><strong>The balloon guide</strong><span>When flights run, why they’re cancelled for wind, and how to plan spare mornings.</span></a></li>
      <li><a href="/lycian-way/"><span class="feature-k">Lycian coast</span><strong>Lycian Way planner</strong><span>Pick stages and see distance, difficulty and where to sleep.</span></a></li>
      <li><a href="/etiquette/"><span class="feature-k">Everywhere</span><strong>Mosques and Ramadan</strong><span>Short, respectful notes for visiting mosques and travelling during the fasting month.</span></a></li>
      <li><a href="/when-to-go/"><span class="feature-k">Planning</span><strong>When to go</strong><span>Month by month, region by region.</span></a></li>
    </ul>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="section-head">
      <h2>Sample journeys</h2>
      <a href="/journeys/">All journeys</a>
    </div>
    <ul class="journey-list">
      ${journeys.slice(0, 3).map((j) => html`<li><a href="/journeys/#${j.slug}"><strong>${j.title}</strong><span>${j.days} days · ${j.pace}</span></a></li>`)}
    </ul>
  </div>
</section>

<section class="section section-stone cta">
  <div class="wrap narrow">
    <h2>Tell us what you love</h2>
    <p>History, food, walking, quiet: tell us what you’re after and roughly when, and we’ll suggest a route. No obligation.</p>
    <p><a class="btn" href="/enquire/">Start an enquiry</a></p>
  </div>
</section>`,
    scripts: ['/caravan.js'],
  }];
}
