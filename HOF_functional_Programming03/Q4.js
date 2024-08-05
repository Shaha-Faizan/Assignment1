let expenses = [
    { amount: 100, category: "Utilities" },
    { amount: 200, category: "Groceries" },
    { amount: 50, category: "Entertainment" },
];

let GroceriesExpenses = expenses.filter((expenses) => expenses.category === "Groceries");
console.log(GroceriesExpenses);
