// Write a program to find how many letters, numbers,
//and special characters are in a user entered string.

let prompt = require("prompt-sync")();
let userInput = prompt(" Enter a sentence to check the number of characters inside: ");
let upperCase = 0;
let lowerCase = 0;
let specialCharacters = 0;
let numbers = 0;

for (let i = 0; i < userInput.length; i++)
{
  if (userInput[i] >= "A" && userInput[i] <= "Z") {
    upperCase++;
  } 
  else if (userInput[i] >= "a" && userInput[i] <= "z") {
    lowerCase++;
  } 
  else if (userInput[i] >= "0" && userInput[i] <= "9") {
    numbers++;
  }
   else {
    specialCharacters++;
  }
}

console.log(" You have entered: " + userInput);

console.log(" This is how many upper case letter(s) are in this string:  " + upperCase);

console.log(" This is how many lower case letter(s) are in this string: " + lowerCase);

console.log(" This is how many number(s) are in this string: " + numbers);

console.log(" This is how many special character(s) are in this string: " + specialCharacters);
