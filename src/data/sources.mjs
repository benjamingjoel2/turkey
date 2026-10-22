// References behind the site's facts, shown on /sources/.
// `checked` is when the fact was last compared with the source. Many sources
// are secondary (encyclopaedias, news, travel guides): where an official
// source exists, it is named in `official` so it can be checked directly.
// Keep this in step with FACTS-TO-VERIFY.md.

export const CHECKED = '2026-10-21';

export const sources = [
  {
    topic: 'Lycian Way length and route',
    where: ['/lycian-way/'],
    fact: 'Starts at Ovacık (Hisarönü) near Fethiye; opened at a little over 500 km and, with extensions, now about 760 km to the Antalya area.',
    refs: [
      ['Wikipedia: Lycian Way', 'https://en.wikipedia.org/wiki/Lycian_Way'],
      ['GoTürkiye: Lycian Way', 'https://goturkiye.com/walking/lycian-way'],
    ],
    official: 'Culture Routes Society (cultureroutesinturkey.com) and the current Lycian Way guidebook',
  },
  {
    topic: 'Hagia Sophia visitor access',
    where: ['/regions/istanbul/'],
    fact: 'Since 2024 foreign visitors use a ticketed route through the upper galleries; worshippers enter the ground floor free through a separate entrance.',
    refs: [['istanbul.com: Hagia Sophia tickets and hours (commercial)', 'https://istanbul.com/hagia-sophia']],
    official: 'Turkish Ministry of Culture and Tourism museums portal (muze.gov.tr)',
  },
  {
    topic: 'Büyük Valide Han',
    where: ['/regions/istanbul/', '/caravan-route/'],
    fact: 'Built for Kösem Valide Sultan in 1651; still houses workshops; roof access banned in 2016 after damage to the dome.',
    refs: [
      ['Wikipedia: Büyük Valide Han', 'https://en.wikipedia.org/wiki/B%C3%BCy%C3%BCk_Valide_Han'],
      ['Lonely Planet: Büyük Valide Han', 'https://www.lonelyplanet.com/points-of-interest/buyuk-valide-han/1285590'],
      ['İndigo Dergisi: dome damage (Turkish)', 'https://indigodergisi.com/2017/12/kosem-sultan-buyuk-valide-han'],
    ],
  },
  {
    topic: 'Koza Han, Bursa',
    where: ['/caravan-route/'],
    fact: 'Ordered by Bayezid II in 1490, opened 1491, to fund his İstanbul foundations; long the centre of Bursa’s silk-cocoon trade.',
    refs: [
      ['Wikipedia: Koza Han', 'https://en.wikipedia.org/wiki/Koza_Han'],
      ['Advantour: Koza Han', 'https://www.advantour.com/turkey/bursa/koza-han.htm'],
    ],
  },
  {
    topic: 'Sultanhanı (Aksaray)',
    where: ['/caravan-route/'],
    fact: 'Dated 1229 by its inscription, built for Alaeddin Keykubad I; restored and extended after a fire in 1278; among the largest Seljuk caravanserais.',
    refs: [
      ['Wikipedia: Sultan Han', 'https://en.wikipedia.org/wiki/Sultan_Han'],
      ['Daily Sabah (2019): Sultanhanı opens to visitors', 'https://www.dailysabah.com/history/2019/09/19/turkeys-largest-caravanserai-on-historic-silk-road-to-open-to-visitors/amp'],
    ],
  },
  {
    topic: 'Saruhan, Ağzıkarahan, Karatay Han, Alara Han',
    where: ['/caravan-route/', '/regions/cappadocia/'],
    fact: 'Saruhan 1249 (Keykavus II), with evening sema ceremonies; Ağzıkarahan completed 1239; Karatay Han 1240; Alara Han 1231–32.',
    refs: [
      ['Turkish Archaeological News: Sarı Han', 'https://turkisharchaeonews.net/site/sar%C4%B1-han-caravanserai'],
      ['Lonely Planet: Saruhan', 'https://www.lonelyplanet.com/points-of-interest/saruhan/1249743'],
      ['Wikipedia: list of Seljuk caravanserais', 'https://en.wikipedia.org/wiki/List_of_Seljuk_caravanserais_in_Turkey'],
      ['TDV İslâm Ansiklopedisi: Kervansaray (Turkish)', 'https://islamansiklopedisi.org.tr/kervansaray'],
    ],
  },
  {
    topic: 'Erzurum, Doğubayazıt and Şanlıurfa hans',
    where: ['/caravan-route/'],
    fact: 'Rüstem Paşa caravanserai (Taşhan) completed 1561, now about a hundred oltu-stone workshops and shops; İshak Paşa Palace begun 1685, completed in the 18th century; Gümrük Hanı built 1562–63.',
    refs: [
      ['Wikipedia: Rüstem Pasha Caravanserai (Erzurum)', 'https://en.wikipedia.org/wiki/R%C3%BCstem_Pasha_Caravanserai_(Erzurum)'],
      ['Wikipedia: Ishak Pasha Palace', 'https://en.wikipedia.org/wiki/Ishak_Pasha_Palace'],
      ['Hürriyet Daily News: Şanlıurfa’s bazaars', 'https://hurriyetdailynews.com/sanliurfas-bazaars-have-much-to-offer-tourists-6403'],
    ],
  },
  {
    topic: 'Cappadocia balloon flight decisions',
    where: ['/balloon-guide/'],
    fact: 'SHGM makes one region-wide decision each morning, shown as a coloured flag; wind is the main cause of cancellations.',
    refs: [
      ['Wego: Cappadocia balloon weather and cancellations', 'https://blog.wego.com/cappadocia-balloon-cancellation/'],
      ['Kiwitaxi: Cappadocia hot-air balloons guide', 'https://kiwitaxi.com/en/guide/turkey/cappadocia-hot-air-balloons-a-complete-guide'],
    ],
    official: 'Directorate General of Civil Aviation (SHGM), shgm.gov.tr',
  },
  {
    topic: 'Sumela Monastery',
    where: ['/regions/black-sea/', '/journeys/'],
    fact: 'Reopened to visitors in 2021 after more than five years of restoration.',
    refs: [['Anadolu Agency (2021): Sumela reopens after restoration', 'https://aa.com.tr/en/culture/turkey-reopens-sumela-monastery-after-5-year-massive-restoration/2291792']],
  },
  {
    topic: 'Göbekli Tepe',
    where: ['/regions/southeast/'],
    fact: 'Enclosures built by hunter-gatherers c. 9600–8200 BC; UNESCO World Heritage Site since 2018; protective roofs built from 2016.',
    refs: [
      ['UNESCO: Göbekli Tepe', 'https://whc.unesco.org/en/list/1572'],
      ['Hürriyet Daily News: Göbeklitepe aspires to UNESCO status', 'https://hurriyetdailynews.com/gobeklitepe-aspires-to-unesco-status-121190'],
      ['Duvar English: protection of Göbekli Tepe', 'https://www.duvarenglish.com/culture/2020/02/17/archaeologist-schmidt-cries-out-against-poor-protection-of-gobekli-tepe'],
    ],
  },
  {
    topic: 'Mor Gabriel Monastery',
    where: ['/regions/southeast/'],
    fact: 'Founded in 397; still active as the seat of the metropolitan of Tur Abdin.',
    refs: [['Wikipedia: Mor Gabriel Monastery', 'https://en.wikipedia.org/wiki/Mor_Gabriel_Monastery']],
  },
  {
    topic: 'Lake Van and Akdamar',
    where: ['/regions/lake-van/'],
    fact: 'Surface about 1,640 m; saline soda lake with no outflow; Church of the Holy Cross built 915–921.',
    refs: [
      ['Wikipedia: Lake Van', 'https://en.wikipedia.org/wiki/Lake_Van'],
      ['UNESCO Tentative List: Akdamar Church', 'https://whc.unesco.org/en/tentativelists/6035'],
    ],
  },
  {
    topic: 'Ephesus and Pamukkale tickets',
    where: ['/regions/aegean/', '/regions/pamukkale/'],
    fact: 'Ephesus Terrace Houses need a separate ticket; swimming in the Hierapolis antique pool is a separate fee.',
    refs: [
      ['The Ephesus: tickets and opening hours', 'https://www.theephesus.com/ephesus-tickets-opening-hours/'],
      ['In Your Pocket: Pamukkale', 'https://www.inyourpocket.com/turkey/articles/pamukkale-is-turkeys-cotton-castle-worth-the'],
    ],
    official: 'muze.gov.tr (prices are usually revised each January)',
  },
  {
    topic: 'Ramadan and religious holidays 2027',
    where: ['/etiquette/', '/when-to-go/'],
    fact: 'First day of fasting 8 February 2027; Ramazan Bayramı 9–11 March 2027; Kurban Bayramı expected 16–19 May 2027.',
    refs: [
      ['Evrensel: Diyanet announces 2027 calendar (Turkish)', 'https://www.evrensel.net/haber/5997565/diyanet-2027-takvimini-duyurdu-ramazan-ne-zaman-basliyor'],
      ['Milli Gazete: 2027 Ramazan dates (Turkish)', 'https://www.milligazete.com.tr/2027-ramazan-ayi-hangi-gun-basliyor-ilk-sahura-ne-zaman-kalkilacak-diyanete-gore-ilk-oruc-kadir-gecesi-arefe-ve-bay'],
    ],
    official: 'Presidency of Religious Affairs (Diyanet), diyanet.gov.tr',
  },
];
