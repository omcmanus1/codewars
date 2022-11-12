function last(x) {
    arrWords = x.split(' ')
    arrLetters = []
    answer = []
    for (let y of arrWords) {
        letters = y.split('')
        arrLetters.push(letters)
    }
    for (let z of arrLetters) z.reverse()
    arrLetters.sort(comparefn)
    for (a of arrLetters) {
        a.reverse()
        a = a.toString(',')
        a = a.replace(/,/g, '')
        answer.push(a)
    }
    return answer
}

x = 'man i need a taxi up to ubud'
console.log(last(x))