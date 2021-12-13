/* JavaScript module */

const groupname = "JScode";

const tutorial1 = `/*
__JavaScript Coding Tutorials, Part One__

*Some (initial) __reasons to learn__ JS coding ...*
- Custom-tailor your routine accounting tasks.
- Build a web app for a personal, interactive reference.
- Progress more efficiently through your independent studies.
- Publish/archive proprietary records w/o inviting a security breech.
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
__*Tutorial One: Building a unit-convertor web app*__

 *Note:* The following steps are only an app's inner logic and could not
work outside an app framework such as the JavaScript Calculator app.
 *Optional:* After these beginner skills have been mastered, structural
blocks from the calculator app's source code could be deconstructed
and repurposed as needed to build an original, standalone app.

 1. Describe your __end product__.
    + The end product is a convertor app.
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

ucLen = (n, u0) => /^yd/i.test(u0) ? n * 0.9144 : n / 0.9144
 // converts either yards to meters, or meters to yards
ucLen(100, "yd")   // calls function &amp; returns result of 100 * 0.9144
ucLen(91.44, "m")  // calls function &amp; returns result of 91.44 / 0.9144

/*
 4. __Modify the function__ to return a specified unit.
    + Add another input variable that will indicate the final unit,
      the unit being requested.
    + Use successive tests with conditional operators to invoke the
      correct calculation formula.
*/

ucLen = (n, u0, u1) => /^ft/i.test(u0) && /^yd/i.test(u1) ? n / 3 : /^yd/i.test(u0) && /^ft/i.test(u1) ? n * 3 : /^ft/i.test(u0) && /^m/i.test(u1) ? n * 0.3048 : /^m/i.test(u0) && /^ft/i.test(u1) ? n / 0.3048 : /^yd/i.test(u0) && /^m/i.test(u1) ? n * 0.9144 : /^m/i.test(u0) && /^yd/i.test(u1) ? n / 0.9144 : u0 === u1 ? n : "error"; ""
 // makes conversion between any lengths as
 // feet (ft), yards (yd) or meters (m)
ucLen(100, "yd", "m")  // converts 100 yards to meters
ucLen(92, "m", "yd")   // converts 92 meters to yards
ucLen(600, "ft", "m")  // converts 600 feet to meters
ucLen(183, "m", "ft")  // converts 183 meters to feet

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

ucSpe = (n, u0, u1) => /^m[/p]s/i.test(u0) && /^km?[/p]h/i.test(u1) ? n * 3.6 : /^km?[/p]h/i.test(u0) && /^m[/p]s/i.test(u1) ? n / 3.6 : /^m[/p]s/i.test(u0) && /^mi?[/p]h/i.test(u1) ? n * 2.23694 : /^mi?[/p]h/i.test(u0) && /^m[/p]s/i.test(u1) ? n / 2.23694 : /^km?[/p]h/i.test(u0) && /^mi?[/p]h/i.test(u1) ? n * 0.621371 : /^mi?[/p]h/i.test(u0) && /^km?[/p]h/i.test(u1) ? n / 0.621371 : u0 === u1 ? n : "error"; ""
 // makes conversion between any speeds as miles-per-hour (mph),
 // kilometers-per-hour (km/h) or meters-per-second (m/s)
ucSpe(101, "mph", "km/h")

ucTem = (n, u0, u1) => /^C/i.test(u0) && /^K/i.test(u1) ? n + 273.15 : /^K/i.test(u0) && /^C/i.test(u1) ? n - 273.15 : /^C/i.test(u0) && /^F/i.test(u1) ? n * 9 / 5 + 32 : /^F/i.test(u0) && /^C/i.test(u1) ? (n - 32) * 5 / 9 : /^K/i.test(u0) && /^F/i.test(u1) ? (n - 273.15) * 9 / 5 + 32 : /^F/i.test(u0) && /^K/i.test(u1) ? (n - 32) * 5 / 9 + 273.15 : u0 === u1 ? n : "error"; ""
 // makes conversion between any temperatures as
 // Fahrenheit (F), Celsius (C) or Kelvin (K)
ucTem(110, "Fahrenheit", "Celsius")

ara = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]; ""
rom = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]; ""

toRom = val => { let str = ""; _.ara.forEach((ai, i) => { while (val % ai < val) { str += _.rom[i]; val -= ai; } }); return str; }; ""
 // converts Arabic integer into Roman numeral
toRom(1111, "Arabic", "Roman")

frRom = str => { let val = 0; str = str.toUpperCase(); _.ara.forEach((ai, i) => { while (str.indexOf(_.rom[i]) === 0) { val += ai; str = str.replace(_.rom[i], ""); } }); return val; }; ""
 // converts Roman numeral into Arabic integer
frRom("MCXI", "Roman", "Arabic")

/*
 6. Finally, consolidate the collection of functions to
    __maximize efficiency__, which improves user experience.
    + Use \`.push( … )\` to combine sets of regular-expression tests
      into a single, lookup array.
    + Use \`Object.assign( … , … )\` to combine corresponding sets of
      conversion formulas into a single, lookup object.
*/

uxs = [/^f(?:oo|ee|)t$/i, /^y(?:a?r?ds?|)$/i, /^m(?:eters?|)$/i]; ""
uxs.push(/^m[/p]s$/i, /^km?[/p]h$/i, /^mi?[/p]h$/i)
uxs.push(/^C(?:elsius|)$/i, /^K(?:elvin|)$/i, /^F(?:ahrenheit|)$/i)

ucs = { f01: n => n / 3, f10: n => n * 3, f02: n => n * 0.3048, f20: n => n / 0.3048, f12: n => n * 0.9144, f21: n => n / 0.9144 }
Object.assign(ucs, { f34: n => n * 3.6, f43: n => n / 3.6, f35: n => n * 2.23694, f53: n => n / 2.23694, f45: n => n * 0.621371, f54: n => n / 0.621371 })
Object.assign(ucs, { f67: n => n + 273.15, f76: n => n - 273.15, f68: n => n * 9 / 5 + 32, f86: n => (n - 32) * 5 / 9, f78: n => (n - 273.15) * 9 / 5 + 32, f87: n => (n - 32) * 5 / 9 + 273.15 })

uConv = (n, u0, u1) => { let [x0, x1] = [_.uxs.findIndex(r => r.test(u0)), _.uxs.findIndex(r => r.test(u1))]; return /^[cdilmvx]+$/i.test(n || "") ? _.frRom(n) : typeof n !== 'number' ? "error" : x0 < 0 ? _.toRom(n) : x1 < 0 ? "error" : x0 === x1 ? n : (_.ucs["f" + x0 + x1] || (() => "error"))(n); }; ""

uConv(100, "yd", "m")
uConv(101, "mph", "km/h")
uConv(110, "F", "C")
uConv(1111)
uConv("MCXI")
//`;

export {
  groupname, tutorial1
};
