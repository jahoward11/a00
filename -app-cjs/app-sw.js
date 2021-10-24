// Service Worker

const cacheName = "calcjs-v00.12",
  cacheKeeplist = [cacheName],
  appShellFiles = [
    "../-app-cjs/calcjs0.html",
    "../-res-js/localforage.nopromises.min.js"
  ],
  appContent = [
    "../-app-cjs/cjs-srvc1.mjs",
    "../-app-cjs/cjs-srvc2.mjs",
    "../-app-cjs/cjs-srvc3.mjs",
    "../-app-cjs/cjs-srvc4.mjs",
    "../-app-cjs/cjs-srvc5.mjs",
    "../-app-cjs/cjs-srvc6.mjs"
  ],
  rcvd1 = {},
  tstamp = Date.now(),
  sepaupds = /\/a00\/(?:-app-cjs\/|)[\w.-]+\??$/,
  sepakprs = /\/a00\/[\w/.-]+\??$/;

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
    if (rsp1.ok && (!navigator.onLine || rcvd1[e.request.url] || !sepaupds.test(e.request.url))) {
      return rsp1;
    } else {
      //console.log("[Service Worker] Fetching resource: " + e.request.url);
      return fetch(e.request).then( rsp2 =>
        !rsp2.ok || e.request.method !== 'GET' || /\?rev=/.test(e.request.url)
        || !sepakprs.test(e.request.url)
        ? rsp1.ok && rsp1 || rsp2
        : caches.open(cacheName).then(cache => {
            console.log( "[Service Worker] Caching new resource: " + e.request.url
              + "\n  (Time elapsed since SW install: "
              + ((Date.now() - tstamp) / (60 * 1000)) + " min)" );
            !sepaupds.test(e.request.url) || (rcvd1[e.request.url] = 1);
            cache.put(e.request, rsp2.clone());
            return rsp2;
          }) );
    }
  };
  e.respondWith(
    !caches ? fetch(e.request)
    : caches.match(e.request).then(reqPrc).catch(reqPrc).catch(() => fetch(e.request)) );
});
