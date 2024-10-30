class BankAccount {
  constructor(accountNumber, accountHolder, balance = 0) {
    (this.balance = balance),
      (this.accountHolder = accountHolder),
      (this.accountNumber = accountNumber);
  }
  // below functions placed in a class are methods and they have access to the properties of object with this keyword.
  // they take arguments/ return data like any other function
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

const person = {
  name: "XYZ",
  city: "Pune",
  job: function(surName = ""){
      console.log("THIS is: ", this)
      console.log(`${this.name} ${surName} is UI developer`)
  }
}

const employee = {
  name: "ABC",
  city: "Pune"
}
console.log(person.job.call(employee, "IJK")); // value of this is employee object
// here in employee object we want to call person's object job method using call method as below:

// to call a method, you need to call it on this.

const nums = [1,5,2,99,3,5];

function maximum(){
  console.log(arguments);
  return Math.max.apply(null, arguments); // each value from this array like object will be passed to Math.max separately
}

console.log(maximum(1,2,99,4));

const boundJob = person.job.bind(employee); //here job() method of person is bound to employee object permantently

function sum(num1, num2){
  return num1 + num2;
}

const sum1 = sum.bind(null, 5);
const sum2 = sum.bind(null, 0);

console.log("#binding arguments");
console.log("#sum1",sum1(15)); // here first argument of sum is bound to 15 when you call sum1
console.log("#sum2",sum2(5));
console.log("#binding arguments END");

// bind with event listeners
const btn = document.querySelector("#clickMe");
btn.addEventListener("click", person.job.bind(person, "La LA La"));

/***** Arrow functions START */

const obj = {
  count: 10,
  doSomethingLater() {
    setTimeout(function () {
      // the function executes on the window scope
      this.count++;
      console.log(this.count); // logs NaN
    }, 300);
  },
};

obj.doSomethingLater(); //logs NaN, because the property "count" is not in the window scope.

// but with arrow functions, the this scope is more eaisly preserved:

const obj1 = {
  count: 10,
  doSomethingLater() {
    // The method syntax binds "this" to the "obj" context.
    setTimeout(() => {
      // Since the arrow function doesn't have its own binding and
      // setTimeout (as a function call) doesn't create a binding
      // itself, the "obj" context of the outer method is used.
      this.count++;
      console.log(this.count);
    }, 300);
  },
};

obj1.doSomethingLater(); // logs 11

/*  Arrow functions END*/

const butters = {
  firstName: "Butters",
  lastName: "Cluckly",
  greet: function(){
      return `Hello ${this.firstName} ${this.lastName}`
  }
}

const fluffy = {
  firstName: "Fluffy",
  lastName: "Meowson",
}

function greetFluffy(){
  // Invoke the greet method but instead of returning "Hello Butters Cluckly", return "Hello Fluffy Meowson". Do not modify the fluffy object above. 
  //console.log(fluffy.greet()); // fluffy is not a function;
  console.log(butters.greet.call(fluffy));
}

greetFluffy();