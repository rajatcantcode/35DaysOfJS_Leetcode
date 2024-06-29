/*
Create a class ArrayWrapper that takes an array of integers in its constructor. 
This class should have two features:

-Adding two instances using the + operator returns the sum of all elements in both arrays.
-Calling String() on an instance returns a comma-separated string of the array elements, surrounded by brackets (e.g., [1,2,3]).
*/

// class or function after all they both are objects
var ArrayWrapper = function (nums) {
  this.array = nums;
};

ArrayWrapper.prototype.valueOf = function () {
  return this.array.reduce((sum, currentValue) => {
    return sum + currentValue;
  }, 0);
};

ArrayWrapper.prototype.toString = function () {
  return "[" + this.array.join(",") + "]";
};

const obj1 = new ArrayWrapper([1, 2]);
const obj2 = new ArrayWrapper([3, 4]);
console.log(obj1 + obj2); // 10
console.log(String(obj1)); // "[1,2]"
console.log(String(obj2)); // "[3,4]"
