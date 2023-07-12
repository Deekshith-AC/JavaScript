// Joining elements in Array
// Easy
// Given the size of array n and an array .Write a simple JavaScript program to join all elements of the following array into a string using '+' sign in between the elements..

// Example 1:
// Input:
// 4

// ["Red", "Green", "White", "Black"];

// Output:
// Red+Green+White+Black

// Explanation:
// Performed join operation on the elements of array with '+' sign in between.

// Constraints:
// Restrict to the input format that is mentioned. Use whatever you have learned in live class curriculum to solve this challenge.
function main()
{

    const prompt = require('prompt-sync')();
    const n = parseInt(prompt("Enter the number of elements in array to join :"));
    let arr = [];
    for(let i = 0; i < n; i++)
    {
    let name = prompt("Enter the array element "+ i + ":");
        arr.push(name);
       console.log(joi(arr));
    }
}
function joi(a)
{
    return a.join('+');
}
main();