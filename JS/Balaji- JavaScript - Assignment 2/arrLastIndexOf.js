function arrLastIndexOf(arr, value) {
  let n = arr.length;
  var flag = -1;
  for (i = n - 1; i >= 0; i--) {
    if (value == arr[i]) {
      flag = i;
      return flag;
    }
  }
  // return flag;
}

let arr = [1, 2, 3, 44, 12, 3, 5, 54, 6, 4, 6, 1, 2, 4, 1, 1, 1];
// let arr = ['a','k','a','l','y','a'];
console.log(arrLastIndexOf(arr, 6));
