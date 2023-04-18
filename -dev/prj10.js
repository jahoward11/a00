/* JavaScript module */

const _module = "util";

const varkeys = `//
 { _ks = _ks.concat(["T1", "T2"]) };
 T3 = 3
 T4 = 4
 Object.keys(_)
 _ks.join()
//`;

const nformat = `//
 fmt = n => (1000 * n).toFixed(2);
 $r = fmt(Math.random())
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

const jsrefq = `//
 new Date(Date.now() - document.timeline.currentTime).toLocaleString()
 document.timeline.currentTime / 1000 / 60
 new Date(document.timeline.currentTime + 2.88e7).toTimeString().replace(/ G.+/, "")

 encodeURI("abc !\\"#$%&'()*+,-./:;<=>?@[\\\\]^_\`{|}~123")
 decodeURI("%22%20%22%25%3C%3E%5B%5C%5D%5E%60%7B%7C%7D")

 Array.from({ length: 5 })
 Array.from(Array(5).keys())

 // reShow( Array.from(Array(64).keys()).map(n => [0, 64, 128, 192].map(d => "0x" + (n + d).toString(16) + (!d && n < 16 ? "  " : " " + String.fromCodePoint(n + d))).join("\\x09")).join("\\n") )
 // reShow( Array.from(Array(64).keys()).map(n => (n += 0x2000) && [0, 64, 128, 192].map(d => "0x" + (n + d).toString(16) + " " + String.fromCodePoint(n + d)).join("  \\x09")).join("\\n") )
 // reShow( Array.from(Array(25).keys()).map(n => (n + 913) + "/" + (n + 945) + " " + [913, 945].map(d => String.fromCodePoint(n + d)).join(" ")).join("\\n") )

 // { let k, keys = []; for (k in localStorage) keys.push(k); reShow(keys); }
 // reShow( Object.keys(localStorage).filter(e => !/mrview-/.test(e)) )
 // { let k, k2s, keys = []; for (k in document.documentElement) keys.push(k); reShow(k2s = keys.filter(k => !/^on|^aria/.test(k)).sort()); k2s.length; } //
 // reShow( Object.keys(window).filter( pty => Object.entries(Object.getOwnPropertyDescriptor(window, pty) || "").filter(e => ['value', 'writable', 'enumerable'].includes(e[0]) && e[1]).length === 3 ))
 // reShow( Object.fromEntries(Object.keys(location).map(e => [e, location[e]])) )
 // reShow( Object.fromEntries(["onLine", "appCodeName", "appName", "platform", "product", "vendor", "userAgent", "userAgentData"].map(e => [e, navigator[e]])) )
 // reShow( Object.getOwnPropertyNames(Math) )
 // reShow( Object.getOwnPropertyNames(Number.prototype) )

 // window.ecoqjs || scrInj("../-app-eco/eco-srvc2.js").then(reShow).catch(reShow)
 // reShow( Object.fromEntries( Object.entries(ecoqjs).map(oe => [oe[0], oe[1].toString()]) )) // localforage, PouchDB, hljs, SourceDiff

 // reShow( Array.from(document.querySelectorAll('[id]')).map(e => e.id) )
 // reShow( ecoqjs.jvarXtract(document.scripts[2].textContent) )
 // reShow( ecoqjs.jcmtXtract(document.querySelector('script:nth-of-type(3)').outerHTML) )

 // fetch("../-app-cjs/calcjs0.html").then(re => re.text()).then(reShow).catch(reShow)
 // fetch("../-app-eco/eco-ctrl0.js").then(re => re.text()).then(ecoqjs.jvarXtract).then(reShow).catch(reShow)
 // fetch("../-app-eco/eco-ctrl0.js").then(re => re.text()).then(s => s.replace(/(?:[^]*?\\n|^)(function rdataFetch.+(?:\\n.+?)+?(?:;?\\s*};?|;)(?=\\n[\\n\\S]|$))[^]*|[^]*/, "$1")).then(reShow).catch(reShow) //
 // fetch("../-app-eco/eco-ctrl0.js").then(re => re.text()).then(s => window.s3 = s).then(reShow).catch(reShow)
 // reShow( ecoqjs.jcmtXtract(s3) )
 // reShow( [...new Set((window.s5 = document.scripts[5].innerHTML).match(/\\w*btn\\w*/gi))] )

//__For CalcJS in Ecollabs__
/*
 w = window;
 !!w.s4 || (w.s4 = ecoscripts.innerHTML); "" // ecoqjs.jvarXtract(s4)
 !!w.Q1 || (w.Q1 = (k = "f.c") => Promise.resolve(EC2.objQA(k))); "" // Q1().then(ecoqjs.jcmtXtract)
 !!w.P3 || (w.P3 = (x = 1) => navigator.clipboard.readText().then(s => window["s" + x] = s));
*/
 // P3().then(ecoqjs.sortA2Z).then(reShow).catch(reShow)
 // import("../-dev/prj10.js").then(m => xstor[m._module || "xmod" + Object.keys(xstor).map(k => k.replace(/^xmod(?=\\d*$)|.*/, "")).reduce((a, b) => +b > +a ? b : a, 1)] = m).catch(reShow) //.catch(e => EC2.objQA("msg:", e))
 // reShow( Object.keys(xstor.util) )
//`;

const bcaches = `//
 caches.keys().then(reShow)
 // caches.keys().then(keys => caches.open(keys[0])).then(cache => cache.keys()).then(keys => keys.map(k => ({ url: k.url, mode: k.mode, dest: k.destination }))).then(reShow)
 // caches.open("calcjs0.15").then(cache => cache.delete("https:/" + "/jahoward11.github.io/a00/-res-js/jstat-tdist.js")).then(reShow)
 // caches.match("https:/" + "/jahoward11.github.io/a00/-res-css/reset-hjas-min0.css").then(re => re.text()).then(reShow)
 // caches.match("https:/" + "/jahoward11.github.io/a00/-app-cjs/calcjs0.html").then(re => re.text()).then(reShow)

 // indexedDB.databases().then(reShow)

 // reShow(Object.keys(localStorage))
 // localStorage.key = "value"
 // localStorage["key"] = "value"
 // localStorage.setItem("key", "value")
 // localStorage.getItem("key")
 // localStorage.removeItem("key")
 // localStorage.length
//`;

const dscripts = `//
 // reShow(document.head.outerHTML)
 // reShow(cheadg.outerHTML)
 // reShow(menulist.outerHTML)
 // reShow(menulist.textContent.replace(/&/g, "&amp;").replace(/\\xa0/g, "&nbsp;").replace(/>/g, "&gt;").replace(/</g, "&lt;"))
 // reShow(symlist.textContent)
 // reShow(ecoqjs.htmTxt(symlist.textContent))

 reShow(Array.from(document.scripts).map(e => e.src || e.type))
 // reShow(document.scripts[0].outerHTML)
 // reShow(document.querySelector('script:last-of-type').outerHTML)
 // reShow(document.querySelector('body>script:last-of-type').outerHTML)
 // reShow(ecoscripts.querySelectorAll('script')[1].outerHTML)

 // reShow(Array.from(document.styleSheets).map(ss => ss.href))
 // reShow(Array.from(document.styleSheets[0].rules).map(ru => ru.cssText))
 // reShow(document.querySelectorAll('style')[0].outerHTML)
//`;

const scrload = `//
 // window.annos || scrInj("../-res-js/ebook-annos-fns.js").then(reShow).catch(reShow)
 // window.jStat || scrInj("../-res-js/jstat-tdist.js").then(reShow).catch(reShow)
 // window.SourceDiff || scrInj("../-res-js/srcdiff.js").then(reShow).catch(reShow)
 // !!window.markdownit || Promise.all(["", "-decorate", "-deflist", "-implicit-figures", "-ins", "-mark", "-sub", "-sup"].map(e => scrInj("../-res-mdit/markdown-it" + e + ".min.js"))).then(reShow).catch(reShow)
 // !!window.hljs || scrInj("../-res-js/highlight.min.js").then(reShow).catch(reShow)
 // !!window.js_beautify || scrInj("../-res-js/jsbeautify1.14.0.js").then(reShow).catch(reShow)
 // !!(window.hljs && window.js_beautify) || Promise.all(["../-res-js/highlight.min.js", "../-res-js/jsbeautify1.14.0.js"].map(e => scrInj(e))).then(reShow).catch(reShow)
 // window.localforage || scrInj("../-res-js/localforage.min.js").then(reShow).catch(reShow)
 // !!window.PouchDB || scrInj("../-res-js/pouchdb.min.js").then(reShow).then(() => scrInj("../-res-js/pouchdb.all-dbs.min.js").then(reShow)).catch(reShow)

 // import("../-dev/prj10.js").then(re => (xstor[re._module] = re) && xlstGen()).catch(reShow)
 // import("../-dev/prj10.js").then(re => reShow(re.jsrefq)).catch(reShow)
 // import("../-res-js/ebook-annos.mjs").then(re => window["tocNavLtGen"] = re.tocNavLtGen).catch(reShow)
 // fetch("../-res-js/ebook-annos-fns.js").then(re => re.text()).then(reShow).catch(reShow)
 // localforage.keys().then(reShow).catch(reShow)
 // localforage.setItem("t2js", "// Tutorial 2").then(reShow).catch(reShow)
 // localforage.getItem("t2js").then(reShow).catch(reShow)
 // localforage.removeItem("t2js").then(reShow).catch(reShow)
 // localforage.length().then(reShow).catch(reShow)
 // PouchDB.allDbs().then(re => window.pdbs = re).then(reShow).catch(reShow)
 // !pdbs[2] || new PouchDB(pdbs[2]).info().then(reShow).catch(reShow)
 // PouchDB("mydb1").get("myfile").then(doc => doc.content).then(reShow).catch(reShow)

/*
window.txd2 = {
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
  || !(_.rdr.onerror = () => reShow(_.rdr.error))
  || !(_.rdr.onload = () => reShow(_.rdr.result))
  || _.rdr.readAsText(abl) ); //!(/^blob:/.test(aurls[txd2.ATTKEY]) || (aurls[txd2.ATTKEY] = URL.createObjectURL(abl)))
*/

 // window.txd2 = { DBNAME: "db", FILEID: "id", ATTKEY: "key", OPTS: {} };
 // pdbs.includes(txd2.DBNAME)
 // PouchDB(txd2.DBNAME).getAttachment(txd2.FILEID, txd2.ATTKEY, txd2.OPTS).then(abl => abl.text()).then(reShow).catch(reShow)
 // PouchDB(txd2.DBNAME).getAttachment(txd2.FILEID, txd2.ATTKEY, txd2.OPTS).then(abl => fetch(aurls[txd2.ATTKEY] = URL.createObjectURL(abl)).then(re => re.text()).then(reShow).catch(reShow)

 // sc2Inj = u => { let n = document.createElement('script'); !(n.src = u) || document.body.appendChild(n); };
 // !!window.PouchDB || sc2Inj("../-res-js/pouchdb.min.js")
 // !!window.PouchDB || fetch("../-res-js/pouchdb.min.js").then(re => re.blob()).then(URL.createObjectURL).then(_.sc2Inj).catch(reShow)
//`;

const jstatqs = `//
 exp = [9, 44, 34, 63, 9, 44, 34, 63]
 obs = [8, 28, 39, 75, 10, 61, 29, 50]
 csq = obs.reduce((a, b, i) => a + (b - _.exp[i])**2/_.exp[i], 0)
 1 - jStat.chisquare.cdf(csq, 3)

 reShow(Object.keys(jStat))
 // reShow(Object.getOwnPropertyNames(Math))
 // reShow(Object.getOwnPropertyNames(Number))
//`;

const itoken = `/*

*Note:* Token request fails because CORS is disabled at iam.cloud.ibm.com.

 hdrs = new Headers();
 hdrs.append("Content-Type", "application/x-www-form-urlencoded");

 uenc = new URLSearchParams();
 uenc.append("grant_type", "urn:ibm:params:oauth:grant-type:apikey");
 uenc.append("apikey", "___");

 opts = { method: 'POST', headers: hdrs, body: uenc, redirect: 'follow' };

 fetch("https:/" + "/iam.cloud.ibm.com/identity/token", opts).then(re => re.text()).then(reShow).catch(reShow);
*/`;


const t2puzls = `//
/*
 t2x = xstor.JScode.tutorial2;
 bodGen = src => "\\n<h3 class=cfield>Puzzles, JS Tutorial 2</h3>\\n\\n" + src.match(/^g\\dui = [^]+?(?=\\n$)/gm).map(e => e.replace(/\\bg\\dwrap\\b/g, "pz1wrap").replace(/;$|^g\\dui = /g, "").split(/;\\ng\\dui \\+= /).map(eval).join("").trim()).join("\\n\\n") + "\\n"; //
 scrGen = src => src.match(/^(?:jopts|m2trk|tnx) = [^]+?(?=\\n+ *(\\*\\/|\\/[\\/*])|(?![^]))/gm).map(e => "let " + e.replace(/\\b_\\.\\b| *"";?$|^\\n/gm, "").replace(/^[ =\\w]+\\n/, m => m.replace(/ *=(?= *[a-z]|\\n)/gi, ",")).replace(/^( *\\b[ ,\\w]+?(?: *= .+?|))[,;]?( *\\/\\/ *|)\\n(?= *\\b[ ,\\w]+(?: *= .+|);?(?: *\\/\\/ *|)$)/gm, "$1,$2\\n  ")).join("\\n\\n"); //
 dwraps = ["<!DOCTYPE html>\\n<html lang=en>\\n<title>Puzzles, JS Tutorial 2</title>\\n<meta charset=\\"utf-8\\">\\n<meta name=viewport content=\\"width=device-width, initial-scale=1\\">\\n\\n<div id=pz1wrap>", "</div>\\n\\n<script type=module>\\n", "\\n</script>\\n</html>"];
 reShow(dwraps[0] + bodGen(t2x) + dwraps[1] + scrGen(t2x) + dwraps[2])
*/

//`;

const t3search = `//
 t3x = xstor.JScode.tutorial3;
 bodGen = src => "\\n" + src.match(/^srui = [^]+?(?=\\n$)/m)[0].replace(/;$|^srui = /g, "").split(/;\\nsrui \\+= /).map(eval).join("").trim() + "\\n"; //
 scrGen = src => "let " + src.match(/^rxs = [^]+?(?=\\n+ *(\\*\\/|\\/[\\/*])|(?![^]))/m)[0].replace(/\\b_\\.\\b| *"";?$|^\\n/gm, "").replace(/^[ =\\w]+\\n/, m => m.replace(/ *=(?= *[a-z]|\\n)/gi, ",")).replace(/^( *\\b[ ,\\w]+?(?: *= .+?|))[,;]?( *\\/\\/ *|)\\n(?= *\\b[ ,\\w]+(?: *= .+|);?(?: *\\/\\/ *|)$)/gm, "$1,$2\\n  "); //
 uiDspl = cnt => { let ndiv = document.createElement('div'); ndiv.id = "srwrap"; ndiv.innerHTML = cnt; cmain.appendChild(ndiv); };

 // srwrap.remove() // *Alert:* useful only if edit-testing the GUI code above
 // try { srwrap } catch { uiDspl(bodGen(t3x)); !!window.strPars || scrInj(null, 'module', "\\n" + scrGen(t3x) + "\\n").catch(reShow); }

 // srctxta.textContent = trgtxta.value; srctxta.value = srctxta.innerHTML;

 // dwraps = ["<!DOCTYPE html>\\n<html lang=en>\\n<title>Search and Replace</title>\\n<meta charset=\\"utf-8\\">\\n<meta name=viewport content=\\"width=device-width, initial-scale=1\\">\\n\\n", "\\n\\n<script src=\\"../../a00/-res-js/localforage.min.js\\" type=\\"text/javascript\\"></script>\\n<script type=module>\\n", "\\n</script>\\n</html>"];
 // srctxta.textContent = (dwraps[0] + srwrap.outerHTML.replace(/\\n<hr>/, "") + dwraps[1] + scrGen(t3x) + dwraps[2]);
 // srctxta.value = recon.innerHTML = srctxta.innerHTML;

 // /spark/.test(window.location.search) || (window.location.search = "cmods=spark.js,../-dev/prj10.js&dload=t3search");
 // srctxta.value = xstor.sparknotes.mythology.replace(/\\n\\*\\/$|^\\/\\*\\n/g, ""); //
 // srctxta.value || import("../-app-cjs/spark.js").then(re => srctxta.value = re.mythology.replace(/\\n\\*\\/$|^\\/\\*\\n/g, "")).catch(reShow); //
 // sepainp.value = "/^.*?(\\\\bmyth).*\\\\n*|^.*\\\\n*/gim"; //
 // rtrminp.value = "(m, c1, p) => { p || (window.it0 = window.it1 = 0); ++it0; return !c1 ? \\"\\" : \\" <strong>\\" + ++it1 + \\".</strong> <em>[line \\" + it0 + \\"]</em>\\\\n\\" + m.replace(/\\\\bmyth/gi, \\"<mark>$&</mark>\\"); }";

/*
 - github.com/markdown-it/markdown-it/ v12.0.6
 - markdown-it.github.io/markdown-it/
*/
 // !!window.markdownit || Promise.all(["", "-decorate", "-deflist", "-implicit-figures", "-ins", "-mark", "-sub", "-sup"].map(e => scrInj("../-res-mdit/markdown-it" + e + ".min.js"))).then(reShow).catch(reShow)
 // window.docMrkp = md => markdownit({ html: 1, typographer: 1 }).use(markdownItDecorate).use(markdownitDeflist).use(markdownItImplicitFigures).use(markdownitIns).use(markdownitMark).use(markdownitSub).use(markdownitSup).render(md.replace(/[^-](?=--[^-])/g, "$&-")); //
 // sepainp.value = "/[^]+/";
 // rtrminp.value = "docMrkp";

/*
 - github.com/beautify-web/js-beautify/ v1.14.0
 - github.com/highlightjs/highlight.js/ v10.4.1
 - highlightjs.org
*/
 // !!window.hljs || scrInj("../-res-js/highlight.min.js").then(reShow).catch(reShow)
 // !!window.js_beautify || scrInj("../-res-js/jsbeautify1.14.0.js").then(reShow).catch(reShow)
 // !!(window.hljs && window.js_beautify) || Promise.all(["../-res-js/highlight.min.js", "../-res-js/jsbeautify1.14.0.js"].map(e => scrInj(e))).then(reShow).catch(reShow)
 // bpre = str => str.replace(/(?=\\.concat\\(|\\.forEach\\(|\\.map\\(|\\.match\\(|\\.replace\\()/g, "\\n");
 // window.jb1 = str => js_beautify(str, { "indent_size": 2, "space_after_anon_function": 1, "break-chained-methods": 1, "keep-array-indentation": 1 });
 // window.jh1 = str => "<pre class=hljs>" + hljs.highlightAuto(!window.jb1 ? str : jb1(str)).value + "</pre><style>@import \\"../../a00/-res-hljs/atom-one-light.css\\"; #srwrap pre>pre.hljs { margin: 0; white-space: inherit; }</style>";
//`;

const t4cntcs = `//
// __Contacts Directory__
/*
 scrGen = src => src.match(/^(?:fwg|imgsVw|rexts) = [^]+?(?=\\n+ *(\\*\\/|\\/[\\/*])|(?![^]))/gm).map(e => "let " + e.replace(/\\b_\\.\\b| *"";?$|^\\n/gm, "").replace(/^[ =\\w]+\\n/, m => m.replace(/ *=(?= *[a-z]|\\n)/gi, ",")).replace(/^( *\\b[ ,\\w]+?(?: *= .+?|))[,;]?( *\\/\\/ *|)\\n(?= *\\b[ ,\\w]+(?: *= .+|);?(?: *\\/\\/ *|)$)/gm, "$1,$2\\n  ")).join("\\n").replace(/reShow/g, "console.warn").replace(/;\\nwindow\\.(n1Gen = ).+/, (m, c1) => ",\\n  " + (c1 + n1Gen).replace(/\\b_\\.\\b/g, "") + ";\\nwindow.dbobj = window.PouchDB && new PouchDB(\\"" + dbobj.name + "\\");"); //
 dPreps = d => d.replace(/\\n<hr>/, "").replace(/(<details id="?imgdtl.*?>)[^]*?(?=<\\/details>)|(<form id="?dform.*?>)[^]*?(?=<\\/form>)|(<div id="?ndata.*?>)[^]*(?=<\\/div>\\s*<\\/div>)/g, "$1$2$3"); //
 dwraps = ["<!DOCTYPE html>\\n<html lang=en>\\n<title>Notes Database</title>\\n<meta charset=\\"utf-8\\">\\n<meta name=viewport content=\\"width=device-width, initial-scale=1\\">\\n\\n", "\\n\\n<script src=\\"../../a00/-res-js/pouchdb.min.js\\" type=\\"text/javascript\\"></script>\\n<script type=module>\\n", "\\n</script>\\n</html>"];
 reShow(dwraps[0] + dPreps(dbwrap.outerHTML) + dwraps[1] + scrGen(xstor.JScode.tutorial4) + dwraps[2])
*/

// __Note Manager__
 // Un-comment the following line of code to generate the
// full source code (e.g., for building a standalone web app).
// *Alert:* This app's code is lengthy (about 2300 lines).

 // import("../-app-cjs/nmgr.js").then(re => re.dwraps[0] + re.nmpage + re.dwraps[1] + re.nmscr + re.dwraps[2]).then(reShow).catch(reShow)
//`;

const nmtools = `// __Note-Mgr Tools__

/*
 Object.keys(nm0)
 PouchDB.allDbs().then(re => window.pdbs = re)
 window.pdbs = Array.from(opensel.options).map(opt => opt.value).splice(1)
 pdbs.includes(nm0.txd1.DBNAME)
 !pdbs[2] || new PouchDB(pdbs[2]).info()

 str = nmdata.textContent;
 doc = JSON.parse(nmdata.textContent);
 st2 = qctxta.value;
 txd = JSON.parse(qctxta.value);
 pcs = JSON.parse(p0parseconfigs.value);
 ffs = JSON.parse(p0filefrags.value);

 doc.content;
 doc.parseconfigs.linksconstr.htmllinktxt;
 doc.filefrags[0].contenttxt;
 txd.docs[0].file_updated;
 pcs.scriptsconstr[0].usedescription;
 pcs.scriptsconstr[0].htmlscriptload;
 pcs.scriptsconstr[0].deftxt;
 pcs.linksconstr.htmllinktxt;
 ffs[0].contenttxt;

 srctxta.value = str;
 qctxta.value = JSON.stringify(txd, 0, 2);
 p0parseconfigs.value = JSON.stringify(pcs, 0, 2); ""
 p0filefrags.value = JSON.stringify(ffs, 0, 2); ""
*/

//`;

const webapp1 = `// __"Recipes" DB Webapp__

/*
 cQry = () => !(window.pdbs || []).includes((window.txd2 || "").DBNAME) && [] || PouchDB(txd2.DBNAME).getAttachment(txd2.FILEID, txd2.ATTKEY, txd2.OPTS).then(abl => abl.text()).then(cnt => [txd2.wid, cnt]);
 uiDspl = ([wid, cnt, scr]) => { if (!wid || !cnt) return; let ndiv = document.createElement('div'); ndiv.id = wid; ndiv.innerHTML = "\\n<hr />\\n" + cnt.trim() + "\\n"; cmain.appendChild(ndiv); return scr || window[wid] && window[wid].querySelector('script:last-of-type'); };
 smL = scr => !scr || scrInj(0, scr.type || 'module', "\\n" + (scr.innerHTML || "" + scr).trim() + "\\n");

 dbA = () => !window.PouchDB || !PouchDB.allDbs || PouchDB.allDbs().then(re => window.pdbs = re);
 s1L = () => !!window.PouchDB ? _.dbA() : scrInj("../-res-js/pouchdb.min.js").then(() => scrInj("../-res-js/pouchdb.all-dbs.min.js").then(_.dbA));
 s2L = () => !!window.markdownit || Promise.all(["", "-decorate", "-ins", "-sub", "-sup"].map(e => scrInj("../-res-mdit/markdown-it" + e + ".min.js")));
 // s3L = () => !!window.hljs || scrInj("../-res-js/highlight.min.js");
 nmImp = () => window.nmwrap && [] || import("../-app-cjs/nmgr.js").then(re => ["nmwrap", re.nmpage, re.nmscr]);

 window.txd2 = { DBNAME: "howfam02", FILEID: ".ref", ATTKEY: "hjenn_food2022.html", OPTS: {}, wid: "rswrap" };
 s4L = scr => !scr || !window[txd2.wid] || !!window.rkeys && (Array.from(document.scripts).find(si => /window\.rkeys *=/.test(si.innerHTML)) || document.createElement('i')).remove() || !(window.annos || scrInj("../-res-js/ebook-annos-fns.js")) || scrInj(0, scr.type || 0, "\\n" + (scr.innerHTML || "" + scr).trim() + "\\n");

 // window[txd2.wid].remove() // Alert: useful only if edit-testing the GUI code above
 window[txd2.wid] || Promise.resolve().then(s1L).then(s2L).then(nmImp).then(uiDspl).then(smL).then(cQry).then(uiDspl).then(s4L).catch(reShow);

 // nmwrap.classList.toggle("dnone");
*/

//`;

const webapp2 = `// __"Disc: Family Gospel" DB Webapp__

/*
 cQry = () => !(window.pdbs || []).includes((window.txd2 || "").DBNAME) && [] || PouchDB(txd2.DBNAME).getAttachment(txd2.FILEID, txd2.ATTKEY, txd2.OPTS).then(abl => abl.text()).then(cnt => [txd2.wid, cnt]);
 uiDspl = ([wid, cnt, scr]) => { if (!wid || !cnt) return; let ndiv = document.createElement('div'); ndiv.id = wid; ndiv.innerHTML = "\\n<hr />\\n" + cnt.trim() + "\\n"; cmain.appendChild(ndiv); return scr || window[wid] && window[wid].querySelector('script:last-of-type'); };
 smL = scr => !scr || scrInj(0, scr.type || 'module', "\\n" + (scr.innerHTML || "" + scr).trim() + "\\n");

 dbA = () => !window.PouchDB || !PouchDB.allDbs || PouchDB.allDbs().then(re => window.pdbs = re);
 s1L = () => !!window.PouchDB ? _.dbA() : scrInj("../-res-js/pouchdb.min.js").then(() => scrInj("../-res-js/pouchdb.all-dbs.min.js").then(_.dbA));
 s2L = () => !!window.markdownit || Promise.all(["", "-decorate", "-ins", "-sub", "-sup"].map(e => scrInj("../-res-mdit/markdown-it" + e + ".min.js")));
 // s3L = () => !!window.hljs || scrInj("../-res-js/highlight.min.js");
 nmImp = () => window.nmwrap && [] || import("../-app-cjs/nmgr.js").then(re => ["nmwrap", re.nmpage, re.nmscr]);

 window.txd2 = { DBNAME: "howfam02", FILEID: ".records", ATTKEY: "hjas_disc-famgospeltbits.html", OPTS: {}, wid: "nswrap" };
 s4L = scr => !scr || !window[txd2.wid] || !!window.nkeys && (Array.from(document.scripts).find(si => /window\.nkeys *=/.test(si.innerHTML)) || document.createElement('i')).remove() || !(window.annos || scrInj("../-res-js/ebook-annos-fns.js")) || scrInj(0, scr.type || 0, "\\n" + (scr.innerHTML || "" + scr).trim() + "\\n");

 // window[txd2.wid].remove() // Alert: useful only if edit-testing the GUI code above
 window[txd2.wid] || Promise.resolve().then(s1L).then(s2L).then(nmImp).then(uiDspl).then(smL).then(cQry).then(uiDspl).then(s4L).catch(reShow);

 // nmwrap.classList.toggle("dnone");
*/

//`;

export {
  _module,
  varkeys, nformat, uiwidth, publdims,
  jsrefq, bcaches, dscripts, scrload,
  jstatqs, itoken,
  t2puzls, t3search, t4cntcs,
  nmtools, webapp1, webapp2
};
