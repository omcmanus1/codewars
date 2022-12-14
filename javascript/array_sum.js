function grow(x) {
  const initialValue = 0;
  const arraySum = x.reduce((a, b) => a * b);
  return arraySum;
}

arr = [4, 1, 1, 1, 4];
console.log(grow(arr));
