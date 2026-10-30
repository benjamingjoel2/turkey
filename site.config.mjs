// ─────────────────────────────────────────────────────────────────────────────
// SITE CONFIG: the one file to edit to rebrand the site.
//
// Everything brand-specific lives here: name, tagline, contact details, palette
// and fonts. Pages read these values at build time, so after editing run
// `npm run build` (or keep `npm run dev` running) and every page updates.
//
// The build checks the palette against WCAG AA (see `contrastPairs` below) and
// stops with an error if a text/background pair falls under 4.5:1.
// ─────────────────────────────────────────────────────────────────────────────

export default {
  brand: {
    name: 'Kervan Journeys',
    // Short form used in the header on narrow screens and in the favicon.
    shortName: 'Kervan',
    monogram: 'K',
    tagline: 'Slow journeys through Türkiye, along the old caravan roads',
    // Shown on the About page and in the footer.
    nameStory:
      '“Kervan” is Turkish for caravan. For centuries caravans of camels and mules carried silk, spices and news across Anatolia, resting each night at a caravanserai, a fortified inn built a day’s march from the last. We plan journeys at that pace.',

    // Alternative brand, ready to swap in. Replace the four fields above with:
    //   name: 'Meander Türkiye', shortName: 'Meander', monogram: 'M',
    //   tagline: 'Winding journeys through Türkiye, for the curious',
    //   nameStory: 'The word “meander” comes from the Maeander, today the Büyük Menderes,
    //     a river in western Türkiye so winding that the Greeks made its name a verb.
    //     We plan journeys that wander the same way.'
  },

  // Public URL once deployed (used for canonical links and the sitemap).
  siteUrl: 'https://kervanjourneys.tourground.com',
  locale: 'en-GB',

  // PLACEHOLDER contact details: replace before launch.
  contact: {
    // One address per brand, in the owner's format {brandname}@tourground.com.
    email: 'kervanjourneys@tourground.com',
    // Business address: Kolektif House Levent, İstanbul (owner-approved coworking arrangement).
    // Source: OpenStreetMap, "Kolektif House Levent", Harman Sokağı 5, Ortabayır, 34413 Kâğıthane.
    address: 'Kolektif House Levent, Harman Sokağı No. 5, Ortabayır, 34413 Kâğıthane, İstanbul, Türkiye',
    hours: 'Mon–Fri, 09:00–18:00 (Türkiye time, UTC+3)',
  },

  // Enquiry form. On a static host the form needs somewhere to send data.
  // Set `endpoint` to a form service URL (Formspree, Basin, Getform, a Vercel
  // function, …) that accepts a POST. If left empty, the form opens the
  // visitor's email app with the enquiry filled in, addressed to contact.email.
  enquiry: {
    endpoint: '',
  },

  // Palette. Names describe where each colour comes from.
  palette: {
    iznik: '#1D4778',       // İznik tile cobalt: links, headings on light grounds
    iznikDeep: '#0D1C2C',   // night over the plateau: dark sections, footer
    turquoise: '#1C716A',   // turquoise glaze, darkened for text contrast
    turquoiseLight: '#93D2C8', // turquoise glaze for accents on dark grounds
    stone: '#ECE4D6',       // Cappadocia tuff: alternate section background
    stoneDeep: '#D3C4AC',   // darker tuff: hairlines and borders
    rose: '#924640',        // Rose Valley at dusk, darkened for text use
    roseLight: '#E6BCAE',   // pale rose for accents on dark grounds
    saffron: '#DDA43C',     // saffron: small highlights, map pins, focus rings
    pomegranate: '#8A1C2E', // pomegranate: primary buttons
    ink: '#1C1A17',         // body text
    inkSoft: '#57504A',     // secondary text
    paper: '#F6F1E9',       // page background
    white: '#FFFFFF',
  },

  // Text/background pairs that the site actually uses. The build verifies each
  // reaches 4.5:1 (WCAG AA for normal text). Add a pair here if you use a new one.
  contrastPairs: [
    ['ink', 'paper'], ['inkSoft', 'paper'], ['ink', 'stone'], ['inkSoft', 'stone'], ['ink', 'white'],
    ['iznik', 'paper'], ['iznik', 'stone'], ['iznik', 'white'], ['turquoise', 'paper'], ['rose', 'paper'],
    ['rose', 'stone'], ['pomegranate', 'paper'], ['white', 'pomegranate'], ['white', 'iznik'],
    ['white', 'iznikDeep'], ['paper', 'iznikDeep'], ['stone', 'iznikDeep'], ['turquoiseLight', 'iznikDeep'],
    ['saffron', 'iznikDeep'], ['roseLight', 'iznikDeep'], ['ink', 'saffron'], ['white', 'turquoise'],
    ['inkSoft', 'white'],
  ],

  fonts: {
    // Self-hosted in src/assets/fonts (fonts.css lists them). They were downloaded from this
    // Google Fonts URL (latin + latin-ext), and the latin-ext files were cut down to the
    // Turkish letters ı İ ş Ş ğ Ğ plus œ Œ Ÿ š ž, so every page still renders Turkish names:
    // https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,300..600;1,6..72,300..500&family=Instrument+Sans:wght@400..600&family=Geist+Mono:wght@400;500&display=swap
    display: '"Newsreader", "Iowan Old Style", Georgia, serif',
    body: '"Instrument Sans", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
    mono: '"Geist Mono", ui-monospace, "SFMono-Regular", Menlo, monospace',
  },
};
