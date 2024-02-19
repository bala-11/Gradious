// /**
//  *  findLast()
//  *  Gives the value of the first element that meets a certain condition
//  */

// const arr = [1,2,3,4,5,6,7,8,9,10];
// let lastNum = arr.findLast((x) => x > 2);
// console.log(lastNum);

// /**
//  * findLastIndex()
//  * 
//  */
// const arr1 = [1,2,3,4,5,6,7,8,9,10];
// let lastNum1 = arr1.findLastIndex((x) => x > 8);
// console.log(lastNum1);


// /**
//  * with()
//  */
// const months = ['january','february','march','april'];
// let month = months.with(1,'may');
// console.log(month);

const arr1 = [1,2,3,4,5];
let count=0;
arr1.reduce((sum , num)=>{
    if(num > 2){
        count++;
    }
},[]);
console.log(count);