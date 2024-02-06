// Task 1: Create the displayInfo function 
function displayInfo(name, role) { console.log(`Name: ${name}, Role: ${role}`); }

// Task 2: Use call to invoke displayInfo with specific arguments 
displayInfo.call(null, "sam", "cloud Engineer");

// Task 3: Use apply to invoke displayInfo with arguments as an array
displayInfo.apply(null, ["rani", "Frontend developer"]);

// Task 4: Create the greet function
function greet() { console.log(`Hello, ${this.name}!`); }

// Task 5: Use bind to create a new function with a specific context


const user = { name: "arjun" };

const boundGreet = greet.bind(user);
boundGreet();

