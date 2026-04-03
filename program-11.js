// Write a JavaScript program that creates a class called BankAccount with properties for account number, account holder name, and balance. Include methods to deposit, withdraw, and transfer money between accounts. Create multiple instances of the BankAccount class and perform operations such as depositing, withdrawing, and transferring money.

class BankAccount {
    static accountNumbers = [];
    constructor(accountNumber,accountHolderName, accountBalance){
        if (accountBalance < 0) {
            throw new Error("Account balance cannot be negative.");
        }
        if (BankAccount.accountNumbers.includes(accountNumber)) {
            throw new Error("Account number already exists.");
        }
        BankAccount.accountNumbers.push(accountNumber);
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.accountBalance = accountBalance;
    }
    withdraw(amount){
        if (amount < 0) throw new Error("Withdrawal amount cannot be negative.");
        if (this.accountBalance >= amount) this.accountBalance -= amount;
        else console.log("Insufficient funds for withdrawal.");
    }
    deposite(amount){
        if (amount < 0) throw new Error("Deposit amount cannot be negative.");
        this.accountBalance += amount;
    }
    transfer(amount, targetAccount){
        if (!(targetAccount instanceof BankAccount)) throw new Error("Target account must be a BankAccount instance.");
        if (amount <= 0) throw new Error("Transfer amount cannot be negative.");
        if (this.accountBalance >= amount) {
            this.withdraw(amount);
            targetAccount.deposite(amount);
            console.log(`Successfully transferred ${amount} to ${targetAccount.accountHolderName}`);
            return true;
        } else {
            // console.log("Insufficient funds for transfer.");
            return false;
        }
    }
}

const account1 = new BankAccount(101, "Jay", 5000);
const account2 = new BankAccount(102, "Karan", 2000);

// account2.transfer(3000, account1);

if (account1.transfer(7000, account2)) {
    console.log("Transfer successful.");
    console.log(`\nJay's New Balance: ${account1.accountBalance}`);
    console.log(`Karan's New Balance: ${account2.accountBalance}`);
} else {
    console.log("Transfer failed.");
}