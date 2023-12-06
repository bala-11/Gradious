var count = 0;
var arr = [1,2,3,4,5,11,23,11,4,7,11,2,4,5,9,11];

function birthDateCounter(arr,birthDate){
    for(i=0;i<arr.length;i++){
        if(arr[i]==birthDate){
            count++;
        }
    }
    console.log("Number of occurence is "+ count);
}
birthDateCounter(arr,11);