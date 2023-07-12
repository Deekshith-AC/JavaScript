// Filtering Array
// Medium
// Given the size of array n and an array of strings. Return the string having length greater than or equal to 6 by using filter method.

// Example 1:
// Input:
// 6

// ["spray", "limit", "elite", "exuberant", "destruction", "present"];

// Output:
// ["exuberant", destruction", "present"]

// Explanation:
// The output shows that the array has been filtered with required conditions.

// Constraints:
// Restrict to the input format that is mentioned. Use whatever you have learned in live class curriculum to solve this challenge.
function main()
{
    const prompt = require ('prompt-sync')();
    const n = parseInt(prompt("Enter the size of array :"));
    let arr = [];
    for(let i = 0; i<n;i++)
    {
        let name = prompt("Enter " + i + " element :");
        arr.push(name);
    }
console.log(fil(arr));
}
function fil(a)
    {
        for( let i = 0; i<a.length; i++)
        {
            let v = a[i];
            let z = v.length;
            if (z != 6 && z < 6)
             {
                a.splice(i, 1);
                i--;
             }
        }
        return a;
    }
    main();