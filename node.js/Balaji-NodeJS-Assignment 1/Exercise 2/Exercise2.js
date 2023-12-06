const fs = require('fs');

var randomWords  = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var randomlength = randomWords.length;

function getWriteFile(url){

    var words = " ";

    for(i=0;i<100;i++){
        for(j=0;j<10;j++){
            words += randomWords.charAt(Math.random()*randomlength);
        }
        words+="\n";
    }
    fs.writeFile(url,words,function(error){
        if(error){
            console.log(error);
        }
        else{
            console.log("The file is saved...");
        }
    });
}
getWriteFile("./lib/random-words.txt");


