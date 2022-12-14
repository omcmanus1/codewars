// Add characters to string (target += 'char')

function dnaStrand(dna) {
  result = "";
  for (x in dna) {
    switch (dna[x]) {
      case "A":
        result += "T";
        break;
      case "T":
        result += "A";
        break;
      case "C":
        result += "G";
        break;
      case "G":
        result += "C";
        break;
    }
  }
  return String(result);
}

const dna = "GTAT";

console.log(dnaStrand(dna));
