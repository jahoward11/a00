// __Common Dimensions of Interest__
// - _length_ of a side, distance or boundary
// - _Perimeter_ of any shape (a length)
// - _Circumference_ of a circle (a length &amp; a perimeter)
// - surface _Area_ (e.g., of a carpeted floor or painted wall)
// - _Volume_ of space or object

// __Related Formulas__
// *Pythagorean theorem (for a right triangle)*
 // _a_&sup2; + _b_&sup2; = _c_&sup2;
 // _a_&ast;&ast;2 + _b_&ast;&ast;2 == _c_&ast;&ast;2 [recomposed with JS exponentiation operator]
 // Math.pow(_a_, 2) + Math.pow(_b_, 2) == Math.pow(_c_, 2)

// *Trigonometric ratios (for a right triangle)*
 // sin _θ_ = _b_ / _c_
 // cos _θ_ = _a_ / _c_
 // tan _θ_ = _b_ / _a_ = sin _θ_ / cos _θ_

// __Note__
// - Length units of a formula must all be the same
//   (e.g., all in inches, or all in km, etc.)

// __KEY__
 // _l_  | rectangle length
 // _w_  | rectangle width (a length)
 // _h_  | rectangular solid height (a length)
 
 // _a_  | right-triangle adjacent-side length
 // _b_  | right-triangle opposite-side length
 // _c_  | right-triangle hypotenuse-side length
 // _θ_  | right-triangle reference angle, theta (in radians)
 
 // _bt_ | triangle base length
 // _ht_ | triangle height length
 
 // _bp_ | parallelogram base length
 // _hp_ | parallelogram height length
 
 // _bu_ | trapezoid base-upper length
 // _bl_ | trapezoid base-lower length
 // _hz_ | trapezoid height length
 
 // _r_  | circle radius length
 // _d_  | circle diameter length
 
 // _rn_ | cylinder/cone radius length
 // _hn_ | cylinder/cone height length
 
 // _Pr_ | perimeter of a rectangle (a length)
 // _Ar_ | area of a rectangle
 
 // _Pt_ | perimeter of a triangle (a length)
 // _At_ | area of a triangle
 
 // _Ap_ | area of a parallelogram
 
 // _Az_ | area of a trapezoid
 
 // _C_  | circumference of a circle (a length)
 // _Ac_ | area of a circle
 
 // _As_ | surface area of a rectangular solid
 // _Vs_ | volume of a rectangular solid
 
 // _Vy_ | volume of a cylinder
 
 // _Vo_ | volume of a cone

// __GIVEN VALUE__
 l = 25 // ft
 w = 15 // ft
 h = 10 // ft
 
 a = 30 // ft
 b = 40 // ft
 c = 50 // ft
 
 bt = b // ft
 ht = a // ft
 
 bp = b // ft
 hp = a // ft
 
 bu = 6 // ft
 bl = 7 // ft
 hz = 1 // ft
 
 r = 8 // ft
 
 rn = 5 // ft
 hn = 5 // ft

// __CALCULATED VALUE__
 θ = Math.asin(b / c) // rad
 
 $Pr = 2 * l + 2 * w // ft
 $Ar = l * w // sq-ft
 
 $Pt = a + b + c // ft
 $At = 0.5 * bt * ht // sq-ft
 
 $Ap = bp * hp // sq-ft
 
 $Az = 0.5 * hz * (bu + bl) // sq-ft
 
 C = 2 * Math.PI * r // ft
 d = 2 * r // ft
 $C = Math.PI * d // ft
 $Ac = Math.PI * Math.pow(r, 2) // sq-ft
 
 $As = 2 * l * w + 2 * l * h + 2 * h * w // sq-ft
 $Vs = l * w * h // cu-ft
 
 $Vy = 2 * Math.PI * Math.pow(rn, 2) * hn // cu-ft
 
 $Vo = (1 / 3) * Math.PI * Math.pow(rn, 2) * hn // cu-ft
// &nbsp;
