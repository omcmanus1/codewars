function giveChange(amount) {
    let arr = []
    let hunRemainder = amount % 100
    let hundredBills = (amount - hunRemainder) / 100
    let fifRemainder = hunRemainder % 50
    let fiftyBills = Math.floor((hunRemainder - fifRemainder) / 50)
    let twenRemainder = fifRemainder % 20
    let twentyBills = Math.floor((fifRemainder - twenRemainder) / 20)
    let tenRemainder = twenRemainder % 10
    let tenBills = Math.floor((twenRemainder - tenRemainder) / 10)
    let fiveRemainder = tenRemainder % 5
    let fiveBills = Math.floor((tenRemainder - fiveRemainder) / 5)
    let oneBills = fiveRemainder
    arr = [oneBills, fiveBills, tenBills, twentyBills, fiftyBills, hundredBills]
    return arr
}

amount = 217

console.log(giveChange(amount))