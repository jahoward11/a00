/* JavaScript module */

const _module = "t2puzls";

const jg1setup = "// __JS Puzzle Collection #1: Code, Helps__\n\n t2x = xstor.JScode.tutorial2;\n dwraps = [\"<!DOCTYPE html>\\n<html lang=en>\\n<.title>Puzzles, JS Tutorial 2</title>\\n<meta charset=\\\"utf-8\\\">\\n<meta name=viewport content=\\\"width=device-width, initial-scale=1\\\">\\n\\n\", \"<div id=pz1wrap>\", \"</div>\", \"\\n\\n<script type=module>\", \"</script>\\n</html>\"];\n bodGen = src => \"\\n<h3 class=cfield>Puzzles, JS Tutorial 2</h3>\\n\\n\" + src.match(/^g\\dui = [^]+?(?=\\n$)/gm).map(e => e.replace(/\\bg\\dwrap\\b/g, \"pz1wrap\").replace(/;$|^g\\dui = /g, \"\").split(/;\\ng\\dui \\+= /).map(eval).join(\"\").trim()).join(\"\\n\\n\") + \"\\n\"; //\n scrGen = src => \"\\n\" + src.match(/^(?:jopts|lit0s|tnx) = [^]+?(?=\\n+ *(\\*\\/|\\/[\\/*])|(?![^]))/gm).map(e => \"let \" + e.replace(/\\b_\\.\\b| *\\/\\/ *$| *\"\";?$|^\\n/gm, \"\").replace(/^[ =\\w]+\\n/, m => m.replace(/ *=(?= *[a-z]|\\n)/gi, \",\")).replace(/^( *\\b[ ,\\w]+?(?: *= .+?|))[,;]?\\n(?= *\\b[ ,\\w]+(?: *= .+|);?$)/gm, \"$1,\\n  \")).join(\"\\n\\n\") + \"\\n\"; //\n uiDspl = (wid, cnt) => { let ndiv = document.createElement('div'); ndiv.id = wid; ndiv.innerHTML = cnt; cmain.appendChild(ndiv); };\n g1Pset = () => { tnmls.selectedIndex = 1; tclrs.selectedIndex = 2; oshuf.checked = 1; tcols.value = trows.value = 3; };\n\n // pz1wrap.remove() // *Alert:* useful only if edit-testing the GUI code above\n window.g1wrap || window.pz1wrap || uiDspl(\"pz1wrap\", \"\\n<hr />\" + bodGen(t2x)) || g1Pset() || !!window.jg1 && !!jg1.g1Reset || scrInj(null, 'module', scrGen(t2x)).catch(reShow)\n\n // reShow( dwraps[0] + dwraps[1] + bodGen(t2x) + dwraps[2] + dwraps[3] + scrGen(t2x) + dwraps[4] )\n // reShow( dwraps[0] + pz1wrap.outerHTML.replace(/\\n<hr.*?>/, \"\") + dwraps[3] + scrGen(t2x) + dwraps[4] )\n\n window.jg1 = window.jg1 || {};\n window.g1pla = JSON.parse(JSON.stringify(jg1.m1trk || [])).slice(1).concat([jg1.m1bl0]);\n window.g1Rpl = (t = 500, p = g1pla) => p.map(([r, c]) => () => jg1.tileSli(r, c)).reduce((a, b) => a.then(() => new Promise(rslv => setTimeout(rslv, t))).then(b), Promise.resolve()).catch(reShow);\n\n // reShow( JSON.stringify(jg1) )\n reShow( \"jg1.g1Reset(\" + JSON.stringify(jg1.tarr0) + \",\" + tcols.value + \",\" + tclrs.selectedIndex + \",\" + tnmls.selectedIndex + \")\" ) // jg1.tarr0.length\n reShow( \"/\\x2f \" + g1pla.length + \"; window.g1pla = \" + JSON.stringify(g1pla) + \";\" )\n reShow( \"\\\"jg1play3x00\\\": \\\"/\\x2f\\\\n jg1.g1Reset(\" + JSON.stringify(jg1.tarr0) + \",\" + tcols.value + \",\" + tclrs.selectedIndex + \",\" + tnmls.selectedIndex + \")\\\\n /\\x2f partial/complete game\\\\n /\\x2f \" + g1pla.length + \"; window.g1pla = \" + JSON.stringify(g1pla) + \";\\\\n /\\x2f g1Rpl()\\\"\" )\n\n // jg1.g1Reset(jg1.tarr0)\n // g1Rpl()\n//";

const jg1reference = "// __Sliding-Tiles Reference__\n\n\n/*\n__*Solution Patterns: 3x3 Puzzle*__\n ____ | wall line1seq line2seq e.g.\n\n SC   | Side  Ctr:ACB/CAB      20c, 24b, 26, 28b, 30b\n SCL  | Side  Ctr:A     Lt:BC  22b\n SC2L | Side  Ctr:BA    Lt:C   22d\n SCR  | Side  Ctr:C     Rt:BA  22c\n SC2R | Side  Ctr:BC    Rt:A   26c\n\n SL   | Side   Lt:ABC          25b\n SLR  | Side   Lt:C     Rt:BA  23b, 26b, 27, 28, 30, 30b\n SLC  | Side   Lt:C    Ctr:AB  24f\n SL2C | Side   Lt:AC   Ctr:B   23, 24\n\n SR   | Side   Rt:CBA          22e\n SRL  | Side   Rt:A     Lt:BC  24e\n SRC  | Side   Rt:A    Ctr:CB  20b\n SR2C | Side   Rt:CA   Ctr:B   24d\n\n TC   | Top   Ctr:ACB/CAB      21, 24c, 25, 29b (30b)\n TCR  | Top   Ctr:A     Rt:BC  24c\n TC2R | Top   Ctr:BA    Rt:C   24f\n TCL  | Top   Ctr:C     Lt:BA  23c, 29 (30)\n TC2L | Top   Ctr:BC    Lt:A   28c\n\n TR   | Top    Rt:ABC          22e\n TRL  | Top    Rt:C     Lt:BA  29b (30b)\n TRC  | Top    Rt:C    Ctr:AB  19\n TR2C | Top    Rt:AC   Ctr:B   23e\n\n TL   | Top    Lt:CBA          22d, 23d, 25c\n TLR  | Top    Lt:A     Rt:BC  20c\n TLC  | Top    Lt:A    Ctr:CB  22\n TL2C | Top    Lt:CA   Ctr:B   20, 22d\n\n\n__*Solution-Space Complexities*__\n __Q:__ If at every second you viewed a new tile \narrangement, how much time would it take you to \nsee every possibility (i.e., all permutations)?\n*/\n\n // # hrs to view all __3x3__ permutations \n 180000 / 60 / 60\n\n // # yrs to view all __4x4__ permutations \n Math.round( 10.45e+9 / 60 / 60 / 24 / 365 )\n\n // # yrs to view all __5x5__ permutations\n ( 7.75e+24 / 60 / 60 / 24 / 365 ).toExponential(2) // / 1e+15 // # quad'n yrs\n\n/*\n __Q:__ If at every second a trillion computers each\nplayed a new game of chess to the end, how much\ntime would it take these computers to play every\npossible game (i.e., all game-tree permutations)?\n*/\n\n // # yrs to play all playable chess games\n ( 1e+120 / 60 / 60 / 24 / 365 / 1e+12 ).toExponential(2)\n\n/*\n __Q:__ How many years more will our sun burn on?\n __A:__ 5 x 10^9^ (five billion years)\n*/\n 5e+9\n\n/*\n __Q:__ How many atoms are in the known universe?\n __A:__ 1 x 10^81^\n*/\n 1e+81\n//";

