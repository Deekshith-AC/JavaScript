// Nested Objects using map()
// Medium
// Given an array user having multiple object . Return full name as Name along with the subject marks as Marks for each students as an array of objects.User and subject name will be passed as argument and subject name will be taken as input.

// user = [ { "firstName":"Raghu", "lastName":"Anand", "marks":{ "Maths":98, "Science":64, "Hindi":90 } }, { "firstName":"Ram", "lastName":"Singh", "marks":{ "Maths":99, "Science":72, "Hindi":94 } }, { "firstName":"Shayam", "lastName":"Sharma", "marks":{ "Maths":80, "Science":80, "Hindi":70 } } ]

// Example 1:
// Input:
// Maths

// Output:
// [ { Name: 'Raghu Anand', Marks: 98 }, { Name: 'Ram Singh', Marks: 99 }, { Name: 'Shayam Sharma', Marks: 80 } ]
function main() {
    const prompt = require('prompt-sync')();
	let user = [
  {
    "firstName":"Raghu",
    "lastName":"Anand",
     "marks":{
      "Maths":98,
      "Science":64,
      "Hindi":90
    }
  },
   {
    "firstName":"Ram",
    "lastName":"Singh",
     "marks":{
      "Maths":99,
      "Science":72,
      "Hindi":94
    }
  },
   {
    "firstName":"Shayam",
    "lastName":"Sharma",
     "marks":{
      "Maths":80,
      "Science":80,
      "Hindi":70
    }
  }
]
    let str = prompt("Enter the Subject : ");
    console.log(subjectMarks(user,str));
}
function subjectMarks(any,subject){
  for (let i in any)
  {
      let j = any[i];
      let m = {};
      m.Name = j.firstName + " " + j.lastName;
      m.Marks = j.marks[subject];
      any[i] = m;
  }
  return any;
}
main();