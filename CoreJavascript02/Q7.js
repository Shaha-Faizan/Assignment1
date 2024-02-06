// Create the calculator object with basic arithmetic methods
const calculator = {
    add(num1, num2) {
        return num1 + num2;
    },
    subtract(num1, num2) {
        return num1 - num2;
    },
    multiply(num1, num2) {
        return num1 * num2;
    },
    calculate(operation, num1, num2) {
        const result = this[operation](num1, num2); // Call the appropriate method dynamically
        return result;
    }
};

// Use call to perform addition
const additionResult = calculator.calculate.call(calculator, "add", 5, 3);
console.log("Addition result:", additionResult);

// Use apply to perform multiplication with arguments as an array
const multiplicationResult = calculator.calculate.apply(calculator, ["multiply", 4, 7]);
console.log("Multiplication result:", multiplicationResult);

// Create the discountCalculator object
const discountCalculator = {
    discountPercentage: 10,
    applyDiscount(price) {
        const discountAmount = price * (this.discountPercentage / 100);
        const discountedPrice = price - discountAmount;
        return discountedPrice;
    }
};

// Use bind to create a reusable function for applying discounts
const calculateDiscount = discountCalculator.applyDiscount.bind(discountCalculator);

const discountedPrice = calculateDiscount(100);
console.log("Discounted price:", discountedPrice);
