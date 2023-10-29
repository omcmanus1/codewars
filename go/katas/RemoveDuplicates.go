package katas

import (
	"golang.org/x/exp/slices"
)

func SlicesSolve(arr []int) []int {
	var output []int
	for i := range arr {
		if !slices.Contains(output, arr[i]) {
			output = append(output, arr[i])
		}
	}
	return output
}

func KeepFirstUnique(arr []int) []int {
	var output []int
	for i := range arr {
		entry := arr[i]
		exists := false
		for j := range output {
			if entry == output[j] {
				exists = true
			}
		}
		if !exists {
			output = append(output, entry)
		}
	}
	return output
}
