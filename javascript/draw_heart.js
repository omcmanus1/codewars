// function draw(n){
//   midLine =
//   block = '■'
//   downLft = '◥'
//   downRt = '◤'
//   upLft = '◣'
//   upRt = '◢'
//   empty = ' '

//   for (i = 0; i < n-1 ; i++) {
//     midLine = midLine + block
//   }
//   return midLine
// }

// n = 8

// console.log(draw(n))

function draw(n) {
  let heart = ("◢" + "■".repeat(n / 2 - 2) + "◣").repeat(2);

  for (let i = Math.floor(n / 6); i > 0; i--) heart += "\n" + "■".repeat(n);

  for (let i = 0, m = n / 2; i < m; i++)
    heart +=
      "\n" +
      " ".repeat(i) +
      "◥" +
      "■".repeat(n - 2 * i - 2) +
      "◤" +
      " ".repeat(i);

  return heart;
}

n = 18;

console.log(draw(n));
