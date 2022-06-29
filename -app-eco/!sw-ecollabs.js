// Service Worker

const cacheName = "ecollabs0.14",
  cacheKeeplist = [cacheName],
  appShellFiles = [
    "../-app-eco/!eco.webmanifest",
    "../-app-eco/ecollabs0.html",
    "../-app-eco/eco-ctrl.js",
    "../-app-eco/eco-srvc1.js",
    "../-app-eco/eco-srvc2.js",
    "../-app-eco/eco-srvc3.mjs",
    "../-res-css/bulma0.9-content.css",
    "../-res-css/bulma0.9-minireset.css",
    "../-res-css/bulma0.9.3.min.css",
    "../-res-img/avatar000.png",
    "../-res-img/ecologo-72.png",
    //"../-res-img/icon-48.png",
    //"../-res-img/icon-96.png",
    //"../-res-img/icon-144.png",
    //"../-res-img/icon-192.png",
    "../-res-js/ebook-annos-fns.js",
    "../-res-js/srcdiff.js"
  ],
  appContent = [
    //"../guide-httpcon",
    //"https://d889bfcc.us-south.apigw.appdomain.cloud/eco/projects"
  ],
  rcvd1 = {},
  tstamp = Date.now(),
  sepaupds = /\/a00\/(?:(?:-app-eco\/|-dev.*?\/)[\w.-]+\??|-res-css\/(?:reset|style)[\w.-]+|-res-js\/ebook-annos-fns\.js)$|\.cloudant[\w.]+\/(?!a00\/)[\w.-]+\/-res-\w+\/[\w.-]+$|-res-\w+\/u\d\d[\w.-]+$/,
  sepakprs = /\/a00\/[\w/.-]+\??$|\.cloudant[\w.]+\/(?!a00\/)[\w.-]+\/-res-\w+\/[\w.-]+$|-res-\w+\/u\d\d[\w.-]+$|\/oauth\/v4\/.+\/(?:openid-configuration|publickeys)$|\/eco\/projects$|\/\/fonts\.gstatic\.com\/|\.gravatar\.com\/avatar\//;

self.addEventListener('install', e => {
  console.log("[Service Worker] Installing new cache: " + cacheName);
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      console.log("[Service Worker] Caching: appShellFiles + appContent");
      appShellFiles.concat(appContent)
      .forEach(e => rcvd1[e.replace(/^\.\./, location.origin + "/a00")] = 1);
      return cache.addAll(Object.keys(rcvd1));
    }) );
});

self.addEventListener('activate', e => {
  console.log( "[Service Worker] Activating new cache: " + cacheName
    + "\n  (Time elapsed since SW install: "
    + ((Date.now() - tstamp) / (60 * 1000)) + " min)" );
  e.waitUntil(
    caches.keys().then( keyList => Promise.all( keyList.map( key =>
      !key.startsWith(cacheName.replace(/-.+/, "")) || cacheKeeplist.indexOf(key) > -1
      || caches.delete(key) ))) );
});

self.addEventListener('fetch', e => {
  let reqPrc = (rsp1 = {}) => {
    if (rsp1.ok && (!navigator.onLine || rcvd1[e.request.url] || !sepaupds.test(e.request.url))) {
      return rsp1;
    } else {
      //console.log("[Service Worker] Fetching resource: " + e.request.url);
      return fetch(e.request).then( rsp2 =>
        !rsp2.ok || e.request.method !== 'GET' || !sepakprs.test(e.request.url)
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
    !caches ? fetch(e.request) //caches.match("../-res-img/icon-192.png"))
    : caches.match(e.request).then(reqPrc).catch(reqPrc).catch(console.warn) );
});
