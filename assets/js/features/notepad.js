// notepad.js — Persistent floating notepad widget (per-page storage)
// Requires: The notepad HTML widget to exist in the page.
document.addEventListener('DOMContentLoaded', () => {
  const notepad  = document.getElementById('notepad-widget');
  const header   = document.getElementById('notepad-header');
  const textarea = document.getElementById('notepad-textarea');
  if (!notepad || !header || !textarea) return;

  // Each page gets its own storage key so notes don't bleed between subjects
  const storageKey = 'notes_' + (window.location.pathname.split('/').pop() || 'general');
  textarea.value = localStorage.getItem(storageKey) || '';

  header.addEventListener('click', () => notepad.classList.toggle('open'));
  textarea.addEventListener('input', () => localStorage.setItem(storageKey, textarea.value));

  // ── Notepad keyword triggers ─────────────────────────────────────────────
  // Typing certain words in the notepad fires a supportive (or sassy) popup.
  if (typeof window.showLoveMessage !== 'function') return;

  const fired = {};
  let backspaceCount = 0;

  textarea.addEventListener('keydown', e => {
    if (e.key === 'Backspace' || e.key === 'Delete') {
      if (++backspaceCount >= 15) {
        window.showLoveMessage(window.innerWidth - 150, window.innerHeight - 300,
          "Deleting everything? Did you just write absolute garbage? 🗑️😂");
        backspaceCount = 0;
      }
    } else {
      backspaceCount = 0;
    }
  });

  textarea.addEventListener('input', e => {
    const text = e.target.value.toLowerCase();
    const trigger = (key, msg) => {
      if (!fired[key] && text.includes(key)) {
        fired[key] = true;
        window.showLoveMessage(window.innerWidth - 150, window.innerHeight - 300, msg);
      }
    };
    trigger('stress',  "Take a deep breath. I know you can do this! ❤️");
    trigger('ahsan',   "He loves you very much! 🥰");
    trigger('tired',   "You're working so hard. I'm so proud of you. ☕💛");
    trigger('love',    "I love you more! 💖");
    trigger('help',    "HELP?! I literally wrote all these notes FOR you. You're already being helped! 😂❤️");
    trigger('bored',   "BORED?! Your exam is in days and you're BORED?! I am CONCERNED. 🚨😂");
    trigger('hate',    "Hate is a strong word. Save that energy for the exam, tough girl! 💪😂");

    if (!fired.wordCount) {
      const words = text.split(/\s+/).filter(w => w.length > 0);
      if (words.length >= 50) {
        fired.wordCount = true;
        window.showLoveMessage(window.innerWidth - 150, window.innerHeight - 300,
          "Look at all those notes! Your brain is huge! 🧠✨");
      }
    }
  });
});
