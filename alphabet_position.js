function alphabetPosition(text) {
    let arrAnswer = [...text].map(a => parseInt(a, 36) - 9).filter(a => a >= 0);
    arrAnswer = arrAnswer.filter(a => a != '0');
    return arrAnswer.join(" ");
    // let alphabetArr = "abcdefghijklmnopqrstuvwxyz".split('');
    // let textArr = text.split('');
    // let answerArr = []
    // console.log(textArr)
    // for (x of textArr) {
    //     for (y of alphabetArr) {
    //         // if (x === y) answerArr.push(alphabetArr.indexOf(y))
    //     }
    // }
    return answerArr
}

const text = ".{mphm?9"
console.log(alphabetPosition(text))