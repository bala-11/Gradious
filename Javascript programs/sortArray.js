 var arr = [24,45,73,67,89,88,53,87,70,35,60,89,100,20,39,74,80,94,99];

 var temp1 = [];                    //array for small numbers
 var temp2 = [];                   //array for large numbers
 var temp3 = [];

 let j=0;
 for(i=0; i<=arr.length-1; i++){
    if(arr[i] < 73){
        temp1[j] = arr[i];
        j++;
    }
}
let k=0;
for( i=0; i<=arr.length-1; i++){
    if(arr[i] >= 73){
        temp2[k] = arr[i];
        k++;
    }
}

// For merging two arrays

let m = 0;
for( i=0; i<=temp1.length-1;i++){
    temp3[m] = temp1[i];
    m++;
}
let p=temp1.length-1
for(i=0; i<=temp2.length-1; i++){
    temp3[p] = temp2[i];
    p++;
}
//  console.log(temp1);
//  console.log(temp2);
 console.log(...temp3);
