const CACHE_NAME = 'oaishi-study-cache-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './english-writing-exam.html',
  './vocab-builder.html',
  './assets/css/shared.css',
  './assets/css/index.css',
  './assets/css/notes.css',
  './assets/js/index.js',
  './assets/js/notes.js',
  './assets/js/quiz-bank.js',
  'https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Nunito:ital,wght@0,400;0,600;0,700;1,400&display=swap'
];

// Install event - cache all static assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[Service Worker] Caching all files');
        return cache.addAll(ASSETS_TO_CACHE);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log('[Service Worker] Clearing Old Cache');
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Fetch event - serve from cache if offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached response if found
        if (response) {
          return response;
        }
        // Otherwise fetch from network
        return fetch(event.request).catch(() => {
          // If network fails (offline) and not in cache, we could return a fallback page here if we had one
        });
      })
  );
});
