class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
       // console.log("Hello, The device is saying " + this.greeting)
        return "Hello, The device is saying " + this.greeting;

    }
}

let greeter = new Greeter("Fuck you");
let greeter1 = new Greeter("Fuck off");
console.log(greeter.greet())
console.log(greeter1.greet())
class Animal {
    move(distanceInMeters: number = 0) {
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}

class Dog extends Animal {
    bark() {
        console.log('Woof! Woof!');
    }
}
class Cat extends Animal {
    bark() {
        console.log('mew! mew!');
    }
}

const cat = new Cat();
const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();
cat.bark();
cat.move(0);
cat.bark();
class Animal1 {
   public name: string;
   public constructor(theName: string) { this.name = theName; }
   public move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
console.log(new Animal1("CaOfftFuck").name);

class Snake extends Animal1 {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horse extends Animal1 {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

let sam = new Snake("Sammy the Python");
let tom: Animal1 = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);
class Animal2 {
    name: string;
    constructor(theName: string) { this.name = theName; }
}

class Rhino extends Animal2 {
    constructor() { super("Rhino"); }
}

class Employee1 {
    name: string;
    constructor(theName: string) { this.name = theName; }
}

let animal = new Animal2("Goat");
let rhino = new Rhino();
let employee = new Employee1("Bob");
console.log(animal.name)
animal = rhino;
console.log(animal)
animal = employee;
console.log(animal)
class Person {
    protected name: string;
    constructor(name: string) { this.name = name; }
}

class Employee extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
//console.log(howard.name); // error
let john = new Person("Johnsena");
console.log(john)
class Person1 {
    protected name: string;
    protected constructor(theName: string) { this.name = theName; }
}

// Employee can extend Person
class Employee2 extends Person1 {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard1 = new Employee2("Howard", "Sales");
//let john = new Person1("John"); // Error: The 'Person' constructor is protected
class Octopus {
     name: string;
    readonly numberOfLegs: number = 8;
    constructor (theName: string,theName1: number) {
        this.name = theName;
        this.numberOfLegs = theName1;
    }
}
let dad = new Octopus("Man with the 5 strong legs",89);
console.log(dad)
dad.name="fuck"
console.log(dad)
//dad.name = "Man with the 3-piece suit"; // error! name is readonly.
