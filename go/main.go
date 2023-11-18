package main

import (
	"codewars/katas"
	"fmt"
)

func main() {
	var arr []interface{}
	arr = append(arr, 1, 2, 'a', 'b', 443, "..", 34)
	fmt.Println(katas.ListFiltering((arr)))
}
