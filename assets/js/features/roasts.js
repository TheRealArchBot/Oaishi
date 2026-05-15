// roasts.js — Playful roasts for speed-skimming, copy-pasting, etc.
// Requires: love-messages.js
document.addEventListener('DOMContentLoaded', () => {
  if (typeof window.showLoveMessage !== 'function') return;

  // 1. Speed-skimmer
  let lastScrollTime = Date.now(), lastScrollY = window.scrollY, scrollWarnings = 0;
  window.addEventListener('scroll', () => {
    const now      = Date.now();
    const distance = Math.abs(window.scrollY - lastScrollY);
    if (now - lastScrollTime < 200 && distance > 1500 && scrollWarnings === 0) {
      scrollWarnings++;
      window.showLoveMessage(window.innerWidth / 2, window.innerHeight / 2, "Whoa there Sonic! There's no way you just read all that. Stop skimming! 🤨🐢");
      setTimeout(() => { scrollWarnings = 0; }, 30000);
    }
    lastScrollTime = now;
    lastScrollY    = window.scrollY;
  }, { passive: true });

  // 2. Copy-paster
  let copyCount = 0;
  document.addEventListener('copy', () => {
    copyCount++;
    if (copyCount === 1) window.showLoveMessage(window.innerWidth / 2, 100, "Copy-pasting? I'm telling the professor! 🚨 (Just kidding)");
    else if (copyCount >= 3) { 
      window.showLoveMessage(window.innerWidth / 2, 100, "Seriously? More copying? Try writing it in your own words, lazy! 😂"); 
      copyCount = 0; 
    }
  });

  // 3. Rage-clicker
  let clickTimes = [];
  document.addEventListener('click', e => {
    const now = Date.now();
    clickTimes = [...clickTimes.filter(t => now - t < 2000), now];
    if (clickTimes.length >= 7) {
      window.showLoveMessage(e.clientX, e.clientY, "Why are you abusing your mouse? Calm down! 🐭💥");
      clickTimes = [];
    }
  });

  // 4. DevTools / Hacking attempt
  window.addEventListener('keydown', e => {
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && ['I','i'].includes(e.key))) {
      window.showLoveMessage(window.innerWidth / 2, 100, "Trying to hack your own notes? Looking for the quiz answers? Nice try! 🕵️‍♀️💻");
    }
    if (e.ctrlKey && e.key.toLowerCase() === 'p') {
      e.preventDefault();
      window.showLoveMessage(window.innerWidth / 2, window.innerHeight / 2, "Trying to print? Paper notes won't study themselves either, honey! 🖨️😂");
    }
    if (e.key === 'Escape') {
      window.showLoveMessage(window.innerWidth / 2, window.innerHeight / 2, "Pressing Escape? You can't escape your exam that easily! 😈");
    }
  });

  // 5. Tab-switcher (distracted)
  let distractCount = 0;
  window.addEventListener('blur', () => distractCount++);
  window.addEventListener('focus', () => {
    if (distractCount >= 4) {
      setTimeout(() => window.showLoveMessage(window.innerWidth / 2, 100, "You keep switching tabs! Are you watching YouTube? Focus! 🍿👀"), 500);
      distractCount = 0;
    }
  });

  // 6. Window resizer
  let resizeCount = 0;
  window.addEventListener('resize', () => {
    if (++resizeCount > 40) {
      window.showLoveMessage(window.innerWidth / 2, window.innerHeight / 2, "Stop playing with the window size and just read! 🪟🙄");
      resizeCount = 0;
    }
  });

  // 7. Right-click inspector
  document.addEventListener('contextmenu', () => {
    window.showLoveMessage(window.innerWidth / 2, window.innerHeight / 2, "Right-clicking the notes won't make them go into your brain any faster! 🖱️😂");
  });

  // 8. Stuck on same section (5 min no scroll)
  let stuckScrollY = window.scrollY;
  let stuckTriggered = false;
  setInterval(() => {
    if (!stuckTriggered && Math.abs(window.scrollY - stuckScrollY) < 100) {
      stuckTriggered = true;
      window.showLoveMessage(window.innerWidth / 2, window.innerHeight / 2, "You've been on the same section for 5 minutes. Are you asleep with your eyes open?! 😴");
      setTimeout(() => { stuckTriggered = false; stuckScrollY = window.scrollY; }, 60000);
    } else {
      stuckScrollY = window.scrollY;
    }
  }, 5 * 60 * 1000);
});
