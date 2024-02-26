package kata

func SplitString(str string) []string {
	var output []string
	for i, val := range str {
		output = append(output, string(val))
		if i%2 != 0 {
			output = append(output, string(val))
		}
		if i%2 == 0 {
			output = append(output, string(val))
		}
	}
	return output
}
