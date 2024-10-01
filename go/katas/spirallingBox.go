package kata

func CreateBox(width, length int) [][]int {
	// Create a 2D slice with initial values of 1
	matrix := make([][]int, length)
	for i := range matrix {
		matrix[i] = make([]int, width)
		for j := range matrix[i] {
			matrix[i][j] = 1
		}
	}

	// Determine the minimum dimension to control layers
	minDimension := length
	if width < length {
		minDimension = width
	}

	// Populate the matrix with the pattern
	for layer := 1; layer < (minDimension+1)/2; layer++ {
		for i := layer; i < length-layer; i++ {
			for j := layer; j < width-layer; j++ {
				// Set the value based on the layer
				matrix[i][j] = layer + 1
			}
		}
	}

	return matrix
}
