
const CACHE_NAME = "djrbf-cache-v1";
const urlsToCache = [
  "/TEAM-RBF-2/",
  "/TEAM-RBF-2/index.html",
  "/TEAM-RBF-2/style.css",
  "/TEAM-RBF-2/video1.mp4",
  "/TEAM-RBF-2/video2.mp4",
  "/TEAM-RBF-2/video3.mp4",
  "/TEAM-RBF-2/video4.mp4",
  "/TEAM-RBF-2/icon-512x512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
