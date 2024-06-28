/*
The task is to run a bunch of asynchronous functions at the same time, 
without using a helper tool (Promise.all). We need to:
-Wait until all functions finish successfully, then combine their results in an array.
-If any function fails, immediately stop and report the first error we encounter.
*/

var promiseAll = async function (functions) {
  return await new Promise((resolve, reject) => {
    let result = Array(functions.length); // we will be sharing output
    let waitingFor = functions.length; //This will help us to check whether all Functions are resolved or not
    for (let i = 0; i < functions.length; i++) {
      functions[i]()
        .then((response) => {
          result[i] = response;
          waitingFor--;
          if (waitingFor === 0) resolve(result);
        })
        .catch(reject);
    }
  });
};

const promise1 = () => new Promise((resolve) => resolve(42));
const promise2 = () => new Promise((resolve) => resolve("Rajat Sharma"));
const promise = promiseAll([promise1, promise2]);
promise.then(console.log); // [ 42, 'Rajat Sharma' ]

//Another way - make sure promises are in arrays and () mention after
const BuiltIn = Promise.all([promise1(), promise2()])
  .then((response) => console.log(response))
  .catch((error) => {
    console.log(error);
  });

console.log(BuiltIn);
