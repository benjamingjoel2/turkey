// Lycian Way stages for the planner (/lycian-way/), west to east.
// Distances and times are APPROXIMATE, rounded from published stage lists;
// waymarking and routes change after fires and road building. Check every
// stage against the current official guide before booking (see FACTS-TO-VERIFY.md).
//
// difficulty: 1 = easy, 2 = moderate, 3 = hard
// sleep: where walkers usually stay at the END of the stage. `stay` names are
// placeholders matching src/data/stays.mjs.

export const DIFFICULTY = { 1: 'Easy', 2: 'Moderate', 3: 'Hard' };

export const stages = [
  { id: 1, from: 'Ovacık (Ölüdeniz)', to: 'Faralya', km: 15, hours: '5–6', difficulty: 2,
    note: 'Climbs above the Ölüdeniz lagoon, then traverses pine slopes with views of paragliders.',
    sleep: 'Faralya: village pensions above Butterfly Valley', stay: 'Placeholder: Faralya cliff-top pension' },
  { id: 2, from: 'Faralya', to: 'Kabak', km: 8, hours: '3', difficulty: 1,
    note: 'Short and lovely; time for a swim in the cove at Kabak.',
    sleep: 'Kabak: tented and cabin camps in the valley', stay: 'Placeholder: Kabak valley camp' },
  { id: 3, from: 'Kabak', to: 'Alınca', km: 11, hours: '5–6', difficulty: 3,
    note: 'A long, steep climb to a cliff-edge village at about 800 m. Start early and carry water.',
    sleep: 'Alınca: village homestays', stay: 'Placeholder: Alınca village house' },
  { id: 4, from: 'Alınca', to: 'Gey', km: 13, hours: '5', difficulty: 2,
    note: 'High mountain paths and old shepherd tracks with the sea far below.',
    sleep: 'Gey: village guesthouses', stay: 'Placeholder: Gey guesthouse' },
  { id: 5, from: 'Gey', to: 'Bel', km: 10, hours: '4', difficulty: 2,
    note: 'Terraced fields and a long descent through the forest.',
    sleep: 'Bel: village pension', stay: 'Placeholder: Bel village pension' },
  { id: 6, from: 'Bel', to: 'Gavurağılı', km: 11, hours: '4', difficulty: 2,
    note: 'Down towards the coast with views of the Patara plain.',
    sleep: 'Gavurağılı: farm pensions', stay: 'Placeholder: Gavurağılı farmhouse' },
  { id: 7, from: 'Gavurağılı', to: 'Patara (via Pydnai and Letoon)', km: 22, hours: '7–8', difficulty: 2,
    note: 'Past the Hellenistic walls of Pydnai and the sanctuary of Letoon; long and flat-ish, with soft sand near the end.',
    sleep: 'Patara (Gelemiş village): small hotels', stay: 'Placeholder: Patara garden pension' },
  { id: 8, from: 'Patara', to: 'Kalkan', km: 14, hours: '5', difficulty: 2,
    note: 'Inland past the Roman aqueduct at Delikkemer, then down to Kalkan harbour.',
    sleep: 'Kalkan: guesthouses and small hotels', stay: 'Placeholder: Kalkan old-town house' },
  { id: 9, from: 'Kalkan', to: 'Bezirgan', km: 10, hours: '4', difficulty: 3,
    note: 'A sharp climb up to a high farming plateau with traditional wooden granaries.',
    sleep: 'Bezirgan: village houses', stay: 'Placeholder: Bezirgan stone house' },
  { id: 10, from: 'Bezirgan', to: 'Kaş (via Çukurbağ)', km: 22, hours: '7–8', difficulty: 3,
    note: 'Long and rocky, past Lycian tombs, before the descent to Kaş.',
    sleep: 'Kaş: plenty of choice', stay: 'Placeholder: Kaş harbour hotel' },
  { id: 11, from: 'Kaş', to: 'Boğazcık', km: 17, hours: '6', difficulty: 2,
    note: 'Around the bay and over the hills; can be shortened by taxi.',
    sleep: 'Boğazcık: village pension', stay: 'Placeholder: Boğazcık pension' },
  { id: 12, from: 'Boğazcık', to: 'Üçağız (via Aperlai)', km: 20, hours: '7', difficulty: 2,
    note: 'Coastal path to the half-sunken ruins of Aperlai, then on to the Kekova shore.',
    sleep: 'Üçağız: waterside pensions', stay: 'Placeholder: Üçağız waterside pension' },
  { id: 13, from: 'Üçağız', to: 'Demre (Andriake)', km: 18, hours: '6', difficulty: 2,
    note: 'Past Kaleköy (Simena) castle and down to the ancient harbour of Andriake.',
    sleep: 'Demre: small hotels near Myra', stay: 'Placeholder: Demre orange-grove guesthouse' },
  { id: 14, from: 'Adrasan', to: 'Olympos', km: 14, hours: '6–7', difficulty: 3,
    note: 'Over the shoulder of Mount Musa to the overgrown ruins of Olympos. (The stages between Demre and Adrasan are usually skipped by bus.)',
    sleep: 'Olympos: tree-house and cabin camps', stay: 'Placeholder: Olympos river cabins' },
  { id: 15, from: 'Olympos', to: 'Çıralı', km: 3, hours: '1', difficulty: 1,
    note: 'A beach walk. Go up to the Chimaera flames after dark.',
    sleep: 'Çıralı: guesthouses in orange groves', stay: 'Placeholder: Çıralı garden guesthouse' },
  { id: 16, from: 'Çıralı', to: 'Ulupınar', km: 11, hours: '4–5', difficulty: 2,
    note: 'Past the Chimaera and up through forest to a village of trout restaurants.',
    sleep: 'Ulupınar: riverside lodges', stay: 'Placeholder: Ulupınar riverside lodge' },
];
