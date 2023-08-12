package katas

/*
find n, which satisfies:
-	n % d == 0
-	n <= b
-	n > 0
plan:
- iterate downwards from b - 1
- return first value that satisfies condition
*/

func MaxMultiple(d, b int) int {
	candidate := b
	for candidate > 0 {
		if candidate <= b && candidate%d == 0 {
			return candidate
		}
		candidate--
	}
	return b
}
