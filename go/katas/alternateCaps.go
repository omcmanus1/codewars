package katas

import "strings"

func Capitalize(st string) []string {
	var outputUpper string
	var outputLower string
	for i, val := range st {
		if i%2 == 0 {
			outputUpper += strings.ToUpper(string(val))
			outputLower += string(val)
		} else {
			outputUpper += string(val)
			outputLower += strings.ToUpper(string(val))
		}
	}
	return []string{outputUpper, outputLower}
}
