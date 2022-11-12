function solution(start, finish) {
    let remainder = (finish - start) % 3
    if(remainder != 0) {
        return Math.floor((finish - start) / 3) + remainder
    }
    else return Math.floor((finish - start) / 3)
}

start = 60
finish = 975

console.log(solution(start, finish))