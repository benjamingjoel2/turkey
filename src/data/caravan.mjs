// Stops on the caravan-route map (/caravan-route/), west to east.
// lat/lon place the pin; `route` lists which stops are joined by a line.
// Dates are as given by the site/museum literature; see FACTS-TO-VERIFY.md.

export const stops = [
  {
    id: 'istanbul', name: 'İstanbul', han: 'Büyük Valide Han', date: '1651',
    lat: 41.011, lon: 28.968, region: 'istanbul',
    story: 'The end of the road. Caravans unloaded in the great hans around the Grand Bazaar. Büyük Valide Han, built for Kösem Sultan in the mid-1600s, has three courtyards; Persian silk merchants once traded here, and some of its rooms are still workshops.',
  },
  {
    id: 'bursa', name: 'Bursa', han: 'Koza Han', date: '1491',
    lat: 40.184, lon: 29.061,
    story: 'The first Ottoman capital and the western end of the silk road. Koza Han, the “cocoon han”, was built for Bayezid II to fund his mosque in İstanbul, and for centuries it was the city’s market for silk cocoons. Its courtyard, around a small mosque raised on columns, is now full of silk shops and tea tables.',
  },
  {
    id: 'konya', name: 'Konya', han: 'Seljuk capital',
    date: '12th–13th c.', lat: 37.872, lon: 32.493,
    story: 'Capital of the Seljuk Sultanate of Rûm, which built most of Anatolia’s caravanserais to draw trade across its lands. It is also the city of Rumi, the poet whose followers became the whirling dervishes. His tomb is now the Mevlana Museum.',
  },
  {
    id: 'sultanhani', name: 'Sultanhanı (Aksaray)', han: 'Sultanhanı', date: '1229',
    lat: 38.248, lon: 33.546, region: 'cappadocia',
    story: 'One of the largest Seljuk caravanserais, on the road between Konya and Aksaray. Behind a carved stone portal is an open courtyard for summer with a small raised mosque, then a vast, cathedral-like hall for winter. It was built in 1229 for Sultan Alaeddin Keykubad I, and restored after a fire in 1278.',
  },
  {
    id: 'agzikara', name: 'Ağzıkarahan', han: 'Ağzıkarahan', date: '1230s',
    lat: 38.371, lon: 34.152, region: 'cappadocia',
    story: 'A smaller han a short drive east of Aksaray, with the volcano Hasan Dağı on the horizon. Look for the carved portal and the stone rings where animals were tethered.',
  },
  {
    id: 'saruhan', name: 'Saruhan (Avanos)', han: 'Saruhan', date: '1249',
    lat: 38.731, lon: 34.919, region: 'cappadocia',
    story: 'The last great Seljuk han, built of the soft, honey-to-rose stone of Cappadocia near the Kızılırmak, the “Red River”. In the evenings it is sometimes used for sema, the whirling dervish ceremony.',
  },
  {
    id: 'kayseri', name: 'Kayseri', han: 'Sultanhanı (Kayseri)', date: '1230s',
    lat: 38.722, lon: 35.488,
    story: 'An old trading city under the volcano Erciyes. Two Seljuk hans stand on the roads out of town: the second Sultanhanı and the Karatay Han, whose portal carvings include animals and dragons.',
  },
  {
    id: 'sivas', name: 'Sivas', han: 'Seljuk madrasas', date: '13th c.',
    lat: 39.749, lon: 37.017,
    story: 'A crossroads where the road east to Persia met roads to the Black Sea and Syria. Its Seljuk madrasas, especially the twin-minareted Çifte Minareli Medrese, show how rich the caravan trade made the city.',
  },
  {
    id: 'erzurum', name: 'Erzurum', han: 'Rüstem Paşa Han', date: '16th c.',
    lat: 39.906, lon: 41.276,
    story: 'A high, cold fortress city on the road to Tabriz. The Rüstem Paşa caravanserai (Taşhan), completed in 1561 for Süleyman the Magnificent’s grand vizier, now houses around a hundred workshops and shops carving oltu taşı, a local black jet.',
  },
  {
    id: 'trabzon', name: 'Trabzon', han: 'Black Sea port', date: 'Medieval',
    lat: 41.005, lon: 39.726, region: 'black-sea',
    story: 'Caravans from Tabriz crossed the Pontic mountains to reach the sea here. Trabzon was the capital of its own small Byzantine empire, rich enough to commission the frescoes still visible in its Hagia Sophia.',
  },
  {
    id: 'dogubayazit', name: 'Doğubayazıt', han: 'İshak Paşa Palace', date: '18th c.',
    lat: 39.521, lon: 44.129,
    story: 'Under Mount Ağrı (Ararat), the last Anatolian stop before Persia. The İshak Paşa Palace, built on a ledge above the town by a local ruler, controlled and taxed the passing trade.',
  },
  {
    id: 'urfa', name: 'Şanlıurfa', han: 'Gümrük Hanı', date: '1560s',
    lat: 37.159, lon: 38.792, region: 'southeast',
    story: 'On the southern route from Aleppo and Mesopotamia. The Ottoman customs han, Gümrük Hanı, built in the early 1560s, is still a busy courtyard of tea tables beside the covered bazaar.',
  },
  {
    id: 'mardin', name: 'Mardin', han: 'Old caravan town', date: 'Medieval',
    lat: 37.313, lon: 40.735, region: 'southeast',
    story: 'A stone town on the edge of the plain, where routes from Mosul and Baghdad climbed into Anatolia. Its covered bazaars and hans still sell saddles, copper and soap.',
  },
  {
    id: 'alara', name: 'Alara Han (Alanya)', han: 'Alara Han', date: '1230s',
    lat: 36.668, lon: 31.725,
    story: 'A Seljuk han by a river on the road from the central plateau down to the Mediterranean ports, with a castle on the crag above. It shows that the trade network reached the coast as well as the east.',
  },
];

// Routes drawn on the map: arrays of stop ids joined in order.
export const routes = [
  { name: 'The Seljuk road to Persia', ids: ['istanbul', 'bursa', 'konya', 'sultanhani', 'agzikara', 'saruhan', 'kayseri', 'sivas', 'erzurum', 'dogubayazit'] },
  { name: 'The Black Sea branch', ids: ['erzurum', 'trabzon'] },
  { name: 'The Mesopotamian road', ids: ['kayseri', 'urfa', 'mardin'] },
  { name: 'To the Mediterranean', ids: ['konya', 'alara'] },
];
