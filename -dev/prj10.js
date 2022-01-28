/* JavaScript module */

const groupname = "util";

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
innerWidth
document.documentElement.clientWidth
screen.width
getComputedStyle(cgrid).width
getComputedStyle(document.documentElement).width
getComputedStyle(document.documentElement).font
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
 // w_̃sc | initial width of content in custom screen display
 // w_̃pg | max width of content on printed page (Chrome, letter-portrait)

 w_̃sc = 6.75 // in
 w_̃pg = 740  // px

 // final (adjusted) width of content on printed page
 w_̃sc * (w_̃pg / 768)  // w_̃pg + 28px
 w_̃sc * (w_̃pg / 780)  // w_̃pg + 40px
 w_̃sc * (w_̃pg / 788)  // w_̃pg + 0.5in
 w_̃sc * (w_̃pg / 800)  // w_̃pg + 60px
 w_̃sc * (w_̃pg / 833)  // w_̃pg + 93px
 w_̃sc * (w_̃pg / 836)  // w_̃pg + 1in
 w_̃sc * (w_̃pg / 884)  // w_̃pg + 1.5in
 w_̃sc * (w_̃pg / 932)  // w_̃pg + 2in

980 / (740 / 833)
6 / 6.75
//`;

const jscmds = `//
encodeURI("abc !\\"#$%&amp;'()*+,-./:;<=>?@[\\\\]^_\`{|}~123")
decodeURI("%22%20%22%25%3C%3E%5B%5C%5D%5E%60%7B%7C%7D")

Array.from(Array(5).keys())

// respShow(Object.fromEntries(Object.keys(location).map(e => [e, location[e]])))
// respShow(Object.fromEntries(["appCodeName", "appName", "platform", "product", "vendor"].map(e => [e, navigator[e]])))

// respShow(Array.from(Array(64).keys()).map(n => [0, 64, 128, 192].map(d => "0x" + (n + d).toString(16) + (!d && n < 16 ? "  " : " " + String.fromCodePoint(n + d))).join("\\t")).join("\\n"))
// respShow(Array.from(Array(64).keys()).map(n => (n += 0x2000) && [0, 64, 128, 192].map(d => "0x" + (n + d).toString(16) + " " + String.fromCodePoint(n + d)).join("  \\t")).join("\\n"))
// respShow(Array.from(Array(25).keys()).map(n => (n + 913) + "/" + (n + 945) + " " + [913, 945].map(d => String.fromCodePoint(n + d)).join(" ")).join("\\n"))

// { let k, keys = [], k2s; for (k in document.documentElement) keys.push(k); respShow(k2s = keys.filter(k => !/^on|^aria/.test(k)).sort()); k2s.length; } //
// respShow(Array.from(document.querySelectorAll('[id]')).map(e => e.id))
// respShow( Object.keys(window).filter( pty => Object.entries(Object.getOwnPropertyDescriptor(window, pty) || "").filter(e => ['value', 'writable', 'enumerable'].includes(e[0]) && e[1]).length === 3 ))
// respShow( Object.fromEntries( Object.entries(SourceDiff).map(oe => [oe[0], oe[1].toString()]) ))
//`;

const bcaches = `//
caches.keys().then(respShow)
// caches.keys().then(keys => caches.open(keys[0])).then(cache => cache.keys()).then(keys => keys.map(k => ({ url: k.url, mode: k.mode, dest: k.destination }))).then(respShow)
// caches.open("calcjs-v00.12").then(cache => cache.delete("https://jahoward11.github.io/a00/-res-js/jstat-tdist.js")).then(respShow)

// indexedDB.databases().then(respShow)

// respShow(Object.keys(localStorage).filter(e => !/mrview-/.test(e)))
// localStorage["key"] = "value"
// localStorage.removeItem("key")
//`;

const dscripts = `//
// respShow(document.head.outerHTML)
// respShow(cheadg.outerHTML)
// respShow(plist.textContent.replace(/&(?=#?\\w+;)/g, "&amp;"))

respShow(Array.from(document.querySelectorAll('script')).map(e => e.src))
// respShow(document.querySelector('script:last-of-type').outerHTML)

// respShow(Array.from(document.styleSheets).map(ss => ss.href))
// respShow(Array.from(document.styleSheets[0].rules).map(r => r.cssText))
//`;

