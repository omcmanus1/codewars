// convert last 4 characters of string to "#" symbols

function maskify(cc) {
  const ccArray = cc.split("");
  const maskedArr = ccArray.map((char, index) => {
    if (index > ccArray.length - 5 && index <= ccArray.length - 1) {
      return char;
    } else return "#";
  });
  return maskedArr.join("");
}

console.log(maskify("Nananananananananananananananana Batman!"));
