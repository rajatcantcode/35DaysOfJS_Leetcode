/*
The task is to add a special function Grouped function by (.groupBy()) to all lists in JavaScript. 
This function takes another function (fn) as input.

array = [{ id: "1" }, { id: "1" }, { id: "2" }]
fn = function (item) {
    return item.id;
  };
Output :  { "1": [{"id": "1"}, {"id": "1"}],   
            "2": [{"id": "2"}] 
          } 
Output is from array.groupBy(fn).
The selector function gets the "id" out of each item in the array.
There are two objects with an "id" of 1. Both of those objects are put in the first array.
There is one object with an "id" of 2. That object is put in the second array.

Another Example : 
const array = [
  [1, 2, 3],
  [1, 3, 5],
  [1, 5, 9],
];
fn = function (list) { 
  return String(list[0]); 
}
Output : { "1": [[1, 2, 3], [1, 3, 5], [1, 5, 9]] }
The array can be of any type. In this case, the selector function defines the key as being the first element in the array. 
All the arrays have 1 as their first element so they are grouped together.
{
  "1": [[1, 2, 3], [1, 3, 5], [1, 5, 9]]
}

*/

// Add groupBy as a method on Array.prototype
Array.prototype.groupBy = function (fn) {
  var counter = 0;
  return this.reduce((grouped, item) => {
    // Use 'this' to refer to the array itself
    const key = fn(item);

    // if the key is not available in the group then will put it a new array
    if (!grouped[key]) {
      grouped[key] = [];
      //{ '1': [] }
      //{ '2': [] }
    }
    //push the items into their respective key
    grouped[key].push(item);

    return grouped;
  }, {});
};

const array = [
  [1, 2, 3],
  [1, 3, 5],
  [1, 5, 9],
  [2, 3, 4],
];
const fn = (list) => String(list[0]);
console.log(array.groupBy(fn));
