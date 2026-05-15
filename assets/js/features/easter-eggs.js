// easter-eggs.js — Fun, personalized interactions for Oaishi
// Requires: love-messages.js
document.addEventListener('DOMContentLoaded', () => {
  if (typeof window.showLoveMessage !== 'function') return;

  // 1. Triple-click logos/headers for love
  let clickCount = 0;
  document.querySelectorAll('h1, .nav-logo').forEach(logo => {
    logo.style.cursor = 'pointer';
    logo.addEventListener('click', e => {
      if (++clickCount >= 3) { 
        clickCount = 0; 
        window.showLoveMessage(e.clientX, e.clientY); 
      }
    });
  });

  // 2. Study milestone timers (15 / 30 / 45 / 60 / 90 min)
  const milestones = [
    [15, "You've been studying so hard! Take a sip of water. 💧❤️"],
    [30, "Half an hour of pure focus! You are unstoppable, Oaishi! 🚀"],
    [45, "Wow, 45 minutes! I definitely owe you a treat for all this hard work. 🍩❤️"],
    [60, "An entire hour of studying?! You're officially a genius! I'm so proud of you. 👑💖"],
    [90, "An hour and a half?! You are an absolute studying machine! 🔥❤️"]
  ];
  milestones.forEach(([min, msg]) => {
    setTimeout(() => window.showLoveMessage(window.innerWidth / 2, window.innerHeight / 2, msg), min * 60 * 1000);
  });

  // 3. Scroll to bottom reward
  let reachedBottom = false;
  window.addEventListener('scroll', () => {
    if (!reachedBottom && window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
      reachedBottom = true;
      window.showLoveMessage(window.innerWidth / 2, window.innerHeight - 100, "You made it to the end! You are going to ace this! 🏆🥰");
    }
  }, { passive: true });

  // 4. Time-based greetings
  const hour = new Date().getHours();
  if (hour >= 23 || hour < 4) {
    setTimeout(() => window.showLoveMessage(window.innerWidth / 2, 100, "It's late, honey. Don't forget to get some sleep soon! 🌙💤"), 5000);
  } else if (hour >= 5 && hour <= 8) {
    setTimeout(() => window.showLoveMessage(window.innerWidth / 2, 100, "Wow, up so early! Good morning, my hardworking beautiful wife! 🌅☕"), 5000);
  }

  // 5. Konami Code (↑↑↓↓←→←→BA)
  const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
  let konamiIndex = 0;
  window.addEventListener('keydown', e => {
    if (e.key === KONAMI[konamiIndex]) {
      konamiIndex++;
      if (konamiIndex === KONAMI.length) {
        konamiIndex = 0;
        window.showLoveMessage(window.innerWidth / 2, window.innerHeight / 2, "🎉 CHEAT CODE ACTIVATED! Extra brain power +100! You're already cheating by being this smart! 🧠✨");
      }
    } else {
      konamiIndex = 0;
    }
  });

  // 6. Secret keyboard code "ahsan"
  let typedKeys = '';
  window.addEventListener('keydown', e => {
    if (e.target.tagName !== 'TEXTAREA' && e.target.tagName !== 'INPUT') {
      typedKeys = (typedKeys + e.key.toLowerCase()).slice(-5);
      if (typedKeys === 'ahsan') {
        window.showLoveMessage(window.innerWidth / 2, window.innerHeight / 2, "You found the secret code! I love you! 💖🎉");
        typedKeys = '';
      }
    }
  });

  // 7. Idle tracker (5 min no movement)
  let idleTimer;
  const resetIdle = () => {
    clearTimeout(idleTimer);
    idleTimer = setTimeout(() => window.showLoveMessage(window.innerWidth / 2, window.innerHeight / 2, "Hey! The essay isn't going to write itself! (And I'm getting lonely here) 🥺"), 5 * 60 * 1000);
  };
  ['mousemove', 'keydown', 'scroll'].forEach(ev => window.addEventListener(ev, resetIdle, { passive: true }));
  resetIdle();

  // 8. Text selection / highlight trigger
  let highlightTriggered = false;
  document.addEventListener('selectionchange', () => {
    const selection = window.getSelection().toString().trim();
    if (!highlightTriggered && selection.length > 20) {
      highlightTriggered = true;
      window.showLoveMessage(window.innerWidth / 2, window.innerHeight - 150, "Ooo, important note! Saving that in your brain? 🧠📝");
      setTimeout(() => { highlightTriggered = false; }, 60000);
    }
    if (selection.length > 500) {
      window.showLoveMessage(window.innerWidth / 2, 100, "Are you just highlighting the whole page at this point? 😂🖍️");
    }
  });

  // 9. Tab title swap
  const originalTitle = document.title;
  window.addEventListener('blur',  () => { document.title = 'Come back Oaishi! 🥺❤️'; });
  window.addEventListener('focus', () => { document.title = originalTitle; });

  // 10. Typing 'oaishi' / 'wife' / 'exam' anywhere
  let globalKeys = '';
  window.addEventListener('keydown', e => {
    if (e.target.tagName !== 'TEXTAREA' && e.target.tagName !== 'INPUT' && e.key.length === 1) {
      globalKeys = (globalKeys + e.key.toLowerCase()).slice(-10);
      if (globalKeys.includes('oaishi')) { window.showLoveMessage(window.innerWidth/2, window.innerHeight/2, "That's my beautiful wife's name! 😍"); globalKeys = ''; }
      if (globalKeys.includes('wife'))   { window.showLoveMessage(window.innerWidth/2, window.innerHeight/2, "Best wife in the universe! 💖"); globalKeys = ''; }
      if (globalKeys.includes('exam'))   { window.showLoveMessage(window.innerWidth/2, window.innerHeight/2, "You are going to ACE this exam! 💯"); globalKeys = ''; }
      if (globalKeys.includes('fail'))   { window.showLoveMessage(window.innerWidth/2, window.innerHeight/2, "Don't even think about that! You're brilliant! 🚫🧠"); globalKeys = ''; }
      if (globalKeys.includes('coffee')) { window.showLoveMessage(window.innerWidth/2, window.innerHeight/2, "I'll go make you a cup right now! ☕❤️"); globalKeys = ''; }
      if (globalKeys.includes('tea'))    { window.showLoveMessage(window.innerWidth/2, window.innerHeight/2, "Time for a tea break? 🫖🌿"); globalKeys = ''; }
      if (globalKeys.includes('water'))  { window.showLoveMessage(window.innerWidth/2, window.innerHeight/2, "Stay hydrated my love! Drink some water! 💧"); globalKeys = ''; }
    }
  });

  // 11. 11:11 Wish
  setInterval(() => {
    const d = new Date();
    if (d.getHours() % 12 === 11 && d.getMinutes() === 11 && d.getSeconds() === 0) {
      window.showLoveMessage(window.innerWidth / 2, window.innerHeight / 2, "It's 11:11! Make a wish! I wish for you to get an A+! ✨");
    }
  }, 1000);
});
