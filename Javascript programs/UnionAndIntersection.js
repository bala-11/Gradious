var arr1 =[1,2,4,6,7,8];
var arr2 =[1,2,3,4];

let res = " ";
    var mergeArr = arr1.concat(arr2);
    let unionArr = [];
    var k = 0;
    for(i=0;i<mergeArr.length;i++){
        var pin = 0;
        for(j=0;j<mergeArr.length;j++){
            if(mergeArr[i]==unionArr[j]){
                pin = 1;
                break;
            }
        }
        if(pin==0){
            unionArr[k++] = mergeArr[i];
        }
    }
    for(i=0;i<unionArr.length;i++){
        for(j=0;j<unionArr.length;j++){
            if(unionArr[i]<unionArr[j]){
                temp = unionArr[i];
                unionArr[i] = unionArr[j];
                unionArr[j] = temp;
            }
        }
    }
    let str = [];
    let m=0;
    for(i=0;i<unionArr.length;i++){
        str[m++] = unionArr[i];
    }
    process.stdout.write("Union: "+str);

    //Intersection
    var interArr=[];
    var x=0;
    for(i=0;i<arr1.length;i++){
        for(j=0;j<arr2.length;j++){
            if(arr1[i]==arr2[j]){
               interArr[x++] = arr1[i];
            }
        }
    }
    let str1 = [];
    let n =0;
    for(i=0;i<interArr.length;i++){
        str1[n++] = interArr[i];
    }
    process.stdout.write( "     Intersection:" + str1);