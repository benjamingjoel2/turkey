// Balloon guide: lay out the mornings for the chosen number of nights.
(() => {
  const root = document.querySelector('[data-balloon-planner]');
  if (!root) return;
  const select = root.querySelector('select');
  const list = root.querySelector('[data-mornings]');
  const note = root.querySelector('[data-mornings-note]');

  const render = () => {
    const nights = Number(select.value);
    // Mornings available for flying = nights (you wake up there each morning after a night),
    // but the last morning is departure day, so keep it free of the flight.
    const items = [];
    for (let m = 1; m <= nights; m++) {
      const last = m === nights;
      if (last && nights > 1) items.push(`<li><strong>Morning ${m} (departure day):</strong> keep as a last resort only if your onward travel is late in the day.</li>`);
      else if (m === 1) items.push(`<li><strong>Morning ${m}:</strong> flight booked.</li>`);
      else items.push(`<li><strong>Morning ${m}:</strong> spare. Keep it free until about 9am.</li>`);
    }
    list.innerHTML = items.join('');
    const spare = Math.max(0, nights - 2);
    note.textContent = nights === 1
      ? 'With one night you have a single chance. If the flight is cancelled there is no fallback. Add nights if the flight matters to you.'
      : spare === 0
        ? 'Two nights gives one booked morning and only your departure morning as a fallback. We suggest at least three nights.'
        : `One booked morning and ${spare} spare morning${spare > 1 ? 's' : ''} before departure day.${nights >= 4 ? ' A good plan in winter, when cancellations are more frequent.' : ' A good plan for spring to autumn.'}`;
  };
  select.addEventListener('change', render);
  render();
})();
