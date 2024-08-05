function generateRandomNumber() {
    const min = 10; // Set minimum number
    const max = 100; // Set maximum number
    const random = Math.floor(Math.random() * (max - min + 1)) + min; // Generate random number
    console.log(`Random number: ${random}`);
  }
  
  // Run the function every 2 seconds using setInterval
  setInterval(generateRandomNumber, 2000);
  