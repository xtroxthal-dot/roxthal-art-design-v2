const CACHE_NAME = "roxthal-v2-core-v6";

const APP_FILES = [
  "./",
  "./index.html",
  "./manifest.json",
  "./css/roxthal.css",
  "./js/app.js",
  "./js/galeria.js"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(APP_FILES);
    })
  );

  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys
          .filter(
            key =>
              key.startsWith("roxthal-v2-") &&
              key !== CACHE_NAME
          )
          .map(key => caches.delete(key))
      );
    })
  );

  self.clients.claim();
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;

  const request = event.request;

  const isCoreFile =
    request.url.endsWith("/index.html") ||
    request.url.endsWith("/js/app.js") ||
    request.url.endsWith("/js/galeria.js") ||
    request.url.endsWith("/css/roxthal.css") ||
    request.url.endsWith("/manifest.json") ||
    request.url.endsWith("/sw.js");

  if (isCoreFile) {
    event.respondWith(
      fetch(request)
        .then(response => {
          if (response && response.ok) {
            const copy = response.clone();

            caches.open(CACHE_NAME).then(cache => {
              cache.put(request, copy);
            });

            return response;
          }

          return caches.match(request);
        })
        .catch(() => {
          return caches.match(request);
        })
    );

    return;
  }

  event.respondWith(
    caches.match(request).then(cached => {
      if (cached) {
        return cached;
      }

      return fetch(request)
        .then(response => {
          if (!response || !response.ok) {
            return response;
          }

          const copy = response.clone();

          caches.open(CACHE_NAME).then(cache => {
            cache.put(request, copy);
          });

          return response;
        })
        .catch(() => {
          return caches.match(request);
        });
    })
  );
});
