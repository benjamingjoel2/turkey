# Facts to verify

Everything on the site that can change, or that I wrote from general knowledge
without checking a primary source this season. Check each item before launch and
again before each season. Tick it off and note the source and date when you do.

Files are under `src/`. Search for the quoted text to find it.

**Status key:** `[x]` = checked by web search on 2026-10-21, with sources on the
site's `/sources/` page (`src/data/sources.mjs`). Most of those sources are
secondary (Wikipedia, news, travel guides); the official Turkish sites
(muze.gov.tr, diyanet.gov.tr, shgm.gov.tr, evisa.gov.tr) were not reachable
from the build environment, so confirm against them before launch. `[ ]` =
still unchecked.

## Entry and visas

- [ ] **Visa rules by nationality.** The site deliberately states no visa rules. Before adding any, check the official e-Visa site (evisa.gov.tr), the Turkish Ministry of Foreign Affairs (mfa.gov.tr) and each market's own government travel advice. Rules for UK, US, Canadian, Australian and EU passports have changed in recent years.
- [ ] **Passport validity** required on entry (often quoted as at least 150 days beyond the stay). Not on the site yet. Verify before adding.
- [ ] **Travel advice for the southeast and the east** (`regions.mjs`: southeast, Lake Van "Check your government's current travel advice"). Confirm that wording still fits current FCDO/State Department advice for Şanlıurfa, Mardin and Van provinces.

## Tickets, opening and access

- [x] **Hagia Sophia, İstanbul**: foreign visitors use a ticketed upper-gallery route (since January 2024); worshippers enter free via a separate entrance. Source is a commercial ticket site; confirm on muze.gov.tr. A dome restoration reported from April 2025 is unverified and not mentioned.
- [x] **Ephesus Terrace Houses** need a separate ticket (`regions.mjs`: Aegean, `Ephesus` highlight).
- [ ] **Göreme Open-Air Museum: Dark Church** has a separate ticket (`regions.mjs`: Cappadocia).
- [ ] **Pergamon cable car** is running (`regions.mjs`: Aegean).
- [ ] **Pamukkale**: barefoot rule on the travertines and the set path (not confirmed by search). The separate fee for the antique pool is confirmed `[x]` (`regions.mjs`: Pamukkale).
- [x] **Sumela Monastery** reopened in 2021 after more than five years of restoration (Anadolu Agency). Text updated. No 2025–26 status found: check opening hours.
- [x] **Göbekli Tepe**: protective roofs (built from 2016), UNESCO listing 2018, dated c. 9600–8200 BC. The museum's "reconstruction of one enclosure" rests on a 2018 news report: confirm.
- [ ] **Akdamar Island** boat service runs, and in which months (`regions.mjs`: Lake Van).
- [x] **Saruhan caravanserai**: evening sema (whirling dervish) performances still held (`regions.mjs`: Cappadocia; `caravan.mjs`).
- [ ] **Museum Pass Türkiye and ticket prices.** No prices are on the site by design. If you add any, take them from muze.gov.tr and date them.
- [x] **Büyük Valide Han rooftop.** Roof access was banned in 2016 after visitors damaged the dome. **Corrected:** the site now asks visitors to stay off the roofs.

## Cappadocia balloons (`src/pages/balloon.mjs`, `journal.mjs`)

