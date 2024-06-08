/* JavaScript module */

const _module = "JScode";

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
    conversions are made by *Google*.

    In the *Google* search bar, type | In the result list, expect
    "100 yards to meters"          | "91.44 meters"
    "101 mph to km/h"              | "162.544 kilometers per hour"
    "110 Fahrenheit to Celsius"    | "43.3333 Celsius"
    "1111 to Roman"                | "MCXI"

 2. Write a __conversion function__.
    + A *function* is defined (written) by sequentially combining:
      an arbitrary function name, the assignment operator \`=\`,
      input variable(s), the arrow notation \`=>\`, and manipulations
      or calculations (formulas) to be done on the input.
    + A *function* is called (a.k.a., executed or invoked) by writing
      the function name followed by a set of parentheses. Input data
      (arguments) are written within the parentheses.
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
      separated by a comma \`,\`.
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

ucLen = (n, u0, u1) => u0 === u1 ? n : /^in/i.test(u0) && /^ft/i.test(u1) ? n / 12 : /^in/i.test(u0) && /^yd/i.test(u1) ? n / 36 : /^ft/i.test(u0) && /^in/i.test(u1) ? n * 12 : /^ft/i.test(u0) && /^yd/i.test(u1) ? n / 3 : /^yd/i.test(u0) && /^in/i.test(u1) ? n * 36 : /^yd/i.test(u0) && /^ft/i.test(u1) ? n * 3 : "error";
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

ucSpd = (n, u0, u1) => u0 === u1 ? n : /^mi?[/p]h/i.test(u0) && /^km?[/p]h/i.test(u1) ? n * 5280 * 12 * 0.0000254 : /^km?[/p]h/i.test(u0) && /^mi?[/p]h/i.test(u1) ? n / 0.0000254 / 12 / 5280 : "error";
 // makes conversion of speeds in either
 // miles-per-hour (mph) or kilometers-per-hour (km/h)
ucSpd(101, "mph", "km/h")

ucTmp = (n, u0, u1) => u0 === u1 ? n : /^F/i.test(u0) && /^C/i.test(u1) ? (n - 32) * 5 / 9 : /^F/i.test(u0) && /^K/i.test(u1) ? (n - 32) * 5 / 9 + 273.15 : /^C/i.test(u0) && /^F/i.test(u1) ? n * 9 / 5 + 32 : /^C/i.test(u0) && /^K/i.test(u1) ? n + 273.15 : /^K/i.test(u0) && /^F/i.test(u1) ? (n - 273.15) * 9 / 5 + 32 : /^K/i.test(u0) && /^C/i.test(u1) ? n - 273.15 : "error";
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

uConv = (n, u0, u1) => { let [x0, x1] = [_.uxs.findIndex(e => e.test(u0)), _.uxs.findIndex(e => e.test(u1))]; return !n ? "" : typeof n !== 'number' ? (!/^[cdilmvx]+$/i.test(n) || x0 > 0 ? "error" : _.ufrRom(n)) : x0 < 1 && x1 < 1 ? _.utoRom(n) : x1 < 1 ? "" : x0 === x1 ? n : (_.ucs["f" + x0 + x1] || (() => "error"))(n); };

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
ucui = "\\n<hr style=\\"margin: 1.5rem 0;\\" />\\n<h4 class=cfield>Unit Converter</h4>";
ucui += "\\n<div class=cfield><span class=ccntr><input type=text id=ucinp placeholder=\\"Enter measurement&hellip;\\" /></span><span class=ccntr><select id=ulist0>\\n";
ucui += opts + "\\n</select></span></div>\\n<div class=cfield><span class=ccntr><input type=text id=ucout readonly /></span><span class=ccntr><select id=ulist1>\\n";
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
    + *Include:* a block of styles (\`<style> … </style>\`), a title
      block (\`<h4 class=cfield>Sliding Tiles</h4>\`), some game-board
      controllers (\`<div><span class=ccntr> … </span></div>\`), and
      the game-board display (\`<table id=g1board> … </table>\`).
*/

// __* * * SLIDING TILES * * *__
g1ui = "\\n<style>\\n*, *::before, *::after { box-sizing: inherit; }";
g1ui += "\\nhtml { box-sizing: border-box; color: DimGrey; /* font-size: 14px; */ min-width: 375px; overflow-wrap: break-word; }";
g1ui += "\\nbutton, input, select, pre { margin: 0; }\\nhr { margin: 1.5rem 0; }";
g1ui += "\\n#g1wrap { font: normal 1rem Helvetica, Arial, sans-serif; max-width: 720px; margin: 24px 0; }";
g1ui += "\\n#g1wrap button, #g1wrap .btn1, #g1wrap input:not([type=checkbox]):not([type=radio]), #g1wrap select { background: #f8f8f8; color: Grey; font-size: calc(5rem / 6); line-height: 1.5rem; height: 1.5rem; padding: 0 0.5rem; border: 0; border-radius: 0; }";
g1ui += "\\n#g1wrap .cfield { max-width: 359px; }\\n#g1wrap .cfield:not(:last-child) { margin-bottom: 0.5rem; }";
g1ui += "\\n#g1wrap .ccntr:not(:last-of-type) { margin-right: 0.5rem; }";
g1ui += "\\n#g1wrap :not(.cfield)>.ccntr { display: inline-block; height: 1.5rem; margin-bottom: 0.5rem; }";
g1ui += "\\n#g1wrap .blank, #g1wrap .gtile { width: 61px; height: 61px; border: 4px solid White; }";
g1ui += "\\n#g1wrap .gtile { background: LightSteelBlue; color: White; font-size: large; font-weight: bold; cursor: pointer; text-align: center; }";
g1ui += "\\n#trows, #tcols { max-width: 36px; }";
g1ui += "\\n#g1board { margin: 12px; border-collapse: collapse; }";
g1ui += "\\n#g1scor { position: relative; top: -8px; font-size: small; margin-left: 16px; }\\n#g1movs { font-weight: bold; }";
g1ui += "\\n</style>\\n<hr />\\n<h4 class=cfield>Sliding Tiles</h4>";
g1ui += "\\n<div class=cfield><em>Objective:</em> Order the characters from least to greatest&mdash;starting at the top left&nbsp;corner.</div>";
g1ui += "\\n<div>\\n<label class=ccntr><select id=tnmrl>\\n<option disabled>Characters</option>\\n";
g1ui += ["1 2 3 4 &hellip;", "I II III IV &hellip;", "A B C D &hellip;", "Α Β Γ Δ &hellip;"].map(e => "<option>" + e + "</option>").join("\\n");
g1ui += "\\n</select></label><label class=ccntr><select id=tclrs>\\n<option disabled>Color Cascades</option>\\n";
g1ui += ["No gradient", "Red gradient", "Gold gradient", "Blue gradient", "Rainbow pattern"].map(e => "<option>" + e + "</option>").join("\\n");
g1ui += "\\n</select></label><label class=ccntr>Auto-shuffle <input type=checkbox id=oshuf checked /></label>\\n</div>\\n<div>";
g1ui += "\\n<label class=ccntr>Rows <input type=text id=trows value=4 size=2 /></label>";
g1ui += "\\n<label class=ccntr>Columns <input type=text id=tcols value=4 size=2 /></label>";
g1ui += "\\n<label class=ccntr><input type=button value=\\"&orarr; NEW GAME\\" onclick=jg1.g1Reset() /></label>\\n</div>";
g1ui += "\\n<table id=g1board></table>\\n<div id=g1scor class=cfield>Count: <span id=g1movs>0</span></div>";
g1ui += "\\n<div><input type=button class=ccntr value=\\"RETRACT MOVE\\" onclick=jg1.m1Rvrs() /><input type=button value=\\"RESET COUNTER\\" onclick=jg1.c1Zero() /></div>\\n";

 // g1wrap.remove() // *Alert:* useful only if edit-testing the GUI code above
 try { window.pz1wrap || g1wrap } catch { ndiv = document.createElement('div'); ndiv.id = "g1wrap"; ndiv.innerHTML = g1ui; cmain.appendChild(ndiv); }

/*
    + The rendered GUI, below, is built from the leading block of
      code, above, in which strings of HTML/CSS text are cumulatively
      assigned to the GUI variable (\`g1ui += " … "\`).
    + As we can see below, the entire GUI string was injected into
      this web page -- where it will remain as rendered (even after
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
    + Un-comment the following two lines of code and execute its
      operations (by de-focusing the calculator app's *ENTRY* pane)
      to generate the web-doc text that will be the app framework.
*/

 // dwraps = ["<!DOCTYPE html>\\n<html lang=en>\\n<title>Puzzles, JS Tutorial 2</title>\\n<meta charset=\\"utf-8\\">\\n<meta name=viewport content=\\"width=device-width, initial-scale=1\\">\\n\\n", "\\n\\n<script type=module>\\n", "\\n</script>\\n</html>"];
 // reShow( dwraps[0] + g1wrap.outerHTML.replace(/\\n<hr.*?>/, "") + dwraps[1] + dwraps[2] )

/*
    + Select and copy the orange text that appears above, overtop
      the calculator.
    + Paste the copied text into a new text file; Save the file under
      any filename with an HTML extension (e.g., \`jsgame-tiles.html\`).
    + *Note:* When opened up in a web browser, the web app will not
      be responsive because it does not yet have any script code.

 3. Add in the puzzle's inner logic -- its script -- to __turn a static__
    __web doc into a dynamic web app__ -- an interactive game.
    + To generate the web-app script code, first select and copy the
      following two blocks of code -- beginning with \`tnx = …\` and
      ending with \`jg1.g1Reset();\`.
*/

tnx = tcx = rval = cval = tmax = tovr = unsh = cxs = shxs = shuf = tarr = cr1s = cr2s = "";
clrefs = [ "", "", ["#752424", "#9c3030", "#c33c3c", "#cf6363", "#db8a8a", "#e7b1b1", "#f3d8d8"], ["#856514", "#b1871b", "#dea821", "#e4ba4e", "#ebcb7a", "#f2dca6", "#f8eed3"], ["#2b506e", "#396a93", "#4785b8", "#6c9dc6", "#91b6d4", "#b6cee2", "#dae7f1"], ["#ff9999", "#ffcc99", "#fff099", "#99cc99", "#9999ff", "#cc99cc", "#d8bfd8"] ];
uara = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
urom = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
utoRom = v => { let s = ""; _.uara.forEach((ai, i) => { while (v % ai < v) { s += _.urom[i]; v -= ai; } }); return s; };
utoEng = v => { let i, codpts = []; while (v) { i = 0; while ((v - ++i) % 26); codpts.unshift(i + 64); v = (v - i) / 26; } return String.fromCodePoint(...codpts || 65); };
utoGre = v => { let i, codpts = []; while (v) { i = 0; while ((v - ++i) % 24); codpts.unshift((i < 18 ? i : 1 + i) + 912); v = (v - i) / 24; } return String.fromCodePoint(...codpts || 913); };
clRnk1s = () => _.unsh.map( v => _.clrefs[_.tcx][ _.cxs.find( x => _.tovr < 0 ? x === 6 || v <= _.cval || (v % _.cval > 0 && v % _.cval <= _.cval - _.rval + 1) || (v > _.cval * (1 + x) - _.rval + (1 + x) && v <= _.cval * (1 + x)) || (v - (1 + x) - (_.cval - _.rval)) % _.cval === 0 : x === 6 || v - _.tovr <= _.tmax * (1 + x) || (v - (1 + x)) % _.tmax === 0 )]);
clRnk2s = () => _.unsh.map( v => ( _.tovr < 0 ? v <= _.cval - _.rval || (v - 1 - (_.cval - _.rval)) % (1 + _.cval) !== 0 || v > 7 * _.cval : v - 1 < _.tovr || (v - 1 - _.tovr) % (1 + _.tmax) !== 0 || v - 1 - _.tovr > 7 * _.tmax ) ? 'White' : _.tcx < 5 ? 'Gold' : 'LimeGreen' );
nAlt = v => _.tnx == 2 ? _.utoRom(v) : _.tnx == 3 ? _.utoEng(v) : _.tnx == 4 ? _.utoGre(v) : v;
oPre = a0 => !Array.isArray(a0) ? [] : !(a0 = a0.flat().map((e, i) => [(e > 99 ? "" : e > 9 ? "0" : "00") + e, i]).sort().map(([e, o]) => o)) || a0.concat(a0[0]).slice(1);
isSolva = () => { let ctinvs = _.shxs.filter(e => e.v).map(e => e.i + 1).reduce((a, b, i, f) => a + f.slice(i + 1).reduce((c, d) => c + (d > b ? 0 : 1), 0), 0); return (ctinvs + (_.cval % 2 === 1 ? 0 : _.rval - Math.ceil((_.shuf.indexOf(0) + 1) / _.cval))) % 2 === 0; };
posSwap = (r, c) => [_.tarr[r][c], _.tarr[r][c + 1]] = [_.tarr[r][c + 1], _.tarr[r][c]];
gbdGen = () => g1board.innerHTML = _.tarr.map( (e, i) => "\\n<tr>" + e.map( (f, j) => f === 0 ? "<td class=blank> </td>" : \`<td class=gtile \${!_.cr1s ? "" : \`style="background:\${_.cr1s[f]};color:\${_.cr2s[f]};" \`}onclick=jg1.tileSli(\${i},\${j})>\${f}</td>\` ).join("") + "</tr>" ).join("") + "\\n";

window.jg1 = { tarr0: [], m1trk: [], m1bl0: [] };
jg1.c1Zero = () => (g1movs.innerHTML = 0) || (jg1.m1trk = []);
jg1.g1Reset = (a0, d0, c0 = tclrs.selectedIndex, n0 = tnmrl.selectedIndex) => { Array.isArray(a0) || a0 == null || (oshuf.checked = a0); _.tnx = tnmrl.selectedIndex = n0; _.tcx = tclrs.selectedIndex = c0; !d0 || (tcols.value = trows.value = d0); _.rval = +trows.value; _.cval = +tcols.value; _.tmax = _.rval <= _.cval ? _.rval : _.cval; _.tovr = (_.rval - _.cval) * _.tmax; jg1.c1Zero(); a0 = _.oPre(a0); _.unsh = Array.from(Array(_.rval * _.cval).keys()); _.cxs = Array.from(Array(_.tmax > 7 ? 7 : _.tmax).keys()); [_.cr1s, _.cr2s] = _.tcx < 2 ? [0, 0] : [_.clRnk1s(), _.clRnk2s()]; _.unsh = _.unsh.slice(1).map(_.nAlt).concat(0); _.tcx < 2 || ([_.cr1s, _.cr2s] = [_.cr1s, _.cr2s].map(e => Object.fromEntries(_.unsh.map((v, i) => [v, e[i + 1]])))); _.shxs = _.unsh.map((v, i) => ({ i, v, o: a0[i] || Math.random() })).sort((a, b) => !a0.length && !oshuf.checked || a.o - b.o); _.shuf = _.shxs.map(e => e.v); _.tarr = Array.from(Array(_.rval)).map(() => _.shuf.splice(0, _.cval)); _.shuf = _.tarr.flat(); _.isSolva() || (_.shuf[0] && _.shuf[1] ? _.posSwap(0, 0) : _.posSwap(_.rval - 1, _.cval - 2)); jg1.tarr0 = JSON.parse(JSON.stringify(_.tarr)); jg1.m1bl0 = [_.tarr.findIndex(e => e.includes(0)), _.tarr.find(e => e.includes(0)).findIndex(e => !e)]; _.gbdGen(); };
jg1.tileSli = (rx, cx, bkup) => { let bl = [[rx - 1, cx], [rx + 1, cx], [rx, cx - 1], [rx, cx + 1]].find(([r, c]) => (_.tarr[r] || "")[c] === 0); !bl || (bkup || jg1.m1trk.push([bl[0], bl[1]])) && (jg1.m1bl0 = [rx, cx]) && ([_.tarr[bl[0]][bl[1]], _.tarr[rx][cx]] = [_.tarr[rx][cx], 0]) && (g1movs.innerHTML = "" + _.tarr !== "" + _.unsh ? jg1.m1trk.length + " moves" : "<em>Puzzle solved in " + jg1.m1trk.length + " moves!</em>") && _.gbdGen(); };
jg1.m1Rvrs = () => !jg1.m1trk.length || jg1.tileSli(... jg1.m1trk.pop(), 1);
jg1.g1Reset();

/*
    + Next, un-comment the following three lines of code and execute
      its operations (by de-focusing the calculator app's *ENTRY* pane).
    + *Function:* This code temporarily stores user-copied text to a
      global variable, \`t2js\` -- and subsequently restructures the
      copied text, producing the custom script code that will breathe
      life into our web-app game.
*/

 // recon.innerHTML = window.t2js = "" // clears any orange text (in case GUI text is still visible) and resets t2js variable
 // scrGen = src => src && "\\n" + (src.match(/^(?:jopts|lit0s|tnx) = [^]+?(?=\\n+ *(\\*\\/|\\/[\\/*])|(?![^]))/gm) || []).map(e => "let " + e.replace(/\\b_\\.\\b| *\\/\\/ *$| *"";?$|^\\n/gm, "").replace(/^[ =\\w]+\\n/, m => m.replace(/ *=(?= *[a-z]|\\n)/gi, ",")).replace(/^( *\\b[ ,\\w]+?(?: *= .+?|))[,;]?\\n(?= *\\b[ ,\\w]+(?: *= .+|);?$)/gm, "$1,\\n  ")).join("\\n\\n") + "\\n"; //
 // !!window.t2js || navigator.clipboard.readText().then(s => window.t2js = s).then(_.scrGen).then(reShow).catch(reShow)

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
    rendered (displayed) anywhere on this page.
    + Un-comment an associated \`try { … } catch { … }\` line of code
      (following each block of HTML/CSS text) to inject into this web
      page, and display (down below), another game's GUI.
    + To generate the web-app code of a game -- for building another
      standalone game app (as in step's 2 and 3, above) -- make use of
      the text-generating commands already provided in step's 2 and 3.
      Within those lines of code, above:
      * re-comment (deactivate) the 1st operation of step 3 (i.e., the
        line \`recon.innerHTML = …\`), and simply change the \`g1wrap\`
        variable (in the 2nd operation of step 2) to the other game's
        "wrap" ID (e.g., \`g2wrap\`) -- to generate its HTML framework;
      * then, to generate its JS code, re-assign to the \`t2js\` global
        variable the other game's "script" text (by copying the
        corresponding text block), and un-comment (reactivate) again
        the 1st operation of step 3.
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
g2ui += "\\nhtml { box-sizing: border-box; color: DimGrey; /* font-size: 14px; */ min-width: 375px; overflow-wrap: break-word; }";
g2ui += "\\nbutton, input, select, pre { margin: 0; }\\nhr { margin: 1.5rem 0; }";
g2ui += "\\n#g2wrap { font: normal 1rem Helvetica, Arial, sans-serif; max-width: 720px; margin: 24px 0; }";
g2ui += "\\n#g2wrap button, #g2wrap .btn1, #g2wrap input:not([type=checkbox]):not([type=radio]), #g2wrap select { background: #f8f8f8; color: Grey; font-size: calc(5rem / 6); line-height: 1.5rem; height: 1.5rem; padding: 0 0.5rem; border: 0; border-radius: 0; }";
g2ui += "\\n#g2wrap .cfield { max-width: 359px; }\\n#g2wrap .cfield:not(:last-child) { margin-bottom: 0.5rem; }";
g2ui += "\\n#g2wrap .ccntr:not(:last-of-type) { margin-right: 0.5rem; }";
g2ui += "\\n#g2wrap :not(.cfield)>.ccntr { display: inline-block; height: 1.5rem; margin-bottom: 0.5rem; }";
g2ui += "\\n#g2bcntr { position: relative; padding-top: 1px; }";
g2ui += "\\n#g2circt { margin: 48px; border-collapse: collapse; }";
g2ui += "\\n#g2circt td { width: 59px; height: 59px; border: 4px solid black; }";
g2ui += "\\n#g2board { position: absolute; top: 0; margin: 16px; border-spacing: 8px; }";
g2ui += "\\n#g2board td { background: MediumOrchid; width: 51px; height: 51px; border-radius: 26px; box-shadow: 0 0 16px 4px Orchid; cursor: pointer; }";
g2ui += "\\n#g2board td.ldark { background: Indigo; box-shadow: 0 0 16px 4px Grey; }";
g2ui += "\\n#g2scor { position: relative; top: -12px; font-size: small; margin-left: 16px; }\\n#g2movs { font-weight: bold; }";
g2ui += "\\n</style>\\n<hr />\\n<h4 class=cfield>Lights Out<!--\\n 1,4|1,2,3\\n 1,2|1,3,4\\n 3|1,5|2,4|1,2,3,4,5\\n 2|3,4|1,4,5|1,2,3,5\\n 1|3,5|2,4,5|1,2,3,4\\n 0|1,3,5|2,3,4|1,2,4,5\\n--></h4>";
g2ui += "\\n<div class=cfield><em>Objective:</em> Switch all matrix lights off.</div>";
g2ui += "\\n<div class=cfield><em>Game Action:</em> Switching a diode in this lighting matrix also switches any directly connected up-, down-, left- or right- diodes.</div>";
g2ui += "\\n<div>\\n<span class=ccntr><select id=lpatt>";
g2ui += ["&mdash;Startup Pattern&mdash;", "Treasure marker (in 4)", "Lucy's diamond (in 5)", "Eight-pocket table (in 5)", "Picasso emoji (in 5)", "Peep holes (in 6)", "Split screen (in 6)", "Trick shot (in 8)", "Beauty mark (in 8)", "Square target (in 9)", "Shark tooth (in 10)", "Bi-polar opposites (in 11)", "Road caution marks (in 11)", "Central light out (in 12)", "Button holes (in 13)", "All-seeing eye (in 14)"].map(e => \`\\n<option>\${e}</option>\`).join("");
g2ui += "\\n</select></span><span class=ccntr><input type=button value=\\"&orarr; RESTART\\" onclick=jg2.g2Reset() /></span>\\n</div>";
g2ui += "\\n<div id=g2bcntr>\\n<table id=g2circt><tbody>";
g2ui += [0, 1, 2, 3].map(r => "\\n<tr>" + [0, 1, 2, 3].map(c => "<td></td>").join("") + "</tr>").join("");
g2ui += "\\n</tbody></table>\\n<table id=g2board><tbody>";
g2ui += [0, 1, 2, 3, 4].map(r => "\\n<tr>" + [0, 1, 2, 3, 4].map(c => \`<td id=n\${r}\${c} onclick=jg2.litSwi(\${r},\${c})></td>\`).join("") + "</tr>").join("");
g2ui += "\\n</tbody></table>\\n</div>";
g2ui += "\\n<div id=g2scor class=cfield>Count: <span id=g2movs>0</span></div>";
g2ui += "\\n<div class=cfield><span class=ccntr><input type=button value=\\"RESET COUNTER\\" onclick=jg2.c2Zero() /></span></div>";
g2ui += "\\n<div class=cfield><label class=ccntr><input type=checkbox id=u2tog /> Allow single-diode toggle&mdash;Suspend&nbsp;counter</label></div>\\n";

 // g2wrap.remove() // *Alert:* useful only if edit-testing the GUI code above
 // try { window.pz1wrap || g2wrap } catch { ndiv = document.createElement('div'); ndiv.id = "g2wrap"; ndiv.innerHTML = g2ui; cmain.appendChild(ndiv); }

lit0s = [ "", ["0,0", "0,4", "1,1", "1,3", "2,2", "3,1", "3,3", "4,0", "4,4"], ["0,2", "1,1", "1,3", "2,0", "2,4", "3,1", "3,3", "4,2"], ["0,0", "0,2", "0,4", "2,0", "2,4", "4,0", "4,2", "4,4"], ["2,1", "2,3", "3,2", "4,1", "4,2", "4,3"], ["2,1", "2,3"], ["0,2", "1,2", "2,2", "3,2", "4,2"], ["3,2", "3,4"], ["3,3"], ["1,1", "1,2", "1,3", "2,1", "2,3", "3,1", "3,2", "3,3"], ["2,2", "3,1", "3,2", "3,3", "4,0", "4,1", "4,2", "4,3", "4,4"], ["0,4", "4,0"], ["0,2", "1,1", "2,0", "2,4", "3,3", "4,2"], ["2,2"], ["1,2", "2,1", "2,3", "3,2"], ["1,1", "1,2", "1,3", "2,0", "2,2", "2,4", "3,1", "3,2", "3,3"] ];
window.jg2 = { m2trk: 0 };
jg2.c2Zero = () => g2movs.innerHTML = jg2.m2trk = 0;
jg2.g2Reset = () => jg2.c2Zero() || [0, 1, 2, 3, 4].forEach( r => [0, 1, 2, 3, 4].forEach( c => window["n" + r + c].classList[_.lit0s[lpatt.selectedIndex].includes("" + [r, c]) ? "add" : "remove"]("ldark") ) );
jg2.litSwi = (rx, cx) => { u2tog.checked ? window["n" + rx + cx].classList.toggle("ldark") : [[rx - 1, cx], [rx, cx - 1], [rx, cx], [rx, cx + 1], [rx + 1, cx]].forEach( ([r, c]) => r < 0 || c < 0 || r > 4 || c > 4 || window["n" + r + c].classList.toggle("ldark") ); u2tog.checked || ( g2movs.innerHTML = [0, 1, 2, 3, 4].some( r => [0, 1, 2, 3, 4].some(c => !window["n" + r + c].classList.contains("ldark")) ) ? ++jg2.m2trk + " switches" : "<em>Puzzle solved with " + ++jg2.m2trk + " switches!</em>" ); };

// __* * * PEGS * * *__
g3ui = "\\n<style>\\n*, *::before, *::after { box-sizing: inherit; }";
g3ui += "\\nhtml { box-sizing: border-box; color: DimGrey; /* font-size: 14px; */ min-width: 375px; overflow-wrap: break-word; }";
g3ui += "\\nbutton, input, select, pre { margin: 0; }\\nhr { margin: 1.5rem 0; }";
g3ui += "\\n#g3wrap { font: normal 1rem Helvetica, Arial, sans-serif; max-width: 720px; margin: 24px 0; }";
g3ui += "\\n#g3wrap button, #g3wrap .btn1, #g3wrap input:not([type=checkbox]):not([type=radio]), #g3wrap select { background: #f8f8f8; color: Grey; font-size: calc(5rem / 6); line-height: 1.5rem; height: 1.5rem; padding: 0 0.5rem; border: 0; border-radius: 0; }";
g3ui += "\\n#g3wrap .cfield { max-width: 359px; }\\n#g3wrap .cfield:not(:last-child) { margin-bottom: 0.5rem; }";
g3ui += "\\n#g3wrap .ccntr:not(:last-of-type) { margin-right: 0.5rem; }";
g3ui += "\\n#g3wrap :not(.cfield)>.ccntr { display: inline-block; height: 1.5rem; margin-bottom: 0.5rem; }";
g3ui += "\\n#g3bcntr { position: relative; padding-top: 1px; }";
g3ui += "\\n#g3panel { box-sizing: content-box; margin: 15px 16px; border: 4px solid DarkKhaki; border-collapse: collapse; }";
g3ui += "\\n#g3panel td { background: beige; width: 40px; height: 40px; }";
g3ui += "\\n#g3panel td.chkr0 { background: LightSlateGrey; }\\n#g3panel td.chkr1 { background: Gainsboro; }";
g3ui += "\\n#g3panel td.jdest { box-shadow: inset 0 0 0 5px White; }";
g3ui += "\\n#g3board { position: absolute; top: 0; margin: 7px; border-spacing: 27px; }";
g3ui += "\\n#g3board td { background: Black; width: 15px; height: 15px; border-radius: 8px; box-shadow: inset 1px 0 3px 2px Grey; cursor: pointer; }";
g3ui += "\\n#g3board td.nohol { background: Transparent; box-shadow: none; }";
g3ui += "\\n#g3board td.phead { background: Red; box-shadow: -1px -1px 0 3px red, 1px 1px 8px 3px grey; }";
g3ui += "\\n#g3scor { position: relative; top: -8px; font-size: small; margin-left: 16px; }\\n#g3movs { font-weight: bold; }";
g3ui += "\\n</style>\\n<hr />\\n<h4 class=cfield>Pegs</h4>";
g3ui += "\\n<div class=cfield><em>Objective:</em> Remove all board pegs but&nbsp;one.</div>";
g3ui += "\\n<div class=cfield><em>How to play:</em> A move is made by jumping one peg with an adjacent peg; The jumped peg is&nbsp;removed.<br>Tap on a peg to select it for jumping&mdash;Then, if you have a choice, tap on a highlighted hole to select it for that peg's&nbsp;destination.</div>";
g3ui += "\\n<div>\\n<span class=ccntr><select id=ppatt>\\n";
g3ui += ["&mdash;Startup Pattern&mdash;", "Cross Symbol", "Plus Sign", "Magician's Hat", "North Tower", "Arrowhead I", "Arrowhead II", "Arrow in Flight", "Egyptian Pyramid", "Red Diamond", "Solitaire"].map(e => "<option>" + e + "</option>").join("\\n");
g3ui += "\\n</select></span><span class=ccntr><input type=button value=\\"&orarr; RESTART\\" onclick=jg3.g3Reset() /></span>";
g3ui += "\\n</div>\\n<div id=g3bcntr>\\n<table id=g3panel><tbody>";
g3ui += [0, 1, 2, 3, 4, 5, 6].map(r => "\\n<tr>" + [0, 1, 2, 3, 4, 5, 6].map(c => "<td></td>").join("") + "</tr>").join("");
g3ui += "\\n</tbody></table>\\n<table id=g3board><tbody>";
g3ui += [0, 1, 2, 3, 4, 5, 6].map(r => "\\n<tr>" + [0, 1, 2, 3, 4, 5, 6].map(c => "<td " + (["0,0", "0,1", "0,5", "0,6", "1,0", "1,1", "1,5", "1,6", "5,0", "5,1", "5,5", "5,6", "6,0", "6,1", "6,5", "6,6"].includes("" + [r, c]) ? "class=nohol" : \`id=h\${r}\${c} onclick=jg3.pegJmp(\${r},\${c})\`) + "></td>").join("") + "</tr>").join("");
g3ui += "\\n</tbody></table>\\n</div>";
g3ui += "\\n<div id=g3scor class=cfield>Count: <span id=g3movs>0</span></div>";
g3ui += "\\n<div class=cfield><input type=button class=ccntr value=\\"RETRACT MOVE\\" onclick=jg3.m3Rvrs() /><input type=button value=\\"RESET COUNTER\\" onclick=jg3.c3Zero() /></div>";
g3ui += "\\n<div class=cfield><label class=ccntr><input type=checkbox id=u3tog /> Allow free peg placement&mdash;Suspend&nbsp;counter</label></div>\\n";

 // g3wrap.remove() // *Alert:* useful only if edit-testing the GUI code above
 // try { window.pz1wrap || g3wrap } catch { ndiv = document.createElement('div'); ndiv.id = "g3wrap"; ndiv.innerHTML = g3ui; cmain.appendChild(ndiv); }

jopts = peg0s = "";
a0t6 = [0, 1, 2, 3, 4, 5, 6];
p3sol = a0t6.map(r => _.a0t6.map(c => "" + [r, c])).flat();
g3panel = window.g3panel || document.createElement('table');
p3tds = Array.from(g3panel.querySelectorAll('tr')).map(e => e.querySelectorAll('td'));
osGen = (r, c) => [ [[r, c], [r - 1, c], [r - 2, c]], [[r, c], [r, c - 1], [r, c - 2]], [[r, c], [r, c + 1], [r, c + 2]], [[r, c], [r + 1, c], [r + 2, c]] ];
osClr = () => g3panel.querySelectorAll('.jdest').forEach(e => e.className = "");
pegsRplc = (jps, bkup) => _.osClr() || (_.jopts = 0) || (bkup || jg3.m3trk.push(jps)) && jps.forEach(([r, c]) => window["h" + r + c].classList.toggle("phead")) || u3tog.checked || ( g3movs.innerHTML = g3board.querySelectorAll('.phead').length !== 1 ? jg3.m3trk.length + " jumps" : "<em>Puzzle solved with " + jg3.m3trk.length + " jumps!</em>" );
[ [0,0], [0,1], [], [0,5], [0,6], [1,0], [1,1], [], [1,5], [1,6], [], [5,0], [5,1], [], [5,5], [5,6], [6,0], [6,1], [], [6,5], [6,6] ].forEach( ([r, c], i) => r == null || !_.p3tds[r] || (_.p3tds[r][c].className = i % 2 === 0 ? "chkr0" : "chkr1") );
[47, 42, 40, 35, 12, 7, 5, 0].forEach(e => _.p3sol.splice(e, 2));
p3sol.splice(16, 1);
peg0s = [ "", ["1,3", "2,2", "2,3", "2,4", "3,3", "4,3"], ["1,3", "2,3", "3,1", "3,2", "3,3", "3,4", "3,5", "4,3", "5,3"], ["4,1", "4,2", "4,3", "4,4", "4,5", "5,2", "5,3", "5,4", "6,2", "6,3", "6,4"], ["0,2", "0,3", "0,4", "1,2", "1,3", "1,4", "2,2", "2,3", "2,4", "3,2", "3,4"], ["1,4", "2,3", "2,4", "3,2", "3,3", "3,4", "4,1", "4,2", "4,3", "4,4"], ["0,4", "1,3", "1,4", "2,3", "2,4", "3,1", "3,2", "3,3", "3,4", "4,0", "4,1", "4,2", "4,3", "4,4"], ["1,4", "2,0", "2,1", "2,4", "2,5", "3,0", "3,1", "3,2", "3,3", "3,4", "3,5", "3,6", "4,0", "4,1", "4,4", "4,5", "5,4"], ["1,3", "2,2", "2,3", "2,4", "3,1", "3,2", "3,3", "3,4", "3,5", "4,0", "4,1", "4,2", "4,3", "4,4", "4,5", "4,6"], p3sol.filter((e, i) => ![0, 2, 6, 12, 19, 25, 29, 31].includes(i)), _.p3sol ];
window.jg3 = { m3trk: [] };
jg3.c3Zero = () => (g3movs.innerHTML = 0) || !(jg3.m3trk = []);
jg3.g3Reset = () => _.osClr() || jg3.c3Zero() || _.a0t6.forEach( r => _.a0t6.forEach( c => !window["h" + r + c] || window["h" + r + c].classList[_.peg0s[ppatt.selectedIndex].includes("" + [r, c]) ? "add" : "remove"]("phead") ) );
jg3.pegJmp = (rx, cx) => { let jx, ph1 = window["h" + rx + cx].classList.contains("phead"); _.jopts = !ph1 ? _.jopts : _.osGen(rx, cx); u3tog.checked ? _.osClr() || (_.jopts = 0) || window["h" + rx + cx].classList.toggle("phead") : !ph1 ? !_.p3tds[rx][cx].className || _.pegsRplc(_.jopts.find(e => "" + e[2] === "" + [rx, cx])) : _.osClr() || _.jopts.forEach( ([[], [r1, c1], [r2, c2]], i) => !window["h" + r1 + c1] || !window["h" + r1 + c1].classList.contains("phead") || !window["h" + r2 + c2] || window["h" + r2 + c2].className || (_.p3tds[r2][c2].className = "jdest") && (jx = i) ); return u3tog.checked || ( jx == null ? _.jopts = 0 : (_.p3tds[rx][cx].className = "jdest") && g3panel.querySelectorAll('.jdest').length > 2 || _.pegsRplc(_.jopts[jx]) ); };
jg3.m3Rvrs = () => !(jg3.m3trk || "").length || _.pegsRplc(jg3.m3trk.pop(), 1);
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
or another of these kinds of tasks within but an instant.

 Specifically, we will:
 1) locate a substring of the text of a lengthy document,
 2) prepare an article for meaningful browser-display of its
    structural parts, and
 3) format a text memo or report to fit a narrow screen.

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
      undefined | another one-of-a-kind, signaling the absence of
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
    + Note that, like data *types*, each *structure* also has its own
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

"Controlled chaos.".replace(/ch?/gi, "K")        // 1st example

str.replace(/(deaf)\\w+ (\\w+)\\./i, "$1ness… $2…") // 2nd example

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

str.replace(/(deaf)\\w+ (\\w+)\\./i, (m, c1, c2) => \`\${c1}? Or \${c2.replace(/ce$/, "t")}?\`)
 // 2nd example

/*
 5. In pursuit of higher convenience, pull these concepts together
    to __build a search-and-replace web app__.
    + The elements of a minimal search-and-replace user interface (UI)
      are: "Source" and "Target" text fields, "Search" and "Replace"
      inputs, and a trigger ("PARSE" button) to activate the
      search/replace operation.
    + Un-comment the \`try { … } catch { … }\` line following the next
      code block to display (below, beneath the calculator) a basic
      search-and-replace UI.
*/

srui = "\\n<style type=\\"text/css\\">\\n*, *::before, *::after { box-sizing: inherit; }";
srui += "\\nhtml { box-sizing: border-box; color: DimGrey; /* font-size: 14px; */ min-width: 375px; overflow-wrap: break-word; }";
srui += "\\nbutton, input, select, pre { margin: 0; }\\nhr { margin: 1.5rem 0; }\\n[list]::-webkit-calendar-picker-indicator { display: none !important; }";
srui += "\\n.textarea { background-color: white; border-color: #dbdbdb; border-radius: 4px; display: block; max-width: 100%; min-width: 100%; padding: calc(0.75em - 1px); resize: vertical; }";
srui += "\\n#srwrap { font: normal 1rem Helvetica, Arial, sans-serif; max-width: 720px; margin: 24px auto; }";
srui += "\\n#srwrap button, #srwrap .btn1, #srwrap input:not([type=checkbox]):not([type=radio]), #srwrap select { background: #f8f8f8; color: Grey; font-size: calc(5rem / 6); line-height: 1.5rem; height: 1.5rem; padding: 0 0.5rem; border: 0; border-radius: 0; }";
srui += "\\n#srwrap pre:not(.pwrap) { white-space: pre; overflow-wrap: normal; overflow-x: auto; }";
srui += "\\n#srwrap .iwarn { color: Orange; }\\n#srwrap .isucc { color: CornFlowerBlue; }";
srui += "\\n#srwrap .textarea.iwarn { color: revert; border-color: Orange; }\\n#srwrap .textarea.isucc { color: revert; border-color: CornFlowerBlue; }";
srui += "\\n#srwrap .cfield:not(:last-child) { margin-bottom: 0.5rem; }\\n#srwrap .ccntr:not(:last-of-type) { margin-right: 0.5rem; }";
srui += "\\n#srwrap :not(.cfield)>.ccntr { display: inline-block; height: 1.5rem; margin-bottom: 0.5rem; }";
srui += "\\n#srwrap .chelp { font-size: 0.75rem; line-height: normal; margin-top: 0.25rem; }";
srui += "\\n#srwrap .pwrap { white-space: pre-wrap; }\\n#srwrap .dflow { display: flow-root; overflow-x: auto; }";
srui += "\\n#srwrap #srctxta, #srwrap #trgtxta { font: 13px/normal system-ui; height: 288px; }\\n#srwrap #sepainp, #srwrap #rtrminp { width: 288px; }\\n#srwrap #lfinp { width: 176px; }";
srui += "\\n#srwrap>#trgrndr { margin-top: 1rem; border: dashed gainsboro; border-width: 1px 0; }";
srui += "\\n</style>\\n<hr />\\n<h4 class=cfield><label onclick=sr0.txtaSel(srctxta)>Source</label></h4>";
srui += "\\n<div class=cfield><textarea id=srctxta class=textarea></textarea></div>";
srui += "\\n<div class=cfield><input type=text id=sepainp /><label onclick=\\"sepainp.select()\\"> Search</label></div>";
srui += "\\n<div class=cfield><input type=text id=rtrminp /><label onclick=\\"rtrminp.select()\\"> Replace</label></div>";
srui += "\\n<div class=cfield>\\n<span class=ccntr><input type=button value=\\"&rlhar; SWAP\\" onclick=sr0.cntSwap() /></span><span class=ccntr><select id=rndrsel>\\n";
srui += ["No render", "PRE render", "PRE-wrap render", "Normal render"].map(e => "<option>" + e + "</option>").join("\\n");
srui += "\\n</select></span><span class=ccntr><input type=button value=\\"&#x2964; PARSE\\" onclick=sr0.strPars() /></span>\\n</div>";
srui += "\\n<h4 class=cfield><label onclick=sr0.txtaSel(trgtxta)>Target</label></h4>";
srui += "\\n<div class=cfield><textarea id=trgtxta class=textarea></textarea><div id=trghelp class=chelp></div></div>";
srui += "\\n<div class=cfield>\\n<datalist id=pfiles></datalist>\\n<span class=ccntr><button onclick=sr0.dataMgr(2)>\\n<span>&uArr;</span></button></span><span class=ccntr><input type=text id=lfinp list=pfiles placeholder=\\"filename/key/CMD&hellip;\\" onfocus=sr0.hlp3Clr() /></span><span class=ccntr><button onclick=sr0.dataMgr(1)>\\n<span class=isucc>&#x267a;</span> SAVE</button></span><span class=ccntr><button onclick=sr0.dataMgr()>\\n<span class=iwarn>&#x2715;</span> DEL</button></span>\\n<div id=lfhelp class=chelp></div>\\n</div>";
srui += "\\n<div id=trgrndr class=\\"cfield dflow\\"></div>\\n";

 // srwrap.remove() // *Alert:* useful only if edit-testing the UI code above
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
      "Source" and "Target" text fields; to turn the "Source" and
      "Target" labels each into a live trigger for auto-selecting all
      of its field's content; and to store "Target" data locally.
*/

rxs = [/^{\\s*"[^]+}$|^\\[[^]+\\]$/, /^\\/.+\\/[gim]*$/, /^(?:\\w+|\\(.*?\\)) *=> *\\S|^".*"$|^\\b[\\w.]+$/, /(?="|\\\\[^ntux]|\\\\u(?![\\da-fA-F]{4})|\\\\x(?![\\da-fA-F]{2}))/g]; //
fncTry = (fnc, a, e) => { try { return fnc(a) } catch (err) { return e > 1 ? a : e ? err : undefined }};
hlp2Clr = () => (trghelp.innerHTML = trgrndr.innerHTML = "") || [trgtxta, trghelp].forEach(e => e.classList.remove("iwarn", "isucc"));
hlp2Pol = (v, s2, lm) => !(s2 instanceof RegExp) || !s2.global || !(trghelp.innerHTML = (lm = (v.match(s2) || []).length) + " replacements have been made.") || [trgtxta, trghelp].forEach(e => e.classList.add(!lm ? "iwarn" : "isucc"));
rsltVw = (v, s2, re, ri = rndrsel.selectedIndex) => { _.hlp2Pol(v, s2); trgtxta.value = re; trgrndr.innerHTML = !ri ? "" : ri > 2 ? re : "\\n<pre" + (ri < 2 ? ">" : " class=pwrap>") + re + "</pre>\\n"; };
datRtrv = (k, r) => !r && !k ? trgtxta.value = "" : Promise.resolve(_.fncTry(window.eval, k)).then(v => v != null ? v : localStorage.getItem(k) || window.localforage && localforage.getItem(k)).then(v => v == null ? "" : typeof v === 'object' ? JSON.stringify(v, 0, 2) : typeof v !== 'string' ? "" + v : !_.rxs[0].test(v.trim()) ? v : JSON.stringify(_.fncTry(JSON.parse, v), 0, 2) || v).then(v => r ? v : trgtxta.value = v).catch(er => trghelp.innerHTML = er);
window.sr0 = {};
sr0.txtaSel = e => _.hlp2Clr() || e.focus() || e.setSelectionRange(0, e.textLength);
sr0.cntSwap = () => _.hlp2Clr() || ([trgtxta.value, srctxta.value] = [srctxta.value, trgtxta.value]);
sr0.strPars = () => { let k = lfinp.value.trim(), r2, rv = rtrminp.value, s2, sv = sepainp.value, v0 = srctxta.value; _.hlp2Clr(); ( !_.rxs[2].test(rv.trim()) || (r2 = _.fncTry(window.eval, rv, 1)) instanceof Error && (trghelp.innerHTML = r2) ) && (r2 = window.eval('"' + rv.replace(_.rxs[3], "\\\\") + '"')); s2 = _.rxs[1].test(sv.trim()) && _.fncTry(eval, sv) || _.fncTry(window.eval, sv, 2); !k || v0 ? _.rsltVw(v0, s2, v0.replace(s2, r2)) : _.datRtrv(k, 1).then(vx => _.rsltVw(vx, s2, vx.replace(s2, r2))); };
sr0.hlp3Clr = () => (lfhelp.innerHTML = "") || lfhelp.classList.remove("iwarn", "isucc");
sr0.pfsRfr = (es = []) => !window.localforage || localforage.keys().then(ks => pfiles.innerHTML = ["pfiles.textContent", "trgtxta.value", "srctxta.value", "dentr.value", "recon.textContent", "recon.innerHTML"].concat(!window.nm0 ? [] : ["nmdata.textContent", "nm0.pchQry()"]).concat(ks).concat(es).map(k => "\\n<option>" + k + "</option>").join("") + "\\n").catch(er => trghelp.innerHTML = er);
sr0.dataMgr = ox => { let key = lfinp.value.trim(); if (ox === 2) return trgtxta.textLength !== trgtxta.selectionEnd - trgtxta.selectionStart || _.hlp2Clr() || _.datRtrv(key); !key || !window.localforage || localforage[!ox ? "removeItem" : "setItem"](key, ox && trgtxta.value).then(() => sr0.pfsRfr() && (lfhelp.innerHTML = "USERdata file is " + (!ox ? "deleted." : "locally saved.")) && lfhelp.classList.add(!ox ? "iwarn" : "isucc")).catch(er => trghelp.innerHTML = er); }; //
!window.srwrap || sr0.pfsRfr();

/*
   + *Optional:* Un-comment (i.e., remove the wrapping pair of JS block-
     comment tags \`/* … */\` of) the following code block to generate
     the full source code (e.g., for building a standalone web app).
*/

/*
 scrGen = src => "\\nlet " + src.match(/^rxs = [^]+?(?=\\n+ *(\\*\\/|\\/[\\/*])|(?![^]))/m)[0].replace(/\\b_\\.\\b| *\\/\\/ *$| *"";?$|^\\n/gm, "").replace(/^[ =\\w]+\\n/, m => m.replace(/ *=(?= *[a-z]|\\n)/gi, ",")).replace(/^( *\\b[ ,\\w]+?(?: *= .+?|))[,;]?\\n(?= *\\b[ ,\\w]+(?: *= .+|);?$)/gm, "$1,\\n  ") + "\\n"; //
 dwraps = ["<!DOCTYPE html>\\n<html lang=en>\\n<title>Search and Replace</title>\\n<meta charset=\\"utf-8\\">\\n<meta name=viewport content=\\"width=device-width, initial-scale=1\\">\\n\\n", "\\n\\n<script src=\\"../../a00/-res-js/localforage.min.js\\" type=\\"text/javascript\\"></script>\\n<script type=module>", "</script>\\n</html>"];
 reShow( dwraps[0] + srwrap.outerHTML.replace(/\\n<hr.*?>/, "") + dwraps[1] + scrGen(xstor.JScode.tutorial3).replace(/reShow/g, "console.warn") + dwraps[2] )
*/

/*
 6. Extend your use of the search-and-replace web app with the extra
    know-how to __locate a substring of a lengthy document__.
    + We will demo the new search-and-replace UI on this page using
      the text of a lengthy document -- a *Sparknotes* book review.
    + Un-comment the following block of code to load the text of a
      _Dune_ book review into the "Source" field -- as well as some
      custom data into the "Search" and "Replace" inputs.
*/

/*
 srctxta.value || import("../-app-cjs/spark.js").then(m => srctxta.value = m.dune.replace(/\\n\\*\\/$|^\\/\\*\\n/g, "")).catch(reShow); //
 sepainp.value = "/^.*?(\\\\bdune\\\\b).*\\\\n*|^.*\\\\n*/gim"; //
 rtrminp.value = "(m, c1, p) => { p || (window.it0 = 0); return !c1 ? \\"\\" : \\" \\" + ++it0 + \\". \\" + m; }";
*/

/*
    + Tap on the "PARSE" button, then confirm that the search/replace
      operation executed correctly; The result (found in the "Target"
      text field) should be a numbered list of only those lines from
      the source text that contain the word "dune".
    + This result gives us the context of every "dune" substring in
      the document. However, we want to know the locations of all
      matches. So, we will generate a new result that pairs each
      match with a line-number reference (as well as the match count).
    + Un-comment the following one line of code, then tap "PARSE".
*/

 // rtrminp.value = "(m, c1, p) => { p || (window.it0 = window.it1 = 0); ++it0; return !c1 ? \\"\\" : \\" \\" + ++it1 + \\". [line \\" + it0 + \\"]\\\\n\\" + m; }";

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

 // rtrminp.value = "(m, c1, p) => { p || (window.it0 = window.it1 = 0); ++it0; return !c1 ? \\"\\" : \\" <strong>\\" + ++it1 + \\".</strong> <em>[line \\" + it0 + \\"]</em>\\\\n\\" + m.replace(/\\\\bdune\\\\b/gi, \\"<mark>$&</mark>\\"); }";

/*
 7. Use search-and-replace to __apply HTML markup to an article__,
    so that its structural parts get displayed meaningfully.
    + The _Dune_ book-review article that we are using for demo
      purposes is minimally marked up (with *Markdown* syntax);
      So, even when viewing its plain-text form, the reader can make
      distinctions between a subtitle, a blockquote, a definition
      list and an ordinary paragraph.
    + But, viewed in a browser, the text-document's structural parts
      would be mushed together and lost to all recognition -- unless
      the text was first marked up like an HTML web doc.
    + Un-comment the following block of code, then tap "PARSE" to see
      the same article text now decorated throughout with HTML tags.
    + Select "Normal render" and tap "PARSE" again to confirm that
      the rendered document's structure is appropriately kept intact.
*/

/*
 !!window.markdownit || Promise.all(["", "-decorate", "-deflist", "-implicit-figures", "-ins", "-mark", "-sub", "-sup"].map(e => scrInj("../-res-mdit/markdown-it" + e + ".min.js"))).catch(reShow)
 window.docMrkp = md => markdownit({ html: 1, typographer: 1 }).use(markdownitDeflist).render(md.replace(/[^-](?=--[^-])/g, "$&-")); //
 rndrsel.selectedIndex = 0;
 [sepainp.value, rtrminp.value] = ["/[^]+/", "docMrkp"];
 hlp2Clr()
*/

/*
    + *Notice:* In this scenario, we did not provide a function
      definition as our "Replace" input; Instead, we provided the
      function name \`docMrkp\`, a sophisticated parsing function that
      performs multiple search/replace conversions algorithmically.
    + *Notice also:* The short *RegExp* provided as our "Search" input
      serves the singular purpose of injecting the entire document-
      as-a-string into our replacement function \`docMrkp\`.

 8. Use search-and-replace to __adjust the width of your memo text__
    to fit the screen size in which it will be reviewed or edited.
    + In our modern world, much of our communications are textual
      messages displayed on a narrow, palm-width screen.
    + Within these prevalent size constraints, more often than we
      like our memos and reports do not display nicely.
    + *For reference, notice:* The tutorial text is framed by the *ENTRY*
      pane of the JavaScript Calculator; And even if viewed on a wide
      computer screen, each line of instruction could get clipped
      and become unreadable if it didn't continually wrap around
      again before hitting the 71^st^ position from its left edge
      (i.e., reflow at 70 characters per line -- or, 70 cpl).
    + Un-comment the following block of code to activate a pair of
      line-wrapping width adjuster tools -- which may be applied
      using the search-and-replace web app.
*/

/*
 rndrsel.selectedIndex = 1; rtrminp.value = trgtxta.value = ""; hlp2Clr()
 window.lineUnwr = str => str.replace(/(\\S) *\\n(?!\\n|#|>|[:*+~-]? |\\d+\\.\\s|$)/g, "$1 "); //
 window.lineWrap = str => { let cpl = 70, cut = 0, brk = "\\n", rex = "^$" + (cut ? "|.{" + cpl + "}|\\\\S.*$" : "|(^\\\\n*|)\\\\S.{0," + (cpl - 1) + "}(?= |$)"); return str.match(new RegExp(rex, "gm")).join(brk); }; //
*/

/*
    + Now, prepare the text of the _Dune_ article to be readable in
      the *ENTRY* pane of the JavaScript Calculator app by typing
      \`lineWrap\` into the "Replace" input and tapping "PARSE".
    + *Challenge:* Play with the value of the \`cpl\` variable
      (your desired maximum width) in the \`lineWrap\` function, and
      reflow the text of the article at various cpl settings.
    + *Also:* After applying a random wraparound width, try undoing it:
      Clear the "Source" text field, tap "SWAP" to swap the "Source"
      and "Target" content, then use \`lineUnwr\` to restore the _Dune_
      article text to its original state.
*/
//`;

