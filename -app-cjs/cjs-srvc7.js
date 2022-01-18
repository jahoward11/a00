/* JavaScript module */

const groupname = "puzzle";

const collection1 = `/*
__Puzzle Collection I: from JS Tutorial 2__

 This module option functions only to display all of the puzzle GUIs
that are already written in the \`JScode\` module's data files:
- SLIDING TILES
- LIGHTS OUT
- PEGS
*/

t2x = xstor["JScode"]["tutorial2"];
bodGen = src => "\\n<h3 class=cfield>Puzzles, JS Tutorial 2</h3>\\n\\n" + src.match(/^g\\dui = [^]+?(?=\\n$)/gm).map(e => e.replace(/\\bg\\dwrap\\b/g, "pz1wrap").replace(/;$|^g\\dui = /g, "").split(/;\\ng\\dui \\+= /).map(eval).join("").trim()).join("\\n\\n") + "\\n"; //
scrGen = src => src.match(/^(?:jopts|m2trk|tnx) = [^]+?(?=\\n+ *(\\*\\/|\\/[\\/*]))/gm).map(e => "let " + e.replace(/\\b_\\.\\b| *"";?$|^\\n/gm, "").replace(/^.+/, m => m.replace(/ *=(?= *[a-z]|$)/gi, ",")).replace(/^(\\w+ =.+);(?=\\n\\w+ =)/gm, "$1,")).join("\\n\\n"); //
uiDspl = cnt => { let ndiv = document.createElement('div'); ndiv.id = "pz1wrap"; ndiv.innerHTML = cnt; cmain.appendChild(ndiv); };

// pz1wrap.remove() // *Alert:* useful only if edit-testing the GUI code above
try { pz1wrap } catch { uiDspl(bodGen(t2x)); scrInj(null, 'module', scrGen(t2x)).catch(respShow); }

 // Un-comment the following two lines of code to generate the
// full source code (e.g., for building a standalone web app).

// dwrap = ["<!DOCTYPE html>\\n<html lang=en>\\n<title>Puzzles, JS Tutorial 2</title>\\n<meta charset=\\"utf-8\\">\\n<meta name=viewport content=\\"width=device-width, initial-scale=1\\">\\n\\n", "\\n\\n<script type=module>\\n", "\\n</script>\\n</html>"];
// respShow((dwrap[0] + pz1wrap.outerHTML + dwrap[1] + scrGen(t2x) + dwrap[2]).replace(/<(?=[!/?a-z])/gi, "&lt;"))
//`;

