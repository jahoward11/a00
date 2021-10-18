/* JavaScript module */

const groupname = "engineering"

const dimensions1 = `/*
__Dimensions of Common Use__
- _angle_ of a slope or incline
- _length_ of a side, distance or boundary
- _Perimeter_ of any shape (a length)
- _Circumference_ of a circle (a length & a perimeter)
- Surface _Area_ (e.g., of a carpeted floor or painted wall)
- _Volume_ of space or an object

__Reference Formulas__
*Pythagorean theorem (for a right triangle)*
 _a_² + _b_² = _c_²
 _a_&ast;&ast;2 + _b_&ast;&ast;2 == _c_&ast;&ast;2  [redisplay with JS exponentiation operator]
 Math.pow(_a_, 2) + Math.pow(_b_, 2) == Math.pow(_c_, 2) [JS alternate]

*Trigonometric ratios (for a right triangle)*
 sin┊͏_θ_ = _b_ / _c_
 cos┊͏_θ_ = _a_ / _c_
 tan┊͏_θ_ = _b_ / _a_	= sin┊͏_θ_ / cos┊͏_θ_

*Some lengths*
 Perim~tri~ = _a_+_b_+_c_  = side *a* + side *b* + side *c*
 Perim~rec~ = 2_l_+2_w_  = (2 × length) + (2 × width)

 diam~cir~  = 2_r_	  = 2 × radius
 Circm~cir~ = *π*_d_	  = PI × diameter
 Circm~cir~ = 2*π*_r_	  = 2 × PI × radius

 slant~pyr~ = √(½_l_)²+(½_w_)²+_h_²
		  = square-root of
		    (½-length sq'd + ½-width sq'd + height sq'd)
 slant~con~ = √_r_²+_h_² = square-root of (radius sq'd + height sq'd)

*Some areas*
 Area~tri~ = ½_bh_	= 0.5 × base × height
 Area~rec~ = _lw_	= length × width
 Area~cir~ = *π*_r_²	= PI × radius squared

 Area~cub~ = 2_lw_ + 2_lh_ + 2_wh_
		=  (2 × length × width)
		 + (2 × length × height)
		 + (2 × width × height)
 Area~pyr~ = _A_*~bas~* + ½_P_*~bas~*_h_*~sla~*
		= Area~tri/rec-base~
		 + (0.5 × Perim~tri/rec-base~ × slant height)
 Area~sph~ = 4*π*_r_²	= 4 × PI × radius squared
 Area~cyl~ = 2_A_~*cir*~ + _Ch_
 		= (2 × Area~cir~) + (Circm~cir~ × height)
 Area~con~ = _A_~*cir*~ + *π_rh_~sla~*
 		= Area~cir~ + (PI × radius × slant height)

*Some volumes*
 Vol~cub~ = _lwh_	= length × width × height
 Vol~pyr~ = ^1^⁄~3~_lwh_	= 0.33 × length × width × height
 Vol~sph~ = ^4^⁄~3~*π*_r_³	= 1.33 × PI × radius cubed
 Vol~cyl~ = *π*_r_²_h_	= PI × radius squared × height
 Vol~con~ = ^1^⁄~3~*π*_r_²_h_	= 0.33 × PI × radius squared × height

*Note*
- Length units of a formula must all be the same
  (e.g., all in inches, or all in km, etc.).

__KEY__\f
 _θ_   | right-triangle reference angle, theta (in radians)
 _a_   | right-triangle adjacent-side length
 _b_   | right-triangle opposite-side length
 _c_   | right-triangle hypotenuse-side length
 
 _btr_ | triangle base length
 _htr_ | triangle height length
 _Ptr_ | Perimeter of a triangle (a length)
 
 _l_   | rectangle length
 _w_   | rectangle width (a length)
 _h_   | rectangular-solid height (a length)
 _Pre_ | Perimeter of a rectangle (a length)
 
 _bpa_ | parallelogram base length
 _hpa_ | parallelogram height length
 
 _bu_  | trapezoid upper base length
 _bl_  | trapezoid lower base length
 _hz_  | trapezoid height length
 
 _r_   | circle radius length
 _d_   | circle diameter length
 _C_   | Circumference of a circle (a length)
 
 _Atr_ | Area of a triangle
 _Are_ | Area of a rectangle
 _Apg_ | Area of a parallelogram
 _Atz_ | Area of a trapezoid
 _Aci_ | Area of a circle
  
 _Acu_ | Surface Area of a rectangular solid (cuboid)
 _Vcu_ | Volume of a rectangular solid (cuboid)
 _spy_ | pyramid slant-height length
 _Apy_ | Surface Area of a rectangular pyramid
 _Vpy_ | Volume of a rectangular pyramid
 
 _Asp_ | Surface Area of a sphere
 _Vsp_ | Volume of a sphere
 _rn_  | cylinder/cone radius length
 _hn_  | cylinder/cone height length
 _Acy_ | Surface Area of a cylinder
 _Vcy_ | Volume of a cylinder
 _sco_ | cone slant-height length
 _Aco_ | Surface Area of a cone
 _Vco_ | Volume of a cone
*/

// __GIVEN VALUE__\f
 a = 30 // ft
 b = 40 // ft
 c = 50 // ft
 
 btr = a // ft
 htr = b // ft
 
 l = 25 // ft
 w = 15 // ft
 h = 10 // ft
 
 bpa = 20 // ft
 hpa = 12 // ft
 
 bu = 16 // ft
 bl = 14 // ft
 hz = 11 // ft
 
 r = 8 // ft
 
 rn = r // ft
 hn = h // ft

// __CALCULATED VALUE__
 $θ = Math.asin(b / c) // rad
 $Ptr = a + b + c // ft
 $Atr = 0.5 * btr * htr // sq-ft
 
 $Pre = (2 * l) + (2 * w) // ft
 $Are = l * w // sq-ft
 
 $Apg = bpa * hpa // sq-ft
 
 $Atz = 0.5 * hz * (bu + bl) // sq-ft
 
 $Acu = (2 * l * w) + (2 * l * h) + (2 * w * h) // sq-ft
 $Vcu = l * w * h // cu-ft
 spy = Math.sqrt((l / 2)**2 + (w / 2)**2 + h**2) // ft
 $Apy = $Are + (0.5 * $Pre * spy) // sq-ft
 $Vpy = (1 / 3) * l * w * h // cu-ft
 
 d = 2 * r // ft
 $C = Math.PI * d // ft
 $Aci = Math.PI * r**2 // sq-ft
 $Asp = 4 * Math.PI * r**2 // sq-ft
 $Vsp = (4 / 3) * Math.PI * r**3 // cu-ft
 
 $Acy = (2 * Math.PI * rn**2) + (2 * Math.PI * rn * hn) // sq-ft
 $Vcy = Math.PI * rn**2 * hn // cu-ft
 sco = Math.sqrt(rn**2 + hn**2) // ft
 $Aco = (Math.PI * rn**2) + (Math.PI * rn * sco) // sq-ft
 $Vco = (1 / 3) * Math.PI * rn**2 * hn // cu-ft
//`;

