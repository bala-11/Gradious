var fs = require('fs');
var http = require('http');

var hostname='localhost' , port=8080;

var server = http.createServer();

server.on('request',(req,res) => {

    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept");
    res.setHeader("Content-Type","application/json");
    res.statusCode=200;

     var stream = true;

     if(stream){

        stream = fs.createReadStream("./lib/readme.txt");
        stream.on("data", (data)=> {
			var chunk = data.toString();
			console.log(chunk);
		});
		stream.pipe(res);
     }
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});