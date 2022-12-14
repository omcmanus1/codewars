// find the element in an array that appears an odd
// number of times

function findOdd(A) {
  let count = {};
  // count instances of all array elements
  for (let x of A) {
    if (count[x]) {
      count[x] += 1;
    } else {
      count[x] = 1;
    }
  }
  // loop through object
  for (let y in count) {
    if (count[y] % 2 != 0) return Number(y);
  }
}

const A = [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1];
console.log(findOdd(A));