- [x] SHGM makes one region-wide decision each morning, shown as a flag (green fly / red grounded; sources disagree on what yellow means, so the site doesn't mention it).
- [ ] Flights can run in every month; spring and autumn are generally the most reliable; winter has more cancellations.
- [ ] Typical timings: pick-up about an hour before sunrise, about an hour in the air.
- [ ] Operators usually try to rebook a cancelled flight for the next morning. Policies vary, so confirm with the operators you actually use.
- [ ] Safety and suitability notes (pregnancy, mobility, weight limits): check against your operators' conditions.

## Lycian Way (`src/data/lycian.mjs`, `src/pages/lycian.mjs`)

- [x] **Total length.** **Corrected:** opened at a little over 500 km, now about 760 km with extensions (Wikipedia; Culture Routes Society per secondary sources). Older 535–540 km figures are for the original route to Geyikbayırı.
- [ ] **Every stage**: start and end points, distance, time, difficulty. All are approximate and should be checked against the current official guide (Culture Routes Society / Kate Clow's guidebook) and recent GPX tracks. Routes change after fires and road building.
- [ ] Stage 3, Alınca "at about 800 m".
- [ ] Walkers usually skip Demre to Adrasan by bus.
- [ ] Where to sleep at each stage end (village pensions, camps). Confirm they still operate.
- [ ] Best walking months (March–May, October–November).

## Seasons and holidays (`src/data/seasons.mjs`, `src/pages/plan.mjs`, `src/pages/etiquette.mjs`)

- [x] **Ramadan 2027**: first day of fasting 8 February 2027; Ramazan Bayramı 9–11 March 2027 (Turkish press citing Diyanet's 2027 calendar). **Corrected** from "to 9 March".
- [x] **Kurban Bayramı 2027**: 16–19 May 2027 (single source; confirm with Diyanet).
- [ ] **National holidays** listed: 23 April, 1 May, 19 May, 15 July, 30 August, 29 October.
- [ ] The month-by-month ratings in `seasons.mjs` are editorial judgements. Review them with your own on-the-ground experience.
- [ ] Black Sea yayla season ("only lived in during summer").

## Places, history and dates

### Caravan route (`src/data/caravan.mjs`)
- [x] Büyük Valide Han: Kösem Sultan, 1651. (Three courtyards and Persian silk merchants not checked.)
- [x] Koza Han, Bursa: ordered 1490, opened 1491. **Corrected:** the June–July cocoon-market claim could not be confirmed and was removed.
- [x] Sultanhanı (Aksaray): 1229, Keykubad I, restored 1278, among the largest. **Corrected:** "stayed free for up to three days" was unsupported and removed.
- [x] Ağzıkarahan: completed 1239 (single Turkish source).
- [x] Saruhan: 1249, Keykavus II. ("The last great Seljuk han" is editorial; not checked.)
- [ ] Kayseri Sultanhanı: 1230s; Karatay Han portal carvings (animals and dragons). Karatay Han dated 1240 `[x]` (single source).
- [ ] Sivas Çifte Minareli Medrese: 13th century.
- [x] Erzurum Rüstem Paşa caravanserai: completed 1561; about a hundred oltu-stone workshops and shops.
- [ ] Trabzon as the Black Sea terminus of the Tabriz route; Empire of Trebizond.
- [x] İshak Paşa Palace: begun 1685, completed in the 18th century (1784 per one source).
- [x] Şanlıurfa Gümrük Hanı: 1562 or 1563 (sources differ); site says "early 1560s".
- [x] Alara Han: 1231–32.
- [ ] "For seven centuries caravans crossed Anatolia" (`home.mjs`).
- [ ] Caravanserais "roughly a day's march apart", "perhaps 30 to 40 kilometres" (`caravan.mjs` page lede, `journal.mjs`).

### Regions (`src/data/regions.mjs`)
- [ ] Hagia Sophia: sixth-century church, mosque, museum, mosque again since 2020.
- [ ] Ephesus Great Theatre capacity "around 25,000".
- [ ] Ephesus Museum in Selçuk holds the Artemis statues.
- [ ] Pergamon theatre "one of the steepest in the ancient world".
- [ ] Hierapolis necropolis "one of the largest ancient cemeteries in Anatolia".
- [ ] Aphrodisias stadium "one of the best-preserved anywhere".
- [ ] Xanthos and Letoon are a joint UNESCO World Heritage Site.
- [x] Göbekli Tepe: UNESCO dates the enclosures to 9600–8200 BC, built by hunter-gatherers. Text now says "more than 11,000 years ago, before pottery or writing".
- [x] Mor Gabriel: founded 397, still active, seat of the metropolitan of Tur Abdin.
- [x] Lake Van: about 1,640 m (**corrected** from 1,650), saline soda lake, no outflow, Türkiye's largest lake.
- [x] Akdamar Church of the Holy Cross: 915–921 (UNESCO Tentative List); now a museum.
- [ ] Trabzon Hagia Sophia: thirteenth century.
- [ ] Hasankeyf is not mentioned (it was largely flooded by the Ilısu dam in 2020). Keep it that way unless you add accurate notes.
- [ ] Distance İstanbul to Lake Van "around 1,250 km in a straight line, about the distance from London to Vienna" (`pages/regions.mjs`).

### Getting there (`src/data/regions.mjs`)
- [ ] Airport codes and current routes: IST, SAW, ASR, NAV, ADB, DNZ, DLM, AYT, TZX, RZV, GNY, MQM, VAN.
- [ ] Drive times: Selçuk "about an hour" from İzmir, Bergama "about two hours", Pamukkale "around three hours from Selçuk", Kayseri/Nevşehir airports "about an hour" from Cappadocia.

## Food and customs (`src/pages/food.mjs`, `src/pages/etiquette.mjs`, `journal.mjs`)
- [ ] "Kahvaltı" meaning "before coffee" (folk etymology, widely quoted).
- [ ] Tipping "around 10%".
- [ ] Tap water "generally treated, but most people drink bottled".
- [ ] Mosque visiting rules (dress, scarves lent at large mosques, prayer duration "around 20–30 minutes", Friday midday prayer).

## Business details (`site.config.mjs`, `src/pages/site.mjs`)
- [ ] All contact details are placeholders (`.example` email, `+90 000…` phone, placeholder address).
- [ ] "We reply within two working days" (enquiry page). Make sure you can keep this promise.
- [ ] All stay names are placeholders (`src/data/stays.mjs`, `src/data/lycian.mjs`).
- [ ] Journal post dates (`src/data/journal.mjs`) are set to before launch. Adjust to real publish dates.

## Photos (`src/data/photos.mjs`)
- [ ] Three photos have no Unsplash location tag and were accepted on the photographer's caption plus an unmistakable landmark: Cappadocia balloons (`sqWpPdIU_ao`), Ephesus/Library of Celsus (`5X7tBwSV9KU`), Sumela Monastery (`mXfq5VCQ_Pw`). Replace them with geotagged photos if you want a stricter standard.
- [x] Lake Van photos added (Akdamar church and Lake Van from Akdamar), both with Unsplash location tags.
- [x] Rejected during selection: two "Turkish breakfast" photos whose location tags were Baku and Wilmslow (UK).
