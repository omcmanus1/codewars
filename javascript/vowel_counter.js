function getCount(str) {
    let arrCheck = str.split('')
    let count = 0
    for (x in arrCheck) {
        switch (arrCheck[x]) {
            case 'a': count++;
            break;
            case 'e': count++;
            break;
            case 'i': count++;
            break;
            case 'o': count++;
            break;
            case 'u': count++;
            break;
        }
    }
    return count
}

str = 'affgoogeeghhuih'

getCount(str)

// Better idea: don't set array and loop

// function getCount(str) {
//     return (str.match(/[aeiou]/ig)||[]).length;
//   }