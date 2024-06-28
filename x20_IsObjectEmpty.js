/*
Given an object or an array, return if it is empty.

An empty object contains no key-value pairs.
An empty array contains no elements.

You may assume the object or array is the output of JSON.parse
*/
var isEmpty = function (obj) {
  if (Object.keys(obj).length === 0) {
    return true;
  } else {
    return false;
  }
};

var obj = { x: 5, y: 42 }; //false
var obj2 = {}; //true
var obj3 = [null, false, 0]; //false

console.log(isEmpty(obj));
console.log(isEmpty(obj2));
console.log(isEmpty(obj3));
