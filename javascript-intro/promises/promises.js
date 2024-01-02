// # Delayed inc/dec

// 1. Create a function called `delayedIncDec(n, mode, timeout)`

// - n: Initial number
// - mode: A string - either "inc" or "dec"
// - timeout: delay time in ms - should have a default time of 2.5 seconds if not provided
//   `delayedIncDec` returns a promise that resolves to the initial number increment or decremented - think about what might cause this promise to reject

// 2. Call this function three times with different values of n, modes, and timeouts
// 3. Log each value to the console.

// const delayedIncDec = (n, mode, timeout = 2500) => {
//   return new Promise((resolve, reject) => {
//     console.log(n, mode, timeout);
//     setTimeout(() => {
//       if (typeof mode !== "string") {
//         return reject(new Error("mode must be a string"));
//       }
//       if (typeof n !== "number") {
//         return reject(new Error("n must be a number"));
//       }
//       if (typeof timeout !== "number") {
//         return reject(new Error("timeout must be a number"));
//       }
//       if (timeout < 0) {
//         return reject(new Error("timeout can't have a negative value"));
//       }
//       if (mode === "inc" || mode === "dec") {
//         if (mode === "inc") {
//           n++;
//           return resolve(n);
//         } else {
//           n--;
//           return resolve(n);
//         }
//       }
//       return reject(new Error("mode must be inc or dec"));
//     }, timeout);
//   });
// };

// console.log(
//   delayedIncDec(2, "inc", 3000).then((result) => console.log(result))
// );

// console.log(delayedIncDec(2, 2).then((result) => console.log(result)));

// console.log(
//   delayedIncDec(2, "dsdac", 3000).then((result) => console.log(result))
// );

// # Delayed filter

// 1. Create a function called `delayedFilter(array, callback, timeout)`

// - n: Initial Array
// - callback: a filter function
// - timeout: delay time in ms - should have a default time of 2.5 seconds if not provided
//   `delayedFilter` returns a promise that resolves to the filtered array- think about what might cause this promise to reject

// 2. Call this function three times with different values of array, callback, timeout
// 3. Log each result to the console.

const delayedFilter = (array, callback, timeout = 2500) => {
  return new Promise((resolve, reject) => {
    console.log(array, callback, timeout);
    if (!Array.isArray(array)) {
      reject(new Error("array must be an array"));
    }
    if (typeof callback !== "function") {
      reject(new Error("callback must be a function"));
    }
    if (typeof timeout !== "number") {
      reject(new Error("timeout must be a number"));
    }
    if (timeout < 0) {
      reject(new Error("timeout can't have a negative value"));
    }
    setTimeout(() => {
      const filteredArr = array.filter(callback);
      resolve(filteredArr);
    }, timeout);
  });
};

console.log(
  delayedFilter([1, 2, 3, 4, 5], (n) => n < 2, 3000).then((result) =>
    console.log(result)
  )
);

console.log(
  delayedFilter([1, 2, 3, 2, 2], (n) => n === 2, "203").then((result) =>
    console.log(result)
  )
);

console.log(
  delayedFilter([2, 2, 2], "dsdac", "200").then((result) => console.log(result))
);
