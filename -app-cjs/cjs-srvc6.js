/* JavaScript module */

const groupname = "JScode";

const tutorial1 = `/*
__JavaScript Coding Tutorials, Part 1__

*Some (initial) __reasons to learn__ JS coding ...*
- Custom-tailor your routine accounting tasks.
- Build a personal web app for referencing or strategizing.
- Progress more efficiently through your independent studies.
- Publish/catalog proprietary records w/o inviting a security breech.
- Confirm a questionable computational result or statistical summary.
- Increase your skill at diagnosing a technical problem.
- Design a new game for fun.
- Become a web developer.
- ...

*What are the __fundamental tools__ of JS coding?*
- Web-browser console
  + for generating direct, instant results to your coded instructions
  + available on almost any computer or device with a web browser
- Hyper-Text Markup Language (HTML) and Cascading Style Sheets (CSS)
  + for designing the screen layout of any computer or device display
  + rendered by (viewed with) a standard web browser
- Core JavaScript language (JS)
  + the set of commands (keywords) that a browser console understands
  + building blocks for composing your instructions to manipulate
    and display data
- Application Programming Interfaces (API) -- specifically the
  client-side web APIs
  + pre-built JS code patterns, useful for sending and receiving live,
    current feeds of data
  + ever evolving to accommodate changing internet uses and demands

*Where could someone go to __explore JS coding__ tools in depth?*
- developer.mozilla.org/en-US/docs/Web/HTML/Reference
- developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML
- developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
- developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps
- developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs

- - - - -
__*Tutorial One: Building a unit-converter web app*__

 *Note:* The following steps are only an app's inner logic and could not
work outside an app framework such as the JavaScript Calculator app.
 *Optional:* After these beginner skills have been mastered, structural
blocks from the calculator app's source code could be deconstructed
and repurposed as needed to build an original, standalone app.

 1. Describe your __end product__.
    + The end product is a converter app.
    + The app accepts an inputted value and a unit of measurement.
    + The app then returns the equivalent value in another unit of
      the same kind of measurement.

    E.G.: The app should function in a similar way that unit
    conversions are made by Google.

    In the Google search bar, type | In the result list, expect
    "100 yards to meters"          | "91.44 meters"
    "101 mph to km/h"              | "162.544 kilometers per hour"
    "110 Fahrenheit to Celsius"    | "43.3333 Celsius"
    "1111 to Roman"                | "MCXI"

 2. Write a __conversion function__.
    + A *function* is defined (written) by sequentially combining:
      an arbitrary function name, the assignment operator \`=\`,
      input variable(s), the arrow notation \`=>\`, and manipulations
      or calculations (formulas) to be done on the input.
    + A *function* is called (executed) by writing the function name
      followed by a set of parentheses. Input data (arguments) are
      written within the parentheses.
*/

ucLen = n => n * 12  // converts a length in feet to inches

ucLen(3)  // calls function &amp; returns result of 3 * 12

/*
 3. Modify the function to __handle bi-directional conversions__.
    + Add a second input variable that will indicate the initial unit,
      the unit being provided. Two or more variables are wrapped in
      parentheses \`( … )\` and are separated by a comma \`,\`.
    + Use a true-false test with conditional operators
      (\`?\` = "if true", \`:\` = "if false") to invoke the
      correct directional formula.
    + If including multiple arguments in a *function* call, they are
      separated with a comma \`,\`.
    + If an argument is not a number, it is wrapped in quotes \`" … "\`.
*/

ucLen = (n, u0) => /^in/i.test(u0) ? n / 12 : n * 12
 // converts either inches to feet, or feet to inches
ucLen(36, "in")  // calls function &amp; returns result of 36 / 12
ucLen(3, "ft")   // calls function &amp; returns result of 3 * 12

/*
 4. Modify the function to __return a specified unit__.
    + Add a third input variable that will indicate the final unit,
      the unit being requested.
    + Use successive tests with conditional operators to invoke the
      correct calculation formula.
*/

ucLen = (n, u0, u1) => /^in/i.test(u0) && /^ft/i.test(u1) ? n / 12 : /^in/i.test(u0) && /^yd/i.test(u1) ? n / 36 : /^ft/i.test(u0) && /^in/i.test(u1) ? n * 12 : /^ft/i.test(u0) && /^yd/i.test(u1) ? n / 3 : /^yd/i.test(u0) && /^in/i.test(u1) ? n * 36 : /^yd/i.test(u0) && /^ft/i.test(u1) ? n * 3 : u0 === u1 ? n : "error";
 // makes conversion between any lengths in
 // inches (in), feet (ft) or yards (yd)
ucLen(72, "in", "yd")   // converts 72 inches to yards
ucLen(2, "yd", "in")    // converts 2 yards to inches
ucLen(4.5, "ft", "yd")  // converts 4.5 feet to yards
ucLen(1.5, "yd", "ft")  // converts 1.5 yards to feet

/*
 5. Build out __a collection of functions__ --
    to handle many other kinds of conversions.
    + For complex conversions that require multiple operations, the
      steps of a *function* definition are wrapped in curly brackets
      \`{ … }\` and are separated by a semicolon \`;\`. The final result
      is indicated with the \`return\` keyword.
    + Within a *function* block of multiple operations, as needed,
      include new variable declarations (\`let …\`), lookup arrays and
      loop statements (\`.forEach( … )\`, \`while ( … ) { … }\`).
*/

ucSpd = (n, u0, u1) => /^mi?[/p]h/i.test(u0) && /^km?[/p]h/i.test(u1) ? n * 5280 * 12 * 0.0000254 : /^km?[/p]h/i.test(u0) && /^mi?[/p]h/i.test(u1) ? n / 0.0000254 / 12 / 5280 : u0 === u1 ? n : "error";
 // makes conversion of speeds in either
 // miles-per-hour (mph) or kilometers-per-hour (km/h)
ucSpd(101, "mph", "km/h")

ucTmp = (n, u0, u1) => /^F/i.test(u0) && /^C/i.test(u1) ? (n - 32) * 5 / 9 : /^F/i.test(u0) && /^K/i.test(u1) ? (n - 32) * 5 / 9 + 273.15 : /^C/i.test(u0) && /^F/i.test(u1) ? n * 9 / 5 + 32 : /^C/i.test(u0) && /^K/i.test(u1) ? n + 273.15 : /^K/i.test(u0) && /^F/i.test(u1) ? (n - 273.15) * 9 / 5 + 32 : /^K/i.test(u0) && /^C/i.test(u1) ? n - 273.15 : u0 === u1 ? n : "error";
 // makes conversion between any temperatures in
 // Fahrenheit (F), Celsius (C) or Kelvin (K)
ucTmp(110, "Fahrenheit", "Celsius")

uara = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
urom = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

utoRom = val => { let str = ""; _.uara.forEach((ai, i) => { while (val % ai < val) { str += _.urom[i]; val -= ai; } }); return str; };
 // converts Arabic integer into Roman numeral
utoRom(1111, "Arabic", "Roman")

ufrRom = str => { let val = 0; str = str.toUpperCase(); _.uara.forEach((ai, i) => { while (!str.indexOf(_.urom[i])) { val += ai; str = str.replace(_.urom[i], ""); } }); return val; };
 // converts Roman numeral into Arabic integer
ufrRom("MCXI", "Roman", "Arabic")

/*
 6. Finally, consolidate the collection of functions to
    __maximize efficiency__, which also improves user experience (UX).
    + Use \`.push( … )\` to combine sets of regular-expression test
      patterns into a single, lookup array.
    + Use \`Object.assign( … , … )\` to combine corresponding sets of
      conversion formulas into a single, lookup object.
    + *Challenge:* How would we allow for conversions of mass ...
      or of volume ... or ... ?
*/

uxs = [/^$/, /^in(?:che?s?|)$/i, /^f(?:oo|ee|)t$/i, /^y(?:a?r?ds?|)$/i, /^mi(?:les?|)$/i, /^m(?:eters?|)$/i];
uxs.push(/^ft?[/p]s$/i, /^mi?[/p]h$/i, /^m[/p]s$/i, /^km?[/p]h$/i)
uxs.push(/^F(?:ahrenheit|)$/i, /^C(?:elsius|)$/i, /^K(?:elvin|)$/i)

ucs = { f12: n => n / 12, f13: n => n / 36, f14: n => n / 12 / 5280, f15: n => n * 0.0254, f21: n => n * 12, f23: n => n / 3, f24: n => n / 5280, f25: n => n * 12 * 0.0254, f31: n => n * 36, f32: n => n * 3, f34: n => n * 3 / 5280, f35: n => n * 36 * 0.0254, f41: n => n * 5280 * 12, f42: n => n * 5280, f43: n => n * 5280 / 3, f45: n => n * 5280 * 12 * 0.0254, f51: n => n / 0.0254, f52: n => n / 0.0254 / 12, f53: n => n / 0.0254 / 36, f54: n => n / 0.0254 / 12 / 5280 }
Object.assign(ucs, { f67: n => n * 3600 / 5280, f68: n => n * 12 * 0.0254, f69: n => n * 3600 * 12 * 0.0000254, f76: n => n * 5280 / 3600, f78: n => n * 5280 * 12 * 0.0254 / 3600, f79: n => n * 5280 * 12 * 0.0000254, f86: n => n / 0.0254 / 12, f87: n => n * 3600 / 0.0254 / 12 / 5280, f89: n => n * 3600 / 1000, f96: n => n / 0.0000254 / 12 / 3600, f97: n => n / 0.0000254 / 12 / 5280, f98: n => n * 1000 / 3600 })
Object.assign(ucs, { f1011: n => (n - 32) * 5 / 9, f1012: n => (n - 32) * 5 / 9 + 273.15, f1110: n => n * 9 / 5 + 32, f1112: n => +n + 273.15, f1210: n => (n - 273.15) * 9 / 5 + 32, f1211: n => n - 273.15 })

uConv = (n, u0, u1) => { let [x0, x1] = [_.uxs.findIndex(r => r.test(u0)), _.uxs.findIndex(r => r.test(u1))]; return typeof n !== 'number' ? (!/^[cdilmvx]+$/i.test(n || "") || x0 > 0 ? "error" : _.ufrRom(n)) : x0 < 1 ? _.utoRom(n) : x1 < 1 ? "error" : x0 === x1 ? n : (_.ucs["f" + x0 + x1] || (() => "error"))(n); };

uConv(100, "yd", "m")
uConv(101, "mph", "km/h")
uConv(110, "F", "C")
uConv(1111)
uConv("MCXI")

/*
 7. __*Optional demo:*__ To create and demo (below, beneath the calculator)
    one, possible, user-interface (UI) design for your unit-converter
    web app, un-comment (i.e., remove the \`//\` characters of) the
    last two lines of the following block of code.
*/

ucShow = () => ucout.value = _.uConv(!/^[+-]?(?:\\d+\\.?|\\d*\\.\\d+)(?:e[+-]?\\d+|)|^0x[\\da-f]+$/i.test(ucinp.value) ? ucinp.value : +ucinp.value, ulist0.value, ulist1.value);
opts = ["", "inches", "feet", "yards", "miles", "meters", "ft/s", "mph", "m/s", "km/h", "Fahrenheit", "Celsius", "Kelvin"].map(e => "<option>" + e + "</option>").join("\\n");
ucui = "\\n<hr style=\\"margin: 1.5rem 0;\\">\\n<h4 class=cfield>Unit Converter</h4>";
ucui += "\\n<div class=cfield><span class=ccntr><input type=text id=ucinp placeholder=\\"Enter measurement…\\"></span><span class=ccntr><select id=ulist0>\\n";
ucui += opts + "\\n</select></span></div>\\n<div class=cfield><span class=ccntr><input type=text id=ucout readonly></span><span class=ccntr><select id=ulist1>\\n";
ucui += opts + "\\n</select></span></div>\\n";
// try { ucwrap } catch { ndiv = document.createElement('div'); ndiv.id = "ucwrap"; ndiv.innerHTML = ucui; cmain.appendChild(ndiv); }
// [ucinp, ulist0, ulist1].forEach((e, i) => e[!i ? 'onblur' : 'onchange'] = _.ucShow)
//`;

