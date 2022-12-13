def bar_triang(p1,p2,p3)
    x = (p1[0] + p2[0] + p3[0]) / 3.to_f
    y = (p1[1] + p2[1] + p3[1]) / 3.to_f
    return [x.round(4), y.round(4)]
end

puts bar_triang([4, 6], [12, 4], [10, 10])