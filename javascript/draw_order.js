const deck = ["KC", "KH", "QC", "KS", "KD", "QH", "QD", "QS"];

function draw(deck) {
  let drawnCards = [];
  while (deck.length > 1) {
    // shift returns first element
    drawnCards.push(deck.shift());
    deck.push(deck.shift());
  }
  return drawnCards.concat(deck);
}

console.log(draw(deck));
