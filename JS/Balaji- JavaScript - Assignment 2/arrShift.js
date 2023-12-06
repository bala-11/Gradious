function arrShift(arr) {
  let arr1 = [];
  let j = 0;
  let shift = 0;

  for (i = 0; i < arr.length; i++) {
    if (i != 0) {
      arr1[j++] = arr[i];
    } else {
      shift = arr[i];
    }
  }
  return shift;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arrShift(arr));
