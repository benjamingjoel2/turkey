// The eight regions. Each becomes a page at /regions/<slug>/.
// `photos`: keys from photos.mjs. Leave empty to show a tile panel instead.
// lat/lon: a representative point, shown as coordinates in the page design.
// Facts marked in FACTS-TO-VERIFY.md should be re-checked before each season.

export const regions = [
  {
    slug: 'istanbul',
    lat: 41.008, lon: 28.98,
    name: 'İstanbul',
    kicker: 'Where the caravans ended',
    photos: ['hagiaSophia', 'suleymaniye'],
    summary:
      'Two continents, three empires and a skyline of domes. Give it longer than you think: four days is a start.',
    intro: [
      'İstanbul was the end of the road for many Anatolian caravans. Goods came in through the hans around the Grand Bazaar, stone courtyards with rooms for merchants above and storerooms below, several still working today as tailors’ and coppersmiths’ workshops.',
      'Most visitors stay within the old peninsula of Sultanahmet. We suggest spending at least as much time across the water: in Kadıköy’s food market on the Asian shore, on the ferries that cost less than a coffee, and in the steep lanes of Balat and Fener on the Golden Horn.',
    ],
    highlights: [
      ['Hagia Sophia', 'Sixth-century church, Ottoman mosque, later a museum and, since 2020, a mosque again. Since 2024 foreign visitors see it from a ticketed route through the upper galleries; worshippers use a separate, free entrance. Read our <a href="/etiquette/">mosque notes</a> first.'],
      ['The Süleymaniye', 'Sinan’s great mosque complex above the Golden Horn. Quieter than the Blue Mosque, with a garden terrace looking over the water.'],
      ['The hans of the bazaar quarter', 'Büyük Valide Han and its neighbours, still full of workshops. Please stay off the roofs: access was banned in 2016 to protect the domes.'],
      ['Ferries', 'The Bosphorus by public ferry, not a tour boat: Eminönü to Kadıköy, or the long run up to Anadolu Kavağı.'],
      ['Balat and Fener', 'Old Greek, Jewish and Armenian neighbourhoods with churches, synagogues and coffee houses.'],
    ],
    eat: 'Fish sandwiches by the Galata Bridge, meze and rakı in a meyhane, and a long breakfast in Kadıköy.',
    when: 'April–May and September–October. Summer is hot and crowded; winter is grey but quiet and cheaper.',
    gettingThere: 'Two airports: İstanbul Airport (IST) on the European side and Sabiha Gökçen (SAW) on the Asian side. Check which one your flight uses.',
  },
  {
    slug: 'cappadocia',
    lat: 38.643, lon: 34.828,
    name: 'Cappadocia',
    kicker: 'Stone, rose and sunrise',
    photos: ['balloons'],
    summary:
      'Valleys of soft volcanic tuff carved into churches, dovecotes and whole underground cities. Walk it, don’t just fly over it.',
    intro: [
      'Cappadocia sits on the old caravan road between Konya and Kayseri, and two of the finest Seljuk caravanserais, Sultanhanı near Aksaray and Saruhan near Avanos, are within reach. The landscape itself is volcanic ash compressed into tuff, soft enough to carve and hard enough to last.',
      'The balloons are the famous image, and they are worth an early start. But the best of Cappadocia is on foot: the Rose and Red valleys at dusk, the painted rock-cut churches of Göreme and Soğanlı, and the Ihlara gorge with a stream at the bottom.',
    ],
    highlights: [
      ['Balloon flights at sunrise', 'Weather-dependent and often cancelled for wind. Read our <a href="/balloon-guide/">before-you-go guide</a> and plan spare mornings.'],
      ['Göreme Open-Air Museum', 'Rock-cut monastic churches with Byzantine frescoes. Go at opening time; the Dark Church has a separate ticket.'],
      ['Rose and Red valleys', 'An easy, beautiful walk that ends at a viewpoint as the stone turns pink at sunset.'],
      ['Underground cities', 'Derinkuyu and Kaymaklı go down several levels. Not for the claustrophobic.'],
      ['Saruhan caravanserai', 'A thirteenth-century Seljuk han near Avanos, sometimes used for whirling dervish ceremonies in the evening.'],
    ],
    eat: 'Testi kebabı (meat cooked in a sealed clay pot), Kayseri mantı, pastırma, and the local wines of Ürgüp.',
    when: 'April–June and September–October for walking. Winter is cold and often snowy, beautiful, but more balloon cancellations.',
    gettingThere: 'Fly to Kayseri (ASR) or Nevşehir Kapadokya (NAV), then about an hour by road.',
  },
  {
    slug: 'aegean',
    lat: 37.939, lon: 27.341,
    name: 'The Aegean: Ephesus and Pergamon',
    kicker: 'Marble cities',
    photos: ['ephesus', 'pergamon'],
    summary:
      'Two of the great cities of the ancient world, an hour or two from İzmir, with olive-oil cooking and quiet villages in between.',
    intro: [
      'Ephesus is the most complete Roman city in the eastern Mediterranean: a marble street running downhill past the Library of Celsus to a theatre that once held around 25,000 people. Arrive at opening time or late in the afternoon, and allow extra for the Terrace Houses, whose painted walls and mosaics are under a protective roof.',
      'Pergamon, at Bergama to the north, is less visited and more dramatic: a royal acropolis on a ridge, with one of the steepest theatres in the ancient world cut into the hillside. Below it are the Asklepion, an ancient healing centre, and the Red Basilica.',
    ],
    highlights: [
      ['Ephesus', 'The Library of Celsus, the Curetes Street and the Great Theatre. Add the Terrace Houses (separate ticket).'],
      ['Ephesus Museum, Selçuk', 'Many of the finds, including the Artemis statues, are here rather than on site.'],
      ['Pergamon acropolis', 'Reached by cable car or a stiff walk. The theatre’s slope is worth the climb.'],
      ['The Asklepion', 'A sanctuary of the healing god, with a sacred spring and a vaulted tunnel.'],
      ['Şirince and the olive villages', 'Hill villages for a long lunch away from the sites.'],
    ],
    eat: 'Zeytinyağlı (vegetables cooked in olive oil and served cool), wild greens, İzmir’s boyoz pastry and kumru sandwich.',
    when: 'April–May and late September–October. July and August are very hot on the open sites.',
    gettingThere: 'Fly to İzmir (ADB). Selçuk (for Ephesus) is about an hour south; Bergama about two hours north.',
  },
  {
    slug: 'pamukkale',
    lat: 37.921, lon: 29.12,
    name: 'Pamukkale and Hierapolis',
    kicker: 'The cotton castle',
    photos: ['pamukkale'],
    summary:
      'White travertine terraces made by mineral springs, with a Roman spa city on top. Stay the night to see them without the day trips.',
    intro: [
      'Pamukkale means “cotton castle”: calcium-rich spring water has built white terraces down the hillside over thousands of years. You walk them barefoot, on a set path, to protect the surface.',
      'Above the terraces is Hierapolis, a Roman spa town with a large theatre, a long necropolis of tombs and an “antique pool” where you can swim among fallen columns (separate fee). Most coach tours arrive mid-morning; stay in the village and go up early or near closing time.',
    ],
    highlights: [
      ['The travertines at first light', 'Barefoot on the terraces before the tour buses. Bring a bag for your shoes.'],
      ['Hierapolis theatre', 'Well restored, with carved reliefs on the stage building.'],
      ['The necropolis', 'One of the largest ancient cemeteries in Anatolia, along the old road into town.'],
      ['Laodicea', 'A large and less-visited excavated city ten minutes away.'],
      ['Aphrodisias', 'A day trip west: the city of Aphrodite’s sculptors, with one of the best-preserved stadiums anywhere.'],
    ],
    eat: 'Denizli’s oven kebabs, and village breakfasts in Pamukkale itself.',
    when: 'Spring and autumn. Summer is fierce on white stone; winter is quiet and the terraces are still walkable.',
    gettingThere: 'Denizli (DNZ) airport, or by road from the Aegean coast: around three hours from Selçuk.',
  },
  {
    slug: 'lycian-coast',
    lat: 36.2, lon: 29.64,
    name: 'The Lycian coast',
    kicker: 'Tombs above the sea',
    photos: ['kas', 'oludeniz'],
    summary:
      'Pine mountains dropping into clear water, rock-cut tombs in the cliffs and the Lycian Way footpath linking it all.',
    intro: [
      'Ancient Lycia ran along the coast between Fethiye and Antalya. Its people carved house-shaped tombs into the cliffs and built cities that are now half-swallowed by forest: Xanthos, Letoon, Patara, Myra and Olympos.',
      'The best way to see it is slowly. The Lycian Way is a long-distance footpath along this coast; you can walk a single day or a fortnight. Our <a href="/lycian-way/">section planner</a> helps you choose stages and see where to sleep.',
    ],
    highlights: [
      ['Kaş', 'A small harbour town with a Hellenistic theatre facing the sea, good food and a base for day hikes and boat trips.'],
      ['Kekova', 'A sunken Lycian town seen from a boat or a kayak, and the castle village of Kaleköy (Simena).'],
      ['Patara', 'A long sandy beach backed by dunes and an ancient city with a restored assembly hall.'],
      ['Xanthos and Letoon', 'The old Lycian capital and its sanctuary, inscribed together as a UNESCO World Heritage Site.'],
      ['Myra and Demre', 'Rock-cut tombs above a Roman theatre, and the church of St Nicholas.'],
    ],
    eat: 'Grilled fish, gözleme in mountain villages, and orange groves near Kumluca and Finike.',
    when: 'Walking: March–May and October–November. Swimming: June–October. July–August are too hot for most hikers.',
    gettingThere: 'Dalaman (DLM) for the west end, Antalya (AYT) for the east.',
  },
  {
    slug: 'black-sea',
    lat: 41.005, lon: 39.726,
    name: 'The Black Sea',
    kicker: 'Tea, mist and monasteries',
    photos: ['sumela'],
    summary:
      'Green, steep and rainy: tea terraces, high summer pastures and a monastery hanging from a cliff.',
    intro: [
      'The eastern Black Sea is unlike the rest of Türkiye: wet, forested mountains rising straight from the coast, with tea grown on terraces around Rize. Trabzon was the Black Sea port for caravans coming over the mountains from Tabriz and Persia.',
      'Inland, families still move their animals up to the yaylas, high summer pastures with wooden houses, in the warm months. Ayder and the Kaçkar mountains are the place to walk.',
    ],
    highlights: [
      ['Sumela Monastery', 'A Greek Orthodox monastery built into a cliff above the Altındere valley, reopened in 2021 after a long restoration. Check opening hours before you go.'],
      ['Trabzon', 'Hagia Sophia of Trabzon, a thirteenth-century church with fine frescoes, and a lively old bazaar.'],
      ['Rize tea gardens', 'Terraces of tea down to the sea, and tea houses to drink it in.'],
      ['Ayder and the Kaçkars', 'Summer pastures, wooden villages and high walking routes.'],
      ['Zilkale', 'A medieval castle on a wooded crag above the Fırtına valley.'],
    ],
    eat: 'Hamsi (anchovies) in every form, muhlama (cornmeal melted with cheese and butter), and Rize tea.',
    when: 'June–September. Expect rain at any time; the yaylas are only lived in during summer.',
    gettingThere: 'Fly to Trabzon (TZX) or Rize–Artvin (RZV).',
  },
  {
    slug: 'southeast',
    lat: 37.313, lon: 40.735,
    name: 'The southeast: Göbekli Tepe and Mardin',
    kicker: 'Upper Mesopotamia',
    photos: ['gobekliTepe', 'mardin'],
    summary:
      'The oldest monumental site yet found, honey-stone towns over the Mesopotamian plain, and some of Türkiye’s best cooking.',
    intro: [
      'Göbekli Tepe, near Şanlıurfa, rewrote the story of early civilisation: circles of carved stone pillars put up by hunter-gatherers more than 11,000 years ago, before pottery or writing. It has been a UNESCO World Heritage Site since 2018, protective roofs now cover the main enclosures, and the Şanlıurfa museum complex shows finds and a reconstruction of one enclosure.',
      'Mardin climbs a hillside above the plain that runs south into Syria. Its stone houses, madrasas and Syriac churches are a reminder that this has long been a place of many faiths and languages. Nearby Midyat and the Tur Abdin plateau have working Syriac Orthodox monasteries, including Mor Gabriel.',
    ],
    highlights: [
      ['Göbekli Tepe', 'Carved foxes, boars and vultures on T-shaped pillars. Go early; there is little shade.'],
      ['Şanlıurfa', 'The pools of sacred carp at Balıklıgöl, a covered bazaar and old hans, and the archaeology museum.'],
      ['Harran', 'Beehive mud-brick houses and the ruins of an early Islamic university.'],
      ['Mardin old town', 'Stepped lanes, the Zinciriye and Kasımiye madrasas, and the view south over the plain.'],
      ['Midyat and Mor Gabriel', 'Carved stone mansions, and a monastery founded in 397 that is still the seat of the bishop of Tur Abdin.'],
    ],
    eat: 'Urfa’s isot pepper, lahmacun and çiğ köfte; Mardin’s içli köfte and kaburga dolması; Gaziantep’s baklava on the way.',
    when: 'March–May and October–November. Summer temperatures are very high.',
    gettingThere: 'Fly to Şanlıurfa (GNY) or Mardin (MQM). Check your government’s current travel advice for the border areas.',
  },
  {
    slug: 'lake-van',
    lat: 38.63, lon: 42.9,
    name: 'Lake Van',
    kicker: 'A soda sea in the mountains',
    photos: [],
    summary:
      'Türkiye’s largest lake, high on the eastern plateau, with an island church, Seljuk tombstones and the country’s most famous breakfast.',
    intro: [
      'Lake Van sits at around 1,640 metres, ringed by volcanoes. It has no outflow and its water is salty and strongly alkaline (a soda lake), so few fish live in it, and the colour shifts from deep blue to green with the light. The region was the heart of the ancient kingdom of Urartu and later of medieval Armenian kingdoms.',
      'Most visitors come for one day. Stay three: the boat to Akdamar Island, the lakeside Seljuk cemetery at Ahlat, the Urartian citadel at Van, and a long breakfast in between.',
    ],
    highlights: [
      ['Akdamar Island', 'The Armenian Church of the Holy Cross, built in 915–921, its walls carved with Biblical scenes. Now a museum, reached by a short boat ride.'],
      ['Van Fortress', 'A long Urartian citadel on a rock above the old city, with cuneiform inscriptions.'],
      ['Ahlat', 'A field of carved Seljuk tombstones and domed tombs on the north-west shore.'],
      ['Hoşap Castle', 'A Kurdish castle on a crag, south-east of Van.'],
      ['Van breakfast', 'Dozens of small plates: otlu peynir (herb cheese), honey, kaymak, murtuğa and fresh bread.'],
    ],
    eat: 'Van kahvaltısı (breakfast), otlu peynir and the honey of the surrounding mountains.',
    when: 'June–September. Winters on the plateau are long and very cold.',
    gettingThere: 'Fly to Van (VAN). Check your government’s current travel advice for the region.',
  },
];
