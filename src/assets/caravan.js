// Caravan-route map: choosing a pin shows that stop's story in the panel.
// Without JS each pin is a plain link to the stop in the list below the map.
(() => {
  const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  const T = { region: 'Travel in this region', prev: '← Previous', next: 'Next →' };

  document.querySelectorAll('[data-caravan]').forEach((root) => {
    const stops = JSON.parse(root.querySelector('[data-stops]').textContent);
    const panel = root.querySelector('[data-panel]');
    const pins = [...root.querySelectorAll('.map-pin')];

    const show = (id, { scroll = false } = {}) => {
      const s = stops.find((x) => x.id === id);
      if (!s) return;
      pins.forEach((p) => p.setAttribute('aria-current', String(p.dataset.stop === id)));
      panel.innerHTML = `
        <p class="mono">${String(s.n).padStart(2, '0')} / ${String(stops.length).padStart(2, '0')} · ${esc(s.coords)}</p>
        <h3>${esc(s.name)}</h3>
        <p class="map-han">${esc(s.han)}, ${esc(s.date)}</p>
        <p>${esc(s.story)}</p>
        ${s.region ? `<p><a href="${s.region}">${T.region}</a></p>` : ''}
        <p class="map-nav">
          ${s.n > 1 ? `<button type="button" data-go="${stops[s.n - 2].id}">${T.prev}</button>` : ''}
          ${s.n < stops.length ? `<button type="button" data-go="${stops[s.n].id}">${T.next}</button>` : ''}
        </p>`;
      document.querySelectorAll('.stops li').forEach((li) => li.classList.toggle('is-active', li.id === `stop-${id}`));
      if (scroll && window.matchMedia('(max-width: 61.99em)').matches) panel.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    };

    pins.forEach((pin) => pin.addEventListener('click', (e) => {
      e.preventDefault();
      show(pin.dataset.stop, { scroll: true });
    }));
    panel.addEventListener('click', (e) => {
      const go = e.target.closest('[data-go]');
      if (!go) return;
      show(go.dataset.go);
      panel.querySelector(`[data-go]`)?.focus();
    });

    const fromHash = location.hash.startsWith('#stop-') && location.hash.slice(6);
    show(stops.some((s) => s.id === fromHash) ? fromHash : stops[0].id);
  });
})();
