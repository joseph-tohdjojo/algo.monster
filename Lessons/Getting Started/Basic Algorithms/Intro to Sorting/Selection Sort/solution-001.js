function sortList(list) {
  for (let i = 0; i < list.length - 1; i++) {
    let min = i;
    let temp;
    for (let j = i; j < list.length; j++) {
      if (list[j] < list[min]) {
        min = j;
      }
    }
    temp = list[i];
    list[i] = list[min];
    list[min] = temp;
  }

  return list;
}
