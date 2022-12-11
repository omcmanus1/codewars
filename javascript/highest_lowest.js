function highAndLow(numbers) {
    low = (numbers.split(" ").sort((a, b) => a - b))[0]
    high = (numbers.split(" ").sort((a, b) => b - a))[0]
    return `${high} ${low}`
}

const numbers = ("1 2 3 4 5")
console.log(highAndLow(numbers))