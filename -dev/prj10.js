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
encodeURI("abc !\\"#$%&'()*+,-./:;<=>?@[\\\\]^_\`{|}~123")
decodeURI("%22%20%22%25%3C%3E%5B%5C%5D%5E%60%7B%7C%7D")

Array.from(Array(5).keys())

// respShow(Array.from(Array(64).keys()).map(n => [0, 64, 128, 192].map(d => "0x" + (n + d).toString(16) + (!d && n < 16 ? "  " : " " + String.fromCodePoint(n + d))).join("\\t")).join("\\n"))
// respShow(Array.from(Array(64).keys()).map(n => (n += 0x2000) && [0, 64, 128, 192].map(d => "0x" + (n + d).toString(16) + " " + String.fromCodePoint(n + d)).join("  \\t")).join("\\n"))
// respShow(Array.from(Array(25).keys()).map(n => (n + 913) + "/" + (n + 945) + " " + [913, 945].map(d => String.fromCodePoint(n + d)).join(" ")).join("\\n"))

// { let k, k2s, keys = []; for (k in document.documentElement) keys.push(k); respShow(k2s = keys.filter(k => !/^on|^aria/.test(k)).sort()); k2s.length; } //
// respShow( Object.keys(window).filter( pty => Object.entries(Object.getOwnPropertyDescriptor(window, pty) || "").filter(e => ['value', 'writable', 'enumerable'].includes(e[0]) && e[1]).length === 3 ))
// respShow(Object.fromEntries(Object.keys(location).map(e => [e, location[e]])))
// respShow(Object.fromEntries(["online", "appCodeName", "appName", "platform", "product", "vendor", "userAgent", "userAgentData"].map(e => [e, navigator[e]])))
// respShow(Object.getOwnPropertyNames(Math))
// respShow(Object.getOwnPropertyNames(Number.prototype))

// respShow( Object.fromEntries( Object.entries(SourceDiff).map(oe => [oe[0], oe[1].toString()]) ))
// respShow(Array.from(document.querySelectorAll('[id]')).map(e => e.id))
// respShow( document.querySelector('script:nth-of-type(3)').textContent.replace( /^(?:const|let|var|)  ?\\b[ ,\\w]+(?: *= .+|);?(?: *\\/\\/ *|)\\n|(.*\\n|.+)/gim, (m, c1) => c1 ? "" : m.replace(/(?:[^=a-z]|= *(?=\\d+[,;]|""|''|\\[\\]|\\{\\})|[a-z](?!\\w* *[,;=]))*(?:\\n|=.+|(\\w+.))/gi, "$1") ).trim().split(/\\W/) ) //
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
// respShow(menulist.outerHTML)
// respShow(menulist.textContent.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\\xa0/g, "&nbsp;"))
// respShow(symlist.textContent)
// respShow(symlist.textContent.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\\xa0/g, "&nbsp;"))

respShow(Array.from(document.querySelectorAll('script')).map(e => e.src))
// respShow(document.querySelector('script:last-of-type').outerHTML)

// respShow(Array.from(document.styleSheets).map(ss => ss.href))
// respShow(Array.from(document.styleSheets[0].rules).map(r => r.cssText))
//`;

const scrload = `//
// window.jStat || scrInj("../-res-js/jstat-tdist.js").then(xprsEval).catch(respShow)
// window.SourceDiff || scrInj("../-res-js/srcdiff.js").then(respShow).catch(respShow)
// !!window.markdownit || Promise.all(["", "-decorate", "-deflist", "-implicit-figures", "-ins", "-mark", "-sub", "-sup"].map(e => scrInj("../-res-mdit/markdown-it" + e + ".min.js"))).then(respShow).catch(respShow)
// !!(window.hljs && window.js_beautify) || Promise.all(["../-res-js/highlight.pack.js", "../-res-js/jsbeautify1.14.0.js"].map(e => scrInj(e))).then(respShow).catch(respShow)

// import("../-dev/prj10.js").then(r => (xstor[r.groupname] = r) && xlstGen()).catch(respShow)
// import("../-dev/prj10.js").then(r => respShow(r.jscmds)).catch(respShow)
// import("../-res-js/ebook-annos.mjs").then(r => window["tocNavLtGen"] = r.tocNavLtGen).catch(respShow)
// fetch("../-res-js/ebook-annos-fns.js").then(r => r.text()).then(respShow).catch(respShow)
// localforage.getItem("tutor2js").then(respShow).catch(respShow)
// PouchDB("mydb1").get("myfile").then(doc => doc.content).then(respShow).catch(respShow)

/*
txd2 = {
  DBNAME: "db",
  FILEID: "id",
  ATTKEY: "key",
  OPTS:   {
    //rev: "str"
    //revs_info: true
  }
}
PouchDB(txd2.DBNAME).getAttachment(txd2.FILEID, txd2.ATTKEY, txd2.OPTS)
.then( abl => !(_.rdr = new FileReader())
  || !(_.rdr.onerror = () => respShow(_.rdr.error))
  || !(_.rdr.onload = () => respShow(_.rdr.result))
  || _.rdr.readAsText(abl) ); //!(/^blob:/.test(aurls[txd2.ATTKEY]) || (aurls[txd2.ATTKEY] = URL.createObjectURL(abl)))
*/

// PouchDB(txd2.DBNAME).getAttachment(txd2.FILEID, txd2.ATTKEY, txd2.OPTS).then(abl => fetch(URL.createObjectURL(abl)).then(r => r.text()).then(respShow).catch(respShow)

/*
sc2Inj = u => { let n = document.createElement('script'); !(n.src = u) || document.body.appendChild(n); };
!!window.PouchDB || fetch("../-res-js/pouchdb.min.js").then(r => r.blob()).then(URL.createObjectURL).then(_.sc2Inj).catch(respShow)
*/
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

t2x = xstor.JScode.tutorial2;
bodGen = src => "\\n<h3 class=cfield>Puzzles, JS Tutorial 2</h3>\\n\\n" + src.match(/^g\\dui = [^]+?(?=\\n$)/gm).map(e => e.replace(/\\bg\\dwrap\\b/g, "pz1wrap").replace(/;$|^g\\dui = /g, "").split(/;\\ng\\dui \\+= /).map(eval).join("").trim()).join("\\n\\n") + "\\n"; //
scrGen = src => src.match(/^(?:jopts|m2trk|tnx) = [^]+?(?=\\n+ *(\\*\\/|\\/[\\/*]))/gm).map(e => "let " + e.replace(/\\b_\\.\\b| *"";?$|^\\n/gm, "").replace(/^[ =\\w]+\\n/, m => m.replace(/ *=(?= *[a-z]|\\n)/gi, ",")).replace(/^( *\\b[ ,\\w]+?(?: *= .+?|))[,;]?( *\\/\\/ *|)\\n(?= *\\b[ ,\\w]+(?: *= .+|);?(?: *\\/\\/ *|)$)/gm, "$1,$2\\n  ")).join("\\n\\n"); //
dwraps = ["<!DOCTYPE html>\\n<html lang=en>\\n<title>Puzzles, JS Tutorial 2</title>\\n<meta charset=\\"utf-8\\">\\n<meta name=viewport content=\\"width=device-width, initial-scale=1\\">\\n\\n<div id=pz1wrap>", "</div>\\n\\n<script type=module>\\n", "\\n</script>\\n</html>"];
respShow(dwraps[0] + bodGen(t2x) + dwraps[1] + scrGen(t2x) + dwraps[2])
*/`;

const t3search = `//
t3x = xstor.JScode.tutorial3;
bodGen = src => "\\n" + src.match(/^srui = [^]+?(?=\\n$)/m)[0].replace(/;$|^srui = /g, "").split(/;\\nsrui \\+= /).map(eval).join("").trim() + "\\n"; //
scrGen = src => "let " + src.match(/^rxs = [^]+?(?=\\n+ *(\\*\\/|\\/[\\/*]))/m)[0].replace(/\\b_\\.\\b| *"";?$|^\\n/gm, "").replace(/^[ =\\w]+\\n/, m => m.replace(/ *=(?= *[a-z]|\\n)/gi, ",")).replace(/^( *\\b[ ,\\w]+?(?: *= .+?|))[,;]?( *\\/\\/ *|)\\n(?= *\\b[ ,\\w]+(?: *= .+|);?(?: *\\/\\/ *|)$)/gm, "$1,$2\\n  "); //
uiDspl = cnt => { let ndiv = document.createElement('div'); ndiv.id = "srwrap"; ndiv.innerHTML = cnt; cmain.appendChild(ndiv); };

// srwrap.remove() // *Alert:* useful only if edit-testing the GUI code above
try { srwrap } catch { uiDspl(bodGen(t3x)); !!window.strPars || scrInj(null, 'module', "\\n" + scrGen(t3x) + "\\n").catch(respShow); }

// dwraps = ["<!DOCTYPE html>\\n<html lang=en>\\n<title>Search and Replace</title>\\n<meta charset=\\"utf-8\\">\\n<meta name=viewport content=\\"width=device-width, initial-scale=1\\">\\n\\n", "\\n\\n<script src=\\"../../a00/-res-js/localforage.min.js\\" type=\\"text/javascript\\"></script>\\n<script type=module>\\n", "\\n</script>\\n</html>"];
// srctxta.value = (dwraps[0] + srwrap.outerHTML.replace(/\\n<hr>/, "") + dwraps[1] + scrGen(t3x) + dwraps[2]);

// /spark/.test(window.location.search) || (window.location.search = "cmods=spark.js,../-dev/prj10.js&dload=t3srepl");
// srctxta.value = xstor.sparknotes.mythology.replace(/\\n\\*\\/$|^\\/\\*\\n/g, ""); //
// srctxta.value || import("./spark.js").then(r => srctxta.value = r.mythology.replace(/\\n\\*\\/$|^\\/\\*\\n/g, "")).catch(respShow); //
// sepainp.value = "/^.*?(\\\\bmyth).*\\\\n*|^.*\\\\n*/gim"; //
// rtrminp.value = "(m, c1, i) => { i || (window.it0 = window.it1 = 0); ++it0; return !c1 ? \\"\\" : \\" <strong>\\" + ++it1 + \\".</strong> <em>[line \\" + it0 + \\"]</em>\\\\n\\" + m.replace(/\\\\bmyth/gi, \\"<mark>$&</mark>\\"); }";

/*
- github.com/markdown-it/markdown-it/ v12.0.6
- markdown-it.github.io/markdown-it/
*/
// try { !!markdownit } catch { Promise.all(["", "-decorate", "-deflist", "-implicit-figures", "-ins", "-mark", "-sub", "-sup"].map(e => scrInj("../-res-mdit/markdown-it" + e + ".min.js"))).catch(respShow) }
// window.docMrkp = md => markdownit({ html: 1, typographer: 1 }).use(markdownItDecorate).use(markdownitDeflist).use(markdownItImplicitFigures).use(markdownitIns).use(markdownitMark).use(markdownitSub).use(markdownitSup).render(md.replace(/[^-](?=--[^-])/g, "$&-")); //
// sepainp.value = "/[^]+/";
// rtrminp.value = "docMrkp";

/*
- github.com/beautify-web/js-beautify/ v1.14.0
- github.com/highlightjs/highlight.js/ v10.4.1
- highlightjs.org
*/
// try { !!(hljs && js_beautify) } catch { Promise.all(["../-res-js/highlight.pack.js", "../-res-js/jsbeautify1.14.0.js"].map(e => scrInj(e))).then(respShow).catch(respShow) }
// bpre = str => str.replace(/(?=\\.concat\\(|\\.forEach\\(|\\.map\\(|\\.match\\(|\\.replace\\()/g, "\\n");
// window.jb1 = str => js_beautify(str, { "indent_size": 2, "space_after_anon_function": 1, "break-chained-methods": 1, "keep-array-indentation": 1 });
// window.jh1 = str => "<pre class=hljs>" + hljs.highlightAuto(!window.jb1 ? str : jb1(str)).value + "</pre><style>@import \\"../../a00/-res-hljs/atom-one-light.css\\"; #srwrap pre>pre.hljs { margin: 0; white-space: inherit; }</style>";
//`;

const t4cntcs = `//
/*
scrGen = src => src.match(/^(?:fwg|imgsVw|rexts) = [^]+?(?=\\n+ *(\\*\\/|\\/[\\/*]))/gm).map(e => "let " + e.replace(/\\b_\\.\\b| *"";?$|^\\n/gm, "").replace(/^[ =\\w]+\\n/, m => m.replace(/ *=(?= *[a-z]|\\n)/gi, ",")).replace(/^( *\\b[ ,\\w]+?(?: *= .+?|))[,;]?( *\\/\\/ *|)\\n(?= *\\b[ ,\\w]+(?: *= .+|);?(?: *\\/\\/ *|)$)/gm, "$1,$2\\n  ")).join("\\n").replace(/respShow/g, "console.warn").replace(/;\\nwindow\\.(n1Gen = ).+/, (m, c1) => ",\\n  " + (c1 + n1Gen).replace(/\\b_\\.\\b/g, "") + ";\\nwindow.dbobj = window.PouchDB && new PouchDB(\\"" + dbobj.name + "\\");"); //
dPreps = d => d.replace(/\\n<hr>/, "").replace(/(<details id="?imgdtl.*?>)[^]*?(?=<\\/details>)|(<form id="?dform.*?>)[^]*?(?=<\\/form>)|(<div id="?ndata.*?>)[^]*(?=<\\/div>\\s*<\\/div>)/g, "$1$2$3"); //
dwraps = ["<!DOCTYPE html>\\n<html lang=en>\\n<title>Contacts Database</title>\\n<meta charset=\\"utf-8\\">\\n<meta name=viewport content=\\"width=device-width, initial-scale=1\\">\\n\\n", "\\n\\n<script src=\\"../../a00/-res-js/pouchdb.min.js\\" type=\\"text/javascript\\"></script>\\n<script type=module>\\n", "\\n</script>\\n</html>"];
respShow(dwraps[0] + dPreps(dbwrap.outerHTML) + dwraps[1] + scrGen(xstor.JScode.tutorial4) + dwraps[2])
*/
//`;

const srtools = `//
// to find misapplied emphasis/superscript markers in cmods
/*
 srctxta.textContent = JSON.stringify(xstor.util, null, 2);
 srctxta.value = srctxta.innerHTML;
 sepainp.value = "/.+/g";
 rtrminp.value = 'm => m.replace(/(?<!\\\\\\\\)\\\\\\\\n/g, "\\\\n").replace(/\\\\*.+?\\\\*|\\\\^.+?\\\\^|\`.+?\`/g, "<mark>$&</mark>")'; //
 // rtrminp.value = 'm => m.replace(/([^\\\\\\\\])\\\\\\\\n/g, "$1\\\\n").replace(/([^\\\\\\\\])\\\\\\\\n/g, "$1\\\\n").replace(/\\\\*.+?\\\\*|\\\\^.+?\\\\^|\`.+?\`/g, "<mark>$&</mark>")'; //
*/
//`;

export {
  groupname, varkeys, nformat,
  uiwidth, publdims, jscmds,
  bcaches, dscripts, scrload,
  jstatqs, itoken, t2puzls,
  t3search, t4cntcs, srtools
};
