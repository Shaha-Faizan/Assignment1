let expenses = [
    { amount: 100, category: "Utilities" },
    { amount: 200, category: "Groceries" },
    { amount: 50, category: "Entertainment" },
];

let total = expenses.reduce((sum,expenses) => sum + expenses.amount,0);
console.log("The total expenses is ", total)