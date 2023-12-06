const fs = require('fs');

function getReadData(url){
    fs.readFile(url,"utf8",function(error,data){
        if(error){
            console.log("Error in reading file");
        }
        else{
            let textToJson  = data.toString().split('\r\n').toString().split('|').toString().split(',');
            // console.log(textToJson);

            var userJson =[];

            for(let i=0; i<textToJson.length-1; i=i+4){
                userJson.push(`{ name : ${textToJson[i]}, age : ${textToJson[i+1]} , gender : ${textToJson[i+2]}, city : ${textToJson[i+3]} }`);
            }
            console.log(userJson);
        }
    });
}
getReadData("./lib/readme.txt")