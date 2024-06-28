// The task is to modify a function to remember and reuse
// its past results (memoization) for specific calculations (sum, Fibonacci, factorial).
// Dynamic Programming's Memoization is a technique used in computing to store the results of expensive function calls
// and return the cached result when the same inputs occur again.

function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (key in cache) {
      return cache[key];
    }
    const functionOutput = fn(...args);
    cache[key] = functionOutput;
    return functionOutput;
  };
}
