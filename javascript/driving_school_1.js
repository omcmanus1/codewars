function passed(list) {
  let passedList = list.filter((x) => x <= 18);
  if (passedList.length === 0 || !list) return "No pass scores registered.";
  return Math.round(passedList.reduce((a, b) => a + b, 0) / passedList.length);
}

console.log(passed([21, 22, 24]));
