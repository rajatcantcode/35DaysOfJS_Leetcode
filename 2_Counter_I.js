// Closures
// Make a function that starts at a given number and increases by
// one each time it's called.

var createCounter = function (n) {
  return function () {
    return n++;
  };
};

const counter = createCounter(10);
console.log(counter()); // 10
console.log(counter()); // 11
console.log(counter()); // 12