const scrsload = `//
// try { jStat } catch { scrInj("../-res-js/jstat-tdist.js").then(xprsEval).catch(respShow) }
// try { SourceDiff } catch { scrInj("../-res-js/srcdiff.js").catch(respShow) }
// try { !!markdownit } catch { Promise.all(["", "-decorate", "-deflist", "-implicit-figures", "-ins", "-mark", "-sub", "-sup"].map(e => scrInj("../-res-mdit/markdown-it" + e + ".min.js"))).then().catch(respShow) }
// try { !!(hljs && js_beautify) } catch { Promise.all(["../-res-js/highlight.pack.js", "../-res-js/jsbeautify1.14.0.js"].map(e => scrInj(e))).then().catch(respShow) }

// import("../-res-js/ebook-annos.mjs").then(r => window["tocNavLtGen"] = r.tocNavLtGen).catch(respShow)
// import("../-dev/prj10.js").then(r => respShow(r.jscmds)).catch(respShow)
// fetch("../-res-js/ebook-annos-fns.js").then(r => r.text()).then(respShow).catch(respShow)
// localforage.getItem("tutor2js").then(respShow).catch(respShow)
// PouchDB("mydb1").get("myfile").then(doc => doc.filefrags[0].contenttxt).then(respShow).catch(respShow)
//`;

