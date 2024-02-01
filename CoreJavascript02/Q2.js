

const ages = [ 19,22,19,24,20,25,26,24,25,24]

/** sort the array and find the min and max age */

ages.sort((a,b) => a-b);   // for sorting array
console.log(ages);

const min_age = ages[0];    // for minimum age
const max_age = ages[ages.length-1]  // for maximum age 

console.log("Minimum age is:"+ min_age)
console.log("maximum age is:"+ max_age)