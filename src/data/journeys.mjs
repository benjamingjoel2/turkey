// Sample journeys (/journeys/). These are starting points to adapt, not fixed
// departures. No prices are listed: they depend on season and stays.

export const journeys = [
  {
    slug: 'first-caravan',
    title: 'The first caravan: İstanbul and Cappadocia',
    days: 9,
    pace: 'Gentle',
    regions: ['istanbul', 'cappadocia'],
    for: 'A first visit that goes deeper than the highlights.',
    days_: [
      ['1–4', 'İstanbul', 'Old city at opening times, a day on the Asian shore, the hans of the bazaar quarter, a Bosphorus ferry.'],
      ['5', 'To Cappadocia', 'Fly to Kayseri. On the drive, stop at the Karatay Han.'],
      ['6–8', 'Cappadocia', 'Three sunrises for the balloon (one flight booked, two spare), valley walks, Saruhan at dusk, an underground city.'],
      ['9', 'Home', 'Fly from Kayseri via İstanbul.'],
    ],
  },
  {
    slug: 'marble-cities',
    title: 'Marble cities: Ephesus, Pergamon and Pamukkale',
    days: 10,
    pace: 'Moderate',
    regions: ['aegean', 'pamukkale'],
    for: 'Travellers who want ancient sites with time to understand them.',
    days_: [
      ['1–2', 'Bergama', 'Pergamon’s acropolis and the Asklepion, slowly.'],
      ['3–5', 'Selçuk and Şirince', 'Ephesus at opening time, the Terrace Houses, the museum, a day off in the olive villages.'],
      ['6', 'Aphrodisias', 'On the drive inland, the sculptors’ city.'],
      ['7–8', 'Pamukkale', 'Travertines at first light, Hierapolis, Laodicea.'],
      ['9–10', 'İzmir', 'The Kemeraltı bazaar and the seafront, then home.'],
    ],
  },
  {
    slug: 'lycian-way-week',
    title: 'A week on the Lycian Way',
    days: 9,
    pace: 'Active',
    regions: ['lycian-coast'],
    for: 'Fit walkers who like to finish the day with a swim.',
    days_: [
      ['1', 'Arrive Dalaman', 'Transfer to Ovacık above Ölüdeniz.'],
      ['2–7', 'Walk', 'Ovacık to Patara over six stages, with luggage moved between village stays. Use the <a href="/lycian-way/">planner</a> to adjust.'],
      ['8', 'Patara', 'A rest day on the beach and in the ancient city.'],
      ['9', 'Home', 'From Dalaman.'],
    ],
  },
  {
    slug: 'mesopotamia',
    title: 'Upper Mesopotamia: Urfa, Göbekli Tepe and Mardin',
    days: 8,
    pace: 'Moderate',
    regions: ['southeast'],
    for: 'Curious travellers and serious eaters.',
    days_: [
      ['1–3', 'Şanlıurfa', 'Göbekli Tepe early, the archaeology museum, Balıklıgöl, a day trip to Harran.'],
      ['4–6', 'Mardin', 'The old town on foot, madrasas, a cooking afternoon, the view at dusk.'],
      ['7', 'Midyat and Mor Gabriel', 'Stone mansions and Syriac monasteries of Tur Abdin.'],
      ['8', 'Home', 'From Mardin via İstanbul.'],
    ],
  },
  {
    slug: 'long-road-east',
    title: 'The long road east: Black Sea to Lake Van',
    days: 14,
    pace: 'Moderate',
    regions: ['black-sea', 'lake-van'],
    for: 'Return visitors who want the Türkiye few people see.',
    days_: [
      ['1–3', 'Trabzon', 'Hagia Sophia, the bazaar, Sumela Monastery.'],
      ['4–6', 'Rize and Ayder', 'Tea gardens, then up to the summer pastures for walking.'],
      ['7–8', 'Erzurum', 'Seljuk madrasas and the Rüstem Paşa caravanserai.'],
      ['9', 'Doğubayazıt', 'İshak Paşa Palace under Mount Ağrı (Ararat).'],
      ['10–13', 'Lake Van', 'Akdamar, Van Fortress, Ahlat, and a breakfast that lasts until noon.'],
      ['14', 'Home', 'From Van.'],
    ],
  },
];
