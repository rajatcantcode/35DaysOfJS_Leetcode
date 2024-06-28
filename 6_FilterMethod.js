//Filter implementation
var filter = function (arr, fn) {
  let newarray = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      newarray.push(arr[i]);
    }
  }
  return newarray;
};

function fn(x) {
  if (x % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

const arr = [1, 2, 3, 4, 5];
console.log(filter(arr, fn)); // Output: [2, 4]
