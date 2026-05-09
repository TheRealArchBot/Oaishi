// Register Service Worker for offline capabilities
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js')
      .then(reg => console.log('SW registered!', reg))
      .catch(err => console.log('SW registration failed', err));
  });
}

// Navigation highlight on scroll
const sections = document.querySelectorAll('.q-section');
const links = document.querySelectorAll('nav a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 90) current = s.id;
  });
  links.forEach(l => {
    const href = l.getAttribute('href');
    if (href && href.startsWith('#')) {
      if (href === '#' + current) {
        l.style.color = 'var(--yellow)';
        l.style.borderColor = 'var(--yellow)';
      } else {
        l.style.color = '';
        l.style.borderColor = '';
      }
    }
  });
}, { passive: true });

// Notepad Widget Logic
document.addEventListener('DOMContentLoaded', () => {
  const notepad = document.getElementById('notepad-widget');
  const header = document.getElementById('notepad-header');
  const textarea = document.getElementById('notepad-textarea');

  if (notepad && header && textarea) {
    // Get course id from URL or just use a generic one
    const courseId = window.location.pathname.split('/').pop() || 'general';
    const storageKey = `notes_${courseId}`;

    // Load existing notes
    textarea.value = localStorage.getItem(storageKey) || '';

    // Toggle open/close
    header.addEventListener('click', () => {
      notepad.classList.toggle('open');
    });

    // Save on type
    textarea.addEventListener('input', () => {
      localStorage.setItem(storageKey, textarea.value);
    });
  }
});

// ==========================================
// 🤫 EASTER EGGS FOR OAISHI 🤫
// ==========================================

// 1. Console Message (For the tech savvy)
console.log("%cHey Oaishi! ❤️", "color: #ff8fab; font-size: 24px; font-weight: bold;");
console.log("%cIf you're reading this, just know your husband thinks you're brilliant and you're going to absolutely crush your exams! ✨", "color: #4ecca3; font-size: 14px;");

// 2. The "We Miss You" Tab Title
let originalTitle = document.title;
window.addEventListener("blur", () => {
  document.title = "Come back Oaishi! 🥺❤️";
});
window.addEventListener("focus", () => {
  document.title = originalTitle;
});

