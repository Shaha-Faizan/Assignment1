const uniqueNum = new Set([8, 6, 5, 2, 9, 4, 7]); // Replace with your unique numbers
const SquareNumbers = new Map();

uniqueNum.forEach(number => SquareNumbers.set(number, number * number));

console.log("Unique Numbers:");
console.log(Array.from(uniqueNum).join(", ")); // Use comma as separator for clarity

console.log("\nNumber-Square Map:");
SquareNumbers.forEach((square, number) => console.log(`${number}: ${square}`)); // Use template literals for formatting
