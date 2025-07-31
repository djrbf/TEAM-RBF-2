
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('djrbf-store').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/style.css',
        '/JJ.png',
        '/manifest.json',
        '/icon-512x512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
