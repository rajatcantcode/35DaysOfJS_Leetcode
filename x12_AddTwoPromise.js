// Make a new promise that resolves to the sum of two numbers, each
// coming from a separate promise.

var addTwoPromises = async function (promise1, promise2) {
  let val1 = await promise1;
  let val2 = await promise2;
  return val1 + val2;
};

let promise1 = Promise.resolve(3);
let promise2 = Promise.resolve(4);

addTwoPromises(promise1, promise2).then((sum) => {
  console.log(sum); // 7
});

// Another way
// Built-in Promise.all() method
// Promise.all([promise1, promise2]).then((values) => {
//   console.log(values); // [3, 4]
//   console.log(values[0] + values[1]); // 7
// });
