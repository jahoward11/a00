/* JavaScript module */

const _module = "JStool";

const modload = `/*
__CalcJS Module Loader__
*Assign modules to global \`xstor\` in assorted ways.*
*/

 w = window;
 w.xstor = w.xstor || {};
 w.aurls = w.aurls || {};
 ksx = Object.keys(xstor);
 cms = [1, 2, 3, 4, 5, 6, 7, 8, "../-dev/prj10.js"].map(e => e[1] ? e : "../-app-cjs/cmod" + e + ".js");
 ksx.length || !/^http/.test(w.location.protocol) || Promise.all( cms.map( u => import(u).then(m => xstor[m._module || "xmod" + (1 + Object.keys(xstor).length)] = m).catch(reShow) )).then(xlstGen).catch(reShow)

 cmPrc = d => !/^const +\\w+ +=/m.test("" + d) ? xstor[txd2.FILEID] = typeof d === 'object' && d || [d] : import(aurls[txd2.FILEID] = URL.createObjectURL(new Blob([d]))).then(m => xstor[m._module || m._id || "xmod" + (1 + Object.keys(xstor).length)] = m);
 // !w.nm0 || !(w.txd2 = nm0.txd1).FILEID || xstor[txd2.FILEID] || aurls[txd2.FILEID] || nm0.pchQry().then(cmPrc).then(xlstGen).catch(reShow)

/*
 c0Qry = () => !txd2.DBORIG && !pdbs.includes(txd2.DBNAME) && Promise.reject("Alert: No data retrieved.") || PouchDB((pdbs.includes(txd2.DBNAME) ? "" : txd2.DBORIG.replace(/\\/$/, "") + "/") + txd2.DBNAME).get(txd2.FILEID, txd2.OPTS).then(d => d.content || d);
 dbA = () => !_.w.PouchDB || !PouchDB.allDbs || PouchDB.allDbs().then(re => _.w.pdbs = re);
 s1L = () => !!_.w.PouchDB ? _.dbA() : scrInj("../-res-js/pouchdb.min.js").then(() => scrInj("../-res-js/pouchdb.all-dbs.min.js").then(_.dbA));
 w.txd2 = { DBNAME: "cmods", FILEID: "t2puzls", ATTKEY: "", OPTS: { skip_setup: true }, DBORIG: localStorage._ecoa00orig };
 xstor[txd2.FILEID] || aurls[txd2.FILEID] || Promise.resolve().then(s1L).then(c0Qry).then(cmPrc).then(xlstGen).catch(reShow)
*/

 m1ui  = "\\n<style>\\nhr { margin: 1.5rem 0; }\\n#m1inp { width: 100%; }\\n</style>";
 m1ui += "\\n<hr />\\n<p><input id=m1inp type=file multiple /></p>\\n";
 // m1Prc = b => !(b || "").text || b.text().then( s => { let m1 = s.replace(/[^]+?_module *= *"(\\w+)"[^]+|[^]*/, "$1") || "xmod" + (1 + Object.keys(xstor).length); xstor[m1] = {}; s.match(/^const +[a-z]\\w* *= *\`[^]*?\`(?=;?\\n+(?:const|export) )/gim).forEach(s1 => s1.replace(/^const +(\\w+) *= *(\`[^]+)/, (m, c1, c2) => { xstor[m1][c1] = eval(c2); })); }); //
 m1Imp = b => !(b || "").name || aurls[b.name] || !(aurls[b.name] = URL.createObjectURL(b)) || !/^text/.test(b.type) || import(aurls[b.name]).then(m => xstor[m._module || "xmod" + (1 + Object.keys(xstor).length)] = m).catch(reShow);
 try { ksx.length || /^http/.test(w.location.protocol) || m1wrap } catch { ndiv = document.createElement('div'); ndiv.id = "m1wrap"; ndiv.innerHTML = m1ui; cmain.appendChild(ndiv); m1inp.onchange = () => !m1inp.files.length || Promise.all(Array.from(m1inp.files).map(_.m1Imp)).then(xlstGen).catch(reShow); ""; }

 xList = () => Object.keys(xstor).map(km => Object.keys(xstor[km]).filter(kx => !/^_mod/.test(kx)).map(kx => "xstor." + km + "." + kx));
 !ksx.length || (w.x1 = xList());
//`;

