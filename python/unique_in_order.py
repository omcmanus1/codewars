def unique_in_order(sequence):
    if len(sequence) == 0:
      return []
    output = [sequence[0]]
    current_item = sequence[0]
    for item in sequence:
      if item != current_item:
        output.append(item)
      current_item = item
    return output
        
print(unique_in_order([1, 2, 2, 3, 3]))