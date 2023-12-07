// ## Challenge: Sum of `n`

// ### MVP:

// Create a function with a for loop that will add all the numbers up to n

// 1. You should create a variable to set the upper limit of your loop
// 2. Your loop should increment by 1 on each iteration
// 3. Your loop should print the final result

const sum = (num) => {
  let sumOfNumbers = 0;
  for (let i = 0; i <= num; i++) {
    sumOfNumbers += i;
  }
  // return console.log(sumOfNumbers);
};

// Try writing the function again with the same inputs and outputs **Without**
// using a loop. (You may need to google some formulas!)

const secondSum = (n) => {
  return (n * (n + 1)) / 2;
};

sum(10);
// O(n);
// console.log(secondSum(10));
// O(1);

// ### Bonus:

// Part two of challenges:
// Recap exercises (loops and methods)

const pets = ["pixie", "claude", "sebastian", "bug"];
// -> 1. ['claude', 'sebastian', 'bug', 'pixie']
let firstItem = pets.shift();
console.log(pets.push(firstItem), pets);
// -> 2. ['pixie', 'bug', 'sebastian', 'claude']
let reveresedPets = pets.reverse();
console.log(reveresedPets);
// -> 3. ['bug', 'sebastian', 'pixie']
pets.pop();
pets.shift();
console.log(pets.push(firstItem));
// -> 4. ['Bug', 'Sebastian', 'Pixie]

for (let i = 0; i < pets.length; i++) {
  console.log(pets);
  pets[i] = pets[i][0].toUpperCase() + pets[i].slice(1);
}
console.log(pets);

// -> 5. ['Bug', 'Seb', 'Pix']
let shortenedPets = [];
for (let i = 0; i < pets.length; i++) {
  pets[i] = pets[i].slice(0, 3);
}
console.log(pets);

// ## Challenge: Generating Unique Random Numbers

// ### MVP

// -   Using a `while` loop generate a list of 10 random unique numbers
// -   Each number must be between 0 and 15

let i = 0;
let array = [];
while (i <= 10) {
  let random = Math.floor(Math.random() * 15 - 0) + 1;
  if (array.includes(random) !== true) {
    array.push(random);
    console.log(array, "first array");
    i++;
  }
}

// ### Tips

// -   You may need to google how to generate, you can use the `Math.random()` API

// ---

// ## Challenge: `generateNumbers` function

// ### MVP

// Create a function that returns a list of random whole numbers given a range
const generateNumbers = (n, r, isUnique) => {
  let array = [];
  while (array.length < n) {
    let number = Math.floor(Math.random() * r);

    if (isUnique === true && !array.includes(number) && n < r) {
      array.push(number);
    } else if (isUnique === false) {
      array.push(number);
    }
  }
  console.log(array);
  return array;
};

generateNumbers(10, 20, true);
// -   Create a function called `generateNumbers`
// -   This function should take in 2 numbers
//     -   `n` being the number of numbers to be generated
//     -   `r` being the max range
//     -   E.g: `n: 10, r: 20:` function will generate 10 random numbers between 0
//         and 20
// -   Function should return `n` numbers in range `0 <= n < r`

// ### Bonus

// -   Add an argument to your function called `isUnique`
// -   If this is set to true, there should be no duplicate numbers in the output

// ### Bonus

// -   Add validation to your function to prevent negative values for `n` and `r`
// -   Add validation to ensure `n < r` when `isUnique` is true