const tiltmaze = `/*
__TILT MAZE__
*A JavaScript Puzzle GUI*
*/

g4ui = "\\n<style>\\n*, *::before, *::after { box-sizing: inherit; }";
g4ui += "\\nhtml { box-sizing: border-box; min-width: 375px; }";
g4ui += "\\nhr { margin: 1.5rem 0; }";
g4ui += "\\n#g4wrap { font: normal medium Helvetica, Arial, sans-serif; margin: 24px 0; }";
g4ui += "\\n#g4wrap .cfield { max-width: 359px; }";
g4ui += "\\n#g4wrap .cfield:not(:last-child) { margin-bottom: 8px; }";
g4ui += "\\n#g4wrap .ccntr:not(:last-child) { margin-right: 8px; }";
g4ui += "\\n#g4wrap :not(.cfield)>.ccntr { display: inline-block; margin-bottom: 8px; }";
g4ui += "\\n#g4board { margin: 16px; }";
g4ui += "\\n#g4board>canvas { border: 8px solid Tan; background: radial-gradient(White, #ffeccc 80%, #e2cfb6); }";
g4ui += "\\n#g4scor { position: relative; top: -12px; font-size: small; margin-left: 16px; }";
g4ui += "\\n#g4movs { font-weight: bold; }";
g4ui += "\\n</style>\\n<hr>\\n<h4 class=cfield>Tilt Maze</h4>";
g4ui += "\\n<div class=cfield><em>Objective:</em> Guide the ball to the&nbsp;target(s).</div>";
g4ui += "\\n<div class=cfield><em>Tip:</em> This is a logic puzzle&mdash;not a test of skill with eye&#x2011;hand&nbsp;coordination.</div>";
g4ui += "\\n<div>\\n<span class=ccntr><select id=mpatt>\\n<option disabled>Maze Pattern</option>\\n";
g4ui += ["Level I (single)", "Level II (single)", "Level III (single)", "Level IV (single)", "Level V (single)", "Level VI (single)", "Level VII (multi)", "Level VIII (multi)", "Level IX (multi)", "Level X (multi)", "Level XI (multi)"].map(e => "<option>" + e + "</option>").join("\\n");
g4ui += "\\n</select></span><span class=ccntr><select id=gscrg>";
g4ui += "\\n<option disabled>Game Scoring</option>\\n<option>reset counter</option>\\n<option selected>add up total</option>";
g4ui += "\\n</select></span><span class=ccntr><input type=button value=\\"&#x21bb; NEW MAZE\\" onclick=g4Start()></span>\\n</div>";
g4ui += "\\n<div id=g4board></div>";
g4ui += "\\n<div id=g4scor class=cfield>Score: <span id=g4movs>0</span></div>";
g4ui += "\\n<div class=cfield align=center><span class=ccntr><button onclick=pcMove(3)>&ltrif; LEFT</button></span><span class=ccntr><button onclick=pcMove(1)>&utrif; TOP</button></span><span class=ccntr><button onclick=pcMove(4)>RIGHT &rtrif;</button></span></div>";
g4ui += "\\n<div class=cfield align=center><span class=ccntr><button onclick=pcMove(2)>&dtrif; BOTTOM</button></span></div>\\n";

// g4wrap.remove() // *Alert:* useful only if edit-testing the GUI code above
try { g4wrap && (g4board.innerHTML = "") } catch { ndiv = document.createElement('div'); ndiv.id = "g4wrap"; ndiv.innerHTML = g4ui; cmain.appendChild(ndiv); }

dbar = midx = gball = tstrk = t0trk = ""
t1trk = 0;
g4sets = [""];
g4trgs = [ "", [[280, 280]], [[182, 182]], [[288, 129]], [[289, 199]], [[109, 244]], [[118, 189]], [[28, 28], [280, 28], [154, 154], [28, 280], [280, 280]], [[91, 28], [217, 28], [28, 91], [280, 91], [28, 217], [280, 217], [91, 280], [217, 280]], [[28, 28], [280, 28], [91, 91], [217, 91], [91, 217], [217, 217], [28, 280], [280, 280]], [[182, 23], [23, 76], [288, 182], [23, 235], [288, 235], [182, 288]], [[55, 16], [211, 16], [289, 16], [133, 55], [250, 94], [16, 133], [94, 133], [172, 133], [250, 172], [55, 211], [133, 211], [172, 250], [16, 289], [94, 289], [250, 289]] ];
g4blls = [ "", [28 - 20, 28 - 20, 0, 0, 20], [129 - 16, 129 - 16, 0, 0, 16], [23 - 16, 182 - 16, 0, 0, 16], [19 - 14, 109 - 14, 0, 0, 14], [199 - 14, 64 - 14, 0, 0, 14], [189 - 10, 119 - 10, 0, 0, 10], [154 - 20, 217 - 20, 0, 0, 20], [154 - 20, 154 - 20, 0, 0, 20], [154 - 20, 154 - 20, 0, 0, 20], [23 - 16, 129 - 16, 0, 0, 16], [172 - 12, 172 - 12, 0, 0, 12] ];
g4view = { canvas: document.createElement("canvas"), start: function () { this.canvas.height = this.canvas.width = 308; this.context = this.canvas.getContext("2d"); g4board.appendChild(this.canvas); this.interval = setInterval(_.vRfrsh, 4); }, clear: function (pc) { this.context.clearRect( ... ( !pc ? [0, 0, this.canvas.width, this.canvas.height] : Array.isArray(pc) ? pc : [pc.x, pc.y, pc.wi, pc.ht] )); }, stop: function () { clearInterval(this.interval); } };
compnX = function (clr, x, y, w, h, r = 0) { this.x = x; this.y = y; this.xsp = 0; this.ysp = 0; this.wi = w || 2 * r; this.ht = h || 2 * r; this.pcDrw = () => { let ctx = _.g4view.context; ctx.fillStyle = clr; if (!r) { ctx.fillRect(this.x, this.y, this.wi, this.ht); } else { ctx.beginPath(); ctx.arc(this.x + r, this.y + r, r, 0, 2 * Math.PI); ctx.fill(); } }; this.posChg = () => { this.x += this.xsp; this.y += this.ysp; }; this.posRvrs = d => d == 1 ? (this.y += 1) : d == 2 ? (this.y -= 1) : d == 3 ? (this.x += 1) : d == 4 ? (this.x -= 1) : 0; this.posBdry = () => [this.y, this.y + (this.ht), this.x, this.x + (this.wi)]; };
collDt = (pt, pb, pl, pr) => { _.t0trk || (_.t0trk = 1 + _.tstrk.findIndex(([tx, ty]) => pt < ty && pb > ty && pl < tx && pr > tx)); return ( !(pt > 1 && pb < _.g4view.canvas.height - 1 && pl > 1 && pr < _.g4view.canvas.width - 1) || _.g4sets[_.midx].some( ([ox, oy, ow, oh]) => !(pb < oy - 1 || pt > oy + oh + 1 || pr < ox - 1 || pl > ox + ow + 1) )); };
vRfrsh = () => { _.g4view.clear(_.gball); _.gball.posChg(); if (!_.collDt(... _.gball.posBdry()) && !_.t0trk) { _.dbar = 0; _.gball.pcDrw(); } else if (!_.t0trk) { _.dbar = _.dbar || (_.gball.ysp < 0 ? 1 : _.gball.ysp > 0 ? 2 : _.gball.xsp < 0 ? 3 : _.gball.xsp > 0 ? 4 : 0); _.gball.ysp = _.gball.xsp = 0; _.gball.posRvrs(_.dbar); } else { !_.tstrk.length || _.g4view.clear( (_.tstrk.splice(_.t0trk - 1, 1)[0] || []) .map(e => e - (_.midx == 6 ? 14 : 15)).concat(_.midx == 6 ? [28, 29] : [30, 30]) ) || (_.t0trk = 0) || ( g4movs.innerHTML = "<em>" + ++_.t1trk + " targets achieved!" + (_.tstrk.length ? "</em>" : " Maze completed!</em>") ); } };

g4sets.push([ [55, 55, 71, 8], [244, 118, 71, 8], [118, 181, 71, 8], [55, 244, 71, 8], [244, 244, 71, 8], [55, 118, 8, 71], [181, -8, 8, 71], [181, 244, 8, 71] ]);
g4sets.push([ [98, 45, 61, 8], [204, 98, 61, 8], [98, 151, 112, 8], [257, 151, 61, 8], [-8, 204, 61, 8], [257, 257, 61, 8], [45, -8, 8, 61], [45, 98, 8, 61], [98, 98, 8, 61], [98, 257, 8, 61], [151, 98, 8, 112], [151, 257, 8, 61], [204, 151, 8, 61], [257, -8, 8, 61] ]);
g4sets.push([ [98, 45, 61, 8], [257, 45, 61, 8], [-8, 98, 61, 8], [98, 98, 61, 8], [257, 151, 61, 8], [151, 204, 61, 8], [-8, 257, 61, 8], [45, 204, 8, 61], [98, 257, 8, 61], [151, -8, 8, 61], [151, 151, 8, 61], [204, 257, 8, 61], [257, 98, 8, 61], [257, 257, 8, 61] ]);
g4sets.push([ [127, 37, 53, 8], [-8, 82, 53, 8], [172, 82, 53, 8], [262, 82, 53, 8], [-8, 127, 53, 8], [172, 172, 53, 8], [262, 172, 53, 8], [37, 217, 53, 8], [262, 217, 53, 8], [-8, 262, 53, 8], [217, 262, 53, 8], [82, 37, 8, 53], [82, 217, 8, 53], [127, 82, 8, 53], [127, 172, 8, 53], [127, 262, 8, 53], [217, -8, 8, 53], [217, 127, 8, 53], [217, 262, 8, 53] ]);
g4sets.push([ [82, 37, 53, 8], [262, 37, 53, 8], [37, 127, 53, 8], [127, 172, 53, 8], [262, 172, 53, 8], [-8, 217, 53, 8], [172, 217, 53, 8], [82, 262, 53, 8], [37, -8, 8, 53], [82, 217, 8, 53], [127, 82, 8, 53], [127, 217, 8, 53], [172, -8, 8, 53], [172, 127, 8, 53], [172, 262, 8, 53], [217, 127, 8, 53], [262, 82, 8, 53], [262, 262, 8, 53] ]);
g4sets.push([ [-8, 27, 43, 8], [167, 27, 43, 8], [272, 27, 43, 8], [27, 62, 43, 8], [132, 62, 43, 8], [-8, 132, 43, 8], [97, 132, 43, 8], [167, 132, 43, 8], [272, 132, 43, 8], [97, 167, 43, 8], [167, 167, 43, 8], [27, 202, 43, 8], [202, 202, 43, 8], [272, 202, 43, 8], [62, 237, 43, 8], [132, 237, 43, 8], [-8, 272, 43, 8], [97, 272, 43, 8], [237, 272, 43, 8], [27, 202, 8, 43], [62, 27, 8, 43], [62, 97, 8, 43], [97, -8, 8, 43], [132, 167, 8, 43], [132, 272, 8, 43], [167, 97, 8, 43], [167, 167, 8, 43], [167, 237, 8, 43], [202, 62, 8, 43], [237, -8, 8, 43], [237, 62, 8, 43], [237, 132, 8, 43], [272, 27, 8, 43], [272, 272, 8, 43] ]);
g4sets.push([ [-8, 55, 71, 8], [181, 55, 71, 8], [118, 181, 71, 8], [244, 244, 71, 8], [55, 118, 8, 71], [55, 244, 8, 71], [118, -8, 8, 71], [118, 118, 8, 71], [181, 244, 8, 71], [244, 55, 8, 71] ]);
g4sets.push([ [-8, 55, 71, 8], [118, 55, 71, 8], [118, 181, 71, 8], [244, 181, 71, 8], [-8, 244, 71, 8], [181, 244, 134, 8], [55, 118, 8, 71], [118, 181, 8, 71], [181, 55, 8, 71], [244, -8, 8, 72] ]);
g4sets.push([ [-8, 55, 71, 8], [181, 55, 134, 8], [181, 118, 71, 8], [55, 181, 71, 8], [244, 181, 71, 8], [181, 244, 71, 8], [55, 55, 8, 71], [55, 244, 8, 71], [118, -8, 8, 71], [118, 181, 8, 71], [181, 181, 8, 71] ]);
g4sets.push([ [-8, 98, 61, 8], [98, 98, 61, 8], [257, 98, 61, 8], [-8, 204, 61, 8], [151, 204, 61, 8], [257, 204, 61, 8], [98, 257, 61, 8], [45, -8, 8, 61], [45, 98, 8, 61], [45, 257, 8, 61], [151, -8, 8, 61], [151, 151, 8, 61], [204, 45, 8, 61], [204, 257, 8, 61], [257, 151, 8, 61] ]);
g4sets.push([ [31, 31, 47, 8], [226, 31, 47, 8], [70, 109, 47, 8], [226, 109, 47, 8], [-8, 148, 47, 8], [265, 148, 47, 8], [109, 187, 47, 8], [148, 226, 47, 8], [265, 226, 47, 8], [70, 265, 47, 8], [148, 265, 47, 8], [31, 109, 8, 47], [31, 265, 8, 47], [70, 109, 8, 47], [109, -8, 8, 47], [148, 148, 8, 47], [187, 31, 8, 47], [226, 148, 8, 47], [226, 265, 8, 47], [265, -8, 8, 47], [265, 70, 8, 47] ]);

window.g4Start = () => { _.tstrk = Object.assign([], _.g4trgs[_.midx = mpatt.selectedIndex]); _.gball = new _.compnX("SlateGrey", ... _.g4blls[_.midx]); _.g4view.context ? _.g4view.clear() : _.g4view.start(); _.tstrk.map( ([x, y]) => [15, 10, 5].map( (r, i) =>  new _.compnX(i % 2 == 0 ? "LightSalmon" : "LightYellow", x - r, y - r, 0, 0, r) )) .flat().forEach(c => c.pcDrw()); _.g4sets[_.midx].map(e => new _.compnX("Tan", ...e)).forEach(c => c.pcDrw()); _.t0trk = _.dbar = 0; g4movs.innerHTML = (_.t1trk = gscrg.selectedIndex == 1 ? 0 : _.t1trk); };
window.pcMove = d => { d == 1 ? _.gball.ysp = -3 : d == 2 ? _.gball.ysp = 3 : d == 3 ? _.gball.xsp = -3 : d == 4 ? _.gball.xsp = 3 : 0; !_.tstrk.length || (g4movs.innerHTML = _.t1trk); };
g4Start();

 // Un-comment the following block of code to generate the
// full source code (e.g., for building a standalone web app).

/*
scrGen = src => "let " + src.match(/^dbar = [^]+?(?=\\n+ *(\\*\\/|\\/[\\/*]))/m)[0].replace(/\\b_\\.\\b| *"";?$|^\\n/gm, "").replace(/^.+/, m => m.replace(/ *=(?= *[a-z]|$)/gi, ",")).replace(/^(\\w+ =.+);(?=\\n\\w+ =)/gm, "$1,"); //
dwrap = ["<!DOCTYPE html>\\n<html lang=en>\\n<title>Tilt Maze</title>\\n<meta charset=\\"utf-8\\">\\n<meta name=viewport content=\\"width=device-width, initial-scale=1\\">\\n\\n", "\\n\\n<script type=module>\\n", "\\n</script>\\n</html>"];
respShow((dwrap[0] + g4wrap.outerHTML + dwrap[1] + scrGen(xstor["puzzle"]["tiltmaze"]) + dwrap[2]).replace(/\\n<hr>/, "").replace(/<(?=[!/?a-z])/gi, "&lt;"))
*/
//`;

const chess = `/*
__CHESS__
*A JavaScript Puzzle GUI*
*/

// &hellip; coming soon &hellip;
//`;

export {
  groupname, collection1, tiltmaze, chess
};
