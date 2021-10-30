/* JavaScript module */

const groupname = "statistics";

const analysis1 = `/*
__Statistical Analysis Tools__

 _μ_  | mean (average of all values)
 _σ_  | standard deviation (measure of spread)

 _n_  | sample total count
 _x_,_y_| one value in sample
 _s_  | sample standard deviation


__*Z-score*__
 _z_  | how many standard deviations is a value away from the mean?

 *z*  =  *x - μ* ⟋ *⬚͏ σ ⬚͏*	      =  ~data point - mean~ ⟋ ⬚͏  ^std. dev.^  ⬚͏


__*Correlation Coefficient*__
 _r_  | how closely aligned are plot points to linear regression line?

 *r*  =  ⬚͏ 1 ⟋ *n* - 1	     ∑ *z~xi~ z~yi~*  =  ⬚͏ 1 ⟋ *n* - 1	∑   [  *x~i~* - *x̅* ⟋ ⬚͏ *s~x~* ⬚͏      ] [  *y~i~* - *y̅* ⟋ ⬚͏ *s~y~* ⬚͏      ]


__*Normal Distribution, Probability Density Function (PDF)*__

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

 φx1 = 1 / Math.sqrt(2 * Math.PI * Math.exp(z1**2))
 φx2 = 1 / Math.sqrt(2 * Math.PI * Math.exp(z2**2))


/*
__*Normal Distribution, Cumulative Density Function (CDF)*__

 *P*(*x*)  =  ∫ *p*(*x*) *dx*

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
__*Std. N.D., the 68-95-99.7 (empirical) rule, or the 3-sigma rule*__

 68.27% | probability of a position w/i &pm;1 std. dev.
 95.45% | probability of a position w/i &pm;2 std. devs.
 99.73% | probability of a position w/i &pm;3 std. devs.
*/

 // coverage, area between *μ - zσ* and *μ + zσ*
 2 * $Φx1 - 1
 2 * $Φx2 - 1

 // inverted coverage, 2 areas outside *μ - zσ* and *μ + zσ*
 2 * (1 - $Φx1)
 2 * (1 - $Φx2)


// __*Std. N.D., calculate value* z *given CDF probability* p__

 p = 0.995		// ensure  0.5 < p < 0.9998

 $z = 0; zmin = 0; zmax = 3.5; ""
 φz = () => 1 / (2 * Math.PI * Math.exp($z**2))**0.5; ""
 tz = () => 1 / (1 + _.b0 * $z); ""
 Φz = (φ, t) => 1 - φ * (_.b1*t + _.b2*t**2 + _.b3*t**3 + _.b4*t**4 + _.b5*t**5); ""
 while (zmax - zmin > 0.000001) { Φz(φz(), tz()) > p ? zmax = $z : zmin = $z; $z = (zmax + zmin) / 2; }
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
 _s_  | sample standard deviation

 _z_  | *z*-score, a value's horizontal distance from mean,
      as multiplier of std. dev., along &#x6e;.d. (bell) curve
 *P*()| probability mass/density/dist. function (PMF or PDF),
      e.g., relative frequency of given value from sample


__*Counting Methods, all possible scenarios*__
 *P*  | Permutations
 *C*  | Combinations

 selections without replacement

       ~_n_~*P*~_k_~ =   ⬚͏  _n_! ∕ (_n_ - _k_)!		ordered

 (^_n_^~_k_~ ) = ~_n_~*C*~_k_~ = ⬚͏   _n_! ∕ _k_!(_n_ - _k_)!		unordered

 selections with replacement
   _n_^_k_^			ordered
  (^_n_ + _k_ - 1^   ~_k_~	  ) 		unordered
*/

 n = 5
 k = 3

 fctl = c => Array.from(Array(c).keys()).reduce((a, b) => a * (1 + b), 1); ""

 $Perms = fctl(n) / fctl(n - k)
 $Combs = fctl(n) / fctl(k) / fctl(n - k)
 replo = n**k
 replu = fctl(n + k - 1) / fctl(k) / fctl((n + k - 1) - k)


/*
__*Statistic (from samples) vs. Parameter (of population)*__

 __sample statistic__	__population parameter__
 _x̅_ = ^1^⁄~_n_~∑_x_~*i*~		_μ_ = ^1^⁄~_N_~∑_x_~*i*~
 _s_ = √^1^⁄~_n_-1~∑(_x_~*i*~ - _x̅_)²	_σ_ = √^1^⁄~_N_~∑(_x_~*i*~ - _μ_)²
 _z_ = (_x_ - _x̅_) / _s_	_z_ = (_x_ - _μ_) / _σ_


__*Discrete Random Variable*__
 *X*  | anticipated number of test successes in sample

 Expected value (mean), variance &amp; std. dev. of discrete r.v. *X*
 *E*(*X*) = _μ_~*X*~  = ^1^⁄~_n_~∑_x_~*i*~
 *V*(*X*) = _σ_²~*X*~ = ∑(_x_~*i*~ - _μ_~*x*~)²*P*(_x_~*i*~)
 	_σ_~*X*~  = √*V*(*X*)


__*Binomial Random Variable*__
 *B*  | a discrete r.v. that meets binomial conditions

 Probability, _k_ successes out of _n_ attempts, given _p_
 *P*(*B* = _k_) = (^_n_^~_k_~ )_p_^_k_^(1 - _p_)^_n_-_k_^

 Mean &amp; std. dev. of binomial r.v. *B*
 _μ_~*B*~ = _np_
 _σ_~*B*~ = √_np_(1 - _p_)
*/

 pB = 0.5

 $PB = $Combs * pB**k * (1 - pB)**(n - k)
 $μB = n * pB
 $σB = Math.sqrt(n * pB * (1 - pB))


/*
__*Geometric Random Variable*__
 *G*  | a quasi-binomial r.v. without set number of trials

 Probability, success in _n_ attempts, given _p_
 *P*(*G* = _n_) = _p_(1 - _p_)^_n_-1^

 Mean &amp; std. dev. of geometric r.v. *G*
 _μ_~*G*~ = 1 / _p_
 _σ_~*G*~ = ^1^⁄~_p_~√(1 - _p_)
*/

 pG = pB

 $PG = pG * (1 - pG)**(n - 1)
 $μG = 1 / pG
 $σG = Math.sqrt(1 - pG) / pG


/*
__*Sampling Distributions*__
 Pop.-prop. estimator _p̂_――mean &amp; std. dev. of
 _p̂_ = *X* / _n_	sample fraction of successes
 _μ_~*p̂*~ = _p_
 _σ_~*p̂*~ = √_p_(1 - _p_)/_n_

 All samples' means _x̅_――mean &amp; std. dev. of
 _x̅_ = ^1^⁄~_n_~∑_x_~*i*~
 _μ_~*x̅*~ = _μ_
 _σ_~*x̅*~ = _σ_ / √_n_	standard error of the mean
*/

 p = pB
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
