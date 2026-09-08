const CACHE = 'kyou-gakkou-v2';
const ASSETS = ['./', './index.html', './manifest.webmanifest', './sw.js', './cover.png', './story.txt'];
self.addEventListener('install', event => event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS))));
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));
self.addEventListener('fetch', event => event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request))));
