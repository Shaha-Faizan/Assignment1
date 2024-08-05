const order = [
    { name: "Laptop", price: 120000 },
    { name: "mobile", price: 70000 },
    { name: "mobile charger", price: 1500 },
    { name: "laptop charger", price: 10500 }
];
let total = 0;
order.forEach((data) => (total += data.price));
console.log(`Total price is Rs ${total}`);