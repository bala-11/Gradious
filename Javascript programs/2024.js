// swap 2 strings without 3rd variable
let str1 = "balajiiii";
let str2 = "vetriiii";
str1 = str1.concat(str2);
str2 = str1.substring(0,str2.length);
str1 = str1.substring(str1.length-str2.length,str1.length);
console.log(str1);
console.log(str2);


// find missing number in the 3rd array 
function missing(n){
    let arr = [1,2,3,5];
    let totalSum = n * ((n+1)/2);
    let sum = arr.reduce((sum,total)=> sum + total);
    let miss = totalSum - sum;
    return miss;
}
console.log(missing(5));


// Reverse a number 
let x = -1242354264;
function reverse(a){
    let rev = 0;
    let [first,...rest] = a.toString().split('');
    if(["+","-"].includes(first)){
        rev = first + rest.reverse().join("");
    }
    else{
        rev = rest.reverse().join("") + first;
    }
    return rev;
}
console.log(reverse(x));

