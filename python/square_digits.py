def square_digits(num):
    nums = [int(digit) * int(digit) for digit in str(num)]
    return int("".join(map(str, nums)))


print(square_digits(765))
