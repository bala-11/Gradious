window.onload = loadData;

// const name = 123;
// var names = "logesh";
// let age =45;

var students = {
    "abhi@gmail.com" : {
         "firstName":"Abishek",
         "lastName":"verma",
         "mobile": "9876543210",
         "age": 23,
         "city" : "Delhi"
    },
    "babu@gmail.com" : {
        "firstName":"Babu",
        "lastName":"Annam",
        "mobile": "9876543210",
        "age": 25,
        "city" : "Hyderabad"
    },
    "chitra@gmail.com" : {
        "firstName":"Chitra",
        "lastName":"Kumar",
        "mobile": "9876543210",
        "age": 25,
        "city" : "Chennai"
    },
    "deepa@gmail.com" : {
        "firstName":"Deepa",
        "lastName":"Verma",
        "mobile": "9876543210",
        "age": 27,
        "city" : "Mumbai"
    },
    "bala@gmail.com" : {
        "firstName":"Balaji",
        "lastName":"Kumar",
        "mobile": "9876543210",
        "age": 22,
        "city" : "Dindigul"
   },
   "Rahul@gmail.com" : {
       "firstName":"Rahul",
       "lastName":"Anna",
       "mobile": "9876543210",
       "age": 25,
       "city" : "Hyderabad"
   },
   "Durga@gmail.com" : {
       "firstName":"Durga",
       "lastName":"Devi",
       "mobile": "9876543210",
       "age": 25,
       "city" : "Chennai"
   },
   "Kali@gmail.com" : {
       "firstName":"Kali",
       "lastName":"Devi",
       "mobile": "9876543210",
       "age": 27,
       "city" : "Chennai"
   },
   "karuppu@gmail.com" : {
    "firstName":"Karuppusamy",
    "lastName":"K",
    "mobile": "9876543210",
    "age": 23,
    "city" : "Madurai"
},
"maari@gmail.com" : {
   "firstName":"Maari",
   "lastName":"A",
   "mobile": "9876543210",
   "age": 25,
   "city" : "Trichy"
},
"Masani@gmail.com" : {
   "firstName":"Masani",
   "lastName":"M",
   "mobile": "9876543210",
   "age": 25,
   "city" : "Pollachi"
},
"murali@gmail.com" : {
   "firstName":"Murali",
   "lastName":"Verma",
   "mobile": "9876543210",
   "age": 27,
   "city" : "Mumbai"
},
"kohli@gmail.com" : {
   "firstName":"Virat",
   "lastName":"Kumar",
   "mobile": "9876543210",
   "age": 22,
   "city" : "Theni"
},"rocky@gmail.com" : {
  "firstName":"Rakesh",
  "lastName":"A",
  "mobile": "9876543210",
  "age": 25,
  "city" : "Hyderabad"
},
"andrews@gmail.com" : {
  "firstName":"John",
  "lastName":"Andrews",
  "mobile": "9876543210",
  "age": 25,
  "city" : "Chennai"
},
"michael@gmail.com" : {
  "firstName":"Micheal",
  "lastName":"May",
  "mobile": "9876543210",
  "age": 27,
  "city" : "Boston"
},
"rohit@gmail.com" : {
    "firstName":"Rohit",
    "lastName":"Sharma",
    "mobile": "9876543210",
    "age": 27,
    "city" : "Chennai"
},
"binladen@gmail.com" : {
 "firstName":"Bin",
 "lastName":"L",
 "mobile": "9876543210",
 "age": 23,
 "city" : "Afghan"
},
"billgates@gmail.com" : {
"firstName":"Bill",
"lastName":"Gates",
"mobile": "9876543210",
"age": 25,
"city" : "America"
},
"rock@gmail.com" : {
"firstName":"Steve",
"lastName":"M",
"mobile": "9876543210",
"age": 25,
"city" : "Texas"
},
"stevejobs@gmail.com" : {
"firstName":"Steve",
"lastName":"Jobs",
"mobile": "9876543210",
"age": 27,
"city" : "Mumbai"
},
"klrahul@gmail.com" : {
"firstName":"Rahul",
"lastName":"KL",
"mobile": "9876543210",
"age": 22,
"city" : "Kerala"
},
"bruce@gmail.com" : {
"firstName":"Bruce",
"lastName":"wayne",
"mobile": "9876543210",
"age": 25,
"city" : "Hyderabad"
},
"andrewmac@gmail.com" : {
"firstName":"Mac",
"lastName":"Andrews",
"mobile": "9876543210",
"age": 25,
"city" : "Chennai"
},
"raja@gmail.com" : {
"firstName":"Raju",
"lastName":"Madu",
"mobile": "9876543210",
"age": 27,
"city" : "Boston"
}
}
function loadData(){
    if(localStorage.getItem("students")==null){
        localStorage.setItem("students",JSON.stringify(students));
    }

    var employees = JSON.parse(localStorage.getItem("students"));

    var table = "<div class='table'><div class='header'><span class='data'>"+"<b>Fullname</b>"+"</span><span class='data'>"+"<b>Age</b>"+"</span><span class='data'>"+"<b>Mobile</b>"+"</span><span class='data'>"+"<b>Email</b>"+"</span><span class='data'>"+"<b>City</b>"+"</span></div><div class='row-group'>";

    for(let std in employees){

        table += "<div class='row-data'><span class='data'>"+employees[std].firstName+" "+employees[std].lastName+"</span><span class='data'>"+employees[std].age+"</span><span class='data'>"+employees[std].mobile+"</span><span class='data'>"+std+"</span><span class='data'>"+employees[std].city+"</span></div>"
    
    }

    document.getElementById("div1").innerHTML = table + "</div></div>"; 
}