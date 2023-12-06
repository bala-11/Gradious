var arr1 = [1,2,3,4];
var arr2 = [1,2,3,5,6,7];

var resArr = [];
var k=0;
for(i=0;i<arr1.length;i++){
    for(j=0;j<arr2.length;j++){
            if(arr1[i]==arr2[j]){
                resArr[k++] = arr1[i];
            }
        }
    }

console.log(...resArr);