/*
Given an array arr and a function fn, return a sorted array sortedArr. 
You can assume fn only returns numbers and those numbers determine the sort 
order of sortedArr. sortedArray must be sorted in ascending order by fn output.

Ascending order - chote se bada

You may assume that fn will never duplicate numbers for a given array.

Example 1 : 
arr = [[3, 4], [5, 2], [10, 1]]
fn = (x) => x[1]
[[10, 1], [5, 2], [3, 4]]
arr is sorted in ascending order by number at index=1.

Example 2 : 
arr = [{"x": 1}, {"x": 0}, {"x": -1}]
fn = (d) => d.x
[{"x": -1}, {"x": 0}, {"x": 1}]
fn returns the value for the "x" key. So the array is sorted based on that value.
*/

var sortBy = (arr, fn) => {
  // array.sort(compareFunction);
  // If negative, a should come before b.
  // If positive, b should come before a.
  // Just remember as per docs (a,b) => a-b will always give ascending order
  // Note : The sort method doesn't guarantee a specific order of comparisons. As a example will compare from last index
  const sort = arr.sort((a, b) => fn(a) - fn(b));
  // [[3, 4],[5, 2],[10, 1]]

  // [ 5, 2 ] - a [ 10, 1 ] -b
  //  fn(a) - fn(b) : 2 - 1 = 1 positive so b will come ahead [ 10, 1 ] [ 5, 2 ]

  // [ 3, 4 ] - a [ 5, 2 ] -b
  // fn(a) - fn(b) = 4 -2 = 2 positive so b will come ahead [ 5, 2] , [ 3, 4 ]

  // Result : [ 10 , 1 ][ 5 , 2 ][ 3 , 4 ]

  return sort;
};

const arr = [
  [3, 4],
  [5, 2], //-1
  [10, 1], //-2
];

const fn = (x) => x[1];

var sorted = sortBy(arr, fn);
console.log(sorted);

/*
Array.sort() - Current we are using Node JS which uses v8 Engine
Different web browsers (like Chrome, Firefox) may sort arrays differently behind the scenes, 
but the end result (sorted array) should always be the same.
*/
