// merge sort algorithm
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let midpoint = Math.floor(arr.length / 2);
  let left = arr.splice(0, midpoint);
  // arr is now the right side of array (after splice)

  let leftArrays = mergeSort(left);
  let rightArrays = mergeSort(arr);

  let sortedArray = [];

  while (leftArrays.length > 0 || rightArrays.length > 0) {
    if (
      leftArrays[0] > rightArrays[0] ||
      (leftArrays[0] === undefined && rightArrays[0] !== undefined)
    ) {
      sortedArray.push(rightArrays[0]);
      rightArrays.shift();
    } else {
      sortedArray.push(leftArrays[0]);
      leftArrays.shift();
    }
  }

  return sortedArray.concat(
    leftArrays.slice(0, 1).concat(rightArrays.slice(0, 1))
  );
}