// nav-highlight.js — Highlights the active section in the navigation menu as you scroll
document.addEventListener('DOMContentLoaded', () => {
  const navSections = document.querySelectorAll('.q-section');
  const navLinks    = document.querySelectorAll('nav a');

  if (navSections.length > 0 && navLinks.length > 0) {
    const observerOptions = { root: null, rootMargin: '-20% 0px -70% 0px', threshold: 0 };
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const current = entry.target.id;
          navLinks.forEach(l => {
            const href = l.getAttribute('href');
            if (href?.startsWith('#')) {
              const active = href === '#' + current;
              l.style.color       = active ? 'var(--yellow)' : '';
              l.style.borderColor = active ? 'var(--yellow)' : '';
            }
          });
        }
      });
    }, observerOptions);

    navSections.forEach(sec => navObserver.observe(sec));
  }
});
