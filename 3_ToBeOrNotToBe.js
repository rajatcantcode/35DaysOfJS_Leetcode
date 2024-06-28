// Closures
// toBe checks if two values are strictly equal. Throws an error ("Not Equal") if not.
// notToBe checks if two values are not strictly equal. Throws an error ("Equal") if they are.

var expect = function (val) {
  return {
    toBe: (val2) => {
      if (val !== val2) throw new Error("Not Equal");
      else return true;
    },
    notToBe: (val2) => {
      if (val === val2) throw new Error("Equal");
      else return true;
    },
  };
};

console.log(expect(5).toBe(5)); // true
console.log(expect(5).notToBe(5)); // throws "Equal"
