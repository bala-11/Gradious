var http = require('http');
var fs = require('fs');

var server = http.createServer();

var hostname = "localhost";

var port = 8080;

server.on('request',(req,res)=>{
    if(req.url==='/index' || req.url==='/'){
        var readFile = fs.readFile("../lib/index.html","utf-8",(error,data)=>{
            if(error){
                console.error(error);
            }
            else{
                res.writeHead(200);
                res.end(data);
            }
        });
    }
});

server.listen(port,hostname,()=>{
    console.log(`Server running on http://${hostname}:${port}/`)
});