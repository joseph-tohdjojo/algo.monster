function sortList(list) {
  for (let i = 1; i < list.length; i++) {
    for (let j = i; j > -1; j--) {
      if (list[j] < list[j - 1]) {
        let temp = list[j - 1];
        list[j - 1] = list[j];
        list[j] = temp;
      }
    }
  }

  return list;
}
