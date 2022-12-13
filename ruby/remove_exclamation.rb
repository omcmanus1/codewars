def remove_exclamation_marks(s)
    if !s.include? '!' 
        return s
    end
    return s.gsub! '!', ''
end

puts remove_exclamation_marks("qqw")
