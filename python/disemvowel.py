def disemvowel(string_):
    vowels = "aeiouAEIOU"
    for vowel in vowels:
        string_ = string_.replace(vowel, "")
    return string_


print(disemvowel("This is an example sentence"))
