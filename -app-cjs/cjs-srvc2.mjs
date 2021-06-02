/* JavaScript module */

const groupname = "engineering"

const area = `
// *Surface Area*
// Units must all be the same (e.g., all in inches, or all in km, etc.)

// __KEYS__
 // A | area
 // l | length
 // w | width

l = 25 // ft
w = 15 // ft
$A = l * w // sq-ft
`;

const vol = `
// *Volume of Space*
// Units must all be the same (e.g., all in inches, or all in km, etc.)

// __KEYS__
 // V | volume
 // l | length
 // w | width
 // h | height

l = 25 // ft
w = 15 // ft
h = 10 // ft
$V = l * w * h // cu-ft
`;

export {
  groupname, area, vol
};
