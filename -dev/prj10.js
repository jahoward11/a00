/* JavaScript module */

const groupname = "util";

const locobj = `//
respShow(Object.fromEntries(Object.keys(location).map(e => [e, location[e]])));
//`;

const varkeys = `//
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

const publdims = `//
// W~sc~ | initial width of content in custom screen display
// W~pg~ | max width of content on printed page (Chrome, letter-portrait)

W_̃sc = 6.75 // in
W_̃pg = 740  // px

// final (adjusted) width of content on printed page
W_̃sc * (W_̃pg / 768)  // W~pg~ + 28px
W_̃sc * (W_̃pg / 780)  // W~pg~ + 40px
W_̃sc * (W_̃pg / 788)  // W~pg~ + 0.5in
W_̃sc * (W_̃pg / 800)  // W~pg~ + 60px
W_̃sc * (W_̃pg / 833)  // W~pg~ + 93px
W_̃sc * (W_̃pg / 836)  // W~pg~ + 1in
W_̃sc * (W_̃pg / 884)  // W~pg~ + 1.5in
W_̃sc * (W_̃pg / 932)  // W~pg~ + 2in

980 / (740 / 833)
6 / 6.75
//`;

const bcaches = `//
caches.keys().then(respShow)
// caches.keys().then(keys => caches.open(keys[0])).then(cache => cache.keys()).then(keys => keys.map(k => ({ url: k.url, mode: k.mode, dest: k.destination }))).then(respShow)
// caches.open("calcjs-v00.12").then(cache => cache.delete("https://jahoward11.github.io/a00/-res-js/jstat-tdist.js")).then(respShow)
//`;

const dscripts = `//
// respShow(document.head.outerHTML.replace(/</g, "&lt;"));
// respShow(cheadg.outerHTML.replace(/</g, "&lt;"));
respShow(Array.from(document.querySelectorAll('script')).map(e => e.src));
// respShow(document.querySelector('script:last-of-type').outerHTML.replace(/</g, "&lt;"));
//`;

const scrsload = `//
// try { jStat } catch { scrInj("../-res-js/jstat-tdist.js").then(xprsEval).catch(respShow) }
// try { markdownit && "" } catch { Promise.all(["", "-decorate", "-deflist", "-implicit-figures", "-ins", "-mark", "-sub", "-sup"].map(e => scrInj("../-res-mdit/markdown-it" + e + ".min.js"))).then(() => "").catch(respShow) }
// try { hljs && js_beautify && "" } catch { Promise.all(["../-res-js/highlight.pack.js", "../-res-js/jsbeautify1.14.0.js"].map(e => scrInj(e))).then(() => "").catch(respShow) }
//`;

