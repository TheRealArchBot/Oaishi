// ──────────────────────────────────────────────
// Reading Progress Bar
// ──────────────────────────────────────────────
(function() {
  const bar = document.createElement('div');
  bar.id = 'reading-progress';
  document.body.prepend(bar);
  window.addEventListener('scroll', () => {
    const doc = document.documentElement;
    const scrolled = doc.scrollTop || document.body.scrollTop;
    const total    = doc.scrollHeight - doc.clientHeight;
    bar.style.width = (total > 0 ? (scrolled / total) * 100 : 0) + '%';
  }, { passive: true });
})();

// ──────────────────────────────────────────────
// Service Worker Registration
// ──────────────────────────────────────────────
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js')
      .then(() => {}) // silent success
      .catch(() => {});
  });
}

// ──────────────────────────────────────────────
// Navigation Scroll Highlight
// ──────────────────────────────────────────────
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

// ──────────────────────────────────────────────
// Floating Love Message Helper
// ──────────────────────────────────────────────
const LOVE_MESSAGES = [
  "I love you, Oaishi! ❤️",
  "I believe in you honey! ✨",
  "You're my favorite genius 🥰",
  "I'm so proud of you! 💛",
  "Don't stress, you got this! 🧠"
];

function showLoveMessage(x, y, text = null) {
  // Guard: limit concurrent popups to 3
  if (document.querySelectorAll('.love-popup').length >= 3) return;

  // Clamp position so popup never goes off-screen
  const safeX = Math.max(120, Math.min(x, window.innerWidth  - 120));
  const safeY = Math.max(80,  Math.min(y, window.innerHeight - 80));

  const msg = document.createElement('div');
  msg.className = 'love-popup';
  msg.textContent = text || LOVE_MESSAGES[Math.floor(Math.random() * LOVE_MESSAGES.length)];

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
    requestAnimationFrame(() => { // double rAF for reliable transition
      msg.style.top     = (safeY - 55) + 'px';
      msg.style.opacity = '1';
    });
  });

  setTimeout(() => {
    msg.style.opacity = '0';
    msg.style.top     = (safeY - 85) + 'px';
    setTimeout(() => msg.remove(), 450);
  }, 3800);
}

