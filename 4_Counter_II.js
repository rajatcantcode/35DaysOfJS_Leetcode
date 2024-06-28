// Closures
// Make a function that returns tools to increase, decrease, or
// reset a number you give it.

var createCounter = function (init) {
  let v = init;
  return {
    increment: () => {
      init = init + 1;
      return init;
    },
    decrement: () => {
      init = init - 1;
      return init;
    },
    reset: () => {
      init = v;
      return init;
    },
  };
};
const counter = createCounter(5);
console.log(counter.decrement()); // 4
console.log(counter.increment()); // 5 previous value was 4
console.log(counter.reset()); // 5 reset the value
