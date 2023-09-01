// Uppercase Array
// Easy
// Given the size of array n and an array of strings.Write Javascript program to return an array whose elements is in uppercase of words present in the original array.

// Example 1:
// Input:
// ["avengers", "captain america", "ironman", "black panther"];

// Output:
// ["AVENGERS","CAPTAIN AMERICA","IRONMAN","BLACK PANTHER"]

// Explanation:
// Converted every element of the array to uppercase and stored in the array, hence the output.

// Constraints:
// Restrict to the input format that is mentioned. Use whatever you have learned in live class curriculum to solve this challenge.
const prompt = require('prompt-sync')();
function main() {
     let arr = [];
     let z = ab();
     while(z!="")
     {
     arr.push(z);
     z = ab();
     }
     console.log(arr);
   }
   
   function ab() {
     let b = prompt("Enter the element : ");
     if (b !== "") {
       let a = b.toUpperCase();
       return a;
     }
     else 
     {
        let g = ""
        return g;
     }
   }
   main();