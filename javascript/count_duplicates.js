// Return count of duplicate characters (numberic or alphabetic)
// from the input string (case insensitive)

function duplicateCount(text) {
    let lowerSorted = text.toLowerCase().split('').sort();
    let instanceArr = []
    for (n of lowerSorted) {
        if ((lowerSorted.indexOf(n) != lowerSorted.lastIndexOf(n)) && instanceArr.includes(n) == false) {
            instanceArr.push(n)
        }
    }
    return instanceArr.length
}

const text = "Indivisibilities"
console.log(duplicateCount(text))