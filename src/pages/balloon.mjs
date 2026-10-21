import { html, img, pageHead, photoHero } from '../layout.mjs';

export default function balloon() {
  return [{
    path: '/balloon-guide/',
    title: 'Before you go: Cappadocia balloon guide',
    description: 'When Cappadocia balloon flights run, why they are often cancelled for wind, and how to plan spare mornings so you don’t miss out.',
    scripts: ['/balloon.js'],
    body: html`
<article>
${photoHero({ photo: 'balloons', eyebrow: 'Before you go · Cappadocia', title: 'The Cappadocia <em>balloon</em> guide', lede: 'A sunrise flight over the valleys is unforgettable, but it is not guaranteed. Balloons only fly when the wind allows, and in some weeks that means several cancelled mornings in a row. Plan for it and you’ll almost certainly get your flight.', size: 'short' })}

<section class="section">
  <div class="wrap prose">
    <nav class="toc" aria-label="On this page">
      <ol>
        <li><a href="#when">When flights run</a></li>
        <li><a href="#why">Why flights are cancelled</a></li>
        <li><a href="#spare">Plan spare mornings</a></li>
        <li><a href="#ask">What to ask your operator</a></li>
        <li><a href="#ground">If you don’t fly</a></li>
      </ol>
    </nav>

    <h2 id="when">When flights run</h2>
    <p>Flights take off around sunrise, when the air is coolest and calmest. Expect a hotel pick-up roughly an hour before dawn, about an hour in the air, and to be back for a late breakfast. In midsummer that means a very early start.</p>
    <p>Balloons can fly in every month, but the odds change with the seasons. Spring and autumn generally have the most settled mornings. Winter brings more wind, snow and cloud, and more cancellations, though the snowy flights that do go are spectacular.</p>

    <h2 id="why">Why flights are cancelled</h2>
    <p>Every morning the Turkish civil aviation authority (SHGM), which has an office in Göreme, checks the weather and makes one decision for the whole region, shown as a coloured flag: green means balloons may fly, red means they are grounded. Individual operators cannot overrule a red flag, and even on a green day the pilot may still decide not to go.</p>
    <ul>
      <li><strong>Wind.</strong> The main reason. A balloon goes where the wind takes it, and a strong or gusty wind makes landing dangerous. Calm air on the ground is not enough: the wind higher up matters too.</li>
      <li><strong>Rain, snow and fog.</strong> Wet envelopes and poor visibility also stop flights.</li>
      <li><strong>Late cancellations.</strong> Sometimes you’ll be collected, driven to the launch field and then sent back because conditions changed. That is the system working.</li>
    </ul>
    <p>Cancellations can come in runs of several days, especially in winter. Nobody can promise you a flight on a particular morning.</p>

    <h2 id="spare">Plan spare mornings</h2>
    <p>The simplest fix is time. Each night in Cappadocia gives you one sunrise. We plan at least three nights for anyone who wants to fly, book the flight on the <em>first</em> morning, and keep the following mornings free until about 9am. If your flight is cancelled, most operators will try to move you to the next day.</p>

    <div class="tool" data-balloon-planner>
      <h3>Your mornings in Cappadocia</h3>
      <label for="nights">Nights in Cappadocia</label>
      <select id="nights" name="nights">
        <option value="1">1 night</option><option value="2">2 nights</option>
        <option value="3" selected>3 nights</option><option value="4">4 nights</option><option value="5">5 nights</option>
      </select>
      <ol class="mornings" data-mornings aria-live="polite">
        <li><strong>Morning 1:</strong> flight booked.</li>
        <li><strong>Morning 2:</strong> spare. Keep it free until about 9am.</li>
        <li><strong>Morning 3 (departure day):</strong> keep as a last resort only if your onward travel is late in the day.</li>
      </ol>
      <p class="small" data-mornings-note>One booked morning and 1 spare morning before departure day. A good plan for spring to autumn.</p>
    </div>

    <p>Other tips:</p>
    <ul>
      <li>Don’t book the flight on the morning you leave Cappadocia, or the day of an onward flight.</li>
      <li>Use the spare mornings for something early anyway: the Göreme Open-Air Museum at opening time, or a valley walk in the cool.</li>
      <li>If you are in Cappadocia in winter, allow four nights.</li>
    </ul>

    <h2 id="ask">What to ask your operator</h2>
    <ul>
      <li>Is the company licensed, and how experienced is the pilot?</li>
      <li>How many passengers share a basket?</li>
      <li>What happens if the flight is cancelled: a full refund, or a move to another morning?</li>
      <li>Is there travel insurance cover, and are there weight, age or health restrictions? (Ask if you are pregnant, have back or knee problems, or find climbing into a basket hard.)</li>
      <li>How long is the flight itself, and what is included?</li>
    </ul>
    <p>Very cheap flights usually mean big baskets and short flights. We work only with licensed operators and will explain exactly what each option includes.</p>

    <h2 id="ground">If you don’t fly</h2>
    <p>The balloons are almost as beautiful from the ground, and watching costs nothing. Find a viewpoint above Göreme or one of the valley ridges before sunrise and watch a hundred envelopes inflate and rise. Some cave hotels have roof terraces for exactly this.</p>
    <p class="callout">Read more about <a href="/regions/cappadocia/">Cappadocia</a>, or our journal piece <a href="/journal/spare-mornings/">in praise of spare mornings</a>.</p>
  </div>
</section>
</article>`,
  }];
}
