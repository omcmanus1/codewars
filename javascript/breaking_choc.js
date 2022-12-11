function breakChocolate(n,m) {
    if (n * m < 2) {
        return 0;
    }
    else {
        return (n * m) - 1
    }
  }

  console.log(breakChocolate(1,1))