/* JavaScript module */

const _module = "JSpuzzle";

const collection1 = `/*
__Puzzle Collection I: from JS Tutorial 2__
 This module option functions to render three puzzle GUIs
from the tutorial code written in the \`JScode\` module:
- SLIDING TILES
- LIGHTS OUT
- PEGS
*/

 t2x = xstor.JScode.tutorial2;
 dwraps = ["<!DOCTYPE html>\\n<html lang=en>\\n<.title>Puzzles, JS Tutorial 2</title>\\n<meta charset=\\"utf-8\\">\\n<meta name=viewport content=\\"width=device-width, initial-scale=1\\">\\n\\n", "<div id=pz1wrap>", "</div>", "\\n\\n<script type=module>", "</script>\\n</html>"];
 bodGen = src => "\\n<h3 class=cfield>Puzzles, JS Tutorial 2</h3>\\n\\n" + src.match(/^g\\dui = [^]+?(?=\\n$)/gm).map(e => e.replace(/\\bg\\dwrap\\b/g, "pz1wrap").replace(/;$|^g\\dui = /g, "").split(/;\\ng\\dui \\+= /).map(eval).join("").trim()).join("\\n\\n") + "\\n"; //
 scrGen = src => "\\n" + src.match(/^(?:jopts|lit0s|tnx) = [^]+?(?=\\n+ *(\\*\\/|\\/[\\/*])|(?![^]))/gm).map(e => "let " + e.replace(/\\b_\\.\\b| *\\/\\/ *$| *"";?$|^\\n/gm, "").replace(/^[ =\\w]+\\n/, m => m.replace(/ *=(?= *[a-z]|\\n)/gi, ",")).replace(/^( *\\b[ ,\\w]+?(?: *= .+?|))[,;]?\\n(?= *\\b[ ,\\w]+(?: *= .+|);?$)/gm, "$1,\\n  ")).join("\\n\\n") + "\\n"; //
 uiDspl = (wid, cnt) => { let ndiv = document.createElement('div'); ndiv.id = wid; ndiv.innerHTML = cnt; cmain.appendChild(ndiv); };
 g1Pset = () => { tnmls.selectedIndex = 1; tclrs.selectedIndex = 2; oshuf.checked = 1; tcols.value = trows.value = 3; };

 // pz1wrap.remove() // *Alert:* useful only if edit-testing the GUI code above
 window.g1wrap || window.pz1wrap || uiDspl("pz1wrap", "\\n<hr />" + bodGen(t2x)) || g1Pset() || !!window.jg1 && !!jg1.g1Reset || scrInj(null, 'module', scrGen(t2x)).catch(reShow)

 // Un-comment one of the following two lines of code to generate
// the full source code (e.g., for building a standalone web app).

 // reShow( dwraps[0] + dwraps[1] + bodGen(t2x) + dwraps[2] + dwraps[3] + scrGen(t2x) + dwraps[4] )
 // reShow( dwraps[0] + pz1wrap.outerHTML.replace(/\\n<hr.*?>/, "") + dwraps[3] + scrGen(t2x) + dwraps[4] )


/*
__Sliding Puzzle: Extra Features__
 reShow( JSON.stringify(jg1) )
 reShow( Object.keys(jg1) )
 window.g1pla = (jg1.m1trk || []).slice(1).concat([jg1.m1bl1]);
 jg1.g1Reset(jg1.tarr0)
 g1Rpl()
 jg1.g1Reset(0)
 g1Shf(16)

 Un-comment the following large codeblock to activate
quick-find solution tools of the 3x3 sliding puzzle.
*/


/*
 window.g1Rpl = (t=500, pl=g1pla, bk, cb=re=>re) => pl.map(rc => () => jg1.tileSli(rc, bk)).reduce((a, b) => a.then(() => new Promise(rslv => setTimeout(rslv, t))).then(b), Promise.resolve()).then(cb).catch(reShow); ""

 t0s = [[-1,-1],[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2],[3,3]];
 window.g1Shf = (cm=8, t0=200, r) => (r=d=>Math.floor(d*Math.random())) && g1Rpl( t0, Array.from(Array(cm).keys()).reduce( (a,b) => (t0 = b ? a[b-1] : 0) + 1 && a.concat( [ -1, t0==2 ? 4 : 2, t0==1 ? [3,5][r(2)] : t0==3 ? [1,5][r(2)] : [1,3][r(2)], t0==2 ? 6 : 2, t0==1 ? [5,7][r(2)] : t0==5 ? [1,7][r(2)] : [1,5][r(2)], t0==2 ? [4,6,8][r(3)] : t0==4 ? [2,6,8][r(3)] : t0==6 ? [2,4,8][r(3)] : [2,4,6][r(3)], t0==3 ? [5,9][r(2)] : t0==5 ? [3,9][r(2)] : [3,5][r(2)], t0==4 ? 8 : 4, t0==5 ? [7,9][r(2)] : t0==7 ? [5,9][r(2)] : [5,7][r(2)], t0==6 ? 8 : t0==8 ? 6 : [6,8][r(2)] ][a[b]] ), [9] ).map(m => _.t0s[m]) ); ""

 // m1gps; idx = { sol:0, beg:0, end:0 };
 n1s = ["Y1L", "Y1R", "Y3L", "Y3R", "W1L", "W1R", "W3L", "W3R", "F1L", "F1R", "F2L", "F2R", "F4L", "F4R", "F7L", "F7R", "B1L", "B1R", "B2L", "B2R", "B4L", "B4R", "B7L", "B7R", "J1L", "J1R", "J3L", "J3R", "J7L", "J7R", "J9L", "J9R", "Q1L", "Q1R", "Q3L", "Q3R", "Q7L", "Q7R", "Q9L", "Q9R", "P1L", "P1R"];
 n2s = ["S2L", "S2R", "S4L", "S4R"];
 q1s = ["DRRDLUUL", "RDDRULLU", "LDDLURRU", "DLLDRUUR", "DRDRULUL", "RDRDLULU", "LDLDRURU", "DLDLURUR", "DRDLURUL", "RDLDRULU", "DRDLURUL", "RDLDRULU", "RURDLULD", "URDRULDL", "RURDLULD", "URDRULDL", "DDRUUL", "RDDLUU", "DDRUUL", "RDDLUU", "RRULLD", "URRDLL", "RRULLD", "URRDLL", "DDRURULL", "RRDLDLUU", "LLDRDRUU", "DDLULURR", "RRULULDD", "UURDRDLL", "UULDLDRR", "LLURURDD", "DRULDRUL", "RDLURDLU", "LDRULDRU", "DLURDLUR", "RULDRULD", "URDLURDL", "ULDRULDR", "LURDLURD", "DDRRUULL", "RRDDLLUU"];
 q2s = ["LDRRDLLURRUL", "RDLLDRRULLUR", "DRUURDDLUULD", "URDDRUULDDLU"];
 x1s = [[[0,2],[2,0]], [[0,0],[2,2]], [[0,2],[2,0]], [[0,0],[2,2]], [[0,2],[1,2],[2,2]], [[0,0],[1,0],[2,0]], [[2,0],[2,1],[2,2]], [[0,0],[0,1],[0,2]], [[0,2],[1,2],[2,2]], [[0,0],[1,0],[2,0]], [[2,0],[2,1],[2,2]], [[0,0],[0,1],[0,2]], [[2,2]], [[2,0]], [[0,2]], [[0,0]], [[0,2],[1,2],[2,0],[2,1],[2,2]], [[0,0],[1,0],[2,0],[2,1],[2,2]], [[0,0],[0,1],[0,2],[1,2],[2,2]], [[0,0],[0,1],[0,2],[1,0],[2,0]], [[1,1]]].flatMap(a0 => [a0.map(a1 => a1.join()), a0.map(a1 => a1.join())]);
 ns = n1s.concat(n2s);
 qs = q1s.map(q => q.repeat(5)).concat(_.q2s.map(q => q.repeat(4)));
 m0Ent = (n,ib) => (/^[YW]/.test(n) && /6/.test(ib)) || (/^F.L/.test(n) && /[56]/.test(ib)) || (/^F.R/.test(n) && /[67]/.test(ib)) || (/^S/.test(n) && /[890]/.test(ib)) ? n.replace(/L/, "Ƚ").replace(/R/, "Ꞧ") : n; //
 ssLbl = (n,s,is,ib,ie) => ie<0 ? "??" + s : (!is ? "" : " ") + (ie>9 ? "" : "M") + ie + _.m0Ent(n, ib) + _.ssPrs(s.substring(ie), is+ie, 1); ""
 ssXtr = (iq,s,is,ib) => !s[3] || iq < 0 ? (!ib ? "" : " ") + s[0] + _.ssPrs(s.substring(1), is+1) : (ib = _.qs[iq].indexOf(s.substring(0,5))) + 1 && _.ssLbl(_.ns[iq], s, is, ib, _.qs[iq].substring(ib).split("").findIndex((e,i) => e !== s[i]));
 ssPrs = (s,is=0,y,iq0,iq1) => !s ? "" : (!s[8] || (iq0 = _.qs.slice(-4).findIndex(q => q.includes(s.substring(0,9))) + 1) + 1) && (iq1 = [7,6,5,4].reduce((a,b) => a > -1 ? a : _.qs.slice(0,-4).findIndex((q,i) => s[b-1] && (b>4 || i>31 && !s[4]) && (b>5 || i<8 || i>15 || /U.U|D.D|L.L|R.R/.test(s.substring(0,b))) && _.m1gps.slice(is, is+b+1).every(m => !_.x1s[i].includes(m.join())) && q.includes(s.substring(0,b))), -1)) + 2 && _.ssXtr(iq0 ? 41+iq0 : iq1, s, is, y);
 gpDir = (dr,dc,a) => dr<0 ? (a<0 ? "ꜛ" : a ? 4 : "U") : dr>0 ? (a<0 ? "ꜜ" : a ? 3 : "D") : dc<0 ? (a<0 ? "￩" : a ? 2 : "L") : dc>0 ? (a<0 ? "￫" : a ? 1 : "R") : "";
 window.g1SPa = (pl=g1pla, [r0,c0]=jg1.m1trk[0]||jg1.m1bl1) => (_.m1gps = [[r0,c0]].concat(pl)) && _.ssPrs( pl.map( ([r,c],i) => i ? _.gpDir(r-pl[i-1][0], c-pl[i-1][1]) : _.gpDir(r-r0, c-c0) ).join("") );

 // • &bull; &#x2022; ∅ &#x2205; └ &#x2514; Ƚ &#x23D; Ꞧ &#xA7A6; ꜛ &#xA71B; ꜜ &#xA71C; ￩ &#xFFE9; ￫ &#xFFEB; ₀ &#x2080; ₁ &#x2081; ₂ &#x2082; ₃ &#x2083; ₄ &#x2084; ₅ &#x2085; ₆ &#x2086; ₇ &#x2087; ₈ &#x2088; ₉ &#x2089; // ‣ &#x2023; … &hellip; &#x2026; Ŀ &#x13F; Ṙ &#x1E58; L&#x323; R&#x323; L&#x307; R&#x307; ← &larr; &#x2190; ↑ &uarr; &#x2191; → &rarr; &#x2192; ↓ &darr; &#x2193; ↰ &#x21B0; ↱ &#x21B1;
 window.jg1 = window.jg1 || {};
 jg1.ops = ["Y1L|1:0100|2:0101|3|4:0011|5:1011|6:1010|7|8:1100|9:0010","Y1R|1:0001|2:1100|3|4:0101|5:1110|6:0011|7|8:1010|9:1000","Y1Ƚ|1|2|3|4|5:1101|6|7|8|9","Y1Ꞧ|1|2|3|4|5:0111|6|7|8|9","Y3L|1|2:1100|3:0001|4:0011|5:1110|6:1001|7:0100|8:0110|9","Y3R|1|2:1001|3:1000|4:0110|5:0111|6:0011|7:0010|8:1100|9","Y3Ƚ|1|2|3|4|5:1011|6|7|8|9","Y3Ꞧ|1|2|3|4|5:1101|6|7|8|9","W1L|1:0100|2:0101|3|4:0011|5:1110|6:0011|7|8:1010|9:1000","W1R|1:0001|2:1100|3|4:0101|5:1011|6:1010|7|8:1100|9:0010","W1Ƚ|1|2|3|4|5:1101|6|7|8|9","W1Ꞧ|1|2|3|4|5:0111|6|7|8|9","W3L|1|2:1100|3:0001|4:0110|5:0111|6:1001|7:0010|8:1100|9","W3R|1|2:1001|3:1000|4:0011|5:1110|6:0011|7:0100|8:0110|9","W3Ƚ|1|2|3|4|5:1011|6|7|8|9","W3Ꞧ|1|2|3|4|5:1101|6|7|8|9"];
 jg1.ops.push("F1L|1:0100|2:0101|3|4:0011|5:1110|6|7:0100|8:0110|9","F1R|1:0001|2:1100|3|4:0110|5:0111|6|7:0010|8:1100|9","F1Ƚ|1|2|3|4:0011|5:1101|6|7|8|9","F1Ꞧ|1|2|3|4:0101|5:0111|6|7|8|9","F2L|1|2:1100|3:0001|4|5:1011|6:1010|7|8:1100|9:0010","F2R|1|2:1001|3:1000|4|5:1110|6:0011|7|8:1010|9:1000","F2Ƚ|1|2|3|4|5:1011|6:1001|7|8|9","F2Ꞧ|1|2|3|4|5:1101|6:0011|7|8|9","F4L|1:0100|2:1001|3:1000|4:0011|5:1101|6:0011|7|8|9","F4R|1:0001|2:1100|3:0001|4:0101|5:1011|6:1001|7|8|9","F4Ƚ|1|2:0101|3|4|5:1101|6|7|8|9","F4Ꞧ|1|2:1100|3|4|5:0111|6|7|8|9","F7L|1|2|3|4:0110|5:1011|6:1010|7:0010|8:1100|9:0010","F7R|1|2|3|4:0011|5:1110|6:0011|7:0100|8:1010|9:1000","F7Ƚ|1|2|3|4|5:0111|6|7|8:1100|9","F7Ꞧ|1|2|3|4|5:1110|6|7|8:0110|9");
 jg1.ops.push("B1L|1:0100|2:0101|3|4:0110|5:1101|6|7:0010|8:1100|9","B1R|1:0001|2:1100|3|4:0101|5:1110|6|7:0100|8:0110|9","B2L|1|2:1100|3:0001|4|5:1110|6:1001|7|8:1010|9:1000","B2R|1|2:1001|3:1000|4|5:1101|6:1010|7|8:1100|9:0010","B4L|1:0100|2:0101|3:0001|4:0011|5:1011|6:1001|7|8|9","B4R|1:0001|2:1001|3:1000|4:0101|5:0111|6:0011|7|8|9","B7L|1|2|3|4:0110|5:0111|6:0011|7:0010|8:1010|9:1000","B7R|1|2|3|4:0011|5:1011|6:1010|7:0100|8:0110|9:0010","J1L|1:0100|2:0101|3:0001|4:0110|5:1011|6:1001|7:0010|8:1100|9","J1R|1:0001|2:1001|3:1000|4:0101|5:1110|6:0011|7:0100|8:0110|9","J3L|1:0100|2:0101|3:0001|4:0011|5:1110|6:1001|7|8:1010|9:1000","J3R|1:0001|2:1001|3:1000|4:0101|5:0111|6:1010|7|8:1100|9:0010","J7L|1:0100|2:0101|3|4:0110|5:1101|6:0011|7:0010|8:1010|9:1000","J7R|1:0001|2:1100|3|4:0101|5:1011|6:1010|7:0100|8:0110|9:0010","J9L|1|2:1100|3:0001|4:0110|5:0111|6:1001|7:0010|8:1010|9:1000","J9R|1|2:1001|3:1000|4:0011|5:1101|6:1010|7:0100|8:0110|9:0010");
 jg1.ops.push("Q1L|1:0100|2:0101|3|4:0011|5:1101|6|7|8|9","Q1R|1:0001|2:1100|3|4:0101|5:0111|6|7|8|9","Q3L|1|2:1100|3:0001|4|5:1011|6:1001|7|8|9","Q3R|1|2:1001|3:1000|4|5:1101|6:0011|7|8|9","Q7L|1|2|3|4:0110|5:0111|6|7:0010|8:1100|9","Q7R|1|2|3|4:0011|5:1110|6|7:0100|8:0110|9","Q9L|1|2|3|4|5:1110|6:0011|7|8:1010|9:1000","Q9R|1|2|3|4|5:1011|6:1010|7|8:1100|9:0010","P1L|1:0100|2:0101|3:0001|4:0110|5|6:1001|7:0010|8:1010|9:1000","P1R|1:0001|2:1001|3:1000|4:0101|5|6:1010|7:0100|8:0110|9:0010","S2L|1:0100|2:0101|3:0001|4:0011|5:1011|6:1010|7:0100|8:0110|9:0010","S2R|1:0001|2:1001|3:1000|4:0110|5:0111|6:0011|7:0010|8:1010|9:1000","S2Ƚ|1|2|3|4:0011|5:1011|6:1001|7|8|9","S2Ꞧ|1|2|3|4:0101|5:0111|6:0011|7|8|9","S4L|1:0100|2:1001|3:1000|4:0110|5:1101|6:1010|7:0010|8:1100|9:0010","S4R|1:0001|2:1100|3:0001|4:0101|5:1110|6:1001|7:0100|8:1010|9:1000","S4Ƚ|1|2:0101|3|4|5:1101|6|7|8:1100|9","S4Ꞧ|1|2:1100|3|4|5:1110|6|7|8:0110|9");
 jg1.ops.push("D+M6F1R|1:0100|2|3|4|5|6|7|8|9","R+M6F4L|1:0001|2|3|4|5|6|7|8|9","D+M5B4L|1|2:1100|3|4|5|6|7|8|9","D+M5B4R|1|2:1100|3|4|5|6|7|8|9","D+M6F2L|1|2|3:1000|4|5|6|7|8|9","L+M6F4Ƚ|1|2|3:0001|4|5|6|7|8|9","R+M5B1L|1|2|3|4:0011|5|6|7|8|9","R+M5B1R|1|2|3|4:0011|5|6|7|8|9","L+M5B2L|1|2|3|4|5|6:0011|7|8|9","L+M5B2R|1|2|3|4|5|6:0011|7|8|9","U+M6F1Ꞧ|1|2|3|4|5|6|7:0100|8|9","R+M6F7R|1|2|3|4|5|6|7:0010|8|9","U+M5B7L|1|2|3|4|5|6|7|8:1100|9","U+M5B7R|1|2|3|4|5|6|7|8:1100|9","U+M6F2Ƚ|1|2|3|4|5|6|7|8|9:1000","L+M6F7Ꞧ|1|2|3|4|5|6|7|8|9:0010");
 jg1.ops = jg1.ops.map(s => s.split(/\\|\\d:?/).map((t,i) => !i ? t : !t ? [0] : ("1"+t).split("").map(b => +b)));
 ops1 = "\\n<optgroup label=\\"Log Mgr\\">\\n<option>Rwd 1 Lvl</option>\\n<option>Retry 1 Lvl</option>\\n<option>Retry New</option>\\n</optgroup>\\n<optgroup label=\\"Replay\\">\\n<option>Play 1 Lvl</option>\\n<option>Play Full</option>\\n</optgroup>\\n";
 g1ui = "<style>\\n.textarea { background-color: white; border-color: #dbdbdb; border-radius: 4px; display: block; max-width: 100%; min-width: 100%; padding: calc(0.75em - 1px); resize: vertical; }\\n#g1patt { color: Grey; font-size: x-small; }\\n</style>";
 g1ui += "<label class=ccntr><input type=\\"button\\" value=\\"∅\\" onclick=\\"jg1.c1Zer2()\\"></label><label class=ccntr><select id=opats oninput=jg1.paEx0()><option>...</option>" + _.ops1;
 g1ui += "</select></label><label class=ccntr><input type=button value=\\"-\\" onclick=\\"jg1.paRvr()\\" /></label><label class=ccntr><input type=button value=\\"+\\" onclick=\\"jg1.paFwd()\\" /></label><label class=ccntr><span id=g1patt></span></label>";
 g1ui += "\\n<div class=cfield><textarea id=g1txta class=textarea rows=5></textarea></div>\\n";
 g1cp2.innerHTML = g1ui;

 // jg1.stps = []; jg1.pats = []; jg1.seqs = []; jg1.sca0 = jg1.sca1 = "";
 subs = ["₀", "₁", "₂", "₃", "₄", "₅", "₆", "₇", "₈", "₉"];
 dsan = [{}, {R:2, D:4}, {R:3, L:1, D:5}, {L:2, D:6}, {R:5, D:7, U:1}, {R:6, L:4, D:8, U:2}, {L:5, D:9, U:3}, {R:8, U:4}, {R:9, L:7, U:5}, {L:8, U:6}];
 q2ANu = (iq,s0) => _.q1s.concat(_.q2s)[iq].split("").slice(0, -1).reduce((a,b) => a.concat(_.dsan[a[a.length-1]][b]), [s0]);
 jg1.g1Sim = (qa,a2,e0,ie) => (ie=qa.findIndex((p,i) => (e0||i>5) && a2[p]==9)+1) && qa.push(...qa.slice(), qa[0]) && [qa.slice(ie, ie+5), [qa[ie+5]], [qa[ie+6]]].map((c,i) => !c.forEach((p,j) => [a2[qa[ie + (!i ? j : i<2 ? 5 : 6) - 1]], a2[p]] = [a2[p], 9]) && a2.slice());
 jg1.afSco = afs => Array.isArray((afs||0)[0]) && Math.min(...afs.map(af => af.map(g => _.t0s[g])).map(ax => ax.reduce((a,[r,c],i) => !i || [r,c]=="2,2" ? a : a + Math.abs(r-_.t0s[i][0]) + Math.abs(c-_.t0s[i][1]), 0)));
 jg1.osRat = (oa,os=opats.options,a1f=jg1.tarr1.flat()) => (oa=Array.from(os).map(o => o.value)) && (oa.length>50 || oa.splice(-2, 2)) && a1f.splice(a1f.findIndex(g => !g), 1, 9) && a1f.unshift(0) && (jg1.sca1=(""+jg1.afSco([a1f])).split("").map(u => _.subs[u]).join("")) && (jg1.sca0 || (jg1.sca0=jg1.sca1)) && !oa.forEach((op,i) => { if (i<6) return; let sc, e0=!/[ȽꞦ]/.test(op), no=op.replace(/ .+$|^.\\+../g, "").replace(/Ƚ/, "L").replace(/Ꞧ/, "R"), iq=_.ns.findIndex(n => n==no), s0=+/\\d/.exec(no); (sc=jg1.afSco(jg1.g1Sim(_.q2ANu(iq,s0), a1f.slice(), e0)))<16 && (os[i].innerText += " " + (""+sc).split("").map(u => _.subs[u]).join("")); }); ""
 o0Upd = (kz,lm,m2) => "<option>" + (!lm ? "..." : "[" + m2[lm-kz] + "]") + (!kz ? "" : _.gpDir(m2[lm-kz+1][0]-m2[lm-kz][0], m2[lm-kz+1][1]-m2[lm-kz][1], -1) + ".." + _.gpDir(m2[lm][0]-m2[lm-1][0], m2[lm][1]-m2[lm-1][1], -1) + "[" + m2[lm] + "]") + "</option>";
 lgUpd = (ks,j,a2,a3,fn) => (fn=c=>c.substring(j).split(/\\s/)) && g1txta.value.replace(/((?:[^]+\\n|)( *).+\\n|^)( *)(.*)$/, (m,c1,c2,c3,c4) => (j=c4==3||c4!=2&&(c2||"").length>(c3||"").length)+1 && (c1 + "└ " + jg1.pats.map((p,i) => !/\\d/.test(p) ? p : (ks[i]>9 ? "" : "M")+ks[i]+p).join(" "))).replace(/([^]*\\n)(.*\\n)(.*)$/m, (m,c1,c2,c3) => !j && c3.length+2>(j=c2.split("").findIndex(e => e!=" ")+2) && (a2=fn(c2)) && (a3=fn(c3)) && (j+=a2.slice(0, a2.findIndex((e,i) => e!=a3[i])).join(" ").length||-1) && (c1 + c2 + " ".repeat(j-1) + "└ " + c3.substring(j+1)) || m.replace(/^ *└ *\\n(?=.)/gm, "")); //
 paOps = (f,da,ib,kz,lm,ks=jg1.stps,b1=jg1.m1bl1,m1=jg1.m1trk,fin=""+jg1.tarr1==jg1.unsh) => (kz=(lm=m1.length) && ks[ks.length-1])+1 && (da=!lm ? 0 : _.gpDir(b1[0]-m1[lm-1][0], b1[1]-m1[lm-1][1], 1))+1 && (ib=_.t0s.findIndex(x => ""+x==b1)) && (opats.innerHTML = _.o0Upd(kz, lm, m1.concat([b1])) + _.ops1 + "<optgroup label=\\"Standard\\">\\n" + [jg1.ops.slice(0, 48), jg1.ops.slice(48)].map(gr => gr.filter(o => o[ib][da]).map(o => "<option>" + o[0] + "</option>").join("\\n")).join("\\n</optgroup>\\n<optgroup label=\\"Extended\\">\\n") + "\\n</optgroup>") && (f || fin || jg1.osRat()) && (g1patt.textContent = !lm ? "" : g1SPa(m1.slice(1).concat([b1])))+1 && (g1txta.value = _.lgUpd(ks) + (!lm ? "" : fin ? " ("+lm+")" : " "+jg1.sca1));
 jg1.c1Zer2 = f => jg1.c1Zero() && (jg1.stps=[]) && (jg1.pats=[]) && (jg1.seqs=[]) && !(jg1.sca0=jg1.sca1="") && _.paOps(f) && (f || (g1txta.value = "•" + JSON.stringify(jg1.tarr0) + (!jg1.sca0 ? "" : " "+jg1.sca0) + "\\n└ "));
 m1Fwd = (d,l,ks=jg1.stps,ps=jg1.pats) => !(l=ks.length) || /\\d/.test(ps[l-1]) ? ks.push(1) && ps.push(d) && jg1.seqs.push("") : ks[l-1]++ && (ps[l-1]+=d);
 jg1.tileSli = ([rx, cx], bkup, bl) => !(bl = [[rx - 1, cx], [rx + 1, cx], [rx, cx - 1], [rx, cx + 1]].find(([r, c]) => (jg1.tarr1[r] || "")[c] === 0)) || (bkup || jg1.m1trk.push(bl)) && (jg1.m1bl1 = [rx, cx]) && ([jg1.tarr1[bl[0]][bl[1]], jg1.tarr1[rx][cx]] = [jg1.tarr1[rx][cx], 0]) && (g1movs.innerHTML = "" + jg1.tarr1 !== "" + jg1.unsh ? jg1.m1trk.length + " moves" : "<em>Puzzle solved in " + jg1.m1trk.length + " moves!</em>") && jg1.gbdGen() && (/[01]/.test(bkup) || _.m1Fwd(_.gpDir(rx-bl[0], cx-bl[1])) && _.paOps());
 gpXrc = ([r,c],d) => d=="U" ? [r-1,c] : d=="D" ? [r+1,c] : d=="L" ? [r,c-1] : d=="R" ? [r,c+1] : [r,c];
 paExe = (k1=5,op=opats.value,cb,d1,e0,ie,iq,no,qx,t0,ks=jg1.stps,ps=jg1.pats,xs=jg1.seqs,b1=jg1.m1bl1) => ((d1=(/^\\w(?=\\+)/.exec(op)||[0])[0]) && (b1=_.gpXrc(b1, d1))||1) && (e0=!/[ȽꞦ]/.test(op))+1 && (no=(op=op.replace(/ .+$|^.\\+../g, "")).replace(/Ƚ/, "L").replace(/Ꞧ/, "R")) && (iq=_.ns.findIndex(n => n==no))+1 && (t0=_.t0s[+/\\d/.exec(no)]) && (qx=_.q1s.concat(_.q2s)[iq].split("").slice(0, -1).reduce((a,b) => a.concat([_.gpXrc(a[a.length-1], b)]), [t0])) && (ie=qx.findIndex((x,i) => (e0||i>4) && ""+x==b1)+1) && qx.push(...qx.slice(0, ie)) && qx.splice(0, ie) && (!d1 || ks.push(1) && ps.push(d1) && xs.push("")) && ks.push(!d1 ? k1 : 6) && ps.push(op) && xs.push(qx.concat(qx,qx,qx,qx)) && g1Rpl(500, (!d1 ? [] : [b1]).concat(xs[xs.length-1].slice(0, !d1 ? k1 : 6)), 0, () => _.paOps(cb) && (!cb || cb())); //
 plRSt = () => (jg1.tarr1 = JSON.parse(JSON.stringify(jg1.tarr0))) && jg1.c1Zer2(1) && jg1.gbdGen();
 fuPla = (t=500,ks,tp) => (tp=/^[ •]*(\\[[\\d,\\[\\]]+)[ ₀-₉]*\\n(?:[^]*\\n|)([ └]*)(.*?)(?: \\(\\d+\\)|)$/.exec(g1txta.value)) && (tp[1]!=JSON.stringify(jg1.tarr0) ? !tp[2][2] && !jg1.g1Reset(JSON.parse(tp[1])) && jg1.c1Zer2(1) : !tp[2][2] || ks[0] && (tp[3] = jg1.pats.map((p,i) => !/\\d/.test(p) ? p : (ks[i]>9 ? "" : "M")+ks[i]+p).join(" "))) && _.plRSt() && tp[3].replace(/\\b[DLRU]+\\b/g, m => m.split("").join(" ")).split(/ /).reduce((a,b) => a.then(() => new Promise(rslv => setTimeout(() => !b[1] ? rslv(jg1.tileSli(_.gpXrc(jg1.m1bl1, b))) : _.paExe(+/\\d+/.exec(b), b.replace(/^../, ""), rslv), t))), Promise.resolve()).catch(reShow); //
 jg1.paEx0 = (l,k1,p1,io=opats.selectedIndex,ks=jg1.stps) => io>5 ? _.paExe() : io==5 ? _.fuPla(1000, ks) : io && (l=ks.length) && (io==3 ? (g1txta.value+="\\n3") && _.plRSt() : !Array(ks[l-1]).keys().forEach(jg1.m1Rvrs) && (k1=ks.pop()||1) && (p1=jg1.pats.pop()||1) && (jg1.seqs.pop()||1) && (io!=2 || (g1txta.value+="\\n2")) && (io>2 || _.paOps()) && io==4 && (/\\d/.test(p1) ? _.paExe(k1, p1) : g1Rpl(500, p1.split("").reduce((a,b) => a.concat([_.gpXrc(a[a.length-1], b)]), [jg1.m1bl1]))));
 jg1.paRvr = (l,ks=jg1.stps,ps=jg1.pats) => (l=ks.length) && (ks[l-1]-1 ? ks[l-1]-- && (/\\d/.test(ps[l-1]) || (ps[l-1]=ps[l-1].replace(/.$/, ""))) : (ks.pop()||1) && (ps.pop()||1) && (jg1.seqs.pop()||1)) && (jg1.m1Rvrs()||1) && _.paOps();
 jg1.paFwd = (l,ks=jg1.stps,xs=jg1.seqs) => (l=ks.length) && /\\d/.test(jg1.pats[l-1]) && ks[l-1]++ && jg1.tileSli(xs[l-1][ks[l-1]-1], 0) && _.paOps();
 
*/`;

