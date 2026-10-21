import { html, img, pageHead } from '../layout.mjs';

export default function etiquette() {
  return [{
    path: '/etiquette/',
    title: 'Mosque etiquette and travelling in Ramadan',
    description: 'Short, respectful notes on visiting mosques in Türkiye and on travelling during Ramadan: dress, prayer times, photography, eating in public and holidays.',
    body: html`
<article>
${pageHead({ eyebrow: 'Before you go', title: 'Mosques and Ramadan in Türkiye',
  lede: 'Mosques in Türkiye are working places of prayer, and most welcome visitors. A little preparation shows respect and makes the visit easier for everyone.' })}
<div class="wrap">${img('suleymaniye', { eager: true, ratio: 16 / 9, className: 'wide' })}</div>
<section class="section">
  <div class="wrap two-col">
    <div class="prose">
      <h2 id="mosques">Visiting a mosque</h2>
      <ul class="check">
        <li><strong>Dress modestly.</strong> Shoulders and knees covered for everyone. Women cover their hair; large mosques usually lend scarves and wraps at the door, but carrying a light scarf is easier.</li>
        <li><strong>Take off your shoes</strong> before stepping onto the carpet. Carry them in the plastic bags provided, or leave them on the racks.</li>
        <li><strong>Avoid prayer times.</strong> Visitors are usually asked to leave or wait during the five daily prayers, which last around 20–30 minutes. Friday midday prayer is the busiest of the week; plan to visit later in the afternoon.</li>
        <li><strong>Keep your voice low</strong> and don’t walk directly in front of anyone praying.</li>
        <li><strong>Photographs</strong> of the building are generally fine without flash. Don’t photograph people at prayer.</li>
        <li><strong>Follow the signs.</strong> Some areas are for worshippers only, and in some mosques visitors use a separate entrance.</li>
        <li><strong>A donation</strong> in the box by the door is welcome but never required.</li>
      </ul>
      <p>If you aren’t sure, watch what others do, or ask. People are generally glad you have come.</p>
    </div>

    <div class="prose">
      <h2 id="ramadan">Travelling during Ramadan</h2>
      <p>Ramadan (Ramazan in Turkish) is the month of fasting from dawn to sunset. Practice varies a lot across Türkiye: in İstanbul and on the coasts daily life barely changes, while in more traditional towns, especially in the east and southeast, many people fast.</p>
      <ul class="check">
        <li><strong>Restaurants stay open</strong> in cities and tourist areas. In smaller places some close during the day, so carry snacks and water.</li>
        <li><strong>Be discreet.</strong> Eating, drinking and smoking in public isn’t forbidden for visitors, but doing it quietly is a kindness, especially in conservative areas.</li>
        <li><strong>Iftar</strong>, the meal that breaks the fast at sunset, is a lovely time to be out. Squares fill with families, and restaurants are full, so book or eat early.</li>
        <li><strong>Before dawn</strong> in some neighbourhoods a drummer walks the streets to wake people for <em>sahur</em>, the pre-dawn meal.</li>
        <li><strong>The holiday that follows</strong>, Ramazan Bayramı (Eid al-Fitr), is a public holiday of several days. Buses, flights and hotels fill up as families travel, and some offices and museums change their hours. Book well ahead.</li>
      </ul>
      <p>Ramadan moves about eleven days earlier each year, following the lunar calendar. <strong>In 2027 the first day of fasting is 8 February</strong>, and Ramazan Bayramı is 9–11 March, according to the Diyanet (Presidency of Religious Affairs) calendar. Kurban Bayramı (Eid al-Adha), another long holiday, is expected on 16–19 May 2027. Check the official calendar before you book.</p>
      <p class="callout">Planning around holidays? See <a href="/when-to-go/">when to go</a>.</p>
    </div>
  </div>
</section>
</article>`,
  }];
}
