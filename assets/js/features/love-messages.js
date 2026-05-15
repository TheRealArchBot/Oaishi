// love-messages.js — Floating love/roast popup helper
// MUST be loaded before any other feature file that calls showLoveMessage().

window.LOVE_MESSAGES = [
  "I love you, Oaishi! ❤️",
  "I believe in you honey! ✨",
  "You're my favorite genius 🥰",
  "I'm so proud of you! 💛",
  "Don't stress, you got this! 🧠"
];

/**
 * showLoveMessage(x, y, text?)
 * Spawns a floating bubble near (x, y) with optional custom text.
 * Limits concurrent popups to 3.
 */
window.showLoveMessage = function (x, y, text) {
  if (document.querySelectorAll('.love-popup').length >= 3) return;

  const safeX = Math.max(120, Math.min(x, window.innerWidth  - 120));
  const safeY = Math.max(80,  Math.min(y, window.innerHeight - 80));

  const msg = document.createElement('div');
  msg.className = 'love-popup';
  msg.textContent = text || window.LOVE_MESSAGES[Math.floor(Math.random() * window.LOVE_MESSAGES.length)];

  Object.assign(msg.style, {
    position:        'fixed',
    left:            safeX + 'px',
    top:             safeY + 'px',
    transform:       'translate(-50%, -120%)',
    backgroundColor: 'var(--pink, #ff8fab)',
    color:           '#fff',
    padding:         '10px 20px',
    borderRadius:    '20px',
    fontWeight:      'bold',
    fontFamily:      "'Nunito', sans-serif",
    fontSize:        '14px',
    boxShadow:       '0 4px 16px rgba(255,143,171,0.4)',
    pointerEvents:   'none',
    zIndex:          '9999',
    opacity:         '0',
    maxWidth:        '280px',
    textAlign:       'center',
    lineHeight:      '1.4',
    transition:      'opacity 0.4s ease, top 0.4s ease',
    willChange:      'opacity, top'
  });

  document.body.appendChild(msg);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      msg.style.top     = (safeY - 55) + 'px';
      msg.style.opacity = '1';
    });
  });

  setTimeout(() => {
    msg.style.opacity = '0';
    msg.style.top     = (safeY - 85) + 'px';
    setTimeout(() => msg.remove(), 450);
  }, 3800);
};
