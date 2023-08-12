package katas

func Rearrange(a, b string) (output string) {
	lenA := len(a)
	lenB := len(b)
	if lenA > lenB {
		return (b + a + b)
	}
	return (a + b + a)
}
