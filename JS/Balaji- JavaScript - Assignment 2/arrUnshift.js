function arrUnshift(arr, value) {
  let arr1 = [];
  let j = 1;
  for (i = 0; i < arr.length; i++) {
    arr1[0] = value;
    if (i >= 0) {
      arr1[j++] = arr[i];
    }
  }
  return arr1.length;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arrUnshift(arr, 10));
