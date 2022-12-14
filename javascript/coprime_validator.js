function isCoprime(x, y) {
  xFactors = [];
  yFactors = [];
  for (i = 1; i <= x; i++) {
    if (x % i == 0) xFactors.push(i);
  }
  for (i = 1; i <= y; i++) {
    if (y % i == 0) yFactors.push(i);
  }
  const commonElements = xFactors.filter((element) =>
    yFactors.includes(element)
  );
  if (commonElements != 1) {
    return false;
  } else {
    return true;
  }
}

console.log(isCoprime(10, 45));
