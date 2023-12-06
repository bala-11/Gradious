var bday = [11,12,30,11,23,11,12,10,14,15,11,10,22,30,22,30,3,3,3,3,3,23];

let map = new Map();
for(i=0; i<bday.length; i++){

    if(map.has(bday[i])){
        let value = map.get(bday[i]);
        map.set(bday[i],value+1);
    }
    else{
        map.set(bday[i],1);
    }
}
    let max = 0;
    for( let [key,value] of map.entries()){
        if(value > max){
            max = value;
            maxKey = key;
        }
    }
console.log("\n The most shared date is ",maxKey);