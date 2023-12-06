const fs = require('fs');

function copyFile(sourceFile,newFile){
    fs.copyFile(sourceFile,newFile,function(error){
        if(error){
            console.log("Error in copying files");
        }
        else{
            console.log("File Copied...")
        }
    })
}
copyFile("./lib/sourceFile.txt","./lib/destinationFile.txt");