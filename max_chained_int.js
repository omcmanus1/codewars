function maxIntChain(n) {
    let x = 2
    let y = n - x
    if (n < 5) return -1
    for (x = 2; x <= y; x++) y--
    return x * y
}

console.log(maxIntChain(36))