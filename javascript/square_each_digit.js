function squareDigits(num) {
  // split integer into array of digits
  numArr = Array.from(String(num), Number);
  finalArr = [];
  for (x in numArr) {
    finalArr.push(numArr[x] ** 2);
  }
  // concatenate numerical array
  return Number(finalArr.join(""));
}

const num = 9119;

console.log(squareDigits(num));
