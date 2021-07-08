/* JavaScript module */

const groupname = "engineering"

const dimensions1 = `
// __Dimensions of Common Use__
// - _angle_ of a slope or incline
// - _length_ of a side, distance or boundary
// - _Perimeter_ of any shape (a length)
// - _Circumference_ of a circle (a length &amp; a perimeter)
// - surface _Area_ (e.g., of a carpeted floor or painted wall)
// - _Volume_ of space or an object

// __Reference Formulas__
// *Pythagorean theorem (for a right triangle)*
 // _a_^2^ + _b_^2^ = _c_^2^
 // _a_&ast;&ast;2 + _b_&ast;&ast;2 == _c_&ast;&ast;2  [recomposed with JS exponentiation operator]
 // Math.pow(_a_, 2) + Math.pow(_b_, 2) == Math.pow(_c_, 2)  [JS alternate]

// *Trigonometric ratios (for a right triangle)*
 // sin _θ_ = _b_ / _c_
 // cos _θ_ = _a_ / _c_
 // tan _θ_ = _b_ / _a_&Tab;= sin _θ_ / cos _θ_

// *Some areas*
 // Area~tri~ = &frac12;_bh_&Tab;= 0.5 &times; base &times; height
 // Area~rec~ = _lw_&Tab;= length &times; width
 // Area~cir~ = &pi;_r_^2^&Tab;= PI &times; radius squared

 // Area~sph~ = 4&pi;_r_^2^&Tab;= 4 &times; PI &times; radius squared
 // Area~cyl~ = 2_A_~*cir*~ + _Ch_
 // &Tab;&Tab;= (2 &times; Area~cir~) + (Circumference &times; height)
 // Area~con~ = _A_~*cir*~ + &pi;_rh_~*sl*~
 // &Tab;&Tab;= Area~cir~ + (PI &times; radius &times; slant height)

// *Some volumes*
 // Vol~cub~ = _lwh_&Tab;= length &times; width &times; height
 // Vol~pyr~ = ^1^&frasl;~3~_lwh_&Tab;= 0.33 &times; length &times; width &times; height
 // Vol~sph~ = ^4^&frasl;~3~&pi;_r_^3^&Tab;= 1.33 &times; PI &times; radius cubed
 // Vol~cyl~ = &pi;_r_^2^_h_&Tab;= PI &times; radius squared &times; height
 // Vol~con~ = ^1^&frasl;~3~&pi;_r_^2^_h_&Tab;= 0.33 &times; PI &times; radius squared &times; height

// *Note*
// - Length units of a formula must all be the same
  // (e.g., all in inches, or all in km, etc.).

// __KEY__
 // _θ_   | right-triangle reference angle, theta (in radians)
 // _a_   | right-triangle adjacent-side length
 // _b_   | right-triangle opposite-side length
 // _c_   | right-triangle hypotenuse-side length
 
 // _bt_  | triangle base length
 // _ht_  | triangle height length
 
 // _l_   | rectangle length
 // _w_   | rectangle width (a length)
 // _h_   | rectangular-solid height (a length)
 
 // _bp_  | parallelogram base length
 // _hp_  | parallelogram height length
 
 // _bu_  | trapezoid upper base length
 // _bl_  | trapezoid lower base length
 // _hz_  | trapezoid height length
 
 // _r_   | circle radius length
 // _d_   | circle diameter length
 
 // _rn_  | cylinder/cone radius length
 // _hn_  | cylinder/cone height length
 // _hsl_ | cone slant height length
 
 // _Ptr_ | Perimeter of a triangle (a length)
 // _Atr_ | Area of a triangle
 
 // _Pre_ | Perimeter of a rectangle (a length)
 // _Are_ | Area of a rectangle
 
 // _Apg_ | Area of a parallelogram
 
 // _Atz_ | Area of a trapezoid
 
 // _Acu_ | surface Area of a rectangular solid (cuboid)
 // _Vcu_ | Volume of a rectangular solid (cuboid)
 // _Vpy_ | Volume of a rectangular pyramid
 
 // _C_   | Circumference of a circle (a length)
 // _Aci_ | Area of a circle
 // _Asp_ | surface Area of a sphere
 // _Vsp_ | Volume of a sphere
 
 // _Acy_ | surface Area of a cylinder
 // _Vcy_ | Volume of a cylinder
 // _Aco_ | surface Area of a cone
 // _Vco_ | Volume of a cone

// __GIVEN VALUE__
 a = 30 // ft
 b = 40 // ft
 c = 50 // ft
 
 bt = a // ft
 ht = b // ft
 
 l = 25 // ft
 w = 15 // ft
 h = 10 // ft
 
 bp = 20 // ft
 hp = 12 // ft
 
 bu = 16 // ft
 bl = 14 // ft
 hz = 11 // ft
 
 r = 8 // ft
 
 rn = r // ft
 hn = h // ft

// __CALCULATED VALUE__
 $θ = Math.asin(b / c) // rad
 $Ptr = a + b + c // ft
 $Atr = 0.5 * bt * ht // sq-ft
 
 $Pre = (2 * l) + (2 * w) // ft
 $Are = l * w // sq-ft
 
 $Apg = bp * hp // sq-ft
 
 $Atz = 0.5 * hz * (bu + bl) // sq-ft
 
 $Acu = (2 * l * w) + (2 * l * h) + (2 * h * w) // sq-ft
 $Vcu = l * w * h // cu-ft
 $Vpy = (1 / 3) * l * w * h // cu-ft
 
 d = 2 * r // ft
 C = Math.PI * d // ft
 $C = 2 * Math.PI * r // ft
 $Aci = Math.PI * Math.pow(r, 2) // sq-ft
 $Asp = 4 * Math.PI * Math.pow(r, 2) // sq-ft
 $Vsp = (4 / 3) * Math.PI * Math.pow(r, 3) // cu-ft
 
 $Acy = (2 * Math.PI * Math.pow(rn, 2)) + (2 * Math.PI * rn * hn) // sq-ft
 $Vcy = Math.PI * Math.pow(rn, 2) * hn // cu-ft
 hsl = Math.pow(Math.pow(rn, 2) + Math.pow(hn, 2), 0.5) // ft
 $Aco = (Math.PI * Math.pow(rn, 2)) + (Math.PI * rn * hsl) // sq-ft
 $Vco = (1 / 3) * Math.PI * Math.pow(rn, 2) * hn // cu-ft
// &nbsp;
`;

