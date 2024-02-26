package kata

func IsLeapYear(year int) bool {
	var output bool
	if year%100 == 0 && year%400 != 0 {
		output = false
	} else if year%4 == 0 || year%400 == 0 {
		output = true
	}
	return output
}
