
/**
 *  Copy one array into another
 */ 

var arr1 = [1,2,3,4,5];
var arr2 =[...arr1];
console.log("Copy one array into another:",...arr2);

/**
 *     Frequency of each element in the array
 */ 

var arr = [1,3,4,5,66,7,3,7,7,4,5,6,7];
var map = new Map();

for(let i=0;i<arr.length;i++){
    if(map.has(arr[i])){
        let count = map.get(arr[i]);
        map.set(arr[i],count + 1);
    }
    else{
        map.set(arr[i],1);
    }
}

var max = 0;
var ans = 0;
for(let [key,value] of map.entries()){
    if(value > max){
        max = value;
        ans = key ;
    }
}

console.log("Highest Frequency of each element in the array:",ans);


/**
 *     Left rotate the array
 */  

var arr3 =  [1,2,3,4,5,6,7,8,9,10];

let k = 2;
let n = arr3.length
let p=0;
var temp = [];
let i=n-1;
while(i>n-k-1){
    temp[p] = arr3[i];
    p++;
    i--;
}

let m = n-k-1;
while(m>=0){
    arr3[m+k] = arr3[m];
    m--;
}

let z=0;
while(z<k){
    arr3[z] = temp[z]
    z++;
}
console.log("Left rotate the array by K :",...arr3);

/**
 *  Reverse the number with functions
 */

let number = 23582378;
console.log("Reverse the number with functions:",parseInt(number.toString().split("").reverse().join("")));

/** 
 * Reverse number without functions
 * 
*/

/**
 * Print Duplicates in the array 
 */

var duplicatesArray = [1,2,3,4,5,6,7,7,4,1,2,3,4,8,8,3,2,1,7,4,7];
var dupArray = [];

for(let i=0;i<duplicatesArray.length;i++){
    for(let j=i+1;j<duplicatesArray.length;j++){
        if(duplicatesArray[i] == duplicatesArray[j]){
            if(dupArray.includes(duplicatesArray[i])){
                continue;
            }
            else{
                dupArray.push(duplicatesArray[i]);
            }
        }
    }
}

console.log("Duplicates array : ", ...dupArray);

/**
 * Print even positions in the array 
 */

var even = [1,2,3,4,5,6,7,8,9,10];
var evenArr = [];
for(i=1;i<=even.length;i++){
    if(i%2 == 0){
       evenArr.push(even[i-1]);
    }
}

console.log("Even array:",...evenArr);


/**
 * Left rotate the array
 */

var left  = [1,2,3,4,5,6,7,8,9,10];

let x = 3;
for(i=0;i<x;i++){
    let temp = left[0];

    for(j=0;j<left.length;j++){
        left[j] = left [j+1];
    }

    left[left.length-1] = temp;
}

console.log("Left rotate :",...left);

/**
 * Right rotate the array
 */

var right  = [1,2,3,4,5,6,7,8,9,10];

let O = 3;
for(i=0;i<O;i++){
    let temp = right[right.length-1];

    for(j=right.length-1;j>=0;j--){
        right[j] = right[j-1];
    }
    right[0] = temp;
}

console.log("Right rotate :",...right);


/**
 * Second largest number in an array
 */

var arr5 = [1,3,4,5,992,34898,482,99239,73497,34,2,33434,2,1,20];
arr5.sort((a,b)=>a-b);
console.log("second largest : ", arr5[arr5.length-2]);

