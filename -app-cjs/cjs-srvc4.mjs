/* JavaScript module */

const groupname = "lifescience";

const apbiology1 = `
// __AP BIOLOGY EQUATIONS AND FORMULAS__

// *Metric Prefixes*
 // __Factor	Prefix	Symbol__
 //  10⁹	giga	G
 //  10⁶	mega	M
 //  10³	kilo	k
 // 10⁻¹	deci	d
 // 10⁻²	centi	c
 // 10⁻³	milli	m
 // 10⁻⁶	micro	*μ*
 // 10⁻⁹	nano	n
 // 10⁻¹²	pico	p

// *Statistical Analysis and Probability*
 // *x̅* | sample mean
 // *n* | sample size
 // *s* | sample standard deviation
     //   (i.e., the sample-based estimate of
     //   the standard deviation of the population)
 // *o* | observed results
 // *e* | expected results
 //  ∑ | sum of all

 // Mode   | value that occurs most frequently in a data set
 // Median | middle value that separates the greater and
          // lesser halves of a data set
 // Mean   | sum of all data points divided by number of data points
 // Range  | value obtained by subtracting the smallest observation
          // (sample minimum) from the greatest (sample maximum)

// __Mean__
 // *x̅* = ^1^⁄~*n*~∑*x*~i~

// __Standard Deviation__
 //
 // *s* = √   ∑(*x*~i~ - *x̅*)² ⟋ &nbsp; *n* - 1  &nbsp;
 //
// __Standard Error of the Mean__
 //
 // *SE~x̅~* = *s* ⟋ √*n*
 //
// __Chi-Square__
 //
 // *χ*² = ∑   (*o* - *e*)² ⟋ &nbsp;  *e*   &nbsp;
 //
// __Chi-Square Table__
 // *p*    | Degrees of Freedom
 // v̲a̲l̲ ̲ |  ̲ ̲1̲ ̲ ̲  ̲ ̲2̲ ̲ ̲  ̲ ̲3̲ ̲ ̲  ̲ ̲4̲ ̲ ̲  ̲ ̲5̲ ̲ ̲  ̲ ̲6̲ ̲ ̲  ̲ ̲7̲ ̲ ̲  ̲ ̲8̲ ̲ ̲ 
 // 0.05 |  3.84  5.99  7.81  9.49 11.07 12.59 14.07 15.51 
 // 0.01 |  6.63  9.21 11.34 13.28 15.09 16.81 18.48 20.09 

 // Degrees of freedom are equal to the number of
 // distinct possible outcomes minus one.

// __Laws of Probability__
 // If A and B are mutually exclusive, then:
	// *P*(A or B) = *P*(A) + *P*(B)

 // If A and B are independent, then:
	// *P*(A and B) = *P*(A) × *P*(B)

// __Hardy-Weinberg Equations__
 // *p* | frequency of allele 1 in a population
 // *q* | frequency of allele 2 in a population

 // *p*² + 2&zwj;*pq* + *q*² = 1
 // *p* + *q* = l
//
`;

export {
  groupname, apbiology1
};