const jg1play3x19 = "//\n jg1.g1Reset([[4,0,8],[1,5,3],[7,2,6]],3,2,1)\n // complete game; TRC\n // 19; window.g1pla = [[0,2],[1,2],[1,1],[1,0],[0,0],[0,1],[1,1],[2,1],[2,0],[1,0],[0,0],[0,1],[1,1],[1,0],[2,0],[2,1],[1,1],[1,2],[2,2]];\n // g1Rpl()";

const jg1play3x20 = "//\n jg1.g1Reset([[3,2,0],[1,5,8],[6,4,7]],3,2,1)\n // complete game; TL2C\n // 20; window.g1pla = [[1,2],[1,1],[0,1],[0,0],[1,0],[2,0],[2,1],[2,2],[1,2],[0,2],[0,1],[1,1],[1,0],[2,0],[2,1],[2,2],[1,2],[1,1],[2,1],[2,2]];\n // g1Rpl()";

const jg1play3x20b = "//\n jg1.g1Reset([[1,8,0],[6,7,2],[5,3,4]],3,2,1)\n // complete game; SRC\n // 20; window.g1pla = [[1,2],[2,2],[2,1],[2,0],[1,0],[1,1],[1,2],[2,2],[2,1],[2,0],[1,0],[1,1],[0,1],[0,2],[1,2],[2,2],[2,1],[1,1],[1,2],[2,2]];\n // g1Rpl()";

const jg1play3x20c = "//\n jg1.g1Reset([[6,7,2],[5,1,8],[0,3,4]],3,2,1)\n // complete game; SC, TLR (2 top solutions)\n // 20; window.g1pla = [[1,0],[1,1],[0,1],[0,0],[1,0],[1,1],[2,1],[2,2],[1,2],[1,1],[2,1],[2,0],[1,0],[1,1],[0,1],[0,2],[1,2],[1,1],[2,1],[2,2]];\n // 20; window.g1pla = [[1,0],[1,1],[0,1],[0,0],[1,0],[1,1],[2,1],[2,2],[1,2],[1,1],[0,1],[0,2],[1,2],[1,1],[2,1],[2,0],[1,0],[1,1],[2,1],[2,2]];\n // g1Rpl()";

const jg1play3x21 = "//\n jg1.g1Reset([[7,0,4],[5,3,6],[8,1,2]],3,2,1)\n // complete game; TC\n // 21; window.g1pla = [[1,1],[2,1],[2,2],[1,2],[0,2],[0,1],[1,1],[2,1],[2,0],[1,0],[0,0],[0,1],[1,1],[1,2],[2,2],[2,1],[2,0],[1,0],[1,1],[2,1],[2,2]];\n // g1Rpl()";

const jg1play3x22 = "//\n jg1.g1Reset([[6,8,0],[1,2,3],[7,5,4]],3,2,1)\n // complete game; TLC\n // 22; window.g1pla = [[0,1],[0,0],[1,0],[2,0],[2,1],[1,1],[1,2],[0,2],[0,1],[1,1],[2,1],[2,2],[1,2],[0,2],[0,1],[1,1],[2,1],[2,0],[1,0],[1,1],[2,1],[2,2]];\n // g1Rpl()";

const jg1play3x22b = "//\n jg1.g1Reset([[1,7,5],[2,0,6],[3,4,8]],3,2,1)\n // complete game; SCL\n // 22; window.g1pla = [[0,1],[0,0],[1,0],[2,0],[2,1],[1,1],[0,1],[0,0],[1,0],[1,1],[0,1],[0,0],[1,0],[2,0],[2,1],[2,2],[1,2],[0,2],[0,1],[1,1],[1,2],[2,2]];\n // g1Rpl()";

const jg1play3x22c = "//\n jg1.g1Reset([[0,2,5],[7,4,8],[6,3,1]],3,2,1)\n // complete game; SCR\n // 22; window.g1pla = [[0,1],[1,1],[2,1],[2,0],[1,0],[0,0],[0,1],[1,1],[1,2],[2,2],[2,1],[1,1],[1,2],[0,2],[0,1],[1,1],[1,0],[0,0],[0,1],[1,1],[1,2],[2,2]];\n // g1Rpl()";

const jg1play3x22d = "//\n jg1.g1Reset([[3,6,8],[4,1,7],[5,2,0]],3,2,1)\n // complete game; SC2L, TL, TL2C (3 top solutions)\n // 22; window.g1pla = [[2,1],[2,0],[1,0],[1,1],[1,2],[2,2],[2,1],[1,1],[1,2],[0,2],[0,1],[0,0],[1,0],[2,0],[2,1],[2,2],[1,2],[0,2],[0,1],[1,1],[2,1],[2,2]];\n // 22; window.g1pla = [[1,2],[1,1],[2,1],[2,0],[1,0],[1,1],[1,2],[0,2],[0,1],[0,0],[1,0],[1,1],[2,1],[2,2],[1,2],[0,2],[0,1],[0,0],[1,0],[2,0],[2,1],[2,2]];\n // 22; window.g1pla = [[2,1],[2,0],[1,0],[1,1],[2,1],[2,2],[1,2],[0,2],[0,1],[0,0],[1,0],[1,1],[2,1],[2,2],[1,2],[0,2],[0,1],[1,1],[1,0],[2,0],[2,1],[2,2]];\n // g1Rpl()";

const jg1play3x22e = "//\n jg1.g1Reset([[7,3,1],[5,4,6],[0,2,8]],3,2,1)\n // complete game; SR, TR (2 top solutions)\n // 22; window.g1pla = [[1,0],[0,0],[0,1],[1,1],[2,1],[2,0],[1,0],[0,0],[0,1],[0,2],[1,2],[1,1],[1,0],[0,0],[0,1],[1,1],[1,2],[0,2],[0,1],[1,1],[2,1],[2,2]];\n // 22; window.g1pla = [[1,0],[1,1],[2,1],[2,2],[1,2],[1,1],[0,1],[0,2],[1,2],[1,1],[1,0],[0,0],[0,1],[0,2],[1,2],[2,2],[2,1],[2,0],[1,0],[1,1],[2,1],[2,2]];\n // g1Rpl()";

const jg1play3x23 = "//\n jg1.g1Reset([[8,4,2],[3,5,0],[6,1,7]],3,2,1)\n // complete game; SL2C\n // 23; window.g1pla = [[1,1],[1,0],[2,0],[2,1],[2,2],[1,2],[1,1],[1,0],[2,0],[2,1],[1,1],[0,1],[0,0],[1,0],[1,1],[0,1],[0,2],[1,2],[2,2],[2,1],[1,1],[1,2],[2,2]];\n // g1Rpl()";

const jg1play3x23b = "//\n jg1.g1Reset([[8,0,2],[7,4,3],[5,6,1]],3,2,1)\n // complete game; SLR\n // 23; window.g1pla = [[1,1],[1,0],[0,0],[0,1],[0,2],[1,2],[2,2],[2,1],[1,1],[1,2],[0,2],[0,1],[1,1],[1,0],[2,0],[2,1],[1,1],[1,0],[0,0],[0,1],[0,2],[1,2],[2,2]];\n // 25; window.g1pla = [[0,2],[1,2],[2,2],[2,1],[2,0],[1,0],[1,1],[1,2],[0,2],[0,1],[1,1],[2,1],[2,0],[1,0],[0,0],[0,1],[0,2],[1,2],[1,1],[1,0],[2,0],[2,1],[1,1],[1,2],[2,2]];\n // g1Rpl()";

