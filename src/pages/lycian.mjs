import { html, img, pageHead } from '../layout.mjs';
import { stages, DIFFICULTY } from '../data/lycian.mjs';

export default function lycian() {
  return [{
    path: '/lycian-way/',
    title: 'Lycian Way section planner',
    description: 'Plan a walk on the Lycian Way in Türkiye: choose stages and see total distance, difficulty and where to sleep each night.',
    scripts: ['/lycian.js'],
    body: html`
${pageHead({ eyebrow: 'Signature feature · Lycian coast', title: 'Plan your Lycian Way',
  lede: 'The Lycian Way runs for more than 500 km along the coast of ancient Lycia, from Ölüdeniz near Fethiye to near Antalya. Few people walk it all. Choose the stages you want, and see the distance, the hardest day and where you’ll sleep.' })}
<div class="wrap">${img('oludeniz', { eager: true, ratio: 21 / 9, className: 'wide' })}</div>
<section class="section">
  <div class="wrap planner" data-lycian>
    <form class="planner-stages" aria-labelledby="stages-h">
      <h2 id="stages-h">Stages, west to east</h2>
      <p class="small">Distances and times are approximate and change with re-routing. Times are walking only: add stops. Shortcuts by taxi or boat are possible on many stages.</p>
      <p class="planner-quick">
        <button type="button" class="btn btn-small btn-ghost-dark" data-preset="1-6">First week: Ovacık to Gavurağılı</button>
        <button type="button" class="btn btn-small btn-ghost-dark" data-preset="10-13">Kaş to Demre</button>
        <button type="button" class="btn btn-small btn-ghost-dark" data-preset="">Clear</button>
      </p>
      <ol class="stage-list">
        ${stages.map((s) => html`<li class="stage">
          <input type="checkbox" id="stage-${s.id}" name="stage" value="${s.id}">
          <label for="stage-${s.id}">
            <span class="stage-route"><span class="stage-n">${s.id}</span> ${s.from} → ${s.to}</span>
            <span class="stage-meta">≈${s.km} km · ${s.hours} h · <span class="diff diff-${s.difficulty}">${DIFFICULTY[s.difficulty]}</span></span>
            <span class="stage-note">${s.note}</span>
            <span class="stage-sleep"><span class="visually-hidden">Sleep: </span>${s.sleep}</span>
          </label>
        </li>`)}
      </ol>
    </form>
    <aside class="planner-summary" aria-labelledby="summary-h">
      <div class="planner-sticky">
        <h2 id="summary-h">Your walk</h2>
        <div data-summary aria-live="polite">
          <p>Choose one or more stages to see your total.</p>
        </div>
        <p class="small"><a href="/enquire/?interest=lycian-way">Ask us to arrange it</a>: luggage transfers, village stays and the bits in between.</p>
      </div>
    </aside>
  </div>
  <script type="application/json" data-stages>${JSON.stringify(stages).replace(/</g, '\\u003c')}</script>
</section>
<section class="section section-stone">
  <div class="wrap prose">
    <h2>Before you walk</h2>
    <ul>
      <li><strong>Season.</strong> March to May and October to November. Summer heat on the exposed stretches is dangerous.</li>
      <li><strong>Water.</strong> Springs and cisterns can be dry. Carry at least two litres, more on long climbs.</li>
      <li><strong>Waymarks.</strong> Red-and-white painted stripes. Some sections are re-routed after fires or roadworks: use a current guidebook and an offline map app.</li>
      <li><strong>Accommodation.</strong> Village pensions are small; book ahead in spring. Many will send your bag on to the next stop for a fee.</li>
      <li><strong>The middle section.</strong> Between Demre and Adrasan the trail runs close to roads, and most walkers skip it by bus, as this planner does.</li>
    </ul>
    <p>See also <a href="/regions/lycian-coast/">the Lycian coast</a> and our <a href="/journeys/#lycian-way-week">week on the Lycian Way</a>.</p>
  </div>
</section>`,
  }];
}
