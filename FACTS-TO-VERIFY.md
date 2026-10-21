# Facts to verify

Everything on the site that can change, or that I wrote from general knowledge
without checking a primary source this season. Check each item before launch and
again before each season. Tick it off and note the source and date when you do.

Files are under `src/`. Search for the quoted text to find it.

## Entry and visas

- [ ] **Visa rules by nationality.** The site deliberately states no visa rules. Before adding any, check the official e-Visa site (evisa.gov.tr), the Turkish Ministry of Foreign Affairs (mfa.gov.tr) and each market's own government travel advice. Rules for UK, US, Canadian, Australian and EU passports have changed in recent years.
- [ ] **Passport validity** required on entry (often quoted as at least 150 days beyond the stay). Not on the site yet. Verify before adding.
- [ ] **Travel advice for the southeast and the east** (`regions.mjs`: southeast, Lake Van "Check your government's current travel advice"). Confirm that wording still fits current FCDO/State Department advice for Şanlıurfa, Mardin and Van provinces.

## Tickets, opening and access

- [ ] **Hagia Sophia, İstanbul**: visitor access, ticketing for foreign visitors (a paid visitor route was introduced in 2024) and the status of the upper gallery. `regions.mjs` (İstanbul) mentions visiting outside prayer times.
- [ ] **Ephesus Terrace Houses** need a separate ticket (`regions.mjs`: Aegean, `Ephesus` highlight).
- [ ] **Göreme Open-Air Museum: Dark Church** has a separate ticket (`regions.mjs`: Cappadocia).
- [ ] **Pergamon cable car** is running (`regions.mjs`: Aegean).
- [ ] **Pamukkale**: barefoot rule on the travertines, the set path, and the separate fee for the "antique pool" (Cleopatra's pool) (`regions.mjs`: Pamukkale).
- [ ] **Sumela Monastery** opening status. Closed for long restoration in recent years; the site says to "check opening before you go" (`regions.mjs`: Black Sea; `journeys.mjs`: "Sumela (if open)").
- [ ] **Göbekli Tepe** has a protective roof over the main enclosures, and the finds are at the Şanlıurfa Archaeology Museum (`regions.mjs`: southeast).
- [ ] **Akdamar Island** boat service runs, and in which months (`regions.mjs`: Lake Van).
- [ ] **Saruhan caravanserai**: evening sema (whirling dervish) performances still held (`regions.mjs`: Cappadocia; `caravan.mjs`).
- [ ] **Museum Pass Türkiye and ticket prices.** No prices are on the site by design. If you add any, take them from muze.gov.tr and date them.
- [ ] **Büyük Valide Han rooftop.** The site says "climb (with permission)". Access has been restricted at times (`regions.mjs`: İstanbul).

## Cappadocia balloons (`src/pages/balloon.mjs`, `journal.mjs`)

- [ ] SHGM (Directorate General of Civil Aviation) makes the daily fly / no-fly decision, and operators cannot override it.
- [ ] Flights can run in every month; spring and autumn are generally the most reliable; winter has more cancellations.
- [ ] Typical timings: pick-up about an hour before sunrise, about an hour in the air.
- [ ] Operators usually try to rebook a cancelled flight for the next morning. Policies vary, so confirm with the operators you actually use.
- [ ] Safety and suitability notes (pregnancy, mobility, weight limits): check against your operators' conditions.

## Lycian Way (`src/data/lycian.mjs`, `src/pages/lycian.mjs`)

- [ ] **Total length.** The site says "more than 500 km". Published figures vary (the original route was about 509 km; with later extensions it is often quoted as about 540 km or more).
- [ ] **Every stage**: start and end points, distance, time, difficulty. All are approximate and should be checked against the current official guide (Culture Routes Society / Kate Clow's guidebook) and recent GPX tracks. Routes change after fires and road building.
- [ ] Stage 3, Alınca "at about 800 m".
- [ ] Walkers usually skip Demre to Adrasan by bus.
- [ ] Where to sleep at each stage end (village pensions, camps). Confirm they still operate.
- [ ] Best walking months (March–May, October–November).

## Seasons and holidays (`src/data/seasons.mjs`, `src/pages/plan.mjs`, `src/pages/etiquette.mjs`)

- [ ] **Ramadan 2027**: "expected to run from about 8 February to 9 March", with Ramazan Bayramı straight after. Confirm with the Diyanet calendar.
- [ ] **Kurban Bayramı 2027**: "around mid-May 2027".
- [ ] **National holidays** listed: 23 April, 1 May, 19 May, 15 July, 30 August, 29 October.
- [ ] The month-by-month ratings in `seasons.mjs` are editorial judgements. Review them with your own on-the-ground experience.
- [ ] Black Sea yayla season ("only lived in during summer").

## Places, history and dates

### Caravan route (`src/data/caravan.mjs`)
- [ ] Büyük Valide Han: built for Kösem Sultan, 1651, three courtyards, Persian silk merchants.
- [ ] Koza Han, Bursa: 1490s, built for the silk trade; cocoon market held every June–July.
- [ ] Sultanhanı (Aksaray): 1229; "one of the largest" Seljuk caravanserais; travellers "stayed free for up to three days".
- [ ] Ağzıkarahan: 1230s.
- [ ] Saruhan: 1249; "the last great Seljuk han".
- [ ] Kayseri Sultanhanı: 1230s; Karatay Han portal carvings (animals and dragons).
- [ ] Sivas Çifte Minareli Medrese: 13th century.
- [ ] Erzurum Rüstem Paşa caravanserai: 16th century; oltu stone workshops.
- [ ] Trabzon as the Black Sea terminus of the Tabriz route; Empire of Trebizond.
- [ ] İshak Paşa Palace: 18th century.
- [ ] Şanlıurfa Gümrük Hanı: 1560s.
- [ ] Alara Han: 1230s.
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
- [ ] Göbekli Tepe "around 11,000 years ago", "before farming, pottery or writing".
- [ ] Mor Gabriel "one of the oldest active monasteries in the world".
- [ ] Lake Van "around 1,650 metres", alkaline, "Türkiye's largest lake".
- [ ] Akdamar Church of the Holy Cross: tenth century.
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
- [ ] Lake Van has no photo yet (shows a tile panel). Add one only once its location is confirmed.
