package katas

func singlePass(arr []int, n int, j int) []int {
	for i := 0; i < n-j-1; i++ {
		if arr[i] > arr[i+1] {
			temp := arr[i]
			arr[i] = arr[i+1]
			arr[i+1] = temp
		}
	}
	return arr
}

func BubblesortOnce(numbers []int) []int {
	numsCopy := make([]int, len(numbers))
	copy(numsCopy, numbers)
	n := len(numsCopy)
	singlePass(numsCopy, n, 0)
	return numsCopy
}

func Bubblesort(numbers []int) []int {
	numsCopy := make([]int, len(numbers))
	copy(numsCopy, numbers)
	n := len(numsCopy)
	for j := 0; j < n; j++ {
		singlePass(numsCopy, n, j)
	}
	return numsCopy
}
