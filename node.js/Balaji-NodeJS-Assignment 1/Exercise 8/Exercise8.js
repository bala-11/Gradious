const xlsx = require('json2xls');
const fs = require('fs');

var userJson = [
    { "Name" : "Balaji" , "Age" :  23  , "Gender" :  "Male" , "City" :  "Boduvarpatty" },
    { "Name" : "Vatsan" , "Age" :  23  , "Gender" :  "Male" , "City" :  "Trichy" },
    { "Name" : "Logesh" , "Age" :  23  , "Gender" :  "Male" , "City" :  "Pollachi" },
    { "Name" : "Ragul" ,  "Age" :  25  , "Gender" :  "Male",  "City" :  "krishnagiri" },
    { "Name" : "Rishav" , "Age" :  26  , "Gender" :  "Male" , "City" :  "Bihar" },
    { "Name" : "Govind" , "Age" :  30  , "Gender" :  "Male" , "City" :  "Trichy" },
    { "Name" : "sankar" , "Age" :  23  , "Gender" :  "Male" , "City" :  "kumbakonam" },
    { "Name" : "Ganesh" , "Age" :  25  , "Gender" :  "Male" , "City" :  "Delhi" },
];

function readJson(url){
    const json = xlsx(userJson);
    fs.writeFile(url,json,'binary',function(error){
        if(error){
            console.log("Error in conerting Json to Excel.");
        }
        else{
            console.log("Json data converted to Excel...");
        }
    });
}

readJson("./lib/sample.xlsx");