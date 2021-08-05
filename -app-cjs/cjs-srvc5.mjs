/* JavaScript module */

const groupname = "statistics";

const analysis1 = `/*
__Statistical Analysis Tools__

*Z-score*
 *z* | how many standard deviations is a value away from the mean?

 *z*  =  *x - μ* ⟋ *⬚͏ σ ⬚͏*	      =  ~data point - mean~ ⟋ ^standard deviation^


*Correlation Coefficient*
 *r* | how closely aligned are plot points to linear regression line?

 *r*  =  ⬚͏ 1 ⟋ *n* - 1	     ∑ *z~xi~ z~yi~*  =  ⬚͏ 1 ⟋ *n* - 1	∑   [  *x~i~* - *x̅* ⟋ ⬚͏ *s~x~* ⬚͏      ] [  *y~i~* - *y̅* ⟋ ⬚͏ *s~y~* ⬚͏      ] 


*Normal Distribution, Probability Density Function (PDF)*

 *p*(*x*)  =   ⬚͏1 ⟋ *σ*√2*π*	exp[  -(*x - μ*)² ⟋ ⬚͏  2*σ*²  ⬚͏	     ] 

       =   ⬚͏  1 ⟋ *σ*√2*π*ℯ^*z*²^

 *φ*(*x*)  =    ⬚͏ 1 ⟋ √2*π*ℯ^*z*²^		PDF for a standard n.d.

*/
 μ = 0
 σ = 1

 x = 1
 z = (x - μ) / σ

 φ_z = 1 / (2 * Math.PI * Math.exp(z**2))**0.5


/*
*Normal Distribution, Cumulative Density Function (CDF)*

 *Φ*(*z*)  =  ∫ *φ*(*z*) *dz*	CDF for a standard n.d.

*/
 b0 = 0.2316419
 b1 = 0.319381530
 b2 = -0.356563782
 b3 = 1.781477937
 b4 = -1.821255978
 b5 = 1.330274429

 t = 1 / (1 + b0 * z)

 Φ_z = 1 - φ_z * (b1*t + b2*t**2 + b3*t**3 + b4*t**4 + b5*t**5)


/*
*The 68-95-99.7 (empirical) rule, or the 3-sigma rule*

 68.27% | probability of a position w/i &pm;1 std. dev.
 95.45% | probability of a position w/i &pm;2 std. devs.
 99.73% | probability of a position w/i &pm;3 std. devs.

*/
 2 * Φ_z - 1	// coverage, area between *μ - nσ* and *μ + nσ*
//`;

export {
  groupname, analysis1
};
