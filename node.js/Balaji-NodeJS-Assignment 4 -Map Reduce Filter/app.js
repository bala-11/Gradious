
var employees = [{
	"name": "Aghil",
	"age": 20,
	"salary": 50000,
	"department": "development",
	"city": "Hyderabad"
},{
	"name": "Babu",
	"age": 25,
	"salary": 60000,
	"department": "marketing",
	"city": "Delhi"
},{
	"name": "Babu",
	"age": 25,
	"salary": 60000,
	"department": "marketing",
	"city": "Pune"
},{
    "name": "Chaitanya",
    "age": 30,
    "salary": 70000,
    "department": "sales",
    "city": "Mumbai"
}, {
    "name": "Divya",
    "age": 28,
    "salary": 55000,
    "department": "development",
    "city": "Bangalore"
}, {
    "name": "Eesha",
    "age": 22,
    "salary": 48000,
    "department": "hr",
    "city": "Chennai"
}, {
    "name": "Farhan",
    "age": 27,
    "salary": 62000,
    "department": "marketing",
    "city": "Hyderabad"
}, {
    "name": "Gaurav",
    "age": 32,
    "salary": 72000,
    "department": "sales",
    "city": "Delhi"
}, {
    "name": "Harini",
    "age": 29,
    "salary": 53000,
    "department": "development",
    "city": "Pune"
}, {
    "name": "Ishita",
    "age": 24,
    "salary": 49000,
    "department": "hr",
    "city": "Mumbai"
}, {
    "name": "Jatin",
    "age": 31,
    "salary": 71000,
    "department": "sales",
    "city": "Bangalore"
}, {
    "name": "Kritika",
    "age": 26,
    "salary": 59000,
    "department": "development",
    "city": "Chennai"
}, {
    "name": "Lalita",
    "age": 23,
    "salary": 54000,
    "department": "marketing",
    "city": "Hyderabad"
}, {
    "name": "Manan",
    "age": 33,
    "salary": 73000,
    "department": "sales",
    "city": "Delhi"
}, {
    "name": "Neha",
    "age": 21,
    "salary": 47000,
    "department": "hr",
    "city": "Pune"
}, {
    "name": "Omkar",
    "age": 30,
    "salary": 70000,
    "department": "marketing",
    "city": "Mumbai"
}, {
    "name": "Priyanka",
    "age": 28,
    "salary": 56000,
    "department": "development",
    "city": "Bangalore"
}, {
    "name": "Rajesh",
    "age": 22,
    "salary": 50000,
    "department": "hr",
    "city": "Chennai"
}];

// SET TIER FOR EMPLOYEES 
function getEmployees(empData){
    empData.map((emp)=>{
        if(emp.salary > 50000){
            emp.tier = 1;
        }
        else{
            emp.tier = 2;
        }
    });
    return empData;
}

console.log("Employees list by tiers",getEmployees(employees));


// Get Employees by city
function getEmployeesByCity(empDataByCity){
    var newArr = empDataByCity.filter((emp)=>{
        return emp.city == "Hyderabad";
    });
    return newArr;
}

console.log("Employees from Hyderabad:",getEmployeesByCity(employees));

// GET TOTAL SALARY
function getEmployeesTotalSalary(empTotalSalary){
    var salaryTotal = empTotalSalary.reduce((total,emp) => {
        return total + emp.salary;
    },0);
    return salaryTotal;
}
console.log("Employees total salary:",getEmployeesTotalSalary(employees));

// GET TOTAL SALARY OF EMPLOYEES WHO ARE FROM HYDERABAD
function getEmployeesSalaryOfHyderabad(employeesOfHyderabad){
     var salary = employeesOfHyderabad.filter((emp)=>{
        return emp.city =="Hyderabad";
     }).reduce((total,emps)=>{
        return total + emps.salary;
     },0);
     return salary;
}
console.log("Hyderabad Employees total salary:",getEmployeesSalaryOfHyderabad(employees));

// GET TOTAL SALARY OF TIER 1
function getTotalSalaryofTier1(empTier1){
    var tier1Salary  = empTier1.filter((emp)=>{
        return emp.tier ===1;
    }).reduce((total,emps)=>{
        return total + emps.salary;
    },0);
    return tier1Salary;
}

console.log("Salaries of tier 1 Empployees:",getTotalSalaryofTier1(employees));
