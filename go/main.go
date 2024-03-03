package main

import (
	"fmt"

	kata "github.com/omcmanus1/codewars/katas"
)

func main() {
	testArr := []int{1, 1, 2, 3, 4, 5, 6, 7, 8, 3, 3, 4, 5}
	fmt.Println(kata.SlicesSolve(testArr))
}
