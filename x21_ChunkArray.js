/*
Divide an array (arr) into smaller chunks (chunked array), 
each with a maximum size (size). If the last chunk has fewer elements, that's fine.
Do this without external tools.

arr = [1,2,3,4,5], size = 1
[[1],[2],[3],[4],[5]]

arr = [1,9,6,3,2], size = 3
[[1,9,6],[3,2]]
*/

function chunk(arr, size) {
  const parentArray = [];
  let currentChunk = [];

  for (let i = 0; i < arr.length; i++) {
    currentChunk.push(arr[i]);

    // if size of array is 5 and max chunk 2 = [[1,2][3,4]] 5 will not be print
    // Because the last chunk will not have currentChunk.length === size
    // For that add this line i === arr.length - 1 so that we can put every time last element
    if (currentChunk.length === size || i === arr.length - 1) {
      parentArray.push(currentChunk);
      currentChunk = []; // Start a new chunk
    }
  }

  return parentArray;
}

let arr = [1, 2, 3, 4, 5];
let size = 2;
let newarray = chunk(arr, size);
console.log(newarray);
