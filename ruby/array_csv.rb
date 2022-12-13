def to_csv_text(array)
    answer = ''
    for x in array.length()
        puts array[x]
    end
    # return answer
end

array = [
                                [ 0, 1, 2, 3, 45 ],
                                [ 10,11,12,13,14 ],
                                [ 20,21,22,23,24 ],
                                [ 30,31,32,33,34 ]
                               ] 

puts to_csv_text(array)