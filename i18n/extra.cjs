// Dictionary entries generated from copy that is already written in every language:
// the legal pages (src/data/legal.mjs). Merged under i18n/<lang>.json by scripts/translate-site.cjs.
const { LEGAL } = require('../src/data/legal.mjs');
const { legalOptions } = require('../src/data/legal-options.mjs');
const { zipRuns } = require('../scripts/translate-site.cjs');

const render = (d) =>
  [d.privacy, d.terms, d.cookies]
    .map((doc) => `<h1>${doc.title}</h1><p>${doc.intro}</p>` + doc.sections.map((s) => `<h2>${s.h}</h2>${s.html}`).join(''))
    .join('');

module.exports = (lang) => {
  if (!LEGAL[lang] || lang === 'en') return {};
  const en = LEGAL.en(legalOptions('en'));
  const tr = LEGAL[lang](legalOptions(lang));
  const out = zipRuns(render(en), render(tr));
  for (const k of ['privacy', 'terms', 'cookies']) {
    out[`${en[k].title} · Kervan Journeys`] = `${tr[k].title} · Kervan Journeys`;
    out[`${en[k].title} for Kervan Journeys.`] = `${tr[k].title} – Kervan Journeys.`;
  }
  return out;
};
