// Make a wrapper function that only allows another function to run once.

var once = function (fn) {
  var calledBefore = false;
  return function (...args) {
    if (calledBefore) {
      return undefined;
    } else {
      calledBefore = true;
      return fn(...args);
    }
  };
};

let fn = (a, b, c) => {
  return a + b + c;
};

let onceFn = once(fn); // return fn(...args) and take parameter (...args)
console.log(onceFn(1, 2, 3)); // 6
console.log(onceFn(1, 2, 3)); // undefined
console.log(onceFn(3, 2, 1)); // undefined
