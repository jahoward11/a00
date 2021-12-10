/* JavaScript module */

const groupname = "JScode";

const tutorial1 = `/*
__JavaScript Coding Tutorials__

*Some (initial) __reasons__ to learn JS coding ...*
- Custom-tailor your routine accounting task.
- Build a web app for an interactive, personal reference.
- Progress more efficiently through your independent studies.
- Publish/archive proprietary records w/o inviting a security breech.
- Confirm a questionable computational result or statistical summary.
- Increase your skill at diagnosing a technical problem.
- Design a new game for fun.
- Become a web developer.
- ...

*What are the __fundamental tools__ of JS coding?*
- Command Line Interface (CLI)
  + for generating direct, instant results to your coded instructions
  + available on almost any computer or device
- Hyper-Text Markup Language (HTML) and Cascading Style Sheets (CSS)
  + for designing the screen layout of any computer or device output
  + rendered on (viewed with) a standard web browser
- Core JavaScript language (JS)
  + building blocks for composing your instructions
    (to manipulate/display data)
  + the set of keywords that the CLI understands
- Application Programming Interfaces --
  specifically the client-side web APIs
  + pre-built JS code patterns, useful for sending and receiving live,
    current feeds of data
  + ever evolving to accommodate changing internet uses and demands

*Where could someone go to more fully __explore__ these JS coding tools?*
- developer.mozilla.org/en-US/docs/Web/HTML/Reference
- developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML
- developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
- developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps
- developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs

*__Tutorial One:__ Building a unit-convertor web app*
 Note: The following steps are meant to work only within
the JavaScript Calculator app.
 After these beginner skills have been mastered, code blocks
from the CalcJS-app source code could be deconstructed and
recycled as needed to build a complete, new, standalone app.

 1. Describe your __end product__.
    + The end product should be an app.
    + The app takes any given number in one unit of measurement.
    + The app then returns the equivalent number in another unit
      of the same kind of measurement.

    E.G.: The app should function in a similar way unit conversions
    are made by Google.

    In the Google search bar, type | In the result list, expect
    "100 yards to meters"          | "91.44 meters"
    "101 mph to kph"               | "162.544 kilometers per hour"
    "110 Fahrenheit to Celsius"    | "43.3333 Celsius"
    "1111 to Roman numeral"        | "MCXI"

 2. Write a length conversion __function__.
    + A *function* is defined (written) by sequentially combining:
      an arbitrary function name, the assignment operator (=),
      input variable(s), the arrow notation (=>), and manipulations
      or calculations (formulas) to be done on the input.
    + A *function* is called (executed) by writing the *function* name
      followed by a set of parentheses. Input data (arguments) are
      written within the parentheses.
*/

convlen = n => n * 0.9144  // converts yards to meters

convlen(100)  // calls function &amp; returns result of 100 * 0.9144

/*
 3. Modify the __function__ to handle bi-directional conversions.
    + Add an input variable that will indicate the initial unit,
      the unit being provided. Two or more variables are wrapped in
      parentheses, and variables are separated by a comma (,).
    + Use a test and conditional operators
      ("?" = "if true"; ":" = "if false")
      to select the correct directional calculation.
    + If including multiple arguments in a *function* call,
      they are separated with a comma (,).
    + If an argument is not a number, it is wrapped in quotes (").
*/

convlen = (n, u0) => /^y/i.test(u0) ? n * 0.9144 : n / 0.9144

convlen(100, "y")  // calls function &amp; returns result of 100 * 0.9144
convlen(91.44, "m")  // calls function &amp; returns result of 91.44 / 0.9144

/*
 4. Modify the __function__ to return a specified unit.
    + Add another input variable that will indicate the final unit,
      the unit being requested.
    + Use more tests and successive conditional operators to select
      the correct calculation formula.
*/

convlen = (n, u0, u1) => /^y/i.test(u0) && /^m/i.test(u1) ? n * 0.9144 : /^f/i.test(u0) && /^m/i.test(u1) ? n * 0.3048 : /^m/i.test(u0) && /^y/i.test(u1) ? n / 0.9144 : /^m/i.test(u0) && /^f/i.test(u1) ? n / 0.3048 : u0 === u1 ? n : "error"

convlen(100, "y", "m")  // converts 100 yards to meters
convlen(600, "f", "m")  // converts 600 feet to meters
convlen(183, "m", "f")  // converts 183 meters to feet

//`;

export {
  groupname, tutorial1
};
