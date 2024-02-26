package kata

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
	"strings"
)

func DoubleFactorial(n int) *big.Int {
	res := big.NewInt(1)
	for i := n; i >= 1; i -= 2 {
		if i == 0 || i == 1 {
			break
		} else {
			res = res.Mul(res, big.NewInt(int64(i)))
		}
	}
	return res
}

func CountZeros(n int) int {
	resultString := DoubleFactorial(n).String()
	resultArray := strings.Split(resultString, "")
	count := 0
	for i := len(resultArray) - 1; i >= 0; i-- {
		if resultArray[i] != "0" {
			break
		}
		if resultArray[i] == "0" {
			count++
		}
	}
	return count
}

// *** unused now ***

func SplitInt(n int) []int {
	slc := []int{}
	for n > 0 {
		slc = append(slc, n%10)
		n = n / 10
	}
	fmt.Println(slc)
	return slc
}
