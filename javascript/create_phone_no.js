// convert array of integers to string
// in format of US phone numbers

function createPhoneNumber(numbers) {
  let n = numbers.map(String);
  return `(${n[0] + n[1] + n[2]}) ${n[3] + n[4] + n[5]}-${
    n[6] + n[7] + n[8] + n[9]
  }`;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(createPhoneNumber(numbers));
