package kata

func Maps(x []int) []int {
	var output []int
	for _, val := range x {
		output = append(output, val*2)
	}
	return output
}
