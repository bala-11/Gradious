var arr = [1,2,3,4,5,6,7,8,9,10];    //4,5,1,2,3
//         0,1,2,3,4

let k=3;
let n = arr.length;
var temp = [];
let i = n-1;
let p = 0;

while(i>n-k-1){       //9>10-3-1      // 4>2 3>1 
    temp[p] = arr[i];      // temp[] = [4,5] 
    i--;
    p++;
}

let e = n-k-1; // 10-3-1
while(e>=0){   //6>=0
    arr[e+k] = arr[e]; //arr[9]=arr[6] arr[8]=arr[5] arr[7]=arr[4] arr[6]=arr[3] arr[5]=arr[2] arr[4]=arr[1] arr[3]=arr[0]
    e--;
}

let z=k-1;
let x=0;
while(z>=0){
    arr[z] = temp[x]; //arr[1] = temp[0] 
    x++;
    z--;
}
console.log(arr);