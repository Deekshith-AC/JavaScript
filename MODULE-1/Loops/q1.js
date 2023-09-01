// Printing Even Numbers
// Medium
// Given an integer n . Using for loop return all even numbers up to and including n and don’t include 0.

// Example 1:
// Input:
// 22

// Output:
// [ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ]

// Explanation:
// We have to print all even numbers excluding 0 to the number. Hence, the output where even numbers are printed upto 22 including 22 but excluding 0.
function main()
{
    const prompt = require('prompt-sync')();
    let n = parseInt(prompt("Enter a number : "));
    let a = [];
    for(let i = 2; i<=n;i+=2)
    {
        a.push(i);
    }
    console.log(a);
}
main();