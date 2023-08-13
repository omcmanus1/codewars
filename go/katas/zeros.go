package katas

/*
DOUBLE FACTORIAL:
n!! = 1 * 3 * 5 * ... * n if n is odd,
n!! = 2 * 4 * 6 * ... * n if n is even.

Task:
For n, return how many zeros are at the end of n!!

Logic:
- Recursive factorial function
- Decrement by 2 instead of 1
- Loop through result from end:
	- Push to array if 0
	- Break if not 0
	- Return array length
*/

import (
	"fmt"
	"math/big"
)

func SplitInt(n int) []int {
	slc := []int{}
	for n > 0 {
		slc = append(slc, n%10)
		n = n / 10
	}
	fmt.Println(slc)
	return slc
}

func DoubleFactorial(n int) int {
	res := 1
	for i := n; i >= 0; i -= 2 {
		if i == 0 || i == 1 {
			break
		} else {
			res *= i
		}
	}
	fmt.Println("bigInt: ", big.NewInt(int64(res)))
	return res
}

func CountZeros(n int) int {
	result := DoubleFactorial(n)
	// println("result: ", result)
	resultArray := SplitInt(int(result))
	count := 0
	for _, val := range resultArray {
		if val != 0 {
			break
		}
		if val == 0 {
			count++
		}
	}
	return count
}
