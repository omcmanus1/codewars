package kata

func FindMultiples(integer, limit int) []int {
	output := []int{}
	for i := 1; i <= limit; i++ {
		if (integer*i <= limit) && (integer*i%integer) == 0 {
			output = append(output, integer*i)
		}
	}
	return output
}
