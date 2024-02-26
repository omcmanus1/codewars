package kata

import (
	"strings"
)

func PartList(inp []string) string {
	var output string

	if len(inp) <= 1 {
		return output
	}

	for i := 1; i < len(inp); i++ {
		if i == 0 {
			continue
		}
		var tempStr string
		firstChunk := strings.Join(inp[:i][:], " ")
		secondChunk := strings.Join(inp[i:][:], " ")
		tempStr = "(" + firstChunk + ", " + secondChunk + ")"
		output += tempStr
	}
	return output
}
