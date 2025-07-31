
self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open('djrbf-store').then(function(cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/style.css',
                '/manifest.json',
                '/serviceworker.js',
                '/video/video1.mp4',
                '/video/video2.mp4',
                '/video/video3.mp4',
                '/video/video4.mp4',
                '/icons/icon-512x512.png'
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
