const CACHE_NAME = 'oaishi-study-cache-v3';
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
  './assets/js/vocab-data.js',
  'https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Nunito:ital,wght@0,400;0,600;0,700;1,400&display=swap'
];

// ── Install: pre-cache offline fallback assets, then activate immediately ──
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS_TO_CACHE))
      .then(() => self.skipWaiting())
  );
});

// ── Activate: wipe all old caches, claim all tabs immediately ──────────────
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

// ── Fetch: Network-first for EVERYTHING ───────────────────────────────────
// When online  → always fetches fresh from network, updates cache silently.
// When offline → falls back to cached version so the app still works.
self.addEventListener('fetch', event => {
  // Only handle GET requests, ignore chrome-extension / non-http
  if (event.request.method !== 'GET') return;
  if (!event.request.url.startsWith('http')) return;

  event.respondWith(
    fetch(event.request)
      .then(networkResponse => {
        // Got a valid response from the network — update the cache with it
        if (networkResponse && networkResponse.status === 200) {
          const clone = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return networkResponse;
      })
      .catch(() => {
        // Network failed (offline) — serve from cache
        return caches.match(event.request);
      })
  );
});
