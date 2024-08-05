let expenses = [
    { amount: 100, category: "Utilities" },
    { amount: 200, category: "Groceries" },
    { amount: 50, category: "Entertainment" },
];
let expensesWithTax = expenses.map((expenses) => {
    let tax = expenses.amount * 0.1;
    return { expenses, tax: tax };
});
console.log(expensesWithTax);
console.log(expenses);