var humanYearsCatYearsDogYears = function (humanYears) {
  let answer = [humanYears, 0, 0];
  if (humanYears === 1) answer = [1, 15, 15];
  else if (humanYears === 2) answer = [2, 24, 24];
  else {
    answer[1] = 24 + 4 * (humanYears - 2);
    answer[2] = 24 + 5 * (humanYears - 2);
  }
  return answer;
};
