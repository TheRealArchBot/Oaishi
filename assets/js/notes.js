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
