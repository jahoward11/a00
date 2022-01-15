/* JavaScript module */

const groupname = "util";

const vkeys = `//
{ _ks = _ks.concat(["T1", "T2"]) };
T3 = 3
T4 = 4
Object.keys(_)
_ks.join()
//`;

const nformat = `//
fmt = n => (1000 * n).toFixed(2);
fmt(Math.random())
//`;

const uiwidth = `//
getComputedStyle(cgrid).width
//`;

const objloc = `//
respShow(Object.fromEntries(Object.keys(location).map(e => [e, location[e]])));
//`;

const scripts = `//
respShow(cheadg.outerHTML.replace(/</g, "&lt;"));
respShow(Array.from(document.querySelectorAll('script')).map(e => e.src));
// respShow(document.querySelector('script:last-of-type').outerHTML.replace(/</g, "&lt;"));
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

const apptxt = `/*
t2x = xstor["JScode"]["tutorial2"];
bodGen = src => "\\n<h3 class=cfield>Puzzles, JS Tutorial 2</h3>\\n\\n" + src.match(/^g\\dui = [^]+?(?=\\n$)/gm).map(e => e.replace(/\\bg\\dwrap\\b/g, "pz1wrap").replace(/;$|^g\\dui = /g, "").split(/;\\ng\\dui \\+= /).map(eval).join("").trim()).join("\\n\\n") + "\\n"; //
scrGen = src => src.match(/^(?:jopts|m2trk|tnx) = [^]+?(?=\\n+ *(\\*\\/|\\/[\\/*]))/gm).map(e => "let " + e.replace(/\\b_\\.\\b| *"";?$|^\\n/gm, "").replace(/^.+/, m => m.replace(/ *=(?= *[a-z]|$)/gi, ",")).replace(/^(\\w+ =.+);(?=\\n\\w+ =)/gm, "$1,")).join("\\n\\n"); //
dwrap = ["<!DOCTYPE html>\\n<html lang=en>\\n<title>Puzzles, JS Tutorial 2</title>\\n<meta charset=\\"utf-8\\">\\n<meta name=viewport content=\\"width=device-width, initial-scale=1\\">\\n\\n<div id=pz1wrap>\\n", "\\n</div>\\n\\n<script type=module>\\n", "\\n</script>\\n</html>"];
respShow((dwrap[0] + bodGen(t2x) + dwrap[1] + scrGen(t2x) + dwrap[2]).replace(/<(?=[!/?a-z])/gi, "&lt;"))
*/`;

export {
  groupname, vkeys, nformat,
  uiwidth, objloc, scripts,
  caches, token, apptxt
};
