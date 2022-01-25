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
// px-to-in reference points
 12 / 96	// 1/8 in
 16 / 96	// 1/6 in (1em)
 24 / 96	// 1/4 in
 32 / 96	// 1/3 in (2em)
 36 / 96	// 3/8 in
 48 / 96	// 1/2 in (3em)
 60 / 96	// 5/8 in
 64 / 96	// 2/3 in (4em)
 72 / 96	// 3/4 in
 80 / 96	// 5/6 in (5em)
 84 / 96	// 7/8 in

 96 / 96	// in (6em)
 192 / 96	// in
 288 / 96	// in
 384 / 96	// in
 480 / 96	// in
 576 / 96	// in
 672 / 96	// in
 768 / 96	// in
 864 / 96	// in
 960 / 96	// in

 108 / 96	// 9/8 in
 216 / 96	// 9/4 in
 432 / 96	// 9/2 in
 864 / 96	// 9 in

 128 / 96	// 4/3 in
 256 / 96	// 8/3 in
 512 / 96	// 16/3 in
 1024 / 96	// 32/3 in

// ipad effective page width (in)
 wp = 1024 / 96
// ipad effective page height (in)
 hp = 768 / 96

// ratio, screen-to-page width
 rsp = 7.75 / wp // rsp : std reduction
// ratio, screen-to-page height
 5.8125 / hp

// ratio, page-to-screen width
 wp / 7.75
// ratio, page-to-screen height
 hp / 5.8125

// printing reference
 // w~sc~ | initial width of content in custom screen display
 // w~pg~ | max width of content on printed page (Chrome, letter-portrait)

 w_̃sc = 6.75 // in
 w_̃pg = 740  // px

 // final (adjusted) width of content on printed page
 w_̃sc * (w_̃pg / 768)  // w~pg~ + 28px
 w_̃sc * (w_̃pg / 780)  // w~pg~ + 40px
 w_̃sc * (w_̃pg / 788)  // w~pg~ + 0.5in
 w_̃sc * (w_̃pg / 800)  // w~pg~ + 60px
 w_̃sc * (w_̃pg / 833)  // w~pg~ + 93px
 w_̃sc * (w_̃pg / 836)  // w~pg~ + 1in
 w_̃sc * (w_̃pg / 884)  // w~pg~ + 1.5in
 w_̃sc * (w_̃pg / 932)  // w~pg~ + 2in

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
