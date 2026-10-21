// Caravan-route map: choosing a pin shows that stop's story in the panel.
// Without JS each pin is a plain link to the stop in the list below the map.
(() => {
  const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  document.querySelectorAll('[data-caravan]').forEach((root) => {
    const stops = JSON.parse(root.querySelector('[data-stops]').textContent);
    const panel = root.querySelector('[data-panel]');
    const pins = [...root.querySelectorAll('.map-pin')];

    const show = (id, { scroll = false } = {}) => {
      const s = stops.find((x) => x.id === id);
      if (!s) return;
      pins.forEach((p) => p.setAttribute('aria-current', String(p.dataset.stop === id)));
      panel.innerHTML = `
        <p class="eyebrow">Stop ${s.n} of ${stops.length}</p>
        <h3>${esc(s.name)}</h3>
        <p class="map-han">${esc(s.han)} · ${esc(s.date)}</p>
        <p>${esc(s.story)}</p>
        ${s.region ? `<p><a href="${s.region}">Travel in this region</a></p>` : ''}
        <p class="small">
          ${s.n > 1 ? `<button type="button" class="btn btn-small btn-ghost-dark" data-go="${stops[s.n - 2].id}">← Previous</button>` : ''}
          ${s.n < stops.length ? `<button type="button" class="btn btn-small btn-ghost-dark" data-go="${stops[s.n].id}">Next →</button>` : ''}
        </p>`;
      document.querySelectorAll('.stops li').forEach((li) => li.classList.toggle('is-active', li.id === `stop-${id}`));
      if (scroll && window.matchMedia('(max-width: 59.99em)').matches) panel.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
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
