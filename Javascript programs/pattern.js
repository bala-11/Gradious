// /**
//  * 5432*
//  * 543*1
//  * 54*21
//  * 5*321
//  * *4321
//  */

// let str ="";
// for(i=1;i<=5;i++){
//     for(j=5;j>=1;j--){
//         if(i==j){
//             str+="*";
//         }
//         else{
//            str+=j;
//         }
//     }
//     str+="\n"
// }
// console.log(str);

// /**
//  * 1
//  * 2 4
//  * 3 6 9
//  * 4 8 12 16
//  * 5 10 15 20 25
//  */
// let str = "";
// for(i=1;i<=10;i++){
//     for(j=1;j<=i;j++){
//         str += i*j+" ";
//     }
//     str+="\n";
// }
// console.log(str);

// /**
//  *     ******
//  *     *    *
//  *     *    * 
//  *     *    *
//  *     ****** 
// */    

// let str = "";
// for(i=1;i<=6;i++){
//     for(j=1;j<=6;j++){
//         if(i==1 || i==6 || j==1 || j==6){
//             str+="*";
//         }
//         else{
//             str+=" ";
//         }
//     }
//     str+="\n";
// }
// console.log(str);

// /**
//  * 1 2 3 4 5
//  * 1 2 3 4
//  * 1 2 3
//  * 1 2
//  * 1
//  */

// let str = "";

// for(i=5;i>=1;i--){
//     for(j=1;j<=i;j++){
//         str+= j +" ";
//     }
//     str+="\n"
// }
// console.log(str);

// /**
//  *      1 2 3 4
//  *      1 2 3 *
//  *      1 2 * *
//  *      1 * * *
//  */

// let str = "";
// for(i=1;i<=4;i++){
//     for(j=1;j<=4;j++){
//         if( ((i==2)&&(j==4))  || ((i==3)&&(j==3)) || ((i==3 )&&(j==4)) || ((i==4)&&(j==2))  || ((i==4)&&(j==3)) || ((i==4 )&&(j==4)) ){
//             str+= "* " ;
//         }
//         else{
//             str+=j+" ";
//         }
//     }
//     str+="\n"
// }
// console.log(str);


// /**
//  *      A
//  *      A B 
//  *      A B C
//  *      A B C D
//  *      A B C D E 
//  */
// let str="";

// for(i=1;i<=5;i++){
//     let inc = 0;
//     for(j=1;j<=i;j++){
//         str+= String.fromCharCode(65 + inc++) +" ";
//     }
//     str+="\n";
// }
// console.log(str);

// /**
//  *  A
//  *  B B
//  *  C C C
//  *  D D D D
//  *  E E E E E 
//  */
// let str="";
// for(i=1;i<=5;i++){
//     for(j=1;j<=i;j++){
//         str+= String.fromCharCode(64 + i) +" ";
//     }
//     str+="\n";
// }
// console.log(str);

/**
 *      *
 *     **
 *    ***
 *   ****
 *  *****
 */

let str ="";
for(i=1;i<=5;i++){
    for(j=5;j>i;j--){
        str+=" ";
    }
    for(k=1;k<=i;k++){
        str+="*";
    }
    str+="\n"
}
console.log(str);