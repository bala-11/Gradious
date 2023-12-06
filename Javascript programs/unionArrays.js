var arr1 = [1,2,3,4];
var arr2 = [1,2,3,5,6,7];

var mergeArr = arr1.concat(arr2);
var resArr = [];
var k=0;
for(i=0;i<mergeArr.length;i++){
    var pin = 0;
    for(j=0;j<mergeArr.length;j++){
            if(mergeArr[i]==resArr[j]){
                pin = 1;
                break;
            }
        }
    if(pin==0){
        resArr[k++] = mergeArr[i];
    }
}
console.log(...resArr);