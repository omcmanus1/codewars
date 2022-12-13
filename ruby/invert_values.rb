def invert(list)
    new_list = []
    list.each { |i| new_list.append(-i) }
    return new_list
end

list = [1,-2,3,-4,5]

puts invert(list)