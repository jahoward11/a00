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
  + the set of keywords that a browser console understands
  + building blocks for composing your instructions to manipulate
    and display data
- Application Programming Interfaces (API) --
  specifically the client-side web APIs
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

    E.G.: The app should function in a similar way unit conversions
    are made by Google.

    In the Google search bar, type | In the result list, expect
    "100 yards to meters"          | "91.44 meters"
    "101 mph to km/h"              | "162.544 kilometers per hour"
    "110 Fahrenheit to Celsius"    | "43.3333 Celsius"
    "1111 to Roman"                | "MCXI"

 2. Write a __conversion function__.
    + A *function* is defined (written) by sequentially combining:
      an arbitrary function name, the assignment operator (\`=\`),
      input variable(s), the arrow notation (\`=>\`), and manipulations
      or calculations (formulas) to be done on the input.
    + A *function* is called (executed) by writing the function name
      followed by a set of parentheses. Input data (arguments) are
      written within the parentheses.
*/

ucLen = n => n * 12  // converts a length in feet to inches

ucLen(3)  // calls function &amp; returns result of 3 * 12

/*
 3. Modify the function to __handle bi-directional conversions__.
    + Add an input variable that will indicate the initial unit,
      the unit being provided. Two or more variables are wrapped in
      parentheses (\`( … )\`) and are separated by a comma (\`,\`).
    + Use a true-false test with conditional operators
      (\`?\` = "if true", \`:\` = "if false")
      to invoke the correct directional formula.
    + If including multiple arguments in a *function* call,
      they are separated with a comma (\`,\`).
    + If an argument is not a number, it is wrapped in quotes (\`"…"\`).
*/

ucLen = (n, u0) => /^in/i.test(u0) ? n / 12 : n * 12
 // converts either inches to feet, or feet to inches
ucLen(36, "in")  // calls function &amp; returns result of 36 / 12
ucLen(3, "ft")   // calls function &amp; returns result of 3 * 12

/*
 4. Modify the function to __return a specified unit__.
    + Add another input variable that will indicate the final unit,
      the unit being requested.
    + Use successive tests with conditional operators to invoke the
      correct calculation formula.
*/

ucLen = (n, u0, u1) => /^in/i.test(u0) && /^ft/i.test(u1) ? n / 12 : /^in/i.test(u0) && /^yd/i.test(u1) ? n / 36 : /^ft/i.test(u0) && /^in/i.test(u1) ? n * 12 : /^ft/i.test(u0) && /^yd/i.test(u1) ? n / 3 : /^yd/i.test(u0) && /^in/i.test(u1) ? n * 36 : /^yd/i.test(u0) && /^ft/i.test(u1) ? n * 3 : u0 === u1 ? n : "error"; ""
 // makes conversion between any lengths in
 // inches (in), feet (ft) or yards (yd)
ucLen(72, "in", "yd")   // converts 72 inches to yards
ucLen(2, "yd", "in")    // converts 2 yards to inches
ucLen(4.5, "ft", "yd")  // converts 4.5 feet to yards
ucLen(1.5, "yd", "ft")  // converts 1.5 yards to feet

/*
 5. Build out __a collection of functions__
    to handle many other kinds of conversions.
    + For complex conversions that require multiple operations, the
      steps of a *function* definition are wrapped in curly brackets
      (\`{ … }\`) and are separated by a semicolon (\`;\`). The final
      result is indicated with the \`return\` keyword.
    + Within a *function* block of multiple operations, include arrays,
      new variable declarations (\`let …\`) and loop statements
      (\`.forEach( … )\`, \`while ( … ) { … }\`) as needed.
*/

ucSpd = (n, u0, u1) => /^mi?[/p]h/i.test(u0) && /^km?[/p]h/i.test(u1) ? n * 5280 * 12 * 0.0000254 : /^km?[/p]h/i.test(u0) && /^mi?[/p]h/i.test(u1) ? n / 0.0000254 / 12 / 5280 : u0 === u1 ? n : "error"; ""
 // makes conversion of speeds in either
 // miles-per-hour (mph) or kilometers-per-hour (km/h)
ucSpd(101, "mph", "km/h")

ucTmp = (n, u0, u1) => /^F/i.test(u0) && /^C/i.test(u1) ? (n - 32) * 5 / 9 : /^F/i.test(u0) && /^K/i.test(u1) ? (n - 32) * 5 / 9 + 273.15 : /^C/i.test(u0) && /^F/i.test(u1) ? n * 9 / 5 + 32 : /^C/i.test(u0) && /^K/i.test(u1) ? n + 273.15 : /^K/i.test(u0) && /^F/i.test(u1) ? (n - 273.15) * 9 / 5 + 32 : /^K/i.test(u0) && /^C/i.test(u1) ? n - 273.15 : u0 === u1 ? n : "error"; ""
 // makes conversion between any temperatures in
 // Fahrenheit (F), Celsius (C) or Kelvin (K)
ucTmp(110, "Fahrenheit", "Celsius")

uara = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]; ""
urom = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]; ""

utoRom = val => { let str = ""; _.uara.forEach((ai, i) => { while (val % ai < val) { str += _.urom[i]; val -= ai; } }); return str; }; ""
 // converts Arabic integer into Roman numeral
utoRom(1111, "Arabic", "Roman")

ufrRom = str => { let val = 0; str = str.toUpperCase(); _.uara.forEach((ai, i) => { while (!str.indexOf(_.urom[i])) { val += ai; str = str.replace(_.urom[i], ""); } }); return val; }; ""
 // converts Roman numeral into Arabic integer
ufrRom("MCXI", "Roman", "Arabic")

/*
 6. Finally, consolidate the collection of functions
    to __maximize efficiency__, which also improves user experience.
    + Use \`.push( … )\` to combine sets of regular-expression test
      patterns into a single, lookup array.
    + Use \`Object.assign( … , … )\` to combine corresponding sets of
      conversion formulas into a single, lookup object.
    + *Challenge:* How would you allow conversions of mass or volume?
*/

uxs = [/^$/, /^in(?:che?s?|)$/i, /^f(?:oo|ee|)t$/i, /^y(?:a?r?ds?|)$/i, /^mi(?:les?|)$/i, /^m(?:eters?|)$/i]; ""
uxs.push(/^ft?[/p]s$/i, /^mi?[/p]h$/i, /^m[/p]s$/i, /^km?[/p]h$/i)
uxs.push(/^F(?:ahrenheit|)$/i, /^C(?:elsius|)$/i, /^K(?:elvin|)$/i)

ucs = { f12: n => n / 12, f13: n => n / 36, f14: n => n / 12 / 5280, f15: n => n * 0.0254, f21: n => n * 12, f23: n => n / 3, f24: n => n / 5280, f25: n => n * 12 * 0.0254, f31: n => n * 36, f32: n => n * 3, f34: n => n * 3 / 5280, f35: n => n * 36 * 0.0254, f41: n => n * 5280 * 12, f42: n => n * 5280, f43: n => n * 5280 / 3, f45: n => n * 5280 * 12 * 0.0254, f51: n => n / 0.0254, f52: n => n / 0.0254 / 12, f53: n => n / 0.0254 / 36, f54: n => n / 0.0254 / 12 / 5280 }
Object.assign(ucs, { f67: n => n * 3600 / 5280, f68: n => n * 12 * 0.0254, f69: n => n * 3600 * 12 * 0.0000254, f76: n => n * 5280 / 3600, f78: n => n * 5280 * 12 * 0.0254 / 3600, f79: n => n * 5280 * 12 * 0.0000254, f86: n => n / 0.0254 / 12, f87: n => n * 3600 / 0.0254 / 12 / 5280, f89: n => n * 3600 / 1000, f96: n => n / 0.0000254 / 12 / 3600, f97: n => n / 0.0000254 / 12 / 5280, f98: n => n * 1000 / 3600 })
Object.assign(ucs, { f1011: n => (n - 32) * 5 / 9, f1012: n => (n - 32) * 5 / 9 + 273.15, f1110: n => n * 9 / 5 + 32, f1112: n => +n + 273.15, f1210: n => (n - 273.15) * 9 / 5 + 32, f1211: n => n - 273.15 })

uConv = (n, u0, u1) => { let [x0, x1] = [_.uxs.findIndex(r => r.test(u0)), _.uxs.findIndex(r => r.test(u1))]; return typeof n !== 'number' ? (!/^[cdilmvx]+$/i.test(n || "") || x0 > 0 ? "error" : _.ufrRom(n)) : x0 < 1 ? _.utoRom(n) : x1 < 1 ? "error" : x0 === x1 ? n : (_.ucs["f" + x0 + x1] || (() => "error"))(n); }; ""

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

ucShow = () => ucout.value = _.uConv(!/^-?(?:\\d+|\\d*\\.\\d+)(?:e-?\\d+|)|^-?0x[\\da-f]+$/i.test(ucinp.value) ? ucinp.value : +ucinp.value, ulist0.value, ulist1.value); ""
opts = ["", "inches", "feet", "yards", "miles", "meters", "ft/s", "mph", "m/s", "km/h", "Fahrenheit", "Celsius", "Kelvin"].map(e => "<option>" + e + "</option>").join("\\n"); ""
ucui = "\\n<hr style=\\"margin: 1.5rem 0;\\">\\n<h4 class=cfield>Unit Converter</h4>"; ""
ucui += "\\n<div class=cfield><span class=ccntr><input type=text id=ucinp placeholder=\\"Enter measurement…\\" /></span><span class=ccntr><select id=ulist0>\\n"; ""
ucui += opts + "\\n</select></span></div>\\n<div class=cfield><span class=ccntr><input type=text id=ucout readonly /></span><span class=ccntr><select id=ulist1>\\n"; ""
ucui += opts + "\\n</select></span></div>"; ""
// try { ucwrap } catch { ndiv = document.createElement('div'); ndiv.id = "ucwrap"; ndiv.innerHTML = ucui; cmain.appendChild(ndiv); }
// [ucinp, ulist0, ulist1].forEach((e, i) => e[!i ? 'onblur' : 'onchange'] = _.ucShow)
//`;

const tutorial2 = `/*
__JavaScript Coding Tutorials, Part 2__

 In *part 1*, we saw in brief some of the more useful JS elements and
how they are used. We learned about combining key JS elements to get
practical results. We used core JS code only -- which would work in a
__browser console__ and allow us to get immediate feedback on our work
as we code.

 In *part 2*, we turn our focus to __HTML__ with __CSS__ -- a language for
coding layout and design. We'll build some visual games -- in which
we can appreciate just why layout and design matter when coding.

- - - - -
__*Tutorial Two: Building a sliding-tiles puzzle (and other games)*__

__* * * SLIDING TILES * * *__
*/

gui = "\\n<style>\\n*, *::before, *::after { box-sizing: inherit; }"; ""
gui += "\\nhtml { box-sizing: border-box; }"; ""
gui += "\\nhr { margin: 1.5rem 0; }"; ""
gui += "\\n#g1wrap { font: normal medium Helvetica, Arial, sans-serif; }"; ""
gui += "\\n#g1wrap .cfield:not(:last-child) { margin-bottom: 8px; }"; ""
gui += "\\n#g1wrap .ccntr:not(:last-child) { margin-right: 8px; }"; ""
gui += "\\n#g1wrap :not(.cfield)>.ccntr { display: inline-block; margin-bottom: 8px; }"; ""
gui += "\\n#g1wrap .blank, #g1wrap .gtile { width: 60px; height: 60px; border: 4px solid White; }"; ""
gui += "\\n#g1wrap .gtile { background: LightSteelBlue; color: White; font-size: large; font-weight: bold; cursor: pointer; text-align: center; }"; ""
gui += "\\n#trows, #tcols { max-width: 36px; }"; ""
gui += "\\n#g1board { width: auto; margin: 14px; border-collapse: collapse; }"; ""
gui += "\\n#g1scor { font-size: small; margin-left: 16px; }"; ""
gui += "\\n#g1movs { font-weight: bold; }"; ""
gui += "\\n</style>\\n<hr>\\n<h4 class=cfield>Sliding Tiles</h4>"; ""
gui += "\\n<div>\\n<span class=ccntr><select id=tnmrl>\\n<option disabled>Characters</option>\\n"; ""
gui += ["1 2 3 4 …", "I II III IV …", "A B C D …", "Α Β Γ Δ …"].map(e => "<option>" + e + "</option>").join("\\n"); ""
gui += "\\n</select></span><span class=ccntr><select id=tclrs>\\n<option disabled>Color Cascades</option>\\n"; ""
gui += ["No gradient", "Red gradient", "Gold gradient", "Blue gradient", "Rainbow pattern"].map(e => "<option>" + e + "</option>").join("\\n"); ""
gui += "\\n</select></span>\\n<label class=ccntr>Auto-shuffle <input type=checkbox id=pshuf checked></label>\\n</div>\\n<div>"; ""
gui += "\\n<label class=ccntr>Rows <input type=text id=trows value=4 size=2></label>"; ""
gui += "\\n<label class=ccntr>Columns <input type=text id=tcols value=4 size=2></label>"; ""
gui += "\\n<span class=ccntr><input type=button value=\\"&#x21bb; NEW GAME\\" onclick=gmReset()></span>\\n</div>"; ""
gui += "\\n<table id=g1board></table>\\n<div id=g1scor class=cfield>Count: <span id=g1movs>0</span></div>"; ""
gui += "\\n<div>\\n<span class=ccntr><input type=button value=\\"RETRACT MOVE\\" onclick=mvRvrs()></span><span class=ccntr><input type=button value=\\"RESET COUNTER\\" onclick=ctZero()></span>\\n</div>\\n"; ""

// g1wrap.remove() // *Alert:* useful only if edit-testing the GUI code above
try { g1wrap } catch { ndiv = document.createElement('div'); ndiv.id = "g1wrap"; ndiv.innerHTML = gui; cmain.appendChild(ndiv); }

tnx = tcx = psh = rval = cval = tmax = tovr = m1trk = unsh = cxs = shxs = shuf = tarr = cras = cr2s = ""
clrefs = [ "", "", ["#752424", "#9c3030", "#c33c3c", "#cf6363", "#db8a8a", "#e7b1b1", "#f3d8d8"], ["#856514", "#b1871b", "#dea821", "#e4ba4e", "#ebcb7a", "#f2dca6", "#f8eed3"], ["#2b506e", "#396a93", "#4785b8", "#6c9dc6", "#91b6d4", "#b6cee2", "#dae7f1"], ["#ff9999", "#ffcc99", "#fff099", "#99cc99", "#9999ff", "#cc99cc", "#d8bfd8"] ]; ""
uara = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]; ""
urom = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]; ""
utoRom = v => { let s = ""; _.uara.forEach((ai, i) => { while (v % ai < v) { s += _.urom[i]; v -= ai; } }); return s; }; ""
utoEng = v => { let i, codpts = []; while (v) { i = 0; while ((v - ++i) % 26); codpts.unshift(i + 64); v = (v - i) / 26; } return String.fromCodePoint(...codpts || 65); }; ""
utoGre = v => { let i, codpts = []; while (v) { i = 0; while ((v - ++i) % 24); codpts.unshift((i < 18 ? i : 1 + i) + 912); v = (v - i) / 24; } return String.fromCodePoint(...codpts || 913); }; ""
clRanks = () => _.unsh.map( v => _.clrefs[_.tcx][ _.cxs.find( x => _.tovr < 0 ? x === 6 || v <= _.cval || (v % _.cval > 0 && v % _.cval <= _.cval - _.rval + 1) || (v > _.cval * (1 + x) - _.rval + (1 + x) && v <= _.cval * (1 + x)) || (v - (1 + x) - (_.cval - _.rval)) % _.cval === 0 : x === 6 || v - _.tovr <= _.tmax * (1 + x) || (v - (1 + x)) % _.tmax === 0 )]); ""
clRnk2s = () => _.unsh.map( v => ( _.tovr < 0 ? v <= _.cval - _.rval || (v - 1 - (_.cval - _.rval)) % (1 + _.cval) !== 0 || v > 7 * _.cval : v - 1 < _.tovr || (v - 1 - _.tovr) % (1 + _.tmax) !== 0 || v - 1 - _.tovr > 7 * _.tmax ) ? 'White' : _.tcx < 5 ? 'Gold' : 'LimeGreen' ); ""
nAlt = v => _.tnx == 2 ? _.utoRom(v) : _.tnx == 3 ? _.utoEng(v) : _.tnx == 4 ? _.utoGre(v) : v; ""
isSolva = () => { let ctinvs = _.shxs.filter(e => e.v).map(e => e.i + 1).reduce((a, b, i, f) => a + f.slice(i + 1).reduce((c, d) => c + (d > b ? 0 : 1), 0), 0); return (ctinvs + (_.cval % 2 === 1 ? 0 : _.rval - Math.ceil((_.shuf.indexOf(0) + 1) / _.cval))) % 2 === 0; }; ""
posSwap = (p0, p1) => [_.tarr[p0][p1], _.tarr[p0][p1 + 1]] = [_.tarr[p0][p1 + 1], _.tarr[p0][p1]]; ""
gbdGen = () => g1board.innerHTML = _.tarr.map( (e, i) => "\\n<tr>" + e.map( (f, j) => f === 0 ? "<td class=blank> </td>" : \`<td class=gtile \${!_.cras ? "" : \`style="background:\${_.cras[f]};color:\${_.cr2s[f]};" \`}onclick=tileSli(\${i},\${j})>\${f}</td>\` ).join("") + "</tr>" ).join("") + "\\n"; ""

window.gmReset = () => { _.tnx = tnmrl.selectedIndex; _.tcx = tclrs.selectedIndex; _.psh = pshuf.checked; _.rval = +trows.value; _.cval = +tcols.value; _.tmax = _.rval <= _.cval ? _.rval : _.cval; _.tovr = (_.rval - _.cval) * _.tmax; _.m1trk = []; g1movs.innerHTML = 0; _.unsh = Array.from(Array(_.rval * _.cval).keys()); _.cxs = Array.from(Array(_.tmax > 7 ? 7 : _.tmax).keys()); [_.cras, _.cr2s] = _.tcx < 2 ? [0, 0] : [_.clRanks(), _.clRnk2s()]; _.unsh = _.unsh.slice(1).map(_.nAlt).concat(0); _.tcx < 2 || ([_.cras, _.cr2s] = [_.cras, _.cr2s].map(e => Object.fromEntries(_.unsh.map((v, i) => [v, e[i + 1]])))); _.shxs = _.unsh.map((v, i) => ({ i, v, o: Math.random() })).sort((a, b) => !_.psh || a.o - b.o); _.shuf = _.shxs.map(e => e.v); _.tarr = Array.from(Array(_.rval)).map(() => _.shuf.splice(0, _.cval)); _.shuf = _.tarr.flat(); _.isSolva() || (_.shuf[0] && _.shuf[1] ? _.posSwap(0, 0) : _.posSwap(_.rval - 1, _.cval - 2)); _.gbdGen(); }; ""
window.tileSli = (rx, cx, bkup) => { let bl = [[rx - 1, cx], [rx + 1, cx], [rx, cx - 1], [rx, cx + 1]].find(([p0, p1]) => (_.tarr[p0] || "")[p1] === 0); !bl || (bkup || _.m1trk.push([bl[0], bl[1]])) && ([_.tarr[bl[0]][bl[1]], _.tarr[rx][cx]] = [_.tarr[rx][cx], 0]) && ( g1movs.innerHTML = "" + _.tarr !== "" + _.unsh ? _.m1trk.length + " moves" : "<em>Puzzle solved in " + _.m1trk.length + " moves!</em>" ) && _.gbdGen(); }; ""
window.mvRvrs = () => !(_.m1trk || "").length || tileSli(... _.m1trk.pop(), 1); ""
window.ctZero = () => (_.m1trk = []) && (g1movs.innerHTML = 0); ""
gmReset();

/*
 1. Design a game board -- or, __graphic user interface__ (GUI).
    + Include a block of styles (\`<style> … </style>\`), a title
      block (\`<h4 class=cfield>Sliding Tiles</h4>\`), some game-board
      controllers (\`<div><span class=ccntr> … </span></div>\`), and
      the game-board display (\`<table id=g1board> … </table>\`).
    + The rendered GUI, below, is built from the leading block of
      code, above, in which strings of HTML/CSS text are cumulatively
      assigned to the GUI variable (\`gui += " … "\`).
    + As you can see below, the entire GUI string was injected into
      this web doc -- where it will remain as rendered (even after
      this tutorial is unloaded), unchanged from the way it was first
      designed, until it gets altered (overwritten) by another script.
    + *Challenge:* Un-comment the \`g1wrap.remove()\` line, above,
      and make assorted edits to the GUI code, such as:
      * changing the \`.gtile\` background color to \`Pink\` … or \`Tan\`;
      * changing the game-board title to "My First Web Game" … or …;
      * unchecking the "Auto-shuffle" checkbox
        (tip: remove the word \`checked\` in the \`<input … >\` tag);
      * setting the starting value of the number of rows and columns
        each to three (tip: \`<input … value=3 … >\`).

 2. Reproduce the GUI text from the calculator-app tutorial code, and
    __begin building a standalone web app__.
    + Un-comment the following two lines of code to generate the
      web-doc text that will be the app framework.
    + Select and copy the orange text that appears above, overtop
      the calculator.
    + Paste the copied text into a new text file; Save the file under
      any filename with an HTML extension (e.g., \`jsgame-tiles.html\`).
    + *Note:* When opened up in a web browser, the web app will not
      be responsive because it does not yet have any script code.
*/

// dwrap = ["<!DOCTYPE html>\\n<html lang=en>\\n<title>Sliding Tiles, JS Tutorial 2</title>\\n<meta charset=\\"utf-8\\">\\n<meta name=viewport content=\\"width=device-width, initial-scale=1\\">\\n", "\\n<script type=module>\\n", "\\n</script>\\n</html>"]; ""
// respShow((dwrap[0] + g1wrap.outerHTML + dwrap[1] + dwrap[2]).replace(/\\n<hr>/, "").replace(/<(?=[!/?a-z])/gi, "&lt;"))

/*
 3. Add in the puzzle's inner logic (its "script", extracted from the
    tutorial code) to __turn a static web doc into a dynamic web app__
    -- an interactive game.
    *Alert:* Read through all procedures of this step before starting.
    + Select and copy the 3rd and 4th blocks of code, above --
      beginning with \`tnx = …\` and ending with \`gmReset();\`.
    + Unload this tutorial (clear *ENTRY* field), and paste the copied
      text into the empty, *ENTRY* field of the calculator app.
    + Wrap the pasted text with JS block-comment tags (\`/* … */\`).
      In other words, in the *ENTRY* field, type \`/*\` into a blank
      line before all of the text and \`*/\` into a blank line after
      all of the text.
    + Type \`tutor2js\` into the *DATA-LOAD* input box (directly beneath
      the calculator), and tap *SAVE*.
    + Reload this tutorial, and un-comment the following two lines
      of code.
    + Select and copy the orange text that appears above, overtop
      the calculator.
    + Paste the copied text inside the \`<script> … </script>\` tags of
      the new HTML file created in step 2; Then re-save the file.
    + *Note:* When opened up in a web browser, the web app should be
      responsive and the game should work as expected; If not, try it
      again: Start fresh, and repeat all procedures of steps 2 and 3.
*/

// preresp.innerHTML = "" // clears any orange text (in case GUI text is still visible)
// localforage.getItem("tutor2js").then( rslt => respShow( "let " + rslt.replace(/\\b_\\.\\b| ""$|^\\n|^\\/\\*\\n*|\\n*\\*\\/$/gm, "").replace(/^.+/, m => m.replace(/ =/g, ",")).replace(/^(\\w+ =.+);(?=\\n\\w+ =)/gm, "$1,").replace(/<(?=[!/?a-z])/gi, "&lt;") )).catch(respShow) //

/*
 4. See how __GUI design techniques__ get applied to other games.
    *Note:* For each of the following games, the GUI has not yet been
    displayed in this web doc.
    + Un-comment corresponding lines of doc-manipulating code
      (as in step 1, above) to display the game's GUI (below, beneath
      both the calculator and the *Sliding Tiles* puzzle).
    + To generate the web-app code of a game -- for building a
      standalone game app (as in step's 2 and 3, above) -- make use of
      the text-generating commands already provided in step's 2 and 3.
      Within those lines of code, above, simply change the \`g1wrap\`
      variable to the other game's "wrap" ID (e.g., \`g2wrap\`); And
      update the saved \`tutor2js\` data file with the other game's
      GUI code.
    + *Take notice:* For each additional game in this tutorial, the
      game board has many elements and structures in common with the
      first one (e.g., \`<table id=g1board>\`) -- but, each has a
      custom-tailored selection of CSS style options to display those
      structures in graphically different ways. Fine-control over the
      visual elements of an app is most often a matter of assigning
      ID and CLASS names to key elements, then applying to those names
      such style specifics as size and positioning on the page,
      box-model spacing and borders, or alternate, responsive states,
      like a change in color or shape or font, etc.
    + *Challenge:* Play with the styles -- as well as the script code.
      Adjust and refine these game boards in any way that you would
      like. Every little bit of experience in these skills now will
      have big and frequent payoffs down the road of your future.

__* * * LIGHTS OUT * * *__
*/

g2ui = "\\n<style>\\n*, *::before, *::after { box-sizing: inherit; }"; ""
g2ui += "\\nhtml { box-sizing: border-box; }"; ""
g2ui += "\\nhr { margin: 1.5rem 0; }"; ""
g2ui += "\\n#g2wrap { font: normal medium Helvetica, Arial, sans-serif; margin: 0 0 56px; max-width: 348px; }"; ""
g2ui += "\\n#g2wrap .cfield:not(:last-child) { margin-bottom: 8px; }"; ""
g2ui += "\\n#g2wrap .ccntr:not(:last-child) { margin-right: 8px; }"; ""
g2ui += "\\n#g2wrap :not(.cfield)>.ccntr { display: inline-block; margin-bottom: 8px; }"; ""
g2ui += "\\n#g2bcntr { position: relative; padding-top: 1px; }"; ""
g2ui += "\\n#g2circt { width: auto; margin: 44px; border-collapse: collapse; }"; ""
g2ui += "\\n#g2circt td { width: 60px; height: 60px; border: 4px solid black; }"; ""
g2ui += "\\n#g2board { position: absolute; top: 0; width: auto; margin: 12px; border-spacing: 8px; }"; ""
g2ui += "\\n#g2board td { background: MediumOrchid; width: 52px; height: 52px; border-radius: 26px; box-shadow: 0 0 16px 4px Orchid; cursor: pointer; }"; ""
g2ui += "\\n#g2board td.ldark { background: Indigo; box-shadow: 0 0 16px 4px Grey; cursor: pointer; }"; ""
g2ui += "\\n#g2scor { font-size: small; margin-left: 16px; }"; ""
g2ui += "\\n#g2movs { font-weight: bold; }"; ""
g2ui += "\\n</style>\\n<hr>\\n<h4 class=cfield>Lights Out</h4>"; ""
g2ui += "\\n<div class=cfield><em>Objective:</em> Switch all matrix lights off.</div>"; ""
g2ui += "\\n<div class=cfield><em>Game Action:</em> Switching a diode in a lighting matrix also switches any up-, down-, left- or right- connected diodes.</div>"; ""
g2ui += "\\n<div><span class=ccntr><select id=lpatt>"; ""
g2ui += ["&mdash;Startup Pattern&mdash;", "Eight-pocket table (in 5)", "Peep holes (in 6)", "Square target (in 9)", "Bi-polar opposites (in 11)", "Central light out (in 12)", "Road caution marks (in 15)"].map(e => \`\\n<option>\${e}</option>\`).join(""); ""
g2ui += "\\n</select></span><span class=ccntr><input type=button value=\\"&#x21bb; RESTART\\" onclick=\\"g2Reset()\\"></span></div>"; ""
g2ui += "\\n<div id=g2bcntr>\\n<table id=g2circt><tbody>"; ""
g2ui += [0, 1, 2, 3].map(r => "\\n<tr>" + [0, 1, 2, 3].map(c => "<td></td>").join("") + "</tr>").join(""); ""
g2ui += "\\n</tbody></table>\\n<table id=g2board><tbody>"; ""
g2ui += [0, 1, 2, 3, 4].map(r => "\\n<tr>" + [0, 1, 2, 3, 4].map(c => \`<td id=n\${r}\${c} onclick=\\"litSwi(\${r},\${c})\\"></td>\`).join("") + "</tr>").join(""); ""
g2ui += "\\n</tbody></table>\\n</div>"; ""
g2ui += "\\n<div id=g2scor class=cfield>Count: <span id=g2movs>0</span></div>"; ""
g2ui += "\\n<div class=cfield><span class=ccntr><input type=button value=\\"RESET COUNTER\\" onclick=\\"c2Zero()\\"></span></div>"; ""
g2ui += "\\n<div class=cfield><label class=ccntr><input type=checkbox id=utog> Allow single-diode toggle&mdash;Suspend counter</label></div>\\n"; ""

// g2wrap.remove() // *Alert:* useful only if edit-testing the GUI code above
// try { g2wrap } catch { ndiv = document.createElement('div'); ndiv.id = "g2wrap"; ndiv.innerHTML = g2ui; cmain.appendChild(ndiv); }

m2trk = 0; ""
patt0s = [ "", ["0,0", "0,2", "0,4", "2,0", "2,4", "4,0", "4,2", "4,4"], ["2,1", "2,3"], ["1,1", "1,2", "1,3", "2,1", "2,3", "3,1", "3,2", "3,3"], ["0,4", "4,0"], ["2,2"], ["0,2", "1,1", "2,0", "2,4", "3,3", "4,2"] ]; ""
window.c2Zero = () => g2movs.innerHTML = _.m2trk = 0; ""
window.g2Reset = () => c2Zero() || [0, 1, 2, 3, 4].forEach( r => [0, 1, 2, 3, 4].forEach( c => window["n" + r + c].classList[_.patt0s[lpatt.selectedIndex].includes([r, c].join()) ? "add" : "remove"]("ldark") ) ); ""
window.litSwi = (rx, cx) => { utog.checked ? window["n" + rx + cx].classList.toggle("ldark") : [[rx - 1, cx], [rx, cx - 1], [rx, cx], [rx, cx + 1], [rx + 1, cx]].forEach( ([r, c]) => r < 0 || c < 0 || r > 4 || c > 4 || window["n" + r + c].classList.toggle("ldark") ); utog.checked || ( g2movs.innerHTML = [0, 1, 2, 3, 4].some( r => [0, 1, 2, 3, 4].some(c => !window["n" + r + c].classList.contains("ldark")) ) ? ++_.m2trk + " switches" : "<em>Puzzle solved with " + ++_.m2trk + " switches!</em>" ); }; ""

/*
… *more games … coming soon* …
*/
//`;

export {
  groupname, tutorial1, tutorial2
};
