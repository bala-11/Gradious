// setTimeout(function(){
//     console.log("Im in timeout0");
// },100);
// console.log("hi");
// console.log("hi2");
// setTimeout(function(){
//     console.log("Im in timeout2");
// },3000);
// setTimeout(function(){
//     console.log("Im in timeout");
// },0);
// console.log("hi3");
// console.log("hi4");

// setTimeout(function(){
//     console.log("Im in timeout2");
// },1000);

// console.log("start");

// for(let j=1; j<=10; j++){
//     setTimeout(function(){
//         console.log(j);
//     },1000);
// }
// console.log("End");
// let x = 10;
// function display(){
//     console.log(x);
//     var x = 50;
//     if(x > 30){     
//         console.log(x);
//     }
// }
// console.log(display.prototype)
// display();

// function Person1(){
//    this.firstname = "Balaji";
//     this.age = 23;
// }
// function person2(){
//     this.firsrname = "Balaji02";
//     this.age = 23;
// }
// function person3(){
//     this.firsrname = "Balaji03";
//     this.age = 23;
//     length =10;
// }

// const personObj = new Person1();
// // console.log(Object.getPrototypeOf(personObj));
// Person1.prototype.lastname = "K";
// Person1.prototype.lastname = "Kumar";
// Person1.prototype.firstname = "Rolex";
// console.log(personObj.lastname);

// function Employee(){
//     let test1 = function(){
//         console.log("test 1111");
//     }

//     this.test2 = function(){
//         console.log("test 2222");
//     }
// }

//console.log(Employee.prototype);


// const emp = new Employee();
// Employee.prototype.name = "Abhi";
// Employee.prototype.name = "Abhishek";


// Employee.prototype.test3 =function(){
//     console.log("test 3333");
// }
// //console.log(Employee.prototype);

// // console.log(emp.test2());
// // console.log(emp.name);
// // console.log(emp.test1());
// console.log(emp.test3());


// const numbers = [1,2,3,4,5]

// numbers.forEach( n => 
//     console.log(n));