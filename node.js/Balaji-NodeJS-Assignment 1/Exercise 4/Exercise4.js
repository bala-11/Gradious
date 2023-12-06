const fs = require('fs');
const mt = require('moment');

function writeContent(url){
    fs.readFile (url,"utf-8",function(error,data){
        if(error){
            console.log("Error in reading file...")
        }
        else{

            let text = data.split('\r\n');
            let date = mt().format('DD-MM-YYYY, h:mm:ss A')

            // console.log(text);

            var write=" ";

            for(let i=0;i<text.length;i++){
                write += date+ " "+text[i]+"\n";
            }
            console.log(write);
        }
    });
}

writeContent("./lib/debug.log");