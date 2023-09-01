// Sum of two arrays
// Medium
// Given an array arr1 of size n and another array arr2 of size m. Return the total sum of the elements present in both array.Each array includes only numbers..

// Example 1:
// Input:
// n=11 , arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];

// m=11 , arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26];

// Output:
// 627

// Explanation:
// Individual sum of the elements of individual arrays are 276 and 351 respectively. Hence, the output the sum of these two 627.

function main() {
    const prompt = require('prompt-sync')();
    var a = [];
    var as = 0;
    var bs = 0;
    var b = [];
    let n = parseInt(prompt("Enter a length of first array : "));
    for(let i  =0; i <n; i++)
    { 
        let z = parseInt(prompt("Enter " + i + " element of first array : "));
        as += z;
        a.push(z);
    }
    var m = parseInt(prompt("Enter a length of second array : "));
    for(let i  =0; i <m; i++)
    {
        let z = parseInt(prompt("Enter " + i  + " element of first array : "));
        bs +=z;
        b.push(z);
    }
    let z = as+bs;
    console.log(z);
}
main();