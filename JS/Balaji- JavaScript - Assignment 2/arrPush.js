function arrPush(arr, value) {
  let n = arr.length - 1;
  arr[n + 1] = value;
  return arr.length;
  //console.log(...arr);
}

let arr = [1, 2, 3, 4];

console.log(arrPush(arr, 6));
