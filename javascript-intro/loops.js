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
