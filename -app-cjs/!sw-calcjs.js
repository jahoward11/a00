// Service Worker

const cacheName = "calcjs0.15",
  cacheKeeplist = [cacheName],
  appShellFiles = [
    "../-app-cjs/calcjs0.html",
    "../-res-js/localforage.min.js"
  ],
  appContent = [
    "../-app-cjs/cmod1.js",
    "../-app-cjs/cmod2.js",
    "../-app-cjs/cmod3.js",
    "../-app-cjs/cmod4.js",
    "../-app-cjs/cmod5.js",
    "../-app-cjs/cmod6.js",
    "../-app-cjs/cmod7.js",
    "../-app-cjs/cmod8.js"
  ],
  rcvd1 = {},
  tstamp = Date.now(),
  rexkprs = /\/a00\/(?:-app-cjs\/calcjs|[\w/!.*+~-]+\??$)/,
  rexupds = /\/a00\/(?:-app.*?\/|-dev.*?\/|[\w!.*+~-]+\??$)/;

self.addEventListener('install', e => {
  console.log("[Service Worker] Installing new cache: " + cacheName);
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      console.log("[Service Worker] Caching: appShellFiles + appContent");
      appShellFiles.concat(appContent)
      .forEach(e => rcvd1[e.replace(/^\.\./, location.origin + "/a00")] = 1);
      return cache.addAll(Object.keys(rcvd1))
        .then(self.skipWaiting).catch(console.warn);
    }) );
});

self.addEventListener('activate', e => {
  console.log( "[Service Worker] Activating new cache: " + cacheName
    + "\n  (Time elapsed since SW install: "
    + ((Date.now() - tstamp) / (60 * 1000)) + " min)" );
  e.waitUntil(
    caches.keys().then( keyList => Promise.all( keyList.map( key =>
      !key.startsWith(cacheName.replace(/[\d-].+/, ""))
      || cacheKeeplist.indexOf(key) > -1 || caches.delete(key) ))) );
});

self.addEventListener('fetch', e => {
  let reqPrc = (rsp1 = {}) => {
    if (rsp1.ok && ( !navigator.onLine
    || !rexupds.test(e.request.url) || rcvd1[e.request.url] )) {
      return rsp1;
    } else {
      //console.log("[Service Worker] Fetching resource: " + e.request.url);
      return fetch(e.request).then( rsp2 =>
        !rsp2.ok || e.request.method !== 'GET' || !rexkprs.test(e.request.url)
        ? rsp1.ok && rsp1 || rsp2
        : caches.open(cacheName).then(cache => {
            console.log( "[Service Worker] Caching new resource: "
              + e.request.url + "\n  (Time elapsed since SW install: "
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
