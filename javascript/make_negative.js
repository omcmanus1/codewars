function makeNegative(num) {
  if (num === 0) return 0;
  if (num > 0) return Math.abs(num) * -1;
  if (num < 0) return num;
}

const num = -44;

console.log(makeNegative(num));
