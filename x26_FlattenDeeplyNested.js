/*
Flatten a nested array up to a given depth n. 
If an array is found at a depth less than n,
its elements are extracted and placed directly into the flattened array.
Don't use the built-in Array.flat method.

Example 1 : 
arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
n = 0;
Output
[1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]] - no change 

Example 2 : 
arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
n = 1
Output
[1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]

Example 3 : 
arr = [[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
n = 2
Output
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

 */

// recurssion
var flat = (arr, n) => {
  //array.slice(start, end)
  if (n === 0) {
    return arr.slice();
    // With .slice(no arguments) a shallow copy will be returned
    // In future what if we need to modify our array so we could easily change
  }
  const newFlatArray = [];
  for (let i = 0; i < arr.length; i++) {
    // We will check on which index we are getting our 2nd array that is [1,2,[1,2]]
    if (Array.isArray(arr[i])) {
      //This will help us to get index where the next array will start
      const nestedElements = flat(arr[i], n - 1);
      newFlatArray.push(...nestedElements);
    } else {
      //if it's not a array
      newFlatArray.push(arr[i]);
    }
  }

  return newFlatArray;
};

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, [9, 10, 11], 12],
  [13, 14, 15],
];
let n = 2;
let result = flat(arr, n);
console.log(result);
