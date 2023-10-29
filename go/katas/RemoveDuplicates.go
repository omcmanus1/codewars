package katas

import (
	"fmt"

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

func Solve(arr []int) (res []int) {
	visited := map[int]bool{}
	fmt.Println(visited[0])
	for i := len(arr) - 1; i >= 0; i-- {
		n := arr[i]
		if visited[n] {
			continue
		}
		visited[n] = true
		res = append([]int{n}, res...)
	}
	return
}
