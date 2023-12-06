var fs = require('fs');

var readStream = fs.createReadStream('./lib/aitstatic.exe');
var writeStream = fs.createWriteStream('./lib/gradious-assignments.exe');

readStream.on("data",(chunk) =>{
    writeStream.write(chunk);
});
 