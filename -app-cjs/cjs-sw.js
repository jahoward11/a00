// Service Worker

const cacheName = "calcjs-v00.13",
  cacheKeeplist = [cacheName],
  appShellFiles = [
    "../-app-cjs/calcjs0.html",
    "../-res-js/localforage.min.js"
  ],
  appContent = [
    "../-app-cjs/cjs-srvc1.js",
    "../-app-cjs/cjs-srvc2.js",
    "../-app-cjs/cjs-srvc3.js",
    "../-app-cjs/cjs-srvc4.js",
    "../-app-cjs/cjs-srvc5.js",
    "../-app-cjs/cjs-srvc6.js",
    "../-app-cjs/cjs-srvc7.js"
  ],
  rcvd1 = {},
  tstamp = Date.now(),
  rexupds = /\/a00\/(?:-app-cjs\/|-dev.*?\/|[\w.-]+\??$)/,
  rexkprs = /\/a00\/(?:-app-cjs\/calcjs|[\w/.-]+\??$)/;

self.addEventListener('install', e => {
  console.log("[Service Worker] Installing new cache: " + cacheName);
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      console.log("[Service Worker] Caching: appShellFiles + appContent");
      appShellFiles.concat(appContent).forEach(e => rcvd1[e] = 1);
      return cache.addAll(appShellFiles.concat(appContent));
    }) );
});

self.addEventListener('activate', e => {
  console.log( "[Service Worker] Activating new cache: " + cacheName
    + "\n  (Time elapsed since SW install: "
    + ((Date.now() - tstamp) / (60 * 1000)) + " min)" );
  e.waitUntil(
    caches.keys().then( keyList => Promise.all( keyList.map( key =>
      !key.startsWith(cacheName.replace(/-.+/, "")) || (cacheKeeplist || []).indexOf(key) > -1
      || caches.delete(key) ))) );
});

self.addEventListener('fetch', e => {
  let reqPrc = (rsp1 = {}) => {
    if (rsp1.ok && (!navigator.onLine || rcvd1[e.request.url] || !rexupds.test(e.request.url))) {
      return rsp1;
    } else {
      //console.log("[Service Worker] Fetching resource: " + e.request.url);
      return fetch(e.request).then( rsp2 =>
        !rsp2.ok || e.request.method !== 'GET' || !rexkprs.test(e.request.url)
        ? rsp1.ok && rsp1 || rsp2
        : caches.open(cacheName).then(cache => {
            console.log( "[Service Worker] Caching new resource: " + e.request.url
              + "\n  (Time elapsed since SW install: "
              + ((Date.now() - tstamp) / (60 * 1000)) + " min)" );
            !rexupds.test(e.request.url) || (rcvd1[e.request.url] = 1);
            cache.put(e.request, rsp2.clone());
            return rsp2;
          }) );
    }
  };
  e.respondWith(
    !caches ? fetch(e.request)
    : caches.match(e.request).then(reqPrc).catch(reqPrc).catch(console.warn) );
});
