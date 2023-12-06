// 1 2 3 4 5 is going to change 5 4 3 2 1.

var arr = [1,2,3,4,5,6,7,8,9];
var temp = [];
let n = arr.length;
let j = n-1 ; 
for( i=0; i<=n-1; i++){       
    temp[i] =arr[j];                                              // temp[0] = arr[8] , temp[1]=arr[3] , temp[2] = arr[2] 
    j--;                                                         // j=4                j=3                 j=2    
}
// console.log(arr.reverse());
console.log(...temp);
