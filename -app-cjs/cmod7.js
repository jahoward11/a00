/* JavaScript module */

const _module = "JStool";

const notemgr = `/*
__Note Manager: based on concepts from JS Tutorial 4__
 This module option functions only to render a fairly complete
Note-Manager UI -- one that extends the functionality of the
demo code written in the \`JScode\` module's data files.
*/

window.nmwrap || import("./nmgr.js").then(re => { let ndiv = document.createElement('div'); ndiv.id = "nmwrap"; ndiv.innerHTML = "\\n<hr />\\n" + re.nmpage + "\\n"; cmain.appendChild(ndiv); return scrInj("../-res-js/pouchdb.min.js").then(() => scrInj("../-res-js/pouchdb.all-dbs.min.js")).then(() => scrInj(null, 'module', "\\n" + re.nmscr + "\\n")); }).catch(respShow)

 // Un-comment the following line of code to generate the
// full source code (e.g., for building a standalone web app).
// *Alert:* This app's code is lengthy (about 2300 lines).

// import("./nmgr.js").then(re => re.dwraps[0] + re.nmpage + re.dwraps[1] + re.nmscr + re.dwraps[2]).then(respShow).catch(respShow)
//`;

const search = `/*
__Search and Replace: from JS Tutorial 3__
 This module option functions only to render a Search-&amp;-Replace UI
from the demo code written in the \`JScode\` module's data files.
*/

t3x = xstor.JScode.tutorial3;
bodGen = src => "\\n" + src.match(/^srui = [^]+?(?=\\n$)/m)[0].replace(/;$|^srui = /g, "").split(/;\\nsrui \\+= /).map(eval).join("").trim() + "\\n"; //
scrGen = src => "let " + src.match(/^rxs = [^]+?(?=\\n+ *(\\*\\/|\\/[\\/*]))/m)[0].replace(/\\b_\\.\\b| *"";?$|^\\n/gm, "").replace(/^[ =\\w]+\\n/, m => m.replace(/ *=(?= *[a-z]|\\n)/gi, ",")).replace(/^( *\\b[ ,\\w]+?(?: *= .+?|))[,;]?( *\\/\\/ *|)\\n(?= *\\b[ ,\\w]+(?: *= .+|);?(?: *\\/\\/ *|)$)/gm, "$1,$2\\n  "); //
uiDspl = cnt => { let ndiv = document.createElement('div'); ndiv.id = "srwrap"; ndiv.innerHTML = cnt; cmain.appendChild(ndiv); };

// srwrap.remove() // *Alert:* useful only if edit-testing the UI code above
try { srwrap } catch { uiDspl(bodGen(t3x)); !!window.strPars || scrInj(null, 'module', "\\n" + scrGen(t3x) + "\\n").catch(respShow); }

 // Un-comment the following two lines of code to generate the
// full source code (e.g., for building a standalone web app).

// dwraps = ["<!DOCTYPE html>\\n<html lang=en>\\n<title>Search and Replace</title>\\n<meta charset=\\"utf-8\\">\\n<meta name=viewport content=\\"width=device-width, initial-scale=1\\">\\n\\n", "\\n\\n<script src=\\"../../a00/-res-js/localforage.min.js\\" type=\\"text/javascript\\"></script>\\n<script type=module>\\n", "\\n</script>\\n</html>"];
// srctxta.value = (dwraps[0] + srwrap.outerHTML.replace(/\\n<hr>/, "") + dwraps[1] + scrGen(t3x) + dwraps[2]);
//`;

const textdiff = `/*
__Source-Text Diffs__
 Reveals differences between two text sources.

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
try { SourceDiff } catch { scrInj("../-res-js/srcdiff.js").catch(respShow) }

fncTry = (fnc, a, e) => { try { return fnc(a) } catch (err) { return e > 1 ? a : e ? err : undefined }};
diffGen = ([s1txt, s2txt]) => { if (!window.SourceDiff || !s1txt || !s2txt) { return s1rslt.innerHTML = s2rslt.innerHTML = ""; } let dif = new SourceDiff.Diff(true), fmt = new SourceDiff.DiffFormatter(dif); [s2rslt.innerHTML, s1rslt.innerHTML] = fmt.formattedDiff(s2txt, s1txt); };
datPrep = () => Promise.all( [s1inp.value, s2inp.value].map( k => Promise.resolve(_.fncTry(window.eval, k)).then(v => v != null ? v : localStorage.getItem(k) || window.localforage && localforage.getItem(k)).then(v => v == null ? "" : typeof v === 'object' ? JSON.stringify(v, null, 2) : typeof v !== 'string' ? "" + v : !/^{\\s*['"][^]+}$|^\\[[^]+\\]$/.test(v.trim()) ? v : JSON.stringify(_.fncTry(JSON.parse, v), null, 2) || v) )).then(_.diffGen).catch(console.warn);
[s1swi, s2swi].forEach( e => e.onchange = () => { [s1rslt, s2rslt].forEach(e => e.classList.remove("ht0", "ht2x")); if (s1swi.checked && s2swi.checked) { s1rslt.classList.add("ht0"); s2rslt.classList.add("ht0"); } else if (s1swi.checked) { s1rslt.classList.add("ht0"); s2rslt.classList.add("ht2x") } else if (s2swi.checked) { s1rslt.classList.add("ht2x"); s2rslt.classList.add("ht0"); } });
s1rslt.onscroll = () => { s2rslt.scrollLeft = s1rslt.scrollLeft; s2rslt.scrollTop = s1rslt.scrollTop; };
s2rslt.onscroll = () => { s1rslt.scrollLeft = s2rslt.scrollLeft; s1rslt.scrollTop = s2rslt.scrollTop; };
[s1inp, s2inp].forEach(e => e.onblur = _.datPrep);
!window.xdwrap || !window.localforage || localforage.keys().then( ks => pfile2.innerHTML = ["trgtxta.value", "srctxta.value", "dentr.value", "recon.textContent", "recon.innerHTML"].concat(ks).map(k => "\\n<option>" + k + "</option>").join("") + "\\n" ).catch(console.warn);

 // Un-comment the following block of code to generate the
// full source code (e.g., for building a standalone web app).

/*
scrGen = src => "let " + src.match(/^fncTry = [^]+?(?=\\n+ *(\\*\\/|\\/[\\/*]))/m)[0].replace(/\\b_\\.\\b| *"";?$|^\\n/gm, "").replace(/^[ =\\w]+\\n/, m => m.replace(/ *=(?= *[a-z]|\\n)/gi, ",")).replace(/^( *\\b[ ,\\w]+?(?: *= .+?|))[,;]?( *\\/\\/ *|)\\n(?= *\\b[ ,\\w]+(?: *= .+|);?(?: *\\/\\/ *|)$)/gm, "$1,$2\\n  "); //
dwraps = ["<!DOCTYPE html>\\n<html lang=en>\\n<title>Source-Text Diffs</title>\\n<meta charset=\\"utf-8\\">\\n<meta name=viewport content=\\"width=device-width, initial-scale=1\\">\\n\\n", "\\n\\n<script src=\\"../../a00/-res-js/localforage.min.js\\" type=\\"text/javascript\\"></script>\\n<script src=\\"../../a00/-res-js/srcdiff.js\\" type=\\"text/javascript\\"></script>\\n<script type=module>\\n", "\\n</script>\\n</html>"];
respShow(dwraps[0] + xdwrap.outerHTML.replace(/\\n<hr>/, "") + dwraps[1] + scrGen(xstor.JStool.textdiff) + dwraps[2])
*/
//`;

export {
  _module, notemgr, search, textdiff
};
