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
 7. __*Optional demo:*__ To create and demo (below, under the calculator)
    one, possible, user-interface (UI) design for your unit-converter
    web app, un-comment (i.e., remove the \`//\` characters of) the
    last two lines of the following block of code.
*/

ucShow = () => ucout.value = _.uConv(!/^-?(?:\\d+|\\d*\\.\\d+)(?:e-?\\d+|)|^-?0x[\\da-f]+$/i.test(ucinp.value) ? ucinp.value : +ucinp.value, ulist0.value, ulist1.value); ""
opts = ["", "inches", "feet", "yards", "miles", "meters", "ft/s", "mph", "m/s", "km/h", "Fahrenheit", "Celsius", "Kelvin"].map(e => "<:option>" + e + "<:/option>").join("\\n"); ""
ucui = "\\n<:hr style:=\\"margin: 1.5rem 0;\\">\\n<:h4 class:=cfield>Unit Converter<:/h4>"; ""
ucui += "\\n<:div class:=cfield><:span class:=ccntr><:input type:=text id:=ucinp placeholder:=\\"Enter measurement…\\" /><:/span><:span class:=ccntr><:select id:=ulist0 class:=aauto>\\n"; ""
ucui += opts + "\\n<:/select><:/span><:/div>\\n<:div class:=cfield><:span class:=ccntr><:input type:=text id:=ucout readonly /><:/span><:span class:=ccntr><:select id:=ulist1 class:=aauto>\\n"; ""
ucui += opts + "\\n<:/select><:/span><:/div>"; ""
// try { ucwrap } catch { ndiv = document.createElement('div'); ndiv.id = "ucwrap"; ndiv.innerHTML = ucui.replace(/(<):|:(=)/g, "$1$2"); cmain.appendChild(ndiv); }
// [ucinp, ulist0, ulist1].forEach((e, i) => e.addEventListener(!i ? 'blur' : 'change', _.ucShow))
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
*/

gui = "\\n<:style>\\nhr { margin: 1.5rem 0; }"; ""
gui += "\\n#gwrap { font: normal medium Helvetica, Arial, sans-serif; }"; ""
gui += "\\n#gwrap .cfield:not(:last-child) { margin-bottom: 8px; }"; ""
gui += "\\n#gwrap .cfield>.ccntr:not(:last-child) { margin-right: 8px; }"; ""
gui += "\\n#gwrap .blank, #gwrap .gtile { width: 58px; height: 58px; border: 4px solid White; }"; ""
gui += "\\n#gwrap .gtile { background: LightSteelBlue; color: White; font-size: large; font-weight: bold; cursor: pointer; text-align: center; }"; ""
gui += "\\n#rows, #cols { max-width: 28px; }"; ""
gui += "\\n#gboard { width: auto; margin: 14px; border-collapse: collapse; }"; ""
gui += "\\n#gmscor { font-size: small; margin-left: 16px; }"; ""
gui += "\\n#txtmvs { font-weight: bold; }"; ""
gui += "\\n<:/style>\\n<:hr>\\n<:h4 class:=cfield>Sliding Tiles<:/h4>\\n<:div class:=cfield>"; ""
gui += "\\n<:label class:=ccntr>Rows <:input type:=text id:=rows value:=4 size:=2><:/label>"; ""
gui += "\\n<:label class:=ccntr>Columns <:input type:=text id:=cols value:=4 size:=2><:/label>\\n<:/div>"; ""
gui += "\\n<:div class:=cfield>\\n<:label class:=ccntr>Characters <:select id:=tnmrl class:=aauto>\\n"; ""
gui += ["1 2 3 4 …", "I II III IV …", "A B C D …", "Α Β Γ Δ …"].map(e => "<:option>" + e + "<:/option>").join("\\n"); ""
gui += "\\n<:/select><:/label><:input type:=button value:=\\"↻ NEW GAME\\" onclick:=gmReset()>\\n<:/div>"; ""
gui += "\\n<:table id:=gboard><:/table>\\n<:div id:=gmscor class:=cfield>Count: <:span id:=txtmvs>0<:/span><:/div>"; ""
gui += "\\n<:div class:=cfield>\\n<:span class:=ccntr><:input type:=button value:=\\"RETRACT MOVE\\" onclick:=mvRvrs()><:/span><:span class:=ccntr><:input type:=button value:=\\"RESET COUNTER\\" onclick:=ctZero()><:/span>\\n<:/div>\\n"; ""

try { gwrap } catch { ndiv = document.createElement('div'); ndiv.id = "gwrap"; ndiv.innerHTML = gui.replace(/(<):|:(=)/g, "$1$2"); cmain.appendChild(ndiv); }

rval = cval = tnx = mtrk = unsh = shuf = tarr = ""
gbdGen = () => gboard.innerHTML = _.tarr.map( (e, i) => "\\n<:tr>" + e.map( (f, j) => f === 0 ? "<:td class:=blank> <:/td>" : "<:td class:=gtile onclick:=tileMove(" + i + "," + j + ")>" + f + "<:/td>" ).join("") + "<:/tr>" ).join("").replace(/(<):|:(=)/g, "$1$2"); ""
uara = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]; ""
urom = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]; ""
utoRom = v => { let s = ""; _.uara.forEach((ai, i) => { while (v % ai < v) { s += _.urom[i]; v -= ai; } }); return s; }; ""
utoEng = v => { let i, codpts = []; while (v) { i = 0; while ((v - ++i) % 26) {}; codpts.unshift(i + 64); v = (v - i) / 26; } return String.fromCodePoint(...codpts || 65); }; ""
utoGre = v => { let i, codpts = []; while (v) { i = 0; while ((v - ++i) % 24) {}; codpts.unshift((i < 18 ? i : 1 + i) + 912); v = (v - i) / 24; } return String.fromCodePoint(...codpts || 913); }; ""
nAlt = v => _.tnx == 1 ? _.utoRom(v) : _.tnx == 2 ? _.utoEng(v) : _.tnx == 3 ? _.utoGre(v) : v; ""
posSwap = (p0, p1) => [_.tarr[p0][p1], _.tarr[p0][p1 + 1]] = [_.tarr[p0][p1 + 1], _.tarr[p0][p1]]; ""
isSolva = () => { let ctinvs = _.shuf.filter(e => e).reduce((a, b, i, f) => a + f.slice(i + 1).reduce((c, d) => c + (d > b ? 0 : 1), 0), 0); return (ctinvs + (_.cval % 2 === 1 ? 0 : _.rval - Math.ceil((_.shuf.indexOf(0) + 1) / _.cval))) % 2 === 0; }; ""

window.mvRvrs = () => !(_.mtrk || "").length || tileMove(..._.mtrk.pop(), 1); ""
window.ctZero = () => (_.mtrk = []) && (txtmvs.innerHTML = 0); ""
window.tileMove = (rx, cx, bk) => { let bl = [[rx - 1, cx], [rx + 1, cx], [rx, cx - 1], [rx, cx + 1]].find(([p0, p1]) => (_.tarr[p0] || "")[p1] === 0); !bl || (bk || _.mtrk.push([bl[0], bl[1]])) && ([_.tarr[bl[0]][bl[1]], _.tarr[rx][cx]] = [_.tarr[rx][cx], 0]) && ( txtmvs.innerHTML = "" + _.tarr !== "" + _.unsh ? _.mtrk.length + " moves" : ("<:em>Puzzle solved in " + _.mtrk.length + " moves!<:/em>").replace(/(<):/g, "$1") ) && _.gbdGen(); }; ""
window.gmReset = () => { _.mtrk = []; txtmvs.innerHTML = 0; _.rval = +rows.value; _.cval = +cols.value; _.tnx = tnmrl.selectedIndex; _.unsh = Array.from(Array(_.rval * _.cval).keys()).slice(1).map(_.nAlt).concat(0); _.shuf = _.unsh.map(v => ({ v: v, o: Math.random() })).sort((a, b) => a.o - b.o).map(e => e.v); _.tarr = Array.from(Array(_.rval)).map(() => _.shuf.splice(0, _.cval)); _.shuf = _.tarr.flat(); _.isSolva() || (_.shuf[0] && _.shuf[1] ? _.posSwap(0, 0) : _.posSwap(_.rval - 1, _.cval - 2)); _.gbdGen(); }; ""
gmReset()

/*
… *more games … coming soon* …
*/
//`;

export {
  groupname, tutorial1, tutorial2
};
