/**Q7. You are building a weather application. Write a JavaScript program that takes the current temperature
as input and uses the conditional (ternary) operator to determine and print the weather condition. If the
temperature is above 30°C, the condition is "Hot"; otherwise, it is "Moderate".*/

let temp = 30;

let currenttemp =  temp>30 ? "Hot":"Modrate";
console.log(`current weather condition is : ${currenttemp}`);
