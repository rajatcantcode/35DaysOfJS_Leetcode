/*
The task is to add a special trick (.last()) to all lists in JavaScript.
This trick should give you the final item in the list, or a special code (-1) 
if the list is empty.
You're basically teaching lists a new way to tell you their 
last member.

nums = [null, {}, 3]
Output: 3

nums = []
-1
*/

Array.prototype.last = function () {
  if (this.length !== 0) {
    return this[this.length - 1]; //last element
  }
  return -1;
};

const nums = [null, {}, 3];
console.log(nums.last());