const jg1play3x23c = "//\n jg1.g1Reset([[2,3,1],[8,5,7],[6,0,4]],3,2,1)\n // complete game; TCL, TCL (2 top solutions)\n // 23; window.g1pla = [[1,1],[1,2],[0,2],[0,1],[1,1],[1,2],[2,2],[2,1],[2,0],[1,0],[1,1],[0,1],[0,0],[1,0],[1,1],[1,2],[2,2],[2,1],[2,0],[1,0],[1,1],[1,2],[2,2]];\n // 23; window.g1pla = [[1,1],[1,2],[2,2],[2,1],[2,0],[1,0],[1,1],[1,2],[0,2],[0,1],[1,1],[1,2],[2,2],[2,1],[2,0],[1,0],[1,1],[0,1],[0,0],[1,0],[1,1],[1,2],[2,2]];\n // 29; window.g1pla = [[2,2],[1,2],[0,2],[0,1],[0,0],[1,0],[2,0],[2,1],[1,1],[1,2],[0,2],[0,1],[1,1],[1,0],[0,0],[0,1],[0,2],[1,2],[1,1],[2,1],[2,2],[1,2],[1,1],[1,0],[2,0],[2,1],[1,1],[1,2],[2,2]];\n // g1Rpl()";

const jg1play3x23d = "//\n jg1.g1Reset([[6,0,8],[3,2,4],[5,1,7]],3,2,1)\n // complete game; TL\n // 23; window.g1pla = [[0,0],[1,0],[1,1],[1,2],[0,2],[0,1],[0,0],[1,0],[1,1],[2,1],[2,0],[1,0],[1,1],[2,1],[2,2],[1,2],[0,2],[0,1],[0,0],[1,0],[2,0],[2,1],[2,2]];\n // g1Rpl()";

const jg1play3x23e = "//\n jg1.g1Reset([[5,0,1],[2,8,7],[6,4,3]],3,2,1)\n // complete game; TR2C\n // 23; window.g1pla = [[0,0],[1,0],[2,0],[2,1],[1,1],[1,2],[2,2],[2,1],[1,1],[1,0],[0,0],[0,1],[0,2],[1,2],[1,1],[1,0],[0,0],[0,1],[1,1],[1,0],[2,0],[2,1],[2,2]];\n // g1Rpl()";

const jg1play3x24 = "//\n jg1.g1Reset([[6,2,0],[8,4,7],[5,1,3]],3,2,1)\n // complete game; SL2C\n // 24; window.g1pla = [[0,1],[1,1],[1,0],[2,0],[2,1],[1,1],[1,2],[2,2],[2,1],[1,1],[1,0],[2,0],[2,1],[1,1],[0,1],[0,0],[1,0],[1,1],[0,1],[0,2],[1,2],[1,1],[2,1],[2,2]];\n // 26; window.g1pla = [[0,1],[1,1],[1,0],[2,0],[2,1],[2,2],[1,2],[1,1],[2,1],[2,2],[1,2],[1,1],[1,0],[2,0],[2,1],[1,1],[0,1],[0,0],[1,0],[1,1],[0,1],[0,2],[1,2],[1,1],[2,1],[2,2]];\n // 28; window.g1pla = [[0,1],[1,1],[2,1],[2,0],[1,0],[1,1],[1,2],[0,2],[0,1],[0,0],[1,0],[1,1],[0,1],[0,2],[1,2],[2,2],[2,1],[1,1],[0,1],[0,2],[1,2],[2,2],[2,1],[2,0],[1,0],[1,1],[1,2],[2,2]];\n // g1Rpl()";

const jg1play3x24b = "//\n jg1.g1Reset([[6,3,5],[7,2,4],[8,1,0]],3,2,1)\n // complete game; SC\n // 24; window.g1pla = [[1,2],[0,2],[0,1],[1,1],[2,1],[2,0],[1,0],[1,1],[1,2],[2,2],[2,1],[1,1],[1,2],[0,2],[0,1],[0,0],[1,0],[1,1],[0,1],[0,2],[1,2],[1,1],[2,1],[2,2]];\n // 26; window.g1pla = [[1,2],[0,2],[0,1],[1,1],[2,1],[2,0],[1,0],[1,1],[2,1],[2,2],[1,2],[1,1],[2,1],[2,2],[1,2],[0,2],[0,1],[0,0],[1,0],[1,1],[0,1],[0,2],[1,2],[1,1],[2,1],[2,2]];\n // 30; window.g1pla = [[1,2],[1,1],[0,1],[0,2],[1,2],[1,1],[2,1],[2,0],[1,0],[1,1],[0,1],[0,0],[1,0],[1,1],[0,1],[0,2],[1,2],[1,1],[1,0],[2,0],[2,1],[2,2],[1,2],[1,1],[2,1],[2,0],[1,0],[1,1],[1,2],[2,2]];\n // g1Rpl()";

const jg1play3x24c = "//\n jg1.g1Reset([[5,1,0],[2,6,7],[3,4,8]],3,2,1)\n // complete game; TC, TCR (2 top solutions)\n // 24; window.g1pla = [[1,2],[1,1],[1,0],[2,0],[2,1],[1,1],[1,0],[0,0],[0,1],[1,1],[2,1],[2,2],[1,2],[0,2],[0,1],[1,1],[1,2],[2,2],[2,1],[1,1],[1,0],[2,0],[2,1],[2,2]];\n // 24; window.g1pla = [[1,2],[1,1],[1,0],[2,0],[2,1],[2,2],[1,2],[1,1],[1,0],[0,0],[0,1],[0,2],[1,2],[1,1],[0,1],[0,2],[1,2],[2,2],[2,1],[1,1],[1,0],[2,0],[2,1],[2,2]];\n // g1Rpl()";

const jg1play3x24d = "//\n jg1.g1Reset([[5,7,1],[8,6,2],[3,4,0]],3,2,1)\n // complete game; SR2C\n // 24; window.g1pla = [[2,1],[2,0],[1,0],[0,0],[0,1],[0,2],[1,2],[2,2],[2,1],[1,1],[1,0],[0,0],[0,1],[1,1],[1,2],[2,2],[2,1],[2,0],[1,0],[1,1],[0,1],[0,2],[1,2],[2,2]];\n // g1Rpl()";

const jg1play3x24e = "//\n jg1.g1Reset([[2,5,1],[3,6,7],[4,8,0]],3,2,1)\n // complete game; SRL\n // 24; window.g1pla = [[1,2],[1,1],[0,1],[0,2],[1,2],[1,1],[2,1],[2,2],[1,2],[1,1],[1,0],[0,0],[0,1],[1,1],[1,0],[2,0],[2,1],[2,2],[1,2],[0,2],[0,1],[1,1],[2,1],[2,2]];\n // g1Rpl()";

const jg1play3x24f = "//\n jg1.g1Reset([[2,1,3],[5,0,7],[6,8,4]],3,2,1)\n // complete game; SLC, TC2R (2 top solutions)\n // 24; window.g1pla = [[1,2],[2,2],[2,1],[1,1],[1,0],[2,0],[2,1],[1,1],[0,1],[0,0],[1,0],[1,1],[1,2],[0,2],[0,1],[0,0],[1,0],[1,1],[0,1],[0,2],[1,2],[1,1],[2,1],[2,2]];\n // 24; window.g1pla = [[2,1],[2,2],[1,2],[1,1],[0,1],[0,0],[1,0],[2,0],[2,1],[2,2],[1,2],[0,2],[0,1],[1,1],[1,0],[0,0],[0,1],[0,2],[1,2],[1,1],[1,0],[2,0],[2,1],[2,2]];\n // g1Rpl()";