// 3. Secret Clickable Logos
document.addEventListener('DOMContentLoaded', () => {
  const logos = document.querySelectorAll('h1, .nav-logo');
  let clickCount = 0;

  logos.forEach(logo => {
    logo.style.cursor = 'pointer'; // Hint that it's clickable
    logo.addEventListener('click', (e) => {
      clickCount++;
      if (clickCount >= 3) {
        clickCount = 0;
        showLoveMessage(e.clientX, e.clientY);
      }
    });
  });

  function showLoveMessage(x, y, customText = null) {
    const msg = document.createElement('div');
    const messages = [
      "I love you, Oaishi! ❤️",
      "I believe in you honey! ✨",
      "You're my favorite genius 🥰",
      "I'm so proud of you! 💛",
      "Don't stress, you got this! 🧠"
    ];
    msg.textContent = customText || messages[Math.floor(Math.random() * messages.length)];

    // Styling the floating popup
    msg.style.position = 'fixed';
    msg.style.left = x + 'px';
    msg.style.top = y + 'px';
    msg.style.transform = 'translate(-50%, -100%)';
    msg.style.backgroundColor = 'var(--pink, #ff8fab)';
    msg.style.color = '#fff';
    msg.style.padding = '10px 20px';
    msg.style.borderRadius = '20px';
    msg.style.fontWeight = 'bold';
    msg.style.boxShadow = '0 4px 12px rgba(255,143,171,0.4)';
    msg.style.pointerEvents = 'none';
    msg.style.zIndex = '9999';
    msg.style.opacity = '0';
    msg.style.transition = 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    msg.style.textAlign = 'center';

    document.body.appendChild(msg);

    // Animate up and fade out
    setTimeout(() => {
      msg.style.top = (y - 50) + 'px';
      msg.style.opacity = '1';
    }, 10);

    setTimeout(() => {
      msg.style.opacity = '0';
      msg.style.top = (y - 80) + 'px';
      setTimeout(() => msg.remove(), 500);
    }, 4000); // Stays on screen a bit longer (4 seconds)
  }

  // 4. Time-based "Take a break" & Achievement messages
  // 15 minutes
  setTimeout(() => {
    showLoveMessage(window.innerWidth / 2, window.innerHeight / 2, "You've been studying so hard! Take a sip of water. 💧❤️");
  }, 15 * 60 * 1000);

  // 30 minutes
  setTimeout(() => {
    showLoveMessage(window.innerWidth / 2, window.innerHeight / 2, "Half an hour of pure focus! You are unstoppable, My Love! 🚀");
  }, 30 * 60 * 1000);

  // 45 minutes
  setTimeout(() => {
    showLoveMessage(window.innerWidth / 2, window.innerHeight / 2, "Wow, 45 minutes! I definitely owe you a treat for all this hard work. 🍩❤️");
  }, 45 * 60 * 1000);

  // 60 minutes
  setTimeout(() => {
    showLoveMessage(window.innerWidth / 2, window.innerHeight / 2, "An entire hour of studying?! You're officially a genius! I'm so proud of you. 👑💖");
  }, 60 * 60 * 1000);

  // 90 minutes
  setTimeout(() => {
    showLoveMessage(window.innerWidth / 2, window.innerHeight / 2, "An hour and a half?! You are an absolute studying machine! 🔥❤️");
  }, 90 * 60 * 1000);

  // 5. Scroll-based reward (When she reads to the very bottom of the notes)
  let reachedBottom = false;
  window.addEventListener('scroll', () => {
    if (!reachedBottom && (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
      reachedBottom = true;
      showLoveMessage(window.innerWidth / 2, window.innerHeight - 100, "You made it to the end! You are going to ace this! 🏆🥰");
    }
  });

  // 6. Midnight Owl (Late night studying check)
  const hour = new Date().getHours();
  if (hour >= 23 || hour < 4) {
    setTimeout(() => {
      showLoveMessage(window.innerWidth / 2, 100, "It's late, honey. Don't forget to get some sleep soon! 🌙💤");
    }, 5000); // Shows 5 seconds after page loads if it's late
  }

  // 6.1 Early Bird Check
  if (hour >= 5 && hour <= 8) {
    setTimeout(() => {
      showLoveMessage(window.innerWidth / 2, 100, "Wow, up so early! Good morning, my hardworking beautiful wife! 🌅☕");
    }, 5000);
  }

  // 6.2 The Offline Hero
  window.addEventListener('offline', () => {
    showLoveMessage(window.innerWidth / 2, 100, "Internet went down? Don't worry, I made sure your notes work completely offline! 📡❤️");
  });
  // 6.3 Secret Keyboard Code ("ahsan")
  let typedKeys = '';
  window.addEventListener('keydown', (e) => {
    // Only listen if not typing in a textarea or input
    if (e.target.tagName !== 'TEXTAREA' && e.target.tagName !== 'INPUT') {
      typedKeys += e.key.toLowerCase();
      if (typedKeys.length > 5) typedKeys = typedKeys.slice(-5);

      if (typedKeys === 'ahsan') {
        showLoveMessage(window.innerWidth / 2, window.innerHeight / 2, "You found the secret code! I love you! 💖🎉");
        typedKeys = ''; // reset
      }
    }
  });

  // 6.4 Idle / Deep Reading Tracker
  let idleTimer;
  const resetIdle = () => {
    clearTimeout(idleTimer);
    idleTimer = setTimeout(() => {
      showLoveMessage(window.innerWidth - 150, 100, "I see you studying hard! Don't forget to blink! 😉✨");
    }, 2 * 60 * 1000); // 2 minutes of zero mouse movement
  };
  window.addEventListener('mousemove', resetIdle);
  window.addEventListener('scroll', resetIdle, { passive: true });
  window.addEventListener('keydown', resetIdle);
  resetIdle();

  // 6.5 Highlighting Text Listener
  let highlightTriggered = false;
  document.addEventListener('selectionchange', () => {
    const selectedText = window.getSelection().toString().trim();
    if (selectedText.length > 20 && !highlightTriggered) {
      highlightTriggered = true;
      showLoveMessage(window.innerWidth / 2, window.innerHeight - 150, "Ooo, important note! Saving that in your brain? 🧠📝");
      // Reset after 60 seconds so it can happen again later
      setTimeout(() => highlightTriggered = false, 60000);
    }
  });

  // ==========================================
  // PLAYFUL ROASTS 🔥
  // ==========================================

  // 1. The "Speed Reader / Skimmer" Roast
  let lastScrollTime = Date.now();
  let lastScrollY = window.scrollY;
  let scrollWarnings = 0;
  window.addEventListener('scroll', () => {
    const now = Date.now();
    const currentY = window.scrollY;
    const timeDiff = now - lastScrollTime;
    const distance = Math.abs(currentY - lastScrollY);

    // If she scrolled more than 1500 pixels in less than 200ms
    if (timeDiff < 200 && distance > 1500 && scrollWarnings === 0) {
      scrollWarnings++;
      showLoveMessage(window.innerWidth / 2, window.innerHeight / 2, "Whoa there Sonic! There's no way you just read all that. Stop skimming! 🤨🐢");
      setTimeout(() => scrollWarnings = 0, 30000);
    }

    lastScrollTime = now;
    lastScrollY = currentY;
  }, { passive: true });

  // 2. The "Copy-Paster" Roast
  let copyCount = 0;
  document.addEventListener('copy', () => {
    copyCount++;
    if (copyCount === 1) {
      showLoveMessage(window.innerWidth / 2, 100, "Copy-pasting? I'm telling the professor! 🚨 (Just kidding)");
    } else if (copyCount === 3) {
      showLoveMessage(window.innerWidth / 2, 100, "Seriously? More copying? Try writing it in your own words, lazy! 😂");
      copyCount = 0; // reset
    }
  });

  // 3. The "Rage Clicker" Roast
  let clickTimes = [];
  document.addEventListener('click', (e) => {
    const now = Date.now();
    clickTimes.push(now);
    // Keep only clicks from the last 2 seconds
    clickTimes = clickTimes.filter(t => now - t < 2000);

    if (clickTimes.length >= 7) { // 7 clicks in 2 seconds
      showLoveMessage(e.clientX, e.clientY, "Why are you abusing your mouse? Calm down! 🐭💥");
      clickTimes = []; // reset
    }
  });
  // 4. The "Hacker" Roast (F12 or Inspect Element)
  window.addEventListener('keydown', (e) => {
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i'))) {
      showLoveMessage(window.innerWidth / 2, 100, "Trying to hack your own notes? Looking for the quiz answers? Nice try! 🕵️‍♀️💻");
    }
  });

  // 5. The "Distracted" Roast (Tab Switching)
  let distractCount = 0;
  window.addEventListener("blur", () => {
    distractCount++;
  });
  window.addEventListener("focus", () => {
    if (distractCount >= 4) {
      setTimeout(() => {
        showLoveMessage(window.innerWidth / 2, 100, "You keep switching tabs! Are you watching YouTube? Focus! 🍿👀");
      }, 500);
      distractCount = 0; // reset
    }
  });

  // 6. The "Window Resizer" Roast
  let resizeCount = 0;
  window.addEventListener('resize', () => {
    resizeCount++;
    if (resizeCount > 40) { // fires many times during a drag
      showLoveMessage(window.innerWidth / 2, window.innerHeight / 2, "Stop playing with the window size and just read! 🪟🙄");
      resizeCount = 0; // reset
    }
  });
  // 7. Notepad Keyword Listener & Word Count
  const notesArea = document.getElementById('notepad-textarea');
  if (notesArea) {
    let stressedTriggered = false;
    let ahsanTriggered = false;
    let tiredTriggered = false;
    let loveTriggered = false;
    let wordCountTriggered = false;
    let backspaceCount = 0;

    // The "Deleting Hard Work" Roast
    notesArea.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace' || e.key === 'Delete') {
        backspaceCount++;
        if (backspaceCount === 15) {
          showLoveMessage(window.innerWidth - 150, window.innerHeight - 300, "Deleting everything? Did you just write absolute garbage? 🗑️😂");
          backspaceCount = 0;
        }
      } else {
        backspaceCount = 0; // reset
      }
    });

    notesArea.addEventListener('input', (e) => {
      const text = e.target.value.toLowerCase();

      // Keyword checks
      if (text.includes('stress') && !stressedTriggered) {
        stressedTriggered = true;
        showLoveMessage(window.innerWidth - 150, window.innerHeight - 300, "Take a deep breath. I know you can do this! ❤️");
      }
      if (text.includes('ahsan') && !ahsanTriggered) {
        ahsanTriggered = true;
        showLoveMessage(window.innerWidth - 150, window.innerHeight - 300, "He loves you very much! 🥰");
      }
      if (text.includes('tired') && !tiredTriggered) {
        tiredTriggered = true;
        showLoveMessage(window.innerWidth - 150, window.innerHeight - 300, "You're working so hard. I'm so proud of you. ☕💛");
      }
      if (text.includes('love') && !loveTriggered) {
        loveTriggered = true;
        showLoveMessage(window.innerWidth - 150, window.innerHeight - 300, "I love you more! 💖");
      }

      // Word count achievement
      if (!wordCountTriggered) {
        const words = text.split(/\s+/).filter(word => word.length > 0);
        if (words.length >= 50) {
          wordCountTriggered = true;
          showLoveMessage(window.innerWidth - 150, window.innerHeight - 300, "Look at all those notes! Your brain is huge! 🧠✨");
        }
      }
    });
  }

  // ==========================================
  // 8. RANDOM MCQ QUIZZES (Section Specific)
  // ==========================================


  // Initialize score tracking
  if (!localStorage.getItem('oaishi_score')) {
    localStorage.setItem('oaishi_score', 0);
  }
  let currentScore = parseInt(localStorage.getItem('oaishi_score'));

  // Add the tracker to the nav if we're on a notes page
  const nav = document.querySelector('nav');
  if (nav && document.querySelector('.q-section')) {
    const tracker = document.createElement('span');
    tracker.id = 'quiz-tracker';
    tracker.style.cssText = 'margin-left: auto; background: rgba(255,255,255,0.1); padding: 5px 12px; border-radius: 20px; font-weight: bold; font-size: 13px; color: var(--yellow);';
    tracker.innerHTML = `⭐️ Score: ${currentScore}`;
    nav.appendChild(tracker);

    let wrongStreak = 0; // The "Bad at Quizzes" Roast Counter

    // Filter questions she hasn't answered yet
    const unanswered = quizBank.map((q, i) => ({ ...q, id: i }))
      .filter(q => !localStorage.getItem(`quiz_answered_${q.id}`));

    const sections = Array.from(document.querySelectorAll('.q-section'));

    // Find sections on this page that have unanswered questions
    let validSections = sections.filter(sec => unanswered.some(q => q.section === sec.id));

    // Randomly pick up to 3 sections to inject a quiz into
    validSections = validSections.sort(() => 0.5 - Math.random()).slice(0, 3);

    validSections.forEach(section => {
      const sectionId = section.id;

      // Get all unanswered questions for this specific section
      const sectionQuizzes = unanswered.filter(q => q.section === sectionId);

      // Pick exactly ONE random question to show
      const randomQuiz = sectionQuizzes[Math.floor(Math.random() * sectionQuizzes.length)];

      const quizDiv = document.createElement('div');
      quizDiv.className = 'quiz-box';
      // Start hidden with opacity 0 and slightly transformed
      quizDiv.style.cssText = 'margin: 30px 0; padding: 20px; background: rgba(255, 143, 171, 0.1); border-left: 4px solid var(--pink); border-radius: 8px; opacity: 0; transform: translateY(20px); transition: all 0.5s ease-out;';

      let optionsHtml = '';
      randomQuiz.options.forEach((opt, idx) => {
        optionsHtml += `<button class="q-btn" data-idx="${idx}" style="padding: 8px 15px; margin-right: 10px; margin-bottom: 10px; background: #333; border: 1px solid #444; border-radius: 6px; color: white; cursor: pointer; transition: all 0.2s;">${opt}</button>`;
      });

      quizDiv.innerHTML = `
        <h4 style="margin: 0 0 10px 0; color: var(--pink);">🧠 Pop Quiz!</h4>
        <p style="margin: 0 0 15px 0;">${randomQuiz.q}</p>
        <div class="quiz-options" style="display: flex; flex-wrap: wrap;">
          ${optionsHtml}
        </div>
        <div class="quiz-result" style="margin-top: 10px; font-weight: bold; font-size: 14px; display: none;"></div>
      `;

      // Insert it at the very bottom of the section
      section.appendChild(quizDiv);

      // Add scroll observer so it only appears ONCE she scrolls down to finish the section
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      observer.observe(quizDiv);

      // Handle clicking options
      const btns = quizDiv.querySelectorAll('.q-btn');
      const resultDiv = quizDiv.querySelector('.quiz-result');

      btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
          // Disable all buttons to make it single-time answerable
          btns.forEach(b => { b.disabled = true; b.style.opacity = '0.5'; b.style.cursor = 'default'; });
          localStorage.setItem(`quiz_answered_${randomQuiz.id}`, 'true');

          const picked = parseInt(e.target.getAttribute('data-idx'));
          resultDiv.style.display = 'block';

          if (picked === randomQuiz.correct) {
            wrongStreak = 0; // reset streak
            e.target.style.background = 'var(--mint)';
            e.target.style.opacity = '1';
            resultDiv.style.color = 'var(--mint)';
            resultDiv.textContent = 'Correct! Brilliant as always! ✨';
            currentScore++;
            localStorage.setItem('oaishi_score', currentScore);
            document.getElementById('quiz-tracker').innerHTML = `⭐️ Score: ${currentScore}`;
            showLoveMessage(e.clientX, e.clientY, "Correct! You're so smart! 🥰");
          } else {
            wrongStreak++;
            e.target.style.background = 'var(--coral)';
            e.target.style.opacity = '1';
            // Highlight the correct one
            btns[randomQuiz.correct].style.background = 'var(--mint)';
            btns[randomQuiz.correct].style.opacity = '1';
            resultDiv.style.color = 'var(--coral)';

            if (wrongStreak >= 3) {
              resultDiv.textContent = 'Wrong again... Is your brain running on Internet Explorer today? 🐢💻';
              wrongStreak = 0; // reset
            } else {
              resultDiv.textContent = 'Oops, not quite! Keep trying, honey! 💛';
            }
          }
        });
      });
    });
  }

});
