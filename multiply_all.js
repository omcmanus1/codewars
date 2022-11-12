let arr = [1,2,3]
let int = 3
let finalArr = []

let answer = 
    arr =>
        int => 
             arr.forEach(element => {
                finalArr.push(element * int)
             });
    return finalArr


console.log(answer(arr)(int))


// arr.forEach(element => {
//     finalArr.push(element * int)
// })
// console.log(finalArr)