// function argumentsLength that returns the count of arguments passed to it.

var argumentsLength = function (...args) {
  let arguments = [...args];
  return arguments.length;
};

console.log(argumentsLength(1, 2, 3, "Rajat")); // 4
