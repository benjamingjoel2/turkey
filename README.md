# Kervan Journeys: a travel website for Türkiye

A fast, static, mobile-first travel site for small, slow journeys through
Türkiye: İstanbul, Cappadocia, the Aegean, Pamukkale, the Lycian coast, the
Black Sea, the southeast and Lake Van.

- **No dependencies.** A ~150-line Node script (`build.mjs`) renders plain HTML
  from JavaScript templates. There is no framework, no `npm install` and no
  client-side rendering. Pages work without JavaScript; JS only adds the
  interactive tools.
- **One file to rebrand.** Name, tagline, contact details, palette and fonts
  live in [`site.config.mjs`](site.config.mjs).
- **Checked on every build.** The build fails if a palette pair falls below
  WCAG AA contrast (4.5:1), if an internal link or `#anchor` is broken, if a
  page lacks exactly one `<h1>`, or if a heading says "Turkey" instead of
  "Türkiye". It warns if "Turkey" appears in visible text more or fewer than
  once (it appears once, on the home page, for search).

## Run it

Requires Node 18 or newer.

```sh
npm run dev      # build, serve at http://localhost:3000, rebuild on every save
npm run build    # one-off build into dist/
npm start        # serve the existing dist/ without rebuilding
```

`npm run dev` rebuilds when you save anything in `src/` or `site.config.mjs`.
Refresh the browser to see the change.

## Deploy (Vercel)

`vercel.json` is already set up: build command `node build.mjs`, output
directory `dist`, clean URLs. Either:

- **Git:** import the repository at vercel.com → *Add New → Project*. Every push
  to the default branch deploys; other branches get preview URLs.
- **CLI:** `npx vercel` for a preview, `npx vercel --prod` for production.

After you attach a custom domain, update `siteUrl` in `site.config.mjs`. It is
used for canonical links, `sitemap.xml` and `robots.txt`.

Any other static host (Netlify, Cloudflare Pages, GitHub Pages, S3) works too:
run `node build.mjs` and publish `dist/`.

## Where things are

```
site.config.mjs        Brand, contact details, palette, fonts, form endpoint
build.mjs              Renders pages to dist/, builds CSS theme, runs checks
scripts/serve.mjs      Local preview server
src/layout.mjs         Page shell (head, header, footer) and helpers: img(), html``
src/data/              Content as data: edit these for most text changes
  regions.mjs          The eight region pages
  caravan.mjs          Caravan-route map stops, stories and routes
  lycian.mjs           Lycian Way stages for the planner
  journeys.mjs         Sample journeys
  stays.mjs            Stays (placeholder names)
  seasons.mjs          When-to-go grid
  journal.mjs          Journal posts
  photos.mjs           Every photo, with credit and location check
  sources.mjs          References behind the facts (shown on /sources/ and per page)
  map-outline.mjs      Generated map outline (Natural Earth, public domain)
src/pages/             One module per page or group of pages
src/assets/            styles.css and the small JS files for each tool
FACTS-TO-VERIFY.md     Everything that needs checking before launch
```

### Pages

| URL | Source |
| --- | --- |
| `/` | `src/pages/home.mjs` |
| `/regions/`, `/regions/<slug>/` | `src/pages/regions.mjs` + `src/data/regions.mjs` |
| `/caravan-route/` (signature map) | `src/pages/caravan.mjs` + `src/data/caravan.mjs` + `src/assets/caravan.js` |
| `/balloon-guide/` | `src/pages/balloon.mjs` + `src/assets/balloon.js` |
| `/lycian-way/` (stage planner) | `src/pages/lycian.mjs` + `src/data/lycian.mjs` + `src/assets/lycian.js` |
| `/etiquette/` (mosques and Ramadan) | `src/pages/etiquette.mjs` |
| `/food/` | `src/pages/food.mjs` |
| `/journeys/`, `/when-to-go/`, `/stays/` | `src/pages/plan.mjs` |
| `/about/`, `/journal/…`, `/enquire/`, `/credits/`, `404` | `src/pages/site.mjs` |

## Common edits

