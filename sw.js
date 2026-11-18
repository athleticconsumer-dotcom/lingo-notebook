// Offline support: the app files are cached, so the notebook opens without internet.
// Files are loaded fresh from the network when online (so updates arrive right away) and from the cache when offline.
const CACHE = "lingo-notebook-v1";
const FILES = ["./", "index.html", "style.css", "app.js", "firebase-sync.js", "words.js", "words-2.js", "words-3.js",
  "words-4.js", "words-5.js", "words-6.js", "manifest.webmanifest", "icons/icon-192.png", "icons/icon-512.png", "icons/apple-touch-icon.png"];

self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))); self.skipWaiting(); });
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);
  // Only handle our own files; Firebase and Google sign-in go straight to the network.
  if (e.request.method !== "GET" || url.origin !== location.origin) return;
  e.respondWith(
    fetch(e.request).then(res => {
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); }
      return res;
    }).catch(() => caches.match(e.request, { ignoreSearch: true }).then(r => r || caches.match("index.html")))
  );
});