const tutorial2 = `/*
__JavaScript Coding Tutorials, Part 2__

 In *Part 1*, we saw in brief some of the more useful JS elements and
how they are used. We learned about combining key JS elements to get
practical results. We used core JS code only -- which would work in a
__browser console__ and allow us to get immediate feedback on our work
as we code.

 In *Part 2*, we turn our focus to __HTML__ with __CSS__ -- a language for
coding layout and design. We'll build some visual games -- in which
we can appreciate just why layout and design matter when coding.

- - - - -
__*Tutorial Two: Building a sliding-tiles puzzle (and other games)*__

 1. Design a game board -- or, __graphic user interface__ (GUI).
    + Include: a block of styles (\`<style> … </style>\`), a title
      block (\`<h4 class=cfield>Sliding Tiles</h4>\`), some game-board
      controllers (\`<div><span class=ccntr> … </span></div>\`), and
      the game-board display (\`<table id=g1board> … </table>\`).
*/

// __* * * SLIDING TILES * * *__
g1ui = "\\n<style>\\n*, *::before, *::after { box-sizing: inherit; }";
g1ui += "\\nhtml { box-sizing: border-box; }";
g1ui += "\\nhr { margin: 1.5rem 0; }";
g1ui += "\\n#g1wrap { font: normal medium Helvetica, Arial, sans-serif; margin: 16px 0; }";
g1ui += "\\n#g1wrap .cfield { max-width: 359px; }";
g1ui += "\\n#g1wrap .cfield:not(:last-child) { margin-bottom: 8px; }";
g1ui += "\\n#g1wrap .ccntr:not(:last-child) { margin-right: 8px; }";
g1ui += "\\n#g1wrap :not(.cfield)>.ccntr { display: inline-block; margin-bottom: 8px; }";
g1ui += "\\n#g1wrap .blank, #g1wrap .gtile { width: 61px; height: 61px; border: 4px solid White; }";
g1ui += "\\n#g1wrap .gtile { background: LightSteelBlue; color: White; font-size: large; font-weight: bold; cursor: pointer; text-align: center; }";
g1ui += "\\n#trows, #tcols { max-width: 36px; }";
g1ui += "\\n#g1board { margin: 12px; border-collapse: collapse; }";
g1ui += "\\n#g1scor { position: relative; top: -8px; font-size: small; margin-left: 16px; }";
g1ui += "\\n#g1movs { font-weight: bold; }";
g1ui += "\\n</style>\\n<hr>\\n<h4 class=cfield>Sliding Tiles</h4>";
g1ui += "\\n<div class=cfield><em>Objective:</em> Order the characters from least to greatest&mdash;starting at the top left&nbsp;corner.</div>";
g1ui += "\\n<div>\\n<span class=ccntr><select id=tnmrl>\\n<option disabled>Characters</option>\\n";
g1ui += ["1 2 3 4 …", "I II III IV …", "A B C D …", "Α Β Γ Δ …"].map(e => "<option>" + e + "</option>").join("\\n");
g1ui += "\\n</select></span><span class=ccntr><select id=tclrs>\\n<option disabled>Color Cascades</option>\\n";
g1ui += ["No gradient", "Red gradient", "Gold gradient", "Blue gradient", "Rainbow pattern"].map(e => "<option>" + e + "</option>").join("\\n");
g1ui += "\\n</select></span>\\n<label class=ccntr>Auto-shuffle <input type=checkbox id=pshuf checked></label>\\n</div>\\n<div>";
g1ui += "\\n<label class=ccntr>Rows <input type=text id=trows value=4 size=2></label>";
g1ui += "\\n<label class=ccntr>Columns <input type=text id=tcols value=4 size=2></label>";
g1ui += "\\n<span class=ccntr><input type=button value=\\"&#x21bb; NEW GAME\\" onclick=g1Reset()></span>\\n</div>";
g1ui += "\\n<table id=g1board></table>\\n<div id=g1scor class=cfield>Count: <span id=g1movs>0</span></div>";
g1ui += "\\n<div><span class=ccntr><input type=button value=\\"RETRACT MOVE\\" onclick=m1Rvrs()></span><span class=ccntr><input type=button value=\\"RESET COUNTER\\" onclick=c1Zero()></span></div>\\n";

// g1wrap.remove() // *Alert:* useful only if edit-testing the GUI code above
try { g1wrap } catch { ndiv = document.createElement('div'); ndiv.id = "g1wrap"; ndiv.innerHTML = g1ui; cmain.appendChild(ndiv); }

/*
    + The rendered GUI, below, is built from the leading block of
      code, above, in which strings of HTML/CSS text are cumulatively
      assigned to the GUI variable (\`g1ui += " … "\`).
    + As we can see below, the entire GUI string was injected into
      this web doc -- where it will remain as rendered (even after
      this tutorial is unloaded), unchanged from the way it was first
      designed, until it gets altered (overwritten) by another script.
    + *Challenge:* Un-comment (i.e., remove the \`//\` characters of)
      the \`g1wrap.remove()\` line, above; And make assorted edits to
      the GUI code, such as:
      * changing the \`.gtile\` background color to \`Pink\` … or \`Tan\`;
      * changing the game-board title to "My First Web Game" … or …;
      * unchecking the "Auto-shuffle" checkbox
        (*tip:* remove the word \`checked\` in the \`<input … >\` tag);
      * setting the starting value of the number of rows and columns
        each to three (*tip:* \`<input … value=3 … >\`).

 2. Reproduce the GUI text from the calculator-app tutorial code, and
    __begin building a standalone web app__.
    + Un-comment the following two lines of code to generate the
      web-doc text that will be the app framework.
*/

// dwrap = ["<!DOCTYPE html>\\n<html lang=en>\\n<title>Puzzles, JS Tutorial 2</title>\\n<meta charset=\\"utf-8\\">\\n<meta name=viewport content=\\"width=device-width, initial-scale=1\\">\\n\\n", "\\n\\n<script type=module>\\n", "\\n</script>\\n</html>"];
// respShow((dwrap[0] + g1wrap.outerHTML + dwrap[1] + dwrap[2]).replace(/\\n<hr>/, "").replace(/<(?=[!/?a-z])/gi, "&lt;"))

/*
    + Select and copy the orange text that appears above, overtop
      the calculator.
    + Paste the copied text into a new text file; Save the file under
      any filename with an HTML extension (e.g., \`jsgame-tiles.html\`).
    + *Note:* When opened up in a web browser, the web app will not
      be responsive because it does not yet have any script code.

 3. Add in the puzzle's inner logic (its "script", extracted from the
    tutorial code) to __turn a static web doc into a dynamic web app__
    -- an interactive game.
    *Alert:* Read through all procedures of this step before starting.
    + Select and copy the following two blocks of code --
      beginning with \`tnx = …\` and ending with \`g1Reset();\`.
*/

tnx = tcx = psh = rval = cval = tmax = tovr = m1trk = unsh = cxs = shxs = shuf = tarr = cr1s = cr2s = ""
clrefs = [ "", "", ["#752424", "#9c3030", "#c33c3c", "#cf6363", "#db8a8a", "#e7b1b1", "#f3d8d8"], ["#856514", "#b1871b", "#dea821", "#e4ba4e", "#ebcb7a", "#f2dca6", "#f8eed3"], ["#2b506e", "#396a93", "#4785b8", "#6c9dc6", "#91b6d4", "#b6cee2", "#dae7f1"], ["#ff9999", "#ffcc99", "#fff099", "#99cc99", "#9999ff", "#cc99cc", "#d8bfd8"] ];
uara = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
urom = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
utoRom = v => { let s = ""; _.uara.forEach((ai, i) => { while (v % ai < v) { s += _.urom[i]; v -= ai; } }); return s; };
utoEng = v => { let i, codpts = []; while (v) { i = 0; while ((v - ++i) % 26); codpts.unshift(i + 64); v = (v - i) / 26; } return String.fromCodePoint(...codpts || 65); };
utoGre = v => { let i, codpts = []; while (v) { i = 0; while ((v - ++i) % 24); codpts.unshift((i < 18 ? i : 1 + i) + 912); v = (v - i) / 24; } return String.fromCodePoint(...codpts || 913); };
clRnk1s = () => _.unsh.map( v => _.clrefs[_.tcx][ _.cxs.find( x => _.tovr < 0 ? x === 6 || v <= _.cval || (v % _.cval > 0 && v % _.cval <= _.cval - _.rval + 1) || (v > _.cval * (1 + x) - _.rval + (1 + x) && v <= _.cval * (1 + x)) || (v - (1 + x) - (_.cval - _.rval)) % _.cval === 0 : x === 6 || v - _.tovr <= _.tmax * (1 + x) || (v - (1 + x)) % _.tmax === 0 )]);
clRnk2s = () => _.unsh.map( v => ( _.tovr < 0 ? v <= _.cval - _.rval || (v - 1 - (_.cval - _.rval)) % (1 + _.cval) !== 0 || v > 7 * _.cval : v - 1 < _.tovr || (v - 1 - _.tovr) % (1 + _.tmax) !== 0 || v - 1 - _.tovr > 7 * _.tmax ) ? 'White' : _.tcx < 5 ? 'Gold' : 'LimeGreen' );
nAlt = v => _.tnx == 2 ? _.utoRom(v) : _.tnx == 3 ? _.utoEng(v) : _.tnx == 4 ? _.utoGre(v) : v;
isSolva = () => { let ctinvs = _.shxs.filter(e => e.v).map(e => e.i + 1).reduce((a, b, i, f) => a + f.slice(i + 1).reduce((c, d) => c + (d > b ? 0 : 1), 0), 0); return (ctinvs + (_.cval % 2 === 1 ? 0 : _.rval - Math.ceil((_.shuf.indexOf(0) + 1) / _.cval))) % 2 === 0; };
posSwap = (p0, p1) => [_.tarr[p0][p1], _.tarr[p0][p1 + 1]] = [_.tarr[p0][p1 + 1], _.tarr[p0][p1]];
gbdGen = () => g1board.innerHTML = _.tarr.map( (e, i) => "\\n<tr>" + e.map( (f, j) => f === 0 ? "<td class=blank> </td>" : \`<td class=gtile \${!_.cr1s ? "" : \`style="background:\${_.cr1s[f]};color:\${_.cr2s[f]};" \`}onclick=tileSli(\${i},\${j})>\${f}</td>\` ).join("") + "</tr>" ).join("") + "\\n";

window.c1Zero = () => (_.m1trk = []) && (g1movs.innerHTML = 0);
window.g1Reset = () => { _.tnx = tnmrl.selectedIndex; _.tcx = tclrs.selectedIndex; _.psh = pshuf.checked; _.rval = +trows.value; _.cval = +tcols.value; _.tmax = _.rval <= _.cval ? _.rval : _.cval; _.tovr = (_.rval - _.cval) * _.tmax; c1Zero(); _.unsh = Array.from(Array(_.rval * _.cval).keys()); _.cxs = Array.from(Array(_.tmax > 7 ? 7 : _.tmax).keys()); [_.cr1s, _.cr2s] = _.tcx < 2 ? [0, 0] : [_.clRnk1s(), _.clRnk2s()]; _.unsh = _.unsh.slice(1).map(_.nAlt).concat(0); _.tcx < 2 || ([_.cr1s, _.cr2s] = [_.cr1s, _.cr2s].map(e => Object.fromEntries(_.unsh.map((v, i) => [v, e[i + 1]])))); _.shxs = _.unsh.map((v, i) => ({ i, v, o: Math.random() })).sort((a, b) => !_.psh || a.o - b.o); _.shuf = _.shxs.map(e => e.v); _.tarr = Array.from(Array(_.rval)).map(() => _.shuf.splice(0, _.cval)); _.shuf = _.tarr.flat(); _.isSolva() || (_.shuf[0] && _.shuf[1] ? _.posSwap(0, 0) : _.posSwap(_.rval - 1, _.cval - 2)); _.gbdGen(); };
window.tileSli = (rx, cx, bkup) => { let bl = [[rx - 1, cx], [rx + 1, cx], [rx, cx - 1], [rx, cx + 1]].find(([p0, p1]) => (_.tarr[p0] || "")[p1] === 0); !bl || (bkup || _.m1trk.push([bl[0], bl[1]])) && ([_.tarr[bl[0]][bl[1]], _.tarr[rx][cx]] = [_.tarr[rx][cx], 0]) && ( g1movs.innerHTML = "" + _.tarr !== "" + _.unsh ? _.m1trk.length + " moves" : "<em>Puzzle solved in " + _.m1trk.length + " moves!</em>" ) && _.gbdGen(); };
window.m1Rvrs = () => !(_.m1trk || "").length || tileSli(... _.m1trk.pop(), 1);
g1Reset();

/*
    + Unload this tutorial (clear *ENTRY* field), and paste the copied
      text into the empty *ENTRY* field of the calculator app.
    + Wrap the pasted text in JS block-comment tags \`/* … */\`.
      In other words, in the *ENTRY* field, type \`/*\` into a blank
      line before all of the text and \`*/\` into a blank line after
      all of the text.
    + Type \`tutor2js\` into the *DATA-LOAD* input box (directly beneath
      the calculator), and tap *SAVE*.
    + Reload this tutorial, and un-comment the following three lines
      of code.
*/

// preresp.innerHTML = "" // clears any orange text (in case GUI text is still visible)
// scrGen = src => src.match(/^(?:jopts|m2trk|tnx) = [^]+?(?=\\n+ *(\\*\\/|\\/[\\/*]))/gm).map(e => "let " + e.replace(/\\b_\\.\\b| *"";?$|^\\n/gm, "").replace(/^.+/, m => m.replace(/ *=(?= *[a-z]|$)/gi, ",")).replace(/^(\\w+ =.+);(?=\\n\\w+ =)/gm, "$1,")).join("\\n\\n"); //
// localforage.getItem("tutor2js").then( rslt => respShow( _.scrGen(rslt).replace(/<(?=[!/?a-z])/gi, "&lt;") )).catch(respShow)

/*
    + Select and copy the orange text that appears above, overtop
      the calculator.
    + Paste the copied text inside the \`<script> … </script>\` tags of
      the new HTML file created in step 2; Then re-save the file.
    + *Note:* When opened up in a web browser, the web app should be
      responsive and the game should work as expected; If not, try it
      again: Start fresh, repeating all procedures of steps 2 and 3.

 4. See how __GUI design techniques__ get applied to multiple games.
    *Note:* For each of the following games, the GUI has not yet been
    displayed anywhere on this page.
    + Un-comment an associated \`try { … } catch { … }\` line of code
      (following each block of HTML/CSS text) to inject into this web
      doc, and display (down below), another game's GUI.
    + To generate the web-app code of a game -- for building a
      standalone game app (as in step's 2 and 3, above) -- make use of
      the text-generating commands already provided in step's 2 and 3.
      Within those lines of code, above, simply change the \`g1wrap\`
      variable to the other game's "wrap" ID (e.g., \`g2wrap\`); And
      update the saved \`tutor2js\` data file with the other game's
      "script" code blocks.
    + *Take notice:* For each additional game in this tutorial, its
      game board has many elements and structures in common with the
      first one (e.g., \`<table id=g1board>\`) -- but, each has a
      custom-tailored selection of CSS style options that display
      those structures in graphically different ways. Fine-control
      over the visual elements of an app is most often a matter of
      assigning ID and CLASS names to key elements, then applying to
      those names such style specifics as an element's size and
      positioning on the page; or its own spacing and borders relative
      to the CSS box model; or alternate states of its appearance in
      response to user clicks, like a change in color or shape, etc.
    + *Challenge:* Play with the styles -- as well as the script code.
      Reshape and refine these game boards in any way that you would
      like. Every little bit of experience in design skills now will
      have big and frequent payoffs down the road to your future,
      wherever it may lead.
*/

// __* * * LIGHTS OUT * * *__
g2ui = "\\n<style>\\n*, *::before, *::after { box-sizing: inherit; }";
g2ui += "\\nhtml { box-sizing: border-box; }";
g2ui += "\\nhr { margin: 1.5rem 0; }";
g2ui += "\\n#g2wrap { font: normal medium Helvetica, Arial, sans-serif; margin: 16px 0; }";
g2ui += "\\n#g2wrap .cfield { max-width: 359px; }";
g2ui += "\\n#g2wrap .cfield:not(:last-child) { margin-bottom: 8px; }";
g2ui += "\\n#g2wrap .ccntr:not(:last-child) { margin-right: 8px; }";
g2ui += "\\n#g2wrap :not(.cfield)>.ccntr { display: inline-block; margin-bottom: 8px; }";
g2ui += "\\n#g2bcntr { position: relative; padding-top: 1px; }";
g2ui += "\\n#g2circt { margin: 48px; border-collapse: collapse; }";
g2ui += "\\n#g2circt td { width: 59px; height: 59px; border: 4px solid black; }";
g2ui += "\\n#g2board { position: absolute; top: 0; margin: 16px; border-spacing: 8px; }";
g2ui += "\\n#g2board td { background: MediumOrchid; width: 51px; height: 51px; border-radius: 26px; box-shadow: 0 0 16px 4px Orchid; cursor: pointer; }";
g2ui += "\\n#g2board td.ldark { background: Indigo; box-shadow: 0 0 16px 4px Grey; }";
g2ui += "\\n#g2scor { position: relative; top: -12px; font-size: small; margin-left: 16px; }";
g2ui += "\\n#g2movs { font-weight: bold; }";
g2ui += "\\n</style>\\n<hr>\\n<h4 class=cfield>Lights Out</h4>";
g2ui += "\\n<div class=cfield><em>Objective:</em> Switch all matrix lights off.</div>";
g2ui += "\\n<div class=cfield><em>Game Action:</em> Switching a diode in this lighting matrix also switches any directly connected up-, down-, left- or right- diodes.</div>";
g2ui += "\\n<div>\\n<span class=ccntr><select id=lpatt>";
g2ui += ["&mdash;Startup Pattern&mdash;", "Treasure marker (in 4)", "Lucy's diamond (in 5)", "Eight-pocket table (in 5)", "Picasso emoji (in 5)", "Peep holes (in 6)", "Split screen (in 6)", "Square target (in 9)", "Bi-polar opposites (in 11)", "Central light out (in 12)", "Road caution marks (in 15)"].map(e => \`\\n<option>\${e}</option>\`).join("");
g2ui += "\\n</select></span><span class=ccntr><input type=button value=\\"&#x21bb; RESTART\\" onclick=g2Reset()></span>\\n</div>";
g2ui += "\\n<div id=g2bcntr>\\n<table id=g2circt><tbody>";
g2ui += [0, 1, 2, 3].map(r => "\\n<tr>" + [0, 1, 2, 3].map(c => "<td></td>").join("") + "</tr>").join("");
g2ui += "\\n</tbody></table>\\n<table id=g2board><tbody>";
g2ui += [0, 1, 2, 3, 4].map(r => "\\n<tr>" + [0, 1, 2, 3, 4].map(c => \`<td id=n\${r}\${c} onclick=litSwi(\${r},\${c})></td>\`).join("") + "</tr>").join("");
g2ui += "\\n</tbody></table>\\n</div>";
g2ui += "\\n<div id=g2scor class=cfield>Count: <span id=g2movs>0</span></div>";
g2ui += "\\n<div class=cfield><span class=ccntr><input type=button value=\\"RESET COUNTER\\" onclick=c2Zero()></span></div>";
g2ui += "\\n<div class=cfield><label class=ccntr><input type=checkbox id=u2tog> Allow single-diode toggle&mdash;Suspend&nbsp;counter</label></div>\\n";

// g2wrap.remove() // *Alert:* useful only if edit-testing the GUI code above
// try { g2wrap } catch { ndiv = document.createElement('div'); ndiv.id = "g2wrap"; ndiv.innerHTML = g2ui; cmain.appendChild(ndiv); }

m2trk = 0;
lit0s = [ "", ["0,0", "0,4", "1,1", "1,3", "2,2", "3,1", "3,3", "4,0", "4,4"], ["0,2", "1,1", "1,3", "2,0", "2,4", "3,1", "3,3", "4,2"], ["0,0", "0,2", "0,4", "2,0", "2,4", "4,0", "4,2", "4,4"], ["2,1", "2,3", "3,2", "4,1", "4,2", "4,3"], ["2,1", "2,3"], ["0,2", "1,2", "2,2", "3,2", "4,2"], ["1,1", "1,2", "1,3", "2,1", "2,3", "3,1", "3,2", "3,3"], ["0,4", "4,0"], ["2,2"], ["0,2", "1,1", "2,0", "2,4", "3,3", "4,2"] ];
window.c2Zero = () => g2movs.innerHTML = _.m2trk = 0;
window.g2Reset = () => c2Zero() || [0, 1, 2, 3, 4].forEach( r => [0, 1, 2, 3, 4].forEach( c => window["n" + r + c].classList[_.lit0s[lpatt.selectedIndex].includes("" + [r, c]) ? "add" : "remove"]("ldark") ) );
window.litSwi = (rx, cx) => { u2tog.checked ? window["n" + rx + cx].classList.toggle("ldark") : [[rx - 1, cx], [rx, cx - 1], [rx, cx], [rx, cx + 1], [rx + 1, cx]].forEach( ([r, c]) => r < 0 || c < 0 || r > 4 || c > 4 || window["n" + r + c].classList.toggle("ldark") ); u2tog.checked || ( g2movs.innerHTML = [0, 1, 2, 3, 4].some( r => [0, 1, 2, 3, 4].some(c => !window["n" + r + c].classList.contains("ldark")) ) ? ++_.m2trk + " switches" : "<em>Puzzle solved with " + ++_.m2trk + " switches!</em>" ); };

// __* * * PEGS * * *__
g3ui = "\\n<style>\\n*, *::before, *::after { box-sizing: inherit; }";
g3ui += "\\nhtml { box-sizing: border-box; }";
g3ui += "\\nhr { margin: 1.5rem 0; }";
g3ui += "\\n#g3wrap { font: normal medium Helvetica, Arial, sans-serif; margin: 16px 0; }";
g3ui += "\\n#g3wrap .cfield { max-width: 359px; }";
g3ui += "\\n#g3wrap .cfield:not(:last-child) { margin-bottom: 8px; }";
g3ui += "\\n#g3wrap .ccntr:not(:last-child) { margin-right: 8px; }";
g3ui += "\\n#g3wrap :not(.cfield)>.ccntr { display: inline-block; margin-bottom: 8px; }";
g3ui += "\\n#g3bcntr { position: relative; padding-top: 1px; }";
g3ui += "\\n#g3panel { box-sizing: content-box; margin: 15px 16px; border: 4px solid DarkKhaki; border-collapse: collapse; }";
g3ui += "\\n#g3panel td { background: beige; width: 40px; height: 40px; }";
g3ui += "\\n#g3panel td.chkr0 { background: LightSlateGrey; }";
g3ui += "\\n#g3panel td.chkr1 { background: Gainsboro; }";
g3ui += "\\n#g3panel td.jdest { box-shadow: inset 0 0 0 5px White; }";
g3ui += "\\n#g3board { position: absolute; top: 0; margin: 7px; border-spacing: 27px; }";
g3ui += "\\n#g3board td { background: Black; width: 15px; height: 15px; border-radius: 8px; box-shadow: inset 1px 0 3px 2px Grey; cursor: pointer; }";
g3ui += "\\n#g3board td.nohol { background: Transparent; box-shadow: none; }";
g3ui += "\\n#g3board td.phead { background: Red; box-shadow: -1px -1px 0 3px red, 1px 1px 8px 3px grey; }";
g3ui += "\\n#g3scor { position: relative; top: -8px; font-size: small; margin-left: 16px; }";
g3ui += "\\n#g3movs { font-weight: bold; }";
g3ui += "\\n</style>\\n<hr>\\n<h4 class=cfield>Pegs</h4>";
g3ui += "\\n<div class=cfield><em>Objective:</em> Remove all board pegs but&nbsp;one.</div>";
g3ui += "\\n<div class=cfield><em>How to play:</em> A move is made by jumping one peg with an adjacent peg; The jumped peg is&nbsp;removed.<br>Tap on a peg to select it for jumping&mdash;Then, if you have a choice, tap on a highlighted hole to select it for that peg's&nbsp;destination.</div>";
g3ui += "\\n<div>\\n<span class=ccntr><select id=ppatt>\\n";
g3ui += ["&mdash;Startup Pattern&mdash;", "Cross Symbol", "Plus Sign", "North Tower", "Arrow in Flight", "Egyptian Pyramid", "Red Diamond", "Solitaire"].map(e => "<option>" + e + "</option>").join("\\n");
g3ui += "\\n</select></span><span class=ccntr><input type=button value=\\"&#x21bb; RESTART\\" onclick=g3Reset()></span>";
g3ui += "\\n</div>\\n<div id=g3bcntr>\\n<table id=g3panel><tbody>";
g3ui += [0, 1, 2, 3, 4, 5, 6].map(r => "\\n<tr>" + [0, 1, 2, 3, 4, 5, 6].map(c => "<td></td>").join("") + "</tr>").join("");
g3ui += "\\n</tbody></table>\\n<table id=g3board><tbody>";
g3ui += [0, 1, 2, 3, 4, 5, 6].map(r => "\\n<tr>" + [0, 1, 2, 3, 4, 5, 6].map(c => "<td " + (["0,0", "0,1", "0,5", "0,6", "1,0", "1,1", "1,5", "1,6", "5,0", "5,1", "5,5", "5,6", "6,0", "6,1", "6,5", "6,6"].includes("" + [r, c]) ? "class=nohol" : \`id=h\${r}\${c} onclick=pegJmp(\${r},\${c})\`) + "></td>").join("") + "</tr>").join("");
g3ui += "\\n</tbody></table>\\n</div>";
g3ui += "\\n<div id=g3scor class=cfield>Count: <span id=g3movs>0</span></div>";
g3ui += "\\n<div class=cfield><span class=ccntr><input type=button value=\\"RETRACT MOVE\\" onclick=m3Rvrs()></span><input type=button value=\\"RESET COUNTER\\" onclick=c3Zero()></span></div>";
g3ui += "\\n<div class=cfield><label class=ccntr><input type=checkbox id=u3tog> Allow free peg placement&mdash;Suspend&nbsp;counter</label></div>\\n";

// g3wrap.remove() // *Alert:* useful only if edit-testing the GUI code above
// try { g3wrap } catch { ndiv = document.createElement('div'); ndiv.id = "g3wrap"; ndiv.innerHTML = g3ui; cmain.appendChild(ndiv); }

jopts = peg0s = ""
m3trk = [];
a0t6 = [0, 1, 2, 3, 4, 5, 6];
p3sol = a0t6.map(r => _.a0t6.map(c => "" + [r, c])).flat();
g3panel = window.g3panel || document.createElement('table');
p3tds = Array.from(g3panel.querySelectorAll('tr')).map(e => e.querySelectorAll('td'));
osGen = (r, c) => [ [[r, c], [r - 1, c], [r - 2, c]], [[r, c], [r, c - 1], [r, c - 2]], [[r, c], [r, c + 1], [r, c + 2]], [[r, c], [r + 1, c], [r + 2, c]] ];
osClr = () => g3panel.querySelectorAll('.jdest').forEach(e => e.className = "");
pegsRplc = (jps, bkup) => _.osClr() || (_.jopts = 0) || (bkup || _.m3trk.push(jps)) && jps.forEach(([r, c]) => window["h" + r + c].classList.toggle("phead")) || u3tog.checked || ( g3movs.innerHTML = g3board.querySelectorAll('.phead').length !== 1 ? _.m3trk.length + " jumps" : "<em>Puzzle solved with " + _.m3trk.length + " jumps!</em>" );
[ [0,0], [0,1], [], [0,5], [0,6], [1,0], [1,1], [], [1,5], [1,6], [], [5,0], [5,1], [], [5,5], [5,6], [6,0], [6,1], [], [6,5], [6,6] ].forEach( ([r, c], i) => r == null || !_.p3tds[r] || (_.p3tds[r][c].className = i % 2 === 0 ? "chkr0" : "chkr1") );
[47, 42, 40, 35, 12, 7, 5, 0].forEach(e => _.p3sol.splice(e, 2));
p3sol.splice(16, 1);
peg0s = [ "", ["1,3", "2,2", "2,3", "2,4", "3,3", "4,3"], ["1,3", "2,3", "3,1", "3,2", "3,3", "3,4", "3,5", "4,3", "5,3"], ["0,2", "0,3", "0,4", "1,2", "1,3", "1,4", "2,2", "2,3", "2,4", "3,2", "3,4"], ["1,4", "2,0", "2,1", "2,4", "2,5", "3,0", "3,1", "3,2", "3,3", "3,4", "3,5", "3,6", "4,0", "4,1", "4,4", "4,5", "5,4"], ["1,3", "2,2", "2,3", "2,4", "3,1", "3,2", "3,3", "3,4", "3,5", "4,0", "4,1", "4,2", "4,3", "4,4", "4,5", "4,6"], p3sol.filter((e, i) => ![0, 2, 6, 12, 19, 25, 29, 31].includes(i)), _.p3sol ];
window.c3Zero = () => (_.m3trk = []) && (g3movs.innerHTML = 0);
window.g3Reset = () => _.osClr() || c3Zero() || _.a0t6.forEach( r => _.a0t6.forEach( c => !window["h" + r + c] || window["h" + r + c].classList[_.peg0s[ppatt.selectedIndex].includes("" + [r, c]) ? "add" : "remove"]("phead") ) );
window.pegJmp = (rx, cx) => { let jx, ph1 = window["h" + rx + cx].classList.contains("phead"); _.jopts = !ph1 ? _.jopts : _.osGen(rx, cx); u3tog.checked ? _.osClr() || (_.jopts = 0) || window["h" + rx + cx].classList.toggle("phead") : !ph1 ? !_.p3tds[rx][cx].className || _.pegsRplc(_.jopts.find(e => "" + e[2] === "" + [rx, cx])) : _.osClr() || _.jopts.forEach( ([[], [r1, c1], [r2, c2]], i) => !window["h" + r1 + c1] || !window["h" + r1 + c1].classList.contains("phead") || !window["h" + r2 + c2] || window["h" + r2 + c2].className || (_.p3tds[r2][c2].className = "jdest") && (jx = i) ); return u3tog.checked || ( jx == null ? _.jopts = 0 : (_.p3tds[rx][cx].className = "jdest") && g3panel.querySelectorAll('.jdest').length > 2 || _.pegsRplc(_.jopts[jx]) ); };
window.m3Rvrs = () => !(_.m3trk || "").length || _.pegsRplc(_.m3trk.pop(), 1);
//`;

