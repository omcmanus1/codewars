package katas

func singlePass(arr []int, n int) []int {
	for i := 0; i < n-1; i++ {
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
	singlePass(numsCopy, n)
	return numsCopy
}

func Bubblesort(numbers []int) []int {
	numsCopy := make([]int, len(numbers))
	copy(numsCopy, numbers)
	var i int
	n := len(numsCopy)
	for i = 0; i < n; i++ {
		singlePass(numsCopy, i)
	}
	return numsCopy
}
