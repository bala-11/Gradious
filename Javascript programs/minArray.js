var arr = [2,3,4,56,7,1]; 

let min=0;
for(i=0; i<=arr.length-1; i++){
    for(j=1; j<=arr.length-1;j++){
        if(arr[i]<arr[j]){
            min = arr[i];
        }
    }
}
console.log(min)

let max=0;
for(i=0; i<=arr.length-1; i++){
    for(j=1; j<=arr.length-1;j++){
        if(arr[i]>arr[j]){
            max = arr[i];
        }
    }
}
console.log(max)