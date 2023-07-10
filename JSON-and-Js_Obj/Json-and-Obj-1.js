// User Full Name
// Easy
// Given an object user . Return the full name of the user.

// Example 1:
// Input:
// { "name":{ "firstName":"Almabetter", "lastName":"Courses" } }

// Output:
// Almabetter Courses
function main() {
    const prompt = require('prompt-sync')();
    let user = JSON.parse(prompt("Enter the user objevct : "));
    console.log(fullName(user.name));
}
function fullName(user){
  user.fullName = user.firstName + " " +user.lastName
  return user.fullName;
}
main();