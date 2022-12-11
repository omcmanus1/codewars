function inArray(array1, array2){
    const arr = []
    for (let x in array2) {
        for (let y in array1) {
            // ensure to search for item in position, not just index
            if (array2[x].includes(array1[y])) {
                arr.push(array1[y])
            }
        }
    }
    // remove duplicates from array
    let newArr = [... new Set(arr)]
    // sort array 
    return newArr.sort()
}

array1 = ["live", "mice", "bull"]
array2 = ["lively", "alive", "harp", "sharp", "armstrong"]

console.log(inArray(array1, array2))

