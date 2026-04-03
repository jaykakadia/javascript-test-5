// Write a JavaScript program that creates a class called "BankAccount" with properties for account number and balance. Include methods to deposit and withdraw money from the account. Create some instances of the "BankAccount" class, deposit some money, and withdraw a portion of it.

class BankAccount {
  static accounts = [];
  constructor(accNo) {
    if (BankAccount.accounts.includes(accNo)) {
      throw new Error("Account number already exists");
    }
    BankAccount.accounts.push(accNo);
    this.accountNumber = accNo;
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

const jay = new BankAccount(123456);
jay.depo(1000);
jay.withdraw(500);
console.log(jay.info());
const jay2 = new BankAccount(123456);
