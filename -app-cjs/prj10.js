/* JavaScript module */

const groupname = "util";

const vkeys = `//
{ _ks = _ks.concat(["T1", "T2"]); ""; }
T3 = 3
T4 = 4
Object.keys(_)
_ks.join()
//`;

const nformat = `//
fmt = n => (1000 * n).toFixed(2); ""
fmt(Math.random())
//`;

const uiwidth = `//
getComputedStyle(cgrid).width
//`;

const objloc = `//
respShow(Object.fromEntries(Object.keys(location).map(e => [e, location[e]]))); ""
//`;

const scripts = `//
respShow(cheadg.outerHTML.replace(/</g, "&lt;")); ""
respShow(Array.from(document.querySelectorAll('script')).map(e => e.src)); ""
// respShow(document.querySelector('script:last-of-type').outerHTML.replace(/</g, "&lt;")); ""
//`;

const caches = `//
caches.keys().then(respShow)
// caches.keys().then(keys => caches.open(keys[0])).then(cache => cache.keys()).then(keys => keys.map(k => ({ url: k.url, mode: k.mode, dest: k.destination }))).then(respShow)
// caches.open("calcjs-v00.12").then(cache => cache.delete("https://jahoward11.github.io/a00/-res-js/jstat-tdist.js")).then(respShow)
//`;

const token = `/*
Note: Token request fails because CORS is disabled at iam.cloud.ibm.com.

hdrs = new Headers();
hdrs.append("Content-Type", "application/x-www-form-urlencoded");

uenc = new URLSearchParams();
uenc.append("grant_type", "urn:ibm:params:oauth:grant-type:apikey");
uenc.append("apikey", "___");

opts = { method: 'POST', headers: hdrs, body: uenc, redirect: 'follow' };

fetch("https:/" + "/iam.cloud.ibm.com/identity/token", opts).then(resp => resp.text()).then(respShow).catch(respShow);
*/`;

export {
  groupname, vkeys, nformat, uiwidth, objloc, scripts, caches, token
};
