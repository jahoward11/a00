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

 x1 = 1
 z1 = (x1 - μ) / σ	// ensure  z1 ≥ 0

 x2 = 2
 z2 = (x2 - μ) / σ	// ensure  z2 ≥ z1

 φx1 = 1 / (2 * Math.PI * Math.exp(z1**2))**0.5
 φx2 = 1 / (2 * Math.PI * Math.exp(z2**2))**0.5


/*
*Normal Distribution, Cumulative Density Function (CDF)*

 *Φ*(*x*)  =  ∫ *φ*(*x*) *dx*	CDF for a standard n.d.

*/
 b0 = 0.2316419
 b1 = 0.319381530
 b2 = -0.356563782
 b3 = 1.781477937
 b4 = -1.821255978
 b5 = 1.330274429

 t1 = 1 / (1 + b0 * z1)
 t2 = 1 / (1 + b0 * z2)

 $Φx1 = 1 - φx1 * (b1*t1 + b2*t1**2 + b3*t1**3 + b4*t1**4 + b5*t1**5)
 $Φx2 = 1 - φx2 * (b1*t2 + b2*t2**2 + b3*t2**3 + b4*t2**4 + b5*t2**5)

 $P1inv = 1 - $Φx1	// probability interval above x1
 $P2inv = 1 - $Φx2	// probability interval above x2
 $P1to2 = $Φx2 - $Φx1	// probability interval between x1 and x2


/*
*The 68-95-99.7 (empirical) rule, or the 3-sigma rule*

 68.27% | probability of a position w/i &pm;1 std. dev.
 95.45% | probability of a position w/i &pm;2 std. devs.
 99.73% | probability of a position w/i &pm;3 std. devs.

*/
 2 * $Φx1 - 1	// coverage, area between *μ - nσ* and *μ + nσ*
 2 * $Φx2 - 1

 2 * (1 - $Φx1)	// inverse coverage, 2 areas outside *μ - nσ* and *μ + nσ*
 2 * (1 - $Φx2)
//`;

const analysis2 = `/*
__Statistical Analysis Tools, part 2__

*Counting Methods, All Possible Scenarios*
 _n_ | sample total
 _k_ | amount selected
 *P* | Permutations
 *C* | Combinations

 selecting without replacement

       ~_n_~*P*~_k_~ =   ⬚͏  _n_! ∕ (_n_ - _k_)!		ordered selections

 (^_n_^~_k_~ ) = ~_n_~*C*~_k_~ = ⬚͏   _n_! ∕ _k_!(_n_ - _k_)!		unordered selections

 selecting with replacement
   _n_^_k_^			ordered selections
  (^_n_ + _k_ - 1^   ~_k_~	  ) 		unordered selections

*Discrete Random Variable*
 *X*   | a discrete r.v. (amount of test successes in sample)
 _x_   | one value in sample
 _μ_   | mean (average of all values)
 _σ_   | standard deviation
 *P*() | p.m.f., probability weight for each value in sample

 Expected value (mean), variance & std. dev. of discrete r.v.
 *E*(*X*) = _μ_~*X*~  = ^1^⁄~_n_~∑_x_~*i*~
 *V*(*X*) = _σ_²~*X*~ = ∑(_x_~*i*~ - _μ_~*x*~)²*P*(_x_~*i*~)
 _σ_~*X*~   = √*V*(*X*)

*Binomial Random Variable*
 _p_ | true population proportion of successes

 Probability, _k_ successes in _n_ attempts, given _p_
 *P*(_k_ in _n_) = (^_n_^~_k_~ )_p_^_k_^(1 - _p_)^_n_-_k_^

 Mean & std. dev. of binomial r.v.
 _μ_~*X*~ = _np_
 _σ_~*X*~ = √_np_(1 - _p_)

*Sampling Distributions*
 Pop.-proportion estimator _p̂_, mean & std. dev. of
 _p̂_ = *X*/_n_	sample fraction of successes
 _μ_~*p̂*~ = _p_
 _σ_~*p̂*~ = √_p_(1 - _p_)/_n_

 Sample mean _x̅_, mean & std. dev. of
 _x̅_ = ^1^⁄~_n_~∑_x_~*i*~
 _μ_~*x̅*~ = _μ_
 _σ_~*x̅*~ = _σ_/√_n_	standard error of the mean

*/`;

export {
  groupname, analysis1, analysis2
};
