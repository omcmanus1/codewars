function descendingOrder(n){
    numArr = Array.from(String(n), Number)
    descArr =  numArr.sort((a, b) => b - a)
    return Number(descArr.join(''))
}

n = 145263
console.log(descendingOrder(n))