// insertion Sort algorithm
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let newIndex = i;
    for (let j = 0; j < i; j++) {
      // find proper index for arr[i];
      if (arr[i] < arr[j] && j < newIndex) {
        newIndex = j;
      }
    }
    arr.splice(newIndex, 0, arr[i]);
    arr.splice(i + 1, 1);
  }
}
