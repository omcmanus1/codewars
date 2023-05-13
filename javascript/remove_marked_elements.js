function removeItems(integer_list, values_list) {
  values_list.forEach((val) => {
    integer_list = integer_list.filter((int) => int !== val);
  });
  return integer_list;
}

console.log(
  removeItems([1, 1, 2, 3, 1, 2, 3, 4, 4, 3, 5, 6, 7, 2, 8], [1, 3, 4, 2])
);
