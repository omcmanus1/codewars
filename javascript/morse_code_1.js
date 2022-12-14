let MORSE_CODE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
  "|": " ",
};

function decodeMorse(input) {
  // split string into 2 arrays (on 3 spaces)
  let words = input.split("  ");
  // map calls anonymous function on 2x above arrays
  // split words inside each array into substrings for each letter
  let letters = words.map((w) => w.split(" "));
  let decoded = [];
  for (let i = 0; i < letters.length; i++) {
    decoded[i] = [];
    // iterate through each letter of 2x arrays
    for (let x = 0; x < letters[i].length; x++) {
      if (MORSE_CODE[letters[i][x]]) {
        decoded[i].push(MORSE_CODE[letters[i][x]]);
      }
    }
  }
  // anonymous function with arr as param
  // return array as string (join letters with no spaces)
  decoded = decoded.map((arr) => arr.join(""));
  // convert 2x arrays as string joined by space, remove whitespaces
  return decoded.join(" ").trim();
}

input = ".... . -.--   .--- ..- -.. .";
console.log(decodeMorse(input));
