// Make a calculator using switch/case and take a user input
// to perform any calculation. If user enters any value other than 1-5,
// display a message 'Invalid Option' and end the program.

let prompt = require("prompt-sync")();
let firstnumber = prompt(" Enter your first number ");
let secondnumber = prompt(" Enter your second number ");

console.log(" 1. Addition, 2. Subtraction, 3. Multiplication, 4. Divide, 5. To exit ");

let userInput = prompt(" Please press 1-5 to complete your mathematical operation: ");

let Addition = (+firstnumber + +secondnumber);
let Subtraction = (firstnumber - secondnumber);
let Division = (firstnumber / secondnumber);
let Multiplication = (firstnumber * secondnumber);

firstnumber = Number;
secondnumber = Number;

switch (userInput) {
  case "1": { console.log(Addition);
    break;
  }
  case "2": {console.log(Subtraction);
    break;
  }
  case "3": {console.log(Multiplication);
    break;
  }
  case "4": {console.log(Division);
    break;
  }
  case "5": {console.log(" EXIT ");
    break;
  }

  default: console.log(" Invalid Option ");
    break;
}

// end of switch
