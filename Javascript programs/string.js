// /**
//  *  count number of character  in a string
//  */

// var text = "balaji is a badass";
// // console.log(text.split(" ").join("").length);

// /**
//  * count vowels in a string
//  */
// var str = text.toUpperCase();
// var vowels = 0;
// var consonants = 0;
// for (i = 0; i < str.length; i++) {
//   if (
//     str[i] == "A" ||
//     str[i] == "E" ||
//     str[i] == "I" ||
//     str[i] == "O" ||
//     str[i] == "U"
//   ) {
//     vowels++;
//   } else if (str[i] > "A" && str[i] < "Z") {
//     consonants++;
//   }
// }
// console.log("Vowels count : ", vowels);
// console.log("Consonants count : ", consonants);

// /**
//  * Anagram
//  */
// var str1 = "SILENT";
// var str2 = "Listen";

// (() => {
//   if (str1.length != str2.length) {
//     console.log("Anagram not possible");
//   } else {
//     let text1 = str1.split("").sort().join("");
//     let text2 = str2.split("").sort().join("");
//     if (text1.matchAll(text2)) {
//       console.log("These strings are AnaGram");
//     }
//   }
// })();

// /**
//  * Substring
//  */

// let str4 = "aaaabbbbcccc";
// let n = 3;
// let N = str4.length;
// let chars = N / n;
// if (str4.length % n != 0) {
//   console.log("Substring is not possible");
// } else {
//   for (i = 0; i < N; i = i + chars) {
//     console.log(str4.substring(i, i + chars));
//   }
// }

// /**
//  * Total subsets
//  */

// let str3 = "BALAJI";
// for (i = 0; i < str3.length; i++) {
//   for (j = i; j < str3.length; j++) {
//     console.log(str3.substring(i, j+1));
//   }
// }

// /**
//  * lower case to upper case , vice versa
//  */

// var str = "BALAJI";
// console.log("Lowercase:",str.toLowerCase());
// var str1 = "balaji";
// console.log("Uppercase: ",str1.toUpperCase());

// (()=>{
//   let str = "BALAJI";
//   console.log(str.split("").map(a => a.charCodeAt() + 32 ).map( a => String.fromCharCode(a)).join(""));
// })()

// (()=>{
//   let str = "balaji";
//   console.log(str.split("").map(a => a.charCodeAt() - 32 ).map( a => String.fromCharCode(a)).join(""));
// })()

// /**
//  * replace specific character in array
//  */

// (()=>{
//   let str = "Once in a blue moon";
//   console.log(str.split(" ").join("-"))
// })()

// /**
//  * Given string is a palindrome or not
//  */

// (()=>{
//   let str1 = "malayalam";
//   let str2 = str1.split("").reverse().join("");
//   if(!str1.match(str2)){
//     console.log("Not a palindrome");
//   }
//   else{
//     console.log("It is a palindrome");
//   }

// })()

// /**
//  * One string is the rotation of the another
//  */

// (()=>{
//   let str1 = "ABCD";
//   let str2 = "CDAB";
//   let str3 = str1.concat(str1);
//   if(str3.match(str2)){
//     console.log("Strings are rotation to each other");
//   }else{
//     console.log("Strings are not rotation to each other");
//   }
// })()

// /**
//  * Find maximum and minimum occuring character in a string
//  */

// (() => {
//   let str = "Leave me alone boy. You're man now";
//   let str1 = str.split(" ").join("");
//   let map = new Map();
//   for (i = 0; i < str1.length; i++) {
//     if (map.has(str1[i])) {
//       let count = map.get(str1[i]);
//       map.set(str1[i], count + 1);
//     } else {
//       map.set(str1[i], 1);
//     }
//   }
//   var max = 0;
//   var min = str1.length;
//   var maxChar = "";
//   var minChar = "";
//   for (let [key, value] of map.entries()) {
//     if (value > max) {
//       max = value;
//       maxChar = key;
//     } 
//     else {
//       min = value;
//       minChar = key;
//     }
//   }
//   console.log("Maximum frequency character : ", maxChar);
//   console.log("Minimum frequency character : ", minChar);
// })();
