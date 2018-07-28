var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
    // "/AustinBreslinDev/mousetrap.js",
    "/AustinBreslinDev/favicon.ico",
    "/AustinBreslinDev/index.html",
    "/AustinBreslinDev/contact/index.html",
    "/AustinBreslinDev/style.css",
    "/AustinBreslinDev/script.js",
    "https://cdn.polyfill.io/v2/polyfill.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.4.0/highlight.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/picturefill/3.0.3/picturefill.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.4.0/styles/default.min.css",
    "https://fonts.googleapis.com/icon?family=Material+Icons",
    "https://unpkg.com/purecss@1.0.0/build/grids-responsive-min.css",
    "https://unpkg.com/purecss@1.0.0/build/pure-min.css"
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          // Cache hit - return response
          if (response) {
            return response;
          }
          return fetch(event.request);
        }
      )
    );
  });