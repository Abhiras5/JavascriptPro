# Global object
# When you call a function on nothing that comes from an object its value is the object on which it its called upon  
# if its a regular function that exists on its own, means you are calling it on the "global object", so its value is window object.

```
function greet(){
    console.log("Hello there!");
}

```
if you above function as greet(), this means you are calling it on window.greet()
- this means JS always call function on some object and if you have not specified an object explicitly, JS will call it on window object

```
function whatIsThis(){
    console.log("The value of this is: ", this)
}

const obj = {
    color: "red",
    age: 35,
    whatIsThis: whatIsThis,
}

whatIsThis(); // value of this function is window object.
obj.whatIsThis(); // here method is called on obj object, so the value of whatIsThis() is obje object.

const person = {
    name: "Abhi",
    city: "Pune",
    job: function(){
        console.log("THIS is: ", this)
        return `${this.name is UI developer}`;
    }
}
person.job(); // value of job() is person object

const j = person.job;
j(); // value of j is window object, because here s() calling in global scope and which has value window object 

```

# When you call a function on nothing, but the function comes from inside a class, the value of this will be undefined and not the window object.

# Call method
- it can be use to call a some function on particular object, by passing an argument

# apply method
- it is same as call() method, but you can pass arguments as array or array of object.

# bind method
- if we want to call methods on the object using call and apply multiple times on same context, then it not feasible in this case, so we can bind method, which gives us value of its context is now permanently bound to the speicified object.

# Binding Arguments
- using bind() we can bind function's arguments

# Binding with event listerners

```
const btn = document.querySelector("#clickMe");
btn.addEventListener("click", person.job.bind(person, "La LA La"));

```
# Key Takeaways

```
function greet(){
    console.log(`${this.username} says Hello!!!`);
}

const customer = {
    username: "Nightman";
    sayHi: greet,
}

customer.sayHi(); // Nightman says Hello

```