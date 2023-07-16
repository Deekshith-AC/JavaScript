// Mean Equals Mode
// Medium
// You are working as a data analyst at a research firm. Your boss has tasked you with analyzing a dataset of customer reviews for a popular restaurant chain. Your task is to determine if the mean rating given by the customers is equal to the most common rating given.

// You need to write a program that takes in an array of ratings arr and outputs 1 if the mean is equal to the mode and 0 if not.

// Example 1:
// Input:
// arr = [3, 3, 5, 9]

// Output:
// 0

// Explanation:
// Mean is 5 and Mode is 3, so the program should return 0.

// Example 2:
// Input:
// arr = [4, 4, 4, 6, 2]

// Output:
// 1

// Explanation:
// Mean is 4 and Mode is also 4, so the program should return 1.

// Example 3:
// Input:
// arr = [5, 3, 3, 3, 1]

// Output:
// 1

// Explanation:
// Mean is 3 and Mode is also 3, so the program should return 1.
function main() 
{
    const prompt = require('prompt-sync')();
    var arr = prompt ("Enter the array element : ").split(" ").map(x => parseInt(x));
    console.log(meanEqualsMode(arr));
}
function meanEqualsMode(ar)
 {
     let leg = ar.length;
     let avg = ar.reduce((acc,val) => acc + val, 0)/leg;
     let m = new Map();
    
    for(let i  of ar)
    {
        if(m.has(i))
        {
            m.set(i,m.get(i)+1);
        }
        else
        {
            m.set(i,1);
        }
    }
    let y = 0;
    let h = null;
    m.forEach((cnt,num) =>
    // note down that in forEach loop used in maps in the first parameter the value is reteived from the map and then the key is retrieved.
    // so while adding elemets to map , it is set(key,valye) abut while fetching elemets in forEach loop it's map.forEacH(value,key).
    {
        if(y<cnt)
        {
            y = cnt;
            h = num;
        }
    });
    let u = (avg==h)?1:0;
    return u;
} main();