package katas

import "strings"

func NoSpace(word string) string {
	return strings.Replace(word, " ", "", -1)
}
