// take array of integers and return computed values:
// 1: total amount of integers
// 2: total amount of different values
// 3: total amount of unique values
// 4: element(s) with the max occurence, sorted if more than one
// 5: occurence count of task 4
// 4 & 5 are returned as a slice

package kata

import "sort"

func CountInput(inp []int) []interface{} {
	var output []interface{}
	var totalCount int
	// pre-allocate length for performance
	unique := make(map[int]int, len(inp))
	var singularCount int
	var max int
	var occurenceCount int
	var maxVals = make([]int, 1)

	for _, val := range inp {
		unique[val]++
		totalCount++
	}

	for key, val := range unique {
		if val == 1 {
			singularCount++
		}
		if val > max {
			maxVals = []int{key}
			occurenceCount = val
			max = val
		} else if val == max {
			maxVals = append(maxVals, key)
		}
	}
	sort.Ints(maxVals)
	occurenceSlice := []interface{}{maxVals, occurenceCount}

	output = append(output, totalCount, len(unique), singularCount, occurenceSlice)
	return output
}
