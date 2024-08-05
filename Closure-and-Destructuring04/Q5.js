function shopping() {
    
    let cartItems = [];

    return {
        
        getItems: function() {
            return cartItems;
        },

        // Method to add an item to the cart
        addToCart: function(productId, name, quantity, price) {
            
            const index = cartItems.findIndex(item => item.productId === productId);

            if (index > -1) {
                
                cartItems[index].quantity += quantity;
                cartItems[index].price += price
            } else {
                
                cartItems.push({ productId, name, quantity, price });
            }
        },
        removeItem : function(productId){
            const index = cartItems.findIndex(item => item.productId)
            cartItems.splice(index,1)
        }
    };
}


let cart = shopping();

// Add items to the cart
cart.addToCart(1, 'Mobile', 2, 20000);
cart.addToCart(2, 'Laptop', 1, 60000);
cart.addToCart(1, 'Mobile', 3, 30000);

// call remove function for remove items
cart.removeItem(1)

console.log(cart.getItems());
