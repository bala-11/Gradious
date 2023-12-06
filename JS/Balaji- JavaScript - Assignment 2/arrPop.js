function arrPop(arr) {
  let arr1 = [];
  let pop = 0;

  for (i = 0; i <= arr.length - 1; i++) {
    if (i <= arr.length - 2) {
      arr1[i] = arr[i];
    } else {
      pop = arr[arr.length - 1];
    }
  }
  return pop;
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arrPop(arr));
