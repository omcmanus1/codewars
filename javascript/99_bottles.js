function bottles() {
  let song = [];
  let index = 99;
  while (index > 2) {
    song.push(
      `${index} bottles of beer on the wall, ${index} bottles of beer.`
    );
    index -= 1;
    song.push(
      `Take one down and pass it around, ${index} bottles of beer on the wall.`
    );
  }
  if (index === 2) {
    song.push("2 bottles of beer on the wall, 2 bottles of beer.");
    song.push(
      "Take one down and pass it around, 1 bottle of beer on the wall."
    );
  }
  song.push("1 bottle of beer on the wall, 1 bottle of beer.");
  song.push(
    "Take one down and pass it around, no more bottles of beer on the wall."
  );
  song.push("No more bottles of beer on the wall, no more bottles of beer.");
  song.push(
    "Go to the store and buy some more, 99 bottles of beer on the wall."
  );
  return song;
}

console.log(bottles());
