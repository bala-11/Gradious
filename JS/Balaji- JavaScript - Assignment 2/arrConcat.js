function arrConcat(arr1, arr2) {
  let n = arr2.length;
  let a = n;

  for (i = 0; i < n; i++) {
    arr1[a++] = arr2[i];
  }
  return arr1;
}

var arr1 = [1, 2, 3, 4, 5];
var arr2 = [6, 7, 8, 9, 10];

console.log(arrConcat(arr1, arr2));
