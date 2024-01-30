//

let str1 = "balajiiii";
let str2 = "vetriiii";

str1 = str1.concat(str2);

str2 = str1.substring(0,str2.length);
str1 = str1.substring(str1.length-str2.length,str1.length);

console.log(str1);
console.log(str2);