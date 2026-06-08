// function PersonMaker(name,age){
//     const person ={
//         name:name,
//         age:age,
//         talk(){
//             console.log(`Hi my name is ${this.name}`);
//         }
//     };
//     return person;
// } 

// Constructors --> It doesn't return anything.

// function Person(name,age){
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.talk(){
//     console.log(`Hi ! My name is ${this.name}`); 
// }

// let p1 = new Person("nik",25);
// let p2 = new Person("adam",25);

// Classes

// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     talk(){
//         console.log(`Hi, My name is ${this.name}`);
//     }

// }

// let p1 = new Person("nik",25);
// let p2 = new Person("adam",25);

// Inheritance

// class Person{
//     constructor (name,age){
//         console.log("person class construcotr");
//     this.name = name;
//     this.age = age;
// }
// talk(){
//         console.log(`i am ${this.name}`);
//     }
// }

// class Student extends Person{
//     constructor(name,age,marks){
//         console.log("student class construcotr");
//         super(name,age);
        
//         this.marks = marks;
//     }
   
// }



// class Teacher  extends Person{
//     constructor(name,age,subject){
//        super(name,age);
//         console.log("Teacher class construcotr");

//         this.subject = subject;
//     }
    
// }

class Mammals{
    constructor(name){
        this.name = name;
        this.type = "warm-blooded";
    }
    talk(){
        console.log("I am Eating");
    }
}

class Dog extends Mammals{
    constructor(name){
        super(name);
    }
    bark(){
        console.log("bhaww bhaww .....");
    }
}

class Cat extends Mammals{
    constructor(name){
        super(name);
    }
    Meow(){
        console.log("Meow Meow .....");
    }
}