**Design system.** The look follows editorial travel sites: full-bleed photo
heroes, Newsreader (serif, with italic accents) for headings, Instrument Sans
for text and Geist Mono for small details such as coordinates and indexes,
hairline dividers, and pill buttons with an arrow. The brand mark is an
eight-pointed Seljuk star, drawn in `star()` in `src/layout.mjs`. Fonts come from
Google Fonts via `fonts.googleHref` in the config. Set it to `''` to use system
fonts only. Useful building blocks in `src/layout.mjs`: `photoHero()`,
`pageHead()`, `marker()` (the "(01) Label" section markers), `button()`,
`img()` and `coords()`. Add `class="reveal"` to any block to fade it in on
scroll.

**Rebrand.** Edit `brand`, `contact` and `palette` in `site.config.mjs`. A
ready-to-paste *Meander Türkiye* alternative is in the comments there. The
favicon, tile pattern and every colour are generated from the palette. If a new
colour fails the contrast check, the build tells you which pair; darken or
lighten it until it passes.

**Enquiry form.** A static site can't receive form posts by itself. Set
`enquiry.endpoint` in `site.config.mjs` to a form service URL (Formspree,
Basin, Getform, or your own serverless function). Until you do, submitting
opens the visitor's email app with the enquiry pre-filled, addressed to
`contact.email`.

**Change text.** Most copy is in `src/data/*.mjs`. Page-specific copy (the
balloon guide, etiquette notes, food page) is in the matching
`src/pages/*.mjs`. Text is HTML, so you can use `<a>`, `<em>` and `<strong>`.

**Add a region, journey, stay or journal post.** Add an entry to the
relevant array in `src/data/`. Pages, navigation links, the sitemap and
cross-links are generated from it. A region's `slug` becomes its URL.

**Add a caravan stop.** Add an entry to `stops` in `src/data/caravan.mjs` with
its `lat`/`lon`. It is projected onto the map automatically. Add its id to a
route in `routes` to join it with a line, and to `LABELS` in
`src/pages/caravan.mjs` if it should have a text label on the map.

**Edit Lycian Way stages.** Edit `src/data/lycian.mjs`. Keep stages in order
west to east. The planner flags a transfer wherever one stage doesn't end where
the next begins.

## Photos

All photos are from Unsplash, served from Unsplash's CDN with responsive sizes,
and credited under each image and on `/credits/`. The rule is strict: **use a
photo only where it was taken at the place it illustrates.** Each entry in
`src/data/photos.mjs` records how that was checked:

- *Unsplash location tag*: the photographer's own location label matches; or
- *Photographer caption + landmark*: no tag, but the caption names the place
  and the landmark is unmistakable (used for three photos; see
  `FACTS-TO-VERIFY.md`).

**Lake Van has no photo yet.** None was confirmed in time, so the page shows
a labelled tile panel instead of a photo from somewhere else. To add one:

1. Find a photo on unsplash.com and open its page. Check the location shown
   under the photo (or the photographer's caption) is Lake Van, Akdamar or Van.
2. Add an entry to `photos.mjs`: the `id` comes from the photo URL. For `src`,
   use the image URL ("Copy image address", without the query string) or the
   `urls.raw` value from the Unsplash API. Fill in `w`, `h`, `name`,
   `username`, `place`, a descriptive `alt`, and `verified`.
3. Put the key in `photos: []` for `lake-van` in `src/data/regions.mjs`.

## Sources

Facts are backed by references in `src/data/sources.mjs`. Each entry names the
pages it supports (`where`), and those pages automatically get a short
"Sources for this page" list; `/sources/` shows them all. When you check or
change a fact, update its entry and `CHECKED`, and tick it in
`FACTS-TO-VERIFY.md`. Where an official source exists (muze.gov.tr,
diyanet.gov.tr, shgm.gov.tr), prefer it over secondary ones. Avoid link text
containing "Turkey"; the build counts visible mentions.

## Before launch

1. Work through **[FACTS-TO-VERIFY.md](FACTS-TO-VERIFY.md)**: visas, tickets,
   opening status, seasons, holiday dates, Lycian Way distances.
2. Replace the placeholder contact details and stay names.
3. Set `enquiry.endpoint`, or accept the email fallback.
4. Set `siteUrl` to the real domain.

Content rules the site follows, which future edits should keep: no invented
reviews, testimonials, press logos or awards; "Türkiye" in headings, with
"Turkey" mentioned once (home page); every photo location-checked and credited.
