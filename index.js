class BankAccount {
  constructor(accountNumber, accountHolder, balance = 0) {
    (this.balance = balance),
      (this.accountHolder = accountHolder),
      (this.accountNumber = accountNumber);
  }
  deposit(amt) {
    if (amt > 0) {
      this.balance += amt;
      console.log(`You deposited ${amt}. New balance: ${this.balance}`);
    } else {
      console.log(`Can't deposit a negative amount`);
    }
  }
  withdraw(amt) {
    if (amt > this.balance) {
      console.log(`Insuff. balance`);
    } else {
      this.balance -= amt;
      console.log(`You withdrew ${amt}. New balance: ${this.balance}`);
    }
  }
}

const acc1 = new BankAccount(123, "Abhi");
console.log("#Your account details initial:", acc1);
console.log(acc1.deposit(100));
console.log(acc1.withdraw(20));
console.log("#Your account statement:", acc1);
console.log(acc1);
