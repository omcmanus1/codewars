// take an array (=>3) of integers
// either entirely odd or even (except 1)
// return this outlier

function findOutlier(int) {
  let outlier = "";
  if (int[0] % 2 === 0 && int[1] % 2 === 0) {
    for (y of int) if (y % 2 != 0) return y;
  }
  if (int[0] % 2 != 0 && int[1] % 2 != 0) {
    for (x of int) if (x % 2 === 0) return x;
  }
  if (int[0] % 2 === 0 && int[2] % 2 === 0) {
    for (y of int) if (y % 2 != 0) return y;
  }
  if (int[0] % 2 != 0 && int[2] % 2 != 0) {
    for (x of int) if (x % 2 === 0) return x;
  }
  if (int[1] % 2 === 0 && int[2] % 2 === 0) {
    for (y of int) if (y % 2 != 0) return y;
  }
  if (int[1] % 2 != 0 && int[2] % 2 != 0) {
    for (x of int) if (x % 2 === 0) return x;
  }
}

const int = [-184156031, 35161236, 14747434];
console.log(findOutlier(int));
