/* 2. The following is an array of 10 students ages:

 => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

Sort the array and find the min and max age.

Find the median age (one middle item or two middle items divided by two)

Find the average age (all items divided by number of items)

Find the range of the ages (max minus min)

Compare the value of (min-average) and (max-average), use abs() method */
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array and find the min and max age
ages.sort((a, b) => a - b);
console.log(ages);

const min_age = ages[0];
const max_age = ages[ages.length - 1];

console.log("Minimum age is: " + min_age);
console.log("Maximum age is: " + max_age);

// Find median Age
let medianAge;
if (ages.length % 2 === 0) {
    const median1 = ages[Math.floor(ages.length / 2) - 1];
    const median2 = ages[Math.floor(ages.length / 2)];
    medianAge = (median1 + median2) / 2;
} else {
    medianAge = ages[Math.floor(ages.length / 2)];
}

console.log("Median age is: " + medianAge);

// Find the Average age
const sumOfages = ages.reduce((sum, age) => sum + age, 0);
const average = sumOfages / ages.length;
console.log("Average age is: " + average);

// Find Range
const range = max_age - min_age;
console.log("Range is: " + range);

// Compare the value of (min - average) and (max - average) using abs() method
const minimumDifference = Math.abs(min_age - average);
const maximumDifference = Math.abs(max_age - average);

console.log("Minimum Average Difference: ", minimumDifference);
console.log("Maximum Average Difference: ", maximumDifference);
