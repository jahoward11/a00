/* JavaScript module */

const groupname = "JStool";

const search = `/*
__Search and Replace: from JS Tutorial 3__
 This module option functions only to render a Search-&amp;-Replace UI
from the code written in the \`JScode\` module's data files.
*/

t3x = xstor["JScode"]["tutorial3"];
bodGen = src => "\\n" + src.match(/^srui = [^]+?(?=\\n$)/m)[0].replace(/;$|^srui = /g, "").split(/;\\nsrui \\+= /).map(eval).join("").trim() + "\\n"; //
scrGen = src => "let " + src.match(/^rxs = [^]+?(?=\\n+ *(\\*\\/|\\/[\\/*]))/m)[0].replace(/\\b_\\.\\b| *"";?$|^\\n/gm, "").replace(/^[ =\\w]+\\n/, m => m.replace(/ *=(?= *[a-z]|\\n)/gi, ",")).replace(/^( *\\b[ ,\\w]+?(?: *= .+?|))[,;]?( *\\/\\/ *|)\\n(?= *\\b[ ,\\w]+(?: *= .+|);?(?: *\\/\\/ *|)$)/gm, "$1,$2\\n  "); //
uiDspl = cnt => { let ndiv = document.createElement('div'); ndiv.id = "srwrap"; ndiv.innerHTML = cnt; cmain.appendChild(ndiv); };

// srwrap.remove() // *Alert:* useful only if edit-testing the UI code above
try { srwrap } catch { uiDspl(bodGen(t3x)); !!window.strPars || scrInj(null, 'module', "\\n" + scrGen(t3x) + "\\n").catch(respShow); }

 // Un-comment the following two lines of code to generate the
// full source code (e.g., for building a standalone web app).

// dwrap = ["<!DOCTYPE html>\\n<html lang=en>\\n<title>Search and Replace</title>\\n<meta charset=\\"utf-8\\">\\n<meta name=viewport content=\\"width=device-width, initial-scale=1\\">\\n\\n", "\\n\\n<script src=\\"../-res-js/localforage.min.js\\" type=\\"text/javascript\\"></script>\\n<script type=module>\\n", "\\n</script>\\n</html>"];
// srctxta.value = (dwrap[0] + srwrap.outerHTML + dwrap[1] + scrGen(t3x) + dwrap[2]);
//`;

const textdiff = `/*
__Source-Text Diffs__
 Reveals differences between two text sources.

*How it works:*
 When the global-object key or storage key (filename) of two sources
of text are entered, the text of each is displayed and stylized with
color coding to show word- and line-level changes.
- Deleted lines of text are colored solid red
  (in the *original* text field).
- Inserted lines of text are colored solid green
  (in the *edited* text field).
- Altered words within a line are colored yellow
  (in both text fields).
*/

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
sdui += "\\n#sdwrap :not(.cfield)>.ccntr { display: inline-block; height: 24px; margin-bottom: 8px; }";
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

// srwrap.remove() // *Alert:* useful only if edit-testing the UI code above
try { sdwrap } catch { ndiv = document.createElement('div'); ndiv.id = "sdwrap"; ndiv.innerHTML = sdui; cmain.appendChild(ndiv); }
try { SourceDiff } catch { scrInj("../-res-js/srcdiff.js").catch(respShow) }

fncTry = (fnc, a, e) => { try { return fnc(a) } catch (err) { return e > 1 ? a : e ? err : undefined }};
diffGen = ([s1txt, s2txt]) => { if (!window.SourceDiff || !s1txt || !s2txt) { return s1rslt.innerHTML = s2rslt.innerHTML = ""; } let sdff = new SourceDiff.Diff(true), fmtr = new SourceDiff.DiffFormatter(sdff); [s2rslt.innerHTML, s1rslt.innerHTML] = fmtr.formattedDiff(s2txt, s1txt); };
datPrep = () => Promise.all( [s1finp.value, s2finp.value].map( k => Promise.resolve(_.fncTry(window.eval, k)).then(v => v != null ? v : localStorage.getItem(k) || window.localforage && localforage.getItem(k)).then(v => v == null ? "" : typeof v === 'object' ? JSON.stringify(v, null, 2) : typeof v !== 'string' ? "" + v : !/^{\\s*['"][^]+}$|^\\[[^]+\\]$/.test(v.trim()) ? v : JSON.stringify(_.fncTry(JSON.parse, v), null, 2) || v) )).then(_.diffGen).catch(console.warn);
[s1chkb, s2chkb].forEach( e => e.onchange = () => { [s1rslt, s2rslt].forEach(e => e.classList.remove("ht0", "ht2x")); if (s1chkb.checked && s2chkb.checked) { s1rslt.classList.add("ht0"); s2rslt.classList.add("ht0"); } else if (s1chkb.checked) { s1rslt.classList.add("ht0"); s2rslt.classList.add("ht2x") } else if (s2chkb.checked) { s1rslt.classList.add("ht2x"); s2rslt.classList.add("ht0"); } });
s1rslt.onscroll = () => { s2rslt.scrollLeft = s1rslt.scrollLeft; s2rslt.scrollTop = s1rslt.scrollTop; };
s2rslt.onscroll = () => { s1rslt.scrollLeft = s2rslt.scrollLeft; s1rslt.scrollTop = s2rslt.scrollTop; };
[s1finp, s2finp].forEach(e => e.onblur = _.datPrep);
!window.sdwrap || !window.localforage || localforage.keys().then( ks => pfile2.innerHTML = ["trgtxta.value", "srctxta.value", "dentry.value", "respcon.textContent", "respcon.innerHTML"].concat(ks).map(k => "\\n<option>" + k + "</option>").join("") + "\\n" ).catch(console.warn);

 // Un-comment the following block of code to generate the
// full source code (e.g., for building a standalone web app).

/*
scrGen = src => "let " + src.match(/^diffGen = [^]+?(?=\\n+ *(\\*\\/|\\/[\\/*]))/m)[0].replace(/\\b_\\.\\b| *"";?$|^\\n/gm, "").replace(/^[ =\\w]+\\n/, m => m.replace(/ *=(?= *[a-z]|\\n)/gi, ",")).replace(/^( *\\b[ ,\\w]+?(?: *= .+?|))[,;]?( *\\/\\/ *|)\\n(?= *\\b[ ,\\w]+(?: *= .+|);?(?: *\\/\\/ *|)$)/gm, "$1,$2\\n  "); //
dwrap = ["<!DOCTYPE html>\\n<html lang=en>\\n<title>Source-Text Diffs</title>\\n<meta charset=\\"utf-8\\">\\n<meta name=viewport content=\\"width=device-width, initial-scale=1\\">\\n\\n", "\\n\\n<script src=\\"../-res-js/localforage.min.js\\" type=\\"text/javascript\\"></script>\\n<script src=\\"../-res-js/srcdiff.js\\" type=\\"text/javascript\\"></script>\\n<script type=module>\\n", "\\n</script>\\n</html>"];
respShow(dwrap[0] + sdwrap.outerHTML + dwrap[1] + scrGen(xstor.JStool.textdiff) + dwrap[2])
*/
//`;

export {
  groupname, search, textdiff
};
