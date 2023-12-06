var user_json = "";
function display(){
    var userPlus = document.getElementById("addUser");
    var addModal = document.getElementById("modalAddUser");
    
    userPlus.addEventListener("click", () => {
        addModal.classList.add("show");
        addModal.style.display = "block";
    })
    
    window.addEventListener("click", (event)=> {
        if (event.target == addModal) {
          addModal.style.display = "none";
        }
    });

    // Call the user lists

    var req = new XMLHttpRequest();
    req.open("Get",`https://6504404ec8869921ae24c3e3.mockapi.io/api/v1/users`,true);
    req.setRequestHeader("Content-type","application/json");
    req.send();

    req.onreadystatechange = function(){
        if(req.readyState == 4){
            if(req.status==200){ 

     user_json = JSON.parse(req.responseText);

    let tableData =`<table id="table"><tr id="tableHeadings"><th class="name">Name</th><th class="age">Age</th><th class="state">State</th><th class="functions">Functions</th></tr>`

    for(let key in user_json){
        tableData += `<tr class="user" id="user1">
            <td class="name">${user_json[key].name}</td>
            <td class="age">${user_json[key].age}</td>
            <td class="state">${user_json[key].state}</td>
            <td class="functions">
                <button class="edit" onclick="editUser(${user_json[key].id});" type="button" id="1"><i class="fa-solid fa-pen-clip"></i></button><button class="deleteB" onclick="deleteUser(${user_json[key].id});"type="button" id="1"><i class="fa-solid fa-trash-can"></i></button>
                </td>
            </tr>`
            }
    document.getElementById("userTable").innerHTML = tableData + `</table>`;
    }
}
}
};

// --------------------------------Add user---------------------------------

function addUser(){
        
    var peopleName = document.getElementById("inputName").value;
    var peopleAge  = document.getElementById("inputAge").value;
    var peopleState = document.getElementById("inputState").value;

    var userData = JSON.stringify({name:peopleName, age:peopleAge,state:peopleState});

    var req = new XMLHttpRequest();
    req.open("Post",`https://6504404ec8869921ae24c3e3.mockapi.io/api/v1/users`,true);
    req.setRequestHeader("Content-type","application/json");
    req.send(userData);

    document.getElementById("modalAddUser").style.display="none";

    req.onreadystatechange = function(){
        if(req.readyState == 4 && req.status==201){ 
                display();
        }
    }
    clear();
};


// --------------------------------Delete user---------------------------------------

function deleteUser(id){

// Printing the name to be delete
const index=user_json.findIndex((obj) =>obj.id ==id);
document.getElementById("userDeleted").innerHTML=user_json[index].name;
    
var modal = document.getElementById("deleteModal");
modal.classList.add("show");
modal.style.display = "block";
var cancelDelete=document.querySelectorAll(".deleteCancel");
cancelDelete.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        modal.style.display = "none";
    });
});

var confirmDelete = document.querySelector(".confirmDelete");
confirmDelete.addEventListener("click", ()=>{
    modal.style.display = "none"; 

    var req = new XMLHttpRequest();
    req.open("Delete",`https://6504404ec8869921ae24c3e3.mockapi.io/api/v1/users/${id}`,true);
    req.setRequestHeader("Content-type","application/json");
    req.send();
    req.onreadystatechange = function(){
        if(req.readyState == 4 ){
            if(req.status==200){ 
                display();
        }
      }
    }
});
    
// let deleteLine = `<h5><b>Deleting: <span id="userDeleted">${user_json[index].name}</span></b></h5>`
// document.getElementById("balaji").innerHTML = deleteLine;
}

// function confirmDelete(id){
    
    
// }

// --------------------------------Edit user----------------------------------------------

function editUser(id){

    const index = user_json.findIndex((obj) => obj.id == id );

    let updateForm = `<div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body">
          <form id="addUserForm">
              <input type="text" id="inputUpdateName" placeholder="Name">
              <input type="number" id="inputUpdateAge" placeholder="Age" max="100" min="0">
              <select id="inputUpdateState">
                  <option disabled="" selected="">State</option>
                  <option>Andaman and Nicobar Islands</option>
                  <option>Andhra Pradesh</option>
                  <option>Arunachal Pradesh</option>
                  <option>Assam</option>
                  <option>Bihar</option>
                  <option>Chandigarh</option>
                  <option>Chhattisgarh</option>
                  <option>Dadra and Nagar Haveli and Daman &amp; Diu</option>
                  <option>Delhi</option>
                  <option>Goa</option>
                  <option>Gujarat</option>
                  <option>Haryana</option>
                  <option>Himachal Pradesh</option>
                  <option>Jammu &amp; Kashimr</option>
                  <option>Jharkand</option>
                  <option>Karnataka</option>
                  <option>Kerala</option>
                  <option>Ladakh</option>
                  <option>Lakshadweep</option>
                  <option>Madhya Pradesh</option>
                  <option>Maharashtra</option>
                  <option>Manipur</option>
                  <option>Meghalaya</option>
                  <option>Mizoram</option>
                  <option>Nagaland</option>
                  <option>Odisha</option>
                  <option>Puducherry</option>
                  <option>Punjab</option>
                  <option>Rajasthan</option>
                  <option>Sikkim</option>
                  <option>Tamil Nadu</option>
                  <option>Telanagana</option>
                  <option>Tripura</option>
                  <option>Uttar Pradesh</option>
                  <option>Uttarakhand</option>
                  <option>West Bengal</option>
              </select>
              <button type="button" class="btn btn-primary" onclick="updateUser(${id})" id="addUserButton">Update User</button>
          </form>
      </div>
    </div>
  </div>`

    document.getElementById("modalUpdateUser").innerHTML = updateForm;

    document.getElementById("inputUpdateName").value = user_json[index].name;
    document.getElementById("inputUpdateAge").value = user_json[index].age;
    document.getElementById("inputUpdateState").value = user_json[index].state;

    var userPlus = document.getElementById("addUser");
    var addModal = document.getElementById("modalUpdateUser");
    
    addModal.style.display = "block";
}

function updateUser(id){

    var updatedName = document.getElementById("inputUpdateName").value ;
    var updatedAge = document.getElementById("inputUpdateAge").value;
    var updatedState = document.getElementById("inputUpdateState").value;

    var req = new XMLHttpRequest();
    req.open("Put",`https://6504404ec8869921ae24c3e3.mockapi.io/api/v1/users/${id}`,true);
    req.setRequestHeader("Content-type","application/json");
    req.send(JSON.stringify({name:updatedName, age:updatedAge,state:updatedState}));
    req.onreadystatechange = function(){
        if(req.readyState == 4 ){
            if(req.status==200){ 
                 display();
        }
    }
  };
  document.getElementById("modalUpdateUser").style.display="none";
}

function clear(){
    document.getElementById("inputName").value = "";
    document.getElementById("inputAge").value = "";
    document.getElementById("inputState").selectedIndex =0;
}
window.onload = display;