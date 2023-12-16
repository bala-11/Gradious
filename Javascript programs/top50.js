/**
 *  1) sum of 2 numbers
 */

const { log } = require("console");

function add(a, b) {
  return a + b;
}
console.log("\n1) The sum of 2 numbers is : ", add(3, 4));

/**
 * 2) Find maximum number in the array
 */

function max(arr) {
  let max = 0;
  for (let a of arr) {
    if (a > max) {
      max = a;
    }
  }
  return max;
}
let arr = [1, 2, 3, 4, 5, 6, 77, 33, 121, 45, 467, 87, -121, -453, 3432];
console.log("\n2) The maximum number in the array:", max(arr));

/**
 *  3) Check whether string is palindrome or not
 */
function isPalindrome(str) {
  let str1 = str.toLowerCase();
  let str2 = str.split("").reverse().join("").toLowerCase();
  if (str1 === str2) {
    return `\n3) The given string ${str} is Palindrome`;
  } else {
    return `\n3) The given string ${str} is not Palindrome`;
  }
}
let str = "MalayalaM";
console.log(isPalindrome(str));

/**
 *  4) Reverse a string
 */

function reverse(str) {
  return str.split("").reverse().join("");
}
let str1 = "Kerala";
console.log("\n4) String reverse : ", reverse(str1));

/**
 *  5) Return array with even numbers
 */

function evenNumber(arr) {
  let evenArray = arr.filter((a) => a % 2 == 0);
  return evenArray;
}
let arr2 = [1, 2, 3, 4, 5, 6, 77, 33, 121, 45, 467, 87, -121, -453, 3432];
console.log("\n5) Even number array:", evenNumber(arr2));

/**
 *  6) Factorial of a given number
 */

function factorial(n) {
  if (n == 1 || n == 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
let number = 5;
console.log(`\n6) Factorial of ${number} is `, factorial(number));

/**
 *  7) Given number is prime
 */

function isPrime(n) {
  let count = 0;
  for (i = 1; i <= n; i++) {
    if (n % i == 0) {
      count++;
    }
  }
  if (count > 2) {
    return `\n7) The given number ${n} is not a PRIME NUMBER`;
  } else {
    return `\n7) The given number ${n} is a PRIME NUMBER`;
  }
}
let num = 11;
console.log("\n", isPrime(num));

/**
 *  8) Find largest number in the nested array
 */

function largest(arr) {
  let max = 0;
  for (i = 0; i < nestArray.length; i++) {
    for (j = 0; j < nestArray[i].length; j++) {
      if (nestArray[i][j] > max) {
        max = nestArray[i][j];
      }
    }
  }
  return max;
}
let nestArray = [
  [1, 2, 3, 4],
  [9, 8, 7, 6],
];
console.log(
  "\n8) The maximum number in the nested array :",
  largest(nestArray)
);

/**
 *  9) Find the fibanocci numbers
 */

function fibanocci(num) {
  if (num === 0) return [];
  if (num === 1) return 0;
  if (num === 2) return [0, 1];

  let seq = [0, 1];

  while (seq.length < num) {
    let nextNumber = seq[seq.length - 1] + seq[seq.length - 2];
    seq.push(nextNumber);
  }
  return seq;
}
let num1 = 10;
console.log(`\n9) Fibanocci series of ${num1} is:`, ...fibanocci(num1));

/**
 *  10) Captailise each word
 */

function captialise(str) {
  // let str3 = str.replace(/\b\w/g,line => line.toUpperCase());
  // return str3;

  let str4 = str.split(" ");
  let capArr = str4.map((a) => a[0].toUpperCase() + a.slice(1));
  return capArr.join(" ");
}
let str2 = "geeks for geeks";
console.log("\n10) Captailise string:", captialise(str2));

/**
 *  11) Debounce function
 */

function debounce(func, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(func, delay);
  };
}
function display() {
  console.log("\n11) Debounce function : Balajji");
}
let deb = debounce(display, 3000);
deb();

/**
 *  12) Sort the array in ascending order
 */

function arraySort(arr) {
  return arr.sort((a, b) => a.age - b.age);
}
const characters = [
  { firstName: "Jean-Luc", lastName: "Picard", rank: "Captain", age: 59 },
  { firstName: "Will", lastName: "Riker", rank: "Commander", age: 29 },
  { firstName: "Geordi", lastName: "La Forge", rank: "Lieutenant", age: 20 },
  { firstName: "Leo", lastName: "La Forge", rank: "Lieutenant", age: 34 },
];
console.log("\n12) The sorted array with key:", ...arraySort(characters));

/**
 *  13) Deep clone an object
 */

function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}
const char = {
  firstName: "Jean-Luc",
  lastName: "Picard",
  rank: "Captain",
  age: 59,
};
console.log(" \n13) Deep cloned object :", deepClone(char));

