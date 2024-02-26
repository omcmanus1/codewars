package kata

import (
	"fmt"
	"strconv"
)

func CountBits(num uint) int {
	converted := int64(num)
	bin := fmt.Sprintln(strconv.FormatInt(converted, 2))
	print(bin)
	count := 0
	for i := 0; i <= len(bin)-1; i++ {
		digit, _ := strconv.Atoi(string(bin[i]))
		if digit == 1 {
			count++
		}
	}
	return count
}
