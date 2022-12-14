function minSum(arr) {
  answer = 0;
  // sort array in numerical order
  arrAsc = arr.sort((a, b) => {
    return a - b;
  });
  // create copy of sorted array and reverse inplace
  arrDesc = [...arrAsc].reverse();
  console.log(arrAsc);
  console.log(arrDesc);
  for (let x = 0; x < arrAsc.length / 2; x++) {
    z = arrAsc[x] * arrDesc[x];
    answer += z;
  }
  return answer;
}

arr = [12, 6, 10, 26, 3, 24];

console.log(minSum(arr));
