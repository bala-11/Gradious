// -------------------------------- CLOSURE -------------------------------
function add(x){
    return function(y){
        return x+y;
    }
}

var addsum = add(10);
console.log("CLOSURE:" , addsum(20));


// -------------------------------- CURRYING ------------------------------

function total(a,b,c){
    return a+b+c;
}

console.log("TOTAL:",total(10,20,30));

// Instead 

function totalSum(u){
    return function(v){
        return function(w){
            return u+v+w;
        }
    }
}

console.log("CURRYING:", totalSum(10)(20)(30));
