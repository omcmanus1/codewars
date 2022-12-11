// setHours - transforms to UTC. Need to wrap in new Date again
// use .toTimeString on new Date constructor to change back to string
// time increments need to be added in milliseconds
// NEED TO FIND SOLUTION FOR ANSWER PAST MIDNIGHT

function movie_times(open, close, length) {
    // set time formats
    let openHour = new Date(new Date().setHours(open, 0, 0, 0)).getTime()
    let closedHour = new Date(new Date().setHours(close, 0, 0, 0)).getTime()
    if (close < 7) closedHour += 8.64e+7
    console.log(`open: ${new Date(openHour).toTimeString()}`)
    console.log(`close: ${new Date(closedHour).toTimeString()}`)
    // calculate millisecond values
    let mSRunTime = length * 60000
    let mSInterval = 15 * 60000
    // set initial time values
    let answer = [[open, 0]]
    let time = openHour
    // loop through
    // add interval
    // check if remaining runtime possible before closing time
    while (time + mSRunTime + mSInterval < closedHour) {
        time += mSInterval
        time += mSRunTime
        if (time < closedHour) {
            let timeArr = new Date(time).toTimeString().split(':')
            answer.push([Number(timeArr[0]), Number(timeArr[1])])
        }
    }
    return answer
}

console.log(movie_times(16, 3, 75))