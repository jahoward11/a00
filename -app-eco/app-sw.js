// Service Worker

const hostibm = /\.cloudant\.com$/.test(location.host),
  hostlh = /^localhost:\d+$|^(?:192\.168|127\.0|0\.0)\.0\.\d+:\d+$/.test(location.host),
  cacheName = "ecollabs-v00.12",
  cacheKeeplist = [cacheName],
  appShellFiles = [
    //"../-app-eco/index.html",
    "../-app-eco/eco-ctrl.js",
    "../-app-eco/eco-srvc1.js",
    "../-app-eco/eco-srvc2.js",
    "../-app-eco/eco-srvc3.mjs",
    "../-res-js/ebook-annos-fns.js",
    "../-res-js/srcdiff.js"
    //"../-res-img/ecologo-72.png",
    //"../-res-img/icon-144.png",
    //"../-res-img/icon-192.png",
    //"../-res-img/avatar000.png"
  ],
  contentToCache = [
    "../guide-httpcon",
    "https://d889bfcc.us-south.apigw.appdomain.cloud/eco/projects"
  ],
  recd1 = {},
  tstampsw = Date.now();

self.addEventListener('install', e => {
  console.log("[Service Worker] Installing new cache: " + cacheName);
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      console.log("[Service Worker] Caching: appShellFiles + content");
      return cache.addAll( appShellFiles.concat(contentToCache).map( e => hostlh || hostibm ? e
        : e.replace(/^\.\./, "https://b41897c5-1ba0-4adb-a2f6-4b7ab462c950-bluemix.cloudant.com/a00") ));
    })
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

self.addEventListener('fetch', e => {
  //console.log("[Service Worker] Fetching resource: " + e.request.url);
  let reqPrc = (rsp1 = {}) => {
    if ( rsp1.ok && ( !navigator.onLine || recd1[e.request.url]
    || !/\/a00\/(?:-app-eco\/(?:eco-ctrl\.js|eco-srvc\d?\.m?js|index\.html)|-res-js\/ebook-annos-fns\.js|-res-js\/u\d\d[\w.-]+|[\w.-]+\??)$/.test(e.request.url) )) {
      return rsp1;
    } else {
      return fetch(e.request).then( rsp2 =>
        !rsp2.ok || e.request.method !== 'GET' || /\?rev=/.test(e.request.url)
        || !/\/a00\/[\w/.-]+\??$|\.cloudant\.com\/(?!a00\/)[\w.-]+\/-res-img\/[\w.-]+$|\/oauth\/v4\/.+\/(?:openid-configuration|publickeys)$|\/eco\/projects$|\/\/fonts\.g(?:oogleapis|static)\.com\/|\.gravatar\.com\/avatar\//.test(e.request.url)
        ? rsp1.ok && rsp1 || rsp2
        : caches.open(cacheName).then(cache => {
            console.log( "[Service Worker] Caching new resource: " + e.request.url
              + "\n  (Time elapsed since SW install: "
              + ((Date.now() - tstampsw) / (60 * 1000)) + " min)" );
            !/\/a00\/(?:-res-js\/ebook-annos-fns\.js|-res-js\/u\d\d[\w.-]+|[\w.-]+\??)$/.test(e.request.url)
            || (recd1[e.request.url] = 1);
            cache.put(e.request, rsp2.clone());
            return rsp2;
          })
      );
    }
  };
  e.respondWith(
    !caches ? fetch(e.request) //caches.match("../-res-img/icon-192.png"))
    : caches.match(e.request).then(reqPrc).catch(reqPrc).catch(() => fetch(e.request))
  );
});
