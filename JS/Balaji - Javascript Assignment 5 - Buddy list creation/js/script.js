
let users_json = [{
		userId: 1,
		name: "Jon Snow",
		profilePicture:
			"https://cg0.cgsociety.org/uploads/images/original/hosseindiba-jon-snow-1-b968195d-au6q.jpeg",
		statusMessage: "We become what we think about!",
		presence: 1,
	},
	{
		userId: 2,
		name: "Daenerys Targaryen",
		profilePicture:
			"https://preview.redd.it/hlxen8gtwpm01.jpg?width=640&crop=smart&auto=webp&v=enabled&s=a3c43bcbfc1db31d542ef67071559264358b3d2b",
		statusMessage: "A positive mindset brings positivethings.",
		presence: 3,
	},
	{
		userId: 3,
		name: "Tyrion Lannister",
		profilePicture:
			"https://mir-s3-cdn-cf.behance.net/project_modules/fs/6a3f5237411193.573f25019c8bf.jpg",
		statusMessage: "One small positive thought can change your whole day",
		presence: 3,
	},
	{
		userId: 4,
		name: "Jaime Lannister",
		profilePicture:
			"https://tse4.mm.bing.net/th/id/OIP.3xK757pu9ln6K9AtTgLnUAHaK0?pid=ImgDet&rs=1",
		statusMessage: "I am a rockstar",
		presence: 1,
	},
	{
		userId: 5,
		name: "Arya Stark",
		profilePicture:
			"https://64.media.tumblr.com/21de4501827aba1c6463ce2ae6a36780/tumblr_ps5le9xxRb1w9a5vgo1_1280.jpg",
		statusMessage: "I am using Gradious messenger",
		presence: 4,
}];

// addBuddy 

function addBuddy(){
	var userName  = document.getElementById("name").value;
	var userMessage  = document.getElementById("statusMessage").value;
	var userProfile  = document.getElementById("profilePicLink").value;
	var userPresence  = document.getElementById("presence").value;

	if(userName.trim()=="" || userMessage.trim()=="" || userProfile.trim()=="" ) {
		alert("Please fill all details properly");
	}
	else{
	var length = users_json.length +1 ;
	users_json.unshift({
		userId:length,
		name:userName,
		profilePicture:userProfile,
		statusMessage:userMessage,
		presence:userPresence,
	});
	display();
	}
	event.preventDefault();
}

function display(){

	let status = {
		1: "one",
		2: "two",
		3: "three",
		4: "four",
	};


	let card =`<nav class="nav-bar">
	<div class="logo">
		<p>Buddy List</p>
	</div>
	<div class="links">
		<button onclick="visibileUserForm()"><i class="bi bi-person-plus-fill"></i></button>
	</div>
</nav>
<div class="container-1">
	<div id='root' class="users-container">`

	for(let key in users_json){

		card+=`<div class="user">
				<div class="img-container">
					<img src=${users_json[key].profilePicture} class='user-image ${status[users_json[key].presence]}' alt="user image" />
				</div>
				<div class="user-detail">
				<p class="user-name">${users_json[key].name}</p>
				<p class="user-message">${users_json[key].statusMessage}</p>
				</div>
				<div class='three-btn'>
					<div class="dropdown">
						<a class="" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="bi bi-three-dots-vertical"></i></a>
						<ul class="dropdown-menu">
							<li><button id='USR0001' onclick='deleteBuddy(${key})'class="dropdown-item ">Delete</button></li>
							<li><button  id='update-USR0001' onclick='updateBuddy(${key})'class="dropdown-item ">Update</button></li>
						</ul>
					</div>
				</div>
			</div>
	`
	}
	document.getElementById("content").innerHTML = card + `</div>
	<form id="addUserForm">
		<div class='form'>
			<div class="input">
				<input type="text" name="" id="name" placeholder="Name">
			</div>
			<div class="input">
				<input type="text" name="" id="statusMessage" placeholder="Status Message">
			</div>
			<div class="input">
				<input type="text" name="" id="profilePicLink" placeholder="Profile Picture Link">
			</div>
			<div class="input">
				<select name="" id="presence">
					<option value="1">Availble</option>
					<option value="2">Busy</option>
					<option value="3">idle</option>
					<option value="4">Not loggedin</option>
				</select>
			</div>
			<div>
				<button class="btn" onclick="addBuddy()">Add User</button>
			</div>
		</div>
	</form>
	<form id="updateUserForm"></form>
</div>`;
}



function visibileUserForm(){

	document.getElementById("addUserForm").style.display = "block";
	document.getElementById("updateUserForm").style.display = "none";

}

// Delete the buddies 

function deleteBuddy(id){
	delete users_json[id];
	display();
}

// Update the buddies


function updateBuddy(index){

	document.getElementById("addUserForm").style.display = "none";
	document.getElementById("updateUserForm").style.display = "block";

	// formValue = str;
	let displayUpdateForm=`<div class='form'>
	<div class="input">
		<input type="text" name="" id="nameUpdate" placeholder="Name">
	</div>
	<div class="input">
		<input type="text" name="" id="statusMessageUpdate" placeholder="Status Message">
	</div>
	<div class="input">
		<input type="text" name="" id="profilePicLinkUpdate" placeholder="Profile Picture Link">
	</div>
	<div class="input">
		<select name="" id="presenceUpdate">
			<option value="1">Availble</option>
			<option value="2">Busy</option>
			<option value="3">idle</option>
			<option value="4">Not loggedin</option>
		</select>
	</div>
	<div>
		<button class="btn" onclick="onSubmit(${index})">Update Details</button>
	</div>
</div>`

    document.getElementById("updateUserForm").innerHTML=displayUpdateForm;

	document.getElementById("nameUpdate").value = users_json[index].name;
	document.getElementById("statusMessageUpdate").value = users_json[index].statusMessage;
	document.getElementById("profilePicLinkUpdate").value = users_json[index].profilePicture;
	document.getElementById("presenceUpdate").value = users_json[index].presence;
}

function onSubmit(index){

	var updatedName = document.getElementById("nameUpdate").value;
	var updatedStatusMessage = document.getElementById("statusMessageUpdate").value;
	var updatedProfilePicLink = document.getElementById("profilePicLinkUpdate").value;
	var updatedPresence = document.getElementById("presenceUpdate").value;


	users_json[index].name = updatedName;
	users_json[index].statusMessage = updatedStatusMessage;
	users_json[index].profilePicture = updatedProfilePicLink;
	users_json[index].presence = updatedPresence;

	display();
	event.preventDefault();
}


window.onload=display();
 