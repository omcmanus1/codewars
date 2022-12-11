def get_count(input_str)
    count = 0
    if input_str.include? "aeiou"
        count ++
    end
    return count
end

input_str = "o a kak ushakov lil vo kashu kakao"