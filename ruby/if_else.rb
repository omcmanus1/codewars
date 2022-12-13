def sale_hotdogs(n)
    if n < 5 
        return n * 100
    elsif n >= 5 && n < 10 
        return n * 95
    elsif n >= 10
        return n * 90
    end
end

puts sale_hotdogs(100)