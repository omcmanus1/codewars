package katas

import (
	"strconv"
	"unicode"
)

func SumOfIntegersInString(strng string) int {
	sum := 0
	tempStr := ""
	for i, v := range strng {
		if unicode.IsDigit(v) {
			tempStr += string(v)
		} else if !unicode.IsDigit(v) && tempStr != "" {
			val, _ := strconv.Atoi(tempStr)
			sum += val
			tempStr = ""
		}
		if i == len(strng)-1 {
			val, _ := strconv.Atoi(tempStr)
			sum += val
			tempStr = ""
		}
	}
	return sum
}
