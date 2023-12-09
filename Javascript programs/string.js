/**
 *  count number of character  in a string
 */

var text = "balaji is a badass";
// console.log(text.split(" ").join("").length);

/**
 * count vowels in a string
 */
var str = text.toUpperCase();
var vowels = 0;
var consonants = 0;
for (i = 0; i < str.length; i++) {
  if (
    str[i] == "A" ||
    str[i] == "E" ||
    str[i] == "I" ||
    str[i] == "O" ||
    str[i] == "U"
  ) {
    vowels++;
  } else if (str[i] > "A" && str[i] < "Z") {
    consonants++;
  }
}
console.log("Vowels count : ", vowels);
console.log("Consonants count : ", consonants);

/**
 * Anagram
 */
var str1 = "SILENT";
var str2 = "Listen";

(() => {
  if (str1.length != str2.length) {
    console.log("Anagram not possible");
  } else {
    let text1 = str1.split("").sort().join("");
    let text2 = str2.split("").sort().join("");
    if (text1.matchAll(text2)) {
      console.log("These strings are AnaGram");
    }
  }
})();

/**
 * Substring
 */

let str4 = "aaaabbbbcccc";
let n = 3;
let N = str4.length;
let chars = N / n;
if (str4.length % n != 0) {
  console.log("Substring is not possible");
} else {
  for (i = 0; i < N; i = i + chars) {
    console.log(str4.substring(i, i + chars));
  }
}

/**
 * Total subsets
 */

let str3 = "BALAJI";
for (i = 0; i < str3.length; i++) {
  for (j = i; j < str3.length; j++) {
    console.log(str3.substring(i, j+1));
  }
}
