function mergeSort(list) {
  if (list.length === 1) return list;

  let mid = Math.floor(list.length / 2);
  let leftList = sortList(list.slice(0, mid));
  let rightList = sortList(list.slice(mid));

  let newList = [];
  let l = 0;
  let r = 0;

  while (newList.length < leftList.length + rightList.length) {
    const left = leftList[l] || Infinity;
    const right = rightList[r] || Infinity;
    if (left < right) {
      newList.push(left);
      l++;
    } else if (left > right) {
      newList.push(right);
      r++;
    } else {
      newList.push(left, right);
      l++;
      r++;
    }
  }

  return newList;
}