/**
 *  14) Factorial of a number
 */

function fact(n) {
  let sum = 1;
  for (i = 1; i <= n; i++) {
    sum *= i;
  }
  return sum;
}
let numb = 10;
console.log("\n14) Factorial:", fact(numb));

/**
 *  15) merge two sorted arrays
 */

function mergeArrays(arr1, arr2) {
  let merge = [];
  for (i = 0; i < arr1.length; i++) {
    merge[i] = arr1[i];
  }
  let m = merge.length;
  for (i = 0; i < arr2.length; i++) {
    merge[m++] = arr2[i];
  }
  for (i = 0; i < merge.length; i++) {
    for (j = i + 1; j < merge.length; j++) {
      if (merge[i] > merge[j]) {
        let temp = merge[i];
        merge[i] = merge[j];
        merge[j] = temp;
      }
    }
  }
  return merge;
}
let arr4 = [1, 2, 3, 4, 5];
let arr5 = [6, 8, 7, 9, 10];
console.log("\n15) The merged array : ", ...mergeArrays(arr4, arr5));

/**
 *  16) Given string is palindrome ignoring case
 */

function isPalin(str) {
  let cleanStr1 = str.replace(/[^a-zA-Z0-9]/g).toLowerCase();
  let str2 = cleanStr1.split("").reverse().join("");
  if (cleanStr1 === str2) {
    return `\n16) The given string ${str} is Palindrome`;
  } else {
    return `\n16) The given string ${str} is not Palindrome`;
  }
}
let str5 = "Malayalam";
console.log(isPalin(str5));

/**
 *  17) linked list
 */

/**
 *  18) Flat 2 dimensional array
 */

function flat(arr) {
  return arr.flat(Infinity);
}
let arr6 = [[1, 2, 3, 4], [2, 45, 6, 57], [[8, 2]]];
console.log("\n18) The modified array is : ", flat(arr6));

/**
 *  19) Anagrams
 */

function areAnagrams(str1, str2) {
  return (
    str1.toLowerCase().split("").sort().join("") ===
    str2.toLowerCase().split("").sort().join("")
  );
}
let str6 = "Listen";
let str7 = "Silent";
console.log("\n19) These anagrams are :", areAnagrams(str6, str7));

/**
 *  20) Fibanocci with memoization
 */
function fibanocciWithMemoization(num) {
  if (num === 0) return [];
  if (num === 1) return 0;
  if (num === 2) return [0, 1];

  let memo = [0, 1];

  while (memo.length < num) {
    let nextNumber = memo[memo.length - 1] + memo[memo.length - 2];
    memo.push(nextNumber);
  }
  return memo;
}
let num2 = 10;
console.log(`\n20) Fibanocci series of ${num1} is:`,...fibanocci(num1));

/**
 *  22) Reverse string without builtin
 */

let str8 = "Geeks for geeks";
let reverseStr = "";
for (i = str8.length - 1; i >= 0; i--) {
  reverseStr += str8[i];
}
console.log("\n22) Reverse the string:", reverseStr);

/**
 *  23) Largest number and smallest number in the array
 */

function maxAndMin(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  return [max, min];
}
let arr3 = [1, 2, 3, 4, 5, 6, 77, 33, 121, 45, 467, 87, -121, -453, 3432];
console.log("\n23) Maximum and minimum in the array:",maxAndMin(arr3));

