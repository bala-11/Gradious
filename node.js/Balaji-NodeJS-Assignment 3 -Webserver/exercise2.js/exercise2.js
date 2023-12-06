var fs = require('fs');
var http = require('http');

http.createServer((req,res)=>{
    var readData = fs.readFile("../lib/users.txt","utf-8",(error,data)=>{
        if(error){
            console.error(error);
        }
        else{
            var readData = data.split("\r\n").toString().split("|").toString().split(",");
            // res.setHeader("content-type","text/HTML");
            let tableHead = `<table border><tr><th>Name</th><th>Age</th><th>Gender</th><th>City</th></tr>`
            var write = "";
            for(i=4;i<readData.length-1;i=i+4){
                write += `<tr><td>${readData[i]}</td><td>${readData[i+1]}</td><td>${readData[i+2]}</td><td>${readData[i+3]}</td></tr>`
            }
            let tableData = tableHead + write + `</table>`;
            res.writeHead(200);
            res.end(tableData);
        }
    });
}).listen(8080);