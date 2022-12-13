def find_multiples(integer, limit)
    current_multiple = 1
    answer = []
    while current_multiple * integer <= limit
        answer.append(current_multiple * integer)
        current_multiple += 1
    end
    return answer        
end

puts find_multiples(5, 25)