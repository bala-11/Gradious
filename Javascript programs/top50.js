/**
 *  1) sum of 2 numbers
 */

function add(a,b){
    return a+b;
}
console.log("The sum of 2 numbers is : ",add(3,4));

/**
 * 2) Find maximum number in the array 
 */

function max(arr){
    let max = 0;
    for(let a of arr){
        if(a > max){
            max = a ;
        }
    }
    return max;
}
let arr = [1,2,3,4,5,6,77,33,121,45,467,87,-121,-453,3432];
console.log("The maximum number in the array:",max(arr));

/**
 *  3) Check whether string is palindrome or not
 */
function isPalindrome(str){
    let str1 = str;
    let str2 = str.split("").reverse().join("");
    if(str1 === str2){
        return  `The given string ${str} is Palindrome`;
    }
    else{
        return `The given string ${str} is not Palindrome`;
    }

}
let str = "MalayalaM";
console.log(isPalindrome(str));

/**
 *  4) Reverse a string
 */

function reverse(str){
    return str.split("").reverse().join("");
}
let str1 = "Kerala";
console.log("String reverse : ", reverse(str1));

/**
 *  5) Return array with even numbers
 */

function evenNumber(arr){
    let evenArray = arr.filter((a)=> a%2==0);
    return evenArray;
}
 let arr2 = [1,2,3,4,5,6,77,33,121,45,467,87,-121,-453,3432];
 console.log("Even number array:",evenNumber(arr2));

 /**
  *  6) Factorial of a given number
  */

 function factorial(n){  
        if(n == 1 || n == 0){
            return 1;
        }
        else{
            return  n * factorial(n-1);
        }
 }
 let number = 5;
 console.log(`Factorial of ${number} is `,factorial(number));

 /**
  *  7) Given number is prime
  */

 function isPrime(n){
    let count = 0;
    for(i=1;i<=n;i++){
        if( n % i == 0){
            count++;
        }
    }
    if(count > 2){
        return `The given number ${n} is not a PRIME NUMBER`
    }
    else{
        return `The given number ${n} is a PRIME NUMBER`
    }
 }
let num = 11 ;
console.log( isPrime(num));

/**
 *  8) Find largest number in the nested array
 */

function largest(arr){
    let max = 0;
    for(i=0;i<nestArray.length;i++){
        for(j=0;j<nestArray[i].length;j++){
            if(nestArray[i][j] > max){
                max = nestArray[i][j];
            }
        }
    }
    return max;

}
let nestArray = [
    [1,2,3,4],
    [9,8,7,6]
];
console.log("The maximum number in the nested array :", largest(nestArray));

/**
 *  9) Find the fibanocci numbers
 */

function fibanocci (num){
    if(num === 0) return [];
    if(num === 1) return 0;
    if(num === 2) return [0,1]

    let seq = [0,1];

    while(seq.length < num){
        let nextNumber = seq[seq.length -1] + seq[seq.length -2];
        seq.push(nextNumber);
    }
    return seq;
}
let num1 = 10;
console.log(`Fibanocci series of ${num1} is:`,...fibanocci(num1));

/**
 *  10) Captailise each word
 */

function captialise(str){
    // let str3 = str.replace(/\b\w/g,line => line.toUpperCase());
    // return str3;

    let str4 = str.split(" ");
    let capArr = str4.map((a)=> a[0].toUpperCase() + a.slice(1));
    return capArr.join(" ");
}
let str2 = "geeks for geeks";
console.log("Captailise string:", captialise(str2));

/**
 *  11) Debounce function 
 */

function debounce(func, delay){
    let timer;
    return function(){
        // clearTimeout(timer);
        timer = setTimeout(func,delay);
        return timer;
    }
}

function display(){
    return `welcome`;
}
console.log(debounce(display,2000));