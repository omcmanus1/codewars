// NEED TO UNDERSTAND THIS!!!

function triangle(row) {
  // // split string into even number
  evenInput = row.match(/..?/g);
  oddInput = row.substring(1).match(/..?/g);
  console.log(evenInput);
  console.log(oddInput);
  answer = [];
  for (let x in evenInput) {
    switch (evenInput[x]) {
      case "GG":
        answer.push("G");
        break;
      case "RR":
        answer.push("R");
        break;
      case "BB":
        answer.push("B");
        break;
      case "BG":
        answer.push("R");
        break;
      case "GB":
        answer.push("R");
        break;
      case "RG":
        answer.push("B");
        break;
      case "GR":
        answer.push("B");
        break;
      case "BR":
        answer.push("G");
        break;
      case "RB":
        answer.push("G");
    }
  }
  return answer;
}

row = "RRGBRGBB";
console.log(triangle(row));
