function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const n = getRandomInt(200000);

if (n % 2 === 0) {
  console.log(`${n} is even`);
} else {
  console.log(` ${n} is odd`);
}

// Create two variables x & y
const x = getRandomInt(12);
const y = getRandomInt(12);

// Write an if / else block
if (x > y) {
  console.log(`x: ${x} is greater than y: ${y}`);
  // It should compare a number x to another number
  // It should print ("x is greater than y") in the console
} else if (x < y) {
  console.log(`x: ${x} is smaller than y: ${y}`);
  // Or "x is smaller than y"
} else {
  console.log(`x: ${x} is equal to y: ${y}`);
  // Or "x is equal to y"
}
// Depending on the value of x and y

// Console log the user's input depending on the data type

// Create a variable userInput
const userInput = 12;

// Write an if / else block
if (!isNaN(userInput) && typeof userInput === "number") {
  // If the input is a number, it should console log that number but squared
  console.log(userInput ** 2);
} else if (typeof userInput === "string") {
  // If the input is a string, it should console log that input
  console.log(userInput);
} else {
  // If the input is anything else, the console should say "invalid input"
  console.log("invalid input");
}
