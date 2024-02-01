/**You're creating a basic login system. Make a login function with two things: a username and a
password. Check if the username is "admin" and the password is "12345". If they're both correct, show "Login
successful"; if not, show "Invalid credentials." */

let username = "Admin";
let password = "12345";

if(username === "Admin" && password === "12345"){
    console.log("Login Successful")
}
else{
    console.log("Invalid credentials")
}