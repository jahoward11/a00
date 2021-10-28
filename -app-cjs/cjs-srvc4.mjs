/* JavaScript module */

const groupname = "lifescience";

const biology1 = `/*
__AP^®^ BIOLOGY EQUATIONS AND FORMULAS__


*―――Metric Prefixes―――*

 __Factor	Prefix	Symbol__
 10⁹	giga	G
 10⁶	mega	M
 10³	kilo	k
 10⁻¹	deci	d
 10⁻²	centi	c
 10⁻³	milli	m
 10⁻⁶	micro	*μ*
 10⁻⁹	nano	n
 10⁻¹²	pico	p


*―――Surface Area and Volume―――*

 *r*  | radius
 *l*  | length
 *h*  | height
 *w*  | width
 *s*  | length of one side of a cube
 *SA* | surface area
 *V*  | volume

__Surface Area/Volume of a Rectangular Solid__
 *SA* = 2*lw* + 2*lh* + 2*wh*
  *V* = *lwh*

__Surface Area/Volume of a Cube__
 *SA* = 6*s*²
  *V* = *s*³

__Surface Area/Volume of a Cylinder__
 *SA* = 2*πrh* + 2*πr*²
  *V* = *πr*²*h*

__Surface Area/Volume of a Sphere__
 *SA* = 4*πr*²
  *V* = ^4^⁄~3~*πr*³
\\f

*―――Statistical Analysis and Probability―――*

 *x̅* | sample mean
 *n* | sample size
 *s* | sample standard deviation
     (i.e., the sample-based estimate of
     the standard deviation of the population)
 *o* | observed results
 *e* | expected results
 ∑ | sum of all

 Mode   | value that occurs most frequently in a data set
 Median | middle value that separates the greater and lesser
          halves of a data set
 Mean   | sum of all data points divided by number of data points
 Range  | value obtained by subtracting the smallest observation
          (sample minimum) from the greatest (sample maximum)

__Mean__

 *x̅* = ∑*x~i~* ⟋ ⬚͏*n*⬚͏

__Standard Deviation__

 *s* = √   ∑(*x~i~* - *x̅*)² ⟋ ⬚͏ *n* - 1  ⬚͏

__Standard Error of the Mean__

 *SE~x̅~* = *s* ⟋ √*n*

__Chi-Square__

 *χ*² = ∑   (*o* - *e*)² ⟋ ⬚͏  *e*   ⬚͏

__Chi-Square Table__
  *P*-   | Degrees of Freedom
 v̲a̲l̲u̲e̲ |  ̲ ̲1̲ ̲ ̲  ̲ ̲2̲ ̲ ̲  ̲ ̲3̲ ̲ ̲  ̲ ̲4̲ ̲ ̲  ̲ ̲5̲ ̲ ̲  ̲ ̲6̲ ̲ ̲  ̲ ̲7̲ ̲ ̲  ̲ ̲8̲ ̲ ̲
  0.05 |  3.84  5.99  7.81  9.49 11.07 12.59 14.07 15.51
  0.01 |  6.63  9.21 11.34 13.28 15.09 16.81 18.48 20.09

 Degrees of freedom are equal to
the number of distinct possible outcomes minus one.

__Laws of Probability__
 If A and B are mutually exclusive, then:
	*P*(A or B) = *P*(A) + *P*(B)

 If A and B are independent, then:
	*P*(A and B) = *P*(A) × *P*(B)

__Hardy-Weinberg Equations__
 *p* | frequency of allele 1 in a population
 *q* | frequency of allele 2 in a population

 *p*² + 2*pq* + *q*² = 1
 *p* + *q* = 1
\\f

*―――Rate and Growth―――*

 *dY*  | amount of change
 *dt*  | change in time
 *B*   | birthrate
 *D*   | death rate
 *N*   | population size
 *K*   | carrying capacity
 *r~max~* | maximum per capita growth rate of population

__Rate__

 *dY* ⟋ *dt*

__Population Growth__

 *dN* ⟋ *dt*   = *B* - *D*

__Exponential Growth__

 *dN* ⟋ *dt*   = *r~max~N*

__Logistic Growth__

 *dN* ⟋ *dt*   = *r~max~N*[  *K - N* ⟋ ⬚͏ *K* ⬚͏     ]

__Simpson's Diversity Index__
 *n* | total number of organisms of a particular species
 *N* | total number of organisms of all species

 Diversity Index = 1 - ∑[   *n* ⟋ *N*  ]²

__Temperature Coefficient Q~10~__
 *T~2~*  | higher temperature
 *T~1~*  | lower temperature
 *k~2~*  | reaction rate at *T~2~*
 *k~1~*  | reaction rate at *T~1~*
 *Q~10~* | the factor by which the reaction rate increases
       when the temperature is raised by ten degrees

 *Q~10~* = [  *k~2~* ⟋ *k~1~*  ]^¹⁰/*~T~₂ ~- T~₁*^

__Primary Productivity Calculation__

 mg O2 ⟋ ⬚͏ L ⬚͏        ×  0.698 mL ⟋ ⬚͏  mg  ⬚͏         = mL O2 ⟋ ⬚͏ L ⬚͏

 mL O2 ⟋ ⬚͏ L ⬚͏        ×  0.536 mg C~fixed~ ⟋ ⬚͏   mL O2    ⬚͏               = mg C~fixed~ ⟋ ⬚͏  L   ⬚͏

 (at standard temperature and pressure)
\\f

*―――Chemical Analysis―――*

__Water Potential (Ψ)__
 Ψ~P~ | pressure potential
 Ψ~S~ | solute potential

 Ψ = Ψ~P~ + Ψ~S~

 The water potential will be equal to the solute potential of
a solution in an open container because, in an open container,
the pressure potential of the solution is zero.

__The Solute Potential of a Solution__
 *i* | ionization constant
     (1.0 for sucrose because sucrose does not ionize in water)
 *C* | molar concentration
 *R* | pressure constant
     (*R* = 0.0831 liter bars/mole K)
 *T* | temperature in Kelvin (°C + 273)

 Ψ~S~ = ⁻*iCRT*

__Dilution__
*used to create a dilute solution*
*from a concentrated stock solution*
 i | initial (starting)
 f | final (desired)
 *C* | concentration of solute
 *V* | volume of solution

 *C~i~V~i~* = *C~f~V~f~*

__Gibbs Free Energy__
 Δ*G* | change in Gibbs free energy
 Δ*S* | change in entropy
 Δ*H* | change in enthalpy
 *T*  | absolute temperature (in Kelvin)

 Δ*G* = Δ*H* - *T*Δ*S*

__pH Value__
*acidity (<7) / basicity (>7) of an aqueous solution*

 pH = ⁻log~10~[H⁺]

*/`;

export {
  groupname, biology1
};
