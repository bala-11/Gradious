let arr = [100,3,40,56,78,5,45,34,29,55,99,2,1,-2,-10,-23,-54,0,-30,2000];

for(i=0;i<arr.length;i++){
    for(j=i+1;j<arr.length;j++){
        if(arr[i]>arr[j]){
            let temp = arr[i];
            arr[i]= arr[j];
            arr[j] = temp;
        }
    }
}
console.log(...arr);