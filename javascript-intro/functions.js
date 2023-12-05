// 1. Write a function that takes in a number of earth days, and returns the
//    number of orbits the moon can perform given days.

function moonOrbits(days) {
  return days / 27;
}

console.log(moonOrbits(365));

moonOrbits(54); // 2
moonOrbits(365); // => 13.359

// ## Challenge: Working with Circles

// ### MVP

// 1. Write a function that takes the radius of a circle and return its area.
// 2. Write a function that takes the radius of a circle and return its perimeter.

function circleArea(radius) {
  return radius ** 2 * Math.PI;
}

function circlePerimeter(radius) {
  return 2 * Math.PI * radius;
}

console.log(circleArea(10));
console.log(circlePerimeter(10));
circleArea(10); // => 314.16
// circlePerimeter(10); // => 62.83

// ## Challenge: Years to Days & Seconds

// ### MVP

// 1. Create a function that takes your age in years and returns your age in days.
// 1. Create a function that takes your age in years and returns your age in seconds.

function ageInDays(years) {
  return years * 365;
}

function ageInSeconds(years) {
  const days = ageInDays(years);
  const hours = days * 24;
  const minutes = hours * 60;
  const seconds = minutes * 60;
  return seconds;
}

console.log(ageInDays(32));
console.log(ageInSeconds(32));
ageInDays(32); // => 11680
ageInSeconds(32); //=> 1009152000

// ## Challenge: Return the Remainder from Two Numbers

// ### MVP

// There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.

//

function remainder(num1, num2) {
  return num1 % num2;
}

console.log(remainder(1, 3)); //➞ 1

console.log(remainder(3, 4)); //➞ 3

console.log(remainder(-9, 45)); // ➞ -9

console.log(remainder(5, 5)); // ➞ 0

// ## Challenge: Basketball Points

// ### MVP

// You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.

function pointCounter(twoPointers, threePointers) {
  return twoPointers * 2 + threePointers * 3;
}

console.log("total: " + pointCounter(5, 2));

// ## Challenge: Less Than 100?

// ### MVP

// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

function lessThan100(num1, num2) {
  const result = num1 + num2 <= 100 ? true : false;
  return result;
}

console.log(lessThan100(22, 15)); // ➞ true
// 22 + 15 = 37

console.log(lessThan100(83, 34)); //➞ false
// 83 + 34 = 117

console.log(lessThan100(3, 77)); //➞ true
