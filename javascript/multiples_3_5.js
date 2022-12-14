function solution(number) {
  arr = [];
  if (number < 0) {
    arr.push(0);
  } else {
    for (i = 1; i < number; i++) {
      if (i % 15 === 0) {
        arr.push(i);
      } else if (i % 5 === 0) {
        arr.push(i);
      } else if (i % 3 === 0) {
        arr.push(i);
      }
    }
  }
  return arr.reduce((a, b) => a + b, 0);
}

number = 340;
console.log(solution(number));
