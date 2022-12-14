// remove smallest value from array
// need to use copy of original to ensure no mutation

function removeSmallest(nums) {
  let lowest = nums.filter((x) => x === Math.min(...nums))[0];
  let answer = [...nums];
  for (x in nums) {
    if (nums[x] === lowest) {
      answer.splice(x, 1);
      break;
    }
  }
  return answer;
}

console.log(removeSmallest([5, 3, 2, 1, 1, 1, 444, 23]));