const tutorial3 = `/*
__JavaScript Coding Tutorials, Part 3__

 In *Part 1* and *Part 2*: We coded various calculations, which could
be reconstructed in a __browser console__ and performed on the fly;
And we designed a diversity of graphic elements out of whole cloth,
using only the __HTML/CSS__ language.

 In *Part 3*, we will move beyond basic form and function into
the more open vistas of coding literacy. We will begin to compose
practical algorithms -- the kind that refine and repackage for human
consumption the raw data that we often encounter in our modern world.
Applying __core JavaScript protocols__ only, we will automate some common,
time-consuming, publishing tasks -- enabling ourselves to do any one
or another of these kind of tasks within but an instant.

 Specifically, we will:
 1) locate a substring of the text of a lengthy document,
 2) prepare an article for meaningful display of its structural
    parts, and
 3) format a text memo or report to fit any size screen.

- - - - -
__*Tutorial Three: Automating custom publishing tasks*__

 1. Understand the __data types__ and __data structures__ that you are
    working on -- and will be manipulating.
    + Following is a short list of high-use data types.
    + Distinguishing between them is important; Each type has its
      own set of properties and methods, which, when mastered, are
      powerful manipulation tools for our data.

      string    | any sequence of characters wrapped in one of
                  quotes (" … "), ticks (' … ') or backticks (\` … \`)
                  (e.g., "The journey ahead seems long .....")
      number    | digits mostly, with or without a decimal or sign or
                  intertwining with other notations for various needs
                  (e.g., 25, -3, 4.8271, 0x3cd, 2.222e-6)
      boolean   | one of two values only: true or false
      null      | a one-of-a-kind, single-value data type, signaling
                  that the intended "value" is no value
      undefined | another one-of-a-kind, signaling the absense of
                  any other assigned data type

    + Here is an example of identifying these data types as each
      is, in turn, assigned to the variable \`foo\`.
*/

let foo      // foo is now undefined
foo = 'bar'  // foo is now a string
foo = 42     // foo is now a number
foo = true   // foo is now a boolean
foo = null   // foo is now a null "object"

/*
    + Following are the most useful, by far, of all the JS
      data structures.
    + Note that, like data types, each structure also has its own
      powerful set of data manipulating tools.

      object | a group of keys and their assigned values --
               each of which can be any data type or structure;
               ordinarily wrapped in curly brackets \`{ … }\` and
               contains comma-separated, key-value pairs flanking
               a colon (e.g., \`{ a: 1, b: 2, c: "a string" }\`);
               often packaged up for transmission as a JSON string;
      array  | also called an "object" data structure;
               an ordered sequence of values --
               each of which can be any data type or structure;
               ordinarily wrapped in square brackets \`[ … ]\` and
               contains a sequential list of comma-separated values
               (e.g., \`[1, 2, "a string", false, null]\`);
               array values are index-numbered starting with zero --
               the position of a value is its index number;

    + Here are examples of assigning a data structure to a variable,
      then accessing data contained within that structure.
    + *Challenge:* Make changes to values within these structures;
      And confirm that the new values have been stored.
*/

obj = { a: 1, b: 2, c: "a string" }   // an object

arr = [1, 2, "a string", false, null] // an array object

obj.b         // the returned value should be \`2\` (*note:* dot notation)
obj["b"]      // the returned value should be \`2\` (alternate notation)
obj["c"]      // the returned value should be \`a string\`

arr[0]        // the returned value should be \`1\`
arr[3]        // the returned value should be \`false\`
arr[3] = true // the array value at index 3 is now \`true\`
arr[3]        // the returned value should be \`true\`

/*
 2. Perform __a simple search-and-replace__ on a string.
    + The \`.replace( … , … )\` method makes changes on any string.
    + Two examples are presented below:
      * The first parses over a string directly;
      * The second parses over a different string that is first
        assigned to the variable \`str\`.
    + In each example, two arguments are provided to the
      \`.replace( … , … )\` method -- a search string and a
      replacement string, in that order.
*/

"Controlled chaos."
"Controlled chaos.".replace("ch", "K") // 1st example

str = "Deafening silence."
str.replace("silence.", "SILENCE!")    // 2nd example

/*
 3. Now, perform another search-and-replace on each string using
    __a regular expression__ (*RegExp*) __as the search pattern__.
    + A *RegExp*-formatted pattern allows full control over a search.
    + The pattern is wrapped in a pair of forward slashes \`/ … /\`.
    + It is composed of simple characters, such as \`/abc/\`,
      or a combination of simple and special characters, such as
      \`/ab*c/\` or \`/Chapter (\\d+)\\.\\d*/\`.
    + Learning how to compose a *RegExp* can be an involved process,
      as evidenced at this reference link:
      * developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet
    + For quick-startup, here are the most helpful special characters.

      .   | matches any character except NewLine \`\\n\`
      [^] | matches any character
      \\w  | matches any alphanumeric character (including \`_\`)
      \\d  | matches any digit (0 - 9)
      \\n  | matches a NewLine character (line break)
      \\s  | matches a white space character (including Tab &amp; NewLine)
      [x] | matches any of the items between the brackets
      [^x]| matches any item not found between the brackets
      x*  | matches the preceding item "x" 0 or more times
      x+  | matches the preceding item "x" 1 or more times
      x?  | matches the preceding item "x" 0 or 1 times
      x*?
      x+? | stops looking for another match after the first one
      \\?  | escapes (normalizes) a special character (/ * + . ? etc.)
      (x) | Capturing Group: matches "x" and remembers the match --
            "$1" in the replacement string returns the 1st CG,
            "$2" in the replacement string returns the 2nd CG, etc.;
            "$&" in the replacement string returns the whole match
            (even without a CG in the *RegExp*);

    + To make a *RegExp* complete, any of three flag characters are
      optionally added onto the end (e.g., \`/abc/i\` or \`/^abc/gim\`).

      g | global flag: find every match encountered
          (otherwise, find only the first encountered match)
      i | case insensitive flag: find either upper or lower cases
          (otherwise, find the same case of a specified letter)
      m | multiline flag: make alternate use of 2 special characters
          -- \`^\` = start of a line, \`$\` = end of a line
          (otherwise, retain default use of 2 special characters --
           \`^\` = start of entire string, \`$\` = end of entire string)
*/

"Controlled chaos.".replace(/ch?/gi, "K")          // 1st example

str.replace(/(deaf)\\w+ (\\w+)\\./i, "$1ness … $2 …") // 2nd example

/*
 4. Now, perform one more search-and-replace on each string using
    __a function to generate the replacement string__.
    + The argument variables of a replacement function may be
      arbitrarily named.
    + The first argument variable equals the entire matched substring.
    + The value of each subsequent variable aligns with a capturing
      group of the *RegExp* search pattern.

      arg0 | returns the entire matched substring
      arg1 | returns 1st capturing group
      arg2 | returns 2nd capturing group, and so on ...
*/

"Controlled chaos.".replace(/ch?/gi, m => m === "C" ? "K" : "k")
 // 1st example

str.replace(/(deaf)\\w+ (\\w+)\\./i, (m, c1, c2) => \`\${c1} & \${c2.replace(/ce$/, "t")}?\`)
 // 2nd example

/*
 5. In pursuit of higher convenience, pull these concepts together
    to __build a search-and-replace web app__.
    + The elements of a minimal search-and-replace user interface (UI)
      are: "Source" and "Target" text fields, "Search" and "Replace"
      inputs, and a trigger ("PARSE" button) to activate the
      search/replace operation.
    + Un-comment the \`try { … } catch { … }\` line following the
      next code block to display (down below) a basic search-and-
      replace UI.
*/

srui = "\\n<style>\\n*, *::before, *::after { box-sizing: inherit; }";
srui += "\\nhtml { box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; }";
srui += "\\nhr { margin: 1.5rem 0; }";
srui += "\\n#srwrap { font: normal medium Helvetica, Arial, sans-serif; margin: 16px 0; }";
srui += "\\n#srwrap textarea { display: block; font-size: medium; width: 100%; height: 288px; }";
srui += "\\n#srwrap pre { white-space: pre-wrap; }";
srui += "\\n#srwrap input[type=text] { width: 288px; }";
srui += "\\n#srwrap .iwarn { color: Orange; }";
srui += "\\n#srwrap .isucc { color: CornFlowerBlue; }";
srui += "\\n#srwrap textarea.iwarn { color: unset; border-color: Orange; }";
srui += "\\n#srwrap textarea.isucc { color: unset; border-color: CornFlowerBlue; }";
srui += "\\n#srwrap .cfield { max-width: 720px; }";
srui += "\\n#srwrap .cfield:not(:last-child) { margin-bottom: 8px; }";
srui += "\\n#srwrap .ccntr:not(:last-child) { margin-right: 8px; }";
srui += "\\n#srwrap :not(.cfield)>.ccntr { display: inline-block; margin-bottom: 8px; }";
srui += "\\n#srwrap .cfield>.help { font-size: 12px; margin-top: 4px; }";
srui += "\\n#srwrap h4+.cfield:not(:last-child) { margin-bottom: 16px; }";
srui += "\\n</style>\\n<hr>\\n<h4 class=cfield><span onclick=txtaSel(srctxta)>Source</span></h4>";
srui += "\\n<div class=cfield><textarea id=srctxta></textarea></div>";
srui += "\\n<div class=cfield><label class=ccntr><input type=text id=sepainp> Search</label></div>";
srui += "\\n<div class=cfield><label class=ccntr><input type=text id=rfncinp> Replace</label></div>";
srui += "\\n<div class=cfield>\\n<span class=ccntr><select id=rndrsel>\\n<option></option>\\n<option>PRE render</option>\\n<option>Normal render</option>\\n</select></span>";
srui += "<span class=ccntr><input type=button value=\\"&#x2964; PARSE\\" onclick=strPars()></span>";
srui += "<span class=ccntr><input type=button value=\\"&rlhar; SWAP\\" onclick=txtSwap()></span>\\n</div>";
srui += "\\n<h4 class=cfield><span onclick=txtaSel(trgtxta)>Target</span></h4>";
srui += "\\n<div class=cfield><textarea id=trgtxta></textarea><div id=trghelp class=help></div></div>";
srui += "\\n<div id=trgrndr class=cfield></div>\\n";

// srwrap.remove() // *Alert:* useful only if edit-testing the GUI code above
// try { srwrap } catch { ndiv = document.createElement('div'); ndiv.id = "srwrap"; ndiv.innerHTML = srui; cmain.appendChild(ndiv); }

/*
    + The following "script" code that makes this UI functional hinges
      on a standard \`.replace( … , … )\` string-method to manipulate
      a source string -- which is taken from the "Source" text field
      of the UI.
    + Arguments for the \`.replace( … , … )\` method are taken from
      the "Search" and "Replace" inputs of the UI:
      * A recognized search pattern will be either a string or a
        *RegExp*, depending on whether or not the user entered a
        *RegExp*-formatted pattern (i.e., one wrapped in \`/ … /\`).
      * Recognized replacement code will be either a string or a
        function, depending on whether or not the user entered
        one of a function definition (with arrow notation \`=>\`) or
        function name (of one that is globally defined elsewhere).
    + The result of the \`.replace( … , … )\` method is then sent to
      the "Target" text field.
    + Some bells and whistles are also written into this "script"
      code -- to display the match count; to provide styled render
      options; to allow for a one-click swapping of content between
      "Source" and "Target" text fields; and to turn the "Source" and
      "Target" labels each into a live trigger for auto-selecting all
      of its field's content.
*/

rxs = [/^\\/.+\\/[im]*g[im]*$/, /^\\/.+\\/[gim]*$/, /^(?:[$\\wÀ-Ͽ]+|\\(.*?\\)) *=>.|^[\\w.]+$/];
msgClr = () => (trghelp.innerHTML = trgrndr.innerHTML = "") || [trgtxta, trghelp].forEach(e => e.classList.remove("iwarn", "isucc"));
rsltSh = rslt => { let ri = rndrsel.selectedIndex; trgtxta.value = rslt; !ri || (trgrndr.innerHTML = (ri > 1 ? rslt : "\\n<pre>" + rslt + "</pre>\\n")); };
window.txtaSel = e => _.msgClr() || e.focus() || e.setSelectionRange(0, e.textLength);
window.txtSwap = () => _.msgClr() || ([trgtxta.value, srctxta.value] = [srctxta.value, trgtxta.value]);
window.strPars = () => { let lm, sv = sepainp.value, rv = rfncinp.value.trim(); _.msgClr(); if (_.rxs[0].test(sv)) { trghelp.innerHTML = (lm = (srctxta.value.match(eval(sv)) || []).length) + " replacements have been made."; [trgtxta, trghelp].forEach(e => e.classList.add(!lm ? "iwarn" : "isucc")); } _.rsltSh( srctxta.value.replace( !_.rxs[1].test(sv) ? sv : eval(sv), window[rv] || (!_.rxs[2].test(rv) ? rv : window.eval(rv)) )); };

/*
   + *Optional:* Un-comment the following block of code to generate the
     full source code (e.g., for building a standalone web app).
*/

/*
scrGen = src => "let " + src.match(/^rxs = [^]+?(?=\\n+ *(\\*\\/|\\/[\\/*]))/m)[0].replace(/\\b_\\.\\b| *"";?$|^\\n/gm, "").replace(/^.+/, m => m.replace(/ *=(?= *[a-z]|$)/gi, ",")).replace(/^(\\w+ =.+);(?=\\n\\w+ =)/gm, "$1,"); //
dwrap = ["<!DOCTYPE html>\\n<html lang=en>\\n<title>Search and Replace</title>\\n<meta charset=\\"utf-8\\">\\n<meta name=viewport content=\\"width=device-width, initial-scale=1\\">\\n\\n", "\\n\\n<script type=module>\\n", "\\n</script>\\n</html>"];
respShow((dwrap[0] + srwrap.outerHTML + dwrap[1] + scrGen(xstor["JScode"]["tutorial3"]) + dwrap[2]).replace(/\\n<hr>/, "").replace(/<(?=[!/?a-z])/gi, "&lt;"))
*/

/*
 6. Extend your use of the search-and-replace web app with some
    know-how to __locate any substring of a lengthy document__.
    + Before we can demo the new search-and-replace UI on this page
      we must reload the page with a supplemental data module that
      contains lengthy document texts -- called "sparknotes".
    + Import the "sparknotes" data module and reload this tutorial
      all at once by un-commenting the following one line of code.
*/

// window.location.search = "cmods=cjs-spark.js&dload=tutorial3&jsrcs=../-res-js-mdit/markdown-it.min.js,../-res-js-mdit/markdown-it-deflist.min.js"

/*
    + Having reloaded the page, ensure that the search-and-replace UI
      is again displayed (down below) by un-commenting the
      \`try { … } catch { … }\` line in step 5, above.
    + With the search-and-replace UI displayed, inject demo data into
      the UI fields by un-commenting the next block of code.
*/

/*
srctxta.value = xstor["sparknotes"]["dune"].replace(/\\n\\*\\/$|^\\/\\*\\n/g, "");
sepainp.value = "/^.*?(\\\\bdune\\\\b).*\\\\n*|^.*\\\\n*/gim"; //
rfncinp.value = "(m, c1, i) => { i || (window.itr = 0); return !c1 ? \\"\\" : \\" \\" + ++itr + \\". \\" + m; }";
*/

/*
    + Tap on the "PARSE" button, then confirm that the search/replace
      operation executed correctly; The result (found in the "Target"
      text field) should be a numbered list of only those lines from
      the source text that contain the word "dune".
    + This result gives us the context of every "dune" substring in
      the document. However, we want to know the locations of all
      matches. So, we will generate a new result that pairs each
      match with a line-number reference (instead of the match count).
    + Un-comment the following one line of code, then tap "PARSE".
*/

// rfncinp.value = "(m, c1, i) => { i || (window.itr = 0); ++itr; return !c1 ? \\"\\" : \\"[line \\" + itr + \\"]:\\\\n\\" + m; }";

/*
    + This result gives us a helpful location reference for every
      "dune" substring. But, we would also like to have a visual
      reference of the matches. So we will generate one more result
      that also highlights every match -- which can then be rendered
      separately as a styled, PRE-formatted text block (beneath the
      search-and-replace UI).
    + Un-comment the following one line of code, choose the
      "PRE render" option (of the select list, in front of the
      "PARSE" button) and tap "PARSE".
*/

// rfncinp.value = "(m, c1, i) => { i || (window.itr = 0); ++itr; return !c1 ? \\"\\" : \\"[line \\" + itr + \\"]:\\\\n\\" + m.replace(/\\\\bdune\\\\b/gi, \\"<mark>$&</mark>\\"); }";

/*
 7. Use search-and-replace to __apply HTML markup to an article__ --
    such that its structural parts are displayed meaningfully.
    + The "Dune" book-review article that we are using for demo
      purposes is minimally marked up (with "markdown" syntax);
      So, even when viewing its plain-text form, a reader can make
      distinctions between a subtitle, a blockquote, a definition
      list and an ordinary paragraph.
    + But, displayed in a browser, the text-document's structural
      parts would be mushed together and lost to all recognition --
      unless the document was first marked up with HTML tags.
    + Un-comment the following block of code, then tap "PARSE" to see
      the same article now intertwined with HTML markup tags.
    + Select "Normal render" and tap "PARSE" again to confirm that
      the rendered document's structure is appropriately kept intact.
*/

/*
try { docMrkp } catch { markdownit && (window.docMrkp = md => markdownit({ html: 1, typographer: 1 }).use(markdownitDeflist).render(md)); };
rndrsel.selectedIndex = 0;
sepainp.value = "/[^]+/";
rfncinp.value = "docMrkp";
msgClr()
*/

/*
    + In this scenario, we did not provide a function definition as
      our "Replace" input; Instead, we provided the function name
      (\`docMrkp\`) of a sophisticated parsing function that performs
      multiple search/replace conversions algorithmically.
    + Notice also that the short *RegExp* provided as our "Search"
      input serves the singular purpose of injecting the entire
      document-as-a-string into our replacement function \`docMrkp\`.

 8. Use search-and-replace to __readjust the width of a quick memo or__
    __report__ to the screen size in which it will be reviewed or edited.
    + In our modern world, much of our communications are textual
      messages displayed on a narrow, handheld screen.
    + Within these prevailing dimensional constraints, more often
      than we like our memos and reports do not display nicely.
    + As an example special case, inspect the tutorial text in the
      *ENTRY* pane of the JavaScript Calculator app; Even if we viewed
      it on a wide computer screen, each line of the instructional
      text would get clipped and become unreadable if it didn't wrap
      around before hitting the 71^st^ position from the left edge
      (i.e., formatted at 70 characters per line -- or, 70 cpl).
    + Un-comment the following block of code to activate a pair of
      line-wrapping width adjuster tools -- which may be applied
      using the search-and-replace web app.
*/

/*
rndrsel.selectedIndex = 1; rfncinp.value = trgtxta.value = ""; msgClr()
window.lineUnwr = str => str.replace(/(\\S) *\\n(?!\\n|#|>|[:*+~-]? |\\d+\\.\\s|$)/g, "$1 "); //
window.lineWrap = str => { let cpl = 70, cut = 0, brk = "\\n", rex = ".{1," + cpl + "}(\\\\s|$)" + (cut ? "|.{" + cpl + "}|.+$" : "|\\\\S+?(\\\\s|$)"); return str.match(new RegExp(rex, "g")).join(brk); };
*/

/*
    + Now, prepare the text of the "Dune" article to be readable in
      the *ENTRY* pane of the JavaScript Calculator app by typing
      \`lineWrap\` into the "Replace" input and tapping "PARSE".
    + *Challenge:* Play with the value of the \`cpl\` variable
      (your desired maximum width) in the \`lineWrap\` function to
      visualize the "Dune" article in different line-wrapping states.
    + *Also:* After applying a different wraparound width, try undoing
      it: Clear the "Source" text field, tap "SWAP" to swap the
      "Source" and "Target" content, then use \`lineUnwr\` to restore
      the article to its original state.
*/
//`;

export {
  groupname, tutorial1, tutorial2, tutorial3
};
