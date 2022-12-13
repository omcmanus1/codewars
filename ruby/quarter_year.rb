def quarter_of(month)
    if month > 0 && month <= 3
        return 1
    elsif month > 3 && month <= 6
        return 2
    elsif month > 6 && month <= 9
        return 3
    elsif month > 9 && month <= 12
        return 4
    end
end

puts quarter_of(2)