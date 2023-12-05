// MVP:
// Create a switch block that will log a string for each day of the week.
// The switch will be given a number and return the matching days of the week

// Create a variable called day
let day = 5;

switch (day) {
  case 0:
    console.log("Today is Sunday");
    break;
  case 1:
    console.log(" Today is Monday");
    break;
  case 2:
    console.log(" Today is Tuesday");
    break;
  // e.g. if day = 2, the switch should print Today is Tuesday in the console.
  case 3:
    console.log("Today is Wednesday");
    break;
  case 4:
    console.log(" Today is Thursday");
    break;
  case 5:
    console.log(" Today is Friday");
    break;
  case 6:
    console.log(" Today is Saturday");
    break;
  default:
    console.log("invalid number please input a number between 0-6");
  // Your switch block should also handle numbers out of range
}

// Challenge: Eye Colour (Check the attached image)
// MVP:
// Tell the user what eye colour their child would have.
// Create two variables parent1 and parent2
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const parent1 = "brown";
const parent2 = "brown";
let childEyeRandom = 0;
let childEyeColor = "";

if (parent1 === "green" && parent2 === "green") {
  console.log(
    "the chances of your child having blue eyes is 25%, brown is <1% and green is 75%"
  );
  childEyeRandom = getRandomInt(101);
  if (childEyeRandom < 1) {
    childEyeColor = "brown";
  } else if (childEyeRandom <= 25) {
    childEyeColor = "blue";
  } else {
    childEyeColor = "green";
  }
} else if (
  (parent1 === "green" && parent2 === "blue") ||
  (parent1 === "blue" && parent2 === "green")
) {
  console.log(
    "the chances of your child having blue eyes is 50%, brown is 0% and green is 50%"
  );
  childEyeRandom = getRandomInt(101);
  childEyeColor = childEyeRandom >= 50 ? "blue" : "green";
} else if (
  (parent1 === "green" && parent2 === "brown") ||
  (parent1 === "brown" && parent2 === "green")
) {
  console.log(
    "the chances of your child having blue eyes is 12.5%, brown is 50% and green is 37.5%"
  );
  childEyeRandom = getRandomInt(101);
  if (childEyeRandom <= 13) {
    childEyeColor = "blue";
  } else if (childEyeRandom <= 64) {
    childEyeColor = "brown";
  } else {
    childEyeColor = "green";
  }
} else if (parent1 === "blue" && parent2 === "blue") {
  console.log(
    "the chances of your child having blue eyes is 99%, brown is 0% and green is 1%"
  );
  childEyeRandom = getRandomInt(101);
  childEyeColor = childEyeColor > 1 ? "blue" : "green";
} else if (parent1 === "brown" && parent2 === "brown") {
  console.log(
    "the chances of your child having blue eyes is 6.25%, brown is 75% and green is 18.75%"
  );
  childEyeRandom = getRandomInt(101);
  if (childEyeRandom <= 7) {
    childEyeColor = "blue";
  } else if (childEyeRandom <= 82) {
    childEyeColor = "brown";
  } else {
    childEyeColor = "green";
  }
} else console.log("this is not a valid colour");

switch (childEyeColor) {
  case "brown":
    console.log("that's my least favourite eye colour");
    break;
  case "green":
    console.log("that's my favourite eye colour");
    break;
  case "blue":
    console.log("that's my middle favourite eye colour");
    break;
  default:
    console.log("opps a mistake has been made");
}

// switch ((parent1, parent2)) { - Would love to go through this with a coach
// case (parent1 === "blue", parent2 === "Blue"):
// case ("Blue", parent2 === "blue"):
// case ("blue", "blue"):
// case ("Blue", "Blue"):
//   console.log(
//     "the chances of your child having blue eyes is 99%, brown is 0% and green is 1%"
//   );
//   childEyeRandom = getRandomInt(101);
//   childEyeColor = childEyeColor > 1 ? "blue" : "green";
//   break;
// case ("blue", "Green"):
// case ("Blue", "green"):
// case ("green", "blue"):
// case ("Green", "Blue"):
//   console.log(
//     "the chances of your child having blue eyes is 50%, brown is 0% and green is 50%"
//   );
//   childEyeRandom = getRandomInt(101);
//   childEyeColor = childEyeRandom >= 50 ? "blue" : "green";
//   break;
// case ("blue", "Brown"):
// case ("Blue", "brown"):
// case ("brown", "blue"):
// case ("Brown", "Blue"):
//   console.log(
//     "the chances of your child having blue eyes is 50%, brown is 50% and green is 0%"
//   );
//   childEyeRandom = getRandomInt(101);
//   childEyeColor = childEyeRandom >= 50 ? "blue" : "brown";
//   break;
// case ("green", "brown"):
// case ("Green", "Brown"):
// case ("brown", "Green"):
// case ("Brown", "green"):
//   console.log(
//     "the chances of your child having blue eyes is 12.5%, brown is 50% and green is 37.5%"
//   );
//   childEyeRandom = getRandomInt(101);
//   if (childEyeRandom <= 13) {
//     childEyeColor = "blue";
//   } else if (childEyeRandom <= 64) {
//     childEyeColor = "brown";
//   } else {
//     childEyeColor = "green";
//   }
//   break;
// case ("green", "Green"):
// case ("Green", "green"):
// case ("Green", "Green"):
// case ("green", "green"):
//   console.log(
//     "the chances of your child having blue eyes is 25%, brown is <1% and green is 75%"
//   );
//   childEyeRandom = getRandomInt(101);
//   if (childEyeRandom < 1) {
//     childEyeColor = "brown";
//   } else if (childEyeRandom <= 25) {
//     childEyeColor = "blue";
//   } else {
//     childEyeColor = "green";
//   }
//   break;
// case ("Brown", "brown"):
// case ("brown", "Brown"):
// case ("Brown", "Brown"):
// case ("brown", "brown"):
//   console.log(
//     "the chances of your child having blue eyes is 6.25%, brown is 75% and green is 18.75%"
//   );
//   childEyeRandom = getRandomInt(101);
//   if (childEyeRandom <= 7) {
//     childEyeColor = "blue";
//   } else if (childEyeRandom <= 82) {
//     childEyeColor = "brown";
//   } else {
//     childEyeColor = "green";
//   }
//   break;
// default:
//   console.log("this is not a valid colour");
// }

// Given the eye colour of each parent, it should console log the probability of their child having different eye colours, for example: Your eye colours are brown and blue, the chances of your child having blue eyes is --%, brown is --% and green is --%
// Use the following image as a reference
// Bonus:
// Store the value of the child’s eye colour and write a switch statement - depending on the child’s eye colour consol log if it's your favourite eye colour, your least favourite eye colour or the mediocre colour