const tutorial4 = `/*
__JavaScript Coding Tutorials, Part 4__

 From *Parts 1, 2 and 3*, we've incrementally acquired enough
understanding of web-doc structures, JS keywords and JS building
blocks to be able to develop an unlimited variety of new,
rudimentary-yet-functional web apps.

 In *Part 4*, we will strive to outwardly expand our comprehension of
the living, JavaScript ecosystem to the next, higher level of code
organization -- an organization level we shall call __Application__
__Programming Interfaces__ (APIs).

 Note that, previously, we had begun building upon different API
foundations already -- without identifying them as such. Notably, the
following table lists the API elements that appear within the first
three tutorials.

 __tutorial1		tutorial2	       tutorial3__
 docu….createElement()	.remove()	       localforage.keys()
 .id			.outerHTML	       localforage.setItem()
 .value			.onclick	       localforage.getItem()
 .innerHTML		.checked	       localforage.removeItem()
 .appendChild()		.classList.add()       .then().catch()
 .onblur		.classList.remove()    .focus()
 .onchange		.classList.toggle()    .setSelectionRange()
 			.classList.contains()  console.warn()
 			.querySelectorAll()    markdownit()….render()
 			.className

*What purpose do all API commands serve?*
- API commands make fundamental networking and interactional tasks
  more coder-human friendly.
- API commands are generally simpler, more intuitive alternatives to
  commonly used, yet complex, coding algorithms.

*What are the most useful kinds (classes) of client-side web APIs?*
- Document Object Model (DOM) manipulation
  (i.e., turning a static into a dynamic web page by making real-time
  changes to various parts of the page document)
- Data fetching
  (i.e., requesting and/or submitting information from/to a "public
  resource" server, as when texting, emailing or just sharing photos,
  music, etc.)
- Graphics drawing
  (e.g., when playing an arcade-like video game)
- Media playing/processing
  (e.g., when cropping and stylizing photos, or when combining music
  with a video)
- Device component triggering
  (e.g., when sending a notification to a phone screen along with an
  alert sound or vibration)
- Data storage
  (i.e., saving, organizing and deleting local files that are viewable
  or accessible only within a certain web app of one kind or another)

*Do any other API classes exist?*
- Yes -- not only for additional web-browsing tasks (beyond those
  already described, above) but also for commercial, and other
  organizational, interfacing tasks (e.g., as when accessing a
  proprietary service on the *IBM* or *Amazon* website).
- Furthermore, APIs (existing ones, as well as many others still to
  come) will continually evolve as world needs and public demands for
  information continue to change over time.
- *Aside:* In order to use one of the abundant, non-browser-included
  APIs, its defining script must first be imported into the web app.
  This is why, near the end of *Tutorials Part 3*, we could use the
  (unrecognizable-to-a-browser) \`markdownit()\` command (which had
  allowed us to generate HTML markup on a plain-text article). In
  other words, if we had not previously imported the associated,
  third-party-managed script known as "Markdown-it", we could not
  have called the \`markdownit()\` function within our code.

 To make us more familiar with client-side web APIs, we will create
a simple, local database for storing and organizing one's personal
contacts (or other collection of notes, such as for a journal, a
recipe book, a fitness log, etc.).

- - - - -
__*Tutorial Four: Building a*__ contacts __*web app*__

 1. __Load the script for a third-party API__ called *PouchDB*, which is
    a convenient interface to the native, data-storage APIs used for
    saving and organizing data within the browser's built-in stores.
    + *Option 1:* Un-comment the 1^st^ of the two code blocks that follow
      (i.e., remove leading \`//\` in both of its two lines of code).
      * To retrieve the *PouchDB* script file from across the internet
        we use a native, data-fetching API via \`fetch()\` and
        \`URL.createObjectURL()\` (in the 2^nd^ line).
      * Then, to inject and load the script into this app's web page
        we use a native, DOM-manipulation API via \`.createElement()\`
        and \`.appendChild()\` (in the 1^st^ line).
    + *Option 2:* Or, un-comment the 2^nd^ of the two code blocks --
      the single, \`try { … } catch { … }\` line of code.
      * More simply and directly, we append to the body of the web-
        page document a \`<script>\` tag that contains a pathname to
        the *PouchDB* script file's location on the server.
      * Notice that option 2 uses a function \`scrInj()\`, which is
        predefined behind the scenes by the calculator app, and which
        uses the same DOM-manipulation API that we use in option 1.
    + Option 1 is presented alongside option 2 to show alternate
      possibilities; And, even though option 1 has an unnecessary
      extra step, its value is in demonstrating at a stroke how two
      of the major classes of native APIs may be used in combination.
    + *Aside:* Back in *Tutorials Part 3*, we had inconspicuously
      retrieved, loaded and used a similar, third-party API called
      *LocalForage*. As we shall also be able to do with *PouchDB*,
      with *LocalForage* we could conveniently save and recall any
      content that we had handled within the search-and-replace app.
      The difference is that *LocalForage* can be used to store data
      only within a limited, local structure, which is convenient
      for temporary kinds of needs but is not robust enough for long-
      term storage needs; *PouchDB*, on the other hand, can be used
      to create not just short, plain-text memos but various kinds
      and collections of data files that are then reordered and
      retrieved in multiple, creative, sometimes elaborate ways.
*/

 // sc2Inj = u => { let n = document.createElement('script'); !(n.src = u) || document.body.appendChild(n); };
 // !!window.PouchDB || fetch("../-res-js/pouchdb.min.js").then(re => re.blob()).then(URL.createObjectURL).then(_.sc2Inj).catch(reShow)

 // try { !!PouchDB } catch { scrInj("../-res-js/pouchdb.min.js").then(reShow).catch(reShow) }

/*
 2. Use *PouchDB* to __create a *contacts* database__ that will contain
    the contact information of your family, your friends, members of
    an organization to which you belong, or ... anyone at all.
    + First, in the following code, feel free to change the value of
      \`dbase\` to any (valid) name you want for your new *contacts* DB.
    + Then, un-comment the following code block (i.e., remove the
      wrapping pair of JS block-comment tags \`/* … */\`) to set up a
      new DB and reserve the namespace of your DB within your browser.
    + Notice that with this code we also establish a temporary access
      conduit into our DB's internal operations by assigning the
      newly created DB object to a variable, \`dbobj\`. So, even though
      we do not see an immediate result from this operation, we will
      soon find out if we're successful when we attempt to perform
      subsequent operations via the \`dbobj\` variable.
    + *Note:* An invalid DB name may cause unpredictable behaviors in
      later operations. A valid DB name begins with a lowercase
      letter and is composed of only characters that are one of
      lowercase letters, numbers, underscore and dash.
    + *Alert:* The *PouchDB* API does not prevent the creation of a DB
      with an invalid name. So, we must perform our own validity test
      -- and, subsequently, interrupt our DB-creation operation if
      the value of \`dbase\` fails our test.
*/

/*
 dbase = "cntcs-demo";
 !window.PouchDB || !/^[a-z][0-9_a-z-]*$/.test(dbase) || (window.dbobj = new PouchDB(dbase))
*/

/*
    + *Good to know, for later use:* To reverse this action at any time
      -- i.e., to permanently erase the local DB (and any data that
      it might contain) from your browser -- carefully insert the DB
      name between the quotes of the following command; Then, execute
      the command (retype it without its leading \`//\` characters)
      when the *ENTRY* field of the calculator app is clear.
*/

 // !window.PouchDB || !(dbase = "") || PouchDB(dbase).destroy().then(reShow)

/*
    + *Also good to know:* To confirm that a local DB has been
      completely erased from a device's browser, execute the
      following command to see a list of all DBs that are still
      present. (List appears above, overtop the calculator.)
*/

 // indexedDB.databases().then(reShow)

/*
 3. __Build a data-entry UI__ for entering the details of one contact;
    Give the UI applicable functions from the *PouchDB* API for storing
    each contact as a data file.
    + Un-comment the \`try { … } catch { … }\` line following the next
      code block to display (below, beneath the calculator) a basic
      contact data-entry form.
    + Notice that some fields are prefilled with an array literal
      (square brackets \`[…]\`) that contains one set of quotes \`""\`.
      This indicates that the value of that property may have more
      than one string added. The strings of the array must each be
      wrapped in quotes \`""\` and separated by a comma \`,\`.
    + Notice also that the ID field is prefilled with a text pattern.
      This text must be specially edited for every new contact that
      gets added to the DB. For DB organization purposes, the pattern
      suggests prepending the ID with an exclamation symbol \`!\` and
      generating a unique contact ID by combining a group ID with the
      contact's username.
    + *Note:* The value of the ID property, as a lookup detail about
      the contact, is not so important; However, it is important for
      DB operations. The ID value can be arbitrary -- but must be
      unique. Conceptually, two different contacts in the DB could,
      potentially, have matching information for every property
      except one: the ID property; Otherwise, the DB could not
      distinguish one data file from the other.
*/

d1ui = d2ui = d3ui = d4ui = d5ui = ""
d1ui += "\\n<style type=\\"text/css\\">\\n*, *::before, *::after { box-sizing: inherit; }";
d1ui += "\\nhtml { box-sizing: border-box; color: DimGrey; /* font-size: 14px; */ min-width: 375px; overflow-wrap: break-word; }";
d1ui += "\\nbutton, input, select, pre { margin: 0; }\\nhr { margin: 1.5rem 0; }";
d1ui += "\\nfigure { margin: 1em 0; padding: 0 1em; }";
d1ui += "\\n.image { display: block; position: relative; }";
d1ui += "\\n.image img { display: block; height: auto; max-width: 100%; }";
d1ui += "\\n.textarea { background-color: white; border-color: #dbdbdb; border-radius: 4px; display: block; max-width: 100%; min-width: 100%; padding: calc(0.75em - 1px); resize: vertical; }";
d1ui += "\\n.label { display: block; font-weight: 700; }";
d1ui += "\\n.label:not(:last-child) { margin-bottom: 0.5em; }";
d1ui += "\\n.field:not(:last-child) { margin-bottom: 0.75rem; }";
d1ui += "\\n.field-label .label { font-size: inherit; }";
d1ui += "\\n.field-body .field .field { margin-bottom: 0; }";
d1ui += "\\n@media screen and (max-width: 719px) { .field-label { margin-bottom: 0.5rem; } }";
d1ui += "\\n@media screen and (min-width: 720px), print { .field.is-horizontal { display: flex; } .field-label { flex-basis: 0; flex-grow: 1; flex-shrink: 0; margin-right: 1.5rem; text-align: right; } .field-body { display: flex; flex-basis: 0; flex-grow: 5; flex-shrink: 1; } .field-body .field { margin-bottom: 0; } .field-body > .field { flex-shrink: 1; } .field-body > .field:not(.is-narrow) { flex-grow: 1; } .field-body > .field:not(:last-child) { margin-right: 0.75rem; } }";
d1ui += "\\n.media { align-items: flex-start; display: flex; text-align: inherit; }";
d1ui += "\\n.media + .media { border-top: 1px solid rgba(219, 219, 219, 0.5); margin-top: 1rem; padding-top: 1rem; }";
d1ui += "\\n.media-left, .media-right { flex-basis: auto; flex-grow: 0; flex-shrink: 0; }";
d1ui += "\\n.media-left { margin-right: 1rem; }\\n.media-right { margin-left: 1rem; }";
d1ui += "\\n.media-content { flex-basis: auto; flex-grow: 1; flex-shrink: 1; text-align: inherit; }";
d1ui += "\\n@media screen and (max-width: 719px) { .media-content { overflow-x: auto; } }";
d1ui += "\\n#dbwrap { font: normal 1rem Helvetica, Arial, sans-serif; max-width: 720px; margin: 24px auto; }";
d1ui += "\\n#dbwrap a { color: #485fc7; cursor: pointer; text-decoration: none; }";
d1ui += "\\n#dbwrap a:hover, #dbwrap .ilink:hover:not(:disabled) { color: CornFlowerBlue; }";
d1ui += "\\n#dbwrap button, #dbwrap .btn1, #dbwrap input:not([type=checkbox]):not([type=radio]), #dbwrap select { background: #f8f8f8; color: Grey; font-size: calc(5rem / 6); line-height: 1.5rem; height: 1.5rem; padding: 0 0.5rem; border: 0; border-radius: 0; }";
d1ui += "\\n#dbwrap input::placeholder, #dbwrap textarea::placeholder { color: Grey; opacity: 0.5; }";
d1ui += "\\n#dbwrap select[multiple], #dbwrap .btn1, #dbwrap .ccntr button, #dbwrap .ccntr input[type=button], #dbwrap .ccntr input[type=text], #dbwrap .ccntr select { vertical-align: top; }";
d1ui += "\\n#dbwrap select:not(.anone) { padding: 0 0.25rem; }";
d1ui += "\\n#dbwrap select.anone { -webkit-appearance: none; -moz-appearance: none; appearance: none; }\\n#dbwrap select.anone::-ms-expand { display: none; }";
d1ui += "\\n#dbwrap .textarea { font: normal medium monospace; }";
d1ui += "\\n#dbwrap .media-left>.image.rspv128 { width: 128px; height: unset; margin: 0 1em 0 2em; padding: 0; }";
d1ui += "\\n#dbwrap .media-left>.image>img { background-color: LightSteelBlue; min-height: 128px; cursor: pointer; }";
d1ui += "\\n#dbwrap .media-left>.image>figcaption { font-size: small; font-style: italic; text-align: center; }";
d1ui += "\\n#dbwrap .hgainl { background-color: #ececec; }\\n#dbwrap .igreyd { color: DarkGrey; }\\n#dbwrap .ilink { color: #485fc7; }\\n#dbwrap .iwarn { color: Orange; }\\n#dbwrap .isucc { color: CornFlowerBlue; }";
d1ui += "\\n#dbwrap .cfield:not(:last-child) { margin-bottom: 0.5rem; }\\n#dbwrap .ccntr:not(:last-of-type) { margin-right: 0.5rem; }";
d1ui += "\\n#dbwrap :not(.cfield)>.ccntr { display: inline-block; height: 1.5rem; margin-bottom: 0.5rem; }";
d1ui += "\\n#dbwrap .cleft { display: inline-block; line-height: 1.5rem; width: 126px; height: 1.5rem; text-align: right; white-space: nowrap; }";
d1ui += "\\n#dbwrap .cleft + .ccntr input[type=text], #dbwrap .cleft + .ccntr select { width: 216px; }";
d1ui += "\\n#dbwrap .chelp { font-size: 0.75rem; line-height: normal; margin-top: 0.25rem; }";
d1ui += "\\n#dbwrap .fsz0c75 { font-size: 0.75rem; }\\n#dbwrap .fsz1c00 { font-size: 1rem; }";
d1ui += "\\n#dbwrap .fltrt { float: right; }\\n#dbwrap .alnrt { text-align: right; }\\n#dbwrap .pwrap { white-space: pre-wrap; }";
d1ui += "\\n#dbwrap .diblk, #dbwrap .btn1 { display: inline-block; }\\n#dbwrap .dnone { display: none; }";
d1ui += "\\n#dbwrap #a1inp { width: 0; padding: 0; }";
d1ui += "\\n#dbwrap #a2inp { width: 1.5rem; padding: 0; text-align: center; }";
d1ui += "\\n#dbwrap #a3inp { width: calc(216px - 1.5rem); text-align: left; }";
d1ui += "\\n#dbwrap #a3inp>span { color: Grey; opacity: 0.5; }";
d1ui += "\\n#dbwrap #cpanl { position: relative; top: -2.5rem; }\\n#dbwrap #imgdtl img { width: 48px; }";
d1ui += "\\n@media screen and (max-width: 575px) { #dbwrap .media-left>.image.rspv128 { width: 48px; margin: 0; } #dbwrap .media-left>.image.rspv128>img { min-height: 48px; } #dbwrap .media-left>.image>figcaption { float: right; font-size: x-small; } }";
d1ui += "\\n@media screen and (max-width: 719px) { #dbwrap .media-left>.image { margin: 0; } }" + "\\n</style>";
d2ui += "\\n<hr />\\n<div class=\\"fltrt cfield\\">\\n<button id=resbtn class=\\"ccntr hgainl\\"><span class=isucc>&orarr;</span> RESET</button>";
d2ui += "<button id=savbtn class=\\"ccntr hgainl\\"><span class=isucc>&#x267a;</span> SAVE</button>\\n</div>";
d2ui += "\\n<div class=field>\\n<h4>Data File Editor</h4>";
d2ui += "\\n<div class=\\"alnrt chelp isucc dnone\\">New contact is saved in local DB.</div>";
d2ui += "\\n<div class=\\"alnrt chelp iwarn dnone\\">New-contact save attempt failed.</div>\\n</div>";
d2ui += "\\n<form id=dform></form>";

 // dbwrap.remove() // *Alert:* useful only if edit-testing the UI code above
 // try { dbwrap } catch { ndiv = document.createElement('div'); ndiv.id = "dbwrap"; ndiv.innerHTML = d1ui + d2ui + "\\n"; cmain.appendChild(ndiv); }

fwg = ak = ""
fncTry = (fnc, a, e) => { try { return fnc(a) } catch (err) { return e > 1 ? a : e ? err : undefined }};
htmTxt = str => str.replace(/&(?=#?\\w+;)/g, "&amp;").replace(/<(?=!|\\/?[a-z])/gi, "&lt;");
valStr = (v, sp) => v == null ? "" : v instanceof Error && v.constructor && !v.reason ? v : typeof v === 'object' ? JSON.stringify(v, 0, sp) : typeof v !== 'string' ? "" + v : !/^{\\s*"[^]+}$|^\\[[^]+\\]$/.test(v.trim()) ? v : JSON.stringify(_.fncTry(JSON.parse, v), 0, sp) || v;
rex0s = /^_rev|^file_|^loc_|^media_|^ts_/;
t1src = { _id: "", _rev: "", file_type: "srcdoc", file_created: { username: "", timestamp: 0, dborigin: "", dbname: "", subdir: "", misc: "" }, file_updated: { username: "", timestamp: 0, dborigin: "", dbname: "", subdir: "", misc: "" }, media_type: "text/plain", content: "" };
t2evt = { _id: "idGen(\\"~E\\", ts0, 0)", _rev: "", file_type: "event", file_created: { username: "", timestamp: 0, dborigin: "", dbname: "", subdir: "" }, file_updated: { username: "", timestamp: 0, dborigin: "", dbname: "", subdir: "" }, headline: "", time: "", place: "", map_refs: [""], people: [""], description: "" };
t3mem = { _id: "idGen(\\"~m\\", ts0, 0)", _rev: "", file_type: "memo", file_created: { username: "", timestamp: 0, dborigin: "", dbname: "", subdir: "" }, linkref: "", from: "", to: [""], subject: "", body: "" };
t4cnt = { _id: "!groupID-cUsername", _rev: "", file_type: "contact", ts_created: 0, ts_updated: 0, loc_subdir: "", name_full: "", name_user: "", birthdate: "", roles: [""], emails: [""], phones: [""], locations: [""], social_profiles: [""], project_urls: [""], team_groups: [""], image_src: "", bio_short: "", miscellany: "" };
hlps = window.dbwrap && dbwrap.querySelectorAll('.chelp');
hsRes = () => _.hlps.forEach(e => e.classList.add("dnone"));
d0Upd = () => { let ts = new Date().getTime(); !_.fwg.hasOwnProperty("ts_created") || ((_.fwg.ts_created ? {} : _.fwg).ts_created = _.fwg.ts_updated = ts); !_.fwg.file_created || [[_.fwg.file_created, _.fwg.file_updated]].forEach(([p0, p1]) => { !p0.timestamp || (p0 = {}); p1 = p1 || {}; p1.username = p0.username = fwg._id.replace(/.+?-/, ""); p1.timestamp = p0.timestamp = ts; p1.dborigin = p0.dborigin = /127\\.0\\.0|192\\.168\\.0|cloudant|localhost/.test(location.origin) ? location.origin : [navigator.userAgent || navigator.userAgentData, location.origin]; !window.dbobj || (p1.dbname = p0.dbname = dbobj.name); }); !_.fwg.hasOwnProperty("from") || _.fwg.from || (_.fwg.from = _.fwg._id.replace(/.+?-/, "")); };
formGen = () => dform.innerHTML = Object.entries(Object.assign({ _id: "", _rev: null }, _.fwg)).map(([k, v]) => _.rex0s.test(k) ? "" : "\\n<div class=\\"field is-horizontal\\">\\n<div class=\\"field-label\\"><span class=label>" + k + "</span></div>\\n<div class=\\"field-body\\">\\n<textarea id=p0" + k + " class=textarea rows=" + (/_attach|configs|content|body|file[f_]/.test(k) ? 8 : 2) + ">" + _.htmTxt(_.valStr(v)) + "\\n</textarea>\\n</div>\\n</div>").join("") + "\\n";
//
!window.resbtn || ( resbtn.onclick = () => _.hsRes() || !(_.fwg = JSON.parse(JSON.stringify(_.t4cnt))) || _.formGen() )();
!window.savbtn || ( savbtn.onclick = () => Object.keys(_.fwg).forEach(k => _.rex0s.test(k) || (_.fwg[k] = _.fncTry(JSON.parse, window["p0" + k].value, 2))) || !_.fwg._id || _.d0Upd() || !window.dbobj || dbobj.put(Object.assign({ _id: "", _rev: null }, _.fwg)).then(re => _.hlps[0].classList.remove("dnone") || reShow(re)).catch(er => _.hlps[1].classList.remove("dnone") || reShow(er)) );

/*
 4. __Populate your database__ either with your own contacts or with a
    provided set of pre-fabricated "contacts", meant to be used for
    demo purposes.
    + To see the data of ten fake contacts before adding them to
      your DB, un-comment the first of the following five lines of
      code. (Data appears above, overtop the calculator.)
    + To add these fake contacts to your DB all at once, un-comment
      the second of the following five lines of code. Notice in this
      operation how we add each contact: We use the \`.put()\` command
      on the \`dbobj\` variable that was created in step 2.
    + *Tip:* To ensure that you do not repeatedly add the same contacts,
      de-activate (re-comment) the second line of code after it has
      executed once already.
    + *To add other contacts to your DB:* For each contact of your own
      that you want to include, fill out the data-entry form (below,
      beneath the calculator); Then, tap the *SAVE* button at the
      top-right of the form.
    + Notice in the \`.onclick\` code for the *SAVE* button how we add
      a new contact to the DB: We use the \`.put()\` command on the
      \`dbobj\` variable that was created in step 2. The single
      argument of our \`.put()\` command is a JS object possessing
      all of the contact's data that was entered into the form's
      text fields.
    + *To see the data file (of a contact):* First, in the third of the
      following five lines of code, carefully insert the file ID
      between the quotes of the \`.get()\` command; Then, un-comment
      that line of code. Notice in this operation how we retrieve
      data from our DB: We use the \`.get()\` command on the \`dbobj\`
      variable that was created in step 2.
    + *To delete a contact (or any data file) in your DB:* First, in
      the fourth of the following five lines of code, carefully
      insert the file ID between the quotes of the \`.get()\` command;
      Then, un-comment that line of code.
    + *Tip:* To ensure that you do not repeatedly retrieve or delete
      the same file, de-activate (re-comment) the third or fourth
      line of code after it has executed once already.
    + *To see at any time a list of the file IDs that exist in your DB:*
      Un-comment the fifth of the following five lines of code.
*/

 // import("../-app-cjs/fakes.js").then(m => reShow(m.default)).catch(reShow)
 // !window.dbobj || import("../-app-cjs/fakes.js").then(m => m.default.forEach(c => dbobj.put(c).then(reShow).catch(reShow)))
 // !window.dbobj || dbobj.get("").then(reShow)
 // !window.dbobj || dbobj.get("").then(d => dbobj.put({ _id: d._id, _rev: d._rev, _deleted: true })).then(reShow).catch(reShow)
 // !window.dbobj || dbobj.allDocs().then(reShow)

/*
 5. Use *PouchDB* to __add one more data file__ to your database that will
    function just __to hold images__, which we will use as a ready-access
    container for all of our contact photos.
    + Un-comment the following line of code to add a new data file.
    + As we did in step 4, notice that, again, we use the \`.put()\`
      command on the \`dbobj\` variable to add a new file.
    + Because this new file will function to hold images and not text
      data, the only property value we need to give it is a file ID.
      Thus, as argument of our \`.put()\` command, notice that we
      directly insert a simple JS object in which we assign to its
      \`_id\` key the value "-res-img".
    + *Tip:* To ensure that you do not repeatedly add the same data
      file, de-activate (re-comment) the following line of code after
      it has executed once already.
*/

 // !window.dbobj || dbobj.put({ _id: "-res-img" }).then(reShow).catch(reShow)

/*
 6. __Build a UI__ with applicable *PouchDB* functions __for attaching images__
    to your image-resource file; Then add to the file (as attachments)
    either your own contact photos or the provided collection of
    stock photos, meant to be used for demo purposes.
    + Un-comment the first four of the following code blocks (i.e.,
      remove the one pair of JS block-comment tags \`/* … */\` that
      wrap all four blocks) to remove the form UI and to display, in
      its place, a different UI of controls for attaching an image.
    + If you have photos of your own contacts already available on
      your device, use the new controls to look them up and attach
      them, one by one.
    + *Note:* Later, in step 7, you may then associate a contact with
      a corresponding photo by entering the photo attachment name as
      the value of the contact's \`image_src\` property.
    + If you want to attach the 10 stock photos that accompany the 10
      fake contacts, un-comment the fifth code block that follows.
    + *Tip:* To ensure that you do not repeatedly attach the same set
      of stock photos, de-activate (re-comment) the fifth of the
      following code blocks after it has executed once already.
*/

/*
d3ui += "\\n<hr />\\n<h4>Images Manager</h4>\\n<div class=cfield>";
d3ui += "\\n<span class=\\"ccntr cleft\\"><em>Attach:</em> step 1</span><span class=ccntr><label>";
d3ui += "<input id=a1inp type=file /><span id=a2inp class=\\"btn1 hgainl ilink\\">&#x2726;</span>";
d3ui += "<span id=a3inp class=btn1><span>Locate image&hellip;</span></span>\\n</label></span>\\n</div>";
d3ui += "\\n<div class=cfield>\\n<span class=\\"ccntr cleft\\">step 2</span><span class=ccntr>";
d3ui += "<input type=text id=n4inp placeholder=\\"Rename as attachment&hellip;\\" /></span>\\n</div>";
d3ui += "\\n<div class=cfield>\\n<span class=\\"ccntr cleft\\">step 3</span><span class=ccntr>";
d3ui += "<button id=a4btn class=hgainl><span class=isucc>&oplus;</span> ATTACH</button></span>";
d3ui += "\\n<div class=\\"chelp isucc dnone\\">Image is attached to \\"-res-img\\" file.</div>";
d3ui += "\\n<div class=\\"chelp iwarn dnone\\">Image-attach attempt failed.</div>\\n</div>\\n<p></p>";
d3ui += "\\n<div class=cfield>\\n<span class=\\"ccntr cleft\\"><em>Remove:</em> step 1</span><span class=ccntr>";
d3ui += "<input type=text id=n5inp placeholder=\\"Enter attachment name&hellip;\\" /></span>\\n</div>";
d3ui += "\\n<div class=cfield>\\n<span class=\\"ccntr cleft\\">step 2</span><span class=ccntr>";
d3ui += "<button id=a5btn class=hgainl><span class=iwarn>&ominus;</span> REMOVE</button></span>";
d3ui += "\\n<div class=\\"chelp isucc dnone\\">Image is removed from \\"-res-img\\" file.</div>";
d3ui += "\\n<div class=\\"chelp iwarn dnone\\">Image-removal attempt failed.</div>\\n</div>";
d3ui += "\\n<details id=imgdtl open=true></details>";

 !window.dbwrap || dbwrap.remove() // necessary to clear UI from step 3
 try { dbwrap } catch { ndiv = document.createElement('div'); ndiv.id = "dbwrap"; ndiv.innerHTML = d1ui + d3ui + "\\n"; cmain.appendChild(ndiv); hlps = dbwrap.querySelectorAll('.chelp'); }

imgsVw = () => imgdtl.innerHTML = "<summary>Gallery</summary>" + Object.entries(aurls).map(([k, v]) => "\\n<p><img src=" + v + " /> " + k + "</p>").join("") + "\\n";
isRtrv = () => !window.dbobj || dbobj.get("-res-img").then( d => Promise.all( Object.keys(d._attachments || "").map( k => aurls[k] || dbobj.getAttachment("-res-img", k).then(b => aurls[k] = URL.createObjectURL(b)) ) ).then(_.imgsVw) ).catch(reShow);
//
window.aurls = window.aurls || {};
!window.a1inp || ( a1inp.onchange = () => a3inp.innerHTML = (a1inp.files[0] || "").name || "<span>Locate image&hellip;</span>" );
!window.a4btn || ( a4btn.onclick = () => _.hsRes() || !(_.ak = a1inp.files[0]) || !window.dbobj || dbobj.get("-res-img").then(d => dbobj.putAttachment("-res-img", n4inp.value || _.ak.name, d._rev, _.ak, _.ak.type)).then(re => _.hlps[0].classList.remove("dnone") || reShow(re) || _.isRtrv()).catch(er => _.hlps[1].classList.remove("dnone") || reShow(er)) );
!window.a5btn || ( a5btn.onclick = () => _.hsRes() || !(_.ak = n5inp.value) || !window.dbobj || dbobj.get("-res-img").then(d => !d._attachments[_.ak] ? Promise.reject("Invalid key.") : dbobj.removeAttachment("-res-img", _.ak, d._rev)).then(re => _.hlps[2].classList.remove("dnone") || reShow(re) || !(delete aurls[_.ak]) || _.imgsVw()).catch(er => _.hlps[3].classList.remove("dnone") || reShow(er)) );
!window.imgdtl || isRtrv();
*/

/*
 simgs = Array.from(Array(10)).map((e, i) => "stockimg" + i + ".jpg");
 !window.dbobj || dbobj.get("-res-img").then(d => { d._attachments || (d._attachments = {}); return Promise.all(_.simgs.map(e => fetch("../-res-img2/" + e).then(re => re.blob()))).then( bs => _.simgs.forEach( (e, i) => !(aurls[e] = URL.createObjectURL(bs[i])) || (d._attachments[e] = { content_type: bs[i].type, data: bs[i] }) ) || dbobj.put(d) ); }).then(reShow).then(_.imgsVw).catch(reShow)
*/

/*
 7. Use *PouchDB* to generate, sort and __display summary info__ of all
    of the contacts in your database; Include functionality for re-
    using the data-entry UI (from step 3) to allow for editing of a
    user-selected contact.
    + Un-comment the following set of code blocks to display a new
      directory of all DB contacts -- along with the image-management
      UI from step 6 and an initially hidden, data-entry form from
      step 3.
    + Notice in the \`.onclick\` code for the *list-generate* button
      \`nsbtn\` how we retrieve all DB contacts: We use the \`.allDocs()\`
      command on the \`dbobj\` variable that was created in step 2.
      The argument of our \`.allDocs()\` command is a JS object that
      specifies a custom response -- to include the data file (doc)
      that is associated with each file ID.
    + Tap on a contact's photo to empty the directory display, un-
      hide the data-entry form and fill out the form's text fields
      with the property values of the selected contact.
    + If you make changes to a contact's data (e.g., you enter the
      attachment name of a corresponding photo into the \`image_src\`
      property field), or if you create a new contact, commit the
      modified data file to the DB by tapping the *SAVE* button, at
      the top-right of the form.
    + Reload the directory list by tapping the button with a circular-
      arrow icon, connected to the *sort-by* select-list control.
    + Notice that we have only a few, limited controls for sorting
      and presenting the contacts' data: With these controls, we can
      list the contacts in order by first name, last name or username;
      And, we can toggle the visibility of two different pieces of
      info about each contact.
    + *Challenge:* Design more controls; Or, engineer more variability
      into the existing controls. For example, how would you re-sort
      a contact list in descending order? Or, how would you filter
      the list for matching values -- like membership in a specific
      group, or a birthdate that falls within a given time range?
*/

/*
d4ui += "\\n<hr />\\n<h4>Contacts Directory</h4>\\n<div id=cpanl class=\\"alnrt\\">\\n<span class=ccntr>Sort by:&ensp;";
d4ui += "<select id=sortsel class=anone>" + ["", "first name", "last name", "username", "timestamp", "headline", "subject", "from", "to"].map((e, i) => "<option" + (i !== 1 ? ">" : " selected>") + e + "</option>").join("") + "</select>";
d4ui += "<button id=nsbtn class=\\"hgainl isucc\\">&#x2a20;</button></span> <span class=ccntr>Show all:&ensp;";
d4ui += "<label><input type=checkbox id=hdrsswi /> <a>headers</a></label>&ensp;";
d4ui += "<label><input type=checkbox id=bodsswi /> <a>bodies</a></label></span>\\n</div>\\n<div id=ndata></div>";
d5ui += 'd => \`\\\\n<article class=media>\\\\n<div class="media-left">\\\\n<figure class="image rspv128"><img src="\${ aurls[d.image_src] || "#" }" data-fileid="\${ d._id }" />\\\\n<figcaption>\${ d.name_user || "" }</figcaption></figure>\\\\n</div>'; //
d5ui += '\\\\n<div class="media-content">\\\\n<details class=cfield><summary><strong>\${ _.nmsX(d) }</strong> <em class="diblk fsz0c75">\${ !/anno|memo|post/i.test(d.file_type) ? "" : new Date( d.ts_updated || d.ts_created || (d.file_updated || d.file_created || "").timestamp || null ).toLocaleString() }</em></summary>\\\\n<div class="pwrap fsz0c75">\`'; //
d5ui += ' + (!(d.roles || "")[0] ? "" : "<em class=\\\\"fsz1c00 lnhtnml\\\\">" + d.roles.join(", ") + "</em>\\\\n") + (!d.bio_short ? "" : "SHORT BIO: " + d.bio_short.substring(0, 255) + (d.bio_short.length < 257 ? "\\\\n" : "&hellip;\\\\n")) + (!d.linkref ? "" : "LINK REF: " + d.linkref + "\\\\n") + (!d.from ? "" : "FROM: " + d.from + "\\\\n") + (!(d.to || "")[0] ? "" : "TO: " + d.to.join(", ") + "\\\\n") + (/anno|contact|memo|phone|post/i.test(d.file_type) ? "" : "NOTE TYPE: " + d.file_type + "\\\\nCREATED: " + new Date(d.ts_created || (d.file_created || "").timestamp).toLocaleString() + "\\\\nUPDATED: " + new Date(d.ts_updated || (d.file_updated || "").timestamp).toLocaleString() + "\\\\n")'; //
d5ui += ' + \`</div>\\\\n</details>\\\\n<details>\${ !/anno|event|memo|post|srcdoc/i.test(d.file_type) ? "" : "<summary>" + (d.subject || d.headline || "&hellip;") + "</summary>" }\\\\n<div class=pwrap>\${ _.htmTxt(_.ak = d.body || d.content || (d.filefrags || [""])[0].contenttxt || "").substring(0, 255) + (_.ak.length < 257 ? "" : "&hellip;") + (!d.hasOwnProperty("time") ? "" : "<strong>Time:</strong> " + _.ts2Fmt(d.time) + "\\\\n") + (!d.hasOwnProperty("place") ? "" : "<strong>Place:</strong> " + d.place + "\\\\n")'; //
d5ui += ' + (!(d.map_refs || "")[0] ? "" : "<strong>Map refs:</strong> " + d.map_refs.join(", ") + "\\\\n") + (!(d.people || "")[0] ? "" : "<strong>People:</strong> " + d.people.join(", ") + "\\\\n") + (!d.hasOwnProperty("description") ? "" : "<strong>Description:</strong> " + d.description + "\\\\n") + (!d.hasOwnProperty("birthdate") ? "" : "<strong>Birthdate:</strong> " + d.birthdate + "\\\\n") + (!d.hasOwnProperty("emails") ? "" : "<strong>Emails:</strong> " + d.emails.join(", ") + "\\\\n") + (!d.hasOwnProperty("phones") ? "" : "<strong>Phones:</strong> " + d.phones.join(", ") + "\\\\n")'; //
d5ui += ' + (!(d.social_profiles || "")[0] ? "" : "<strong>Social profiles:</strong> " + d.social_profiles.join(", ") + "\\\\n") + (!(d.project_urls || "")[0] ? "" : "<strong>Project urls:</strong> " + d.project_urls.join(", ") + "\\\\n") + (!(d.team_groups || "")[0] ? "" : "<strong>Team groups:</strong> " + d.team_groups.join(", ") + "\\\\n") + ( !/contact|phone/i.test(d.file_type) ? "" : (!d.ts_created ? "" : "<strong>Joined team:</strong> " + _.ts2Fmt(d.ts_created) + "\\\\n") + (!d.ts_updated ? "" : "<strong>Last updated:</strong> " + _.ts2Fmt(d.ts_updated) + "\\\\n") ) }</div>\\\\n</details>\\\\n</div>\\\\n</article>\`'; //

 !window.dbwrap || dbwrap.remove() // necessary to clear UI from step 3 or 6
 try { dbwrap } catch { ndiv = document.createElement('div'); ndiv.id = "dbwrap"; ndiv.innerHTML = d1ui + d3ui + d2ui + d4ui + "\\n"; cmain.appendChild(ndiv); hlps = dbwrap.querySelectorAll('.chelp'); }

rexts = /^m[rs]\\.? +|^mrs\\.? +|[.,;:/]/gi; //
rexns = /^(?:m[rs]\\b\\.?|mrs\\b\\.?|) *(.*?) *((?:\\bde +|\\bvon +|)['‘’\\w-]+)([ ,]*\\b[js]r\\.?|[ ,]*\\b[ivx]+|)$/i; //
qss = [ '#dbwrap .media-content>details:first-of-type', '#dbwrap .media-content>details:last-of-type', '#ndata .media-left>.image>img, #ndata .media-content>details:first-of-type a' ];
ts2Fmt = str => !str ? "" : new Date(str).toUTCString().replace(/.+(\\d{2} [a-z]{3} \\d{4}).+/i, "$1");
idGen = (pfx, tsx, unx) => (/^[a-z~][a-z]$/i.test("" + pfx) ? pfx : "~p") + ( typeof tsx === 'string' && /^[\\w:.-]*$/.test(tsx) ? tsx : (_.fncTry(v => new Date(v), tsx) || new Date()).toISOString().replace(/\\.\\w+$|[:-]/g, "") ) + (typeof unx === 'string' && /^[\\w@.-]*$/.test(unx) ? unx : "user000"); //
nmsX = (d, x = sortsel.selectedIndex) => ( x === 3 ? d.name_user : x < 2 ? d.name_full : x < 3 && (d.name_full || "").trim().replace(_.rexns, "$2, $1$3") ) || d.from || d._id;
ptyX = (d, x = sortsel.selectedIndex) => x > 4 ? d[sortsel.value] || " " : x > 3 ? (d.file_updated || d.file_created || "").timestamp || d.ts_updated || d.ts_created || " " : _.nmsX(d).replace(_.rexts, "");
hdsX = evt => document.querySelectorAll(_.qss[0]).forEach(e => e.open = evt.target.checked);
bdsX = evt => document.querySelectorAll(_.qss[1]).forEach(e => e.open = evt.target.checked);
fRes = () => { let ts0 = new Date().getTime(); _.fwg = JSON.parse(JSON.stringify(ntmpl[ntmpl.key])); !/^idGen\\(.*\\)$/.test(_.fwg._id.trim()) || (_.fwg._id = eval("_." + _.fwg._id)); };
dLoad = evt => !window.dbobj || dbobj.get(evt.target.textContent || evt.target.dataset.fileid).then(d => !(_.fwg = d) || (dform.className = ndata.innerHTML = "") || _.formGen()).catch(reShow);
n1Gen = eval(d5ui);
window.ntmpl = { key: "t4cnt", t1src: t1src, t2evt: t2evt, t3mem: t3mem, t4cnt: t4cnt };
window.aurls = window.aurls || {};
!window.a1inp || ( a1inp.onchange = () => a3inp.innerHTML = (a1inp.files[0] || "").name || "<span>Locate image&hellip;</span>" );
!window.a4btn || ( a4btn.onclick = () => _.hsRes() || !(_.ak = a1inp.files[0]) ? isRtrv() : !window.dbobj || dbobj.get("-res-img").then(d => dbobj.putAttachment("-res-img", n4inp.value || _.ak.name, d._rev, _.ak, _.ak.type)).then(re => _.hlps[0].classList.remove("dnone") || reShow(re) || _.isRtrv()).catch(er => _.hlps[1].classList.remove("dnone") || reShow(er)) );
!window.a5btn || ( a5btn.onclick = () => _.hsRes() || !(_.ak = n5inp.value) || !window.dbobj || dbobj.get("-res-img").then(d => !d._attachments[_.ak] ? Promise.reject("Invalid key.") : dbobj.removeAttachment("-res-img", _.ak, d._rev)).then(re => _.hlps[2].classList.remove("dnone") || reShow(re) || !(delete aurls[_.ak]) || _.imgsVw()).catch(er => _.hlps[3].classList.remove("dnone") || reShow(er)) );
!window.resbtn || ( resbtn.onclick = () => _.hsRes() || _.fRes() || (dform.className = ndata.innerHTML = "") || _.formGen() )();
!window.savbtn || ( savbtn.onclick = () => Object.keys(_.fwg).forEach(k => _.rex0s.test(k) || (_.fwg[k] = _.fncTry(JSON.parse, window["p0" + k].value, 2))) || !_.fwg._id || _.d0Upd() || !window.dbobj || dbobj.put(Object.assign({ _id: "", _rev: null }, _.fwg)).then(re => _.hlps[4].classList.remove("dnone") || reShow(re)).catch(er => _.hlps[5].classList.remove("dnone") || reShow(er)) );
!window.nsbtn || ( nsbtn.onclick = () => !(dform.className = "dnone") || (p0_id.value = "") || !(sortsel.selectedIndex || (ndata.innerHTML = "")) || !window.dbobj || dbobj.allDocs({ include_docs: true }).then(re => { let rrs = re.rows.filter(r => r && r.doc.file_type).sort((a, b) => _.ptyX(a.doc) > _.ptyX(b.doc) ? 1 : -1); ndata.innerHTML = !rrs.length ? "\\n<p class=igreyd>&emsp;<em>[No data files found &hellip;]</em></p>\\n" : rrs.map(r => _.n1Gen(r.doc)).join("") + "\\n"; bodsswi.checked = hdrsswi.checked = 0; hdrsswi.onchange = _.hdsX; bodsswi.onchange = _.bdsX; document.querySelectorAll(_.qss[2]).forEach(e => e.onclick = _.dLoad); }).catch(reShow) );
!window.imgdtl || (imgdtl.open = false) || isRtrv().then(() => window.setTimeout(nsbtn.onclick, 0));
*/

/*
 8. __*Optional challenge:*__ Create more databases for other purposes --
    such as for compiling journal entries, for saving recipes, for
    recording workout results in a fitness log, etc.
    + First, in the following code, feel free to change the values of
      \`ntmpl.key\` and \`dbase\` for your new DB. For quick-startup,
      four different DB names with corresponding template options are
      provided -- out of which "t1src" and "recipes-home" are
      currently selected (assigned).
    + Also, in the above UI code for displaying summary info (step 7),
      change the "Contacts Directory" heading to something appropriate
      for the purpose of your DB -- like, "Note Summaries".
    + Then, un-comment the following code block to set up a new DB,
      which can be populated and used in the same way as (i.e., with
      the same controls that we created for) your *contacts* DB.
*/

/*
 ntmpl.key = "t1src"; // "t2evt"; "t3mem"; "t4cnt";
 dbase = "recipes-home"; // "log-workouts"; "journal2023"; "contacts-work";
 !window.PouchDB || !/^[a-z][0-9_a-z-]*$/.test(dbase) || (window.dbobj = new PouchDB(dbase))
*/
//`;

export {
  _module,
  tutorial1, tutorial2, tutorial3, tutorial4
};
