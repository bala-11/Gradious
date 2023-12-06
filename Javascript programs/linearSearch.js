var arr= [1,2,3,4,5,6,7,8,9,10];

function linearSearch(arr,num){
    for( i=0;i<=arr.length;i++){
        if(arr[i]==num){
            console.log(i);
        }
    }
    return -1;
}
linearSearch(arr,5);
