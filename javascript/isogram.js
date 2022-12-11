function isIsogram(str){
    let strSorted = str.toLowerCase().split('').sort()
    let answer = true
    for (x of strSorted) {
        if (strSorted.indexOf(x) != strSorted.lastIndexOf(x)) answer = false
    }
    return answer
}

const str = 'Mooose'
console.log(isIsogram(str))