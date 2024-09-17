export function quickSort(list) {
  if (list.length <= 1) return list;

  const pivot = list[Math.floor(list.length / 2)];
  const left = [];
  const right = [];
  const equal = [];

  for (let element of list) {
    if (element < pivot) {
      left.push(element);
    } else if (element > pivot) {
      right.push(element);
    } else {
      equal.push(element);
    }
  }

  return [...quickSort(left), ...equal, ...quickSort(right)];
}
