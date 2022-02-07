/* JavaScript module */

const groupname = "finance"

const homeloan = `
// __Home Loan Scenarios__

// __KEY__
 // *rate* | monthly (periodic) interest rate
 // *ppmt* | monthly (periodic) payment amount

 // *pval* | present (beginning) value of loan (principal)

 // *fval* | future (ending) value of loan
 // *fint* | total, future interest paid

 // *nper* | number of monthly payments to make (periods)
 // *nyrs* | number of years of payments
 // *dbeg* | beginning date
 // *dend* | ending date

// __GIVEN VALUE (*key~0~*)__
 rate0 = 0.035 / 12	//yearly interest rate ÷ 12 ^mos^/~yr~
 ppmt0 = 0

 pval0 = 250000

 fval0 = 0

 nper0 = 30 * 12   	//number of years × 12 ^mos^/~yr~
 dbeg0 = new Date("2021-07-01")

// __CALCULATED VALUE (*key~1~*)__
 ppmt1 = rate0 * pval0 / [1 - Math.pow(1 + rate0, -nper0)]
 $ppmt1 = !nper0 ? "" : (Math.round(ppmt1 * 100) / 100).toFixed(2)

 pval1 = [(ppmt0 || $ppmt1) / rate0] * [1 - Math.pow(1 + rate0, -nper0)]
 $pval1 = !nper0 ? "" : Math.round(pval1).toFixed(2)

 fval1 = pval0 * Math.pow(1 + rate0, nper0) - (ppmt0 / rate0) * [Math.pow(1 + rate0, nper0) - 1]
 fint1 = (ppmt0 || $ppmt1) * nper0 - (pval0 || $pval1)
 $fint1 = !nper0 ? "" : (Math.round(fint1 * 100) / 100).toFixed(2)

 nper1 = - Math.log(1 - rate0 * (pval0 || $pval1) / (ppmt0 || $ppmt1)) / Math.log(1 + rate0)
 $nper1 = nper0 || Math.round(nper1)
 nyrs1 = Math.round($nper1 * 10 / 12) / 10
 dend1 = new Date(new Date(dbeg0).getTime() + [(nper0 || $nper1) + 1] * 30.35 * 24 * 60 * 60 * 1000)

// __QUICK-START GUIDE__
// 1. To adjust the calculated *Monthly Payment* ($ppmt1)
   // First, set the given monthly payment (ppmt0) to zero.
   // Then, provide or change:
   // - the given interest rate (rate0)
   // - the given, beginning loan value (pval0)
   // - the given, total number of payments (nper0)

// 2. To adjust the calculated, *Present Loan Value* ($pval1)
   // First, set the given, beginning loan value (pval0) to zero.
   // Then, provide or change:
   // - the given interest rate (rate0)
   // - the given monthly payment (ppmt0)
   // - the given, total number of payments (nper0)

// 3. To adjust the calculated, total *Number of Payments* ($nper1)
   // First, set the given number of payments (nper0) to zero.
   // Then, provide or change:
   // - the given interest rate (rate0)
   // - the given monthly payment (ppmt0)
   // - the given, beginning loan value (pval0)
//`;

export {
  groupname, homeloan
};