const notemgr = `/*
__Note Manager: based on concepts from JS Tutorial 4__
 This module option functions only to render a fairly complete
Note-Manager UI -- one that extends the functionality of the
tutorial code written in the \`JScode\` module.
*/

 window.nmwrap || import("../-app-cjs/nmgr.js").then(re => { let ndiv = document.createElement('div'); ndiv.id = "nmwrap"; ndiv.innerHTML = "\\n<hr />" + re.nmpage; cmain.appendChild(ndiv); return scrInj("../-res-js/pouchdb.min.js").then(() => scrInj("../-res-js/pouchdb.all-dbs.min.js")).then(() => scrInj(null, 'module', re.nmscr)); }).catch(reShow)

 // Un-comment the following line of code to generate the
// full source code (e.g., for building a standalone web app).
// *Alert:* This app's code is lengthy (about 2400 lines).

 // import("../-app-cjs/nmgr.js").then(re => re.dwraps[0] + re.nmpage + re.dwraps[1] + re.nmscr + re.dwraps[2]).then(reShow).catch(reShow)
//`;

const search = `/*
__Search and Replace: from JS Tutorial 3__
 This module option functions only to render a Search-&amp;-Replace UI
from the tutorial code written in the \`JScode\` module.
*/

 t3x = xstor.JScode.tutorial3;
 bodGen = src => "\\n" + src.match(/^srui = [^]+?(?=\\n$)/m)[0].replace(/;$|^srui = /g, "").split(/;\\nsrui \\+= /).map(eval).join("").trim() + "\\n"; //
 scrGen = src => "\\nlet " + src.match(/^rxs = [^]+?(?=\\n+ *(\\*\\/|\\/[\\/*])|(?![^]))/m)[0].replace(/\\b_\\.\\b| *\\/\\/ *$| *"";?$|^\\n/gm, "").replace(/^[ =\\w]+\\n/, m => m.replace(/ *=(?= *[a-z]|\\n)/gi, ",")).replace(/^( *\\b[ ,\\w]+?(?: *= .+?|))[,;]?\\n(?= *\\b[ ,\\w]+(?: *= .+|);?$)/gm, "$1,\\n  ") + "\\n"; //
 uiDspl = (wid, cnt) => { let ndiv = document.createElement('div'); ndiv.id = wid; ndiv.innerHTML = cnt; cmain.appendChild(ndiv); };

 // srwrap.remove() // *Alert:* useful only if edit-testing the UI code above
 try { srwrap } catch { uiDspl("srwrap", bodGen(t3x)); !!window.sr0 || scrInj(null, 'module', scrGen(t3x)).catch(reShow); }

 // Un-comment the following two lines of code to generate the
// full source code (e.g., for building a standalone web app).

 // dwraps = ["<!DOCTYPE html>\\n<html lang=en>\\n<title>Search and Replace</title>\\n<meta charset=\\"utf-8\\">\\n<meta name=viewport content=\\"width=device-width, initial-scale=1\\">\\n\\n", "\\n\\n<script src=\\"../../a00/-res-js/localforage.min.js\\" type=\\"text/javascript\\"></script>\\n<script type=module>", "</script>\\n</html>"];
 // srctxta.value = (dwraps[0] + srwrap.outerHTML.replace(/\\n<hr.*?>/, "") + dwraps[1] + scrGen(t3x).replace(/reShow/g, "console.warn") + dwraps[2]);
//`;

