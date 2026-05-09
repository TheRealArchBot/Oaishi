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

  // 4. Time-based "Take a break" message (Triggers after 15 minutes of being on the page)
  setTimeout(() => {
    showLoveMessage(window.innerWidth / 2, window.innerHeight / 2, "You've been studying so hard! Take a sip of water, my beautiful wife. 💧❤️");
  }, 15 * 60 * 1000); // 15 minutes

  // 5. Scroll-based reward (When she reads to the very bottom of the notes)
  let reachedBottom = false;
  window.addEventListener('scroll', () => {
    if (!reachedBottom && (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
      reachedBottom = true;
      showLoveMessage(window.innerWidth / 2, window.innerHeight - 100, "You made it to the end! You are going to ace this! 🏆🥰");
    }
  });

});