const tiltmaze = `// __TILT MAZE__
// *A JavaScript Puzzle GUI*

g4ui = "\\n<style>\\n*, *::before, *::after { box-sizing: inherit; }";
g4ui += "\\nhtml { box-sizing: border-box; color: DimGrey; /* font-size: 14px; */ min-width: 375px; overflow-wrap: break-word; }";
g4ui += "\\nbutton, input, select { margin: 0; }\\nhr { margin: 1.5rem 0; }";
g4ui += "\\n#g4wrap { font: normal 1rem Helvetica, Arial, sans-serif; max-width: 720px; margin: 24px 0; }";
g4ui += "\\n#g4wrap button, #g4wrap .btn1, #g4wrap input:not([type=checkbox]):not([type=radio]), #g4wrap select { background: #f8f8f8; color: Grey; font-size: calc(5rem / 6); line-height: 1.5rem; height: 1.5rem; padding: 0 0.5rem; border: 0; border-radius: 0; }";
g4ui += "\\n#g4wrap select:not(.anone) { padding: 0 0.25rem; }";
g4ui += "\\n#g4wrap .cfield { max-width: 359px; }";
g4ui += "\\n#g4wrap .cfield:not(:last-child) { margin-bottom: 0.5rem; }";
g4ui += "\\n#g4wrap .ccntr:not(:last-of-type) { margin-right: 0.5rem; }";
g4ui += "\\n#g4wrap :not(.cfield)>.ccntr { display: inline-block; height: 1.5rem; margin-bottom: 0.5rem; }";
g4ui += "\\n#g4board { margin: 16px; }";
g4ui += "\\n#g4board>canvas { border: 8px solid Tan; background: radial-gradient(White, #ffeccc 80%, #e2cfb6); }";
g4ui += "\\n#g4scor { position: relative; top: -12px; font-size: small; margin-left: 16px; }";
g4ui += "\\n#g4movs { font-weight: bold; }";
g4ui += "\\n</style>\\n<hr />\\n<h4 class=cfield>Tilt Maze</h4>";
g4ui += "\\n<div class=cfield><em>Objective:</em> Guide the ball to the&nbsp;target(s).</div>";
g4ui += "\\n<div class=cfield><em>Tip:</em> This is a logic puzzle&mdash;not a test of skill with eye&#x2011;hand&nbsp;coordination.</div>";
g4ui += "\\n<div>\\n<span class=ccntr><select id=mpatt>\\n<option disabled>Maze Pattern</option>\\n";
g4ui += ["Level I (single)", "Level II (single)", "Level III (single)", "Level IV (single)", "Level V (single)", "Level VI (single)", "Level VII (multi)", "Level VIII (multi)", "Level IX (multi)", "Level X (multi)", "Level XI (multi)"].map(e => "<option>" + e + "</option>").join("\\n");
g4ui += "\\n</select></span><span class=ccntr><select id=gscrg>";
g4ui += "\\n<option disabled>Game Scoring</option>\\n<option selected>reset counter</option>\\n<option>add up total</option>";
g4ui += "\\n</select></span><span class=ccntr><input type=button value=\\"&orarr; NEW MAZE\\" onclick=jg4.g4Start() /></span>\\n</div>";
g4ui += "\\n<div id=g4board></div>";
g4ui += "\\n<div id=g4scor class=cfield>Score: <span id=g4movs>0</span></div>";
g4ui += "\\n<div class=cfield align=center><span class=ccntr><button onclick=jg4.pcMove(3)>&ltrif; LEFT</button></span><span class=ccntr><button onclick=jg4.pcMove(1)>&utrif; TOP</button></span><span class=ccntr><button onclick=jg4.pcMove(4)>RIGHT &rtrif;</button></span></div>";
g4ui += "\\n<div class=cfield align=center><span class=ccntr><button onclick=jg4.pcMove(2)>BOTTOM &dtrif;</button></span></div>\\n";

 // g4wrap.remove() // *Alert:* useful only if edit-testing the GUI code above
 try { g4wrap && (g4board.innerHTML = "") } catch { ndiv = document.createElement('div'); ndiv.id = "g4wrap"; ndiv.innerHTML = g4ui; cmain.appendChild(ndiv); }

dbar = gball = midx = tstrk = t0trk = "";
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

window.jg4 = {};
jg4.g4Start = () => { _.tstrk = Object.assign([], _.g4trgs[_.midx = mpatt.selectedIndex]); _.gball = new _.compnX("SlateGrey", ... _.g4blls[_.midx]); _.g4view.context ? _.g4view.clear() : _.g4view.start(); _.tstrk.map( ([x, y]) => [15, 10, 5].map( (r, i) =>  new _.compnX(i % 2 == 0 ? "LightSalmon" : "LightYellow", x - r, y - r, 0, 0, r) )) .flat().forEach(c => c.pcDrw()); _.g4sets[_.midx].map(e => new _.compnX("Tan", ...e)).forEach(c => c.pcDrw()); _.t0trk = _.dbar = 0; g4movs.innerHTML = (_.t1trk = gscrg.selectedIndex == 1 ? 0 : _.t1trk); };
jg4.pcMove = d => { d == 1 ? _.gball.ysp = -3 : d == 2 ? _.gball.ysp = 3 : d == 3 ? _.gball.xsp = -3 : d == 4 ? _.gball.xsp = 3 : 0; !_.tstrk.length || (g4movs.innerHTML = _.t1trk); };
jg4.g4Start();

 // Un-comment the following block of code to generate the
// full source code (e.g., for building a standalone web app).

/*
 scrGen = src => "\\nlet " + src.match(/^dbar = [^]+?(?=\\n+ *(\\*\\/|\\/[\\/*])|(?![^]))/m)[0].replace(/\\b_\\.\\b| *\\/\\/ *$| *"";?$|^\\n/gm, "").replace(/^[ =\\w]+\\n/, m => m.replace(/ *=(?= *[a-z]|\\n)/gi, ",")).replace(/^( *\\b[ ,\\w]+?(?: *= .+?|))[,;]?\\n(?= *\\b[ ,\\w]+(?: *= .+|);?$)/gm, "$1,\\n  ") + "\\n"; //
 dwraps = ["<!DOCTYPE html>\\n<html lang=en>\\n<title>Tilt Maze</title>\\n<meta charset=\\"utf-8\\">\\n<meta name=viewport content=\\"width=device-width, initial-scale=1\\">\\n\\n", "\\n\\n<script type=module>", "</script>\\n</html>"];
 reShow( dwraps[0] + g4wrap.outerHTML.replace(/\\n<hr.*?>|<canvas[^]*?<\\/canvas>/g, "") + dwraps[1] + scrGen(xstor.JSpuzzle.tiltmaze) + dwraps[2] )
*/
//`;

const chess = `/*
__CHESS__
*A JavaScript Puzzle GUI*

 Coming soon …
*/
//`;

export {
  _module, collection1, tiltmaze, chess
};
