const numArr = [22, 4323, 122, 4, 555, 23, 55532]
numArrSorted = numArr.sort((a, b) => a - b)

const str = "Hi how many times do I have to do this to remember?"
const strArr = str.toLowerCase().split('')
strArrSorted = strArr.sort()

// return last element
strArr[strArr.length - 1]
strArr.at(-1)
// check if arr includes
strArr.includes('r')
// check if arr doesn't include
!strArr.includes('r')



const num = 4442223
// num to array of strings
let numToArr = Array.from(String(num), Number)
console.log(String(num))
