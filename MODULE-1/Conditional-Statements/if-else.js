// If Number
// Easy
// Write a JavaScript program that checks if input variable is a number by using isNaN() in-built JavaScript function.

// Example 1:
// Input:
// 42F

// Output:
// false

// Constraints:
// Restict to variables that are given in input format to get your code evaluated
function ValidNumber(num) {
    if(isNaN(num)){
      return false;
    }else {
     return true;
    }
  }
  
  function main() {
    const prompt = require('prompt-sync')();
      let a = parseInt(prompt("Please enter a number : "));
      
      console.log(ValidNumber(a));
  }
  main();