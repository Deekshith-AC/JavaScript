// Destructuring Syntax
// Hard
// Given an object below. Return the full name of user as Name along with maximum marks in subjects as Max marks and find total marks then divide it by given numbers. Input will be the number and passed as argument along with object.

// let user = [ { "firstName": "Raghu", "lastName": "Anand", "subjects": [ { "name":"Maths","marks":94}, { "name":"Science","marks":67}, { "name":"Hindi","marks":64} ] }, { "firstName": "Ram", "lastName": "Singh", "subjects": [ { "name":"Maths","marks":84}, { "name":"Science","marks":84}, { "name":"Hindi","marks":91} ] } ]

// Example 1:
// Input:
// 2

// Output:
// [ { Name: 'Raghu Anand', 'Total Marks': 112.5, 'Max marks': 94 }, { Name: 'Ram Singh', 'Total Marks': 129.5, 'Max marks': 91 } ]
function main()
 {
    const prompt = require('prompt-sync')();
    let user = [
    {
      "firstName": "Raghu",
      "lastName": "Anand",
      "subjects": [
        { "name": "Maths", "marks": 94 },
        { "name": "Science", "marks": 67 },
        { "name": "Hindi", "marks": 64 }
      ]
    },
    {
      "firstName": "Ram",
      "lastName": "Singh",
      "subjects": [
        { "name": "Maths", "marks": 84 },
        { "name": "Science", "marks": 84 },
        { "name": "Hindi", "marks": 91 }
      ]
    }
  ];
  
  let n = parseInt(prompt("Enter a number:"));

  console.log(subjectMarks(user, n));
}

function subjectMarks(u, nu) 
{
  for (let i in u) 
  {
    let j = u[i];
    let m = {};
    m.Name = j.firstName + " " + j.lastName;
    let g = tm(j.subjects, nu);
    m['Total Marks'] = g[0];
    m['Max marks'] = g[1];
    u[i] = m;
  }
  return u;
}
function tm(z,n)
 {
    let max = 0;
    let tot = 0;
    for (let i in z)
     {
      let mark = z[i].marks;
      if (mark > max) 
      {
        max = mark;
      }
      tot += mark;
      }
    tot = tot/n;
    return [tot,max];
  }
  main();