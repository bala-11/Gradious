const fs = require('fs');

function getFileContent(url){
    fs.readFile(url,"utf-8",function(error, data){
        if(error){
            console.log("Error in reading file");
        }
        else{
            console.log(data);
        }
    });
}
getFileContent("./lib/index.html");
getFileContent("./lib/readme.txt");
getFileContent("./lib/students.csv");