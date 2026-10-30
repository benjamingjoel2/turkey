// Privacy policy, booking terms and cookie policy. Copy: src/data/legal.mjs (all four languages);
// language-specific options: src/data/legal-options.mjs.
import { html, pageHead } from '../layout.mjs';
import { LEGAL } from '../data/legal.mjs';
import { legalOptions } from '../data/legal-options.mjs';

export default function legalPages() {
  const docs = LEGAL.en(legalOptions('en'));
  const page = (path, doc) => ({
    path,
    title: doc.title,
    description: `${doc.title} for Kervan Journeys.`,
    body: html`
${pageHead({ eyebrow: 'Legal', title: doc.title, lede: doc.intro })}
<section class="section">
  <div class="wrap prose legal">
    ${doc.sections.map((s) => `<h2>${s.h}</h2>\n${s.html.replace('COOKIES_URL', '/cookies/')}`).join('\n')}
  </div>
</section>`,
  });
  return [page('/privacy/', docs.privacy), page('/booking-terms/', docs.terms), page('/cookies/', docs.cookies)];
}
