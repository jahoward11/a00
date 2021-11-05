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

 $P_̃1inv = 1 - $Φx1  	// probability interval above x1
 $P_̃2inv = 1 - $Φx2  	// probability interval above x2
 $P_̃1to2 = $Φx2 - $Φx1	// probability interval between x1 and x2


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

       ~_n_~*P*~_k_~ =   ⬚͏  _n_! ⟋ (_n_ - _k_)!		ordered

 (^_n_^~_k_~ ) = ~_n_~*C*~_k_~ = ⬚͏   _n_! ⟋ _k_!(_n_ - _k_)!		unordered

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

 p_̃B = 0.5

 $P_̃B = $Combs * p_̃B**k * (1 - p_̃B)**(n - k)
 $μ_̃B = n * p_̃B
 $σ_̃B = Math.sqrt(n * p_̃B * (1 - p_̃B))


/*
__*Geometric Random Variable*__
 *G*  | a quasi-binomial r.v. without set number of trials

 Probability, success in _n_ attempts, given _p_
 *P*(*G* = _n_) = _p_(1 - _p_)^_n_-1^

 Mean &amp; std. dev. of geometric r.v. *G*
 _μ_~*G*~ = 1 / _p_
 _σ_~*G*~ = ^1^⁄~_p_~√(1 - _p_)
*/

 p_̃G = 0.5

 $P_̃G = p_̃G * (1 - p_̃G)**(n - 1)
 $μ_̃G = 1 / p_̃G
 $σ_̃G = Math.sqrt(1 - p_̃G) / p_̃G


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

 p = 0.5
 μ = 0
 σ = 1
 X = k

 $p̂ = X / n
 $μ_̃p̂ = p
 $σ_̃p̂ = Math.sqrt(p * (1 - p) / n)

 $x̅ = X
 $μ_̃x̅ = μ
 $σ_̃x̅ = σ / n**0.5
//`;

const analysis3 = `/*
__Statistical Analysis Tools, part 3__

__*Hypothesis Testing & Statistical Significance*__
 _z_  | *z*-score, a value's horizontal distance from mean,
      as multiplier of std. dev., along &#x6e;.d. (bell) curve
 _t_  | *t*-score, a *z*-score that is calculated on a student-*t* dist.,
      as for significance tests of low sample size (_n_ < 30)
 _df_ | degrees of freedom = sample size _n_ - 1

 *Pv* | *P*-value, probability of values at least as extreme as *z*-score
      = area(s) under std. &#x6e;.d. curve beyond one/both± *z*-score(s)
 *α*  | complement of confidence level = left/right/2-tail area(s)

 *H*~0~ | null hypothesis: unchanged/expected state, described with
      expression of equality, reject/fail-to-reject test subject
 *H*~1~ | alternative hypothesis: unusual state, described with
      expression of inequality, call-to-action trigger (a.k.a., *H*~a~)
*/

 try { jStat } catch { scrInj("../-res-js/jstat-tdist.js") }

 $α = (1 - 0.950).toFixed(3)	// for 95% confidence level

 n = 16
 df = n - 1

 p0 = 0.8
 p̂ = 0.85

 μ0 = 68
 x̅ = 67
 s_̃x = 2

/*
*Confidence Interval, _z_ interval (statistic ± margin of error)*

 _p̂_ ± _z_^*^ √  _p̂_(1 - _p̂_) ⟋ ⬚͏   _n_  ⬚͏		= (statistic) ± (^critical^~value~      ) × (^std. error^~of statistic~	     )

*/
 z_̂cv = jStat.normal.inv(0.95, 0, 1)	// for 90% conf. int.

 p̂ - z_̂cv * Math.sqrt(p̂ * (1 - p̂) / n)
 p̂ + z_̂cv * Math.sqrt(p̂ * (1 - p̂) / n)

/*
*Confidence Interval, one-sample _t_ interval (est. _μ_ w/unk. _σ_)*

 _x̅_ ± _t_^&ast;^	_s_~*x*~ ⟋ √_n_		= (statistic) ± (^critical^~value~      ) × (^std. dev.^~of statistic~	     )

*/
 t_̂cv = jStat.studentt.inv(0.975, _.df)	// for 95% conf. int.

 x̅ - t_̂cv * s_̃x / n**0.5
 x̅ + t_̂cv * s_̃x / n**0.5

/*
*Significance Test, with test statistic _z_*
 *H*~0~: *p* = 0.8	*H*~1~: *p* > 0.8

 _z_ =  ⬚͏   _p̂_ - _p_₀ ⟋ √_p_₀(1 - _p_₀)/_n_			=  ~statistic - parameter~ ⟋ ^std. dev. of statistic^

*/
 $z = (p̂ - p0) / Math.sqrt(p0 * (1 - p0) / n)
 jStat.zscore(_.p̂, _.p0, Math.sqrt(p0 * (1 - p0) / n))
		// *z*, alternate method
 $Pv_̃z = jStat.normal.cdf(-$.z, 0, 1)
 $Pv_̃z < $α	// reject *H*~0~ ...?

/*
*Significance Test, with test statistic _t_*
 *H*~0~: *μ* = 68	*H*~1~: *μ* < 68

 _t_ =	 ⬚͏_x̅_ - _μ_₀ ⟋ ⬚͏_s_~*x*~/√_n_ ⬚͏		=  ~statistic - parameter~ ⟋ ^std. err. of statistic^

*/
 $t = (x̅ - μ0) / (s_̃x / n**0.5)
 jStat.tscore(_.x̅, _.μ0, _.s_̃x, _.n)
		// *t*, alternate method
 $Pv_̃t = jStat.studentt.cdf($.t, _.df)
 $Pv_̃t < $α	// reject *H*~0~ ...?

/*
*Type I Error*
 - rejecting a true *H*~0~
 - mitigated by decreasing _α_

*Type II Error*
 - failing to accept a true *H*~1~
 - mitigated by increasing _α_ &/or _n_
 - reduced as null/alt. parameters are naturally more distant

*Power*
 - probability of not making a type II error
   *P*(rejecting *H*~0~ | *H*~0~ false) = 1 - *P*(type II error)
*/
//`

export {
  groupname, analysis1, analysis2, analysis3
};