const triangles1 = `
// __Right Triangle, Basic Metrics__
 // _θ_ | theta (reference angle, in radians)
 // _a_ | adjacent side (to theta)
 // _b_ | opposite side (to theta)
 // _c_ | hypotenuse

 // sin _θ_ = _b_ / _c_
 // cos _θ_ = _a_ / _c_
 // tan _θ_ = _b_ / _a_&Tab;= sin _θ_ / cos _θ_
 // _a_^2^ + _b_^2^ = _c_^2^

θ1 = Math.PI / 6&Tab;//triangle 1 theta
θ2 = Math.PI / 4&Tab;//triangle 2 theta
θ3 = Math.PI / 3&Tab;//triangle 3 theta

c = 1

b1 = Math.sin(θ1) * c
a1 = Math.cos(θ1) * c
 Math.sqrt(3) / 2&Tab;//(note: same value as _a1_ &amp; _b3_)

b2 = Math.sin(θ2) * c
a2 = Math.cos(θ2) * c
 Math.sqrt(2) / 2&Tab;//(note: same value as _a2_ &amp; _b2_)

b3 = Math.sin(θ3) * c
a3 = Math.cos(θ3) * c
 Math.sqrt(1) / 2&Tab;//(note: same value as _a3_ &amp; _b1_)

 $θ3 = Math.round(θ3 * 1000) / 1000
 $a3 = Math.round(a3 * 1000) / 1000
 $b3 = Math.round(b3 * 1000) / 1000
 $c3 = c
// &nbsp;
`;

export {
  groupname, dimensions1, triangles1
};