const jg1play3x25 = "//\n jg1.g1Reset([[7,3,2],[4,5,8],[6,0,1]],3,2,1)\n // complete game; TC\n // 25; window.g1pla = [[2,0],[1,0],[1,1],[1,2],[2,2],[2,1],[1,1],[1,2],[0,2],[0,1],[1,1],[1,2],[2,2],[2,1],[2,0],[1,0],[0,0],[0,1],[1,1],[2,1],[2,0],[1,0],[1,1],[2,1],[2,2]];\n // 27; window.g1pla = [[1,1],[0,1],[0,0],[1,0],[2,0],[2,1],[2,2],[1,2],[1,1],[0,1],[0,0],[1,0],[1,1],[2,1],[2,0],[1,0],[1,1],[0,1],[0,0],[1,0],[1,1],[0,1],[0,2],[1,2],[1,1],[2,1],[2,2]];\n // 33; window.g1pla = [[1,1],[0,1],[0,0],[1,0],[2,0],[2,1],[1,1],[0,1],[0,2],[1,2],[2,2],[2,1],[2,0],[1,0],[1,1],[1,2],[0,2],[0,1],[1,1],[2,1],[2,0],[1,0],[0,0],[0,1],[1,1],[1,2],[2,2],[2,1],[1,1],[0,1],[0,2],[1,2],[2,2]];\n // g1Rpl()";

const jg1play3x25b = "//\n jg1.g1Reset([[5,0,7],[6,4,8],[1,3,2]],3,2,1)\n // complete game; SL\n // 25; window.g1pla = [[0,2],[1,2],[2,2],[2,1],[1,1],[1,0],[2,0],[2,1],[1,1],[0,1],[0,2],[1,2],[2,2],[2,1],[1,1],[0,1],[0,0],[1,0],[2,0],[2,1],[1,1],[0,1],[0,2],[1,2],[2,2]];\n // g1Rpl()";

const jg1play3x25c = "//\n jg1.g1Reset([[3,4,7],[8,5,0],[2,6,1]],3,2,1)\n // complete game; TL\n // 25; window.g1pla = [[0,2],[0,1],[1,1],[1,2],[2,2],[2,1],[1,1],[1,0],[2,0],[2,1],[1,1],[1,2],[0,2],[0,1],[0,0],[1,0],[1,1],[1,2],[0,2],[0,1],[0,0],[1,0],[1,1],[1,2],[2,2]];\n // g1Rpl()";

const jg1play3x26 = "//\n jg1.g1Reset([[3,7,0],[6,4,8],[5,1,2]],3,2,1)\n // complete game; SC\n // 26; window.g1pla = [[1,2],[1,1],[2,1],[2,0],[1,0],[1,1],[0,1],[0,0],[1,0],[1,1],[1,2],[2,2],[2,1],[2,0],[1,0],[1,1],[1,2],[0,2],[0,1],[1,1],[1,2],[2,2],[2,1],[1,1],[1,2],[2,2]];\n // 28; window.g1pla = [[1,2],[1,1],[2,1],[2,0],[1,0],[1,1],[1,2],[2,2],[2,1],[1,1],[0,1],[0,0],[1,0],[1,1],[1,2],[0,2],[0,1],[1,1],[2,1],[2,0],[1,0],[1,1],[1,2],[2,2],[2,1],[1,1],[1,2],[2,2]];\n // 30; window.g1pla = [[0,1],[1,1],[2,1],[2,0],[1,0],[1,1],[0,1],[0,2],[1,2],[1,1],[0,1],[0,0],[1,0],[1,1],[1,2],[2,2],[2,1],[2,0],[1,0],[1,1],[1,2],[0,2],[0,1],[1,1],[2,1],[2,2],[1,2],[1,1],[2,1],[2,2]];\n // g1Rpl()";

const jg1play3x26b = "//\n jg1.g1Reset([[4,2,5],[1,6,7],[3,8,0]],3,2,1)\n // complete game: SLR\n // 26; window.g1pla = [[1,2],[0,2],[0,1],[1,1],[2,1],[2,2],[1,2],[1,1],[1,0],[2,0],[2,1],[2,2],[1,2],[0,2],[0,1],[1,1],[1,0],[0,0],[0,1],[1,1],[1,2],[0,2],[0,1],[1,1],[2,1],[2,2]];\n // 30; window.g1pla = [[1,2],[1,1],[2,1],[2,2],[1,2],[0,2],[0,1],[1,1],[1,0],[2,0],[2,1],[2,2],[1,2],[0,2],[0,1],[1,1],[1,0],[0,0],[0,1],[0,2],[1,2],[1,1],[0,1],[0,2],[1,2],[2,2],[2,1],[1,1],[1,2],[2,2]];\n // g1Rpl()";

const jg1play3x26c = "//\n jg1.g1Reset([[6,7,8],[4,5,3],[2,1,0]],3,2,1)\n // complete game; SC2R\n // 26; window.g1pla = [[1,2],[1,1],[0,1],[0,0],[1,0],[1,1],[2,1],[2,2],[1,2],[0,2],[0,1],[1,1],[2,1],[2,0],[1,0],[0,0],[0,1],[1,1],[2,1],[2,2],[1,2],[0,2],[0,1],[1,1],[2,1],[2,2]];\n // g1Rpl()";

const jg1play3x27 = "//\n jg1.g1Reset([[8,6,5],[0,4,2],[3,7,1]],3,2,1)\n // complete game: SLR\n // 27; window.g1pla = [[1,1],[0,1],[0,0],[1,0],[2,0],[2,1],[1,1],[0,1],[0,2],[1,2],[2,2],[2,1],[1,1],[1,2],[0,2],[0,1],[1,1],[1,0],[0,0],[0,1],[0,2],[1,2],[1,1],[0,1],[0,2],[1,2],[2,2]];\n // 29; window.g1pla = [[1,1],[0,1],[0,0],[1,0],[2,0],[2,1],[1,1],[0,1],[0,2],[1,2],[2,2],[2,1],[1,1],[1,2],[0,2],[0,1],[0,0],[1,0],[1,1],[0,1],[0,0],[1,0],[1,1],[1,2],[0,2],[0,1],[1,1],[1,2],[2,2]];\n // 31; window.g1pla = [[1,1],[1,2],[2,2],[2,1],[2,0],[1,0],[1,1],[1,2],[0,2],[0,1],[0,0],[1,0],[1,1],[2,1],[2,2],[1,2],[0,2],[0,1],[1,1],[1,2],[0,2],[0,1],[0,0],[1,0],[2,0],[2,1],[2,2],[1,2],[1,1],[2,1],[2,2]];\n // g1Rpl()";

const jg1play3x28 = "//\n jg1.g1Reset([[0,6,2],[5,3,4],[8,7,1]],3,2,1)\n // complete game; SLR\n // 28; window.g1pla = [[1,0],[2,0],[2,1],[1,1],[0,1],[0,2],[1,2],[2,2],[2,1],[1,1],[0,1],[0,2],[1,2],[1,1],[1,0],[0,0],[0,1],[0,2],[1,2],[2,2],[2,1],[1,1],[1,0],[0,0],[0,1],[0,2],[1,2],[2,2]];\n // g1Rpl()";

const jg1play3x28b = "//\n jg1.g1Reset([[8,6,5],[7,1,3],[4,2,0]],3,2,1)\n // complete game; SC\n // 28; window.g1pla = [[2,1],[2,0],[1,0],[1,1],[1,2],[0,2],[0,1],[1,1],[2,1],[2,2],[1,2],[0,2],[0,1],[0,0],[1,0],[1,1],[0,1],[0,2],[1,2],[1,1],[2,1],[2,2],[1,2],[0,2],[0,1],[1,1],[2,1],[2,2]];\n // g1Rpl()";

