// You are given an expected output, place the code snippet in the right scope

const a = 1;
const b = 2;
const c = 3;

function firstFunction() {
  const b = 5;
  const c = 6;
  console.log(`a: ${a}, b: ${b}, c: ${c}`);
  // a:1, b:5, c:6

  function secondFunction() {
    const b = 8;
    console.log(`a: ${a}, b: ${b}, c: ${c}`);
    // a:1, b:8, c:6

    function thirdFunction() {
      const a = 7;
      const c = 9;
      console.log(`a: ${a}, b: ${b}, c: ${c}`);
      // a:7, b:8, c:9
      function fourthFunction() {
        const a = 3; // changed value from 1 to 3;
        const c = 8;
        console.log(`a: ${a}, b: ${b}, c: ${c}`);
        // a:3, b:8, c:8 (if a is meant to = 1)
      }

      fourthFunction();
    }

    thirdFunction();
  }

  secondFunction();
}

firstFunction();

console.log(`a: ${a}, b: ${b}, c: ${c}`);
// a:1, b:8, c:6
// a:3, b:8, c:8
// a:1, b:5, c:6
// a:7, b:8, c:9
