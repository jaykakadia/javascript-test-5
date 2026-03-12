// Write a JavaScript program that creates a class called Bank with properties for bank names and branches. Include methods to add a branch, remove a branch, and display all branches. Create an instance of the Bank class and perform operations to add and remove branches.

class Bank {
    constructor(name, branches) {
        this.name = name;
        this.branches = branches;
    }
    addBranch(branch) {
        this.branches.push(branch);
    }
    removeBranch(branch) {
        this.branches = this.branches.filter((b) => b !== branch);
    }
    displayBranches() {
        return this.branches;
    }
}
const SBI = new Bank("SBI", ["Mumbai", "Pune", "Delhi"]);
console.log("Initial branches:", SBI.displayBranches());

SBI.addBranch("Hyderabad");
console.log("After adding Hyderabad:", SBI.displayBranches());

SBI.removeBranch("Pune");
console.log("After removing Pune:", SBI.displayBranches());