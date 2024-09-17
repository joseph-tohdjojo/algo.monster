export function mergeSort(list) {
  function sort(start, end) {
    if (start === end) return [list[end]];

    const mid = Math.floor((end - start) / 2) + start;
    const leftList = sort(start, mid);
    const rightList = sort(mid + 1, end);

    let newList = [];
    let l = 0;
    let r = 0;

    while (newList.length < leftList.length + rightList.length) {
      const left = leftList[l] || leftList[l] === 0 ? leftList[l] : Infinity;
      const right =
        rightList[r] || rightList[r] === 0 ? rightList[r] : Infinity;
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

  return sort(0, list.length - 1);
}
