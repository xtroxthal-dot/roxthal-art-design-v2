const CACHE_NAME = "roxthal-v2-core-v1";

const APP_FILES = [
  "./",
  "./index.html",
  "./manifest.json",
  "./css/roxthal.css",
  "./js/app.js"
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
              key !== CACHE_NAME &&
              key.startsWith("roxthal-v2-")
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

  event.respondWith(
    caches.match(request).then(cached => {

      if (cached) {
        return cached;
      }

      return fetch(request)
        .then(response => {

          if (
            !response ||
            response.status !== 200 ||
            response.type === "opaque"
          ) {
            return response;
          }

          const copy = response.clone();

          caches.open(CACHE_NAME).then(cache => {
            cache.put(request, copy);
          });

          return response;
        })
        .catch(() => {

          if (request.mode === "navigate") {
            return caches.match("./index.html");
          }

          return new Response("", {
            status: 503,
            statusText: "Offline"
          });
        });
    })
  );
});
