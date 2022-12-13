def summation(num)
    count = 0
    for i in 1..num
        count = count + i
    end
    return count
end

puts summation(9)