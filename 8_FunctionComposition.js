// Combine a list of functions which will passed as an array into one
// where the result of each is piped into the next from right to left .

var compose = function (functions) {
  return function (x) {
    let sum = x;
    for (let i = functions.length - 1; i >= 0; i--) {
      let current = functions[i];
      sum = current(sum);
    }
    return sum;
  };
};

var value = 4;
var fxns = [add1, add2, add3];
var result = compose(fxns)(value);
console.log(result);

// add1(add2(add3(4)))
// add1(add2(4 * 3 = 12))
// add1(12 * 2 = 24)
// 24 + 1 = 25

function add1(x) {
  return x + 1;
}
function add2(x) {
  return x * 2;
}
function add3(x) {
  return x * 3;
}
