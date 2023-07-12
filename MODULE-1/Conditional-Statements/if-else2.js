// Display Large Integer
// Hard
// Write a JavaScript program that accept three integers and return the maximum among them.
function main() {
    const prompt = require('prompt-sync')();
    var a = 0;
    a = parseInt(prompt("Enter the first number:"));
    var b = 0;
    b = parseInt(prompt("Enter the second number:"));
    var c = 0;
    c = parseInt(prompt("Enter the third number:"));
  
    var m = Math.max(a, b, c);
    console.log("The maximum number is:", m);
  }
  
  main();
  