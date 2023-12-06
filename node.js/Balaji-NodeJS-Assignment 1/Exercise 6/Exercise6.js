const fs = require('fs');

var userJson = [
    { "name" : "Balaji" , "age" :  23  , "gender" :  "Male" , "city" :  "Boduvarpatty" },
    { "name" : "Vatsan" , "age" :  23  , "gender" :  "Male" , "city" :  "Trichy" },
    { "name" : "Logesh" , "age" :  23  , "gender" :  "Male" , "city" :  "Pollachi" },
    { "name" : "Ragul" , "age" :  25  ,  "gender" :  "Male" , "city" :  "krishnagiri" },
    { "name" : "Rishav" , "age" :  26  , "gender" :  "Male" , "city" :  "Bihar" },
    { "name" : "Govind" , "age" :  30  , "gender" :  "Male" , "city" :  "Trichy" },
    { "name" : "sankar" , "age" :  23  , "gender" :  "Male" , "city" :  "kumbakonam" },
    { "name" : "Ganesh" , "age" :  25  , "gender" :  "Male" , "city" :  "Delhi" },
];

function writeFile(url){

    var line = "";
    for(i=0;i<userJson.length;i++){
        line += `${userJson[i].name} | ${userJson[i].age} | ${userJson[i].gender} | ${userJson[i].city} \n`;
        // console.log(line);
    }
    fs.writeFile(url,line,function(error){
        if(error){
            console.log("Error in writing file...");
        }
        else{
            console.log("File is saved...")
        }
    });
}
writeFile("./lib/info.txt");
