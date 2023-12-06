function arrJoin(arr) {
  let str = "";

  for (i = 0; i < arr.length; i++) {
    if (i == 0) {
      str = arr[i];
    } else {
      str += "," + arr[i];
    }
  }

  return str;
}

let arr = ["B", "A", "L", "A", "J", "I"];

console.log(arrJoin(arr));