const jg1play3x28c = "//\n jg1.g1Reset([[7,8,0],[1,5,6],[4,2,3]],3,2,1)\n // complete game; TC2L\n // 28; window.g1pla = [[0,1],[1,1],[2,1],[2,2],[1,2],[0,2],[0,1],[1,1],[2,1],[2,0],[1,0],[0,0],[0,1],[1,1],[1,0],[2,0],[2,1],[1,1],[1,2],[0,2],[0,1],[0,0],[1,0],[2,0],[2,1],[1,1],[1,2],[2,2]];\n // 30; window.g1pla = [[1,2],[1,1],[2,1],[2,2],[1,2],[0,2],[0,1],[1,1],[2,1],[2,0],[1,0],[0,0],[0,1],[1,1],[1,0],[2,0],[2,1],[1,1],[1,2],[0,2],[0,1],[0,0],[1,0],[2,0],[2,1],[2,2],[1,2],[1,1],[2,1],[2,2]];\n // 32; window.g1pla = [[0,1],[1,1],[2,1],[2,2],[1,2],[0,2],[0,1],[1,1],[2,1],[2,0],[1,0],[1,1],[0,1],[0,0],[1,0],[1,1],[0,1],[0,0],[1,0],[2,0],[2,1],[1,1],[1,2],[0,2],[0,1],[0,0],[1,0],[2,0],[2,1],[1,1],[1,2],[2,2]];\n // 34; window.g1pla = [[1,2],[1,1],[2,1],[2,2],[1,2],[0,2],[0,1],[1,1],[2,1],[2,0],[1,0],[1,1],[0,1],[0,0],[1,0],[1,1],[0,1],[0,0],[1,0],[2,0],[2,1],[1,1],[1,2],[0,2],[0,1],[0,0],[1,0],[2,0],[2,1],[2,2],[1,2],[1,1],[2,1],[2,2]];\n // g1Rpl()";

const jg1play3x29 = "//\n jg1.g1Reset([[6,4,7],[2,8,0],[3,5,1]],3,2,1)\n // complete game; TCL (jg1play3x30 less 1 move)\n // 29; window.g1pla = [[0,2],[0,1],[0,0],[1,0],[2,0],[2,1],[2,2],[1,2],[1,1],[1,0],[2,0],[2,1],[2,2],[1,2],[0,2],[0,1],[1,1],[1,0],[2,0],[2,1],[1,1],[1,2],[0,2],[0,1],[0,0],[1,0],[1,1],[2,1],[2,2]];\n // g1Rpl()";

const jg1play3x29b = "//\n jg1.g1Reset([[8,6,3],[0,5,4],[7,2,1]],3,2,1)\n // complete game; TC, TRL (jg1play3x30b less 1 move)\n // 29; window.g1pla = [[2,0],[2,1],[2,2],[1,2],[1,1],[0,1],[0,2],[1,2],[1,1],[2,1],[2,2],[1,2],[0,2],[0,1],[1,1],[1,0],[2,0],[2,1],[1,1],[1,0],[0,0],[0,1],[1,1],[1,0],[2,0],[2,1],[1,1],[1,2],[2,2]];\n // 29; window.g1pla = [[2,0],[2,1],[2,2],[1,2],[1,1],[1,0],[2,0],[2,1],[2,2],[1,2],[1,1],[0,1],[0,0],[1,0],[2,0],[2,1],[1,1],[1,2],[2,2],[2,1],[1,1],[0,1],[0,0],[1,0],[2,0],[2,1],[1,1],[1,2],[2,2]];\n // 31; window.g1pla = [[2,0],[2,1],[2,2],[1,2],[1,1],[1,0],[2,0],[2,1],[2,2],[1,2],[0,2],[0,1],[0,0],[1,0],[2,0],[2,1],[1,1],[0,1],[0,2],[1,2],[1,1],[0,1],[0,0],[1,0],[2,0],[2,1],[2,2],[1,2],[1,1],[2,1],[2,2]];\n // g1Rpl()";

const jg1play3x30 = "//\n jg1.g1Reset([[6,4,7],[2,8,1],[3,5,0]],3,2,1)\n // complete game; SLR, TCL (2 top solutions)\n // 30; window.g1pla = [[2,1],[2,0],[1,0],[0,0],[0,1],[0,2],[1,2],[1,1],[2,1],[2,2],[1,2],[1,1],[0,1],[0,2],[1,2],[2,2],[2,1],[1,1],[1,0],[2,0],[2,1],[2,2],[1,2],[1,1],[1,0],[0,0],[0,1],[1,1],[2,1],[2,2]];\n // 30; window.g1pla = [[1,2],[0,2],[0,1],[0,0],[1,0],[2,0],[2,1],[2,2],[1,2],[1,1],[1,0],[2,0],[2,1],[2,2],[1,2],[0,2],[0,1],[1,1],[1,0],[2,0],[2,1],[1,1],[1,2],[0,2],[0,1],[0,0],[1,0],[1,1],[2,1],[2,2]];\n // g1Rpl()";

const jg1play3x30b = "//\n jg1.g1Reset([[0,6,3],[8,5,4],[7,2,1]],3,2,1)\n // complete game; SC, SLR, TC, TRL (4 top solutions)\n // 30; window.g1pla = [[0,1],[0,2],[1,2],[2,2],[2,1],[1,1],[1,0],[2,0],[2,1],[1,1],[1,2],[2,2],[2,1],[2,0],[1,0],[1,1],[0,1],[0,2],[1,2],[1,1],[0,1],[0,0],[1,0],[1,1],[0,1],[0,2],[1,2],[1,1],[2,1],[2,2]];\n // 30; window.g1pla = [[0,1],[0,2],[1,2],[2,2],[2,1],[1,1],[0,1],[0,2],[1,2],[2,2],[2,1],[1,1],[1,0],[0,0],[0,1],[0,2],[1,2],[1,1],[2,1],[2,2],[1,2],[1,1],[1,0],[0,0],[0,1],[0,2],[1,2],[1,1],[2,1],[2,2]];\n // 30; window.g1pla = [[1,0],[2,0],[2,1],[2,2],[1,2],[1,1],[0,1],[0,2],[1,2],[1,1],[2,1],[2,2],[1,2],[0,2],[0,1],[1,1],[1,0],[2,0],[2,1],[1,1],[1,0],[0,0],[0,1],[1,1],[1,0],[2,0],[2,1],[1,1],[1,2],[2,2]];\n // 30; window.g1pla = [[1,0],[2,0],[2,1],[2,2],[1,2],[1,1],[1,0],[2,0],[2,1],[2,2],[1,2],[1,1],[0,1],[0,0],[1,0],[2,0],[2,1],[1,1],[1,2],[2,2],[2,1],[1,1],[0,1],[0,0],[1,0],[2,0],[2,1],[1,1],[1,2],[2,2]]; \n // g1Rpl()";

