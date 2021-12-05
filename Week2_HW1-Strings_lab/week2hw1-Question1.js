//Write a program to find if a user entered string
// is a palindrome or not (for example "racecar" is a palindrome)

let prompt = require("prompt-sync")();
let userInput = prompt("Enter a word to be checked if it is a palindrome: ");
isaPalindrome = false;

for (let index = 1; index < userInput.length; index++) {
  if (
    userInput.charAt(index - 1).toLowerCase() ==
    userInput.charAt(userInput.length - index).toLowerCase()
  ) {
    isPalindrome = true;
    console.log(userInput + " is a palindrome. ");
    break;
  }
  if (isaPalindrome == false) console.log(userInput + " is not a palindrome. ");
  break;
}
