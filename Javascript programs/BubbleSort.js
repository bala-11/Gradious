let arr = [100,3,40,56,78,5,45,34,29,55,99,2,1,-2,-10,-23,-54,0,-30,2000];

let n = arr.length;
let k=0;
function swap(arr,i,j){
    temp = arr[i];
    arr[i]= arr[j];
    arr[j] = temp;
}
while(k<n){

    let i=0;
    let j=1;

    while(j<n){
        if(arr[i]>arr[j]){                          // [3,1,4,2,5,9,0]
            swap(arr,i,j);
        }
        i++;
        j++;
        }
    k++;
}
console.log(...arr)

