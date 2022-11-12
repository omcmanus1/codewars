function countDays(d){
    // set timestamp to 0 (hours, mins, seconds, ms)
    let input = d.setHours(0,0,0,0)
    let today = new Date().setHours(0,0,0,0);
    if (input < today) {
        return "The day is in the past!"
    }
    if (input == today) {
        return "Today is the day!"
    }
    if (input > today) {
        // convert milliseconds to days
        let daysToWait = (input - today)/8.64e+7
        return `${daysToWait} days`
    }
}

console.log(countDays(new Date(2022, 15, 22)))