// Service Worker

const hostibm = /\.cloudant\.com$/.test(location.host),
  hostlh = /^localhost:\d+$|^(?:192\.168|127\.0|0\.0)\.0\.\d+:\d+$/.test(location.host)
    && location.origin + "/a00",
  a00path = "https://b41897c5-1ba0-4adb-a2f6-4b7ab462c950-bluemix.cloudant.com/a00",
  cacheName = "ecollabs-v00.12",
  cacheKeeplist = [cacheName],
  appShellFiles = [
    //"../-app-eco/app.webmanifest",
    //"../-app-eco/index.html",
    "../-app-eco/eco-ctrl.js",
    "../-app-eco/eco-srvc1.js",
    "../-app-eco/eco-srvc2.js",
    "../-app-eco/eco-srvc3.mjs",
    "../-res-css/bulma0.9-content.css",
    "../-res-css/bulma0.9-minireset.css",
    "../-res-css/bulma0.9.3.min.css",
    location.origin + "/a00/-res-img/avatar000.png",
    location.origin + "/a00/-res-img/ecologo-72.png",
    //"../-res-img/icon-48.png",
    //"../-res-img/icon-96.png",
    //"../-res-img/icon-144.png",
    //"../-res-img/icon-192.png",
    "../-res-js/ebook-annos-fns.js",
    "../-res-js/srcdiff.js"
  ],
  contentToCache = [
    "../guide-httpcon",
    "https://d889bfcc.us-south.apigw.appdomain.cloud/eco/projects"
  ],
  rcvd1 = {},
  tstamp = Date.now();

self.addEventListener('install', e => {
  console.log("[Service Worker] Installing new cache: " + cacheName);
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      console.log("[Service Worker] Caching: appShellFiles + content");
      appShellFiles.concat(contentToCache).forEach( e => 
        rcvd1[e.replace(/^\.\./, /\.\w{2,4}$/.test(e) && hostlh || a00path)] = 1 );
      return cache.addAll(hostibm ? appShellFiles.concat(contentToCache) : Object.keys(rcvd1));
    })
  );
});

self.addEventListener('activate', e => {
  console.log( "[Service Worker] Activating new cache: " + cacheName
    + "\n  (Time elapsed since SW install: "
    + ((Date.now() - tstamp) / (60 * 1000)) + " min)" );
  e.waitUntil(
    caches.keys().then( keyList => Promise.all( keyList.map( key =>
      !key.startsWith(cacheName.replace(/-.+/, "")) || (cacheKeeplist || []).indexOf(key) > -1
      || caches.delete(key) )))
  );
});

self.addEventListener('fetch', e => {
  let reqPrc = (rsp1 = {}) => {
    if ( rsp1.ok && ( !navigator.onLine || rcvd1[e.request.url]
    || !/\/a00\/(?:-app-eco\/(?:eco-ctrl\.js|eco-srvc\d?\.m?js|index\.html)|-res-js\/ebook-annos-fns\.js|-res-js\/u\d\d[\w.-]+|[\w.-]+\??)$/.test(e.request.url) )) {
      return rsp1;
    } else {
      //console.log("[Service Worker] Fetching resource: " + e.request.url);
      return fetch(e.request).then( rsp2 =>
        !rsp2.ok || e.request.method !== 'GET' || /\?rev=/.test(e.request.url)
        || !/\/a00\/[\w/.-]+\??$|\.cloudant\.com\/(?!a00\/)[\w.-]+\/-res-\w+\/[\w.-]+$|\/oauth\/v4\/.+\/(?:openid-configuration|publickeys)$|\/eco\/projects$|\/\/fonts\.gstatic\.com\/|\.gravatar\.com\/avatar\//.test(e.request.url)
        ? rsp1.ok && rsp1 || rsp2
        : caches.open(cacheName).then(cache => {
            console.log( "[Service Worker] Caching new resource: " + e.request.url
              + "\n  (Time elapsed since SW install: "
              + ((Date.now() - tstamp) / (60 * 1000)) + " min)" );
            !/\/a00\/(?:-res-js\/ebook-annos-fns\.js|-res-js\/u\d\d[\w.-]+|(?:-app-eco\/|)[\w.-]+\??)$/.test(e.request.url)
            || (rcvd1[e.request.url] = 1);
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
