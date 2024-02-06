
/* 3. Create a Map to store contact information (name, age, email, location) retrieve contact details by name. */


// Define a new Map for storing contact details
const contactMap = new Map();

// Adding contacts to the Map with updated information
contactMap.set("David", {
  age: 29,
  email: "david@example.com",
  location: "New York"
});

contactMap.set("Emily", {
  age: 32,
  email: "emily@example.com",
  location: "London"
});

contactMap.set("Charlie", {
  age: 41,
  email: "charlie@example.com",
  location: "Paris"
});

// Function to retrieve contact details based on name (unchanged)
function getContact(name) {
  return contactMap.get(name);
}
console.log(getContact("Emily"));