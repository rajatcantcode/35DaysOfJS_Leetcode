/*
Combine two arrays of objects with unique IDs.
Sort the result by ID. If an object appears only in one array, 
include it as is. If the same ID appears in both arrays, combine 
their properties, giving priority to values from the second array.

Example: 
arr1 = [
    {"id": 1, "x": 2, "y": 3},
    {"id": 2, "x": 3, "y": 6}
], 
arr2 = [
    {"id": 2, "x": 10, "y": 20},
    {"id": 3, "x": 0, "y": 0}
]
Output: 
[
    {"id": 1, "x": 2, "y": 3},
    {"id": 2, "x": 10, "y": 20},
    {"id": 3, "x": 0, "y": 0}
]

Example 2 : 
arr1 = [
    {"id": 1, "b": {"b": 94},"v": [4, 3], "y": 48}
]
arr2 = [
    {"id": 1, "b": {"c": 84}, "v": [1, 3]}
]
Output: [
    {"id": 1, "b": {"c": 84}, "v": [1, 3], "y": 48}
]
*/

const arr1 = [
  { id: 1, x: 2, y: 3 },
  { id: 2, x: 3, y: 6 },
];
const arr2 = [
  { id: 2, x: 10, y: 20 },
  { id: 3, x: 0, y: 0 },
];

var combine = (arr1, arr2) => {
  const result = {};
  for (let i = 0; i < arr1.length; i++) {
    result[arr1[i].id] = arr1[i];
    // result[1] = { id: 1, x: 2, y: 3 }
  }

  // { '1': { id: 1, x: 2, y: 3 }, '2': { id: 2, x: 3, y: 6 } }

  for (let i = 0; i < arr2.length; i++) {
    //if the arr2 id already exist
    if (result[arr2[i].id]) {
      // Loop over that
      // For in loops through the properties of an Object
      for (const key in arr2[i]) {
        console.log(key);
        // keys of arr2[1] are id , x , y
        // overriding the id's value
        // result[2][id] = arr2[1][id]
        result[arr2[i].id][key] = arr2[i][key];
        console.log(result[arr2[i].id][key]); //2 , 10 , 20
      }
    } else {
      // if key not exist then create the new key and put that value
      result[arr2[i].id] = arr2[i]; //{ id: 3, x: 0, y: 0 }
    }
  }
  const resultArray = Object.values(result);
  return resultArray;
};

const result = combine(arr1, arr2);
console.log(result);
