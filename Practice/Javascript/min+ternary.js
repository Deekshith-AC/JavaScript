// Battle of the Favorites
// A boy and his grandfather were on a walk when they stumbled upon a challenge. The boy's favorite number was 5, while his grandfather's was -1. They decided to settle their disagreement by finding the smallest number between their two favorites. The grandfather showed the boy how to use a ternary operator ? to create a function that would find the minimum number of any two numbers.

// Write a function which takes two integers a and b and use Ternary Operator ?, which returns the least of two numbers a and b.

// Example 1:
// Input:
// a = 2, b = 5

// Output:
// 2

// Example 2:
// Input:
// a = 3, b = -1

// Output:
// -1

// Example 3:
// Input:
// a = 1, b = 1

// Output:
// 1
function main() {
    const prompt = require('prompt-sync')();
    var z = parseInt(prompt("Enter the value of a  : "));
    var x = parseInt(prompt("Enter the value of b  : "));
    console.log(min(z, x));
}
function min(a, b) {
	const m = (a<b)?a:b;
    return m;
}
main();