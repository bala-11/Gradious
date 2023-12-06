let arr = [100,3,40,56,78,5,45,34,29,55,99,2,1,-2,-10,-23,-54,0,-30,2000];

function swap(arr,i,m){
    temp = arr[i];
    arr[i]= arr[m];
    arr[m] = temp;
}

let i=0;
while(i<arr.length){
    
    let j=i+1;
    let m = i;
    
    while(j<arr.length){
        if(arr[j]<arr[m]){
            m=j;
        }
        j++;
    }
    swap(arr,i,m);
    i++;
}
console.log(...arr);