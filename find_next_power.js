function findNextPower(val, pow) {
    // find base number from final value and power
    // limit to string with 4 decimals, convert back to number
    baseNum = Number(Math.pow(val, 1/pow).toFixed(4))
    // round down, then add one - power the result
    nextPow = Math.floor(baseNum + 1) ** pow
    return nextPow
}

console.log(findNextPower(4782969, 7))

