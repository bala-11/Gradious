let arr = [100,3,40,56,78,5,45,34,29,55,99,2,1,-2,-10,-23,-54,0,-30,2000];

let i=1;
let n =arr.length;
while(i<n){
    let key = arr[i];
    let j=i-1;
    while(key<arr[j] && j>=0){
        arr[j+1] = arr[j];
        j=j-1;
    }
    arr[j+1] = key;
    i++;
}
console.log(...arr);