const jg1play4x49 = "//\n jg1.g1Reset([[7,9,8,4],[11,6,0,5],[15,1,2,14],[13,12,10,3]])\n // complete game\n // 49; window.g1pla = [[1,1],[2,1],[2,0],[1,0],[0,0],[0,1],[1,1],[1,0],[0,0],[0,1],[0,2],[1,2],[2,2],[2,1],[1,1],[0,1],[0,2],[1,2],[1,1],[2,1],[3,1],[3,2],[2,2],[2,3],[3,3],[3,2],[2,2],[1,2],[1,3],[2,3],[2,2],[2,1],[1,1],[1,2],[1,3],[2,3],[2,2],[2,1],[2,0],[1,0],[1,1],[0,1],[0,2],[1,2],[2,2],[2,1],[3,1],[3,2],[3,3]];\n // 57 == 36 + 21; window.g1pla = [[1,1],[2,1],[2,0],[1,0],[1,1],[0,1],[0,0],[1,0],[1,1],[1,2],[1,3],[2,3],[3,3],[3,2],[3,1],[2,1],[1,1],[1,2],[2,2],[2,3],[3,3],[3,2],[3,1],[2,1],[2,0],[1,0],[1,1],[0,1],[0,2],[1,2],[2,2],[2,1],[1,1],[0,1],[0,2],[1,2],[1,1],[2,1],[2,2],[2,3],[1,3],[1,2],[2,2],[2,3],[3,3],[3,2],[2,2],[2,1],[3,1],[3,2],[2,2],[1,2],[1,1],[2,1],[2,2],[3,2],[3,3]];\n // 61 == 36 + 25; window.g1pla = [[1,1],[2,1],[2,0],[1,0],[1,1],[0,1],[0,0],[1,0],[1,1],[1,2],[1,3],[2,3],[3,3],[3,2],[3,1],[2,1],[1,1],[1,2],[2,2],[2,3],[3,3],[3,2],[3,1],[2,1],[2,0],[1,0],[1,1],[0,1],[0,2],[1,2],[2,2],[2,1],[1,1],[0,1],[0,2],[1,2],[1,3],[2,3],[3,3],[3,2],[2,2],[1,2],[1,3],[2,3],[3,3],[3,2],[2,2],[1,2],[1,1],[2,1],[3,1],[3,2],[3,3],[2,3],[1,3],[1,2],[1,1],[2,1],[2,2],[3,2],[3,3]];\n // partial game\n // 36; window.g1pla = [[1,1],[2,1],[2,0],[1,0],[1,1],[0,1],[0,0],[1,0],[1,1],[1,2],[1,3],[2,3],[3,3],[3,2],[3,1],[2,1],[1,1],[1,2],[2,2],[2,3],[3,3],[3,2],[3,1],[2,1],[2,0],[1,0],[1,1],[0,1],[0,2],[1,2],[2,2],[2,1],[1,1],[0,1],[0,2],[1,2]];\n // 66; window.g1pla = [[2,2],[2,3],[1,3],[0,3],[0,2],[0,1],[1,1],[2,1],[2,2],[2,3],[3,3],[3,2],[2,2],[2,1],[2,0],[1,0],[1,1],[1,2],[0,2],[0,1],[0,0],[1,0],[2,0],[2,1],[3,1],[3,2],[2,2],[1,2],[0,2],[0,1],[1,1],[2,1],[3,1],[3,0],[2,0],[2,1],[2,2],[1,2],[1,3],[0,3],[0,2],[1,2],[1,3],[2,3],[2,2],[1,2],[1,3],[0,3],[0,2],[1,2],[2,2],[2,1],[1,1],[1,0],[2,0],[2,1],[3,1],[3,0],[2,0],[2,1],[2,2],[3,2],[3,1],[3,0],[2,0],[2,1]];\n // 110; window.g1pla = [[1,3],[0,3],[0,2],[0,1],[0,0],[1,0],[1,1],[1,2],[1,3],[2,3],[3,3],[3,2],[3,1],[3,0],[2,0],[2,1],[2,2],[2,1],[2,0],[1,0],[1,1],[1,2],[1,3],[2,3],[2,2],[2,1],[2,0],[1,0],[1,1],[2,1],[2,0],[2,1],[1,1],[1,2],[1,3],[2,3],[2,2],[2,1],[1,1],[1,2],[1,3],[2,3],[2,2],[2,1],[3,1],[3,0],[3,1],[3,2],[3,3],[2,3],[2,2],[2,1],[2,0],[2,1],[2,2],[2,3],[1,3],[0,3],[0,2],[0,1],[0,0],[1,0],[1,1],[1,2],[2,2],[2,3],[1,3],[1,2],[2,2],[2,3],[1,3],[0,3],[0,2],[0,1],[0,0],[1,0],[1,1],[1,2],[1,3],[0,3],[0,2],[0,1],[0,0],[1,0],[1,1],[1,2],[1,3],[0,3],[0,2],[0,1],[0,0],[1,0],[2,0],[2,1],[1,1],[1,2],[2,2],[2,1],[3,1],[3,2],[2,2],[2,1],[3,1],[3,2],[2,2],[2,1],[3,1],[3,0],[2,0],[2,1]];\n // g1Rpl()";

const jg1play4x56 = " //\n jg1.g1Reset([[4,13,5,11],[8,1,3,15],[12,14,2,10],[9,7,6,0]])\n // complete game\n // 56; window.g1pla = [[2,3],[1,3],[1,2],[2,2],[3,2],[3,1],[2,1],[2,0],[1,0],[1,1],[0,1],[0,0],[1,0],[2,0],[2,1],[1,1],[1,2],[0,2],[0,1],[1,1],[1,2],[1,3],[0,3],[0,2],[1,2],[2,2],[3,2],[3,1],[2,1],[2,0],[1,0],[1,1],[1,2],[2,2],[2,1],[2,0],[3,0],[3,1],[3,2],[3,3],[2,3],[2,2],[2,1],[1,1],[1,2],[2,2],[3,2],[3,3],[2,3],[1,3],[1,2],[1,1],[2,1],[2,2],[2,3],[3,3]];\n // 62 == 34 + 28; window.g1pla = [[3,2],[3,1],[2,1],[2,0],[1,0],[1,1],[0,1],[0,0],[1,0],[1,1],[1,2],[0,2],[0,1],[1,1],[1,2],[2,2],[2,1],[3,1],[3,0],[2,0],[1,0],[1,1],[2,1],[3,1],[3,0],[2,0],[2,1],[1,1],[1,2],[1,3],[0,3],[0,2],[0,1],[1,1],[1,2],[1,3],[2,3],[3,3],[3,2],[3,1],[2,1],[1,1],[1,2],[1,3],[2,3],[3,3],[3,2],[2,2],[2,1],[1,1],[1,2],[1,3],[2,3],[3,3],[3,2],[2,2],[2,1],[1,1],[1,2],[1,3],[2,3],[3,3]];\n // 62 == 34 + 28; window.g1pla = [[3,2],[3,1],[2,1],[2,0],[1,0],[1,1],[0,1],[0,0],[1,0],[1,1],[1,2],[0,2],[0,1],[1,1],[1,2],[2,2],[2,1],[3,1],[3,0],[2,0],[1,0],[1,1],[2,1],[3,1],[3,0],[2,0],[2,1],[1,1],[1,2],[1,3],[0,3],[0,2],[0,1],[1,1],[1,2],[1,3],[2,3],[3,3],[3,2],[3,1],[2,1],[1,1],[1,2],[1,3],[2,3],[3,3],[3,2],[2,2],[2,1],[1,1],[1,2],[1,3],[2,3],[3,3],[3,2],[2,2],[2,1],[1,1],[1,2],[1,3],[2,3],[3,3]];\n // 64 == 34 + 30; window.g1pla = [[3,2],[3,1],[2,1],[2,0],[1,0],[1,1],[0,1],[0,0],[1,0],[1,1],[1,2],[0,2],[0,1],[1,1],[1,2],[2,2],[2,1],[3,1],[3,0],[2,0],[1,0],[1,1],[2,1],[3,1],[3,0],[2,0],[2,1],[1,1],[1,2],[1,3],[0,3],[0,2],[0,1],[1,1],[2,1],[3,1],[3,2],[3,3],[2,3],[2,2],[1,2],[1,1],[2,1],[3,1],[3,2],[3,3],[2,3],[2,2],[1,2],[1,1],[2,1],[3,1],[3,2],[2,2],[2,3],[1,3],[1,2],[1,1],[2,1],[3,1],[3,2],[2,2],[2,3],[3,3]];\n // partial game\n // 34; window.g1pla = [[3,2],[3,1],[2,1],[2,0],[1,0],[1,1],[0,1],[0,0],[1,0],[1,1],[1,2],[0,2],[0,1],[1,1],[1,2],[2,2],[2,1],[3,1],[3,0],[2,0],[1,0],[1,1],[2,1],[3,1],[3,0],[2,0],[2,1],[1,1],[1,2],[1,3],[0,3],[0,2],[0,1],[1,1]];\n // g1Rpl()";