/**
 *  24) New array with unnique elements
 */

function getUniqueElements(arr) {
  return Array.from(new Set(arr));
}
let arr7 = "Geeks for geeks";
console.log("\n24) Array with unique elements:", ...getUniqueElements(arr7));

/**
 *  27) Find sum of array
 */

let arr8 = [1, 2, 3, 4, 5, 6, 77, 33, 121, 45, 467, 87, -121, -453, 3432];
function sumArr(arr) {
  return arr.reduce((sum, total) => sum + total, 0);
}
console.log("\n27) Sum of all array values:", sumArr(arr8));

/**
 *  28) Count number of character occurences
 */

function countOccurences(arr) {
  let charCount = {};
  for (let char of arr) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  return charCount;
}
let arr9 = "Geeks for geeks";
console.log("\n28) Count occurences:", countOccurences(arr9));

/**
 *  33) Largest difference between any two numbers in the array
 */

function maxDiff(arr) {
    let min = 0
    let maxDiff = 0;
    let n = arr.length;
    for(let i=1;i<n;i++){
        if(arr[i] < min){
            min = arr[i]
        }
        else{
            const diff = arr[i] - min;
            if(diff > maxDiff){
                maxDiff = diff;
            }
        }
    }
    return maxDiff;
}
let arr10 = [1, 2, 3, 4, 5, 6, 77, 33, 121, 45, 467, 87, -121, -453, 3432];
console.log("\n33) Maximum differences between 2 numbers:",maxDiff(arr10));


/**
 *  34) Remove duplicates
 */

function duplicates(arr){
    let str = arr.split("");
    return str.filter((item,index)=>str.indexOf(item)===index);
}
// let arr11 = [1,2,3,4,1,2,3,45,5,6,67,45,23,23,45,56,78,78,4534,34,43];
let arr11 = "Geeks for geeks";
console.log("\n34) Remove duplicates:", ...duplicates(arr11));

/**
 *  38) Print second largest number in the array
 */

function secondLargest(arr) {
    const str = arr.sort((a,b)=>b-a);
    return str[1];
}
let arr12 = [1, 2, 3, 4, 5, 6, 77, 33, 121, 45, 467, 87, -121, -453, 3432];
console.log("\n35) Second largest number in the array :",secondLargest(arr12));

/**
 *  39) Print Random string
 */

function randomString(){
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let n  = str.length;
    let content = "";
    for(i=0;i<7;i++){
        content+= str[Math.floor(Math.random()*n)];
    }
    return content;
}
console.log("\n 39) Random string:",randomString());

/**
 * 40) Roman numbers
 */

function romanNumber(num){

    const values = [1000, 900, 500, 400, 100,90, 50, 40, 10, 9, 5, 4, 1]; 
    const symbols =  ['M', 'CM', 'D', 'CD', 'C','XC', 'L', 'XL','X', 'IX','V', 'IV', 'I']; 

    let n = values.length;
    let roman = "";
    for(i=0;i<n;i++){
        while(num>=values[i]){
            roman+=symbols[i];
            num-=values[i];
        }
    }
    return roman;
}
let num3 = 1978;
console.log("\n 40) Convert number to Roman:", romanNumber(num3));


/**
 *  44) Average values of numbers in the array
 */

function average(arr){
    let n = arr.length;
    let sum = arr.reduce((sum,total)=> sum+total,0);
    let avg = Math.ceil(sum/n);
    return avg;
}
let arr13 = [1, 2, 3, 4, 5, 6, 77, 33, 121, 45, 467, 87, -121, -453, 3432];
console.log("\n35) Average value of an array :",average(arr13));

/**
 *  44) Find the element in the index
 */
function findElementIndex(arr, element) { 
    const index = arr.indexOf(element); 
    return index != -1 ? index : "Number not in the array"; 
}
let arr14 = [1, 2, 3, 4, 5, 6, 77, 33, 121, 45, 467, 87, -121, -453, 3432];
console.log("\n44) Find index in array :",findElementIndex(arr14,121));