const jstatqs = `//
exp = [9, 44, 34, 63, 9, 44, 34, 63]
obs = [8, 28, 39, 75, 10, 61, 29, 50]
csq = obs.reduce((a, b, i) => a + (b - _.exp[i])**2/_.exp[i], 0)
1 - jStat.chisquare.cdf(csq, 3)

respShow(Object.keys(jStat))
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

const guipuzls = `/*

t2x = xstor["JScode"]["tutorial2"];
bodGen = src => "\\n<h3 class=cfield>Puzzles, JS Tutorial 2</h3>\\n\\n" + src.match(/^g\\dui = [^]+?(?=\\n$)/gm).map(e => e.replace(/\\bg\\dwrap\\b/g, "pz1wrap").replace(/;$|^g\\dui = /g, "").split(/;\\ng\\dui \\+= /).map(eval).join("").trim()).join("\\n\\n") + "\\n"; //
scrGen = src => src.match(/^(?:jopts|m2trk|tnx) = [^]+?(?=\\n+ *(\\*\\/|\\/[\\/*]))/gm).map(e => "let " + e.replace(/\\b_\\.\\b| *"";?$|^\\n/gm, "").replace(/^.+/, m => m.replace(/ *=(?= *[a-z]|$)/gi, ",")).replace(/^(\\w+(?: *[,=].+?|))[,;]?( *\\/\\/|)\\n(?=\\w+ =)/gm, "$1,$2\\n  ")).join("\\n\\n"); //
dwrap = ["<!DOCTYPE html>\\n<html lang=en>\\n<title>Puzzles, JS Tutorial 2</title>\\n<meta charset=\\"utf-8\\">\\n<meta name=viewport content=\\"width=device-width, initial-scale=1\\">\\n\\n<div id=pz1wrap>", "</div>\\n\\n<script type=module>\\n", "\\n</script>\\n</html>"];
respShow((dwrap[0] + bodGen(t2x) + dwrap[1] + scrGen(t2x) + dwrap[2]).replace(/<(?=[!/?a-z])/gi, "&lt;"))
*/`;

const t3search = `//
t3x = xstor["JScode"]["tutorial3"];
bodGen = src => "\\n" + src.match(/^srui = [^]+?(?=\\n$)/m)[0].replace(/;$|^srui = /g, "").split(/;\\nsrui \\+= /).map(eval).join("").trim() + "\\n"; //
scrGen = src => "let " + src.match(/^rxs = [^]+?(?=\\n+ *(\\*\\/|\\/[\\/*]))/m)[0].replace(/\\b_\\.\\b| *"";?$|^\\n/gm, "").replace(/^.+/, m => m.replace(/ *=(?= *[a-z]|$)/gi, ",")).replace(/^(\\w+(?: *[,=].+?|))[,;]?( *\\/\\/|)\\n(?=\\w+ =)/gm, "$1,$2\\n  "); //
uiDspl = cnt => { let ndiv = document.createElement('div'); ndiv.id = "srwrap"; ndiv.innerHTML = cnt; cmain.appendChild(ndiv); };

// srwrap.remove() // *Alert:* useful only if edit-testing the GUI code above
try { srwrap } catch { uiDspl(bodGen(t3x)); scrInj(null, 'module', scrGen(t3x)).catch(respShow); }

// dwrap = ["<!DOCTYPE html>\\n<html lang=en>\\n<title>Search and Replace</title>\\n<meta charset=\\"utf-8\\">\\n<meta name=viewport content=\\"width=device-width, initial-scale=1\\">\\n\\n", "\\n\\n<script src=\\"../-res-js/localforage.min.js\\" type=\\"text/javascript\\"></script>\\n<script type=module>\\n", "\\n</script>\\n</html>"];
// srctxta.value = (dwrap[0] + srwrap.outerHTML + dwrap[1] + scrGen(t3x) + dwrap[2]);

// /spark/.test(window.location.search) || (window.location.search = "cmods=spark.js,../-dev/prj10.js&dload=t3search");
// srctxta.value = xstor["sparknotes"]["mythology"].replace(/\\n\\*\\/$|^\\/\\*\\n/g, ""); //
// srctxta.value || import("./spark.js").then(r => srctxta.value = r.mythology.replace(/\\n\\*\\/$|^\\/\\*\\n/g, "")).catch(respShow); //
// sepainp.value = "/^.*?(\\\\bmyth).*\\\\n*|^.*\\\\n*/gim"; //
// rfncinp.value = "(m, c1, i) => { i || (window.it0 = window.it1 = 0); ++it0; return !c1 ? \\"\\" : \\" <strong>\\" + ++it1 + \\".</strong> <em>[line \\" + it0 + \\"]</em>\\\\n\\" + m.replace(/\\\\bmyth/gi, \\"<mark>$&</mark>\\"); }";

/*
- github.com/markdown-it/markdown-it/ v12.0.6
- markdown-it.github.io/markdown-it/
*/
// try { markdownit && "" } catch { Promise.all(["", "-decorate", "-deflist", "-implicit-figures", "-ins", "-mark", "-sub", "-sup"].map(e => scrInj("../-res-mdit/markdown-it" + e + ".min.js"))).catch(respShow) }
// window.docMrkp = md => markdownit({ html: 1, typographer: 1 }).use(markdownItDecorate).use(markdownitDeflist).use(markdownItImplicitFigures).use(markdownitIns).use(markdownitMark).use(markdownitSub).use(markdownitSup).render(md.replace(/[^-](?=--[^-])/g, "$&-")); //
// sepainp.value = "/[^]+/";
// rfncinp.value = "docMrkp";

/*
- github.com/beautify-web/js-beautify/ v1.14.0
- github.com/highlightjs/highlight.js/ v10.4.1
- highlightjs.org
*/
// try { hljs && js_beautify && "" } catch { Promise.all(["../-res-js/highlight.pack.js", "../-res-js/jsbeautify1.14.0.js"].map(e => scrInj(e))).then(() => "").catch(respShow) }
// bpre = str => str.replace(/(?=\\.concat\\(|\\.forEach\\(|\\.map\\(|\\.match\\(|\\.replace\\()/g, "\\n");
// window.jb1 = str => js_beautify(str, { "indent_size": 2, "space_after_anon_function": 1, "break-chained-methods": 1, "keep-array-indentation": 1 });
// window.jh1 = str => "<pre class=hljs>" + hljs.highlightAuto(!window.bj1 ? str : bj1(str)).value + "</pre><style>@import \\"../-res-hljs/atom-one-light.css\\"; #srwrap pre>pre.hljs { margin: 0; white-space: inherit; }</style>";
//`;

export {
  groupname, locobj, varkeys,
  nformat, uiwidth, publdims,
  bcaches, dscripts, scrsload,
  jstatqs, itoken, guipuzls, t3search
};
