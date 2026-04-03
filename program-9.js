// Write a JavaScript program that creates a class called Bank with properties for bank names and branches. Include methods to add a branch, remove a branch, and display all branches. Create an instance of the Bank class and perform operations to add and remove branches.

class Bank {
  constructor(name, branches) {
    this.name = name;
    this.branches = [...branches];
  }

  addBranch(branch) {
    if (!this.branches.includes(branch)) {
      this.branches.push(branch);
    }
  }

  removeBranch(branch) {
    const index = this.branches.indexOf(branch);

    if (index !== -1) {
      this.branches.splice(index, 1);
    } else {
      console.log("Branch not found");
    }
  }

  displayBranches() {
    return [...this.branches];
  }
}

const SBI = new Bank("SBI", ["Mumbai", "Pune", "Delhi"]);
console.log("Initial branches:", SBI.displayBranches());

SBI.addBranch("Hyderabad");
console.log("After adding Hyderabad:", SBI.displayBranches());

SBI.removeBranch("Pune");
console.log("After removing Pune:", SBI.displayBranches());