// Reduce Implementation
var reduce = function (nums, fn, init) {
  let sum = init;
  for (let i = 0; i < nums.length; i++) {
    sum = fn(sum, nums[i]);
  }
  return sum;
};

function fn(x, y) {
  return x + y;
}

const nums = [1, 2, 3, 4, 5];
console.log(reduce(nums, fn, 0)); // Output: 15
console.log(reduce(nums, fn, 5)); // Output: 20
