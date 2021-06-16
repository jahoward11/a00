/* JavaScript module */

const groupname = "engineering"

const dimensions = `
// __Common Dimensions of Interest__
// - _length_ of a side, distance or boundary
// - _perimeter_ of any shape
  // (e.g., _circumference_ of a circle)
// - surface _area_ (e.g., of a carpeted floor)
// - _volume_ of space or an object

// __Related Formulas__
// *Pythagorean theorem (for a right-triangle)*
 // Math.pow(a, 2) + Math.pow(b, 2) = Math.pow(c, 2)

// *trigonometric ratios (for a right-triangle)*
 // Math.sin(g1) = b / c
 // Math.cos(g1) = a / c
 // Math.tan(g1) = b / a

// __Note__
// - *Units must all be the same (e.g., all in inches, or all in km, etc.)*

// __KEY__
 // l  | rectangle length
 // w  | rectangle width
 // h  | rectangular solid height

 // a  | right-triangle adjacent-side length
 // b  | right-triangle opposite-side length
 // c  | right-triangle hypotenuse-side length
 // g1 | right-triangle reference angle (in radians)

 // bt | triangle base length
 // ht | triangle height length

 // bp | parallelogram base length
 // hp | parallelogram height length

 // b1 | trapezoid base1 length
 // b2 | trapezoid base2 length
 // hz | trapezoid height length

 // r  | circle radius length
 // d  | circle diameter length

 // rn | cylinder/cone radius length
 // hn | cylinder/cone height length

 // Pr | perimeter of a rectangle
 // Ar | area of a rectangle

 // Pt | perimeter of a triangle
 // At | area of a triangle

 // Ap | area of a parallelogram

 // Az | area of a trapezoid

 // C  | circumference of a circle
 // Ac | area of a circle

 // As | surface area of a rectangular solid
 // Vs | volume of a rectangular solid

 // Vy | volume of a cylinder

 // Vo | volume of a cone

// __GIVEN VALUE__
 l = 25 // ft
 w = 15 // ft
 h = 10 // ft

 a = 20 // ft
 b = 30 // ft
 c = 40 // ft
 g1 = 0.5 // rad

 bt = b // ft
 ht = a // ft

 bp = b // ft
 hp = a // ft

 b1 = 2 // ft
 b2 = 4 // ft
 hz = 1 // ft

 r = 8 // ft

 rn = 5 // ft
 hn = 5 // ft

// __CALCULATED VALUE__
 $Pr = 2 * l + 2 * w // ft
 $Ar = l * w // sq-ft

 $Pt = a + b + c // ft
 $At = 0.5 * bt * ht // sq-ft

 $Ap = bp * hp // sq-ft

 $Az = 0.5 * hz * (b1 + b2) // sq-ft

 $d = 2 * r // ft
 $C = 2 * Math.PI * r // ft
 $Ac = Math.PI * Math.pow(r, 2) // sq-ft

 $As = 2 * l * w + 2 * l * h + 2 * h * w // sq-ft
 $Vs = l * w * h // cu-ft

 $Vy = 2 * Math.PI * Math.pow(rn, 2) * hn // cu-ft

 $Vo = (1 / 3) * Math.PI * Math.pow(rn, 2) * hn // cu-ft

`;

export {
  groupname, dimensions
};
