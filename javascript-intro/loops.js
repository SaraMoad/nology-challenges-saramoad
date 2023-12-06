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
  return console.log(sumOfNumbers);
};

const secondSum = (n) => {
  return (n * (n + 1)) / 2;
};

sum(10);
// O(n);
console.log(secondSum(10));
// O(1);

// ### Bonus:

// Try writing the function again with the same inputs and outputs **Without**
// using a loop. (You may need to google some formulas!)
