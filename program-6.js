// Write a JavaScript program that creates a class called 'Employee' with properties for name and salary. Include a method to calculate annual salary. Create a subclass called 'Manager' that inherits from the 'Employee' class and adds an additional property for department. Override the annual salary calculation method to include bonuses for managers. Create two instances of the 'Manager' class and calculate their annual salary.

class Employee{
    constructor(salary , name ){
        this.salary = salary;
        this.name = name;
    }
    annualSalary(){
        return this.salary * 12;
    }
}
class Manager extends Employee {
  constructor(salary, name, department, bonus) {
    super(salary, name);
    this.department = department;
    this.bonus = bonus;
  }
  annualSalary() {
    return super.annualSalary() + this.bonus;
  }
}
let manager1 = new Manager(100000, "Jay", "IT", 1000000);
let manager2 = new Manager(200000, "Karan", "Sales", 20000);
console.log(manager1.annualSalary());
console.log(manager2.annualSalary());