const jg1play4x61 = "//\n jg1.g1Reset([[14,13,6,0],[7,1,11,9],[2,5,15,10],[4,12,8,3]])\n // complete game\n // 61; window.g1pla = [[0,2],[0,1],[1,1],[1,0],[0,0],[0,1],[1,1],[2,1],[2,0],[1,0],[1,1],[2,1],[2,2],[1,2],[0,2],[0,1],[1,1],[1,2],[1,3],[2,3],[3,3],[3,2],[3,1],[2,1],[1,1],[1,2],[1,3],[2,3],[3,3],[3,2],[3,1],[3,0],[2,0],[2,1],[3,1],[3,2],[2,2],[2,1],[1,1],[1,2],[2,2],[3,2],[3,1],[3,0],[2,0],[2,1],[1,1],[0,1],[0,2],[0,3],[1,3],[1,2],[0,2],[0,1],[1,1],[1,2],[0,2],[0,3],[1,3],[2,3],[3,3]];\n // 75 == 52 + 23; window.g1pla = [[0,2],[0,1],[0,0],[1,0],[2,0],[2,1],[2,2],[2,3],[1,3],[1,2],[0,2],[0,1],[0,0],[1,0],[1,1],[1,2],[2,2],[2,3],[3,3],[3,2],[3,1],[2,1],[1,1],[0,1],[0,0],[1,0],[2,0],[2,1],[2,2],[3,2],[3,1],[3,0],[2,0],[2,1],[3,1],[3,2],[2,2],[2,1],[1,1],[1,2],[2,2],[2,3],[1,3],[0,3],[0,2],[1,2],[2,2],[2,3],[1,3],[0,3],[0,2],[1,2],[1,3],[2,3],[3,3],[3,2],[3,1],[2,1],[2,2],[1,2],[1,3],[2,3],[3,3],[3,2],[3,1],[2,1],[2,2],[3,2],[3,1],[2,1],[1,1],[1,2],[2,2],[3,2],[3,3]];\n // 79 == 55 + 24; window.g1pla = [[0,2],[1,2],[1,3],[2,3],[3,3],[3,2],[2,2],[2,1],[2,0],[1,0],[0,0],[0,1],[1,1],[2,1],[2,0],[1,0],[0,0],[0,1],[1,1],[1,2],[2,2],[3,2],[3,1],[3,0],[2,0],[1,0],[1,1],[1,2],[2,2],[3,2],[3,1],[3,0],[2,0],[1,0],[1,1],[1,2],[1,3],[2,3],[3,3],[3,2],[2,2],[2,3],[3,3],[3,2],[2,2],[1,2],[0,2],[0,3],[1,3],[2,3],[2,2],[1,2],[0,2],[0,3],[1,3],[2,3],[2,2],[1,2],[1,1],[2,1],[2,2],[3,2],[3,3],[2,3],[2,2],[1,2],[1,3],[2,3],[2,2],[1,2],[1,1],[2,1],[2,2],[3,2],[3,3],[2,3],[2,2],[3,2],[3,3]];\n // partial game\n // 52; window.g1pla = [[0,2],[0,1],[0,0],[1,0],[2,0],[2,1],[2,2],[2,3],[1,3],[1,2],[0,2],[0,1],[0,0],[1,0],[1,1],[1,2],[2,2],[2,3],[3,3],[3,2],[3,1],[2,1],[1,1],[0,1],[0,0],[1,0],[2,0],[2,1],[2,2],[3,2],[3,1],[3,0],[2,0],[2,1],[3,1],[3,2],[2,2],[2,1],[1,1],[1,2],[2,2],[2,3],[1,3],[0,3],[0,2],[1,2],[2,2],[2,3],[1,3],[0,3],[0,2],[1,2]];\n // 55; window.g1pla = [[0,2],[1,2],[1,3],[2,3],[3,3],[3,2],[2,2],[2,1],[2,0],[1,0],[0,0],[0,1],[1,1],[2,1],[2,0],[1,0],[0,0],[0,1],[1,1],[1,2],[2,2],[3,2],[3,1],[3,0],[2,0],[1,0],[1,1],[1,2],[2,2],[3,2],[3,1],[3,0],[2,0],[1,0],[1,1],[1,2],[1,3],[2,3],[3,3],[3,2],[2,2],[2,3],[3,3],[3,2],[2,2],[1,2],[0,2],[0,3],[1,3],[2,3],[2,2],[1,2],[0,2],[0,3],[1,3]];\n // 117; window.g1pla = [[0,2],[1,2],[1,3],[0,3],[0,2],[0,1],[1,1],[1,2],[0,2],[0,1],[0,0],[1,0],[2,0],[2,1],[3,1],[3,2],[3,3],[2,3],[2,2],[2,1],[3,1],[3,2],[2,2],[2,1],[1,1],[1,0],[2,0],[3,0],[3,1],[3,2],[2,2],[1,2],[0,2],[0,1],[0,0],[1,0],[2,0],[3,0],[3,1],[3,2],[2,2],[2,1],[1,1],[0,1],[0,0],[1,0],[2,0],[2,1],[1,1],[1,2],[2,2],[2,1],[1,1],[1,2],[0,2],[0,1],[0,0],[1,0],[2,0],[2,1],[2,2],[1,2],[0,2],[0,1],[0,0],[1,0],[2,0],[2,1],[2,2],[2,3],[1,3],[0,3],[0,2],[0,1],[0,0],[1,0],[1,1],[1,2],[2,2],[2,1],[2,0],[1,0],[1,1],[2,1],[3,1],[3,2],[3,1],[3,2],[2,2],[1,2],[1,1],[2,1],[2,2],[2,3],[3,3],[2,3],[1,3],[1,2],[1,3],[1,2],[1,1],[2,1],[2,2],[3,2],[3,1],[3,0],[3,1],[3,0],[2,0],[2,1],[3,1],[3,2],[2,2],[2,1],[2,0],[3,0],[3,1]];\n // g1Rpl()";

