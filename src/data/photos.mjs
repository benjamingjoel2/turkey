// Every photo on the site, with its credit and how its location was checked.
//
// House rule: a photo is used only where its location matches the place it
// illustrates. `verified` records the evidence:
//   - "Unsplash location tag": the photographer geotagged/labelled the place.
//   - "Photographer caption + landmark": no location tag, but the photographer's
//     own caption names the place AND the landmark is unmistakable in the frame.
// Images are served from Unsplash's CDN (hotlinking is what Unsplash's API
// guidelines ask for). `src` is the photo's raw URL; size params are added
// by the `img()` helper in src/layout.mjs.
//
// To add a photo: find it on unsplash.com, check its location, then add an
// entry here and reference its key from a page.

const UTM = 'utm_source=kervan_journeys&utm_medium=referral';

const photo = (p) => ({
  ...p,
  profile: `https://unsplash.com/@${p.username}?${UTM}`,
  page: `https://unsplash.com/photos/${p.id}?${UTM}`,
  unsplash: `https://unsplash.com/?${UTM}`,
});

export const photos = {
  balloons: photo({
    id: 'sqWpPdIU_ao',
    src: 'https://images.unsplash.com/photo-1680469814298-9a1220de2cf2?ixid=M3wxMTA4MTIwfDB8MXxhbGx8fHx8fHx8fHwxNzkyNTg0MTQ0fA&ixlib=rb-4.1.0',
    w: 5184, h: 3456,
    name: 'Ricky LK', username: 'rickyrynselo',
    place: 'Cappadocia, Nevşehir',
    alt: 'Hot-air balloons drifting over the fairy chimneys of Cappadocia on a clear morning',
    verified: 'Photographer caption (“Hot air balloon at Cappadocia… fairy chimneys”) + landmark',
  }),
  hagiaSophia: photo({
    id: 'JbWg7W953LY',
    src: 'https://images.unsplash.com/photo-1623621534850-d325a1980c7e?ixid=M3wxMTA4MTIwfDB8MXxhbGx8fHx8fHx8fHwxNzkyNTg0MTQ1fA&ixlib=rb-4.1.0',
    w: 4979, h: 3319,
    name: 'Lewis J Goetz', username: 'lgoetz',
    place: 'Hagia Sophia, İstanbul',
    alt: 'Hagia Sophia with its great dome and four minarets, seen across the gardens of Sultanahmet',
    verified: 'Unsplash location tag: İstanbul',
  }),
  suleymaniye: photo({
    id: 'iQTmygr_WTY',
    src: 'https://images.unsplash.com/photo-1623439845420-6eb167001b2a?ixid=M3wxMTA4MTIwfDB8MXxhbGx8fHx8fHx8fHwxNzkyNTg0MTQ1fA&ixlib=rb-4.1.0',
    w: 5467, h: 3075,
    name: 'Ibrahim Uzun', username: 'ibuzn',
    place: 'Süleymaniye Mosque, İstanbul',
    alt: 'The Süleymaniye Mosque rising above the old city of İstanbul at sunset, seen from the Golden Horn',
    verified: 'Unsplash location tag: İstanbul; caption “Süleymaniye Mosque”',
  }),
  ephesus: photo({
    id: '5X7tBwSV9KU',
    src: 'https://images.unsplash.com/photo-1647955950696-ce764668e7e3?ixid=M3wxMTA4MTIwfDB8MXxhbGx8fHx8fHx8fHwxNzkyNTg0MTQ1fA&ixlib=rb-4.1.0',
    w: 5000, h: 3335,
    name: 'Luis Barreto D', username: 'luisbarretophotos',
    place: 'Ephesus, near Selçuk',
    alt: 'The two-storey facade of the Library of Celsus at Ephesus, with carved marble fragments in the foreground',
    verified: 'Photographer caption (“Ephesus”) + landmark (Library of Celsus)',
  }),
  pergamon: photo({
    id: 'M4xdmupoOBg',
    src: 'https://images.unsplash.com/photo-1715080271610-c177c424aa6d?ixid=M3wxMTA4MTIwfDB8MXxhbGx8fHx8fHx8fHwxNzkyNTg0MTQ2fA&ixlib=rb-4.1.0',
    w: 6000, h: 4000,
    name: 'Taha Berk Tekin', username: 'tahaberktekin',
    place: 'Pergamon, Bergama',
    alt: 'The steep hillside theatre of Pergamon, its stone seats falling away towards the valley',
    verified: 'Unsplash location tag: Pergamon Ancient City, Bergama/İzmir',
  }),
  pamukkale: photo({
    id: 'KmintXh2L-s',
    src: 'https://images.unsplash.com/photo-1770122969341-8dbdcbacf305?ixid=M3wxMTA4MTIwfDB8MXxhbGx8fHx8fHx8fHwxNzkyNTg0MTQ2fA&ixlib=rb-4.1.0',
    w: 6000, h: 4000,
    name: 'Edhem ŞEŞE', username: 'edhem',
    place: 'Pamukkale, Denizli',
    alt: 'White travertine terraces at Pamukkale holding shallow pools of pale turquoise water',
    verified: 'Unsplash location tag: Pamukkale, Denizli',
  }),
  kas: photo({
    id: 'XrDgvEf9Jh0',
    src: 'https://images.unsplash.com/photo-1728603980950-ab5ec764aa1d?ixid=M3wxMTA4MTIwfDB8MXxhbGx8fHx8fHx8fHwxNzkyNTg0MTQ2fA&ixlib=rb-4.1.0',
    w: 3072, h: 2048,
    name: 'Meriç Dağlı', username: 'meric',
    place: 'Kaş, Antalya',
    alt: 'Sunset over Kaş, its marina and the wooded coast beyond',
    verified: 'Unsplash location tag: Kaş/Antalya',
  }),
  oludeniz: photo({
    id: 'cjp9F7D-FS8',
    src: 'https://images.unsplash.com/photo-1582380128740-193dd392c626?ixid=M3wxMTA4MTIwfDB8MXxhbGx8fHx8fHx8fHwxNzkyNTg0MTQ3fA&ixlib=rb-4.1.0',
    w: 3000, h: 2000,
    name: 'Mert Kahveci', username: 'mertkahveci',
    place: 'Ölüdeniz, Fethiye',
    alt: 'Turquoise water off Ölüdeniz beach below pine-covered mountains',
    verified: 'Unsplash location tag: Ölüdeniz, Fethiye/Muğla',
  }),
  sumela: photo({
    id: 'mXfq5VCQ_Pw',
    src: 'https://images.unsplash.com/photo-1767614448461-d5a9c8f282b0?ixid=M3wxMTA4MTIwfDB8MXxhbGx8fHx8fHx8fHwxNzkyNTg0MTQ2fA&ixlib=rb-4.1.0',
    w: 5400, h: 3590,
    name: 'Adem Percem', username: 'adempercem',
    place: 'Sumela Monastery, Trabzon',
    alt: 'Sumela Monastery built into a sheer cliff face above a forested valley near Trabzon',
    verified: 'Photographer caption (“Sumela Monastery at Trabzon”) + landmark',
  }),
  gobekliTepe: photo({
    id: 'gslTbLa2FEA',
    src: 'https://images.unsplash.com/photo-1654346970959-efc9a1edbdc3?ixid=M3wxMTA4MTIwfDB8MXxhbGx8fHx8fHx8fHwxNzkyNTg0MTQ3fA&ixlib=rb-4.1.0',
    w: 3487, h: 1961,
    name: 'Frank Samol', username: 'fsamol',
    place: 'Göbekli Tepe, Şanlıurfa',
    alt: 'A circular enclosure at Göbekli Tepe ringed by T-shaped limestone pillars',
    verified: 'Unsplash location tag: Göbekli Tepe, Haliliye',
  }),
  mardin: photo({
    id: 'sNPolnulQ-c',
    src: 'https://images.unsplash.com/photo-1646146013124-e78f97c43593?ixid=M3wxMTA4MTIwfDB8MXxhbGx8fHx8fHx8fHwxNzkyNTg0MTQ3fA&ixlib=rb-4.1.0',
    w: 5184, h: 3456,
    name: 'Yusuf Onuk', username: 'onkysf',
    place: 'Mardin',
    alt: 'The honey-coloured stone houses of Mardin climbing the hillside below the citadel',
    verified: 'Unsplash location tag: Mardin',
  }),
  spiceStall: photo({
    id: 'GUI41Or76yc',
    src: 'https://images.unsplash.com/photo-1784741924121-7ed1c44e211f?ixid=M3wxMTA4MTIwfDB8MXxhbGx8fHx8fHx8fHwxNzkyNTg0MTQ3fA&ixlib=rb-4.1.0',
    w: 5568, h: 3712,
    name: 'Lothar Boris Piltz', username: 'lotharborispiltz',
    place: 'Market stall, İstanbul',
    alt: 'An İstanbul market stall hung with dried aubergines and peppers above trays of nuts and lokum',
    verified: 'Unsplash location tag: İstanbul',
  }),
  akdamar: photo({
    id: 'i79tqyuxAv4',
    src: 'https://images.unsplash.com/photo-1611733448849-0580689d5621?ixid=M3wxMTA4MTIwfDB8MXxhbGx8fHx8fHx8fHwxNzkyNjA1ODIxfA&ixlib=rb-4.1.0',
    w: 6720, h: 2598,
    name: 'Onur Binay', username: 'onurbinay',
    place: 'Akdamar Island, Lake Van',
    alt: 'The Armenian Church of the Holy Cross on Akdamar Island, above Lake Van, with snow-capped mountains beyond',
    verified: 'Unsplash location tag: Van; caption “Armenian church of Akdamar island” + landmark',
  }),
  lakeVan: photo({
    id: '8TV-SlV2L6M',
    src: 'https://images.unsplash.com/photo-1743966260995-ad8d39935ee1?ixid=M3wxMTA4MTIwfDB8MXxhbGx8fHx8fHx8fHwxNzkyNjA1ODIxfA&ixlib=rb-4.1.0',
    w: 3936, h: 2624,
    name: 'Hakam magdea fardana ansie', username: 'hakammagdea',
    place: 'Lake Van from Akdamar Island',
    alt: 'A snow-covered volcano reflected in the still water of Lake Van, seen over old stone walls on Akdamar Island',
    verified: 'Unsplash location tag: Akdamar Adası, Gevaş/Van',
  }),
  kekova: photo({
    id: '2JDhP07ovko',
    src: 'https://images.unsplash.com/photo-1758970415117-bbfa82a58c41?ixid=M3wxMTA4MTIwfDB8MXxhbGx8fHx8fHx8fHwxNzkyNjA1ODIyfA&ixlib=rb-4.1.0',
    w: 4712, h: 3142,
    name: 'Seval Torun', username: 'sevaltorun',
    place: 'Kaleköy (Simena), Kekova',
    alt: 'The castle walls of Kaleköy above the deep blue bay of Kekova, with Kekova Island beyond',
    verified: 'Unsplash location tag: Kekova, Demre/Antalya',
  }),
  ferry: photo({
    id: 'WA1u0scVLZU',
    src: 'https://images.unsplash.com/photo-1589561454226-796a8aa89b05?ixid=M3wxMTA4MTIwfDB8MXxhbGx8fHx8fHx8fHwxNzkyNjA1ODIzfA&ixlib=rb-4.1.0',
    w: 3813, h: 2553,
    name: 'Engin Yapici', username: 'yapici',
    place: 'Eminönü, İstanbul',
    alt: 'A ferry crossing the water at Eminönü below the domes and minarets of the old city',
    verified: 'Unsplash location tag: İstanbul; caption “Eminonu, Istanbul”',
  }),
  breakfast: photo({
    id: '64zZ_h_HCTs',
    src: 'https://images.unsplash.com/photo-1661685452870-e89b6e8c14fa?ixid=M3wxMTA4MTIwfDB8MXxhbGx8fHx8fHx8fHwxNzkyNjA1ODIzfA&ixlib=rb-4.1.0',
    w: 6000, h: 4000,
    name: 'Igor Sporynin', username: 'igorharrier',
    place: 'Breakfast in Antalya',
    alt: 'A Turkish breakfast spread: menemen and sucuk in copper pans, cheeses, olives, honey and small dishes on a kilim',
    verified: 'Unsplash location tag: Antalya; caption “Turkish breakfast”',
  }),
  goreme: photo({
    id: 'fmTa8MCcAUA',
    src: 'https://images.unsplash.com/photo-1669046639781-fdc412a3214e?ixid=M3wxMTA4MTIwfDB8MXxhbGx8fHx8fHx8fHwxNzkyNjA1ODM1fA&ixlib=rb-4.1.0',
    w: 7576, h: 5799,
    name: 'Igor Sporynin', username: 'igorharrier',
    place: 'Göreme, Cappadocia',
    alt: 'Fairy chimneys around Göreme in low evening light, with the long tuff ridge glowing beyond',
    verified: 'Unsplash location tag: Cappadocia; caption “Goreme, Cappadocia, Turkiye”',
  }),
  roseValley: photo({
    id: 'hqh4hDBjcXc',
    src: 'https://images.unsplash.com/photo-1669111959929-da763e66b640?ixid=M3wxMTA4MTIwfDB8MXxhbGx8fHx8fHx8fHwxNzkyNjA1ODM1fA&ixlib=rb-4.1.0',
    w: 5846, h: 3897,
    name: 'Igor Sporynin', username: 'igorharrier',
    place: 'Valley near Göreme, Cappadocia',
    alt: 'A Cappadocian valley of pale carved rock with poplars turning gold in autumn',
    verified: 'Unsplash location tag: Göreme, Nevşehir',
  }),
};
