// About, Journal, Enquiry, Credits and 404.
import config from '../../site.config.mjs';
import { html, img, pageHead, photoHero, esc, arrow } from '../layout.mjs';
import { posts } from '../data/journal.mjs';
import { photos } from '../data/photos.mjs';
import { regions } from '../data/regions.mjs';
import { journeys } from '../data/journeys.mjs';
import { sources, CHECKED } from '../data/sources.mjs';

const fmtDate = (d) => new Date(d + 'T12:00:00Z').toLocaleDateString(config.locale, { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

function about() {
  const { brand, contact } = config;
  return {
    path: '/about/',
    title: `About ${brand.name}`,
    description: `${brand.name} plans small, slow journeys through Türkiye for travellers who love history and food.`,
    body: html`
${pageHead({ eyebrow: 'About', title: `About ${esc(brand.name)}`, lede: esc(brand.nameStory) })}
<section class="section">
  <div class="wrap two-col">
    <div class="prose">
      <h2>What we do</h2>
      <p>We plan private journeys through Türkiye for people who would rather understand a place than tick it off. That usually means fewer stops, more nights in each, sites at opening time and long lunches.</p>
      <p>We’re interested in the whole country: İstanbul and Cappadocia, yes, but also Pergamon, the Lycian Way, the tea hills of the Black Sea, Mardin and Lake Van.</p>
      <h2>How we work</h2>
      <ul>
        <li><strong>We listen first.</strong> Tell us what you love and how you like to travel; we suggest a route and refine it with you.</li>
        <li><strong>We plan for real conditions.</strong> Spare mornings in Cappadocia, early starts in summer, honest notes on what’s closed for restoration.</li>
        <li><strong>We keep things small.</strong> Family-run stays, local guides where they add something, and time on your own.</li>
      </ul>
    </div>
    <div class="prose">
      <h2>What we won’t do</h2>
      <ul>
        <li>Publish reviews, awards or press mentions we can’t show you the source for.</li>
        <li>Use a photo that wasn’t taken where we say it was. Every image is credited, with how we checked its location, on our <a href="/credits/">credits page</a>.</li>
        <li>Pretend facts never change. Visa rules, tickets and opening hours move, and we tell you to check them.</li>
      </ul>
      <h2>Contact</h2>
      <ul class="plain">
        <li>Email: <a href="mailto:${esc(contact.email)}">${esc(contact.email)}</a></li>
        <li>Phone: <a href="tel:${esc(contact.phone.replace(/\s/g, ''))}">${esc(contact.phone)}</a></li>
        <li>${esc(contact.address)}</li>
        <li>${esc(contact.hours)}</li>
      </ul>
      <p><a class="btn" href="/enquire/">Start an enquiry</a></p>
    </div>
  </div>
</section>`,
  };
}

function journal() {
  return [
    {
      path: '/journal/',
      title: 'Journal',
      description: 'Notes from the road in Türkiye: caravanserais, Cappadocia balloons, Turkish breakfasts and more.',
      body: html`
${pageHead({ eyebrow: 'Journal', title: 'Notes from <em>Türkiye</em>', lede: 'Short pieces on the history, food and practicalities behind our journeys.' })}
<section class="section">
  <div class="wrap">
    <ul class="posts">
      ${posts.map((p) => html`<li class="reveal"><a href="/journal/${p.slug}/">
        <span class="mono"><time datetime="${p.date}">${fmtDate(p.date)}</time></span>
        <h2>${p.title}</h2>
        <p>${p.summary}</p>
      </a></li>`)}
    </ul>
  </div>
</section>`,
    },
    ...posts.map((p) => ({
      path: `/journal/${p.slug}/`,
      title: p.title,
      description: p.summary,
      body: html`
<article>
${p.photo
  ? photoHero({ photo: p.photo, eyebrow: `Journal · <time datetime="${p.date}">${fmtDate(p.date)}</time>`, title: p.title, lede: p.summary, size: 'short' })
  : pageHead({ eyebrow: `Journal · <time datetime="${p.date}">${fmtDate(p.date)}</time>`, title: p.title, lede: p.summary })}
<section class="section"><div class="wrap prose">${p.body}<p><a href="/journal/">More from the journal</a></p></div></section>
</article>`,
    })),
  ];
}

function enquire() {
  const { contact, enquiry } = config;
  // Without JS the form falls back to the visitor's email app (or posts to the endpoint).
  const action = enquiry.endpoint || `mailto:${contact.email}?subject=${encodeURIComponent('Journey enquiry')}`;
  const enctype = enquiry.endpoint ? '' : ' enctype="text/plain"';
  return {
    path: '/enquire/',
    title: 'Enquire',
    description: 'Tell us about the journey through Türkiye you have in mind, and we’ll suggest a route. No obligation.',
    scripts: ['/enquiry.js'],
    body: html`
${pageHead({ eyebrow: 'Enquire', title: 'Plan a journey through <em>Türkiye</em>', lede: 'Tell us a little about your trip. We reply within two working days with questions or a first idea for a route. No obligation, no payment details.' })}
<section class="section">
  <div class="wrap form-grid">
    <form class="enquiry" method="post" action="${esc(action)}"${enctype} data-enquiry data-endpoint="${esc(enquiry.endpoint)}" data-email="${esc(contact.email)}" novalidate>
      <fieldset>
        <legend>About you</legend>
        <div class="field"><label for="f-name">Name <span class="req">(required)</span></label><input id="f-name" name="name" autocomplete="name" required></div>
        <div class="field"><label for="f-email">Email <span class="req">(required)</span></label><input id="f-email" name="email" type="email" autocomplete="email" required></div>
        <div class="field"><label for="f-phone">Phone <span class="opt">(optional)</span></label><input id="f-phone" name="phone" type="tel" autocomplete="tel"></div>
        <div class="field"><label for="f-from">Travelling from <span class="opt">(optional)</span></label><input id="f-from" name="from" autocomplete="country-name"></div>
      </fieldset>
      <fieldset>
        <legend>Your trip</legend>
        <div class="field-row">
          <div class="field"><label for="f-when">When</label><input id="f-when" name="when" placeholder="e.g. late April 2027, flexible"></div>
          <div class="field"><label for="f-days">How many days</label><input id="f-days" name="days" inputmode="numeric" placeholder="e.g. 10–12"></div>
          <div class="field"><label for="f-people">Travellers</label><input id="f-people" name="travellers" inputmode="numeric" placeholder="e.g. 2 adults"></div>
        </div>
        <div class="field">
          <label for="f-journey">A sample journey you liked <span class="opt">(optional)</span></label>
          <select id="f-journey" name="journey"><option value="">None in particular</option>${journeys.map((j) => `<option value="${j.slug}">${esc(j.title)}</option>`)}</select>
        </div>
      </fieldset>
      <fieldset>
        <legend>Places that interest you</legend>
        <div class="checks">
          ${regions.map((r) => `<label class="check-item"><input type="checkbox" name="regions" value="${r.slug}"> ${r.name}</label>`)}
          <label class="check-item"><input type="checkbox" name="regions" value="lycian-way"> Walking the Lycian Way</label>
          <label class="check-item"><input type="checkbox" name="regions" value="caravan-route"> Following the caravan route</label>
        </div>
      </fieldset>
      <fieldset>
        <legend>Pace</legend>
        <div class="checks">
          <label class="check-item"><input type="radio" name="pace" value="gentle"> Gentle: plenty of free time</label>
          <label class="check-item"><input type="radio" name="pace" value="moderate" checked> Moderate</label>
          <label class="check-item"><input type="radio" name="pace" value="active"> Active: walking most days</label>
        </div>
      </fieldset>
      <div class="field"><label for="f-msg">Anything else? <span class="opt">(optional)</span></label><textarea id="f-msg" name="message" rows="6" placeholder="What you love, what you’d rather avoid, mobility or dietary needs, a special occasion…"></textarea></div>
      <div class="field"><label class="check-item"><input type="checkbox" id="f-consent" name="consent" value="yes" required> I’m happy for ${esc(config.brand.name)} to use these details to reply to my enquiry. <span class="req">(required)</span></label></div>
      <div class="form-errors" data-errors role="alert" tabindex="-1" hidden></div>
      <p><button class="btn" type="submit"><span>Send enquiry</span><span class="btn-disc">${arrow}</span></button></p>
      <p class="small" data-status role="status"></p>
    </form>
    <aside class="aside-box">
      <div>
        <h2 class="mono-label">Prefer to talk?</h2>
        <ul class="plain">
          <li><a href="mailto:${esc(contact.email)}">${esc(contact.email)}</a></li>
          <li><a href="tel:${esc(contact.phone.replace(/\s/g, ''))}">${esc(contact.phone)}</a></li>
          <li class="small">${esc(contact.hours)}</li>
        </ul>
      </div>
      <div>
        <h2 class="mono-label">What happens next</h2>
        <ol>
          <li>We read your enquiry and reply, usually within two working days.</li>
          <li>A short call or a few emails to understand what you want.</li>
          <li>A first route with suggested stays, and a quote.</li>
        </ol>
      </div>
    </aside>
  </div>
</section>`,
  };
}

function credits() {
  return {
    path: '/credits/',
    title: 'Photo credits',
    description: 'Credits for every photograph on the site, and how each photo’s location was checked.',
    body: html`
${pageHead({ eyebrow: 'Credits', title: 'Photo credits', lede: 'All photos are from Unsplash and are used under the Unsplash licence. We only use a photo where it was taken at the place it illustrates; the last column says how we checked.' })}
<section class="section">
  <div class="wrap">
    <div class="table-scroll" role="region" aria-labelledby="credits-caption" tabindex="0">
      <table class="credits">
        <caption id="credits-caption">Photographs used on this site</caption>
        <thead><tr><th scope="col">Place</th><th scope="col">Photographer</th><th scope="col">Location checked by</th></tr></thead>
        <tbody>
          ${Object.values(photos).map((p) => html`<tr>
            <th scope="row"><a href="${p.page}">${esc(p.place)}</a></th>
            <td><a href="${p.profile}">${esc(p.name)}</a> on <a href="${p.unsplash}">Unsplash</a></td>
            <td>${esc(p.verified)}</td>
          </tr>`)}
        </tbody>
      </table>
    </div>
    <p>Where we haven’t yet found a photo whose location we can confirm, we show a tile pattern instead of a near-miss.</p>
    <p>Map outline: <a href="https://www.naturalearthdata.com/">Natural Earth</a>, public domain.</p>
  </div>
</section>`,
  };
}

function sourcesPage() {
  return {
    path: '/sources/',
    title: 'Sources',
    description: 'The references behind the dates, distances, opening details and holiday dates on this site.',
    body: html`
${pageHead({ eyebrow: 'Sources', title: 'Where our facts <em>come from</em>', lede: `The references we checked the site’s facts against, last on ${fmtDate(CHECKED)}. Many are secondary sources, so where an official source exists we name it: check it before you travel.` })}
<section class="section">
  <div class="wrap prose">
    <dl class="sources">
      ${sources.map((s) => html`<div>
        <dt>${esc(s.topic)}</dt>
        <dd>
          <p>${esc(s.fact)}</p>
          <ul>${s.refs.map(([t, u]) => `<li><a href="${esc(u)}">${esc(t)}</a></li>`)}</ul>
          ${s.official ? `<p class="small">Official source to check: ${esc(s.official)}</p>` : ''}
          <p class="small">Used on: ${s.where.map((w) => `<a href="${w}">${w}</a>`).join(', ')}</p>
        </dd>
      </div>`)}
    </dl>
    <p>Spotted something out of date? <a href="/enquire/">Tell us</a>.</p>
  </div>
</section>`,
  };
}

function notFound() {
  return {
    path: '/404.html',
    title: 'Page not found',
    description: 'This page could not be found.',
    body: html`
${pageHead({ eyebrow: '404', title: 'This road doesn’t go <em>anywhere</em>', lede: 'The page you were looking for has moved or never existed.' })}
<section class="section"><div class="wrap prose"><p>Try the <a href="/">home page</a>, the <a href="/regions/">regions of Türkiye</a> or the <a href="/caravan-route/">caravan-route map</a>.</p></div></section>`,
  };
}

export default function site() {
  return [about(), ...journal(), enquire(), credits(), sourcesPage(), notFound()];
}