const jstatqs = `//
exp = [9, 44, 34, 63, 9, 44, 34, 63]
obs = [8, 28, 39, 75, 10, 61, 29, 50]
csq = obs.reduce((a, b, i) => a + (b - _.exp[i])**2/_.exp[i], 0)
1 - jStat.chisquare.cdf(csq, 3)

respShow(Object.keys(jStat))
// respShow(Object.getOwnPropertyNames(Math))
// respShow(Object.getOwnPropertyNames(Number))
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

const t2puzls = `/*

t2x = xstor["JScode"]["tutorial2"];
bodGen = src => "\\n<h3 class=cfield>Puzzles, JS Tutorial 2</h3>\\n\\n" + src.match(/^g\\dui = [^]+?(?=\\n$)/gm).map(e => e.replace(/\\bg\\dwrap\\b/g, "pz1wrap").replace(/;$|^g\\dui = /g, "").split(/;\\ng\\dui \\+= /).map(eval).join("").trim()).join("\\n\\n") + "\\n"; //
scrGen = src => src.match(/^(?:jopts|m2trk|tnx) = [^]+?(?=\\n+ *(\\*\\/|\\/[\\/*]))/gm).map(e => "let " + e.replace(/\\b_\\.\\b| *"";?$|^\\n/gm, "").replace(/^[ =\\w]+\\n/, m => m.replace(/ *=(?= *[a-z]|\\n)/gi, ",")).replace(/^(\\w+(?: *[,=].+?|))[,;]?( *\\/\\/|)\\n(?=\\w+ =)/gm, "$1,$2\\n  ")).join("\\n\\n"); //
dwrap = ["<!DOCTYPE html>\\n<html lang=en>\\n<title>Puzzles, JS Tutorial 2</title>\\n<meta charset=\\"utf-8\\">\\n<meta name=viewport content=\\"width=device-width, initial-scale=1\\">\\n\\n<div id=pz1wrap>", "</div>\\n\\n<script type=module>\\n", "\\n</script>\\n</html>"];
respShow(dwrap[0] + bodGen(t2x) + dwrap[1] + scrGen(t2x) + dwrap[2])
*/`;

const t3srepl = `//
t3x = xstor["JScode"]["tutorial3"];
bodGen = src => "\\n" + src.match(/^srui = [^]+?(?=\\n$)/m)[0].replace(/;$|^srui = /g, "").split(/;\\nsrui \\+= /).map(eval).join("").trim() + "\\n"; //
scrGen = src => "let " + src.match(/^rxs = [^]+?(?=\\n+ *(\\*\\/|\\/[\\/*]))/m)[0].replace(/\\b_\\.\\b| *"";?$|^\\n/gm, "").replace(/^[ =\\w]+\\n/, m => m.replace(/ *=(?= *[a-z]|\\n)/gi, ",")).replace(/^(\\w+(?: *[,=].+?|))[,;]?( *\\/\\/|)\\n(?=\\w+ =)/gm, "$1,$2\\n  "); //
uiDspl = cnt => { let ndiv = document.createElement('div'); ndiv.id = "srwrap"; ndiv.innerHTML = cnt; cmain.appendChild(ndiv); };

// srwrap.remove() // *Alert:* useful only if edit-testing the GUI code above
try { srwrap } catch { uiDspl(bodGen(t3x)); !!window.strPars || scrInj(null, 'module', "\\n" + scrGen(t3x) + "\\n").catch(respShow); }

// dwrap = ["<!DOCTYPE html>\\n<html lang=en>\\n<title>Search and Replace</title>\\n<meta charset=\\"utf-8\\">\\n<meta name=viewport content=\\"width=device-width, initial-scale=1\\">\\n\\n", "\\n\\n<script src=\\"../-res-js/localforage.min.js\\" type=\\"text/javascript\\"></script>\\n<script type=module>\\n", "\\n</script>\\n</html>"];
// srctxta.value = (dwrap[0] + srwrap.outerHTML + dwrap[1] + scrGen(t3x) + dwrap[2]);

// /spark/.test(window.location.search) || (window.location.search = "cmods=spark.js,../-dev/prj10.js&dload=t3srepl");
// srctxta.value = xstor["sparknotes"]["mythology"].replace(/\\n\\*\\/$|^\\/\\*\\n/g, ""); //
// srctxta.value || import("./spark.js").then(r => srctxta.value = r.mythology.replace(/\\n\\*\\/$|^\\/\\*\\n/g, "")).catch(respShow); //
// sepainp.value = "/^.*?(\\\\bmyth).*\\\\n*|^.*\\\\n*/gim"; //
// rfncinp.value = "(m, c1, i) => { i || (window.it0 = window.it1 = 0); ++it0; return !c1 ? \\"\\" : \\" <strong>\\" + ++it1 + \\".</strong> <em>[line \\" + it0 + \\"]</em>\\\\n\\" + m.replace(/\\\\bmyth/gi, \\"<mark>$&</mark>\\"); }";

/*
- github.com/markdown-it/markdown-it/ v12.0.6
- markdown-it.github.io/markdown-it/
*/
// try { !!markdownit } catch { Promise.all(["", "-decorate", "-deflist", "-implicit-figures", "-ins", "-mark", "-sub", "-sup"].map(e => scrInj("../-res-mdit/markdown-it" + e + ".min.js"))).catch(respShow) }
// window.docMrkp = md => markdownit({ html: 1, typographer: 1 }).use(markdownItDecorate).use(markdownitDeflist).use(markdownItImplicitFigures).use(markdownitIns).use(markdownitMark).use(markdownitSub).use(markdownitSup).render(md.replace(/[^-](?=--[^-])/g, "$&-")); //
// sepainp.value = "/[^]+/";
// rfncinp.value = "docMrkp";

/*
- github.com/beautify-web/js-beautify/ v1.14.0
- github.com/highlightjs/highlight.js/ v10.4.1
- highlightjs.org
*/
// try { !!(hljs && js_beautify) } catch { Promise.all(["../-res-js/highlight.pack.js", "../-res-js/jsbeautify1.14.0.js"].map(e => scrInj(e))).then().catch(respShow) }
// bpre = str => str.replace(/(?=\\.concat\\(|\\.forEach\\(|\\.map\\(|\\.match\\(|\\.replace\\()/g, "\\n");
// window.jb1 = str => js_beautify(str, { "indent_size": 2, "space_after_anon_function": 1, "break-chained-methods": 1, "keep-array-indentation": 1 });
// window.jh1 = str => "<pre class=hljs>" + hljs.highlightAuto(!window.jb1 ? str : jb1(str)).value + "</pre><style>@import \\"../-res-hljs/atom-one-light.css\\"; #srwrap pre>pre.hljs { margin: 0; white-space: inherit; }</style>";
//`;

const srcdiff = `//
sdui = "\\n<style>\\n*, *::before, *::after { box-sizing: inherit; }";
sdui += "\\nhtml { box-sizing: border-box; min-width: 375px; overflow-wrap: break-word; }";
sdui += "\\nhr { margin: 1.5rem 0; }\\n[list]::-webkit-calendar-picker-indicator { display: none !important; }";
sdui += "\\n#sdwrap { font: normal medium Helvetica, Arial, sans-serif; max-width: 720px; margin: 24px auto; }";
sdui += "\\n#sdwrap h4 { margin: 0 0 8px; }";
sdui += "\\n#sdwrap button, #sdwrap input:not([type=checkbox]), #sdwrap select { height: 24px; vertical-align: bottom; }";
sdui += "\\n#sdwrap input[type=text] { width: 144px; }";
sdui += "\\n#sdwrap pre { height: 240px; margin: 0 0 16px; overflow: auto; }";
sdui += "\\n#sdwrap pre.ht0 { height: 0; }";
sdui += "\\n#sdwrap pre.ht2x { height: 480px; }";
sdui += "\\n#sdwrap .iwarn { color: Orange; }";
sdui += "\\n#sdwrap .isucc { color: CornFlowerBlue; }";
sdui += "\\n#sdwrap .fltrt { float: right; }";
sdui += "\\n#sdwrap .cfield:not(:last-child) { margin-bottom: 8px; }";
sdui += "\\n#sdwrap .cfield.fltrt:not(:last-child) { margin: 0; }";
sdui += "\\n#sdwrap .ccntr:not(:last-of-type) { margin-right: 8px; }";
sdui += "\\n#sdwrap :not(.cfield)>.ccntr { display: inline-block; margin-bottom: 8px; }";
sdui += "\\n#sdwrap .inserted { background-color: #9E9; display: inline-block; min-width: 100%; }";
sdui += "\\n#sdwrap .deleted { background-color: #E99; display: inline-block; min-width: 100%; }";
sdui += "\\n#sdwrap .modified { background-color: #FD8; display: inline-block; min-width: 100%; }";
sdui += "\\n#sdwrap .modified-light { background-color: #fcffb6; /* display: inline-block; */ /* min-width: 100%; */ }";
sdui += "\\n#sdwrap .padding { background-color: LightGrey; display: inline-block; min-width: 100%; }";
sdui += "\\n@media screen and (min-height: 864px), print and (max-width: 734px),";
sdui += "\\nprint and (min-width: 738px) and (max-width: 785px) { #sdwrap pre { height: 384px; } #sdwrap pre.ht2x { height: 768px; } }";
sdui += "\\n</style>\\n<hr>\\n<datalist id=pfile2></datalist>";
sdui += "\\n<span class=\\"cfield fltrt\\"><label class=ccntr><input type=text id=s1finp list=pfile2 placeholder=\\"filename/key/CMD&hellip;\\" /></label><label class=\\"ccntr isucc\\"><input type=checkbox id=s1chkb />hide</label></span>";
sdui += "\\n<h4>SOURCE1 (edited)</h4>";
sdui += "\\n<pre id=s1rslt></pre>";
sdui += "\\n<span class=\\"cfield fltrt\\"><label class=ccntr><input type=text id=s2finp list=pfile2 placeholder=\\"filename/key/CMD&hellip;\\" /></label><label class=\\"ccntr isucc\\"><input type=checkbox id=s2chkb />hide</label></span>";
sdui += "\\n<h4>SOURCE2 (original)</h4>";
sdui += "\\n<pre id=s2rslt></pre>\\n";

// srwrap.remove() // *Alert:* useful only if edit-testing the GUI code above
try { sdwrap } catch { ndiv = document.createElement('div'); ndiv.id = "sdwrap"; ndiv.innerHTML = sdui; cmain.appendChild(ndiv); }
try { SourceDiff } catch { scrInj("../-res-js/srcdiff.js").catch(respShow) }

fncTry = (a, fnc, e) => { try { return fnc(a) } catch (err) { return e ? err : undefined }};
diffGen = ([s1txt, s2txt]) => { if (!window.SourceDiff || !s1txt || !s2txt) { return s1rslt.innerHTML = s2rslt.innerHTML = ""; } let sdff = new SourceDiff.Diff(true), fmtr = new SourceDiff.DiffFormatter(sdff); [s2rslt.innerHTML, s1rslt.innerHTML] = fmtr.formattedDiff(s2txt, s1txt); };
datPrep = () => Promise.all( [s1finp.value, s2finp.value] .map( k => Promise.resolve(_.fncTry(k, window.eval)).then(v => v != null ? v : localStorage.getItem(k) || window.localforage && localforage.getItem(k)).then(v => v == null ? "" : typeof v === 'object' ? JSON.stringify(v, null, 2) : typeof v !== 'string' ? "" + v : !/^{\\s*['"][^]+}$|^\\[[^]+\\]$/.test(v.trim()) ? v : JSON.stringify(_.fncTry(v, JSON.parse), null, 2) || v) )).then(_.diffGen).catch(console.warn);
[s1chkb, s2chkb].forEach( e => e.onchange = () => { [s1rslt, s2rslt].forEach(e => e.classList.remove("ht0", "ht2x")); if (s1chkb.checked && s2chkb.checked) { s1rslt.classList.add("ht0"); s2rslt.classList.add("ht0"); } else if (s1chkb.checked) { s1rslt.classList.add("ht0"); s2rslt.classList.add("ht2x") } else if (s2chkb.checked) { s1rslt.classList.add("ht2x"); s2rslt.classList.add("ht0"); } });
s1rslt.onscroll = () => { s2rslt.scrollLeft = s1rslt.scrollLeft; s2rslt.scrollTop = s1rslt.scrollTop; };
s2rslt.onscroll = () => { s1rslt.scrollLeft = s2rslt.scrollLeft; s1rslt.scrollTop = s2rslt.scrollTop; };
[s1finp, s2finp].forEach(e => e.onblur = _.datPrep);
!window.sdwrap || !window.localforage || localforage.keys().then( ks => pfile2.innerHTML = ["trgtxta.value", "srctxta.value", "dentry.value", "respcon.textContent"].concat(ks).map(k => "\\n<option>" + k + "</option>").join("") + "\\n" ).catch(console.warn);
//

scrGen = src => "let " + src.match(/^diffGen = [^]+?(?=\\n+ *(\\*\\/|\\/[\\/*]))/m)[0].replace(/\\b_\\.\\b| *"";?$|^\\n/gm, "").replace(/^[ =\\w]+\\n/, m => m.replace(/ *=(?= *[a-z]|\\n)/gi, ",")).replace(/^(\\w+(?: *[,=].+?|))[,;]?( *\\/\\/|)\\n(?=\\w+ =)/gm, "$1,$2\\n  "); //
// dwrap = ["<!DOCTYPE html>\\n<html lang=en>\\n<title>Source-Text Diffs</title>\\n<meta charset=\\"utf-8\\">\\n<meta name=viewport content=\\"width=device-width, initial-scale=1\\">\\n\\n", "\\n\\n<script src=\\"../-res-js/localforage.min.js\\" type=\\"text/javascript\\"></script>\\n<script src=\\"../-res-js/srcdiff.js\\" type=\\"text/javascript\\"></script>\\n<script type=module>\\n", "\\n</script>\\n</html>"];
// respShow(dwrap[0] + sdwrap.outerHTML + dwrap[1] + scrGen(xstor.util.srcdiff) + dwrap[2])
//`;

const srtools = `//
// to find misapplied emphasis/superscript markers in cmods
 // srctxta.value = JSON.stringify(xstor.util, null, 2);
 // sepainp.value = "/.+/g";
 // rfncinp.value = 'm => m.replace(/&(?=#?\\\\w+;)/g, "&amp;").replace(/<(?=[!/?a-z])/gi, "&lt;").replace(/(?<!\\\\\\\\)\\\\\\\\n/g, "\\\\n").replace(/\\\\*.+?\\\\*|\\\\^.+?\\\\^/g, "<mark>$&</mark>")'; //
//`;

export {
  groupname, varkeys, nformat,
  uiwidth, publdims, jscmds,
  bcaches, dscripts, scrsload,
  jstatqs, itoken, t2puzls,
  t3srepl, srcdiff, srtools
};
