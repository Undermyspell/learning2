// const filesToCache = [
//     "/",
//     "index.html"
// ]

// const staticCacheName = "my-broker-v1";

// self.addEventListener("install", event => {
//     event.waitUntil(
//         caches.open(staticCacheName).then(cache => {
//             cache.addAll(filesToCache);
//         })
//     );
// });

// self.addEventListener("fetch", event => {
//     event.respondWith(
//         caches.match(event.request).then(response => {
//             return response || fetch(event.request);
//         })
//     );
// });

importScripts("/libs/workbox-v4.3.1/workbox-sw.js");

workbox.setConfig({
    modulePathPrefix: "/libs/workbox-v4.3.1/"
});

if(workbox) {
    console.log("yay.... 🤴");
} else {
    console.log("nay.... 🤬");
}

workbox.precaching.precacheAndRoute([]);

// Cache the Google Fonts stylesheets with a stale while revalidate strategy.
workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
    }),
  );
  
  // Cache the Google Fonts webfont files with a cache first strategy for 1 year.
  workbox.routing.registerRoute(
    /^https:\/\/fonts\.gstatic\.com/,
    new workbox.strategies.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
            new workbox.cacheableResponse.Plugin({
                statuses: [0, 200],
            }),
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 365,
            }),
        ],
    }),
  );
  
  workbox.routing.registerRoute(
    /\/node_modules\/pouchdb\/dist\/pouchdb.min.js$/,
    new workbox.strategies.NetworkFirst()
  );
  
  workbox.routing.registerRoute(
    /https:\/\/stockplaceholder\.herokuapp\.com/,
    new workbox.strategies.NetworkFirst()
  );