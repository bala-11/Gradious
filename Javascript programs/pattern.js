/**
 * 5432*
 * 543*1
 * 54*21
 * 5*321
 * *4321
 */

let str ="";
for(i=1;i<=5;i++){
    for(j=5;j>=1;j--){
        if(i==j){
            str+="*";
        }
        else{
           str+=j;
        }
    }
    str+="\n"
}
console.log(str);