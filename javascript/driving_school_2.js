function drivingCost(mins) {
    console.log(`Total time = ${mins}`)
    if (mins <= 65) return 30
    let initialCost = 30
    let remainingMins = mins - 60
    console.log(`Total time = 60 + ${remainingMins}`)
    let halfHours = Math.ceil(remainingMins / 30)
    if (remainingMins % 30 <= 5 && remainingMins % 30 !== 0) halfHours -= 1
    console.log(`Total cost is 30 + ${halfHours} * 10`)
    return initialCost + (halfHours * 10)
}
console.log(drivingCost(420))
