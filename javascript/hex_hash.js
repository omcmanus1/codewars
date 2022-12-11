function hexHash(code) {
    // encode to hex values
    hexValues = Buffer.from(code).toString('hex')
    // remove all non-digits
    hexNumbers = hexValues.replace(/[^\d]/g,'')
    console.log(hexNumbers)
    // turn into array of numbers
    hexArray = (hexNumbers.split('')).map(Number)
    // sum all elements of array
    answer = hexArray.reduce((a, b) => a + b, 0)
    console.log(answer)
}

code = 'Hello, World'

hexHash(code)

// decode from hex to string
// Buffer.from(encoded, 'hex').toString()