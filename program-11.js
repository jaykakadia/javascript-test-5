// Write a JavaScript program that creates a class called BankAccount with properties for account number, account holder name, and balance. Include methods to deposit, withdraw, and transfer money between accounts. Create multiple instances of the BankAccount class and perform operations such as depositing, withdrawing, and transferring money.

class BankAccount {
    constructor(accountNumber,accountHolderName, accountBalance){
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.accountBalance = accountBalance;
    }
    withdraw(amount){
        if (this.accountBalance >= amount) this.accountBalance -= amount;
        else console.log("Insufficient funds for withdrawal.");
    }
    deposite(amount){
        this.accountBalance += amount;
    }
    transfer(amount, targetAccount){
        if (this.accountBalance >= amount) {
            this.withdraw(amount);
            targetAccount.deposite(amount);
            console.log(`Successfully transferred ${amount} to ${targetAccount.accountHolderName}`);
        } else {
            console.log("Insufficient funds for transfer.");
        }
    }
}

const account1 = new BankAccount(101, "Jay", 5000);
const account2 = new BankAccount(102, "Karan", 2000);
console.log("\n-- Transferring 1000 from Jay to Karan --");
account1.transfer(1000, account2);

console.log(`\nJay's New Balance: ${account1.accountBalance}`);
console.log(`Karan's New Balance: ${account2.accountBalance}`);