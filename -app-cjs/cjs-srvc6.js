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
    + The app accepts any inputted number as a unit of measurement.
    + The app then returns the equivalent number in another unit of
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

ucLen = n => n * 0.9144  // converts a length in yards to meters

ucLen(100)  // calls function &amp; returns result of 100 * 0.9144

/*
 3. __Modify the function__ to handle bi-directional conversions.
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
 4. __Modify the function__ to return a specified unit.
    + Add another input variable that will indicate the final unit,
      the unit being requested.
    + Use successive tests with conditional operators to invoke the
      correct calculation formula.
*/

ucLen = (n, u0, u1) => /^in/i.test(u0) && /^ft/i.test(u1) ? n => n / 12 : /^in/i.test(u0) && /^yd/i.test(u1) n => n / 36 : /^ft/i.test(u0) && /^in/i.test(u1) ? n => n * 12 : /^ft/i.test(u0) && /^yd/i.test(u1) ? n => n / 3 : /^yd/i.test(u0) && /^in/i.test(u1) ? n => n * 36 : /^yd/i.test(u0) && /^ft/i.test(u1) ? n => n * 3 : u0 === u1 ? n : "error"; ""
 // makes conversion between any lengths as
 // inches (in), feet (ft) or yards (yd)
ucLen(72, "in", "yd")   // converts 72 inches to yards
ucLen(2, "yd", "in")    // converts 2 yards to inches
ucLen(4.5, "ft", "yd")  // converts 4.5 feet to yards
ucLen(1.5, "yd", "ft")  // converts 1.5 yards to feet

/*
 5. Build a __collection of functions__
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
 // makes conversion between any temperatures as
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
 6. Finally, consolidate the collection of functions to
    __maximize efficiency__, which improves user experience.
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
ucui = "\\n<:hr>\\n<:h3 class:=cfield>Unit Converter<:/h3>"; ""
ucui += "\\n<:div class:=cfield><:span class:=ccntr><:input type:=text id:=ucinp placeholder:=\\"Enter measurement&hellip;\\" /><:/span><:span class:=ccntr><:select id:=ulist0 class:=aauto>\\n"; ""
ucui += opts + "\\n<:/select><:/span><:/div>\\n<:div class:=cfield><:span class:=ccntr><:input type:=text id:=ucout disabled /><:/span><:span class:=ccntr><:select id:=ulist1 class:=aauto>\\n"; ""
ucui += opts + "\\n<:/select><:/span><:/div>"; ""
// ndiv = document.createElement('div'); ndiv.innerHTML = ucui.replace(/(<):|:(=)/g, "$1$2"); cmain.appendChild(ndiv)
// [ucinp, ulist0, ulist1].forEach((e, i) => e.addEventListener(!i ? 'blur' : 'change', _.ucShow))
//`;

const tutorial2 = `/*
__JavaScript Coding Tutorials, Part 2__

&hellip;*comming soon*&hellip;
*/
//`;

export {
  groupname, tutorial1, tutorial2
};
