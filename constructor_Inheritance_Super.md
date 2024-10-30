# constructors in class used to initialize the properties using instance of the class also you can validate the properties
- for ex. class Triangle{
    construtor(a, b){
        this.a = a;
        this.b = b;
    }
}

const tri = Triangle(3,4); // instance created of class

# Inheritence and super
- Instead of duplicating of our code we can inherit functionality from parent class.
- for ex. class B extends A {
    // don't repeat if not different
    // will "inherit" from "parent"
    describe() {
        return "demo";
    }
}

# super
- If you want to add any new property to the child class constructor, then we need to call parent class constructor using super, 
otherwise it gives an error.
ex: super(a, b);