const jg1play4x66 = "//\n jg1.g1Reset([[4,6,0,5],[12,15,13,1],[7,14,8,10],[11,3,2,9]],4,2,1)\n // complete game\n // 66; window.g1pla = [[1,2],[2,2],[3,2],[3,1],[2,1],[1,1],[0,1],[0,2],[0,3],[1,3],[1,2],[1,1],[1,0],[0,0],[0,1],[0,2],[1,2],[1,1],[1,0],[0,0],[0,1],[0,2],[0,3],[1,3],[1,2],[1,1],[0,1],[0,2],[1,2],[2,2],[3,2],[3,3],[2,3],[1,3],[0,3],[0,2],[1,2],[2,2],[2,1],[2,0],[3,0],[3,1],[3,2],[2,2],[2,1],[2,0],[1,0],[0,0],[0,1],[0,2],[1,2],[2,2],[2,1],[3,1],[3,2],[3,3],[2,3],[2,2],[3,2],[3,1],[3,0],[2,0],[2,1],[2,2],[2,3],[3,3]];\n // 68; window.g1pla = [[0,3],[1,3],[2,3],[2,2],[1,2],[1,1],[1,0],[2,0],[2,1],[2,2],[3,2],[3,1],[3,0],[2,0],[2,1],[2,2],[1,2],[1,3],[2,3],[3,3],[3,2],[2,2],[2,3],[3,3],[3,2],[3,1],[3,0],[2,0],[2,1],[2,2],[1,2],[1,1],[1,0],[2,0],[2,1],[2,2],[1,2],[1,1],[0,1],[0,0],[1,0],[1,1],[0,1],[0,2],[0,3],[1,3],[2,3],[2,2],[1,2],[1,1],[1,0],[0,0],[0,1],[0,2],[1,2],[1,3],[0,3],[0,2],[1,2],[1,1],[1,0],[0,0],[0,1],[1,1],[1,2],[2,2],[3,2],[3,3]];\n // 70; window.g1pla = [[0,3],[1,3],[2,3],[2,2],[1,2],[1,1],[1,0],[2,0],[2,1],[2,2],[1,2],[1,3],[2,3],[3,3],[3,2],[2,2],[2,3],[3,3],[3,2],[3,1],[3,0],[2,0],[2,1],[2,2],[3,2],[3,1],[3,0],[2,0],[2,1],[1,1],[1,2],[2,2],[2,1],[1,1],[0,1],[0,2],[0,3],[1,3],[2,3],[2,2],[2,1],[1,1],[1,0],[0,0],[0,1],[0,2],[1,2],[1,3],[0,3],[0,2],[1,2],[1,1],[1,0],[0,0],[0,1],[0,2],[1,2],[1,1],[2,1],[2,2],[3,2],[3,3],[2,3],[1,3],[1,2],[0,2],[0,3],[1,3],[2,3],[3,3]];\n // 82; window.g1pla = [[0,3],[1,3],[2,3],[2,2],[3,2],[3,1],[2,1],[1,1],[0,1],[0,2],[1,2],[2,2],[3,2],[3,3],[2,3],[1,3],[1,2],[2,2],[2,1],[2,0],[1,0],[1,1],[0,1],[0,0],[1,0],[1,1],[0,1],[0,2],[0,3],[1,3],[1,2],[1,1],[0,1],[0,0],[1,0],[1,1],[0,1],[0,2],[0,3],[1,3],[1,2],[1,1],[2,1],[2,0],[3,0],[3,1],[2,1],[2,0],[1,0],[0,0],[0,1],[0,2],[0,3],[1,3],[2,3],[2,2],[3,2],[3,1],[2,1],[2,2],[2,3],[3,3],[3,2],[2,2],[1,2],[1,3],[2,3],[3,3],[3,2],[3,1],[2,1],[2,2],[1,2],[1,1],[2,1],[3,1],[3,0],[2,0],[2,1],[2,2],[3,2],[3,3]];\n // g1Rpl()";

const jg1play4x67 = "//\n jg1.g1Reset([[8,10,14,13],[15,12,0,5],[1,2,4,7],[3,6,9,11]],4,2,1)\n // complete game\n // 67; window.g1pla = [[1,3],[2,3],[2,2],[1,2],[1,1],[2,1],[2,2],[1,2],[0,2],[0,3],[1,3],[2,3],[2,2],[1,2],[0,2],[0,1],[1,1],[1,0],[2,0],[2,1],[2,2],[1,2],[0,2],[0,1],[0,0],[1,0],[2,0],[3,0],[3,1],[3,2],[2,2],[2,1],[2,0],[3,0],[3,1],[3,2],[2,2],[1,2],[1,1],[2,1],[2,0],[3,0],[3,1],[3,2],[2,2],[1,2],[0,2],[0,1],[1,1],[1,2],[0,2],[0,3],[1,3],[2,3],[2,2],[3,2],[3,3],[2,3],[1,3],[1,2],[0,2],[0,1],[1,1],[2,1],[2,2],[3,2],[3,3]];\n // 71; window.g1pla = [[1,3],[2,3],[2,2],[1,2],[1,1],[2,1],[2,2],[1,2],[0,2],[0,1],[1,1],[1,0],[2,0],[2,1],[3,1],[3,2],[2,2],[1,2],[1,1],[2,1],[2,2],[1,2],[0,2],[0,3],[1,3],[2,3],[3,3],[3,2],[2,2],[1,2],[0,2],[0,1],[0,0],[1,0],[2,0],[3,0],[3,1],[2,1],[2,0],[1,0],[1,1],[2,1],[2,2],[1,2],[1,1],[0,1],[0,2],[1,2],[1,1],[0,1],[0,2],[0,3],[1,3],[1,2],[0,2],[0,1],[1,1],[1,0],[2,0],[2,1],[2,2],[2,3],[3,3],[3,2],[3,1],[2,1],[2,0],[3,0],[3,1],[3,2],[3,3]];\n // g1Rpl()";

const jg1play4x69 = "//\n jg1.g1Reset([[11,3,13,5],[0,6,9,15],[14,8,7,12],[4,1,10,2]],4,2,1)\n // complete game\n // 69; window.g1pla = [[1,1],[1,2],[0,2],[0,1],[0,0],[1,0],[1,1],[1,2],[2,2],[2,1],[3,1],[3,0],[2,0],[2,1],[1,1],[0,1],[0,2],[1,2],[2,2],[2,3],[1,3],[1,2],[1,1],[1,0],[2,0],[2,1],[3,1],[3,2],[2,2],[2,3],[3,3],[3,2],[2,2],[1,2],[0,2],[0,3],[1,3],[1,2],[0,2],[0,1],[0,0],[1,0],[1,1],[1,2],[1,3],[2,3],[2,2],[2,1],[3,1],[3,0],[2,0],[1,0],[1,1],[1,2],[1,3],[0,3],[0,2],[1,2],[2,2],[2,3],[1,3],[1,2],[1,1],[0,1],[0,2],[0,3],[1,3],[2,3],[3,3]];\n // 85; window.g1pla = [[1,1],[2,1],[2,0],[3,0],[3,1],[2,1],[2,2],[3,2],[3,3],[2,3],[1,3],[0,3],[0,2],[0,1],[0,0],[1,0],[2,0],[2,1],[2,2],[1,2],[1,1],[1,0],[2,0],[3,0],[3,1],[2,1],[2,2],[2,3],[1,3],[1,2],[1,1],[1,0],[2,0],[2,1],[3,1],[3,2],[2,2],[2,3],[1,3],[1,2],[1,1],[0,1],[0,0],[1,0],[2,0],[2,1],[1,1],[0,1],[0,2],[0,3],[1,3],[1,2],[0,2],[0,1],[1,1],[1,2],[2,2],[2,1],[1,1],[1,0],[2,0],[2,1],[3,1],[3,0],[2,0],[1,0],[1,1],[2,1],[2,0],[1,0],[0,0],[0,1],[1,1],[1,2],[0,2],[0,1],[0,0],[1,0],[1,1],[0,1],[0,2],[1,2],[1,3],[2,3],[3,3]];\n // g1Rpl()";

export {
  _module, jg1setup, jg1reference, 
  jg1play3x19,
  jg1play3x20, jg1play3x20b, jg1play3x20c, 
  jg1play3x21, 
  jg1play3x22, jg1play3x22b, jg1play3x22c, jg1play3x22d, jg1play3x22e, 
  jg1play3x23, jg1play3x23b, jg1play3x23c, jg1play3x23d, jg1play3x23e, 
  jg1play3x24, jg1play3x24b, jg1play3x24c, jg1play3x24d, jg1play3x24e, jg1play3x24f, 
  jg1play3x25, jg1play3x25b, jg1play3x25c, 
  jg1play3x26, jg1play3x26b, jg1play3x26c, 
  jg1play3x27, 
  jg1play3x28, jg1play3x28b, jg1play3x28c, 
  jg1play3x29, jg1play3x29b, 
  jg1play3x30, jg1play3x30b, 
  jg1play4x49, jg1play4x56, jg1play4x61, jg1play4x66, jg1play4x67, jg1play4x69
};