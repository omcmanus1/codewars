function findUniq(arr) {
    // find returns first instance of function
    // arrow function checks if first index of instance = last index
    return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n))
}

arr = [ 1, 1, 1, 2, 1, 1 ]

console.log(findUniq(arr))