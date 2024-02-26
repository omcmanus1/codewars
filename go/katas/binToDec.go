package kata

import "strconv"

func BinToDec(bin string) int {
	num, _ := strconv.ParseInt(bin, 2, 64)
	return int(num)
}
