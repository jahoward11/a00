// Service Worker

const cacheName = "calcjs-v00.10",
  cacheKeeplist = [cacheName],
  appShellFiles = [
    //"../-app-calcjs/calcjs0.10.html",
    "../-app-calcjs/cjs-srvc1.mjs",
    "../-app-calcjs/cjs-srvc2.mjs",
    "../-res-js/localforage.nopromises.min.js"
  ],
  contentToCache = [],
  tstampsw = Date.now();

self.addEventListener('install', e => {
  console.log("[Service Worker] Installing new cache: " + cacheName);
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      console.log("[Service Worker] Caching: appShellFiles + content");
      return cache.addAll((appShellFiles || []).concat(contentToCache || []));
    })
  );
});

self.addEventListener('fetch', e => {
  //console.log("[Service Worker] Fetching resource: " + e.request.url);
  e.respondWith(
    !caches ? fetch(e.request)
    : caches.match(e.request).then(rsp1 => {
      let tsfetch = Date.now();
      if ( rsp1 && ( !navigator.onLine
      || !/\/a00\/-app-calcjs\/[\w.-]+\??$/.test(e.request.url) )) {
        return rsp1;
      } else {
        return fetch(e.request).then(rsp2 =>
          !rsp2.ok || e.request.method !== 'GET' || /\?rev=/.test(e.request.url)
          || !/\/a00\/[\w/.-]+\??$/.test(e.request.url)
          ? rsp2
          : caches.open(cacheName).then(cache => {
              console.log( "[Service Worker] Caching new resource: " + e.request.url
                + "\n  (Time elapsed since SW install: "
                + ((tsfetch - tstampsw) / (60 * 1000)) + " min)" );
              cache.put(e.request, rsp2.clone());
              return rsp2;
            })
        );
      }
    }).catch(() => fetch(e.request))
  );
});

self.addEventListener('activate', e => {
  console.log( "[Service Worker] Activating new cache: " + cacheName
    + "\n  (Time elapsed since SW install: "
    + ((Date.now() - tstampsw) / (60 * 1000)) + " min)" );
  e.waitUntil(
    caches.keys().then( keyList => Promise.all( keyList.map( key =>
      (cacheKeeplist || []).indexOf(key) > -1 || caches.delete(key)
    )))
  );
});
