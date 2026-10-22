// "When to go" grid. 3 = best, 2 = good, 1 = possible but hard (heat, cold,
// rain or closures). These are general patterns, not forecasts.

export const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
export const RATING = { 3: 'Best', 2: 'Good', 1: 'Hard' };

export const seasons = [
  { region: 'istanbul', label: 'İstanbul', months: [1, 1, 2, 3, 3, 2, 2, 2, 3, 3, 2, 1], note: 'Grey, wet winters; humid summers.' },
  { region: 'cappadocia', label: 'Cappadocia', months: [1, 1, 2, 3, 3, 3, 2, 2, 3, 3, 2, 1], note: 'Snow and cold in winter; more balloon cancellations.' },
  { region: 'aegean', label: 'Aegean (Ephesus, Pergamon)', months: [1, 2, 2, 3, 3, 2, 1, 1, 2, 3, 2, 1], note: 'Very hot on open sites in July and August.' },
  { region: 'pamukkale', label: 'Pamukkale', months: [1, 2, 2, 3, 3, 2, 1, 1, 2, 3, 2, 1], note: 'White stone reflects summer heat.' },
  { region: 'lycian-coast', label: 'Lycian coast: walking', months: [1, 2, 3, 3, 3, 2, 1, 1, 2, 3, 3, 2], note: 'Too hot to walk far in high summer.' },
  { region: 'lycian-coast', label: 'Lycian coast: swimming', months: [1, 1, 1, 1, 2, 3, 3, 3, 3, 3, 2, 1], note: 'Sea warmest August to October.' },
  { region: 'black-sea', label: 'Black Sea', months: [1, 1, 1, 1, 2, 3, 3, 3, 3, 2, 1, 1], note: 'Rain all year; high pastures only in summer.' },
  { region: 'southeast', label: 'Southeast (Urfa, Mardin)', months: [1, 2, 3, 3, 3, 2, 1, 1, 2, 3, 3, 2], note: 'Summers are extremely hot.' },
  { region: 'lake-van', label: 'Lake Van', months: [1, 1, 1, 1, 2, 3, 3, 3, 3, 2, 1, 1], note: 'Long, severe winters on the plateau.' },
];
