// Update stats
function updateStats() {
  const total = document.querySelectorAll('.course-card').length;
  document.getElementById('course-count').textContent = total;
  document.getElementById('note-count').textContent = total;
}

// Last updated
const lu = document.getElementById('last-updated');
if (lu) {
  lu.textContent = 'Last updated: ' + new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

// Register Service Worker for offline capabilities
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js')
      .then(reg => console.log('SW registered!', reg))
      .catch(err => console.log('SW registration failed', err));
  });
}

// Search
function filterCards() {
  const q = document.getElementById('search').value.toLowerCase();
  let any = false;
  document.querySelectorAll('.course-card').forEach(c => {
    const name = c.dataset.name || '';
    const code = c.querySelector('.card-code')?.textContent.toLowerCase() || '';
    const matches = name.includes(q) || code.includes(q);
    c.classList.toggle('hidden', !matches);
    if (matches) any = true;
  });
  let empty = document.getElementById('empty');
  if (!any) {
    if (!empty) {
      empty = document.createElement('div');
      empty.id = 'empty'; empty.className = 'empty-state';
      empty.innerHTML = '<div style="font-size:2rem">🔍</div><p>No courses match "<strong>' + q + '</strong>"</p>';
      document.getElementById('card-grid').appendChild(empty);
    }
  } else if (empty) empty.remove();
  const addCardBtn = document.getElementById('add-card');
  if (addCardBtn) addCardBtn.classList.toggle('hidden', !!q);
}

// Semester filter
let activeSem = 'all';
function filterSem(btn, sem) {
  activeSem = sem;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.course-card').forEach(c => {
    const match = sem === 'all' || c.dataset.sem === sem;
    c.classList.toggle('hidden', !match);
  });
  const addCardBtn = document.getElementById('add-card');
  if (addCardBtn) addCardBtn.classList.toggle('hidden', sem !== 'all');
}

updateStats();

// ==========================================
// 🤫 EASTER EGGS FOR OAISHI 🤫
// ==========================================

console.log("%cHey Oaishi! ❤️", "color: #ff8fab; font-size: 24px; font-weight: bold;");
console.log("%cIf you're reading this, just know your husband is proud of you and you're brilliant love! ✨", "color: #4ecca3; font-size: 14px;");

let originalTitle = document.title;
window.addEventListener("blur", () => {
  document.title = "Come back Oaishi! 🥺❤️";
});
window.addEventListener("focus", () => {
  document.title = originalTitle;
});

document.addEventListener('DOMContentLoaded', () => {
  const logos = document.querySelectorAll('h1, .nav-logo');
  let clickCount = 0;

  logos.forEach(logo => {
    logo.style.cursor = 'pointer';
    logo.addEventListener('click', (e) => {
      clickCount++;
      if (clickCount >= 3) {
        clickCount = 0;
        showLoveMessage(e.clientX, e.clientY);
      }
    });
  });

  function showLoveMessage(x, y) {
    const msg = document.createElement('div');
    const messages = [
      "I love you, Oaishi! ❤️",
      "I believe in you honey! ✨",
      "You're my favorite genius 🥰",
      "I'm so proud of you honey! 💛",
      "Don't stress, you can do it love! 🧠"
    ];
    msg.textContent = messages[Math.floor(Math.random() * messages.length)];

    msg.style.position = 'fixed';
    msg.style.left = x + 'px';
    msg.style.top = y + 'px';
    msg.style.transform = 'translate(-50%, -100%)';
    msg.style.backgroundColor = 'var(--pink, #ff8fab)';
    msg.style.color = '#fff';
    msg.style.padding = '8px 16px';
    msg.style.borderRadius = '20px';
    msg.style.fontWeight = 'bold';
    msg.style.boxShadow = '0 4px 12px rgba(255,143,171,0.4)';
    msg.style.pointerEvents = 'none';
    msg.style.zIndex = '9999';
    msg.style.opacity = '0';
    msg.style.transition = 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';

    document.body.appendChild(msg);

    setTimeout(() => {
      msg.style.top = (y - 50) + 'px';
      msg.style.opacity = '1';
    }, 10);

    setTimeout(() => {
      msg.style.opacity = '0';
      msg.style.top = (y - 80) + 'px';
      setTimeout(() => msg.remove(), 500);
    }, 2000);
  }
});
