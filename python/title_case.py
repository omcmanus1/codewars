def title_case(title, minor_words=''):
  lowercase_list = [word.lower() for word in minor_words.split(' ')]
  title_list = title.split(" ")
  output = title_list[0].capitalize()
  other_words = title_list[1:]
  print(other_words)
  for word in other_words:
    if word.lower() in lowercase_list:
      output += ' ' + word.lower()
    else:
      output += ' ' + word.capitalize()
  return output
    
print(title_case('a clash of KINGS', 'a an the of'))