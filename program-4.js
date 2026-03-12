// Write a JavaScript program that creates a class called "BankAccount" with properties for account number and balance. Include methods to deposit and withdraw money from the account. Create some instances of the "BankAccount" class, deposit some money, and withdraw a portion of it.

class BankAccount {
  constructor() {
    this.accountNumber = Math.floor(10000 + Math.random() * 90000);
    this.balance = 0;
  }
  depo(amount) {
    this.balance += amount;
  }
  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
    } else {
      console.log("Insufficient funds");
    }
  }
  info() {
    return `Your account number = ${this.accountNumber}\nYour balance = ${this.balance}`;
  }
}

let jay = new BankAccount();
jay.depo(1000);
jay.withdraw(500);
console.log(jay.info());
