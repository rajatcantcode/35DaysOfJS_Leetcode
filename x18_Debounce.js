/*
A debounced function delays execution until a specified time has passed 
since the last call. If called multiple times within that time frame, only 
the latest call executes after the delay.

Practical UseCase : 
When typing "iphone" in a search bar, instead of searching after each letter, 
debouncing waits a moment before searching, sending only one request for "iphone".
Problem it Solves - unncessary server loads - slow UX 

Imagine sending a text messege but there is a delay t before it actually sends
t = 50ms:
30ms: Message typed, but delayed.
60ms: Previous message canceled, new message typed, delay restarts.
100ms: Previous message canceled, new message typed, delay restarts.
150ms: Third message finally sends.

Ouput : only mssg at 150ms

t = 35ms:
30ms: Message typed, but delayed.
60ms: First message sends (35ms passed).
100ms: Message typed, but delayed.
135ms: Third message sends.

Ouput : only mssg at 135ms

const log = debounce(console.log, 100);
log('Hello'); // cancelled
log('Hello'); // cancelled
log('Hello'); // Logged at t=100ms

*/

// As we want to execute after a duration of time - setTimeout will be used
var debounce = function (fn, t) {
  //iniitializing before as will be needed in clearTimeout which will
  //run before setTimeout
  let timer;
  return function (...args) {
    // This immediately cancels any existing timer if there
    // was a previous call that hasn't executed yet.
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, t);
  };
};

const log = debounce(console.log, 100);
log("hello"); // cancelled
log("Rajat"); // cancelled
log(5); // Logged at t=100ms

/*
30ms: First call. The timer starts counting down from 50ms.
60ms: Second call. The timer is cleared (the first call is canceled), and a new timer starts counting down from 50ms.
100ms: Third call. Again, the timer is cleared (the second call is canceled), and a new timer starts counting down from 50ms.
*/
