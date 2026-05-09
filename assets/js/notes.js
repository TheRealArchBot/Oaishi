// ──────────────────────────────────────────────
// Service Worker Registration
// ──────────────────────────────────────────────
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js')
      .then(reg => console.log('SW registered!', reg))
      .catch(err => console.log('SW registration failed', err));
  });
}

// ──────────────────────────────────────────────
// Navigation Scroll Highlight
// ──────────────────────────────────────────────
const navSections = document.querySelectorAll('.q-section');
const navLinks    = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  let current = '';
  navSections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 90) current = s.id;
  });
  navLinks.forEach(l => {
    const href = l.getAttribute('href');
    if (href?.startsWith('#')) {
      const active = href === '#' + current;
      l.style.color       = active ? 'var(--yellow)' : '';
      l.style.borderColor = active ? 'var(--yellow)' : '';
    }
  });
}, { passive: true });

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
  const msg = Object.assign(document.createElement('div'), {
    textContent: text || LOVE_MESSAGES[Math.floor(Math.random() * LOVE_MESSAGES.length)]
  });

  Object.assign(msg.style, {
    position:        'fixed',
    left:            x + 'px',
    top:             y + 'px',
    transform:       'translate(-50%, -100%)',
    backgroundColor: 'var(--pink, #ff8fab)',
    color:           '#fff',
    padding:         '10px 20px',
    borderRadius:    '20px',
    fontWeight:      'bold',
    boxShadow:       '0 4px 12px rgba(255,143,171,0.4)',
    pointerEvents:   'none',
    zIndex:          '9999',
    opacity:         '0',
    transition:      'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    textAlign:       'center'
  });

  document.body.appendChild(msg);

  requestAnimationFrame(() => {
    msg.style.top     = (y - 50) + 'px';
    msg.style.opacity = '1';
  });

  setTimeout(() => {
    msg.style.opacity = '0';
    msg.style.top     = (y - 80) + 'px';
    setTimeout(() => msg.remove(), 500);
  }, 4000);
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

  // Time-based greetings (late night / early bird / afternoon nap)
  const hour = new Date().getHours();
  if (hour >= 23 || hour < 4) {
    setTimeout(() => showLoveMessage(window.innerWidth / 2, 100, "It's late, honey. Don't forget to get some sleep soon! 🌙💤"), 5000);
  } else if (hour >= 5 && hour <= 8) {
    setTimeout(() => showLoveMessage(window.innerWidth / 2, 100, "Wow, up so early! Good morning, my hardworking beautiful wife! 🌅☕"), 5000);
  } else if (hour >= 14 && hour <= 16) {
    setTimeout(() => showLoveMessage(window.innerWidth / 2, 100, "It's prime nap time and you're STUDYING?! Who kidnapped my wife?! 😱"), 5000);
  }

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

  // Idle / deep-reading tracker (2 min no movement)
  let idleTimer;
  const resetIdle = () => {
    clearTimeout(idleTimer);
    idleTimer = setTimeout(() => showLoveMessage(window.innerWidth - 150, 100, "I see you studying hard! Don't forget to blink! 😉✨"), 2 * 60 * 1000);
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

  // ── Quiz System ─────────────────────────────
  if (!localStorage.getItem('oaishi_score')) localStorage.setItem('oaishi_score', 0);
  let currentScore = parseInt(localStorage.getItem('oaishi_score'));

  const nav = document.querySelector('nav');
  if (nav && document.querySelector('.q-section')) {
    const tracker = document.createElement('span');
    tracker.id = 'quiz-tracker';
    tracker.style.cssText = 'margin-left:auto;background:rgba(255,255,255,0.1);padding:5px 12px;border-radius:20px;font-weight:bold;font-size:13px;color:var(--yellow);';
    tracker.innerHTML = `⭐️ Score: ${currentScore}`;
    nav.appendChild(tracker);

    let wrongStreak = 0;

    const unanswered = quizBank
      .map((q, i) => ({ ...q, id: i }))
      .filter(q => !localStorage.getItem(`quiz_answered_${q.id}`));

    const pageSections = Array.from(document.querySelectorAll('.q-section'));

    let validSections = pageSections
      .filter(sec => unanswered.some(q => q.section === sec.id))
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);

    validSections.forEach(section => {
      const pool = unanswered.filter(q => q.section === section.id);
      const quiz = pool[Math.floor(Math.random() * pool.length)];

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
          localStorage.setItem(`quiz_answered_${quiz.id}`, 'true');

          const picked = parseInt(e.target.getAttribute('data-idx'));
          resultDiv.style.display = 'block';

          if (picked === quiz.correct) {
            wrongStreak = 0;
            e.target.style.background = 'var(--mint)';
            e.target.style.opacity    = '1';
            resultDiv.style.color     = 'var(--mint)';
            resultDiv.textContent     = 'Correct! Brilliant as always! ✨';
            currentScore++;
            localStorage.setItem('oaishi_score', currentScore);
            tracker.innerHTML = `⭐️ Score: ${currentScore}`;
            showLoveMessage(e.clientX, e.clientY, "Correct! You're so smart! 🥰");
          } else {
            wrongStreak++;
            e.target.style.background              = 'var(--coral)';
            e.target.style.opacity                 = '1';
            btns[quiz.correct].style.background    = 'var(--mint)';
            btns[quiz.correct].style.opacity       = '1';
            resultDiv.style.color                  = 'var(--coral)';
            resultDiv.textContent = wrongStreak >= 3
              ? (wrongStreak = 0, 'Wrong again... Is your brain running on Internet Explorer today? 🐢💻')
              : 'Oops, not quite! Keep trying, honey! 💛';
          }
        });
      });
    });
  }

});
