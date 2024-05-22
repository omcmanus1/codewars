def high_and_low(nums):
    nums_list = nums.split(" ")
    sorted_list = sorted(nums_list, key=int, reverse=True)
    print(sorted_list)
    return f"{sorted_list[0]} {sorted_list[len(sorted_list) - 1]}"


print(high_and_low("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))