// ──────────────────────────────────────────────
// Main DOMContentLoaded Block
// ──────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {

  // ── Notepad Widget ──────────────────────────
  const notepad  = document.getElementById('notepad-widget');
  const header   = document.getElementById('notepad-header');
  const textarea = document.getElementById('notepad-textarea');

  if (notepad && header && textarea) {
    const storageKey = `notes_${window.location.pathname.split('/').pop() || 'general'}`;
    textarea.value = localStorage.getItem(storageKey) || '';
    header.addEventListener('click', () => notepad.classList.toggle('open'));
    textarea.addEventListener('input', () => localStorage.setItem(storageKey, textarea.value));
  }

  // ── Easter Eggs ─────────────────────────────

  // Console love note
  console.log('%cHey Oaishi! ❤️', 'color:#ff8fab;font-size:24px;font-weight:bold;');
  console.log('%cIf you\'re reading this, just know your husband thinks you\'re brilliant and you\'re going to absolutely crush your exams! ✨', 'color:#4ecca3;font-size:14px;');

  // Tab title
  const originalTitle = document.title;
  window.addEventListener('blur',  () => { document.title = 'Come back Oaishi! 🥺❤️'; });
  window.addEventListener('focus', () => { document.title = originalTitle; });

  // Triple-click logos
  let clickCount = 0;
  document.querySelectorAll('h1, .nav-logo').forEach(logo => {
    logo.style.cursor = 'pointer';
    logo.addEventListener('click', e => {
      if (++clickCount >= 3) { clickCount = 0; showLoveMessage(e.clientX, e.clientY); }
    });
  });

  // Study milestone timers (15 / 30 / 45 / 60 / 90 min)
  const milestones = [
    [15, "You've been studying so hard! Take a sip of water. 💧❤️"],
    [30, "Half an hour of pure focus! You are unstoppable, Oaishi! 🚀"],
    [45, "Wow, 45 minutes! I definitely owe you a treat for all this hard work. 🍩❤️"],
    [60, "An entire hour of studying?! You're officially a genius! I'm so proud of you. 👑💖"],
    [90, "An hour and a half?! You are an absolute studying machine! 🔥❤️"]
  ];
  milestones.forEach(([min, msg]) => {
    setTimeout(() => showLoveMessage(window.innerWidth / 2, window.innerHeight / 2, msg), min * 60 * 1000);
  });

  // Scroll to bottom reward
  let reachedBottom = false;
  window.addEventListener('scroll', () => {
    if (!reachedBottom && window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
      reachedBottom = true;
      showLoveMessage(window.innerWidth / 2, window.innerHeight - 100, "You made it to the end! You are going to ace this! 🏆🥰");
    }
  }, { passive: true });

  // Time-based greetings (late night / early bird)
  const hour = new Date().getHours();
  if (hour >= 23 || hour < 4) {
    setTimeout(() => showLoveMessage(window.innerWidth / 2, 100, "It's late, honey. Don't forget to get some sleep soon! 🌙💤"), 5000);
  } else if (hour >= 5 && hour <= 8) {
    setTimeout(() => showLoveMessage(window.innerWidth / 2, 100, "Wow, up so early! Good morning, my hardworking beautiful wife! 🌅☕"), 5000);
  }

  // Konami Code (↑↑↓↓←→←→BA)
  const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
  let konamiIndex = 0;
  window.addEventListener('keydown', e => {
    if (e.key === KONAMI[konamiIndex]) {
      konamiIndex++;
      if (konamiIndex === KONAMI.length) {
        konamiIndex = 0;
        showLoveMessage(window.innerWidth / 2, window.innerHeight / 2, "🎉 CHEAT CODE ACTIVATED! Extra brain power +100! You're already cheating by being this smart! 🧠✨");
      }
    } else {
      konamiIndex = 0;
    }
  });

  // Offline detection
  window.addEventListener('offline', () => {
    showLoveMessage(window.innerWidth / 2, 100, "Internet went down? Don't worry, I made sure your notes work completely offline! 📡❤️");
  });

  // Secret keyboard code "ahsan"
  let typedKeys = '';
  window.addEventListener('keydown', e => {
    if (e.target.tagName !== 'TEXTAREA' && e.target.tagName !== 'INPUT') {
      typedKeys = (typedKeys + e.key.toLowerCase()).slice(-5);
      if (typedKeys === 'ahsan') {
        showLoveMessage(window.innerWidth / 2, window.innerHeight / 2, "You found the secret code! I love you! 💖🎉");
        typedKeys = '';
      }
    }
  });

  // Idle / deep-reading tracker (5 min no movement)
  let idleTimer;
  const resetIdle = () => {
    clearTimeout(idleTimer);
    idleTimer = setTimeout(() => showLoveMessage(window.innerWidth / 2, window.innerHeight / 2, "Hey! The essay isn't going to write itself! (And I'm getting lonely here) 🥺"), 5 * 60 * 1000);
  };
  ['mousemove', 'keydown'].forEach(ev => window.addEventListener(ev, resetIdle));
  window.addEventListener('scroll', resetIdle, { passive: true });
  resetIdle();

  // Text selection / highlighting
  let highlightTriggered = false;
  document.addEventListener('selectionchange', () => {
    if (!highlightTriggered && window.getSelection().toString().trim().length > 20) {
      highlightTriggered = true;
      showLoveMessage(window.innerWidth / 2, window.innerHeight - 150, "Ooo, important note! Saving that in your brain? 🧠📝");
      setTimeout(() => { highlightTriggered = false; }, 60000);
    }
  });

  // ── Playful Roasts ──────────────────────────

  // Speed-skimmer
  let lastScrollTime = Date.now(), lastScrollY = window.scrollY, scrollWarnings = 0;
  window.addEventListener('scroll', () => {
    const now      = Date.now();
    const distance = Math.abs(window.scrollY - lastScrollY);
    if (now - lastScrollTime < 200 && distance > 1500 && scrollWarnings === 0) {
      scrollWarnings++;
      showLoveMessage(window.innerWidth / 2, window.innerHeight / 2, "Whoa there Sonic! There's no way you just read all that. Stop skimming! 🤨🐢");
      setTimeout(() => { scrollWarnings = 0; }, 30000);
    }
    lastScrollTime = now;
    lastScrollY    = window.scrollY;
  }, { passive: true });

  // Copy-paster
  let copyCount = 0;
  document.addEventListener('copy', () => {
    copyCount++;
    if      (copyCount === 1) showLoveMessage(window.innerWidth / 2, 100, "Copy-pasting? I'm telling the professor! 🚨 (Just kidding)");
    else if (copyCount >= 3) { showLoveMessage(window.innerWidth / 2, 100, "Seriously? More copying? Try writing it in your own words, lazy! 😂"); copyCount = 0; }
  });

  // Rage-clicker
  let clickTimes = [];
  document.addEventListener('click', e => {
    const now = Date.now();
    clickTimes = [...clickTimes.filter(t => now - t < 2000), now];
    if (clickTimes.length >= 7) {
      showLoveMessage(e.clientX, e.clientY, "Why are you abusing your mouse? Calm down! 🐭💥");
      clickTimes = [];
    }
  });

  // DevTools detector
  window.addEventListener('keydown', e => {
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && ['I','i'].includes(e.key))) {
      showLoveMessage(window.innerWidth / 2, 100, "Trying to hack your own notes? Looking for the quiz answers? Nice try! 🕵️‍♀️💻");
    }
  });

  // Tab-switcher (distracted)
  let distractCount = 0;
  window.addEventListener('blur',  () => { distractCount++; });
  window.addEventListener('focus', () => {
    if (distractCount >= 4) {
      setTimeout(() => showLoveMessage(window.innerWidth / 2, 100, "You keep switching tabs! Are you watching YouTube? Focus! 🍿👀"), 500);
      distractCount = 0;
    }
  });

  // Window resizer
  let resizeCount = 0;
  window.addEventListener('resize', () => {
    if (++resizeCount > 40) {
      showLoveMessage(window.innerWidth / 2, window.innerHeight / 2, "Stop playing with the window size and just read! 🪟🙄");
      resizeCount = 0;
    }
  });

  // Right-click inspector
  document.addEventListener('contextmenu', () => {
    showLoveMessage(window.innerWidth / 2, window.innerHeight / 2, "Right-clicking the notes won't make them go into your brain any faster! 🖱️😂");
  });

  // Ctrl+P print attempt
  window.addEventListener('keydown', e => {
    if (e.ctrlKey && e.key.toLowerCase() === 'p') {
      e.preventDefault();
      showLoveMessage(window.innerWidth / 2, window.innerHeight / 2, "Trying to print? Paper notes won't study themselves either, honey! 🖨️😂");
    }
  });

  // Ctrl+A select-all
  let selectAllTriggered = false;
  window.addEventListener('keydown', e => {
    if (e.ctrlKey && e.key.toLowerCase() === 'a' && e.target.tagName !== 'TEXTAREA' && e.target.tagName !== 'INPUT') {
      if (!selectAllTriggered) {
        selectAllTriggered = true;
        showLoveMessage(window.innerWidth / 2, window.innerHeight / 2, "Selected EVERYTHING? Bold strategy. Still have to read it though! 📋😂");
        setTimeout(() => { selectAllTriggered = false; }, 30000);
      }
    }
  });

  // Escape key
  let escapeTries = 0;
  window.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      escapeTries++;
      if (escapeTries === 1)      showLoveMessage(window.innerWidth / 2, window.innerHeight / 2, "Pressing Escape? You can't escape your exam that easily! 😈");
      else if (escapeTries >= 3) { showLoveMessage(window.innerWidth / 2, window.innerHeight / 2, "STOP pressing Escape. YOUR EXAM IS REAL. 🚨😂"); escapeTries = 0; }
    }
  });

  // Scroll-up skimmer (scrolling back UP fast — forgot what they read)
  let lastUpScrollTime = Date.now(), lastUpScrollY = window.scrollY, upScrollWarnings = 0;
  window.addEventListener('scroll', () => {
    const now = Date.now();
    const delta = window.scrollY - lastUpScrollY;
    if (now - lastUpScrollTime < 300 && delta < -1200 && upScrollWarnings === 0) {
      upScrollWarnings++;
      showLoveMessage(window.innerWidth / 2, window.innerHeight / 2, "Going back up? Did you forget what you just read? Memory like a goldfish! 🐟😂");
      setTimeout(() => { upScrollWarnings = 0; }, 30000);
    }
    lastUpScrollTime = now;
    lastUpScrollY    = window.scrollY;
  }, { passive: true });

  // Stuck on same section for 5 minutes (no scroll movement)
  let stuckScrollY = window.scrollY;
  let stuckTriggered = false;
  setInterval(() => {
    if (!stuckTriggered && Math.abs(window.scrollY - stuckScrollY) < 100) {
      stuckTriggered = true;
      showLoveMessage(window.innerWidth / 2, window.innerHeight / 2, "You've been on the same section for 5 minutes. Are you asleep with your eyes open?! 😴");
      setTimeout(() => { stuckTriggered = false; stuckScrollY = window.scrollY; }, 60000);
    } else {
      stuckScrollY = window.scrollY;
    }
  }, 5 * 60 * 1000);

  // ── Notepad Keyword & Word-Count Triggers ───
  const notesArea = document.getElementById('notepad-textarea');
  if (notesArea) {
    const triggered = { stressed: false, ahsan: false, tired: false, love: false, wordCount: false, help: false, bored: false, hate: false };
    let backspaceCount = 0;

    notesArea.addEventListener('keydown', e => {
      if (e.key === 'Backspace' || e.key === 'Delete') {
        if (++backspaceCount >= 15) {
          showLoveMessage(window.innerWidth - 150, window.innerHeight - 300, "Deleting everything? Did you just write absolute garbage? 🗑️😂");
          backspaceCount = 0;
        }
      } else {
        backspaceCount = 0;
      }
    });

    notesArea.addEventListener('input', e => {
      const text = e.target.value.toLowerCase();
      if (!triggered.stressed && text.includes('stress')) { triggered.stressed = true; showLoveMessage(window.innerWidth - 150, window.innerHeight - 300, "Take a deep breath. I know you can do this! ❤️"); }
      if (!triggered.ahsan   && text.includes('ahsan'))  { triggered.ahsan    = true; showLoveMessage(window.innerWidth - 150, window.innerHeight - 300, "He loves you very much! 🥰"); }
      if (!triggered.tired   && text.includes('tired'))  { triggered.tired    = true; showLoveMessage(window.innerWidth - 150, window.innerHeight - 300, "You're working so hard. I'm so proud of you. ☕💛"); }
      if (!triggered.love    && text.includes('love'))   { triggered.love     = true; showLoveMessage(window.innerWidth - 150, window.innerHeight - 300, "I love you more! 💖"); }
      if (!triggered.help    && text.includes('help'))    { triggered.help     = true; showLoveMessage(window.innerWidth - 150, window.innerHeight - 300, "HELP?! I literally wrote all these notes FOR you. You're already being helped! 😂❤️"); }
      if (!triggered.bored   && text.includes('bored'))  { triggered.bored    = true; showLoveMessage(window.innerWidth - 150, window.innerHeight - 300, "BORED?! Your exam is in days and you're BORED?! I am CONCERNED. 🚨😂"); }
      if (!triggered.hate    && text.includes('hate'))    { triggered.hate     = true; showLoveMessage(window.innerWidth - 150, window.innerHeight - 300, "Hate is a strong word. Save that energy for the exam, tough girl! 💪😂"); }
      if (!triggered.wordCount) {
        const words = text.split(/\s+/).filter(w => w.length > 0);
        if (words.length >= 50) { triggered.wordCount = true; showLoveMessage(window.innerWidth - 150, window.innerHeight - 300, "Look at all those notes! Your brain is huge! 🧠✨"); }
      }
    });
  }

  // ── MORE EASTER EGGS (To reach 50) ──────────
  
  // 1. Mouse leave window
  document.addEventListener('mouseleave', () => {
    if (Math.random() > 0.7) showLoveMessage(window.innerWidth / 2, 50, "Wait, where are you going? The notes are here! 👀");
  });

  // 2. Typing 'oaishi' anywhere
  let typedOaishi = '';
  window.addEventListener('keydown', e => {
    if (e.key.length === 1) typedOaishi = (typedOaishi + e.key.toLowerCase()).slice(-6);
    if (typedOaishi === 'oaishi') {
      showLoveMessage(window.innerWidth / 2, window.innerHeight / 2, "That's my beautiful wife's name! 😍");
      typedOaishi = '';
    }
  });

  // 3. Typing 'wife'
  let typedWife = '';
  window.addEventListener('keydown', e => {
    if (e.key.length === 1) typedWife = (typedWife + e.key.toLowerCase()).slice(-4);
    if (typedWife === 'wife') {
      showLoveMessage(window.innerWidth / 2, window.innerHeight / 2, "Best wife in the universe! 💖");
      typedWife = '';
    }
  });

  // 4. Typing 'exam'
  let typedExam = '';
  window.addEventListener('keydown', e => {
    if (e.key.length === 1) typedExam = (typedExam + e.key.toLowerCase()).slice(-4);
    if (typedExam === 'exam') {
      showLoveMessage(window.innerWidth / 2, window.innerHeight / 2, "You are going to ACE this exam! 💯");
      typedExam = '';
    }
  });

  // 5. Typing 'fail'
  let typedFail = '';
  window.addEventListener('keydown', e => {
    if (e.key.length === 1) typedFail = (typedFail + e.key.toLowerCase()).slice(-4);
    if (typedFail === 'fail') {
      showLoveMessage(window.innerWidth / 2, window.innerHeight / 2, "Don't even think about that! You're brilliant! 🚫🧠");
      typedFail = '';
    }
  });

  // 6. Fast mouse movement (dizzy)
  let lastMouseTime = Date.now();
  let mouseSpeedPoints = 0;
  window.addEventListener('mousemove', e => {
    const now = Date.now();
    if (now - lastMouseTime < 20) mouseSpeedPoints++;
    else mouseSpeedPoints = 0;
    lastMouseTime = now;
    if (mouseSpeedPoints > 50) {
      showLoveMessage(window.innerWidth / 2, window.innerHeight / 2, "Stop shaking the mouse so fast, you're making me dizzy! 😵‍💫");
      mouseSpeedPoints = -500; // Cooldown
    }
  });

  // 7. Holding Shift
  let shiftHeldTime = 0;
  window.addEventListener('keydown', e => {
    if (e.key === 'Shift') {
      if (!shiftHeldTime) shiftHeldTime = Date.now();
      else if (Date.now() - shiftHeldTime > 5000) {
        showLoveMessage(window.innerWidth / 2, window.innerHeight / 2, "Are we YELLING?! Why are you holding Shift for so long? 🗣️");
        shiftHeldTime = Date.now() + 100000;
      }
    }
  });
  window.addEventListener('keyup', e => { if (e.key === 'Shift') shiftHeldTime = 0; });

  // 8. Double click background
  window.addEventListener('dblclick', e => {
    if (e.target === document.body || e.target.classList.contains('wrap')) {
      showLoveMessage(e.clientX, e.clientY, "Double tap! Like! ❤️");
    }
  });

  // 9. Highlighting too much
  document.addEventListener('selectionchange', () => {
    const text = window.getSelection().toString();
    if (text.length > 500) {
      showLoveMessage(window.innerWidth / 2, 100, "Are you just highlighting the whole page at this point? 😂🖍️");
    }
  });

  // 10. Blur at 10 times
  let megaDistractCount = 0;
  window.addEventListener('blur', () => megaDistractCount++);
  window.addEventListener('focus', () => {
    if (megaDistractCount === 10) {
      showLoveMessage(window.innerWidth / 2, window.innerHeight / 2, "Okay seriously, are we watching Netflix? Focus on the notes! 🍿📺");
    }
  });

  // 11. 10 minute mark
  setTimeout(() => showLoveMessage(window.innerWidth / 2, 100, "10 minutes of solid work! A great start! 🌟"), 10 * 60 * 1000);

  // 12. 20 minute mark
  setTimeout(() => showLoveMessage(window.innerWidth / 2, 100, "20 minutes! Keep it up, you're doing amazing! ⚡"), 20 * 60 * 1000);

  // 13. Back from long blur
  let lastBlurTime = 0;
  window.addEventListener('blur', () => lastBlurTime = Date.now());
  window.addEventListener('focus', () => {
    if (lastBlurTime > 0 && Date.now() - lastBlurTime > 5 * 60 * 1000) {
      showLoveMessage(window.innerWidth / 2, window.innerHeight / 2, "Welcome back! I missed you! Now back to studying! 🥰");
    }
  });

  // 14. Press 'Q' 3 times
  let qPresses = 0;
  window.addEventListener('keydown', e => {
    if (e.key.toLowerCase() === 'q') {
      qPresses++;
      if (qPresses === 3) {
        showLoveMessage(window.innerWidth / 2, window.innerHeight / 2, "Quitting is not an option! You can do this! 🚫🚪");
        qPresses = 0;
      }
    } else { qPresses = 0; }
  });

  // 15. Right click 3 times
  let rightClickCount = 0;
  window.addEventListener('contextmenu', () => {
    rightClickCount++;
    if (rightClickCount === 3) {
      setTimeout(() => showLoveMessage(window.innerWidth / 2, window.innerHeight / 2, "Still right clicking? Still nothing here but my love for you! 💖"), 500);
      rightClickCount = 0;
    }
  });

  // 16. 11:11 Wish
  setInterval(() => {
    const d = new Date();
    if (d.getHours() % 12 === 11 && d.getMinutes() === 11 && d.getSeconds() === 0) {
      showLoveMessage(window.innerWidth / 2, window.innerHeight / 2, "It's 11:11! Make a wish! I wish for you to get an A+! ✨");
    }
  }, 1000);

  // 17. Ctrl+C 5 times
  let ctrlCCount = 0;
  window.addEventListener('keydown', e => {
    if (e.ctrlKey && e.key.toLowerCase() === 'c') {
      ctrlCCount++;
      if (ctrlCCount === 5) {
        showLoveMessage(window.innerWidth / 2, 100, "Ctrl+C won't put it in your brain! You have to actually read it! 🧠📎");
        ctrlCCount = 0;
      }
    }
  });

  // 18. Ctrl+V 3 times
  let ctrlVCount = 0;
  window.addEventListener('keydown', e => {
    if (e.ctrlKey && e.key.toLowerCase() === 'v') {
      ctrlVCount++;
      if (ctrlVCount === 3) {
        showLoveMessage(window.innerWidth / 2, 100, "Pasting? You better be pasting something smart into your notes! 📋🤔");
        ctrlVCount = 0;
      }
    }
  });

  // 19. Marathon scroller
  let scrollMarathon = 0;
  window.addEventListener('scroll', () => {
    scrollMarathon++;
    if (scrollMarathon === 500) {
      showLoveMessage(window.innerWidth / 2, 100, "You've scrolled a marathon! Good exercise for your fingers! 🏃‍♀️👆");
    }
  }, { passive: true });

  // 20. Typing 'coffee'
  let typedCoffee = '';
  window.addEventListener('keydown', e => {
    if (e.key.length === 1) typedCoffee = (typedCoffee + e.key.toLowerCase()).slice(-6);
    if (typedCoffee === 'coffee') {
      showLoveMessage(window.innerWidth / 2, window.innerHeight / 2, "I'll go make you a cup right now! ☕❤️");
      typedCoffee = '';
    }
  });

  // 21. Typing 'tea'
  let typedTea = '';
  window.addEventListener('keydown', e => {
    if (e.key.length === 1) typedTea = (typedTea + e.key.toLowerCase()).slice(-3);
    if (typedTea === 'tea') {
      showLoveMessage(window.innerWidth / 2, window.innerHeight / 2, "Time for a tea break? 🫖🌿");
      typedTea = '';
    }
  });

  // 22. Typing 'water'
  let typedWater = '';
  window.addEventListener('keydown', e => {
    if (e.key.length === 1) typedWater = (typedWater + e.key.toLowerCase()).slice(-5);
    if (typedWater === 'water') {
      showLoveMessage(window.innerWidth / 2, window.innerHeight / 2, "Stay hydrated my love! Drink some water! 💧");
      typedWater = '';
    }
  });

  // 23. Spacebar 10 times fast
  let spaceTimes = [];
  window.addEventListener('keydown', e => {
    if (e.key === ' ') {
      const now = Date.now();
      spaceTimes = [...spaceTimes.filter(t => now - t < 2000), now];
      if (spaceTimes.length >= 10) {
        showLoveMessage(window.innerWidth / 2, window.innerHeight / 2, "Take it easy on the spacebar! It didn't do anything wrong! 🚀");
        spaceTimes = [];
      }
    }
  });

  // 24. Click spamming anywhere
  let clickSpam = 0;
  let clickSpamTimer;
  window.addEventListener('click', () => {
    clickSpam++;
    clearTimeout(clickSpamTimer);
    if (clickSpam === 15) {
      showLoveMessage(window.innerWidth / 2, window.innerHeight / 2, "Click click click! Are you playing a video game or studying? 🎮😂");
      clickSpam = 0;
    }
    clickSpamTimer = setTimeout(() => clickSpam = 0, 3000);
  });

  // 25. Typing 'help' again but outside notepad
  let typedHelp = '';
  window.addEventListener('keydown', e => {
    if (e.target.tagName !== 'TEXTAREA' && e.target.tagName !== 'INPUT' && e.key.length === 1) {
      typedHelp = (typedHelp + e.key.toLowerCase()).slice(-4);
      if (typedHelp === 'help') {
        showLoveMessage(window.innerWidth / 2, window.innerHeight / 2, "I'm always here to help you honey! Just ask! 🦸‍♂️❤️");
        typedHelp = '';
      }
    }
  });
  
  // 26. Backspace spam anywhere
  let globalBs = 0;
  window.addEventListener('keydown', e => {
    if (e.key === 'Backspace') {
      globalBs++;
      if(globalBs === 10) {
        showLoveMessage(window.innerWidth / 2, window.innerHeight / 2, "So many mistakes? It's okay, nobody is perfect! Except you! 🥰");
        globalBs = 0;
      }
    } else { globalBs = 0; }
  });

  // 27. Refreshing (F5) warning
  window.addEventListener('keydown', e => {
    if (e.key === 'F5') {
      showLoveMessage(window.innerWidth / 2, 100, "Refreshing the page won't refresh your brain! Keep studying! 🔄🧠");
    }
  });

  // 28. Dev tools open check (width change drastically)
  let lastWidth = window.innerWidth;
  window.addEventListener('resize', () => {
    if (Math.abs(window.innerWidth - lastWidth) > 300) {
      showLoveMessage(window.innerWidth / 2, window.innerHeight / 2, "Did you just open DevTools? Hacking the exam? 🧑‍💻😂");
    }
    lastWidth = window.innerWidth;
  });

  // 29. Time spent on page 45 minutes
  setTimeout(() => showLoveMessage(window.innerWidth / 2, 100, "45 minutes! You're really putting in the work! So proud! 🎖️"), 45 * 60 * 1000);
  
  // 30. Super long session (2 hours)
  setTimeout(() => showLoveMessage(window.innerWidth / 2, window.innerHeight / 2, "TWO HOURS! Okay, you definitely need a break now! I'm officially demanding you take a 10 min break! 🛑💖"), 120 * 60 * 1000);

  // ── Quiz System ─────────────────────────────
  if (!localStorage.getItem('oaishi_score')) localStorage.setItem('oaishi_score', 0);
  let currentScore = parseInt(localStorage.getItem('oaishi_score'));
  let currentStreak = parseInt(localStorage.getItem('oaishi_streak') || '0');
  
  // Score & streak tracked silently — no visible HUD
  function updateHud() {
    // intentionally empty — display removed per user request
  }


  if (document.querySelector('.q-section') && window.quizBank) {
    // Hide old tracker if exists
    const oldTracker = document.getElementById('quiz-tracker');
    if(oldTracker) oldTracker.style.display = 'none';

    let wrongStreak = 0;

    const allAnswered = JSON.parse(localStorage.getItem('oaishi_answered') || '[]');
    const wrongVault = JSON.parse(localStorage.getItem('oaishi_wrong_quizzes') || '[]');

    let pool = window.quizBank.map((q, i) => ({ ...q, id: i }));

    // ── DYNAMIC VOCAB GENERATOR ──────────────────
    if (window.vocabDatabase && window.vocabDatabase.length > 0) {
      const dynamicCount = 50; 
      for (let i = 0; i < dynamicCount; i++) {
        const word = window.vocabDatabase[Math.floor(Math.random() * window.vocabDatabase.length)];
        // Get 2 distractors from same category if possible
        let distractors = window.vocabDatabase
          .filter(w => w.cat === word.cat && w.adv !== word.adv)
          .sort(() => 0.5 - Math.random())
          .slice(0, 2);
        
        if (distractors.length < 2) {
          distractors = window.vocabDatabase
            .filter(w => w.adv !== word.adv)
            .sort(() => 0.5 - Math.random())
            .slice(0, 2);
        }

        const options = [word.adv, ...distractors.map(d => d.adv)].sort(() => 0.5 - Math.random());
        pool.push({
          id: `v_${i}`,
          section: 'any', // Can appear in any section
          q: `Which academic word is a stronger replacement for <strong>"${word.simple}"</strong>?`,
          options: options,
          correct: options.indexOf(word.adv)
        });
      }
    }
    
    // First priority: Quizzes in the wrong vault
    let toReview = pool.filter(q => wrongVault.includes(q.id));
    // Second priority: Quizzes not answered yet
    let unanswered = pool.filter(q => !allAnswered.includes(q.id) && !wrongVault.includes(q.id));

    // Fallback: If they answered literally everything perfectly, reset to entire pool!
    if (toReview.length === 0 && unanswered.length === 0) {
      unanswered = [...pool];
    }

    const pageSections = Array.from(document.querySelectorAll('.q-section'));

    let validSections = pageSections
      .filter(sec => toReview.some(q => q.section === sec.id || q.section === 'any') || unanswered.some(q => q.section === sec.id || q.section === 'any'))
      .sort(() => 0.5 - Math.random());

    // Only show quizzes "every now and then" (70% chance to show, and max 1-2 per page)
    if (Math.random() < 0.7) {
      validSections.slice(0, Math.floor(Math.random() * 2) + 1).forEach(section => {
      let sectionPool = toReview.filter(q => q.section === section.id || q.section === 'any');
      if(sectionPool.length === 0) {
        sectionPool = unanswered.filter(q => q.section === section.id || q.section === 'any');
      }
      const quiz = sectionPool[Math.floor(Math.random() * sectionPool.length)];
      if(!quiz) return;

      const quizDiv = document.createElement('div');
      quizDiv.className = 'quiz-box';
      quizDiv.style.cssText = 'margin:30px 0;padding:20px;background:rgba(255,143,171,0.1);border-left:4px solid var(--pink);border-radius:8px;opacity:0;transform:translateY(20px);transition:all 0.5s ease-out;';

      const optionsHtml = quiz.options.map((opt, idx) =>
        `<button class="q-btn" data-idx="${idx}" style="padding:8px 15px;margin-right:10px;margin-bottom:10px;background:#333;border:1px solid #444;border-radius:6px;color:white;cursor:pointer;transition:all 0.2s;">${opt}</button>`
      ).join('');

      quizDiv.innerHTML = `
        <h4 style="margin:0 0 10px 0;color:var(--pink);">🧠 Pop Quiz!</h4>
        <p style="margin:0 0 15px 0;">${quiz.q}</p>
        <div class="quiz-options" style="display:flex;flex-wrap:wrap;">${optionsHtml}</div>
        <div class="quiz-result" style="margin-top:10px;font-weight:bold;font-size:14px;display:none;"></div>
      `;

      section.appendChild(quizDiv);

      // Fade-in on scroll
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity   = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      observer.observe(quizDiv);

      // Answer handling
      const btns      = quizDiv.querySelectorAll('.q-btn');
      const resultDiv = quizDiv.querySelector('.quiz-result');

      btns.forEach(btn => {
        btn.addEventListener('click', e => {
          btns.forEach(b => { b.disabled = true; b.style.opacity = '0.5'; b.style.cursor = 'default'; });
          
          if(!allAnswered.includes(quiz.id)) allAnswered.push(quiz.id);
          localStorage.setItem('oaishi_answered', JSON.stringify(allAnswered));

          const picked = parseInt(e.target.getAttribute('data-idx'));
          resultDiv.style.display = 'block';

          if (picked === quiz.correct) {
            wrongStreak = 0;
            currentStreak++;
            localStorage.setItem('oaishi_streak', currentStreak);

            if (wrongVault.includes(quiz.id)) {
              wrongVault.splice(wrongVault.indexOf(quiz.id), 1);
              localStorage.setItem('oaishi_wrong_quizzes', JSON.stringify(wrongVault));
            }

            e.target.style.background = 'var(--mint)';
            e.target.style.color      = '#000';
            e.target.style.opacity    = '1';
            resultDiv.style.color     = 'var(--mint)';

            const correctPraise = [
              'Correct! Brain is working overtime today! 🧠✨',
              'Yes! Nailed it! Was there ever any doubt? 💅',
              'That\'s right! Knowledge unlocked! 🔓',
              'Correct! Keep this energy for the exam! 🔥',
              'Boom! Got it in one! 🎯'
            ];
            resultDiv.textContent = correctPraise[Math.floor(Math.random() * correctPraise.length)];
            currentScore++;
            localStorage.setItem('oaishi_score', currentScore);
            updateHud();
            const ex = e.target.getBoundingClientRect();
            showLoveMessage(ex.left + ex.width / 2, ex.top, "Correct! You're so smart! 🥰");
          } else {
            wrongStreak++;
            currentStreak = 0;
            localStorage.setItem('oaishi_streak', 0);
            updateHud();

            if (!wrongVault.includes(quiz.id)) {
              wrongVault.push(quiz.id);
              localStorage.setItem('oaishi_wrong_quizzes', JSON.stringify(wrongVault));
            }

            e.target.style.background              = 'var(--coral)';
            e.target.style.color                   = '#fff';
            e.target.style.opacity                 = '1';
            btns[quiz.correct].style.background    = 'var(--mint)';
            btns[quiz.correct].style.color         = '#000';
            btns[quiz.correct].style.opacity       = '1';
            resultDiv.style.color                  = 'var(--coral)';

            const wrongResponses = [
              'Not quite — but the correct answer is highlighted! 💛',
              'Oops! Study that one again, it\'ll come up! 📚',
              'Almost! This one\'s going back into the review vault. 🔄'
            ];
            const roastResponses = [
              'Three wrong in a row... Is your brain buffering? 🐢💻',
              'Okay we might need to read that section one more time! 😂'
            ];
            resultDiv.textContent = wrongStreak >= 3
              ? (wrongStreak = 0, roastResponses[Math.floor(Math.random() * roastResponses.length)])
              : wrongResponses[Math.floor(Math.random() * wrongResponses.length)];
          }
        });
      });
    });
    }
  }
});
