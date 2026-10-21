// Journeys, When to go and Stays.
import { html, img, tilePanel, pageHead, esc } from '../layout.mjs';
import { journeys } from '../data/journeys.mjs';
import { regions } from '../data/regions.mjs';
import { stays } from '../data/stays.mjs';
import { seasons, MONTHS, RATING } from '../data/seasons.mjs';

const regionBy = Object.fromEntries(regions.map((r) => [r.slug, r]));

function journeysPage() {
  return {
    path: '/journeys/',
    title: 'Sample journeys in Türkiye',
    description: 'Sample itineraries across Türkiye: İstanbul and Cappadocia, the Aegean ruins and Pamukkale, the Lycian Way, Upper Mesopotamia and the far east to Lake Van.',
    body: html`
${pageHead({ eyebrow: 'Journeys', title: 'Sample journeys through Türkiye',
  lede: 'Starting points, not fixed packages. Every journey is planned around you: your dates, your pace, the things you love. Prices depend on season and stays, so we quote each one individually.' })}
<section class="section">
  <div class="wrap journeys">
    ${journeys.map((j) => {
      const r = regionBy[j.regions[0]];
      return html`<article class="journey" id="${j.slug}">
      <div class="journey-media">${r.photos[0] ? img(r.photos[0], { ratio: 4 / 3, sizes: '(min-width: 48em) 24rem, 100vw' }) : tilePanel(r.name)}</div>
      <div class="journey-body">
        <h2>${j.title}</h2>
        <p class="journey-meta">${j.days} days · ${j.pace} · ${j.regions.map((s) => `<a href="/regions/${s}/">${regionBy[s].name}</a>`).join(', ')}</p>
        <p>${j.for}</p>
        <ol class="itinerary">
          ${j.days_.map(([d, place, what]) => html`<li><span class="it-day">Day ${d}</span><span class="it-place">${place}</span><span class="it-what">${what}</span></li>`)}
        </ol>
        <p><a class="btn btn-small" href="/enquire/?journey=${j.slug}">Ask about this journey</a></p>
      </div>
    </article>`;
    })}
  </div>
</section>`,
  };
}

function whenPage() {
  return {
    path: '/when-to-go/',
    title: 'When to go to Türkiye',
    description: 'The best months to visit each region of Türkiye, plus notes on summer heat, winter, public holidays and Ramadan.',
    body: html`
${pageHead({ eyebrow: 'Planning', title: 'When to go to Türkiye',
  lede: 'Spring and autumn suit almost everywhere. Summer is for the sea, the Black Sea and the high east; winter is for İstanbul, snowy Cappadocia and empty sites.' })}
<section class="section">
  <div class="wrap">
    <h2>Month by month</h2>
    <p class="legend" aria-hidden="true"><span class="rate rate-3">Best</span> <span class="rate rate-2">Good</span> <span class="rate rate-1">Hard</span></p>
    <div class="table-scroll" role="region" aria-labelledby="season-caption" tabindex="0">
      <table class="seasons">
        <caption id="season-caption">How each region suits each month. “Hard” means possible, but with heat, cold, rain or closures.</caption>
        <thead><tr><th scope="col">Region</th>${MONTHS.map((m) => `<th scope="col">${m}</th>`)}</tr></thead>
        <tbody>
          ${seasons.map((s) => html`<tr><th scope="row"><a href="/regions/${s.region}/">${s.label}</a><span class="small">${s.note}</span></th>${s.months.map((v, i) => `<td class="rate-${v}"><span class="visually-hidden">${MONTHS[i]}: </span>${RATING[v]}</td>`)}</tr>`)}
        </tbody>
      </table>
    </div>
  </div>
</section>
<section class="section section-stone">
  <div class="wrap two-col">
    <div class="prose">
      <h2>Seasons in brief</h2>
      <ul>
        <li><strong>Spring (April–May).</strong> Wildflowers, mild days, good walking everywhere. Easter and early May are busy at the big sites.</li>
        <li><strong>Summer (June–August).</strong> Very hot inland and on the Aegean and southeast sites: start early, rest at midday. The best time for the Black Sea, the Kaçkars and Lake Van.</li>
        <li><strong>Autumn (September–November).</strong> Warm sea into October, harvest food, softer light. Our favourite season.</li>
        <li><strong>Winter (December–March).</strong> Cold and grey in İstanbul, snow in Cappadocia and the east, quiet sites and lower prices. Some coastal hotels close.</li>
      </ul>
    </div>
    <div class="prose">
      <h2>Holidays and Ramadan</h2>
      <p>Two long religious holidays, <strong>Ramazan Bayramı</strong> and <strong>Kurban Bayramı</strong>, move about eleven days earlier each year. During them, transport and hotels fill as families travel. Plan and book early.</p>
      <p>National holidays include 23 April, 1 May, 19 May, 15 July, 30 August and 29 October (Republic Day).</p>
      <p>Travelling during Ramadan is easy and can be rewarding. Read our <a href="/etiquette/#ramadan">notes on travelling in Ramadan</a>.</p>
      <p>Thinking of a balloon flight? See <a href="/balloon-guide/">the balloon guide</a> for the seasons.</p>
    </div>
  </div>
</section>`,
  };
}

function staysPage() {
  return {
    path: '/stays/',
    title: 'Stays in Türkiye',
    description: 'The kinds of places we like to stay in Türkiye: cave rooms in Cappadocia, village pensions on the Lycian Way, restored stone houses in Mardin.',
    body: html`
${pageHead({ eyebrow: 'Stays', title: 'Where we like to stay in Türkiye',
  lede: 'Small, characterful and run by people who know their place: cave rooms, village pensions, restored Ottoman and stone houses. We choose stays for location and hospitality, not stars.' })}
<section class="section">
  <div class="wrap">
    <p class="notice"><strong>Placeholder names.</strong> The stays below are examples of the kinds of places we use, not real properties. Replace them in <code>src/data/stays.mjs</code>.</p>
    ${regions.filter((r) => stays.some((s) => s.region === r.slug)).map((r) => html`<section class="stay-region">
      <h2><a href="/regions/${r.slug}/">${r.name}</a></h2>
      <ul class="stays">
        ${stays.filter((s) => s.region === r.slug).map((s) => html`<li class="stay${s.placeholder ? ' is-placeholder' : ''}">
          <h3>${esc(s.name)}</h3>
          <p class="stay-kind">${esc(s.kind)}</p>
          <p>${esc(s.note)}</p>
        </li>`)}
      </ul>
    </section>`)}
    <p>On the Lycian Way we use small village pensions at the end of each stage: see the <a href="/lycian-way/">planner</a>.</p>
  </div>
</section>`,
  };
}

export default function plan() {
  return [journeysPage(), whenPage(), staysPage()];
}
