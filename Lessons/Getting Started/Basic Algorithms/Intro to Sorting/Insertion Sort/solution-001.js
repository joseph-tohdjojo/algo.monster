function sortList(unsortedList) {
  for (let i = 0; i < unsortedList.length; i++) {
    let current = i;

    while (current > 0 && unsortedList[current] < unsortedList[current - 1]) {
      const temp = unsortedList[current];
      unsortedList[current] = unsortedList[current - 1];
      unsortedList[current - 1] = temp;
      current--;
    }
  }
  return unsortedList;
}
