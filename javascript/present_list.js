function howManyGifts(maxBudget, gifts) {
    let runTotal = 0
    let numGifts = 0
    giftsAsc = gifts.map((x) => x).sort((a, b) => a - b);
    console.log(gifts);
    console.log(giftsAsc);
    for (x in giftsAsc){
        if (maxBudget === 0 && giftsAsc[x] > 0) return 0
        if (runTotal >= maxBudget) break
        if (maxBudget - runTotal < giftsAsc[x]) break
        runTotal = runTotal + giftsAsc[x]
        numGifts++
    }
    return numGifts
}

const maxBudget = 29
const gifts = [1, 13, 23, 12, 5, 2, 6, 3, 18]

console.log(howManyGifts(maxBudget, gifts))