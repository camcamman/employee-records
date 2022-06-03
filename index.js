var employees = [1]
function employe (name, jobTitle, Salary,) {
    this.name=name
    this.jobTitle=jobTitle
    this.Salary=Salary
    this.status= "full time"
    this.printEmployeeForm = function() {
        console.log("Name: "+name+", Job Title:"+jobTitle+", Salary: "+Salary+"/hour, Status: "+this.status);
    }
}


var bob = new employe("Bob", "V school insttructor", 3000) 
bob.status="part time"
bob.printEmployeeForm() 
employees[0]= bob

var tim = new employe("tim", "v school instructor", 2000)
tim.printEmployeeForm() 
employees[1]= tim

var veronca = new employe("veronaca", "V school instructor", 1000)
veronca.printEmployeeForm()
employees[2]= veronca

console.log(employees)






// This constructor will also have a method called `printEmployeeForm` 
//that prints the employee's information to the console.


// (e.g. `"Name: Bob, Job Title: V School Instructor, Salary: 
//$3000/hour, Status: Part time"`)

// You will then:

// 1. Instantiate three employees
// 2. Override the status attribute of one of them to either "Part Time" or "Contract"
// 3. Call the `printEmployeeForm` method for each employee
// 4. Put the generated employees into the `employees` array using whichever method you prefer.