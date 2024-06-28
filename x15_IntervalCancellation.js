/*
You have a function (fn) and want to call it repeatedly at regular intervals (t milliseconds), starting immediately with some arguments (args). You also want the ability to stop these repeated calls after a certain time (cancelTimeMs).
Immediate Execution: fn is called right away with args.
Repeating Calls: It continues to be called every t milliseconds until cancelFn is called after cancelTimeMs milliseconds.
Cancellation: cancelFn is returned to stop further calls of fn after cancelTimeMs milliseconds.
*/
const cancellable = (fn, args, t) => {
  // At time = 0 ms, call the function immediately mentioned in the examples of question
  fn(...args);
  const cancelFn = () => {
    clearInterval(repeatExecution);
  };
  const repeatExecution = setInterval(() => {
    fn(...args); // Call fn with the provided args array
  }, t);

  return cancelFn;
};

// Practical Use Case - Animating element in HTML
