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
  siteUrl: 'https://kervan-journeys.vercel.app',
  locale: 'en-GB',

  // PLACEHOLDER contact details: replace before launch.
  contact: {
    email: 'hello@kervan-journeys.example',
    phone: '+90 000 000 00 00',
    whatsapp: '', // e.g. '+905550000000'; leave empty to hide
    address: 'Placeholder address, İstanbul',
    hours: 'Mon–Fri, 09:00–18:00 (Türkiye time, UTC+3)',
    instagram: '', // e.g. 'https://instagram.com/yourhandle'; empty hides it
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
    iznik: '#1B4A82',       // İznik tile cobalt: headings, links, header band
    iznikDeep: '#0F2F57',   // darker tile blue: footer, hero overlay
    turquoise: '#1F7A72',   // turquoise glaze, darkened for text contrast
    turquoiseLight: '#7FC8BE', // turquoise for decoration on dark grounds
    stone: '#EDE3D3',       // Cappadocia tuff: alternate section background
    stoneDeep: '#D9C8AE',   // darker tuff: borders, rules
    rose: '#954840',        // Rose Valley at dusk, darkened for text use
    roseLight: '#E4B8A8',   // pale rose for decoration
    saffron: '#E2A529',     // saffron: highlights, focus rings (on dark text)
    pomegranate: '#8C1D2F', // pomegranate: primary buttons, key accents
    ink: '#221D19',         // body text
    inkSoft: '#4E453D',     // secondary text
    paper: '#FBF7F0',       // page background
    white: '#FFFFFF',
  },

  // Text/background pairs that the site actually uses. The build verifies each
  // reaches 4.5:1 (WCAG AA for normal text). Add a pair here if you use a new one.
  contrastPairs: [
    ['ink', 'paper'], ['inkSoft', 'paper'], ['ink', 'stone'], ['inkSoft', 'stone'],
    ['iznik', 'paper'], ['iznik', 'stone'], ['turquoise', 'paper'], ['rose', 'paper'],
    ['pomegranate', 'paper'], ['white', 'pomegranate'], ['white', 'iznik'],
    ['white', 'iznikDeep'], ['stone', 'iznikDeep'], ['turquoiseLight', 'iznikDeep'],
    ['saffron', 'iznikDeep'], ['ink', 'saffron'], ['white', 'turquoise'], ['ink', 'white'],
    ['rose', 'stone'], ['rose', 'white'], ['iznik', 'white'], ['inkSoft', 'white'], ['pomegranate', 'stone'],
  ],

  fonts: {
    // System font stacks: no web-font download, so pages render instantly.
    display: '"Iowan Old Style", "Palatino Linotype", Palatino, "Book Antiqua", Georgia, serif',
    body: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
};
