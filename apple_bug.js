function sc(apple) {
    bugRow = []
    for (let y in apple) {
        if (apple[y].includes("B")) {
            bugRow.push(Number(y))
            row = apple[y]
            for (let x in row) {
                if (row[x].includes("B")) {
                    bugRow.push(Number(x))
                }
            }
        }
    }
    return bugRow
}

apple = [
    ["A","A","A","A","A"],
    ["A","A","A","A","A"],
    ["A","A","A","A","A"],
    ["A","A","A","A","A"],
    ["A","B","A","A","A"]
]

console.log(sc(apple))