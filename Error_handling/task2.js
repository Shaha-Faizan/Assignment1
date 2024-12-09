// Task 2: Checkout Function

// Create a function checkout that simulates the checkout process. This function should throw an error if the cart
// is empty, indicating "Cart is empty. Add items before checkout."


function checkout(cart) {
    try {
        if (!cart || cart.length === 0) {
            throw new Error("Cart is empty. Add items before checkout.");
        }
        console.log("Proceeding to checkout...");
    } catch (error) {
        console.error(error.message);
    }
}

// checkout([]); 
checkout([{ name: "Laptop", price: 1000, quantity: 1 }]); 
