
// function fetchf(){
//     fetch("https://64ed8ffb1f87218271416236.mockapi.io/api/xml/userdata").then((res)=> {
//     return res.json();
//     console.log(res);
// }).then((res)=> {
//     console.log(res);
//     document.write(JSON.stringify(res));
// });
// }
// function fetchf(){

// var req = new XMLHttpRequest();

// req.open("Get", "https://64ed8ffb1f87218271416236.mockapi.io/api/xml/userdata" ,true);

// req.setRequestHeader("Content-type", "text/plain" );

// req.send();

// req.onreadystatechange = function () {
//     if(req.readyState == 4 && req.status == 200){
//         document.getElementById("btn").innerHTML = req.responseText;
//     }
// }

// }

function display(){
    return new Promise (function(resolve,reject){
        var req = new XMLHttpRequest();
        req.open("Get","https://6504404ec8869921ae24c3e3.mockapi.io/api/v1/users/12",true);
        req.setRequestHeader("Content-Type","application/json");
        req.send();
        req.onreadystatechange = function(){
            if(req.readyState==4){
                if(req.status ==200){
                    var users = JSON.parse(req.responseText);
                    resolve(users);
                }
                else{
                    reject("Failed cases",req.status);
                }
            }
        };
    });
}
// promise using .then .catch
// display().then(function(data){
//     console.log(data);
// }).catch(function(error){
//     console.log(error);
// });


// promise using async await
async function fetch(){
    try {
        var data = await display();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
fetch();

