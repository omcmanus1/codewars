def duplicate_count(text)
    lower_list = text.downcase.split('')
    counts = lower_list.each_with_object(Hash.new(0)) { |letter,counts| counts[letter] += 1 }
    duplicates = counts.select{ |key, value| value != 1 }
    return duplicates.size
end

text = "Indivisibilities"
puts duplicate_count(text)