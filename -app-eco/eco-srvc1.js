window.EC0 = window.EC0 || {};

EC0.SDOCS = [
// * * * * * 0: calcjs * * * * *
[ `<style type="text/css">
*, *::before, *::after { box-sizing: inherit; }
html {
  min-width: 375px;
  box-sizing: border-box;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  text-size-adjust: 100%;
}
strong, mark, table th { color: inherit; }
body {
  font: normal medium Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 64px 8px;
  overflow-wrap: break-word;
}
.is-hidden { display: none; }
#scrnmask {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 100vh;
}
#cmain {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: normal;
  max-width: 720px;
  margin: 0 auto;
}
#cmain a:active, #cmain button:active { box-shadow: 0 0 0 0.125em rgb(50 152 220 / 25%); }
#cmain a:hover { color: CornFlowerBlue; }
#cmain sub, #cmain sup {
  position: relative;
  font-size: 0.75em;
  line-height: 0;
  vertical-align: baseline;
}
#cmain sub { bottom: -0.25em; }
#cmain sup { top: -0.5em; }
#cmain button, #cmain .btn1,
#cmain input:not([type=checkbox]):not([type=radio]), #cmain select {
  background: #f8f8f8;
  color: Grey;
  font-size: calc(80px / 6); /* 5rem */
  line-height: 24px; /* 1.5rem */
  height: 24px; /* 1.5rem */
  padding: 0 8px; /* 0.5rem */
  border: 0;
  border-radius: 0;
}
#cmain button, #cmain input[type=button], #cmain select { cursor: pointer; }
#cmain input::placeholder { opacity: 0.5; }
#cmain select.anone {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
#cmain select.anone::-ms-expand { display: none; }
#cgrid pre, #cmain>#recon {
  background-color: unset;
  color: unset;
  font: normal medium/1.25 monospace;
  margin: 0;
  padding: 2px;
  word-wrap: normal;
  overflow-wrap: normal;
  overflow-x: hidden;
  white-space: pre;
}
#cgrid .pagebb { line-height: 0; }
#cgrid .dnote { color: LightSteelBlue; }
#cgrid .codin {
  background: White;
  color: Silver;
}
#cgrid .vert { position: absolute; }
#cgrid .dvnd {
  position: absolute;
  margin: -8px 0 0 0;
}
#cgrid .dvsr {
  position: absolute;
  margin: 8px 0 0 0;
  border-top: 1px solid;
}
#cgrid .dvar {
  font-style: italic;
  font-weight: bold;
}
#cgrid .frasl { margin: 0 -5px; }
#cgrid .fbig {
  position: absolute;
  transform: scaleY(2.5);
}
#cgrid :not(sub):not(sup)>:not(sub):not(sup)>.fsan1,
#cgrid :not(sub):not(sup)>:not(sub):not(sup)>.fsan2 {
  display: inline-block;
  width: 7.8px;
  text-align: center;
}
#cgrid .fsan1 {
  font-family: Arial, system-ui, sans-serif;
  font-size: 81.25%; /* 13px */
  line-height: 1.154;
}
#cgrid .fsan2 {
  font-family: Arial, system-ui, sans-serif;
  font-size: 93.75%; /* 15px */
  line-height: 1;
  vertical-align: bottom;
}
#cmain>#recon {
  color: Orange;
  padding: 0;
}
#cmain>#cheadg {
  color: Grey;
  margin: 0 0 4px;
}
#cmain>#mlctnr {
  float: right;
  position: relative;
  margin: -24px 0 0 0;
}
#cmain>#mlctnr::after {
  position: absolute;
  top: -2px;
  right: 5px;
  color: LightSteelBlue;
  content: "\\2630"; /* ☰ &#x2630; */
  pointer-events: none;
}
#cmain>#mlctnr>#menulist {
  color: transparent;
  width: 24px;
  height: 20px;
}
#cmain>#cgrid:not(.is-hidden) {
  position: relative;
  display: grid;
  grid-template-columns: 168px 1fr;
  grid-template-areas:
    "quad1A quad1B"
    "quad2A quad2B";
  width: 100%;
}
#cmain>#cgrid.xpndq2B {
  grid-template-areas:
    "quad1A quad1B"
    "quad2B quad2B";
}
#cgrid>#quad1A, #cgrid>#quad1B { min-height: 56px; }
#cgrid>#quad2A, #cgrid>#quad2B {
  min-height: 472px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}
#cgrid>#quad1A, #cgrid>#quad2A {
//float: left;
  position: relative;
//width: 168px;
  text-align: right;
}
#cgrid>#quad1B, #cgrid>#quad2B { //max-width: 552px; }
#cgrid>#quad1A {
  grid-area: quad1A;
  background: LightGrey;
  color: Grey;
}
#cgrid>#quad1B {
  grid-area: quad1B;
  background: LightSteelBlue;
  color: LightSlateGrey;
  font-style: italic;
  font-weight: bold;
}
#cgrid>#quad2A {
  grid-area: quad2A;
  background: DarkGrey;
  color: WhiteSmoke;
}
#cgrid>#quad2B {
  position: relative;
  grid-area: quad2B;
  background: #f8f8f8;
  color: Grey;
}
#cgrid #dfinal, #cgrid #dinitl {
  position: absolute;
  left: 2px;
  font: bold x-small Helvetica, Arial, sans-serif;
  opacity: 0.5;
  text-align: left;
  user-select: none;
}
#cgrid #dfinal {
  bottom: 0;
  color: DarkGrey;
}
#cgrid #dinitl {
  top: 0;
  color: Grey;
}
#cgrid>#symlist {
  position: absolute;
  top: 0;
  background: Black;
  color: White;
  font-size: small;
  width: 168px;
  height: 100%;
  margin: 0;
  padding: 0.5em 0 0.5em 0.5em;
  list-style-type: none;
  opacity: 0.5;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  white-space: nowrap;
}
#cgrid.xpndq2B>#symlist { display: none; }
#cmain .iwarn { color: Orange; }
#cmain .isucc { color: CornFlowerBlue; }
#cmain .slist { position: relative; }
#cmain .slist::after {
  position: absolute;
  top: 7px;
  right: 8px;
  color: Grey;
  content: " ";
  border-top: 8px solid Grey;
  border-right: 4px solid transparent;
  border-left: 4px solid transparent;
  opacity: 0.5;
  pointer-events: none;
}
#cmain .cfield:not(:last-child) { margin-bottom: 8px; } /* 0.5rem */
#cmain .ccntr:not(:last-of-type) { margin-right: 8px; } /* 0.5rem */
#cmain :not(.cfield)>:not(.cfield)>.ccntr {
  display: inline-block;
  height: 24px; /* 1.5rem */
  margin-bottom: 8px; /* 0.5rem */
}
#cmain .addns>.ccntr { margin-right: 0; }
#cmain .chelp {
  font-size: 12px; /* 0.75rem */
  margin-top: 4px; /* 0.25rem */
}
#xctrls #xsetinp { width: 168px; }
#xctrls #xsetlist {
  color: transparent;
  width: 24px;
}
@media print {
  body { padding: 0; }
  #cgrid>#quad1A { box-shadow: inset 0 -1px LightGrey; }
  #cgrid>#quad1B { box-shadow: inset 0 -1px LightSteelBlue; }
  #cmain>#mlctnr, #cgrid #dfinal, #cgrid #dinitl,
  #cmain>#xctrls { display: none; }
}
@media print and (resolution: 300dpi) and (width: 2572px), /* Pixel2, mode:desktop */
print and (resolution: 300dpi) and (width: 555px), /* Pixel2, mode:mobile */
print and (resolution: 300dpi) and (width: 557px) { /* iMac-Chrome, page:portrait */
  #cgrid .pagebb { page-break-before: always; break-before: page; }
  #cgrid:not(.clpsrow1) .pagebb { margin-top: var(--row1ht, -56px); }
}
@media print and (min-width: 365px) and (max-width: 554px),
print and (min-width: 558px) and (max-width: 734px),
print and (min-width: 738px) and (max-width: 785px),
print and (min-width: 787px) and (max-width: 952px),
print and (min-width: 954px) and (max-width: 1134px) { /* iPhone/iPad/iMac-Safari */
  html { width: 768px; }
}
</style>
<div id="scrnmask" class="is-hidden"></div>
<main id="cmain">
<xmp id="datxmp" class="is-hidden">
`,
` p = 5
 q = 32
 r = Math.random()

 x = x0 = 0.5
 y = y0 = 3
 z = z0 = -250

// __Demo and Use Description__

 // Use this calculator to develop instructional algorithms
// (like, a mathematical solution to a real-world problem) --
// and to display/share such in a portable, HTML file (web doc).

// *Why?*
// - Interactive: rerun a trial -- giving new initial values
// - Reusable: copy and paste a custom expression or whole block
// - Printable: make clean print-outs on standard, letter-size paper
// - Lightweight: minimally leverage shared code across major browsers
// - Conventional: reinforce standards in notation/methods of science

// *How?*
// - Enter data (like, mathematical expressions) into the large,
  // light-colored quadrant only -- the *ENTRY* field.
// - Alternatively, if the calculator is generated within _E_*collabs*,
  // manipulate data within the *SOURCE2* field of the __*File Edit*__
  // screen. Note that when saving any changes made to calc data,
  // using (or, just focusing) the *SOURCE2* field is necessary.
// - When the *ENTRY* field is de-focused, line-item results appear
  // automatically in the *RESULTS* column -- to the left of each
  // line that contains a valid expression.
// - When the *ENTRY* field is focused, a list of JavaScript math
  // functions/symbols appears in the left column -- for conveniently
  // copy-pasting into the *ENTRY* field. (See use descriptions below.)
// - After composing a complete expression set, generate a standalone
  // copy using the *MENU* button at the top right corner.
// - Create a comment, like this one, by prepending the text
  // with a double slash (e.g., //comment).
&Tab;// Indent, like this, with *&amp;Tab;* (HTML name code).
// - Make commented text __bold__ by wrapping it
  // in double underscores (e.g., &lowbar;&lowbar;bolded text&lowbar;&lowbar;).
// - Make commented text *italicized* by wrapping it
  // in single asterisks (e.g., &ast;italicized text&ast;).
// - Make a commented word _pop_ by wrapping it alone
  // in single underscores (e.g., &lowbar;pop&lowbar;).
// - Create a ^super^script or ~sub~script by wrapping commented text
  // in single hatcheks or tildes, respectively (e.g., &Hat;super&Hat;, &sim;sub&sim;).
  // Note: Digits at the end of a variable will also become a subscript.

 $RndmExpn = Math.ceil(r * 10)

// - Create a __*$-variable*__ by prepending an ordinary *variable*
  // with a dollar symbol (e.g., $&#x78;1, $&#x79;1, $&#x7a;1, &dollar;RndmExpn).
  // Use: Every __*$-variable*__ will automatically _pop_ --
  // and will also appear in the *FINAL VALUES* row, at the top.

 $x1 = Math.pow(x0, $RndmExpn)
 $y1 = Math.pow(y0, $RndmExpn)
 $z1 = Math.pow(z0, $RndmExpn)


// __JavaScript Math Object__

// __Property	Description__
 Math.E		// Returns Euler's number (approx. 2.718)
 Math.LN2	// Returns the natural logarithm of 2 (approx. 0.693)
 Math.LN10	// Returns the natural logarithm of 10 (approx. 2.302)
 Math.LOG2E	// Returns the base-2 logarithm of E (approx. 1.442)
 Math.LOG10E	// Returns the base-10 logarithm of E (approx. 0.434)
 Math.PI	// Returns PI (approx. 3.14)
 Math.SQRT1_2	// Returns the square root of 1/2 (approx. 0.707)
 Math.SQRT2	// Returns the square root of 2 (approx. 1.414)

// __Method  	Description__
 Math.sin(x)	// Returns the sine of _x_ (_x_ is in radians)
 Math.cos(x)	// Returns the cosine of _x_ (_x_ is in radians)
 Math.tan(x)	// Returns the tangent of an angle

 Math.asin(x)	// Returns the arc-sine of _x_, in radians
 Math.acos(x)	// Returns the arc-cosine of _x_, in radians
 Math.atan(x)	// Returns the arc-tangent of _x_ as a numeric value between -PI/2 and PI/2 radians
 Math.atan2(y,x)// Returns the arc-tangent of the quotient of its arguments

 Math.acosh(3)	// Returns the hyperbolic arc-cosine of a number
 Math.hypot(3,4)// Returns the square root of the sum of squares of its arguments
 Math.imul(Math.pow(2,32) - 1, Math.pow(2,32) - 2)
		// Returns the result of the C-like 32-bit multiplication of the two arguments

 Math.abs(z)	// Returns the absolute value of _z_
 Math.sqrt(x)	// Returns the square root of _x_
 Math.pow(x,y)	// Returns the value of _x_ to the power of _y_
 Math.exp(1)	// Returns the value of E to the power of _arg_
 Math.log(2)	// Returns the natural logarithm (base E) of _arg_

 Math.round(x)	// Rounds _x_ to the nearest integer
 Math.ceil(x)	// Returns _x_, rounded upwards to the nearest integer
 Math.floor(x)	// Returns _x_, rounded downwards to the nearest integer

 Math.min(x,y,z)// Returns the number with the lowest value *(x, y, z, ... n)*
 Math.max(x,y,z)// Returns the number with the highest value *(x, y, z, ... n)*

 Math.random()	// Returns a random number between 0 and 1


// __JavaScript Number Object__\\f

// __Property	Description__
 z.constructor	// Returns the function that created JavaScript's Number prototype

 Number.EPSILON
 Number.MAX_VALUE
		// Returns the largest number possible in JavaScript
 Number.MIN_VALUE
		// Returns the smallest number possible in JavaScript
 Number.NEGATIVE_INFINITY
		// Represents negative infinity (returned on overflow)
 Number.NaN	// Represents a "Not-a-Number" value
 Number.POSITIVE_INFINITY
		// Represents infinity (returned on overflow)
 Number.prototype
		// Allows you to add properties and methods to an object

// __Method  	Description__
 Number.isFinite(q)
		// Checks whether a value is a finite number
 Number.isInteger(q)
		// Checks whether a value is an integer
 Number.isInteger(Infinity)
		// false
 Number.isNaN(q)// Checks whether a value is Number.NaN
 Number.isNaN("NaN")
		// false
 Number.isSafeInteger(q)
		// Checks whether a value is a safe integer

 z.toExponential(p)
		// Converts a number into an exponential notation
 z.toFixed(p)	// Formats a number with _p_ numbers of digits after the decimal point
 z.toPrecision(p)
		// Formats a number to _p_ length
 z.toString(2)	// Converts a number to a string; _z_.toString(radix), radix: 2, 8, 16
 z.valueOf()	// Returns the primitive value of a number


// __Online JS Reference__

// *Visit these webpages for more on JavaScript expressions and syntax:*
// - developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
// - developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
// - developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates
//
`,
`</xmp>
<h4 id="cheadg">JavaScript Calculator</h4>
<pre id="recon"></pre>
<span id="mlctnr"><select id="menulist" class="anone" title="CalcJS View Options">
  <option></option>
  <option>&nbsp;&pm; Lock/unlock screen zoom</option>
  <option>&thinsp;&rsaquo;&#x2cd; Rename doc TITLE</option>
  <option>&odash; Show/hide calculator&nbsp;UI</option>
  <option>&nbsp;&vArr; Expand/collapse FINAL VALUES row</option>
  <option>&hArr; Expand/collapse RESULTS column</option>
  <option>&thinsp;&Delta; Keep view settings (for re-use &amp; for&nbsp;sharing)</option>
  <option>&nbsp;&dtrif;&#x332; Generate standalone copy of displayed&nbsp;data</option>
  <option>&orarr; Reset CalcJS App (reload&nbsp;homepage)</option>
</select></span>
<div id="cgrid" class="cfield">
  <pre id="quad1A"></pre><pre id="quad1B"></pre>
  <pre id="quad2A"></pre><pre id="quad2B" contenteditable=true></pre>
  <ul id="symlist" class="is-hidden"></ul>
</div>
<div id="xctrls" class="cfield">
  <span class="addns ccntr"><span class="ccntr">
    <input type="text" id="xsetinp" placeholder="Load expression set&hellip;" /></span><span class="ccntr slist"><select id="xsetlist" class="anone" title="CalcJS Data Storage">
    </select></span></span>
  <div id="xcshelp" class="chelp"></div>
</div>
</main>
<style type="text/css">
:root {
  min-width: 375px;
  box-sizing: border-box;
}
body {
  width: unset;
  max-width: unset;
  min-width: unset;
  margin: 0;
  padding: 64px 8px;
  overflow-wrap: break-word;
}
@media print {
  body { width: unset; margin: 0; padding: 0; }
}
</style>
<script type="text/javascript">
(function () {
'use strict';
let q2Bcopy, q2Bhtml,
  cmods = [], dload = "", jsrcs = [], v0set = 0, val0s = [],
  cinit = window.cinit || window.localStorage._cinit || "",
  metavp = document.querySelector('body>#ecorender meta[name=viewport]')
    || document.querySelector('head>meta[name=viewport]'),
  ecoscrs = window.EC0 && document.querySelector('body>#ecoscripts'),
  datxmp = document.querySelector('#cmain>#datxmp'),
  cheadg = document.querySelector('#cmain>#cheadg'),
  recon = document.querySelector('#cmain>#recon'),
  menulist = document.querySelector('#cmain>#mlctnr>#menulist'),
  cgrid = document.querySelector('#cmain>#cgrid'),
  quad1A = document.querySelector('#cgrid>#quad1A'),
  quad1B = document.querySelector('#cgrid>#quad1B'),
  quad2A = document.querySelector('#cgrid>#quad2A'),
  quad2B = document.querySelector('#cgrid>#quad2B'),
  symlist = document.querySelector('#cgrid>#symlist'),
  xctrls = document.querySelector('#cmain>#xctrls'),
  xsetinp = document.querySelector('#xctrls #xsetinp'),
  xsetlist = document.querySelector('#xctrls #xsetlist'),
  xbtnsav = document.querySelector('#xctrls #xbtnsav'),
  xbtndel = document.querySelector('#xctrls #xbtndel'),
  xcshelp = document.querySelector('#xctrls #xcshelp'),
  helpClr = () => !xcshelp || (xcshelp.innerHTML = "") || xcshelp.classList.remove("iwarn", "isucc"),
  reShow = re => { recon.textContent
    += ( !re || typeof re !== 'object' || re instanceof Error && re.constructor && !re.reason
      ? re : JSON.stringify(re, 0, 2) ) + "\\n\\n" },
  scrInj = (url, typ, cnt) => new Promise((rslv, rjct) => {
    url || cnt || rjct("**Alert: Script content or URL was not provided.");
    let nscr = document.createElement('script');
    !url || (nscr.src = url);
    nscr.type = typeof typ === 'string' && typ || (/\\.mjs$/.test(url) ? 'module' : 'text/javascript');
    !url || !/^https:\\/\\/[^ \\/]+cloud/.test(url) || !/^http/.test(window.location.protocol)
    || !window.navigator.onLine || nscr.setAttribute('crossorigin', 'use-credentials');
    nscr.innerHTML = !url && cnt ? cnt : "";
    nscr.onerror = err => rjct("**Alert: Script resource GET/load error occured.");
    nscr.onload = rslv;
    !(url || cnt) || (ecoscrs || document.body).appendChild(nscr);
  }),
  zoomTog = zoff => metavp.setAttribute( 'content', "width=device-width, "
    + (zoff || /maximum-/.test(metavp.content) ? "initial-scale=1" : "maximum-scale=1") ),
  titSave = (evt, tnew) => {
    cheadg.setAttribute('contenteditable', false);
    (document.querySelector('body>#ecorender title') || document.querySelector('head>title')).innerHTML
    = cheadg.innerHTML = (tnew || cheadg.textContent.trim().substring(0, 32));
  },
  gridAdj = idx => {
    if (idx === 4) {
      [quad1A, quad1B].forEach(e => e.classList.toggle("is-hidden"));
      cgrid.classList.toggle("clpsrow1");
    } else if (idx === 5) {
      quad2A.classList.toggle("is-hidden");
      cgrid.classList.toggle("xpndq2B");
    }
  },
  viewSet = () => {
    let qrys = [];
    /maximum-/.test(metavp.content) || qrys.push("!zlock");
    !cgrid.classList.contains("is-hidden") || qrys.push("!displ");
    !cgrid.classList.contains("clpsrow1") || qrys.push("!row1");
    !cgrid.classList.contains("xpndq2B") || qrys.push("!col1");
    cheadg.textContent === "JavaScript Calculator"
    || qrys.push("title=" + window.encodeURIComponent(cheadg.textContent));
    !(xsetlist || "").value || qrys.push("dload=" + window.encodeURIComponent(xsetlist.value));
    quad2B.click();
    (xsetinp || {}).value = quad2A.innerHTML = quad1B.innerHTML = quad1A.innerHTML = "";
    quad2B.innerHTML = "// __To preserve view settings to URL:__"
    + "\\n// 1. Edit &amp; un-comment settings below --"
    + "\\n   // combining desired parts into a one-line expression."
    + "\\n// 2. De-focus *ENTRY* field."
    + "\\n   // (*Alert:* This action writes current/edited settings"
    + "\\n   // into URL string &amp; reloads page.)"
    + "\\n// 3. Bookmark reloaded page (or, add to home screen)."
    + "\\n// 4. Optionally, copy new link and paste in text message to share."
    + "\\n\\n  // !zlock | unlock screen zoom"
    + "\\n  // !displ | hide calculator UI display"
    + "\\n  // !row1  | collapse *FINAL VALUES* row"
    + "\\n  // !col1  | collapse *RESULTS* column"
    + "\\n  // title= | rename doc *TITLE*"
    + "\\n  // cmods= | download certain/additional, pre-made data modules"
    + "\\n  // dload= | load specified data set into *ENTRY* field"
    + "\\n  // val0s= | re-assign initial values of pre-loaded data set"
    + "\\n  // jsrcs= | inject supplemental JavaScript resources\\n\\n// "
    + (!ecoscrs ? "window.location.search" : "window.localStorage._cinit =\\n// window.cinit")
    + " = \\"" + qrys.join("&") + "\\"\\n // + \\""
    + (!qrys.length ? "" : "&") + "cmods=\\" + encodeURIComponent(\\"3,5,prj42.mjs\\")"
    + ( (xsetlist || "").value
      ? "" : "\\n // + \\"&dload=\\" + encodeURIComponent(\\"https://host/pathname\\")" )
    + "\\n // + \\"&val0s=\\" + encodeURIComponent(\\"a:10,b:20,c:30\\")"
    + "\\n // + \\"&jsrcs=\\" + encodeURIComponent(\\"../-res-js/jstat.js\\")\\n<br>";
    window.getSelection().setPosition(quad2B.firstChild, quad2B.textContent.length);
  },
  calcCopy = () => {
    let nanc = document.createElement('a'),
      chtml = '<!DOCTYPE html>\\n<html lang="en">\\n<head>\\n'
      + (document.querySelector('body>#ecorender') || document.documentElement).innerHTML
        .replace(/\\n+$|^\\n+|^<head>\\n?|\\n *<option><\\/option>\\s*<optgroup[^]*?(?=\\n *<\\/select>)|<span class="ccntr"><button id="xbtnsav">[^]+?(?=\\n *<div id="xcshelp")|,\\n *xsetSave = [^]+?(?=;\\nwindow\\.xstor =)|\\n*<script\\b.*><\\/script>(?=$|<\\/body>)|\\n?<\\/body>$/gim, "")
        .replace(/^(<\\/style>)[^]*?(?=<div .+><\\/div>$)/im, "$1\\n</head>\\n<body>\\n")
        .replace(/^(<xmp id="datxmp".*?>)[^]*?(?=<\\/xmp>)/im, (m, c1) => c1 + "\\n" + dentr.value + "\\n")
        .replace(/^(<pre id="recon">)[^]*?(?=<\\/pre>)/im, "$1")
        .replace( /^(<div id="cgrid".*?>\\n *<pre id="quad1A".*?>)[^]*?(<\\/pre><pre id="quad1B".*?>)[^]*?(<\\/pre>\\n *<pre id="quad2A".*?>)[^]+?(?=\\n<\\/div>)/im,
          '$1$2$3</pre><pre id="quad2B" contenteditable=true></pre>\\n  <ul id="symlist" class="is-hidden"></ul>' )
        .replace(/^(<\\/style>\\n)<script.*?>[^]*?(?=\\nlet q2Bcopy,)/im, "$1<script type=\\"text/javascript\\">\\n(function () {\\n'use strict';")
        .replace(/^( *cheadg\\.textContent === ").+/m, "$1" + cheadg.textContent + "\\"")
        .replace(/^xbtnsav\\.onclick[^]+?(?=\\n<\\/script>)/im, "})();")
      + "\\n</" + "body>\\n</" + "html>\\n";
    nanc.setAttribute('download', "calcjs-draft02.html");
    nanc.setAttribute('href', "data:text/html;charset=utf-8," + window.encodeURIComponent(chtml));
    nanc.click();
  },
  menuSel = evt => {
    let idx = evt.target.selectedIndex;
    window.setTimeout(() => {
      menulist.blur();
      menulist.selectedIndex = 0;
    }, 1);
    evt.preventDefault();
    if (idx === 1) {
      zoomTog();
    } else if (idx === 2) {
      cheadg.setAttribute('contenteditable', true);
      cheadg.focus();
    } else if (idx === 3) {
      [cgrid, xctrls].forEach(e => e && e.classList.toggle("is-hidden"));
    } else if (/[45]/.test(idx)) {
      gridAdj(idx);
    } else if (idx === 6 && ((xsetlist || "").value || !dentr.value)) {
      viewSet();
    } else if (idx === 7) {
      calcCopy();
    } else if (idx === 8 && !ecoscrs) {
      window.location.href = "https://jahoward11.github.io/a00/-app-cjs/calcjs0.html";
    }
  },
  txtPste = evt => {
    let pste = (evt.clipboardData || window.clipboardData).getData('text'),
      seln = window.getSelection();
    if (!seln.rangeCount) return false;
    seln.deleteFromDocument();
    seln.getRangeAt(0).insertNode(document.createTextNode(pste));
    evt.preventDefault();
  },
  xprsEval = val => {
    val == null || ( dentr.value
      = typeof val === 'object' ? val.content || "/*\\n" + JSON.stringify(val, 0, 2) + "\\n*/"
      : !/^ *{ *".+} *$|^ *\\[.+\\] *$/.test(val) ? "" + val
      : (val = JSON.parse(val) || "").content || "/*\\n" + JSON.stringify(val, 0, 2) + "\\n*/" );
    v0set ? (recon.textContent = "") : ++v0set && !val0s.length || ((xsetlist || {}).value = "")
      || val0s.forEach(v => v && (dentr.value = (dentr.value || "").replace(v[0], v[1])));
    let $ = {}, _ = {}, _ks = [], rslt,
      xprsns = (dentr.value || "")
        .replace(/^\\/\\*(?:\\s*?\\n|)([^]*?)\\n?[\\t ]*\\*\\/$/gm, (m, c1) => c1.replace(/^[\\t ]*/gm, "$&//"))
        .replace(/^(?:[^\\n\\/]|\\/(?!\\/))+;(?= *\\/\\/$|$)/gm, "$& \\"\\"")
        .replace(/&Tab;/g, "\\t").replace(/(?:[^$.\\wÀ-Ͽ]|^)\\$(?=[$_a-zÀ-Ͽ])/gi, "$&.")
        .split("\\n"),
      reslts = xprsns.map(xpri => {
        try {
          xpri = xpri && xpri
            .replace( /^(?=[\\t ]*{)|^.*?(?=\\/\\/|<\\/?\\w+ [ \\w]+=.+>|\\(? *(?:[$\\wÀ-Ͽ]+|\\([^(]*?\\)) *=>|\\(? *function\\b[ \\w]*\\(.*?\\) *{|$)/g,
              m0 => m0.replace( /([ ({]|^)(?:_\\.|)([$_a-zÀ-Ͽ][$\\wÀ-Ͽ]*)(?=\\s*=\\s*(?:$|[$\\wÀ-Ͽ'"\`([{./+-]))/gi,
                (m1, c1, c2) => _ks.push(c2) && c1 + "_." + c2 )
              .replace( /([\\t =<>([{!?,;:%/*+-]|^)(?!(?:if|else|try|catch|for|in|of|do|while|switch|break|continue|new|var|let|const|typeof|instanceof|function|return|throw|delete|true|false|null|undefined)\\b)([$_](?!\\.)[$\\wÀ-Ͽ]*|[A-Za-zÀ-Ͽ][$\\wÀ-Ͽ]*)(?! *=|['":])/g,
                (m1, c1, c2) => window[c2] || !_ks.includes(c2) ? m1 : c1 + "_." + c2 ) );
          rslt = eval(xpri.replace(/\\x0c$|\\\\f$|&#x0*[Cc];$|^\\x0c|^\\\\f|^&#x0*[Cc];/g, ""));
          return ( !/\\x0c$|\\\\f$|&#x0*[Cc];$|^\\x0c|^\\\\f|^&#x0*[Cc];/.test(xpri)
            ? "" : "<div class=pagebb></div>" )
          + ( rslt == null ? "" : typeof rslt === 'string'
            ? rslt.replace(/\\n/g, "\\\\n") : rslt.toString().replace(/\\s+/g, " ") );
        } catch (err) { reShow(err); return err; }
      }),
      $ks = Object.keys($);
    cgrid.style.setProperty("--row1ht", $ks.length < 4 ? "-56px" : -($ks.length * 16 + 4) + "px");
    quad1A.innerHTML = Object.values($).join("\\n").replace(/\\n$/, "\\n&nbsp;")
      + '<span id="dfinal">$-variable<br />FINAL VALUES</span>';
    quad1B.innerHTML = Object.keys($).join("\\n")
      .replace(/^([a-zÀ-Ͽ]+)_\\u0302(.+)$/gim, "$1<sup>$2</sup>")
      .replace(/^([a-zÀ-Ͽ]+)(?:_\\u0303(.+)|(\\d+))$/gim, "$1<sub>$2$3</sub>")
      .replace( /.[\\u0300-\\u036f]|[\\u02f7\\u03d5\\u03dd\\u03f0\\u03f1\\u03f5]/g,
        "<span class=fsan1>$&</span>" );
    quad2A.innerHTML = reslts.join("\\n").replace(/\\n$/, "\\n&nbsp;")
      + '<span id="dinitl">Line-expression<br />RESULTS</span>';
    quad2B.innerHTML = xprsns.map( xpri => xpri
      .replace(/&(?=[gl]t;|#x0*[ad];|NewLine;)/gi, "&amp;").replace(/<(?=!|\\/?[a-z])/gi, "&lt;")
      .replace( /\\/\\/ *(.*?) *( \\/\\/|)$/, (m, c1, c2) =>
        "<span class=dnote>" + ( c2 ? c1 : c1
          .replace(/(\\W|\\d|^)_([0-9a-zÀ-Ͽ]+)_(?=$|\\W|\\d)/gi, "$1<strong><em>$2</em></strong>")
          .replace(/(\\W|\\d|__|^)\\*(?=\\S)(.*?\\S)\\*(?=$|\\W|\\1)/g, "$1<em>$2</em>")
          .replace(/\\b__(.+?)__\\b/g, "<strong>$1</strong>")
          .replace(/\\^(?=\\S)(.*?\\S)\\^/g, "<sup>$1</sup>")
          .replace(/~(?=\\S)(.*?\\S)~/g, "<sub>$1</sub>")
          .replace(/\`(?=\\S)(.*?\\S)\`/g, "\`<span class=codin>$1</span>\`")
          .replace( /([^$.\\wÀ-Ͽ]|^)(a)(?= )/gi, //"$1<x>$2</x>")
            (m, c1, c2) => c1 + "&#x" + c2.charCodeAt(0).toString(16) + ";" )
          .replace(/\\u2b1a\\u034f/g, "&nbsp;")
          .replace(/\\u250a\\u034f/g, "&zwj;") )
        + "</span> " )).join("\\n")
    .replace( /^[\\t ]*(<span class=dnote>)(<\\/span>)( *\\n[\\t ]*)\\1(.*)(?=\\2 *\\n[\\t ]*\\1\\2 *$)/gm,
      (m, c1, c2, c3, c4) => c1 + c2 + c3 + c1 + c4
      .replace( /(?:  ((?:[+\\]×÷−∗⋅✕✖-]|&divide;|&lowast;|&minus;|&plus;|&rsqb;|&sdot;|&times;) *) |(?! ))((?:[^\\x09&=[⇐⇒⇔∏∑√∫]|[[⇐⇒⇔∏∑√∫](?!  )|&(?!Tab;|equals;|hArr;  |int;  |lArr;  |lsqb;  |prod;  |rArr;  |radic;  |sum;  ))*?) +(?:\\u2215|\\u27cb) +(.*?)(?= *[\\x09=]| *\\[  |  +]|  +[+×÷−∗⋅✕✖-] | *&Tab;|  +&divide; | *&equals;|  +&lowast; | *&lsqb;  |  +&minus; |  +&plus; |  +&rsqb;|  +&sdot; |  +&times; | *(?:[⇐⇒⇔∏∑√∫]|&hArr;|&int;|&lArr;|&prod;|&rArr;|&radic;|&sum;)(\\[|&lsqb;|)  | *$)/g,
        "$1<span class=dvnd>$2</span><span class=dvsr>$3</span>" )
      .replace( /([∏∑√∫]|&int;|&prod;|&radic;|&sum;|(?=\\[|&lsqb;))(\\[|&lsqb;|) ( +)|  (\\]|&rsqb;)((?! ).*?(?=<span class=dvnd>|$)| ?)/g,
        (m, c1, c2, c3, c4, c5) => (!c4 ? "" : "  ")
        + "<span class=fbig>" + (c4 || c1 + c2) + "</span>"
        + (c4 ? " " : c3 + (!c1 || !c2 ? "" : " "))
        + (!c5 ? "" : "<span class=dvnd>" + c5 + "</span>") ) )
    .replace( /\\(((?:\\t| |&nbsp;)*<sup>.*?<\\/sup>)((?:\\t| |&nbsp;)*<sub>.*?<\\/sub>)(?=(?:\\t| |&nbsp;)*\\))/g,
      "(<span class=vert>$1</span><span class=vert>$2</span>" )
    .replace(/([^$.\\wÀ-Ͽ]|^)\\$\\.([\\wÀ-Ͽ]+)/g, "$1<var class=dvar>$2</var>")
    .replace( !_ks.length ? /[]/
      : new RegExp("(&#?(?!\\\\w+;)|[^&]#|[^#$&.\\\\wÀ-Ͽ]|^)(?:_\\.|)(" + _ks.join("|") + ")(?![$\\\\wÀ-Ͽ\\u0300-\\u036f\\u20d0-\\u20ff]|[^\\n<]*<\\\\/(?:em|strong|var|x)>)", "g"),
      "$1<var>$2</var>" )
    .replace(/(<var\\b.*?>[a-zÀ-Ͽ]+)_\\u0302(.+?)(?=<\\/var>)/gi, "$1<sup>$2</sup>")
    .replace(/(<var\\b.*?>[a-zÀ-Ͽ]+)(?:_\\u0303(.+?)|(\\d+))(?=<\\/var>)/gi, "$1<sub>$2$3</sub>")
    .replace(/\\u2044|&frasl;/g, "<span class=frasl>$&</span>")
    .replace( /[\\xb2\\xb3\\xb9\\u2070-\\u207e\\u2080-\\u208e]|&sup[123];/g,
      "<span class=fsan2>$&</span>" ) // superscripts, subscripts
    .replace( /.[\\u0300-\\u036f]|[\\u02f7\\u03d5\\u03dd\\u03f0\\u03f1\\u03f5\\u2023\\u2031\\u2034\\u203e\\u2057\\u2150-\\u215a\\u215f]|&epsiv;|&frac\\d[356];|&gammad;|&kappav;|&oline;|&pertenk;|&phiv;|&qprime;|&rhov;|&tprime;/g,
      "<span class=fsan1>$&</span>" ) // combining marks, vulgar fractions, ˷ ϕ ϝ ϰ ϱ ϵ ‣ ‱ ‴ ‾ ⁗
    .replace( /(.*)(?:\\x0c|\\\\f|&#x0*[Cc];)(<\\/span> |)$|^(.*<span class=dnote>|)(?:\\x0c|\\\\f|&#x0*[Cc];)/gm,
      "<div class=pagebb></div>$1$2$3" );
  },
  dentGen = evt => {
    let eobj = evt.target, rnge, seln;
    if ( eobj.parentElement.id === "symlist" || eobj.id !== "scrnmask" && [0, 1, 2, 3, 4, 5, 6]
    .some(i => (eobj = !i ? eobj : eobj["parentElement"] || eobj).id === "quad2B") ) {
    //&& evt.path[evt.path.length - (!window.EC0 ? 7 : 8)].id === "quad2B" ) {
      if (evt.target.parentElement.id === "symlist") {
        seln = window.getSelection();
        seln.removeAllRanges();
        rnge = document.createRange();
        rnge.selectNodeContents(evt.target);
        seln.addRange(rnge);
      } else if (symlist.className) {
        rnge = Array.from(quad2B.childNodes)
          .findIndex(e => e.isSameNode(seln = window.getSelection().focusNode) || e.contains(seln))
          / quad2B.childNodes.length;
        rnge = rnge < 0.15 ? 0 : rnge > 0.85 ? 1 : rnge;
        document.querySelector('#scrnmask').className = symlist.className = "";
        q2Bcopy = quad2B.innerHTML;
        quad2B.innerHTML = (dentr.value || "").replace(/&(?=#?\\w+;)/g, "&amp;")
          .replace(/<(?=!|\\/?[a-z])/gi, "&lt;") + (!dentr.value ? "" : "\\n<br>");
        !(q2Bhtml = quad2B.innerHTML)
        || window.getSelection().setPosition( quad2B.firstChild, !rnge ? 0
          : quad2B.textContent.indexOf("\\n", quad2B.textContent.length * rnge - 1) + 1 );
      }
    } else if (!symlist.className && quad2B.innerHTML === q2Bhtml) {
      document.querySelector('#scrnmask').className = symlist.className = "is-hidden";
      quad2B.innerHTML = q2Bcopy;
      q2Bcopy = q2Bhtml = null;
    } else if (!symlist.className) {
      (xsetlist || {}).value = "";
      helpClr();
      document.querySelector('#scrnmask').className = symlist.className = "is-hidden";
      q2Bcopy = q2Bhtml = null;
      dentr.value = quad2B.innerText.replace(/\\n+$|^\\n+/g, "")
        .replace(/^.*?(?=\\/\\/|$)/gm, m => m.replace(/\\\\t/g, "\\t"));
      xprsEval();
    }
  },
  initLoad = () => !/^https?:\\/\\/.+$/.test(dload) ? xprsEval()
    : window.fetch(dload, { credentials: 'omit' })
      .then( re => /\\.json$|^https?:\\/\\/\\w[\\w.:-]*\\/\\w[\\w-]*\\/\\w[\\w!.*+~-]*$/.test(dload)
        ? re.json() : re.text() )
      .then(xprsEval).catch(reShow),
  xsetLoad = (evt = { target: "" }) => {
    let optg;
    helpClr();
    if (!xsetlist || !evt.target.id && /^https?:\\/\\/.+$/.test(dload)) {
      return initLoad();
    } else if (evt.target.id === "xsetlist" && !xsetlist.value) {
      xsetlist.value = xsetinp.value = dentr.value = "";
      return xprsEval();
    } else if (evt.target.id === "xsetinp" && dentr.value) {
      return xsetlist.value === xsetinp.value.replace(/.+\\//, "")
      || xsetlist.value === xsetinp.value
      || (xsetlist.value = "");
    }
    evt.target.id !== "xsetinp"
    || (xsetlist.value = xsetinp.value) && xsetlist.value
    || (xsetlist.value = xsetinp.value.replace(/.+\\//, "")) && xsetlist.value
    || (xsetlist.value = "");
    optg = xsetlist.value && xsetlist.selectedOptions[0].parentElement.label;
    xsetinp.value && (!xsetlist.value || xsetlist.value === xsetinp.value.replace(/.+\\//, ""))
    || (xsetinp.value = (optg === "USERdata/" ? "" : optg) + xsetlist.value);
    !optg || ( optg !== "USERdata/"
    ? ( dentr.value = ((xstor[optg.replace(/\\/$/, "")] || "")[xsetlist.value] || "")
      .replace(/\\n+$|^\\n+/g, "") ) && xprsEval()
    : !window.localforage || localforage.getItem(xsetinp.value)
      .then(xprsEval).catch(reShow) );
  },
  xlstGen = seln => {
    let xlRndr = lfks => {
      xsetlist.innerHTML = "\\n      <option></option>" + [["USERdata", lfks]]
      .concat(Object.entries(xstor)).map( (oe, i) => (i || !lfks) && !oe[1] ? ""
        : "\\n      <optgroup label=\\"" + oe[0] + "/\\">"
          + (!i ? oe[1] : Object.keys(oe[1]).filter(e => e !== "_module"))
            .map(e => "\\n        <option>" + e + "</option>").join("")
          + "\\n      </optgroup>" ).join("") + "\\n    ";
      !((xsetlist.value = seln || "") && xsetlist.value)
      ? ecoscrs && initLoad() : v0set || !dload ? xprsEval() : xsetLoad();
    };
    !window.localforage ? xlRndr() : localforage.keys().then(xlRndr).catch(reShow);
  };
window.xstor = window.xstor || {};
window.dentr = document.querySelector('#ecoesp0 #jdedft>#srcpanes>.textarea:nth-of-type(2)')
  || { value: datxmp.textContent.replace(/\\n+$|^\\n+/g, "") };
(ecoscrs ? cinit : window.location.search).replace(/^\\?/, "").split("&").forEach( qi =>
  /^jsrcs=./.test(qi) ? (jsrcs = window.decodeURIComponent(qi.replace(/^jsrcs=/, "")).split(/[ ,]+/))
  : /^cmods=./.test(qi) ? (cmods = window.decodeURIComponent(qi.replace(/^cmods=/, "")).split(/[ ,]+/))
  : /^dload=./.test(qi) ? (dload = window.decodeURIComponent(qi.replace(/^dload=/, "")))
  : /^val0s=./.test(qi) ? val0s.concat( (qi = window.decodeURIComponent(qi.replace(/^val0s=/, "")))
    .split(!/^ *\\/.+\\//.test(qi) ? /,/ : /[]/)
    .map( e => (e = /^ *(.+):(.*)|^ *(\\/.+\\/[gim]*)[,:]?(.*)/.exec(e))
      && ( /^\\//.test(e[1]) ? [eval(e[1]), !/^['"]|=>/.test(e[2]) ? e[2] : eval(e[2])]
        : [new RegExp("^([\\\\t ]*" + e[1] + "[\\\\t ]*=[\\\\t ]*).*?(?=[\\\\t ]*//|$)", "m"), "$1" + e[2]] )))
  : /^title=/.test(qi) ? titSave(0, window.decodeURIComponent(qi.replace(/^title=/, "")))
  : /^!displ$/.test(qi) ? [cgrid, xctrls].forEach(e => e && e.classList.add("is-hidden"))
  : /^!zlock$/.test(qi) ? zoomTog(1)
  : /^!row1$/.test(qi) ? gridAdj(4)
  : /^!col1$/.test(qi) ? gridAdj(5) : 0 );
Promise.all(jsrcs.map(e => scrInj(e))).catch(reShow).then(() => {
  !/^http/.test(window.location.protocol) ? xlstGen(dload)
  : Promise.all( (cmods.some(e => /^\\d+$/.test(e)) ? cmods : [1,2,3,4,5,6,7,8].concat(cmods))
      .map(e => !/^\\d+$/.test(e) ? e : \`../-app-cjs/cmod\${e}.js\`)
      .map(u => u && import(/\\//.test(u) ? u : "./" + u).catch(reShow)) )
    .then( ms => ms.forEach( (m, i) => !m || typeof m !== 'object'
      || (xstor[m._module || "xmod" + (1 + i)] = m) ))
    .then(() => xlstGen(dload))
    .catch(reShow);
  xsetinp || initLoad();
});
symlist.innerHTML = "\\n    " + Object.getOwnPropertyNames(Math)
  .map((e, i) => \`<li>Math.\${e}\${/^[A-Z]/.test(e) ? "" : "()"}</li>\`).join("\\n    ")
  + "\\n    " + Object.getOwnPropertyNames(Number)
  .map((e, i) => \`<li>Number.\${e}\${!/^is|^parse/.test(e) ? "" : "()"}</li>\`).join("\\n    ")
  + "\\n    " + Object.getOwnPropertyNames(Number.prototype)
  .map((e, i) => \`<li>n.\${e}\${/^constructor/.test(e) ? "" : "()"}</li>\`).join("\\n    ")
  + "\\n    " + ["", ".toLocaleString()", ".toUTCString()", ".toISOString()", ".getTime()"]
  .map(e => \`<li>new Date()\${e}</li>\`).join("\\n    ")
  + "\\n    " + [ "- - -", "\\\\t &amp;Tab;", "\\\\f (form-feed &amp;#xc;)", "⬚͏ &amp;nbsp; (no-break space)", "┊͏ &amp;zwj; (zero-width joiner)" ]
  .map(e => \`<li>\${e}</li>\`).join("\\n    ") + "\\n    " + [
    "- - -", "&Alpha;", "&alpha;", "&Beta;", "&beta;", "&Gamma;", "&gamma;", "&Gammad;", "&gammad;", "&Delta;", "&delta;", "&Epsilon;", "&epsi;", "&epsiv;", "&Zeta;", "&zeta;", "&Eta;", "&eta;", "&Theta;", "&theta;", "&thetav;", "&Iota;", "&iota;", "&Kappa;", "&kappa;", "&kappav;", "&Lambda;", "&lambda;", "&Mu;", "&mu;", "&Nu;", "&nu;", "&Xi;", "&xi;", "&Omicron;", "&omicron;", "&Pi;", "&pi;", "&piv;", "&Rho;", "&rho;", "&rhov;", "&Sigma;", "&sigma;", "&sigmav;", "&Tau;", "&tau;", "&Upsilon;", "&upsi;", "&upsih;", "&Phi;", "&phi;", "&phiv;", "&Chi;", "&chi;", "&Psi;", "&psi;", "&Omega;", "&omega;",
    "- - -", "&excl;", "&quot;", "&num;", "&dollar;", "&percnt;", "&amp;", "&apos;", "&lpar;", "&rpar;", "&ast;", "&plus;", "&comma;", "(hyphen-minus &#x2d;)", "&period;", "&sol;", "&colon;", "&semi;", "&lt;", "&equals;", "&gt;", "&quest;", "&commat;", "&lsqb;", "&bsol;", "&rsqb;", "&Hat;", "&lowbar;", "&grave;", "&lcub;", "&vert;", "&rcub;", "(tilde &#x7e;)",
    "- - -", "&brvbar;", "&uml;", "&macr;", "&deg;", "&pm;", "&sup2;", "&sup3;", "&acute;", "&micro;", "&sup1;", "&frac14;", "&frac12;", "&frac34;", "&times;", "&divide;", "&fnof;", "&tilde;", "(low tilde &#x2f7;)", "(combining circumflex &#x302;)", "(combining tilde &#x303;)", "(combining macron &#x304;)", "(combining overline &#x305;)", "(combining low line &#x332;)", "&horbar;", "&Vert;", "&bull;", "(triangular bullet &#x2023;)", "&hellip;", "&permil;", "&pertenk;", "&prime;", "&Prime;", "&tprime;", "&backprime;", "&oline;", "&frasl;", "&qprime;", "(superscript 0 &#x2070;)", "(superscript 4 &#x2074;)", "(superscript 5 &#x2075;)", "(superscript 6 &#x2076;)", "(superscript 7 &#x2077;)", "(superscript 8 &#x2078;)", "(superscript 9 &#x2079;)", "(superscript '+' &#x207a;)", "(superscript '-' &#x207b;)", "(superscript '=' &#x207c;)", "(superscript '(' &#x207d;)", "(superscript ')' &#x207e;)", "(subscript 0 &#x2080;)", "(subscript 1 &#x2081;)", "(subscript 2 &#x2082;)", "(subscript 3 &#x2083;)", "(subscript 4 &#x2084;)", "(subscript 5 &#x2085;)", "(subscript 6 &#x2086;)", "(subscript 7 &#x2087;)", "(subscript 8 &#x2088;)", "(subscript 9 &#x2089;)", "(subscript '+' &#x208a;)", "(subscript '-' &#x208b;)", "(subscript '=' &#x208c;)", "(subscript '(' &#x208d;)", "(subscript ')' &#x208e;)", "&Copf; (complexes)", "(Euler constant &#x2107;)", "&Hopf; (quaternions)", "&Nopf; (naturals)", "&numero;", "&Popf; (primes)", "&Qopf; (rationals)", "&Ropf; (reals)", "&Zopf; (integers)", "&escr;", "&ee;", "&ii;", "(frac 1-7th &#x2150;)", "(frac 1-9th &#x2151;)", "(frac 1-10th &#x2152;)", "&frac13;", "&frac23;", "&frac15;", "&frac25;", "&frac35;", "&frac45;", "&frac16;", "&frac56;", "&frac18;", "&frac38;", "&frac58;", "&frac78;", "(numerator 1 &#x215f;)", "&larr;", "&uarr;", "&rarr;", "&darr;", "&harr;", "&lArr;", "&uArr;", "&rArr;", "&dArr;", "&hArr;",
    "&forall;", "&part;", "&exist;", "&nexist;", "&empty;", "&nabla;", "&in;", "&notin;", "&ni;", "&notni;", "&prod;", "&sum;", "&minus;", "(division slash &#x2215;)", "&setmn;", "&lowast;", "&radic;", "&prop;", "&infin;", "&angrt;", "&ang;", "&mid;", "&nmid;", "&par;", "&npar;", "&and;", "&or;", "&cap;", "&cup;", "&int;", "&there4;", "&becaus;", "&ratio;", "&Colon;", "&sim;", "&nsim;", "&cong;", "&ap;", "&nap;", "&ne;", "&equiv;", "&nequiv;", "&le;", "&ge;", "&ll;", "&gg;", "&sub;", "&sup;", "&nsub;", "&nsup;", "&sube;", "&supe;", "&nsube;", "&nsupe;", "&subne;", "&supne;", "&oplus;", "&ominus;", "&otimes;", "&osol;", "&odot;", "&ocir;", "&oast;", "&odash;", "&plusb;", "&minusb;", "&timesb;", "&sdotb;", "&vdash;", "&dashv;", "&top;", "&bot;", "&sdot;", "&check;", "(multiplication X &#x2715;)", "&cross;", "(math diagonal &#x27cb;)", "(long division &#x27cc;)", "&lang;", "&rang;", "&Lang;", "&Rang;", "&xoplus;", "&xotime;" ]
  .map(e => \`<li>\${e.replace(/(.*)&(#?\\w+;)/, "&$2 $1&amp;$2")}</li>\`).join("\\n    ") + "\\n  ";
['#scrnmask', '#cmain'].forEach(e => document.querySelector(e).onclick = dentGen);
cheadg.onblur = titSave;
menulist.onchange = menuSel;
quad2B.onpaste = txtPste;
xsetinp.onblur = xsetLoad;
xsetlist.onchange = xsetLoad;
})();
</script>
` ],
// * * * * * 1: srcdiff * * * * *
`<!--
<xmp id="s1txt0" class="is-hidden"></xmp>
<xmp id="s2txt0" class="is-hidden"></xmp>
-->
<style type="text/css">
body {
  font-family: Geneva, Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
}
.has-text-link { color: #485fc7; }
.is-pulled-right { float: right; }
.is-hidden { display: none; }
.section { padding: 3rem 1.5rem; }
.container {
  position: relative;
  flex-grow: 1;
  width: auto;
  max-width: calc(1024px - 6rem);
  margin: 0 auto;
}
main>h3 { margin: 0 0 0.25rem; }
main>pre {
  height: 240px;
  margin: 0 0 16px;
  overflow: auto;
}
main>pre.ht0 { height: 0; }
main>pre.ht2x { height: 480px; }
main .inserted {
  background-color: #9E9;
  display: inline-block;
  min-width: 100%;
}
main .deleted {
  background-color: #E99;
  display: inline-block;
  min-width: 100%;
}
main .modified {
  background-color: #FD8;
  display: inline-block;
  min-width: 100%;
}
main .modified-light {
  background-color: #fcffb6;
  /* display: inline-block; */
  /* min-width: 100%; */
}
main .padding {
  background-color: LightGrey;
  display: inline-block;
  min-width: 100%;
}
@media screen and (min-height: 864px),
print and (max-width: 734px),
print and (min-width: 738px) and (max-width: 785px) {
  main>pre { height: 384px; }
  main>pre.ht2x { height: 768px; }
}
@media print {
  .section { padding: 0; }
}
</style>
<section class="section">
<main class="container">
  <label class="has-text-link is-pulled-right">
    <input type="checkbox" id="s1swi" />hide
  </label>
  <h3>SOURCE1 (edited)</h3>
  <pre id="s1rslt"></pre>
  <label class="has-text-link is-pulled-right">
    <input type="checkbox" id="s2swi" />hide
  </label>
  <h3>SOURCE2 (original)</h3>
  <pre id="s2rslt"></pre>
</main>
</section>
<script src="../../a00/-res-js/srcdiff.js" type="text/javascript"></script>
<script type="text/javascript">
(function() {
'use strict';
const s1txt0 = document.querySelector('xmp#s1txt0'),
  s2txt0 = document.querySelector('xmp#s2txt0'),
  s1swi = document.querySelector('main #s1swi'),
  s2swi = document.querySelector('main #s2swi'),
  s1rslt = document.querySelector('main>#s1rslt'),
  s2rslt = document.querySelector('main>#s2rslt'),
  diffExe = () => {
    if (!window.SourceDiff || !s1txt0 || !s2txt0) { return; }
    let dif = new SourceDiff.Diff(true), // true = ignore leading whitespace
      fmt = new SourceDiff.DiffFormatter(dif);
    [s2rslt.innerHTML, s1rslt.innerHTML]
    = fmt.formattedDiff(s2txt0.textContent, s1txt0.textContent);
  };
[s1swi, s2swi].forEach( e => e.onchange = () => {
  [s1rslt, s2rslt].forEach(e => e.classList.remove("ht0", "ht2x"));
  if (s1swi.checked && s2swi.checked) {
    s1rslt.classList.add("ht0");
    s2rslt.classList.add("ht0");
  } else if (s1swi.checked) {
    s1rslt.classList.add("ht0");
    s2rslt.classList.add("ht2x")
  } else if (s2swi.checked) {
    s1rslt.classList.add("ht2x");
    s2rslt.classList.add("ht0");
  }
} );
s1rslt.onscroll = () => {
  s2rslt.scrollLeft = s1rslt.scrollLeft;
  s2rslt.scrollTop = s1rslt.scrollTop;
};
s2rslt.onscroll = () => {
  s1rslt.scrollLeft = s2rslt.scrollLeft;
  s1rslt.scrollTop = s2rslt.scrollTop;
};
window.setTimeout(diffExe, 500);
})();
</script>`,
// * * * * * 2: dviz-idxlist * * * * *
`<!-- link href="../../a00/-res-css/bulma0.9.3.min.css" type="text/css" rel="stylesheet" -->
<style type="text/css">
@import "../../a00/-res-css/bulma0.9-minireset.css";
html, body {
  font-size: 14px;
  line-height: revert;
}
strong, mark, table th, .table, .table thead td, .table thead th,
.table tfoot td, .table tfoot th { color: inherit; }
.is-hidden { display: none; }
main a:hover, main a.has-text-link:hover, main label.has-text-link:hover {
  color: CornFlowerBlue !important;
}
main .select select[multiple] {
  height: 2.5rem;
  padding: 0.5em;
}
main thead, main tfoot { font-weight: bold; }
main td:first-of-type { white-space: nowrap; }
main td:nth-of-type(1), main td:nth-of-type(2) { text-align: right; }
main td[colspan="20"] {
  background: WhiteSmoke;
  text-align: left;
}
main .dflow { display: flow-root; overflow-x: auto; }
main>#r2con {
  background-color: unset;
  color: Orange;
  font-size: medium;
  margin: 0;
  padding: 0;
}
@media screen and (min-width: 685px) and (max-width: 768px) {
  main #filtinp { width: 132px; }
  main #moveinp { width: 84px; }
}
@media print {
  .section { padding: 0; }
}
</style>
<section class="section">
<main class="container">
<nav class="tabs is-centered">
  <ul>
    <li value="0" class="is-active"><a>Organized</a></li>
    <li value="1"><a>Mutables</a></li>
    <li value="2"><a>Statics</a></li>
    <li value="3"><a>Deleted</a></li>
  </ul>
</nav>
<pre id="r2con"></pre>
<nav class="level">
  <div class="level-item">
    <span>
      <span class="has-text-weight-bold">Total:</span> <span id="ftotal">0</span>
    </span>
  </div>
  <div class="level-item">
    <div class="level field is-grouped">
      <span class="control select is-multiple">
        <select id="colssel" multiple size="1"></select>
      </span>
      <span class="control select">
        <select id="sortsel"></select>
      </span>
      <span class="control">
        <label class="checkbox has-text-link"><input id="descswi" type="checkbox" /> Z-A</label>
      </span>
    </div>
  </div>
  <div class="level-item">
    <div class="level field is-grouped">
      <span id="filtctrl" class="field has-addons control">
        <span class="control">
          <input id="filtinp" class="input" type="text" placeholder="Enter search pattern..." />
        </span>
        <span class="control">
          <button id="filtbtn" class="button">FILTER</button>
        </span>
      </span>
      <span id="bulkctrl" class="field is-grouped control is-hidden">
        <span class="field has-addons control">
          <span class="control">
            <input id="moveinp" class="input" type="text" placeholder="Enter subdir..." />
          </span>
          <span class="control">
            <button id="movebtn" class="button is-warning">MOVE</button>
          </span>
        </span>
        <span class="control">
          <button id="delbtn" class="button is-danger">DEL</button>
        </span>
      </span>
      <span class="control">
        <a id="blktrig">&#x2611;</a>
      </span>
    </div>
  </div>
</nav>
<div class="dflow">
<table class="table">
  <thead>
    <tr>
      <td>
        <span>#</span><a class="is-hidden">&#x25b6;</a>
        <input type="checkbox" class="is-hidden" />
      </td>
      <td>Subdir</td>
      <td>File ID</td>
      <td>Type</td>
      <td>Updated</td>
      <td>Up'd By</td>
      <td>Up'd Ver</td>
      <td>Up'd Misc</td>
      <td>Created</td>
      <td>Cr'd By</td>
      <td>Cr'd Ver</td>
      <td>Cr'd Misc</td>
      <td>Full Name</td>
      <td>Username</td>
      <td>Roles</td>
      <td>Groups</td>
      <td>Image</td>
      <td>Link Ref</td>
      <td>From</td>
      <td>To</td>
      <td>Subject</td>
      <td>Headline</td>
      <td>Time</td>
      <td>Place</td>
      <td>People</td>
      <td>Attach's</td>
    </tr>
  </thead>
  <thead class="is-hidden">
    <tr>
      <td># <input type="checkbox" class="is-hidden" /></td>
      <td>Chg Seq</td>
      <td>File ID</td>
      <td>Revision#</td>
    </tr>
  </thead>
  <tbody></tbody>
  <tfoot>
    <tr>
      <td>
        <span>#</span><a class="is-hidden">&#x25b6;</a>
        <input type="checkbox" class="is-hidden" />
      </td>
      <td>Subdir</td>
      <td>File ID</td>
      <td>Type</td>
      <td>Updated</td>
      <td>Up'd By</td>
      <td>Up'd Ver</td>
      <td>Up'd Misc</td>
      <td>Created</td>
      <td>Cr'd By</td>
      <td>Cr'd Ver</td>
      <td>Cr'd Misc</td>
      <td>Full Name</td>
      <td>Username</td>
      <td>Roles</td>
      <td>Groups</td>
      <td>Image</td>
      <td>Link Ref</td>
      <td>From</td>
      <td>To</td>
      <td>Subject</td>
      <td>Headline</td>
      <td>Time</td>
      <td>Place</td>
      <td>People</td>
      <td>Attach's</td>
    </tr>
  </tfoot>
  <tfoot class="is-hidden">
    <tr>
      <td># <input type="checkbox" class="is-hidden" /></td>
      <td>Chg Seq</td>
      <td>File ID</td>
      <td>Revision#</td>
    </tr>
  </tfoot>
</table>
</div>
</main>
</section>
<script type="text/javascript">
(function() {
'use strict';
let rva2, rval, ss0, ss1,
  j = 0, vidx = 0,
  txd1 = {
    DBNAME: (document.querySelector('#ecoesp0 #pchlist') || "").value || null,
    FILEID: "", //"_design/ecosorter",
    VIEW:   "", //"files-idxlist",
    OPTS:   {} //{ since: 0 }
  },
  copts = [ \`
          <option value="subdir">Subdir</option>
          <option value="id">File ID</option>
          <option value="file_type">Type</option>
          <option value="file_updated.timestamp">Updated</option>
          <option value="file_updated.username">Up'd By</option>
          <option value="file_updated.version">Up'd Ver</option>
          <option value="file_updated.misc">Up'd Misc</option>
          <option value="file_created.timestamp">Created</option>
          <option value="file_created.username">Cr'd By</option>
          <option value="file_created.version">Cr'd Ver</option>
          <option value="file_created.misc">Cr'd Misc</option>
          <option value="name_full">Full name</option>
          <option value="name_user">Username</option>
          <option value="roles">Roles</option>
          <option value="team_groups">Groups</option>
          <option value="image_src">Image</option>
          <option value="linkref">Link Ref</option>
          <option value="from">From</option>
          <option value="to">To</option>
          <option value="subject">Subject</option>
          <option value="headline">Headline</option>
          <option value="time">Time</option>
          <option value="place">Place</option>
          <option value="people">People</option>
          <option value="_attachments">Attach's</option>
        \`, \`
          <option value="seq">Chg Seq</option>
          <option value="id">File ID</option>
          <option value="rev">Revision#</option>
        \` ],
  qslrs = [
    'main #colssel>option:nth-of-type(2), '
    + 'main thead:first-of-type td:nth-of-type(3), '
    + 'main tfoot:first-of-type td:nth-of-type(3)',
    'main thead:first-of-type td:first-of-type>span, '
    + 'main tfoot:first-of-type td:first-of-type>span',
    'main thead:first-of-type td:first-of-type>a, '
    + 'main tfoot:first-of-type td:first-of-type>a',
    'main thead:not(.is-hidden) td:first-of-type>input, '
    + 'main tfoot:not(.is-hidden) td:first-of-type>input',
    'main thead:not(.is-hidden) td:first-of-type>input, '
    + 'main tbody>tr>td:first-of-type>input, '
    + 'main tfoot:not(.is-hidden) td:first-of-type>input'
  ],
  cmtabs = document.querySelectorAll('main>nav.tabs li'),
  ftotal = document.querySelector('main #ftotal'),
  colssel = document.querySelector('main #colssel'),
  sortsel = document.querySelector('main #sortsel'),
  descswi = document.querySelector('main #descswi'),
  filtinp = document.querySelector('main #filtinp'),
  filtbtn = document.querySelector('main #filtbtn'),
  filtctrl = document.querySelector('main #filtctrl'),
  bulkctrl = document.querySelector('main #bulkctrl'),
  blktrig = document.querySelector('main #blktrig'),
  r2con = document.querySelector('main>#r2con'),
  cmthds = document.querySelectorAll('main thead'),
  cmtbod = document.querySelector('main tbody'),
  cmtfts = document.querySelectorAll('main tfoot'),
  r2Show = r2 => { r2con.textContent
    += ( !r2 || typeof r2 !== 'object' || r2 instanceof Error && r2.constructor && !r2.reason
      ? r2 : JSON.stringify(r2, 0, 2) ) + "\\n\\n" },
  ts1Fmt = nbr => !nbr ? "" : new Date(nbr).toISOString().replace(/T.+$/, ""),
  nbrX = v => v && (Array.isArray(v) ? v : ("" + v).split("."))
    .map(n => !n ? "" : ("" + n).length > 4 ? n : ("000" + n).substr(-4, 4)).join("."),
  ptyX = d => ss0 === "subdir" ? d.loc_subdir || (d.file_updated || d.file_created || "").subdir
    || ( !(/^eco-./.test(d.file_type) || ["loc_subdir", "file_created"].some(p => d.hasOwnProperty(p)))
      ? " " : "!" )
    : !ss1 ? ( !d[ss0] && /^[.-]./.test(d._id) && ss0 === "file_type" ? "(app assets)"
      : /name_full/.test(ss0) ? d.name_full.replace(/^m[rs]\\.? +|^mrs\\.? +|[.,;:/]/gi, "")
        || d.name_user || d._id
      : ss0 === "_attachments" ? nbrX(Object.keys(d[ss0] || "").length)
      : ss0 !== "file_type" ? d[ss0] : (d[ss0] || "").replace(/^eco-/, "") ) || " "
    : ss1 !== "timestamp" ? d[ss0]
      && (ss1 !== "version" ? d[ss0][ss1] : nbrX(d[ss0][ss1])) || " "
    : ss0 !== "file_updated"
    ? d[ss0] && d[ss0][ss1] || d[ss0.replace(/^file/, "ts")] || " "
    : d[ss0] && d[ss0][ss1] || (d.file_created || "")[ss1]
      || d.ts_updated || d.ts_created || " ",
  ordFlip = arr => !descswi.checked ? arr.sort() : arr.sort().reverse(),
  tr0Gen = (r, i) => \`
    <tr\${ vidx ? "" : " hidden"}>
      <td>\${ 1 + i - j } <input type=checkbox class="is-hidden" /></td>
      <td>\${ (rval = r.doc || r.value).hasOwnProperty("loc_subdir")
        ? (rval.loc_subdir || ".") + "/" : /^eco-./.test(rval.file_type) || rval.file_created
        ? ((rval.file_updated || rval.file_created || "").subdir || ".") + "/" : "" }</td>
      <td>\${ r.id }</td>
      <td>\${ (rval.file_type || "").replace(/^eco-/, "")
        || (!/^[.-]./.test(r.id) ? "" : "(app assets)") }</td>
      <td>\${ ts1Fmt(rval.ts_updated || (rval.file_updated || "").timestamp) }</td>
      <td>\${ (rval.file_updated || "").username || "" }</td>
      <td>\${ (rval.file_updated || "").version || "" }</td>
      <td>\${ rval.file_updated && (rval.file_updated.misc) || "" }</td>
      <td>\${ ts1Fmt(rval.ts_created || (rval.file_created || "").timestamp) }</td>
      <td>\${ (rval.file_created || "").username || "" }</td>
      <td>\${ (rval.file_created || "").version || "" }</td>
      <td>\${ rval.file_created && (rval.file_created.misc) || "" }</td>
      <td>\${ rval.name_full || "" }</td>
      <td>\${ rval.name_user || "" }</td>
      <td>\${ [rval.roles].flat().join(", ") || "" }</td>
      <td>\${ [rval.team_groups].flat().join(", ") || "" }</td>
      <td>\${ rval.image_src || "" }</td>
      <td>\${ rval.linkref || "" }</td>
      <td>\${ rval.from || "" }</td>
      <td>\${ [rval.to].flat().join(", ") || "" }</td>
      <td>\${ rval.subject || "" }</td>
      <td>\${ rval.headline || "" }</td>
      <td>\${ rval.time || "" }</td>
      <td>\${ rval.place || "" }</td>
      <td>\${ [rval.people || rval.contributors].flat().join(", ") || "" }</td>
      <td>\${ Object.keys(rval._attachments || "").length || "" }</td>
    </tr>\`,
  qd2Fmt = rows => rows.map( (r, i) =>
    !(rval = r.doc || r.value)._attachments && /^\\./.test(r.id) ? ""
    : /^[.-]/.test(r.id) ? (!i || (j = i)) && \`
    <tr id="\${ r.id.replace(/^[.-]/, "_") }">
      <td colspan="20"><a>&#x25b6;</a> <input type="checkbox" class="is-hidden" /> \${
        r.id.replace( /^[.-].+$/, m => m + " ("
          + (/^eco-assets$/.test(rval.file_type) ? "eco-" : "app ") + "assets)" ) }</td>
    </tr>\\n\` + ordFlip(Object.keys(rval._attachments || "")).map( (k, i2) => \`
    <tr hidden>
      <td>\${ 1 + i2 } <input type="checkbox" class="is-hidden" /></td>
      <td>\${ r.id + "/" }</td>
      <td colspan="18">\${ !rval._attachments[k] ? k
        : k + " (" + Math.ceil(+rval._attachments[k].length / 1000) + "k)" }</td>
    </tr>\` ).join("")
    : !i || /^[.-]/.test(rows[i - 1].id) || !(rva2 = rows[i - 1].doc || rows[i - 1].value)
      || (rval.loc_subdir || (rval.file_updated || "").subdir || "")
        !== (rva2.loc_subdir || (rva2.file_updated || "").subdir || "")
    ? (!i || (j = i)) && \`
    <tr id="\${ rval.loc_subdir || (rval.file_updated || "").subdir || "_" }">
      <td colspan="20"><a>&#x25b6;</a> <input type="checkbox" class="is-hidden" /> \${
        rval.loc_subdir || (rval.file_updated || "").subdir || "./" }</td>
    </tr>\` + tr0Gen(r, i)
    : tr0Gen(r, i) ).join("") + "\\n  ",
  qd3Fmt = rows => rows.map(tr0Gen).join("") + "\\n  ",
  qd5Fmt = dels => dels.map( (d, i) => \`
    <tr>
      <td>\${ 1 + i } <input type="checkbox" class="is-hidden" /></td>
      <td>\${ d.seq }</td>
      <td>\${ d.id }</td>
      <td>\${ d.changes[0].rev }</td>
    </tr>\` ).join("") + "\\n  ",
  filesChg = evt => {
    if (vidx > 2) { return; }
    let fmove = evt.target.id === "movebtn",
      qcontxta = document.querySelector('#econav0 #qcontxta'),
      moveinp = document.querySelector('main #moveinp'),
      chks = document.querySelectorAll('main tbody>tr:not([id])>td:first-of-type>input:checked'),
      chkaf2 = !fmove ? Array.from(chks)
          .filter(inp => !/^[.-]\\w/.test(inp.parentElement.parentElement.children[1].textContent))
        : Array.from(chks).filter( inp => inp.parentElement.parentElement.children[3]
          && /^(?:anno|assets|contact|event|memo|post|prjid|publmgr|scrap|srcdoc)$/
          .test(inp.parentElement.parentElement.children[3].textContent) ),
      txd2 = {
        DBNAME: txd1.DBNAME,
        FILEID: "_all_docs",
        OPTS:   {
          keys: chkaf2.map(inp => inp.parentElement.parentElement.children[2].textContent),
          include_docs: fmove
        }
      },
      rd2Qcon = d2s => {
        window.dstor = d2s;
        qcontxta.value = "$dstor";
        EC2.qconRetrvD(() => {
          qcontxta.value += "\\n/" + txd2.DBNAME;
          EC1.tabs0Tog(3);
        });
      },
      row1Tfm = r1 => {
        !fmove || !r1 || !r1.doc || /^\\$&?$|^=$/.test(moveinp.value)
        || ( r1.doc.hasOwnProperty("loc_subdir") ? r1.doc.loc_subdir = moveinp.value
          : (r1.doc.file_updated || r1.doc.file_created || {}).subdir = moveinp.value );
        return fmove ? Object.assign({ _id: "", _rev: "" }, (r1 || "").doc)
        : {
            _id:  r1.id, // r1.key
            _rev: r1.value && r1.value.rev || r1.changes && r1.changes[0].rev,
            _deleted: true
          }
      },
      rdataTfm = re => (re.rows || re.results || []).map(row1Tfm), //.filter(d => !d._deleted)
      dbq = txd2.DBNAME && window.PouchDB && PouchDB(txd2.DBNAME);
    !fmove || Array.from(chks).forEach(inp => inp.parentElement.parentElement.className = "");
    chkaf2.forEach( inp => inp.parentElement.parentElement.className
      = fmove ? "has-background-warning-light" : "has-background-danger-light" );
    !dbq || ( txd2.FILEID === "_all_docs"
      ? dbq.allDocs(txd2.OPTS).then(rdataTfm).then(rd2Qcon)
      : txd2.FILEID === "_changes"
      ? dbq.changes(txd2.OPTS).then(rdataTfm).then(rd2Qcon)
      : dbq.get(txd2.FILEID, txd2.OPTS).then(r2Show) )
    .catch(r2Show);
  },
  fileLoad = evt => {
    let td1txt = evt.target.parentElement.parentElement.children[1].textContent,
      attlist = document.querySelector('#econav0 #attlist'),
      qcontxta = document.querySelector('#econav0 #qcontxta'),
      fwinflux = document.querySelector('#ecoguides .button[disabled]'),
      txd2 = {
        DBNAME: txd1.DBNAME,
        FILEID: evt.target.textContent,
        OPTS:   {
          rev: vidx !== 3 ? null : evt.target.parentElement.parentElement.children[3].textContent,
          revs_info: true
        }
      };
    /^[.-]\\w/.test(td1txt)
    ? !window.EC1 || !attlist
      || (attlist.value = td1txt + evt.target.textContent.replace(/ \\(\\d+k\\)$/, ""))
      && EC1.attSel()
    : fwinflux || !qcontxta
      || (qcontxta.value = JSON.stringify(txd2, 0, 2)); //|| !window.EC2 ...&& EC2.qconRetrvD();
  },
  filtExe = () => {
    let negs = /^-/.test(filtinp.value),
      rexf = /^\\/.+\\/[gim]*$/.test(filtinp.value.trim()) ? eval(filtinp.value)
        : new RegExp(filtinp.value.replace(/^-/, "") || "^$", "gi");
    document.querySelectorAll(qslrs[4]).forEach(inp => inp.checked = 0);
    document.querySelectorAll('main tbody>tr:not([id])').forEach(tr => {
      tr.classList.remove("is-hidden", "match");
      Array.from(tr.children)
      .forEach((td, i) => !i || (td.innerHTML = td.innerHTML.replace(/<\\/?mark>/g, "")));
    });
    if (filtinp.value) {
      document.querySelectorAll('main tbody>tr:not([id]):not([hidden])')
      .forEach( tr => Array.from(tr.children).forEach( (td, i) => {
        if (i && !td.classList.contains("is-hidden")) {
          rexf.lastIndex = 0;
          !negs ? tr.classList.contains("match")
            || (tr.className = rexf.test(td.textContent) ? "match" : "is-hidden")
          : tr.classList.contains("is-hidden")
            || (tr.className = !rexf.test(td.textContent) ? "match" : "is-hidden");
          negs || (td.innerHTML = td.textContent.replace(rexf, "<mark>$&</mark>"));
        }
      }));
    }
  },
  blk2Tog = () => {
    if (vidx > 2) { return; }
    let chks = document.querySelectorAll('main tbody>tr:not([id])>td:first-of-type>input:checked');
    (chks.length ? filtctrl : bulkctrl).classList.add("is-hidden");
    (chks.length ? bulkctrl : filtctrl).classList.remove("is-hidden");
  },
  bulkTog = () => {
    let hid = document.querySelector('main thead:not(.is-hidden) td:first-of-type>input.is-hidden');
    document.querySelectorAll(qslrs[4])
    .forEach(inp => inp.className = hid ? "" : "is-hidden");
    if (hid) {
      blk2Tog();
    } else {
      bulkctrl.classList.add("is-hidden");
      filtctrl.classList.remove("is-hidden");
    }
  },
  ancAdd1 = td2 => {
    td2.innerHTML = td2.textContent.replace(/.+?(?= \\(\\d+k\\)$|$)/, "<a>$&</a>");
    td2.firstChild.onclick = fileLoad;
  },
  fileActv = evt => {
    let td2 = evt.target.parentElement.parentElement.children[2];
    evt.target.checked || (evt.target.parentElement.parentElement.className = "");
    evt.target.checked ? ancAdd1(td2) : td2.innerHTML = td2.textContent;
    blk2Tog();
  },
  chksTog = evt => {
    let r1idx = evt.target.parentElement.parentElement.rowIndex - 2,
      sdtrs = document.querySelectorAll('main tbody>tr[id]'),
      rsidx = Array.from(sdtrs || "").map(e => e.rowIndex - 2),
      r2idx = rsidx[rsidx.findIndex(n => n === r1idx) + 1]
        || ((document.querySelector('main tbody>tr:last-of-type') || "").rowIndex - 1),
      trows = document.querySelectorAll('main tbody>tr');
    if (!evt.target.parentElement.parentElement.id) {
      evt.target.checked // unintuitive, trial feature
      || document.querySelectorAll('main tbody>tr:not([id])').forEach(tr => tr.className = "");
      document.querySelectorAll(qslrs[4]).forEach(inp => inp.checked = evt.target.checked);
      document.querySelectorAll('main tbody>tr:not([id])>td:nth-of-type(3)')
      .forEach(td2 => evt.target.checked ? ancAdd1(td2) : td2.innerHTML = td2.textContent);
    } else {
      while (++r1idx < r2idx) {
        evt.target.checked || (trows[r1idx].className = ""); // unintuitive, trial feature
        trows[r1idx].children[0].children[0].checked = evt.target.checked;
        evt.target.checked
        ? ancAdd1(trows[r1idx].children[2])
        : trows[r1idx].children[2].innerHTML = trows[r1idx].children[2].textContent;
      }
    }
    blk2Tog();
  },
  chksRstr = () => {
    bulkctrl.classList.add("is-hidden");
    filtctrl.classList.remove("is-hidden");
    filtinp.value = moveinp.value = "";
    document.querySelectorAll(qslrs[2]).forEach(anc => anc.innerHTML = "&#x25b6;");
    document.querySelectorAll(qslrs[3])
    .forEach(inp => (inp.checked = 0) || (inp.className = "is-hidden"));
    document.querySelectorAll('main tbody>tr[id]>td:first-of-type>input')
    .forEach(inp => inp.onchange = chksTog);
    document.querySelectorAll('main tbody>tr:not([id])>td:first-of-type>input')
    .forEach(inp => inp.onchange = fileActv);
  },
  sdirXpd = evt => {
    let xpd = evt.target.textContent === "\\u25b6",
      rowid = evt.target.parentElement.parentElement.id,
      r1idx = evt.target.parentElement.parentElement.rowIndex - 2,
      sdtrs = document.querySelectorAll('main tbody>tr[id]'),
      rsidx = Array.from(sdtrs || "").map(e => e.rowIndex - 2),
      r2idx = rsidx[rsidx.findIndex(n => n === r1idx) + 1]
        || ((document.querySelector('main tbody>tr:last-of-type') || "").rowIndex - 1),
      trows = document.querySelectorAll('main tbody>tr');
    //r2Show([r1idx, r2idx, rowid].join(", "));
    if (rowid) {
      evt.target.innerHTML = !xpd ? "&#x25b6;" : "&#x25bc;";
      while (++r1idx < r2idx) { trows[r1idx].hidden = !xpd; }
    } else {
      document.querySelectorAll(qslrs[2])
      .forEach(a => a.innerHTML = !xpd ? "&#x25b6;" : "&#x25bc;");
      document.querySelectorAll('main tbody>tr[id]>td:first-of-type>a')
      .forEach(a => a.innerHTML = !xpd ? "&#x25b6;" : "&#x25bc;");
      document.querySelectorAll('main tbody>tr:not([id])').forEach(tr => tr.hidden = !xpd);
    }
  },
  colsTog = (evt, resel) => {
    let opts = Array.from(colssel.selectedOptions).map(o => 1 + o.index);
    !evt || (resel = sortsel.value);
    document.querySelectorAll('main :not(.is-hidden)>tr')
    .forEach( tr => Array.from(tr.children).forEach( (td, i) =>
      td.className = !i || opts.indexOf(i) > -1 ? "" : "is-hidden" ));
    sortsel.innerHTML = vidx > 2 ? \`
        <option value=seq>Chg Seq</option>
        <option value=id>File ID</option>\\n\`
    : "\\n" + Array.from(colssel.selectedOptions)
      .map(o => \`          <option value="\${ o.value }">\${ o.textContent }</option>\`)
      .join("\\n") + "\\n        ";
    sortsel.value = resel || "id"; //Array.from(sortsel.options).some(o => o.value === resel) ?
  },
  tblGen = evt => {
    if (!window.PouchDB || !txd1.DBNAME) {
      ftotal.innerText = "_";
      return window.PouchDB || !txd1.DBNAME || r2con.textContent
      || r2Show("Alert: PouchDB is not loaded. Database is inaccessible.");
    }
    [ss0, ss1] = sortsel.value.split(".");
    vidx < 3 || PouchDB(txd1.DBNAME)
    .changes(txd1.OPTS)
    .then(re => {
      let dels = re.results.filter(r => r.deleted);
      ftotal.innerText = dels.length;
      [cmthds[0], cmtfts[0]].forEach(e => e.classList.add("is-hidden"));
      [cmthds[1], cmtfts[1]].forEach(e => e.classList.remove("is-hidden"));
      cmtbod.innerHTML = qd5Fmt( ss0 === "seq" ? ordFlip(dels)
        : ordFlip(dels.map(r => [r.id, r])).map(sr => sr[1]) );
      chksRstr();
      colsTog(null, /^(?:id|seq)$/.test(ss0) ? ss0 : "id");
    }).catch(r2Show);
    vidx > 2 || PouchDB(txd1.DBNAME)
    .query(txd1.FILEID.replace(/^_design\\//, "") + "/" + txd1.VIEW, txd1.OPTS)
    .catch( () => PouchDB(txd1.DBNAME).allDocs({
      startkey:     descswi.checked != (vidx === 2) ? "~a" : undefined,
      endkey:       descswi.checked != (vidx === 2) ? undefined : "~a",
      descending:   descswi.checked,
      include_docs: true }) )
    .then(re => {
      let calcSum = arr => !arr.length ? 0 : arr.reduce((s, v) => s + v);
      j = 0;
      ftotal.innerText = vidx ? re.rows.length //re.total_rows
        : re.rows.filter(r => /^eco-(?!assets$)./.test((r.doc || r.value).file_type)).length
          + calcSum( re.rows.map( r => !(rval = r.doc || r.value)._attachments
            ? 0 : Object.keys(rval._attachments).length ));
      [cmthds[1], cmtfts[1]].forEach(e => e.classList.add("is-hidden"));
      [cmthds[0], cmtfts[0]].forEach(e => e.classList.remove("is-hidden"));
      cmtbod.innerHTML = vidx
      ? qd3Fmt( !ss0 || vidx !== 2 && ss0 === "id" || vidx === 2 && ss1 === "timestamp" ? re.rows
        : ordFlip(re.rows.map(r => [ptyX(r.doc || r.value), r.id, r])).map(sr => sr[2]) )
      : qd2Fmt( ordFlip( re.rows
        .filter(r => /^[.-]./.test(r.id) || /^eco-./.test((r.doc || r.value).file_type))
        .map( r => /^[.-]./.test(r.id) ? [r.id.replace(/^\\.(.+)$/, "$1_"), null, r.id, r]
          : [ (rval = r.doc || r.value).loc_subdir
              || (rval.file_updated || rval.file_created || "").subdir || "!",
            ptyX(r.doc || r.value), r.id, r ] ) ).map(sr => sr[3]) );
      colsTog(null, (!ss1 ? ss0 : [ss0, ss1].join(".")));
      document.querySelectorAll(qslrs[1])
      .forEach(spn => spn.className = vidx ? "" : "is-hidden");
      document.querySelectorAll(qslrs[2])
      .forEach(a => a.className = !vidx ? "" : "is-hidden");
      document.querySelectorAll('main tbody>tr[id]>td:first-of-type>a')
      .forEach(anc => anc.onclick = sdirXpd);
      chksRstr();
    }).catch(r2Show);
  },
  viewTog = evt => {
    r2con.textContent = "";
    vidx = !evt ? vidx : evt.currentTarget.value; //evt.target.parentElement.dataset.vidx
    cmtabs.forEach(li => li.classList.remove("is-active"));
    cmtabs[vidx].classList.add("is-active");
    //txd1.VIEW = vidx === 2 ? "files-static" : "files-idxlist";
    colssel.innerHTML = copts[vidx > 2 ? 1 : 0];
    ( [[1,2,3,4,5], [0,1,2,3,4,5,24], [1,2,7,8,16,17,18,19], [0,1,2]][vidx] || [] )
    .forEach(n => colssel.options[n].selected = true);
    tblGen();
  };
cmtabs.forEach(li => li.onclick = viewTog);
colssel.onchange = colsTog;
sortsel.onchange = tblGen;
descswi.onchange = tblGen;
filtbtn.onclick = filtExe;
blktrig.onclick = bulkTog;
document.querySelectorAll(qslrs[2])
.forEach(a => a.onclick = sdirXpd);
document.querySelectorAll('main td:first-of-type>input')
.forEach(inp => inp.onchange = chksTog);
document.querySelectorAll('main #movebtn, main #delbtn')
.forEach(btn => btn.onclick = filesChg);
viewTog();
})();
</script>`,
// * * * * * 3: dviz-posts * * * * *
`<!-- link href="../../a00/-res-css/bulma0.9.3.min.css" type="text/css" rel="stylesheet" -->
<style type="text/css">
@import "../../a00/-res-css/bulma0.9-minireset.css";
details>* { box-sizing: border-box; }
html, body {
  font-size: 14px;
  line-height: revert;
}
strong, mark, table th, .title, .subtitle { color: inherit; }
.is-hidden { display: none; }
main hr { background-color: Gainsboro; }
main figure { margin: 0 2em; }
main a:hover, main a.has-text-link:hover, main label.has-text-link:hover {
  color: CornFlowerBlue !important;
}
main>#r3con {
  color: Orange;
  font-size: medium;
  margin: 0;
  padding: 0;
}
main>#cfilt>.panel { margin: 0 0 0.75rem 0.75rem; }
main>#cfilt>.panel>.panel-heading>.is-pulled-right { margin-top: -0.125em; }
main>#cfilt>.panel>.panel-block:not(.is-block) { justify-content: flex-end; }
main>#cfilt>.panel>.panel-block input {
  padding: 1px 3px;
  border: 1px solid LightGrey;
}
main>#cfilt>.panel>.panel-block br+input { margin-top: 0.5em; }
main>#cfilt>.panel>.panel-block input[type=checkbox] { margin: 0 0.25em 0 0; }
main>#postbd .media-content .prewrap {
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: pre-wrap;
}
@media screen and (max-width: 666px) {
  main>#cfilt { text-align: right } /* has-text-right */
  main>#cfilt>.field:first-child { float: left; }
  main .media-left>.image { margin: 0; }
}
@media screen and (min-width: 667px), print {
  main>#cfilt>.panel { float: right; }
}
@media print {
  .section { padding: 0; }
}
</style>
<section class="section has-text-grey">
<main class="container">
  <h1 class="title is-2">Post Board</h1>
  <h4 class="subtitle is-4 is-italic">Team-project communications</h4>
  <hr />
  <pre id="r3con"></pre>
  <div id="cfilt" class="field">
    <div class="field is-inline-block">
      <span class="has-text-weight-bold">Total: </span><span id="ctotal">0</span>
    </div>
    <div class="field is-inline-block panel">
      <div class="panel-heading has-text-left has-text-grey-light">
        Filter Controls
        <a class="is-pulled-right is-size-4 has-text-weight-normal has-text-link">&orarr;</a>
      </div>
      <div class="panel-block is-block has-text-right has-text-grey-light">
        Dates:&nbsp;<input type="text" placeholder="begin date..." /><br />
        <input type="text" placeholder="end date..." />
      </div>
      <div class="panel-block has-text-grey-light">
        Prj&nbsp;refs:&nbsp;<input type="text" list="plinks" />
      </div>
      <div class="panel-block has-text-grey-light">
        From:&nbsp;<input type="text" list="pcntcs" />
      </div>
      <div class="panel-block has-text-grey-light">
        To:&nbsp;<input type="text" list="pcntcs" />
      </div>
      <div class="panel-block has-text-grey-light">
        Subj:&nbsp;<input type="text" />
      </div>
      <div class="panel-block has-text-grey-light">
        Body:&nbsp;<input type="text" />
      </div>
      <div class="panel-block is-block has-text-left has-text-grey-light has-background-light">
        Open all:&ensp;
        <label class="has-text-link"><input type="checkbox" />headers</label>&ensp;
        <label class="has-text-link"><input type="checkbox" />bodies</label>
      </div>
    </div>
    <datalist id="plinks"></datalist>
    <datalist id="pcntcs"></datalist>
  </div>
  <div id="postbd"></div>
</main>
</section>
<script type="text/javascript">
(function() {
'use strict';
let elsmed, fpl, fxa, pcntcs, rval, uimg, unm,
  rslt1 = {},
  txd1 = {
    DBNAME: (document.querySelector('#ecoesp0 #pchlist') || "").value || null,
    FILEID: "_design/ecosorter",
    VIEW:   "files-static",
    OPTS:   {
      //startkey: ["A"], endkey: ["B"]
      //startkey: ["P"], endkey: ["Q"]
    }
  },
  tmcntcs = window.EC2 && EC2.objQA("team", 1) || {},
  r3con = document.querySelector('main>#r3con'),
  ctotal = document.querySelector('main #ctotal'),
  filts = document.querySelectorAll('main>#cfilt>.panel>.panel-block input'),
  postbd = document.querySelector('main>#postbd'),
  r3Show = r3 => { r3con.textContent
    += ( !r3 || typeof r3 !== 'object' || r3 instanceof Error && r3.constructor && !r3.reason
      ? r3 : JSON.stringify(r3, 0, 2) ) + "\\n\\n" },
  fileLoad = evt => {
    let fwinflux = document.querySelector('#ecoguides .button[disabled]'),
      qcontxta = document.querySelector('#econav0 #qcontxta');
    fwinflux || !window.EC2 || !qcontxta || (qcontxta.value = evt.target.textContent)
    && EC2.qconRetrvD();
  },
  rowEval = (fxs, rpv) => !fxs.trim()
    || !(fxa = fxs.trim().split(/[ ,]+/)).some(e => e === "-") && !rpv || rpv
    && (!(fpl = fxa.filter(e => !/^-/.test(e))).length || fpl.some(e => rpv.indexOf(e) > -1))
    && !fxa.filter(e => /^-./.test(e)).some(e => rpv.indexOf(e.replace(/^-/, "")) > -1),
  rsltFilt = () => {
    let f0v = new Date(filts[0].value).getTime(),
      f1v = new Date(filts[1].value).getTime(),
      ridxs = rslt1.rows
      .filter( r =>
        ( !(rval = r.doc || r.value).file_created || !rval.file_created.timestamp
          || ( (!f0v || rval.file_created.timestamp > f0v)
            && (!f1v || rval.file_created.timestamp < f1v) ))
        && rowEval(filts[2].value, rval.linkref)
        && rowEval(filts[3].value, rval.from)
        && rowEval(filts[4].value, (rval.to || []).join())
        && rowEval(filts[5].value, rval.file_type !== "eco-anno" ? rval.subject : "Anno")
        && rowEval( filts[6].value, rval.file_type !== "eco-anno" ? rval.body
          : rval.tags.concat([rval.tocfmt]).concat(rval.texthl).join("\\n") ) )
      .map(r => r.idx);
    elsmed.forEach(e => e.classList.add("is-hidden"));
    ridxs.forEach(x => elsmed[x].classList.remove("is-hidden"));
    ctotal.textContent = ridxs.length || "0";
  },
  aurlGen = (isrc = "avatar000.png") => !window.EC2
    ? (!isrc || /\\//.test(isrc) ? "" : "../../a00_myteam/-res-img/") + (isrc || "")
    : EC2.u2Blob((/\\//.test(isrc) ? "" : "../../a00_myteam/-res-img/") + (isrc || "")),
  rsltRndr = () => postbd.innerHTML = rslt1.rows && "\\n" + rslt1.rows
    .map( r => r &&
\`    <article class="media">
      <div class="media-left">
        <figure class="image is-48x48 has-background-light">
          <img src="\${ aurlGen( uimg = ( tmcntcs[ unm = (rval = r.doc || r.value).from
            || rval.file_created.username || "" ] || {} ).image_src )}" />
        </figure>
      </div>
      <div class="media-content">
        <div class="field">
          <details class="is-size-7">
            <summary class="has-text-grey-light">
              <span class="has-text-weight-bold">\${ (uimg && (tmcntcs[unm] || "").name_full || unm)
                .replace(/ .*$/, "") }</span>
              <span class="is-italic">\${ !rval.file_created ? ""
                : new Date(rval.file_created.timestamp)
                .toLocaleString() }</span>
            </summary>
          \${ (!rval.linkref ? '' : '  PROJECT: ' + rval.linkref + '<br />\\n          ')
            + (!rval.from ? '' : '  FROM: ' + rval.from + '<br />\\n          ')
            + (!rval.to || !rval.to.length ? '' : '  TO: ' + rval.to.join(", ") + '<br />\\n          ')
            + ( !r.id ? '' : (rval.file_type !== "eco-anno" ? '  MEMO' : '  ANNO')
              + ' ID: <a>' + r.id + '</a>\\n          ' )
          }</details>
        </div>
        <div class="field">
          <details class="is-size-6">
            <summary class="has-text-weight-bold">\${ rval.subject
              || (rval.file_type !== "eco-anno" ? "" : "Annotation") }</summary>
            <div class="prewrap">\${ rval.file_type !== "eco-anno" ? rval.body
            : '<span class="is-size-7">TAGS:&nbsp;</span>' + rval.tags
              + '\\n<span class="is-size-7">TOC&nbsp;FMT:&nbsp;</span>' + rval.tocfmt
              + '\\n<span class="is-size-7">STRIKES,&nbsp;INSERTS&nbsp;&amp;&nbsp;HIGHLIGHTS:</span>\\n'
              + rval.texthl.join("\\n") }</div>
          </details>
        </div>
      </div>
    </article>\` ).join("\\n") + "\\n  ";
if (!window.PouchDB) { return r3Show("Alert: PouchDB is not loaded. Database is inaccessible."); }
document.querySelector('main>#cfilt>#plinks').innerHTML = "\\n      "
+ (window.EC2 && EC2.objQA("pf3stor.dbpubl", 1) || [])
  .filter(e => e && !/-s\\d\\d+$|\\.(?!json$)\\w{2,4}$/.test(e[1]))
  .map(e => e[1].replace(/(?:-[dv]?[.\\d]+|)\\.\\w{2,4}$/, "")).sort()
  .map(e => \`<option value="\${ e }"></option>\`).join("\\n      ") + "\\n    ";
document.querySelector('main>#cfilt>#pcntcs').innerHTML = "\\n      "
+ (pcntcs = Object.keys(tmcntcs).map(e => e.replace(/[^\\w.@-]+/g, "-")))
  .map(e => \`<option value="\${ e }"></option>\`)
  .concat(\`<option value="\${ pcntcs.join() }">(all names)</option>\`)
  .join("\\n      ") + "\\n    ";
!txd1.DBNAME || PouchDB(txd1.DBNAME) //"ecosorter/files-static"
.query(txd1.FILEID.replace(/^_design\\//, "") + "/" + txd1.VIEW, txd1.OPTS)
.catch(() => PouchDB(txd1.DBNAME).allDocs({ startkey: "~a", include_docs: true }))
.then( rslt0 => rslt1.rows = (rslt0.rows || [])
  .sort( (a, b) => !(rval = a.doc || a.value) || !rval.file_created ? 0
    : (rval.file_created.timestamp - (b.doc || b.value).file_created.timestamp) )
  .map((r, i) => { (r.idx = i); return r; }) )
.then(rsltRndr)
.then(() => {
  elsmed = document.querySelectorAll('main>#postbd>.media');
  document.querySelectorAll('main>#postbd .media-content>.field:first-child a')
  .forEach(e => e.onclick = fileLoad);
  filts[7].onchange = () =>
    document.querySelectorAll('main>#postbd .media-content>.field:first-child>details')
    .forEach(e => e.open = filts[7].checked);
  filts[8].onchange = () =>
    document.querySelectorAll('main>#postbd .media-content>.field:last-child>details')
    .forEach(e => e.open = filts[8].checked);
  document.querySelector('main>#cfilt>.panel>.panel-heading>.is-pulled-right').onclick = rsltFilt;
  filts[4].value = window.EC2 && EC2.objQA("epsets.uname", 1) || "";
}).then(rsltFilt)
.catch(r3Show);
})();
</script>`,
// * * * * * 4: dviz-contacts * * * * *
`<!-- link href="../../a00/-res-css/bulma0.9.3.min.css" type="text/css" rel="stylesheet" -->
<style type="text/css">
*, *::before, *::after { box-sizing: inherit; }
html, details>* {
  box-sizing: border-box;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  text-size-adjust: 100%;
}
html, body, figure, pre { margin: 0; }
figure:not(:last-child), pre:not(:last-child) { margin-bottom: 1em; }
strong, mark, table th, .title, .subtitle { color: inherit; }
html, body {
  font: normal 14px Helvetica, Arial, sans-serif;
  padding: 0;
}
hr {
  background-color: Gainsboro;
  height: 1px;
  margin: 1.5rem 0;
  border: none;
}
h1, h4 { margin-top: 0; }
a, a:hover { text-decoration: none; }
a:hover { color: CornFlowerBlue; }
pre {
  word-wrap: normal;
  overflow-wrap: normal;
  white-space: pre-wrap;
}
.image {
  display: block;
  position: relative;
}
.image img {
  display: block;
  height: auto;
  width: 100%;
}
.image.is-48x48 {
  height: 48px;
  width: 48px;
}
.image.is-128x128 {
  height: 128px;
  width: 128px;
}
.title {
//color: #363636;
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.125;
}
.subtitle {
//color: #4a4a4a;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.25;
}
.title:not(.is-spaced) + .subtitle { margin-top: -1.25rem; }
.checkbox, .radio {
  cursor: pointer;
  display: inline-block;
  line-height: 1.25;
  position: relative;
}
.field:not(:last-child) { margin-bottom: 0.75rem; }
.media {
  align-items: flex-start;
  display: flex;
  text-align: inherit;
}
.media + .media {
  border-top: 1px solid rgba(219, 219, 219, 0.5);
  margin-top: 1rem;
  padding-top: 1rem;
}
.media-left {
  flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 0;
  margin-right: 1rem;
}
.media-content {
  flex-basis: auto;
  flex-grow: 1;
  flex-shrink: 1;
  text-align: inherit;
}
@media screen and (max-width: 684px) {
  .media-content { overflow-x: auto; }
}
.has-text-link { color: #485fc7; }
.has-text-grey { color: #7a7a7a; }
.has-text-right { text-align: right; }
.is-italic { font-style: italic; }
.has-text-weight-bold { font-weight: 700; }
.is-hidden { display: none; }
.section { padding: 3rem 1.5rem; }
.container {
  position: relative;
  flex-grow: 1;
  width: auto;
  max-width: calc(1024px - 6rem);
  margin: 0 auto;
}
#sec1 { background-color: AliceBlue; }
main .image.is-128x128 {
  width: 128px;
  height: unset;
  margin-left: 2em;
  margin-right: 2em;
}
main .image img {
  background-color: LightSteelBlue;
  min-height: 128px;
}
main .image>figcaption { text-align: center; }
@media screen and (max-width: 666px) {
  main .image.is-128x128 { width: 48px; margin: 0; }
  main .image.is-128x128 img { min-height: 48px; }
  main .image>figcaption { float: right; font-size: x-small; }
}
@media print {
  .section { padding: 0; }
}
</style>
<section id="sec1" class="section has-text-grey">
<main class="container">
  <h1 class="title">Team Players</h1>
  <h4 class="subtitle is-italic">Sketch profiles of the finest crew in the galaxy</h4>
  <hr />
  <div class="field has-text-right">
    <label class="checkbox has-text-link">
      <input type="checkbox" /> Show all details
    </label>
  </div>
</main>
</section>
<script type="text/javascript">
(function() {
'use strict';
const cntcs = \`
  \`.trim().split(/\\n+(?={)/).filter(e => /^{\\s*"[^]+}$/.test(e)).map(JSON.parse),
  cmain = document.querySelector('main'),
  aurlGen = (isrc = "avatar000.png") => !window.EC2
    ? (!isrc || /\\//.test(isrc) ? "" : "../../a00_myteam/-res-img/") + (isrc || "")
    : EC2.u2Blob((/\\//.test(isrc) ? "" : "../../a00_myteam/-res-img/") + (isrc || "")),
  date1Fmt = str => !str ? "" : new Date(str).toUTCString().replace(/.+(\\d{2} [a-z]{3} \\d{4}).+/i, "$1");
cmain.innerHTML += cntcs.map( o => !o ||
\`  <article class="media">
    <div class="media-left">
      <figure class="image is-128x128"><img src="\${ aurlGen(o.image_src || "") }" />
      <figcaption class="is-italic">\${ o.name_user }</figcaption></figure>
    </div>
    <div class="media-content">
      <pre><span class="has-text-weight-bold">\${ o.name_full }</span>
<span class="is-italic">\${ o.roles.join(", ") }</span>
\${ o.bio_short }</pre>
      <pre><details><span class="has-text-weight-bold">Birthdate:</span> \${ date1Fmt(o.birthdate) }
<span class="has-text-weight-bold">Emails:</span> \${ o.emails.join(", ") }
<span class="has-text-weight-bold">Phones:</span> \${ o.phones.join(", ") }
<span class="has-text-weight-bold">Social profiles:</span> \${ o.social_profiles.join(", ") }
<span class="has-text-weight-bold">Project urls:</span> \${ o.project_urls.join(", ") }
<span class="has-text-weight-bold">Joined team:</span> \${ date1Fmt(o.ts_created) }
<span class="has-text-weight-bold">Last updated:</span> \${ date1Fmt(o.ts_updated) }</details></pre>
    </div>
  </article>\`
).join("\\n") + "\\n";
document.querySelector('main input[type=checkbox]').onchange
= evt => document.querySelectorAll('main details').forEach(e => e.open = evt.target.checked);
})();
</script>`
];
