//Make a function that waits for a given time and then gives you back a result.
async function sleep(millis) {
  //fxn will pause unless Promise is resolved
  await new Promise((resolve) => setTimeout(resolve, millis));
}

let t = Date.now();
console.log(t);

sleep(5000).then(() => {
  // Task to execute after the delay
  console.log(Date.now() - t);
});
