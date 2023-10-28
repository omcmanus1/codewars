package katas

func BubblesortOnce(numbers []int) []int {
	numsCopy := make([]int, len(numbers))
	copy(numsCopy, numbers)
	n := len(numsCopy)
	for i := 0; i < n-1; i++ {
		if numsCopy[i] > numsCopy[i+1] {
			temp := numsCopy[i]
			numsCopy[i] = numsCopy[i+1]
			numsCopy[i+1] = temp
		}
	}
	return numsCopy
}

func Bubblesort(numbers []int) []int {
	numsCopy := make([]int, len(numbers))
	copy(numsCopy, numbers)
	var i, j int
	n := len(numsCopy)
	for i = 0; i < n; i++ {
		for j = 0; j < n-i-1; j++ {
			if numsCopy[j] > numsCopy[j+1] {
				temp := numsCopy[j]
				numsCopy[j] = numsCopy[j+1]
				numsCopy[j+1] = temp
			}
		}
	}
	return numsCopy
}
