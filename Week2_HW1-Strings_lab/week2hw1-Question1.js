//Write a program to find if a user entered string is a palindrome or not (for example "racecar" is a palindrome)

         
//First problem

         let prompt = require('prompt-sync') ();
         let num = prompt('enter a string:');
        isnotapalindrome=true;
    
        for (let i=1; i<num.length; i++)
        //i=1 and i-1 but not i=0
                {                   
                    if(num.charAt(i-1) === num.charAt(num.length-i))
                    {
                        isnotapalindrome=false;
                    console.log("is a palindrome");
                        break;
                }
                if(isnotapalindrome==true) console.log('your word is not a palindrome'); 
                break;
            }
                
                
    
                