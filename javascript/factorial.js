function factorial(n) {
  if (n < 0 || n > 12) {
    throw new RangeError("The argument must be between 0 and 12");
  }
  answer = 1;
  for (x = 1; x <= n; x++) {
    answer *= x;
  }
  return answer;
}

console.log(factorial(9));
