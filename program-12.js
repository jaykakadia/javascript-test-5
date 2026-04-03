// Write a JavaScript program that creates a class called University with properties for university name and departments. Include methods to add a department, remove a department, and display all departments. Create an instance of the University class and add and remove departments.

class University{
    
    constructor(name, department){
        this.name = name;
        this.department = [...department];
    }
    addDepartment(department){
        if (!this.department.includes(department)) {
            this.department.push(department);
        }
    }
    removeDepartment(department){
        if (this.department.includes(department)) {
            this.department = this.department.filter((d) => d !== department);
        } else {
            console.log("Department not found");
        }
    }
    displayDepartment(){
        console.log(`Departments at ${this.name}:`, this.department);
    }
}


const stanford = new University("Stanford", ["Computer Science", "Physics"]);

console.log("Initial Departments:");
stanford.displayDepartment();

stanford.addDepartment("Mathematics");
stanford.displayDepartment();

stanford.removeDepartment("Physics");
stanford.displayDepartment();