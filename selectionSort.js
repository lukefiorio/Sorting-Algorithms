// selection sort algorithm
function selectionSort(arr) {
  let minIndex;
  for (let j = 0; j < arr.length - 1; j++) {
    let minVal = arr[j];
    for (let i = j; i < arr.length; i++) {
      if (arr[i] <= minVal) {
        minVal = arr[i];
        minIndex = i;
      }
    }
    const temp = arr[j];
    arr[j] = arr[minIndex];
    arr[minIndex] = temp;
  }
}
