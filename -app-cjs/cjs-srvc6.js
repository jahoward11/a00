/* JavaScript module */

const groupname = "JScode";

const tutorial1 = `/*
__JavaScript Coding Tutorials, Part One__

*Some (initial) __reasons__ to learn JS coding ...*
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
- Browser console
  + for generating direct, instant results to your coded instructions
  + available on almost any computer or device with a web browser
- Hyper-Text Markup Language (HTML) and Cascading Style Sheets (CSS)
  + for designing the screen layout of any computer or device output
  + rendered on (viewed with) a standard web browser
- Core JavaScript language (JS)
  + building blocks for composing your instructions
    (to manipulate/display data)
  + the set of keywords that a browser console understands
- Application Programming Interfaces --
  specifically the client-side web APIs
  + pre-built JS code patterns, useful for sending and receiving live,
    current feeds of data
  + ever evolving to accommodate changing internet uses and demands

*Where could someone go to more deeply __explore__ these JS coding tools?*
- developer.mozilla.org/en-US/docs/Web/HTML/Reference
- developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML
- developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
- developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps
- developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs

*__Tutorial One:__ Building a unit-convertor web app*
 Note: The following steps are meant to work only within the
JavaScript Calculator app.
 After these beginner skills have been mastered, code blocks from
the app source code could be deconstructed and repurposed as needed
to build a complete, new, standalone app.

 1. Describe your __end product__.
    + The end product is an app.
    + The app accepts any inputted number as a unit of measurement.
    + The app then returns the equivalent number in another unit of
      the same kind of measurement.

    E.G.: The app should function in a similar way unit conversions
    are made by Google.

    In the Google search bar, type | In the result list, expect
    "100 yards to meters"          | "91.44 meters"
    "101 mph to km/h"               | "162.544 kilometers per hour"
    "110 Fahrenheit to Celsius"    | "43.3333 Celsius"
    "1111 to Roman numeral"        | "MCXI"

 2. Write a __conversion function__.
    + A *function* is defined (written) by sequentially combining:
      an arbitrary function name, the assignment operator (\`=\`),
      input variable(s), the arrow notation (\`=>\`), and manipulations
      or calculations (formulas) to be done on the input.
    + A *function* is called (executed) by writing the *function* name
      followed by a set of parentheses. Input data (arguments) are
      written within the parentheses.
*/

ucLen = n => n * 0.9144  // converts a length in yards to meters

ucLen(100)  // calls function &amp; returns result of 100 * 0.9144

/*
 3. __Modify the function__ to handle bi-directional conversions.
    + Add an input variable that will indicate the initial unit,
      the unit being provided. Two or more variables are wrapped in
      parentheses (\`( … )\`) and separated by a comma (\`,\`).
    + Use a test with conditional operators
      (\`?\` = "if true"; \`:\` = "if false")
      to select the correct directional formula.
    + If including multiple arguments in a *function* call,
      they are separated with a comma (\`,\`).
    + If an argument is not a number, it is wrapped in quotes (\`"…"\`).
*/

ucLen = (n, u0) => /^y/i.test(u0) ? n * 0.9144 : n / 0.9144
  // converts either yards to meters or meters to yards
ucLen(100, "y")    // calls function &amp; returns result of 100 * 0.9144
ucLen(91.44, "m")  // calls function &amp; returns result of 91.44 / 0.9144

/*
 4. __Modify the function__ to return a specified unit.
    + Add another input variable that will indicate the final unit,
      the unit being requested.
    + Use successive tests with conditional operators to select the
      correct calculation formula.
*/

ucLen = (n, u0, u1) => /^f/i.test(u0) && /^y/i.test(u1) ? n / 3 : /^y/i.test(u0) && /^f/i.test(u1) ? n * 3 : /^f/i.test(u0) && /^m/i.test(u1) ? n * 0.3048 : /^m/i.test(u0) && /^f/i.test(u1) ? n / 0.3048 : /^y/i.test(u0) && /^m/i.test(u1) ? n * 0.9144 : /^m/i.test(u0) && /^y/i.test(u1) ? n / 0.9144 : u0 === u1 ? n : "error"
  // makes conversion between any lengths in
  // feet (f), yards (y) &amp; meters (m)
ucLen(100, "y", "m")  // converts 100 yards to meters
ucLen(92, "m", "y")   // converts 92 meters to yards
ucLen(600, "f", "m")  // converts 600 feet to meters
ucLen(183, "m", "f")  // converts 183 meters to feet

/*
 5. __Build a collection of functions__
    to handle many kinds of conversions.
    + For complex conversions that require multiple operations, the
      steps of a *function* definition are wrapped in curly brackets
      (\`{ … }\`) and separated by a semicolon (\`;\`). The final result
      is indicated with the keyword \`return\`.
    + Within a *function* block of multiple operations, include arrays,
      new variable declarations (\`let\`) and loop statements
      (\`forEach(…)\`, \`while { … }\`) as needed.
*/

ucSpe = (n, u0, u1) => /^m[p\/]s/i.test(u0) && /^km?[p\/]h/i.test(u1) ? n * 3.6 : /^km?[p\/]h/i.test(u0) && /^m[p\/]s/i.test(u1) ? n / 3.6 : /^m[p\/]s/i.test(u0) && /^mi?[p\/]h/i.test(u1) ? n * 2.23694 : /^mi?[p\/]h/i.test(u0) && /^m[p\/]s/i.test(u1) ? n / 2.23694 : /^km?[p\/]h/i.test(u0) && /^mi?[p\/]h/i.test(u1) ? n * 0.621371 : /^mi?[p\/]h/i.test(u0) && /^km?[p\/]h/i.test(u1) ? n / 0.621371 : u0 === u1 ? n : "error"; ""
  // makes conversion between any speeds in miles-per-hour (mph),
  // kilometers-per-hour (km/h) &amp; meters-per-second (m/s)
ucSpe(101, "mph", "km/h")

ucTem = (n, u0, u1) => /^C/i.test(u0) && /^K/i.test(u1) ? n + 273.15 : /^K/i.test(u0) && /^C/i.test(u1) ? n - 273.15 : /^C/i.test(u0) && /^F/i.test(u1) ? n * 9 / 5 + 32 : /^F/i.test(u0) && /^C/i.test(u1) ? (n - 32) * 5 / 9 : /^K/i.test(u0) && /^F/i.test(u1) ? (n - 273.15) * 9 / 5 + 32 : /^F/i.test(u0) && /^K/i.test(u1) ? (n - 32) * 5 / 9 + 273.15 : u0 === u1 ? n : "error"; ""
  // makes conversion between any temperatures in
  // Fahrenheit (F), Celsius (C) &amp; Kelvin (K)
ucTem(110, "Fahrenheit", "Celsius")

toRom = val => { let str = "", arb = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1], rom = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]; arb.forEach((ai, i) => { while (val % ai < val) { str += rom[i]; val -= ai; } }); return str; }; ""
  // converts Arabic integer into Roman numeral
toRom(1111, "Arabic", "Roman")

frRom = str => { let val = 0, arb = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1], rom = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]; str = str.toUpperCase(); arb.forEach((ai, i) => { while (str.indexOf(rom[i]) === 0) { val += ai; str = str.replace(rom[i], ""); } }); return val; }; ""
  // converts Roman numeral into Arabic integer
frRom("MCXI", "Roman", "Arabic")

/*
 6. Finally, consolidate the collection of functions to
    __maximize efficiency and user experience__.
*/

urexs = [/^f(?:oot|eet|)$/, /^y(?:ards?|)$/i, /^m(?:eters?|)$/i, /^m[p\/]s$/i, /^km?[p\/]h$/i, /^mi?[p\/]h$/i, /^C(?:elsius|)$/i, /^K(?:elvin|)$/i, /^F(?:ahrenheit|)$/]; ""
uConv = (n, u0, u1) => { let idx = _.urexs.findIndex(re => re.test(u0)); return typeof n !== 'number' && !/^[cdilmvx]+$/i.test(n) ? "error" : idx < 0 ? (/^[cdilmvx]+$/i.test(n) ? _.frRom(n) : _.toRom(n)) : idx < 3 ? _.ucLen(n, u0, u1) : idx < 6 ? _.ucSpe(n, u0, u1) : _.ucTem(n, u0, u1); }; ""

uConv(100, "y", "m")
uConv(101, "mph", "km/h")
uConv(110, "F", "C")
uConv(1111)
uConv("MCXI")
//`;

export {
  groupname, tutorial1
};
