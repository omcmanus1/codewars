function isValidWalk(walk) {
  arr = walk.sort();
  function countInstances(target) {
    let count = 0;
    for (x of arr) {
      if (x == target) {
        count++;
      }
    }
    return count;
  }
  if (arr.length != 10) {
    return false;
  } else if (
    countInstances("n") === countInstances("s") &&
    countInstances("e") === countInstances("w")
  ) {
    return true;
  } else {
    return false;
  }
}

let walk = ["n", "n", "s", "n", "s", "n", "s", "n", "s", "s"];

console.log(isValidWalk(walk));
