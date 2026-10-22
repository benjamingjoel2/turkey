// Lycian Way planner: sums the chosen stages and lists where you'll sleep.
(() => {
  const root = document.querySelector('[data-lycian]');
  if (!root) return;
  const stages = JSON.parse(document.querySelector('[data-stages]').textContent);
  const out = root.querySelector('[data-summary]');
  const boxes = [...root.querySelectorAll('input[name="stage"]')];
  const DIFF = { 1: 'Easy', 2: 'Moderate', 3: 'Hard' };
  const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const hours = (h) => h.split('–').map(Number);

  const render = () => {
    const picked = stages.filter((s) => boxes.find((b) => Number(b.value) === s.id).checked);
    if (!picked.length) {
      out.innerHTML = '<p>Choose one or more stages to see your total.</p>';
      return;
    }
    const km = picked.reduce((t, s) => t + s.km, 0);
    const lo = picked.reduce((t, s) => t + hours(s.hours)[0], 0);
    const hi = picked.reduce((t, s) => t + (hours(s.hours)[1] || hours(s.hours)[0]), 0);
    const hardest = Math.max(...picked.map((s) => s.difficulty));
    const hardDays = picked.filter((s) => s.difficulty === 3).length;
    // A transfer is needed wherever one chosen stage doesn't end where the next begins
    // (skipped stages, or the Demre–Adrasan section that walkers usually bus).
    const place = (s) => s.split(' (')[0];
    const gaps = [];
    for (let i = 1; i < picked.length; i++) {
      const a = picked[i - 1], b = picked[i];
      if (place(a.to) !== place(b.from)) gaps.push(`${place(a.to)} → ${place(b.from)}`);
    }
    out.innerHTML = `
      <dl class="totals">
        <div><dt>Walking days</dt><dd>${picked.length}</dd></div>
        <div><dt>Distance</dt><dd>≈${km} km</dd></div>
        <div><dt>Walking time</dt><dd>${lo === hi ? lo : `${lo}–${hi}`} h</dd></div>
        <div><dt>Hardest</dt><dd>${DIFF[hardest]}</dd></div>
      </dl>
      ${hardDays ? `<p>${hardDays} hard day${hardDays > 1 ? 's' : ''}: long climbs, start early and carry extra water.</p>` : ''}
      ${gaps.length ? `<p class="warn">Transfers needed between: ${gaps.map(esc).join('; ')}.</p>` : ''}
      <h3 class="h4">Where you’ll sleep</h3>
      <ol class="sleeps">${picked.map((s) => `<li>${esc(s.sleep)}</li>`).join('')}</ol>
      <p class="small">Plus a night at the start, in or near ${esc(picked[0].from)}.</p>`;
  };

  boxes.forEach((b) => b.addEventListener('change', render));
  root.querySelectorAll('[data-preset]').forEach((btn) => btn.addEventListener('click', () => {
    const [a, z] = btn.dataset.preset.split('-').map(Number);
    boxes.forEach((b) => { const v = Number(b.value); b.checked = !!a && v >= a && v <= z; });
    render();
  }));
  render();
})();
