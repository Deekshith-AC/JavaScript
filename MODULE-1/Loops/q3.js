// Reverse order of elements
// Medium
// Given a string str , write a function that will return string in reverse order without reversing each words.

// Example 1:
// Input:
// I am almabetter

// Output:
// almabetter am I
function main() 
{
    const prompt = require('prompt-sync')();
    var a = prompt("Enter the string : ");
    let b = [];
    var m = "";
    b = a.split(" ");
    console.log(b);
    let z = b.length;
    for(let i = z-1; i>=0; i--)
    {   
        if(i!=0)
        {
        m += b[i];
        m += " ";
        }
        else
        {
        m += b[i];
        }
    }
    console.log(m);
}
main();