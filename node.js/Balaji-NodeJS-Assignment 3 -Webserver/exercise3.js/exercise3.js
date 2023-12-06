var http = require('http');
var fs = require('fs');

http.createServer((req,res)=>{
    if(req.url==="/home"){
        var htmlData = fs.readFile("../lib/home.html","utf-8",(error,data)=>{
            if(error){
                console.error(error);
            }
            else{
                res.writeHead(200);
                res.end(data);
            }
        });
    }
    if(req.url==="/contact"){
        var htmlData = fs.readFile("../lib/contact.html","utf-8",(error,data)=>{
            if(error){
                console.error(error);
            }
            else{
                res.writeHead(200);
                res.end(data);
            }
        });
    }
    if(req.url==="/about"){
        var htmlData = fs.readFile("../lib/about.html","utf-8",(error,data)=>{
            if(error){
                console.error(error);
            }
            else{
                res.writeHead(200);
                res.end(data);
            }
        });
    }
}).listen(8080);

