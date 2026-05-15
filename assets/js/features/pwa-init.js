// pwa-init.js — Service Worker registration and offline detection
// Requires: sw.js to exist in the root directory.
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js')
      .then(reg => console.log('SW registered!', reg))
      .catch(err => console.log('SW registration failed', err));
  });
}

// Offline detection popup
window.addEventListener('offline', () => {
  if (typeof window.showLoveMessage === 'function') {
    window.showLoveMessage(window.innerWidth / 2, 100, "Internet went down? Don't worry, I made sure your notes work completely offline! 📡❤️");
  }
});
