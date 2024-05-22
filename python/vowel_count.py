def get_count(sentence):
    count = 0
    vowels = "aeiou"
    for letter in sentence:
        if letter in vowels:
            count += 1
    return count


print(get_count("hello there"))