const triangles1 = `
// __Right Triangle, Basic Metrics__
 // _θ_ | theta (reference angle, in radians)
 // _a_ | adjacent side (to theta)
 // _b_ | opposite side (to theta)
 // _c_ | hypotenuse

 // sin┊͏_θ_ = _b_ / _c_
 // cos┊͏_θ_ = _a_ / _c_
 // tan┊͏_θ_ = _b_ / _a_	= sin┊͏_θ_ / cos┊͏_θ_

 // _a_² + _b_² = _c_²		Pythagorean theorem

θ1 = Math.PI / 6	//triangle 1 theta
θ2 = Math.PI / 4	//triangle 2 theta
θ3 = Math.PI / 3	//triangle 3 theta

c = 1

b1 = Math.sin(θ1) * c
a1 = Math.cos(θ1) * c
 Math.sqrt(3) / 2	//note: same value as a1 &amp; b3

b2 = Math.sin(θ2) * c
a2 = Math.cos(θ2) * c
 Math.sqrt(2) / 2	//note: same value as a2 &amp; b2

b3 = Math.sin(θ3) * c
a3 = Math.cos(θ3) * c
 Math.sqrt(1) / 2	//note: same value as a3 &amp; b1

$θ3 = Math.round(θ3 * 1000) / 1000
$a3 = Math.round(a3 * 1000) / 1000
$b3 = Math.round(b3 * 1000) / 1000
$c3 = c
//`;

export {
  groupname, dimensions1, triangles1
};