const textdiff = `/*
__Source-Text Diffs__
*Reveals differences between two text sources.*

*How it works:*
 When the global-object or local-storage keys of two sources of text
are both entered, the content text of each is displayed and stylized
with color coding to show word- and line-level changes.
- Deleted lines of text are colored solid red
  (in the *original* text field).
- Inserted lines of text are colored solid green
  (in the *edited* text field).
- Altered words within a line are colored yellow
  (in both text fields).
*/

xdui = "\\n<style type=\\"text/css\\">\\n*, *::before, *::after { box-sizing: inherit; }";
xdui += "\\nhtml { box-sizing: border-box; color: DimGrey; /* font-size: 14px; */ min-width: 375px; overflow-wrap: break-word; }";
xdui += "\\nbutton, input, select { margin: 0; }\\nhr { margin: 1.5rem 0; }\\n[list]::-webkit-calendar-picker-indicator { display: none !important; }";
xdui += "\\n#xdwrap { font: normal 1rem Helvetica, Arial, sans-serif; max-width: 720px; margin: 24px auto; }";
xdui += "\\n#xdwrap h4 { margin: 0 0 0.75rem; }";
xdui += "\\n#xdwrap button, #xdwrap .btn1, #xdwrap input:not([type=checkbox]):not([type=radio]), #xdwrap select { background: #f8f8f8; color: Grey; font-size: calc(5rem / 6); line-height: 1.5rem; height: 1.5rem; padding: 0 0.5rem; border: 0; border-radius: 0; }";
xdui += "\\n#xdwrap input[type=text] { width: 144px; }";
xdui += "\\n#xdwrap pre { height: 240px; margin: 0 0 16px; overflow: auto; }";
xdui += "\\n#xdwrap pre.ht0 { height: 0; }";
xdui += "\\n#xdwrap pre.ht2x { height: 480px; }";
xdui += "\\n#xdwrap .iwarn { color: Orange; }";
xdui += "\\n#xdwrap .isucc { color: CornFlowerBlue; }";
xdui += "\\n#xdwrap .cfield:not(:last-child) { margin-bottom: 0.5rem; }";
xdui += "\\n#xdwrap .ccntr:not(:last-of-type) { margin-right: 0.5rem; }";
xdui += "\\n#xdwrap :not(.cfield)>.ccntr { display: inline-block; height: 1.5rem; margin-bottom: 0.5rem; }";
xdui += "\\n#xdwrap .fltrt { float: right; }";
xdui += "\\n#xdwrap .cfield.fltrt:not(:last-child) { margin: 0; }";
xdui += "\\n#xdwrap .inserted { background-color: #9E9; display: inline-block; min-width: 100%; }";
xdui += "\\n#xdwrap .deleted { background-color: #E99; display: inline-block; min-width: 100%; }";
xdui += "\\n#xdwrap .modified { background-color: #FD8; display: inline-block; min-width: 100%; }";
xdui += "\\n#xdwrap .modified-light { background-color: #fcffb6; /* display: inline-block; */ /* min-width: 100%; */ }";
xdui += "\\n#xdwrap .padding { background-color: LightGrey; display: inline-block; min-width: 100%; }";
xdui += "\\n@media screen and (min-height: 864px), print and (max-width: 734px),";
xdui += "\\nprint and (min-width: 738px) and (max-width: 785px) { #xdwrap pre { height: 384px; } #xdwrap pre.ht2x { height: 768px; } }";
xdui += "\\n</style>\\n<hr />\\n<datalist id=pfile2></datalist>";
xdui += "\\n<span class=\\"cfield fltrt\\"><label class=ccntr><input type=text id=s1inp list=pfile2 placeholder=\\"filename/key/CMD&hellip;\\" /></label><label class=\\"ccntr isucc\\"><input type=checkbox id=s1swi /> hide</label></span>";
xdui += "\\n<h4>SOURCE1 (edited)</h4>";
xdui += "\\n<pre id=s1rslt></pre>";
xdui += "\\n<span class=\\"cfield fltrt\\"><label class=ccntr><input type=text id=s2inp list=pfile2 placeholder=\\"filename/key/CMD&hellip;\\" /></label><label class=\\"ccntr isucc\\"><input type=checkbox id=s2swi /> hide</label></span>";
xdui += "\\n<h4>SOURCE2 (original)</h4>";
xdui += "\\n<pre id=s2rslt></pre>\\n";

 // srwrap.remove() // *Alert:* useful only if edit-testing the UI code above
 try { xdwrap } catch { ndiv = document.createElement('div'); ndiv.id = "xdwrap"; ndiv.innerHTML = xdui; cmain.appendChild(ndiv); }
 try { SourceDiff } catch { scrInj("../-res-js/srcdiff.js").catch(reShow) }

fncTry = (fnc, a, e) => { try { return fnc(a) } catch (err) { return e > 1 ? a : e ? err : undefined }};
diffGen = ([s1txt, s2txt]) => { if (!window.SourceDiff || !s1txt || !s2txt) { return s1rslt.innerHTML = s2rslt.innerHTML = ""; } let dif = new SourceDiff.Diff(true), fmt = new SourceDiff.DiffFormatter(dif); [s2rslt.innerHTML, s1rslt.innerHTML] = fmt.formattedDiff(s2txt, s1txt); };
datPrep = () => Promise.all( [s1inp.value, s2inp.value].map( k => Promise.resolve(_.fncTry(window.eval, k)).then(v => v != null ? v : localStorage.getItem(k) || window.localforage && localforage.getItem(k)).then(v => v == null ? "" : typeof v === 'object' ? JSON.stringify(v, 0, 2) : typeof v !== 'string' ? "" + v : !/^{\\s*['"][^]+}$|^\\[[^]+\\]$/.test(v.trim()) ? v : JSON.stringify(_.fncTry(JSON.parse, v), 0, 2) || v) )).then(_.diffGen).catch(reShow);
[s1swi, s2swi].forEach( e => e.onchange = () => { [s1rslt, s2rslt].forEach(e => e.classList.remove("ht0", "ht2x")); if (s1swi.checked && s2swi.checked) { s1rslt.classList.add("ht0"); s2rslt.classList.add("ht0"); } else if (s1swi.checked) { s1rslt.classList.add("ht0"); s2rslt.classList.add("ht2x") } else if (s2swi.checked) { s1rslt.classList.add("ht2x"); s2rslt.classList.add("ht0"); } });
s1rslt.onscroll = () => { s2rslt.scrollLeft = s1rslt.scrollLeft; s2rslt.scrollTop = s1rslt.scrollTop; };
s2rslt.onscroll = () => { s1rslt.scrollLeft = s2rslt.scrollLeft; s1rslt.scrollTop = s2rslt.scrollTop; };
[s1inp, s2inp].forEach(e => e.onblur = _.datPrep);
!window.xdwrap || !window.localforage || localforage.keys().then( ks => pfile2.innerHTML = ["trgtxta.value", "srctxta.value", "dentr.value", "recon.textContent", "recon.innerHTML"].concat(!window.nm0 ? [] : ["nmdata.textContent", "nm0.pchQry()"]).concat(ks).map(k => "\\n<option>" + k + "</option>").join("") + "\\n" ).catch(reShow);

 // Un-comment the following block of code to generate the
// full source code (e.g., for building a standalone web app).

/*
 scrGen = src => "\\nlet " + src.match(/^fncTry = [^]+?(?=\\n+ *(\\*\\/|\\/[\\/*])|(?![^]))/m)[0].replace(/\\b_\\.\\b| *\\/\\/ *$| *"";?$|^\\n/gm, "").replace(/^[ =\\w]+\\n/, m => m.replace(/ *=(?= *[a-z]|\\n)/gi, ",")).replace(/^( *\\b[ ,\\w]+?(?: *= .+?|))[,;]?\\n(?= *\\b[ ,\\w]+(?: *= .+|);?$)/gm, "$1,\\n  ") + "\\n"; //
 dwraps = ["<!DOCTYPE html>\\n<html lang=en>\\n<title>Source-Text Diffs</title>\\n<meta charset=\\"utf-8\\">\\n<meta name=viewport content=\\"width=device-width, initial-scale=1\\">\\n\\n", "\\n\\n<script src=\\"../../a00/-res-js/localforage.min.js\\" type=\\"text/javascript\\"></script>\\n<script src=\\"../../a00/-res-js/srcdiff.js\\" type=\\"text/javascript\\"></script>\\n<script type=module>", "</script>\\n</html>"];
 reShow( dwraps[0] + xdwrap.outerHTML.replace(/\\n<hr.*?>/, "") + dwraps[1] + scrGen(xstor.JStool.textdiff).replace(/reShow/g, "console.warn") + dwraps[2] )
*/
//`;

export {
  _module,
  modload, notemgr, search, textdiff
};
