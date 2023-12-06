const express = require("express");
const app = express();
const fs = require('fs');
app.use(express.json())

app.use('/',express.static('./public'));
app.listen(8080,()=>{
    console.log(`server is running on 8080...`);
});

// Get all userDetails
var dataJson = [];
function readDetails(){
    dataJson = JSON.parse(fs.readFileSync("./data/buddy-list.json"));
    // console.log(dataJson);
}

// Get all write details
function writeDetails(writeUserData){
    fs.writeFileSync("./data/buddy-list.json",JSON.stringify(writeUserData));
}

// Code to display user json
app.get("/buddylist",(req,res)=>{
    readDetails();
    res.send(JSON.stringify(dataJson));
});

// post all details 
app.post('/buddylist',(req,res)=>{
    // console.log(typeof(req.body));
    const data1 =req.body;
    dataJson.push(data1);
    writeDetails(dataJson);

    res.status(200).send("Success");
});

// delete user details
app.delete("/buddylist/:id",(req,res)=>{

    const id = req.params.id;
    dataJson.splice(id,1);
    writeDetails(dataJson);
    readDetails();
    res.status(200).send("Deleted");
});

// update the user
app.put("/buddylist/:id",(req,res)=>{
    const id = req.params.id;
    const index = dataJson[id].userId;
    const userData = req.body;
    
    var updateJsonData = dataJson.map(obj =>{
        if(obj.userId == index){
            obj.name = userData.name;
            obj.profilePicture = userData.profilePicture;
            obj.statusMessage = userData.statusMessage;
            obj.presence = userData.presence;
         }
         return obj;
    });
    writeDetails(updateJsonData);
    res.status(200).send("UpdatedSucessfully");
});