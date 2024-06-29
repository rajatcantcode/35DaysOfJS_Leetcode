/*
A compact object is the same as the original object, except with keys containing falsy values removed.
Remove all properties with "falsey" values from an object or array, 
including any nested ones.

Example 1:
obj = {"a": null, "b": [false, 1]}
Output: {"b": [1]}
Explanation: obj["a"] and obj["b"][0] had falsy values and were removed.

Example 2:
obj = [null, 0, 5, [0], [false, 16]]
Output: [5, [], [16]]
Explanation: obj[0], obj[1], obj[3][0], and obj[4][0] were falsy and removed.
*/

var compactObject = (obj) => {
  if (obj === null) {
    return obj;
  }
  // We know our array is eventually a object
  if (typeof obj !== "object") {
    return obj;
  }

  //Checking is our obj is array or not
  if (Array.isArray(obj)) {
    return (
      obj
        .filter(Boolean) //Filter the array with falsy values
        // [0, 1, [2, false, [null, 3]], 4]
        // [1,[2,false,[null,3]],4] - removed 0
        .map(compactObject)
      // To work on our nested array we called map and run recurssion
      //Recurssive call which will solve our array part
    );
  }

  const compacted = {};
  // We will traverse our object
  for (const key in obj) {
    let value = compactObject(obj[key]);
    if (value) {
      compacted[key] = value;
    }
  }
  return compacted;
};

let arr = [0, 1, [2, false, [null, 3]], 4];

console.log(compactObject(arr));
