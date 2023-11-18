package katas

func ListFiltering(arr []interface{}) []int {
	var output []int
	for _, v := range arr {
		// type assertion with ,ok syntax to check validity
		parsedInt, ok := v.(int)
		if ok {
			output = append(output, parsedInt)
		}
	}
	return output
}
