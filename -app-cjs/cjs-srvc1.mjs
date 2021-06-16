/* JavaScript module */

const groupname = "APPguide"

const calcdemo1 = `
 p = 5
 q = 32
 r = Math.random()

 x = x0 = 0.5
 y = y0 = 3
 z = z0 = -250


// __Demo and Use Description__

 // Use this calculator to develop instructional algorithms
// (like, a mathematical solution to a real-world problem) --
// and to display/share such in a portable, HTML file (web app).

// *Why?*
// - Interactive: rerun a trial -- giving new initial values
// - Reusable: copy and paste a custom expression or whole block
// - Printable: make clean print-outs on standard, letter-size paper
// - Lightweight: minimally leverage shared code across major browsers
// - Conventional: reinforce standards in notation/methods of science

// *How?*
// - Enter data (like, mathematical expressions) into the large,
  // light-colored quadrant only -- the *ENTRY* field.
// - After composing a complete expression set, generate and download
  // a standalone, interactive document (web app) -- to be kept and/or
  // shared -- by tapping the *down-bar* icon at the top right corner.
// - Alternatively, if the calculator is generated within *__E__collabs*,
  // manipulate data within the *SOURCE2* field of the __*File Edit*__
  // screen. Note that when saving any changes made to calc data,
  // using (or, just focusing) the *SOURCE2* field is necessary.
// - When the *ENTRY* field is focused, JavaScript math functions
  // appear and are listed in the left column -- for conveniently
  // copy-pasting into the *ENTRY* field. (See use descriptions below.)
// - When the *ENTRY* field is de-focused, line-item results appear
  // automatically in the *RESULTS* column -- to the left of each
  // line that contains a valid expression.
// - Create a comment, like this one, by prepending the text
  // with a double slash (e.g., //comment).
&Tab;// Indent, like this, with "*&amp;Tab;*"
&Tab;  // ... and/or like this, with ordinary spaces.
// - Make commented text __bold__ by wrapping it
  // in double underscores (e.g., _&zwj;_bolded text_&zwj;_).
// - Make commented text *italicized* by wrapping it
  // in single asterisks (e.g., &lowast;italicized text&lowast;).
// - Make a commented variable _pop_ by wrapping it alone
  // in single underscores (e.g., _&zwj;pop&zwj;_).

 $RndmExpn = Math.ceil(r * 10)

// - Create a __$-variable__ by prepending an ordinary variable
  // with a dollar symbol (e.g., "$&zwj;x1", "$&zwj;RndmExpn").
  // Use: Every __$-variable__ will automatically be bolded --
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

// __Method		Description__
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



// __JavaScript Number Object__

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

// __Method		Description__
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
// &nbsp;
`;

export {
  groupname, calcdemo1
};
