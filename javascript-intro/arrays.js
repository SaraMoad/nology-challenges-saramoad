// ## Challenge: Listing Hobbies

// ### MVP

// 1. Create an array with 3 of your hobbies
const hobbyArray = ["dancing", "dungeons and dragons", "reading"];

// 1. Print in the console the first hobby in the array
console.log(hobbyArray[0]);

// 1. Remove that first hobby from the array and store that hobby in a variable
const firstHobby = hobbyArray.shift();
console.log(firstHobby);
// 1. Store the length of the array in a variable
const arrayLength = hobbyArray.length;
// 1. Add another hobby at the end of the array
hobbyArray.push("video games");
// 1. Print that last hobby in the console
console.log(hobbyArray[hobbyArray.length - 1]);

// Bonus:

// 1. Join all your hobbies in a single string each hobby being comma separated
//    (i.e. "My hobbies are: hobby1, hobby2, hobby2")
const favouritehobbies = "My hobbies are:";
const hobbies = "My hobbies are: " + hobbyArray.join(", ");

// ## Challenge: Grocery Lists

// ### MVP

// 1. Create an array containing 5 grocery items you often buy
const groceries = [
  "goats cheese",
  "spinach",
  "cherry tomatos",
  "eggs",
  "free-ranged milk",
];
// 2. Log this list to the console, make sure the output is pipe delimited
console.log(groceries);
console.log(groceries.join("|"));

// ```js
// ['apple', 'pear', 'papaya', 'mango'] => 'apple|pear|papaya|mango'
// ```
