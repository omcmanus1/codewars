function parse(data) {
  let initialValue = 0;
  let returnArray = [];
  for (let x of data) {
    if (x === "i") {
      initialValue++;
    }
    if (x === "s") {
      initialValue = initialValue ** 2;
    }
    if (x === "d") {
      initialValue--;
    }
    if (x === "o") {
      returnArray.push(initialValue);
    }
  }
  return returnArray;
}

input = "iiisdoso";

console.log(parse(input));
