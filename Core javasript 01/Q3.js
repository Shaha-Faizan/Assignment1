/* Q3. Use a nested ternary operator to check that a number is positive, negative or zero. You have to print
“positive” if the number is positive and similarly for negative and zero also.*/
const num = 10;
num > 0
    ? console.log("positive")
    : num < 0
        ? console.log("Nagetive")
        : console.log("Zero");