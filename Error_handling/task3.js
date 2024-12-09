// 2  A You are working on a user authentication module for a web application. Implement error handling for the
// login process.Create a function login that simulates the user login process. The function should take the
// username and password as parameters and throw errors under certain conditions


// ' If the username is not provided, throw an error indicating "Username is required.
// ' If the password is not provided, throw an error indicating "Password is required.
// ' If the username and password do not match any valid credentials, throw an error indicating "Invalid
// username or password."


function login(username, password) {
    const validCredentials = { username: "user", password: "pass123" };

    try {
        if (!username) {
            throw new Error("Username is required.");
        }
        if (!password) {
            throw new Error("Password is required.");
        }
        if (username !== validCredentials.username || password !== validCredentials.password) {
            throw new Error("Invalid username or password.");
        }
        console.log("Login successful!");
    } catch (error) {
        console.error(error.message);
    }
}


login(); 
login("user", "wrongPass"); 
login("user", "pass123"); 
