typeof 15; // Prediction: number
typeof 5.5; // Prediction: number
typeof NaN; // Prediction: null or undefined* its number (Not a number - not a legal number)
typeof "hello"; // Prediction: string
typeof true; // Prediction: boolean
typeof (1 != 2); // Prediction: boolean
"hamburger" + "s"; // Prediction: "hamburgers"
"hamburgers" - "s"; // Prediction: "hamburger" NaN ? is this because there
"1" + "3"; // Prediction: 13
"1" - "3"; // Prediction: 1? - 2 this one gets turned back to a number nan
"johnny" + 5; // Prediction: "johnny5" "johnny5"
"johnny" - 5; // Prediction: "johnny" NaN
99 * "luftbaloons"; // Prediction: "99luftbaloons" NaN

const firstName = "Sara";
const lastName = "Moad";
const age = 28;

// console.log(
//   "Hi, my name is " +
//     firstName +
//     " " +
//     lastName +
//     " and I am " +
//     age +
//     " years old"
// );

// ## Variables

// Challenge: Storing Personal Information
// MVP:
// Create three variables to store your first name, last name and age.
// Assign values to these variables.
// Print a string containing all three variables in the console (should look like "Hi, my name is XXX XXX and I am XX years old)
