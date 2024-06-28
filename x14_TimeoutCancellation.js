// Aim : Delay the execution of a function and provide a way to cancel it.

// Steps :
// Create a function 'cancellable' that starts a timer to execute a given function 'fn'
// after a delay 't' millisecondss.
// The 'cancellable' function also returns another function 'cancelFn',
// which when called before 't' milliseconds, cancels the execution of 'fn'.

var cancellable = function (fn, args, t) {
  // Create a Cancel Function
  const cancelFn = () => {
    // Clears the timer, canceling the execution of 'fn'
    clearTimeout(timer);
  };

  // Set a Timer for the Main Function
  const timer = setTimeout(() => {
    // Execute 'fn' with the provided arguments 'args' after 't' milliseconds
    fn(...args);
  }, t);

  // Return the Cancel Function
  return cancelFn;
};

// Practical Usecase 😏 - HTML file - Feedback sumbmission
