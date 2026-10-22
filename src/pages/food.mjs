import { html, img, pageHead, photoHero } from '../layout.mjs';

const REGIONS = [
  ['İstanbul', '/regions/istanbul/', 'A meyhane evening of cold meze, grilled fish and rakı; balık ekmek (fish in bread) by the Galata Bridge; midye dolma (stuffed mussels) from street carts; the produce and pickle shops of Kadıköy market.'],
  ['The Aegean', '/regions/aegean/', 'Olive-oil cooking: zeytinyağlı artichokes, beans and stuffed vine leaves served at room temperature; wild greens (ot) with lemon; İzmir’s boyoz pastry for breakfast.'],
  ['Cappadocia and Kayseri', '/regions/cappadocia/', 'Kayseri mantı, tiny dumplings with yoghurt and chilli butter; pastırma, air-dried cured beef; testi kebabı, broken open at the table; local wines from volcanic soil.'],
  ['The Black Sea', '/regions/black-sea/', 'Hamsi (anchovies) fried, baked with rice or in bread; muhlama, cornmeal melted into butter and stretchy cheese; dark cabbage soups; endless glasses of Rize tea.'],
  ['The southeast', '/regions/southeast/', 'Gaziantep’s pistachio baklava and kebabs; Urfa’s smoky isot pepper, lahmacun and çiğ köfte; Mardin’s içli köfte and stuffed lamb ribs. The most exciting cooking in the country.'],
  ['Lake Van', '/regions/lake-van/', 'The famous Van breakfast of herb cheese, honey, kaymak and murtuğa, an egg-and-flour dish fried in butter, eaten over an entire morning.'],
];

export default function food() {
  return [{
    path: '/food/',
    title: 'Food in Türkiye',
    description: 'A regional guide to eating in Türkiye: meze in İstanbul, olive-oil cooking on the Aegean, mantı in Kayseri, Black Sea anchovies, the kebabs and baklava of the southeast, and the Van breakfast.',
    body: html`
${photoHero({ photo: 'spiceStall', eyebrow: 'Food', title: 'Eating your way across <em>Türkiye</em>', lede: 'Turkish food is not one cuisine but dozens. Every region has its own breads, cheeses and ways with a lamb or an aubergine. We plan journeys around lunch.', size: 'short' })}
<section class="section">
  <div class="wrap">
    <div class="section-head"><h2>Region by <em>region</em></h2><p class="lede">Six kitchens, six reasons to stay for lunch.</p></div>
    <ul class="food-grid">
      ${REGIONS.map(([name, href, text], i) => html`<li class="reveal"><span class="mono">${String(i + 1).padStart(2, '0')}</span><h3><a href="${href}">${name}</a></h3><p>${text}</p></li>`)}
    </ul>
  </div>
</section>
<section class="section section-stone">
  <div class="wrap two-col">
    <div class="prose">
      ${img('breakfast', { ratio: 4 / 3, sizes: '(min-width: 56em) 45vw, 100vw' })}
      <h2>Breakfast, tea and coffee</h2>
      <p><strong>Kahvaltı</strong>, breakfast, is a spread of small plates: cheeses, olives, tomatoes, cucumbers, honey and kaymak, eggs, and bread. Read our <a href="/journal/reading-a-turkish-breakfast/">guide to the Turkish breakfast</a>.</p>
      <p><strong>Tea (çay)</strong> is served all day in small tulip glasses, strong and without milk. Accepting a glass when it’s offered is part of doing business, and of making friends.</p>
      <p><strong>Turkish coffee</strong> is boiled with the grounds in a small pot and served thick, usually after a meal. Say how sweet you’d like it when you order: <em>sade</em> (plain), <em>orta</em> (medium) or <em>şekerli</em> (sweet). Don’t drink the grounds.</p>
    </div>
    <div class="prose">
      <h2>Good to know</h2>
      <ul>
        <li><strong>Lokanta</strong> are workers’ restaurants with ready-cooked dishes on display: point at what you want. Usually lunch only, often the best food in town.</li>
        <li><strong>Vegetarians</strong> eat well with meze, zeytinyağlı dishes, lentil soup and pide, but check: “etsiz” means without meat. Many vegetable dishes are cooked with meat stock.</li>
        <li><strong>Alcohol</strong> is widely available in cities and on the coasts, less so in conservative towns. Many restaurants in the east and southeast don’t serve it.</li>
        <li><strong>Tipping:</strong> around 10% in restaurants is usual. Check whether service is already included.</li>
        <li><strong>Tap water</strong> is generally treated, but most people drink bottled.</li>
      </ul>
    </div>
  </div>
</section>`,
  }];
}
