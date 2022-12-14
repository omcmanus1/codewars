function whatsBetween(a, b) {
  arr = [];
  for (i = a; i <= b; i++) {
    arr.push(i);
  }
  return arr;
}
console.log(whatsBetween(3, 23));
