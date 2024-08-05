function shopping() {
    let cartItems = ['mobile', 'laptop'];
    return {
        getItems: function() {
            return cartItems;
        }
    };
}

let items = shopping(); 
console.log(items.getItems());
