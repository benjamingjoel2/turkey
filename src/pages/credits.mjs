// Photo credits: one page listing every photo in src/data/photos.mjs. Credits are not shown
// on or under the photos themselves (captions give the place only). The page is `late`:
// build.mjs renders it after every other page and passes their HTML, so each photo lists
// the pages it appears on.
import { html, esc, pageHead } from '../layout.mjs';
import { photos } from '../data/photos.mjs';

export default function creditsPages() {
  return [{
    path: '/photo-credits/',
    title: 'Photo credits',
    description: 'Photo credits for Kervan Journeys: the photographers whose work appears on this site.',
    late: true,
    body: (rendered = []) => {
      const rows = Object.values(photos).map((p) => {
        const id = p.src.split('?')[0];
        const pages = rendered.filter((r) => r.html.includes(id));
        const used = pages.length ? `<ul class="credits__pages">${pages.map((r) => `<li><a href="${r.path}">${esc(r.title)}</a></li>`).join('')}</ul>` : '–';
        return `<tr><td>${esc(p.place)}</td><td><a href="${esc(p.profile)}" rel="noopener">${esc(p.name)}</a></td><td><a href="https://unsplash.com/license" rel="noopener">Unsplash Licence</a></td><td><a href="${esc(p.page)}" rel="noopener">View on Unsplash</a></td><td>${used}</td></tr>`;
      });
      return html`
${pageHead({ eyebrow: 'Legal', title: 'Photo credits', lede: 'The photographs on this site come from Unsplash and are used under the Unsplash Licence. Thank you to every photographer listed here.' })}
<section class="section">
  <div class="wrap legal-table">
    <table class="credits">
      <thead><tr><th scope="col">Photo</th><th scope="col">Photographer</th><th scope="col">Licence</th><th scope="col">Source</th><th scope="col">Used on</th></tr></thead>
      <tbody>
        ${rows.join('\n        ')}
      </tbody>
    </table>
  </div>
</section>`;
    },
  }];
}
