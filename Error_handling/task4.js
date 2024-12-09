// 3 You are developing a payment processing module for an e-commerce platform. Implement error
// handling for the payment transaction process.Create a function processPayment that simulates
// processing a payment transaction. The function should take payment details (amount, card number,
// expiration date) as parameters and throw errors under certain conditions


//  If the payment amount is not a positive number, throw an error indicating "Invalid payment amount.
//  If the card number is not provided or is not a valid credit card number, throw an error indicating "Invalid
// card number.
//  If the expiration date is not provided or is in the past, throw an error indicating "Invalid expiration date."



function processPayment(amount, cardNumber, expirationDate) {
    try {
        if (typeof amount !== "number" || amount <= 0) {
            throw new Error("Invalid payment amount.");
        }
        const cardNumberRegex = /^\d{16}$/; // Basic 16-digit validation
        if (!cardNumber || !cardNumberRegex.test(cardNumber)) {
            throw new Error("Invalid card number.");
        }
        const currentDate = new Date();
        const expDate = new Date(expirationDate);
        if (!expirationDate || expDate <= currentDate) {
            throw new Error("Invalid expiration date.");
        }
        console.log("Payment processed successfully!");
    } catch (error) {
        console.error(error.message);
    }
}


processPayment(100, "1234567812345678", "2025-12");
processPayment(-100, "1234567812345678", "2025-12"); 
processPayment(100, "1234", "2025-12"); 
