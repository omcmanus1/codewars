def to_csv_text(array)
  array.map{|x| x.join(",")}.join("\n")
end

array = [
                                [ 0, 1, 2, 3, 45 ],
                                [ 10,11,12,13,14 ],
                                [ 20,21,22,23,24 ],
                                [ 30,31,32,33,34 ]
                               ] 

puts to_csv_text(array)