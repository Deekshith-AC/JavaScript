// Even or Odd
// Medium
// Write a JavaScript program that checks if input number is even or odd by using “%” operator in JavaScript.

// Example 1:
// Input:
// 17.5

// Output:
// false

// Explanation:
// 17.5 is an odd number, thus answer is false.
function main() 
{
    const prompt = require('prompt-sync')();
    let a = parseInt(prompt("Enter the number to check :"));
    let b = (a%2 == 0)?true:false;
    console.log(b);
}
main();