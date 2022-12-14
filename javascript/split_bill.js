function splitTheBill(x) {
  const personCount = Object.keys(x).length;
  const totalSpend = Object.values(x).reduce((a, b) => a + b);
  const avgSpend = totalSpend / personCount;
  for (const value in x) {
    x[value] = x[value] - avgSpend;
    // round to at most 2 decimals if necessary
    x[value] = Math.round((x[value] + Number.EPSILON) * 100) / 100;
  }
  return x;
}

var group = {
  A: 666,
  B: 250,
  C: 1044,
};

console.log(splitTheBill(group));
