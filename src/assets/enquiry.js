// Enquiry form: validates, then either POSTs to the configured endpoint
// (site.config.mjs → enquiry.endpoint) or opens the visitor's email app.
(() => {
  const form = document.querySelector('[data-enquiry]');
  if (!form) return;
  const endpoint = form.dataset.endpoint;
  const email = form.dataset.email;
  const errors = form.querySelector('[data-errors]');
  const status = form.querySelector('[data-status]');

  // Prefill from links like /enquire/?journey=first-caravan or ?interest=lycian-way
  const params = new URLSearchParams(location.search);
  if (params.get('journey')) form.journey.value = params.get('journey');
  const interest = params.get('interest');
  if (interest) form.querySelectorAll('input[name="regions"]').forEach((b) => { if (b.value === interest) b.checked = true; });

  const labelFor = (el) => form.querySelector(`label[for="${el.id}"]`)?.firstChild.textContent.trim()
    || 'Consent';

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const problems = [];
    form.querySelectorAll('[required]').forEach((el) => {
      const bad = el.type === 'checkbox' ? !el.checked : !el.value.trim() || (el.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value));
      el.setAttribute('aria-invalid', String(bad));
      if (bad) problems.push({ el, text: el.type === 'checkbox' ? 'Consent: please tick the box' : el.type === 'email' && el.value ? 'Email: please check the address' : `${labelFor(el)}: please fill this in` });
    });
    if (problems.length) {
      errors.hidden = false;
      errors.innerHTML = `<p><strong>Please fix ${problems.length === 1 ? 'one thing' : `${problems.length} things`}:</strong></p><ul>${problems.map((p, i) => `<li><a href="#${p.el.id || ''}" data-i="${i}">${p.text}</a></li>`).join('')}</ul>`;
      errors.querySelectorAll('a').forEach((a) => a.addEventListener('click', (ev) => { ev.preventDefault(); problems[a.dataset.i].el.focus(); }));
      errors.focus();
      return;
    }
    errors.hidden = true;

    const data = new FormData(form);
    if (endpoint) {
      status.textContent = 'Sending…';
      try {
        const res = await fetch(endpoint, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
        if (!res.ok) throw new Error(res.status);
        form.reset();
        status.textContent = 'Thank you. Your enquiry has been sent and we’ll be in touch soon.';
      } catch {
        status.textContent = `Sorry, something went wrong sending the form. Please email us at ${email}.`;
      }
      return;
    }
    // No endpoint configured: compose an email instead.
    const lines = [];
    for (const [k, v] of data.entries()) if (v && k !== 'consent') lines.push(`${k[0].toUpperCase() + k.slice(1)}: ${v}`);
    location.href = `mailto:${email}?subject=${encodeURIComponent('Journey enquiry')}&body=${encodeURIComponent(lines.join('\n'))}`;
    status.textContent = `Your email app should open with the enquiry filled in. If it doesn’t, please email ${email}.`;
  });
})();
