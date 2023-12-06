function arrIndexOf(arr, value) {
  var flag = -1;
  for (i = 0; i < arr.length; i++) {
    if (value == arr[i]) {
      flag = i;
    }
  }
  return flag;
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arrIndexOf(arr, 3));
