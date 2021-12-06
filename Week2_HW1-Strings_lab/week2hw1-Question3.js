// Write a program to find how many times
//a user entered word occurs in given string

let prompt = require("prompt-sync")();
let Sentence = prompt(" Enter your sentence here: ").split(" ");
console.log(Sentence);
let Word = prompt(" Enter the word you are looking for: ");
let counter = 0;

for (let index = 0; index < Sentence.length; index++) {
  if (Word.toLowerCase() == Sentence[index].toLowerCase()) {
    counter++;
  }
}

console.log(Word + " shows up " + counter + " time(s) ");
