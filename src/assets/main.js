// Header state, full-screen mobile menu and scroll reveals.
// Without JS the menu is a plain list and everything is visible.
(() => {
  const header = document.querySelector('[data-header]');
  const btn = document.querySelector('.nav-toggle');
  const nav = document.getElementById('site-nav');

  // Solid header once the hero has scrolled away.
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 40);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  const setOpen = (open) => {
    btn.setAttribute('aria-expanded', String(open));
    btn.querySelector('.nav-toggle-label').textContent = open ? 'Close' : 'Menu';
    nav.classList.toggle('is-open', open);
    header.classList.toggle('is-open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  };
  btn?.addEventListener('click', () => setOpen(btn.getAttribute('aria-expanded') !== 'true'));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) { setOpen(false); btn.focus(); }
  });
  window.matchMedia('(min-width: 68em)').addEventListener('change', (m) => m.matches && setOpen(false));

  // Fade sections in as they reach the viewport. A position check (rather than
  // IntersectionObserver) also catches elements skipped over by a fast scroll.
  let pending = [...document.querySelectorAll('.reveal')];
  let ticking = false;
  const reveal = () => {
    ticking = false;
    const limit = window.innerHeight * 0.94;
    pending = pending.filter((el) => {
      if (el.getBoundingClientRect().top < limit) { el.classList.add('is-in'); return false; }
      return true;
    });
    if (!pending.length) window.removeEventListener('scroll', onReveal);
  };
  const onReveal = () => { if (!ticking) { ticking = true; requestAnimationFrame(reveal); } };
  window.addEventListener('scroll', onReveal, { passive: true });
  window.addEventListener('resize', onReveal, { passive: true });
  reveal();
})();
