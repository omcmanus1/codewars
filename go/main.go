package main

import (
	"codewars/katas"
	"fmt"
)

var numbers = []int{8, 6, 4, 2, 6, 1, 3}

func main() {
	fmt.Printf("single pass: %v \n", katas.BubblesortOnce(numbers))
	fmt.Printf("full sort: %v \n", katas.Bubblesort(numbers))
}
