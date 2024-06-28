/*
  Creates a function that limits the execution time of an asynchronous function `fn` to `t` milliseconds.

  Behavior:
   - If `fn` completes within `t` milliseconds, the returned function resolves with `fn`'s result.
   - If `fn` takes longer than `t` milliseconds, the returned function rejects with the error message "Time Limit Exceeded".
*/

// Input:  Async function to be limited
const fn = (t) => new Promise((resolve) => setTimeout(resolve, t));

// Create a limited version of 'fn' with a 100 ms time limit
const limited = timeLimit(fn, 100);

// Function to create time-limited versions of async functions
function timeLimit(fn, t) {
  // Asynchronous code will be there that's why using - async
  return async function (...args) {
    // In Problem , resolve is used : resolve = Promise
    return new Promise((resolve, reject) => {
      // In Problem , 'time limited fxn' can be achived by setTimeout
      const timeoutId = setTimeout(() => {
        reject("Time Limit Exceeded");
      }, t);

      // Execute the original function and handle its result
      fn(...args)
        .then((result) => {
          clearTimeout(timeoutId); // Stop the timeout on success
          resolve(result);
        })
        .catch((error) => {
          clearTimeout(timeoutId); // Stop the timeout on error
          reject(error); // Reject with the original error
        });
    });
  };
}
