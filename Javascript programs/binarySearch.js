var arr = [1,2,3,4,5,6,7,8,9,10]

function binarySearch(arr,num){
    var start = 0;
    var end = arr.length;

    while(start<=end){

        let mid = Math.ceil((start+end)/2);

        if(arr[mid]==num){
            return mid;
        }
        else if(arr[mid]<num){
            start = mid+1;
        }
        else{
            end = mid-1;
        }
    }
    return -1;
}
console.log(binarySearch(arr,8));