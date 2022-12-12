function catPredictor (startDate, endDate) {
    const sD = new Date(startDate)
    const eD = new Date(endDate)
    let baseNum = 0
    if (sD.getDay() !== 0) baseNum++
    if (eD.getDay() !== 0) baseNum++
    let milliSeconds = eD - sD + (baseNum * 86400000)
    let days = (milliSeconds / (86400000))
    let calcDays = days - (days / 7)
    return Math.floor(calcDays * 1.15)
}

startDate = '7/12/1998'
endDate = '11/7/2012'

console.log(catPredictor(startDate, endDate))