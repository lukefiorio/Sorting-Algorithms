// quick sort algorithm: ouptut same array
function quickSortSameArray(arr, startIndex, endIndex) {
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

  quickSortSameArray(arr, startIndex, i - 1);
  quickSortSameArray(arr, i + 1, endIndex);
}

// quick sort alogrithm: output new array
function quickSortNewArray(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr.pop();
  let lessThanArr = [];
  let moreThanArr = [];

  for (let j = 0; j < arr.length; j++) {
    if (arr[j] <= pivot) {
      lessThanArr.push(arr[j]);
    }
    if (arr[j] > pivot) {
      moreThanArr.push(arr[j]);
    }
  }

  let sortedArr = [];

  return sortedArr.concat(quickSortNewArray(lessThanArr), pivot, quickSortNewArray(moreThanArr));
}