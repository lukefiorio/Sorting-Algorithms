function quickSort(arr, startIndex, endIndex) {
  if (startIndex >= endIndex) {
    return arr;
  }

  let i = 0;
  let pivot = arr[endIndex];
  for (let j = 0; j < endIndex; j++) {
    if (arr[j] < pivot) {
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++;
    }
  }

  arr[endIndex] = arr[i];
  arr[i] = pivot;

  quickSort(arr, startIndex, i - 1);
  quickSort(arr, i + 1, endIndex);
}
