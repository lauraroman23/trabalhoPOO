const HOST='https://lauraroman23.github.io/trabalhoPOO' 

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register(`${HOST}/service-worker.js`)
    .then(function () { console.log('Service Worker Registered'); });
}

var cacheName = 'empregada-app';
var filesToCache = [
  `${HOST}/img/perfil.png`,
  `${HOST}/app.js`,
  `${HOST}/css/estilo.css`,
  `${HOST}/index.html`,
  `${HOST}/Store.js`,
  `${HOST}/Empregada.js`,
  `${HOST}/service-worker.js`,
  `${HOST}/manifest.json`
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.open(cacheName).then(function(cache) {
      return cache.match(event.request).then(function (response) {
        return response || fetch(event.request).then(function(response) {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});