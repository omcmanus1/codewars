// return middle character of string if odd
// return middle 2 characters if even

function getMiddle(str) {
    if (str.length % 2 === 0){
        return (str[str.length / 2 - 1] + str[str.length / 2])
    }
    return str[Math.floor(str.length / 2)]
}

const str = "middle"
console.log(getMiddle(str))