// return multiplicative persitence of num
// i.e. how many times digits of num must be multiplied
// until a single digit is reached

function persistence(num) {
    // split digits into array
    let numArr = Array.from(String(num), Number)
    let count = 0
    if (numArr.length === 1) return 0
    while (numArr.length > 1) {
        numArr = numArr.reduce((x, y) => x * y)
        numArr = Array.from(String(numArr), Number)
        count ++
    }    
    return count
}

const num = 4432
console.log(persistence(num))