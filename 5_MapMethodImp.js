// Map Method implementation
var map = function (arr, fn) {
  let newarray = [];
  for (let i = 0; i < arr.length; i++) {
    // Call the provided function `fn` with the current element and index
    // Push the result of `fn` into the new array
    newarray[i] = fn(arr[i], i);
  }
  return newarray;
};

function fn(x) {
  // Custom function
  return x * 2;
}

const arr = [1, 2, 3, 4, 5];
console.log(map(arr, fn)); // Output: [2, 4, 6, 8, 10]
