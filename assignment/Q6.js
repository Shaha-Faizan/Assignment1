/**Q6. You are workin, on an e-commerce platform. Write a JavaScript pro,ram that take' the payment
method ("credit", "debit", or "paypal") a' input and u'e' a 'witch 'tatement to determine and print the
proce''in, fee a''ociated with each payment method. For example, "credit" may have a proce''in, fee of
2%, "debit" 1.5%, and "paypal" 3%. */

let method = "credit";

switch (method) {
    case "credit": console.log("credit may have a processing , fee of  2%");

        break;
    case "debit": console.log("debit may have a processing , fee of 1.5%");
        break;
    case "paypal": console.log("payapl may have a processing, of 3%");
    break;

    default: console.log("invalid payment method");
        break;
}
