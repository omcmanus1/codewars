function filter_list(l) {
  // answer = []
  // for (ints in l) {
  //     let result = Number.isInteger(l[ints])
  //     if (result) {
  //         answer.push(l[ints])
  //     }
  // }
  // return answer
  return l.filter((entry) => Number.isInteger(entry));
}

const l = [1, 2, "aasf", "1", "123", 123];

console.log(filter_list(l));
