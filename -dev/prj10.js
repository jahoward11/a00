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

const bcaches = `//
caches.keys().then(respShow)
// caches.keys().then(keys => caches.open(keys[0])).then(cache => cache.keys()).then(keys => keys.map(k => ({ url: k.url, mode: k.mode, dest: k.destination }))).then(respShow)
// caches.open("calcjs-v00.12").then(cache => cache.delete("https://jahoward11.github.io/a00/-res-js/jstat-tdist.js")).then(respShow)
//`;

const itoken = `/*
*Note:* Token request fails because CORS is disabled at iam.cloud.ibm.com.

hdrs = new Headers();
hdrs.append("Content-Type", "application/x-www-form-urlencoded");

uenc = new URLSearchParams();
uenc.append("grant_type", "urn:ibm:params:oauth:grant-type:apikey");
uenc.append("apikey", "___");

opts = { method: 'POST', headers: hdrs, body: uenc, redirect: 'follow' };

fetch("https:/" + "/iam.cloud.ibm.com/identity/token", opts).then(resp => resp.text()).then(respShow).catch(respShow);
*/`;

const guictxt = `/*
t2x = xstor["JScode"]["tutorial2"];
bodGen = src => "\\n<h3 class=cfield>Puzzles, JS Tutorial 2</h3>\\n\\n" + src.match(/^g\\dui = [^]+?(?=\\n$)/gm).map(e => e.replace(/\\bg\\dwrap\\b/g, "pz1wrap").replace(/;$|^g\\dui = /g, "").split(/;\\ng\\dui \\+= /).map(eval).join("").trim()).join("\\n\\n") + "\\n"; //
scrGen = src => src.match(/^(?:jopts|m2trk|tnx) = [^]+?(?=\\n+ *(\\*\\/|\\/[\\/*]))/gm).map(e => "let " + e.replace(/\\b_\\.\\b| *"";?$|^\\n/gm, "").replace(/^.+/, m => m.replace(/ *=(?= *[a-z]|$)/gi, ",")).replace(/^(\\w+ =.+);(?=\\n\\w+ =)/gm, "$1,")).join("\\n\\n"); //
dwrap = ["<!DOCTYPE html>\\n<html lang=en>\\n<title>Puzzles, JS Tutorial 2</title>\\n<meta charset=\\"utf-8\\">\\n<meta name=viewport content=\\"width=device-width, initial-scale=1\\">\\n\\n<div id=pz1wrap>\\n", "\\n</div>\\n\\n<script type=module>\\n", "\\n</script>\\n</html>"];
respShow((dwrap[0] + bodGen(t2x) + dwrap[1] + scrGen(t2x) + dwrap[2]).replace(/<(?=[!/?a-z])/gi, "&lt;"))
*/`;

const mditload = `
// try { markdownit } catch { Promise.all(["", "-deflist", "-implicit-figures", "-ins", "-mark", "-sub", "-sup"].map(e => scrInj("../-res-mdit/markdown-it" + e + ".min.js"))).then().catch(respShow) }
`;

const t3srplc = `
t3x = xstor["JScode"]["tutorial3"];
bodGen = src => src.match(/^srui = [^]+?(?=\\n$)/m)[0].replace(/;$|^srui = /g, "").split(/;\\nsrui \\+= /).map(eval).join("").trim() + "\\n"; //
scrGen = src => "let " + src.match(/^rxs = [^]+?(?=\\n+ *(\\*\\/|\\/[\\/*]))/m)[0].replace(/\\b_\\.\\b| *"";?$|^\\n/gm, "").replace(/^.+/, m => m.replace(/ *=(?= *[a-z]|$)/gi, ",")).replace(/^(\\w+ =.+);(?=\\n\\w+ =)/gm, "$1,"); //
uiDspl = cnt => { let ndiv = document.createElement('div'); ndiv.id = "srwrap"; ndiv.innerHTML = cnt; cmain.appendChild(ndiv); };

// srwrap.remove() // *Alert:* useful only if edit-testing the GUI code above
try { srwrap } catch { uiDspl(bodGen(t3x)); scrInj(null, 'module', scrGen(t3x)).catch(respShow); }

/*
github.com/beautify-web/js-beautify v1.14.0
github.com/highlightjs/highlight.js/ v10.4.1
highlightjs.org
//.replace(/(?=\\.concat\\(|\\.forEach\\(|\\.map\\(|\\.match\\(|\\.replace\\()/g, "\\n")
*/
// window.js_beautify || window.hljs || (window.location.search = "cmods=spark.js,../-dev/prj10.js&dload=t3srplc&jsrcs=../-res-js/highlight.pack.js,../-res-js/jsbeautify1.14.0.js");
// window.bj1 = str => window.js_beautify(str, { "indent_size": 2, "space_after_anon_function": 1, "keep-array-indentation": 1, "break-chained-methods": 1 });
// window.hj1 = str => "<style>@import \\"../-res-hljs/atom-one-light.css\\";</style><pre class=hljs>" + window.hljs.highlightAuto(!window.bj1 ? str : window.bj1(str)).value + "</pre>";

/*
/spark/.test(window.location.search) || (window.location.search = "!displ&cmods=spark.js,../-dev/prj10.js&dload=t3srplc");
srctxta.value = xstor["sparknotes"]["mythology"].replace(/\\n\\*\\/$|^\\/\\*\\n/g, ""); //
sepainp.value = "/^.*?(\\\\bmyth).*\\\\n*|^.*\\\\n*/gim"; //
rfncinp.value = "(m, c1, i) => { i || (window.it0 = window.it1 = 0); ++it0; return !c1 ? \\"\\" : \\" <strong>\\" + ++it1 + \\".</strong> <em>[line \\" + it0 + \\"]</em>\\\\n\\" + m.replace(/\\\\bmyth/gi, \\"<mark>$&</mark>\\"); }";
*/
//`;

export {
  groupname, vkeys, nformat,
  uiwidth, objloc, scripts,
  bcaches, itoken, guictxt,
  mditload, t3srplc
};
