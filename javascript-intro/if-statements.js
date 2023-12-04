function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const n = getRandomInt(200000);

if (n % 2 === 0) {
  console.log(`${n} is even`);
} else {
  console.log(` ${n} is odd`);
}
