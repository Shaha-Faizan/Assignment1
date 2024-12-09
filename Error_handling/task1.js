/*  1.  You are developing the error handling mechanism for an online shopping cart application. The
application allows users to add products to their cart and proceed to checkout. Implement error
handling to address different types of errors that might occur during the shopping process.
*/

// Task 1: Add Product to Cart Function

// Create a function addToCart that simulates adding a product to the shopping cart. The function should take
// the product details (name, price, quantity) as parameters and throw errors under certain conditionst
// If the product name is not provided, throw an error indicating "Product name is required.
// If the product price is not a positive number, throw an error indicating "Invalid product price.
// If the quantity is not a positive integer, throw an error indicating "Invalid quantity."


function addToCart(productName, productPrice, quantity) {
    try {
        if (!productName) {
            throw new Error("Product name is required.");
        }
        if (typeof productPrice !== "number" || productPrice <= 0) {
            throw new Error("Invalid product price.");
        }
        if (!Number.isInteger(quantity) || quantity <= 0) {
            throw new Error("Invalid quantity.");
        }
        console.log(`${quantity} x ${productName} added to the cart at $${productPrice} each.`);
    } catch (error) {
        console.error(error.message);
    }
}

addToCart("Laptop", 1000, 2); 
// addToCart("", 1000, 2); 
