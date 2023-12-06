var arr = [1,2,3,4,5,6,7,8,9,10,12];
var newArr = [];

for(i=0; i<=arr.length-1;i++){
    newArr[i] = 0;
}

for(i=0 ; i<arr.length; i++){
    let rollNo = arr[i]-1;
    newArr[rollNo] = arr[i];      //newArr[1] = arr[i] {}
}

for(i=0 ; i<newArr.length; i++){
    if(newArr[i]==0){
        console.log(i+1);
    }
}
 