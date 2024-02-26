package kata

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
	for b > 0 {
		if b%d == 0 {
			return b
		}
		b--
	}
	return b
}
