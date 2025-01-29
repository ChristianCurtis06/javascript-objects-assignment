// Task 1: Create a constructor function for the Account object with properties for accountNumber, balance, and owner
function Account(accountNumber, balance, owner) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.owner = owner;
}

// Task 2: Task 2: Implement methods within the Account object to deposit and withdraw funds
Account.prototype.deposit = function(depositTotal) {
    this.balance += depositTotal;
    console.log(`Account balance after deposit of $${depositTotal}: $${this.balance}`);
};

Account.prototype.withdraw = function(withdrawTotal) {
    this.balance -= withdrawTotal;
    console.log(`Account balance after withdrawl of $${withdrawTotal}: $${this.balance}`);
};

// Task 3: Create a method to calculate compound interest based on the balance and specified interest rate
Account.prototype.calculateInterest = function(interestRate) {
    let interest = this.balance * (interestRate / 100);
    console.log(`Interest based on ${interestRate}% interest rate: $${interest.toFixed(2)}`);
    console.log(`Account balance after compounding interest: $${(this.balance + interest).toFixed(2)}`);
}

let account1 = new Account(1234, 5000, "John Doe");
console.log(`Original account balance: $${account1.balance}`)

account1.deposit(500);
account1.withdraw(250);
account1.calculateInterest(5)