/* JavaScript module */

const groupname = "statistics";

const analysis1 = `/*
__Statistical Analysis Tools__

 _μ_  | mean (average of all values)
 _σ_  | standard deviation (measure of spread)

 _n_  | sample total count
 _x_,_y_| one value in sample
 _s_  | sample std. dev.


*Z-score*
 *z*  | how many standard deviations is a value away from the mean?

 *z*  =  *x - μ* ⟋ *⬚͏ σ ⬚͏*	      =  ~data point - mean~ ⟋ ⬚͏  ^std. dev.^  ⬚͏


*Correlation Coefficient*
 *r*  | how closely aligned are plot points to linear regression line?

 *r*  =  ⬚͏ 1 ⟋ *n* - 1	     ∑ *z~xi~ z~yi~*  =  ⬚͏ 1 ⟋ *n* - 1	∑   [  *x~i~* - *x̅* ⟋ ⬚͏ *s~x~* ⬚͏      ] [  *y~i~* - *y̅* ⟋ ⬚͏ *s~y~* ⬚͏      ] 


*Normal Distribution, Probability Density Function (PDF)*

 *p*(*x*)  =   ⬚͏1 ⟋ *σ*√2*π*	exp[  -(*x - μ*)² ⟋ ⬚͏  2*σ*²  ⬚͏	     ] 

       =   ⬚͏  1 ⟋ *σ*√2*π*ℯ^*z*²^

 *φ*(*x*)  =    ⬚͏ 1 ⟋ √2*π*ℯ^*z*²^		PDF for a std. n.d.

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

 *Φ*(*x*)  =  ∫ *φ*(*x*) *dx*	CDF for a std. n.d.
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

 // coverage, area between *μ - zσ* and *μ + zσ*
 2 * $Φx1 - 1
 2 * $Φx2 - 1

 // inverse coverage, 2 areas outside *μ - zσ* and *μ + zσ*
 2 * (1 - $Φx1)
 2 * (1 - $Φx2)
//`;

const analysis2 = `/*
__Statistical Analysis Tools, part 2__

 _N_  | population total count
 _p_  | true population proportion of successes
 _μ_  | mean (average of all values)
 _σ_  | standard deviation (measure of spread)

 _n_  | sample total count
 _k_  | number selected from sample
 _x_  | one value in sample
 _s_  | sample std. dev.

 _z_  | *z*-score, a value's horizontal distance from mean,
      as multiple of std. dev., along &#x6e;.d. (bell) curve
 *P*()| probability mass/density/dist. function (PMF or PDF),
      e.g., relative frequency of given value from sample


*Counting Methods, all possible scenarios*
 *P*  | Permutations
 *C*  | Combinations

 selecting without replacement

       ~_n_~*P*~_k_~ =   ⬚͏  _n_! ∕ (_n_ - _k_)!		ordered selections

 (^_n_^~_k_~ ) = ~_n_~*C*~_k_~ = ⬚͏   _n_! ∕ _k_!(_n_ - _k_)!		unordered selections

 selecting with replacement
   _n_^_k_^			ordered selections
  (^_n_ + _k_ - 1^   ~_k_~	  ) 		unordered selections
*/

 n = 5
 k = 3

 fctl = c => Array.from(Array(c).keys()).reduce((a, b) => a * (1 + b), 1); "";

 $Perms = fctl(n) / fctl(n - k)
 $Combs = fctl(n) / fctl(k) / fctl(n - k)
 replO = n**k
 replU = fctl(n + k - 1) / fctl(k) / fctl((n + k - 1) - k)


/*
*Statistic (from samples) vs. Parameter (of population)*
 __sample statistic__	__population parameter__
 _x̅_ = ^1^⁄~_n_~∑_x_~*i*~		_μ_ = ^1^⁄~_N_~∑_x_~*i*~
 _s_ = √^1^⁄~_n_-1~∑(_x_~*i*~ - _x̅_)²	_σ_ = √^1^⁄~_N_~∑(_x_~*i*~ - _μ_)²
 _z_ = (_x_ - _x̅_) / _s_	_z_ = (_x_ - _μ_) / _σ_


*Discrete Random Variable*
 *X*  | number of test successes in sample

 Expected value (mean), variance &amp; std. dev. of discrete r.v.
 *E*(*X*) = _μ_~*X*~  = ^1^⁄~_n_~∑_x_~*i*~
 *V*(*X*) = _σ_²~*X*~ = ∑(_x_~*i*~ - _μ_~*x*~)²*P*(_x_~*i*~)
 	_σ_~*X*~  = √*V*(*X*)


*Binomial Random Variable*
 *X*  | a discrete r.v. that meets binomial conditions

 Probability, _k_ successes out of _n_ attempts, given _p_
 *P*(*X* = _k_) = (^_n_^~_k_~ )_p_^_k_^(1 - _p_)^_n_-_k_^

 Mean &amp; std. dev. of binomial r.v.
 _μ_~*X*~ = _np_
 _σ_~*X*~ = √_np_(1 - _p_)
*/

 p = 0.5

 $PX = $Combs * p**k * (1 - p)**(n - k)
 $μX = n * p
 $σX = Math.sqrt(n * p * (1 - p))


/*
*Sampling Distributions*
 Pop.-prop. estimator _p̂_――mean &amp; std. dev. of
 _p̂_ = *X*/_n_	sample fraction of successes
 _μ_~*p̂*~ = _p_
 _σ_~*p̂*~ = √_p_(1 - _p_)/_n_

 All samples' means _x̅_――mean &amp; std. dev. of
 _x̅_ = ^1^⁄~_n_~∑_x_~*i*~
 _μ_~*x̅*~ = _μ_
 _σ_~*x̅*~ = _σ_/√_n_	standard error of the mean
*/

 μ = 0
 σ = 1
 X = k

 $p̂ = X / n
 $μp̂ = p
 $σp̂ = Math.sqrt(p * (1 - p) / n)

 $μx̅ = μ
 $σx̅ = σ / n**0.5
//`;

export {
  groupname, analysis1, analysis2
};
