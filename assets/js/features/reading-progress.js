// reading-progress.js — Thin progress bar at top of page showing scroll position
(function () {
  const bar = document.createElement('div');
  bar.id = 'reading-progress';
  Object.assign(bar.style, {
    position:   'fixed',
    top:        '0',
    left:       '0',
    width:      '0%',
    height:     '3px',
    background: 'linear-gradient(90deg, var(--mint, #4ecca3), var(--sky, #6eb5ff))',
    zIndex:     '10000',
    transition: 'width 0.1s linear',
  });
  document.body.prepend(bar);

  window.addEventListener('scroll', () => {
    const doc    = document.documentElement;
    const scrolled = doc.scrollTop || document.body.scrollTop;
    const total    = doc.scrollHeight - doc.clientHeight;
    bar.style.width = (total > 0 ? (scrolled / total) * 100 : 0) + '%';
  }, { passive: true });
})();
