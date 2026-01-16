const classroom = [
    {
        name: "Oliver",
        address: {
            state: 'Maharashtra'
        },
        age: 20,
        gender: "Male",
        grade: "A",
        review: 'good'
    },
    {
        name: "Emma",
        address: {
            state: 'Gujarat'
        },
        age: 21,
        gender: "Female",
        grade: "F",
        review: 'bad'
    },
    {
        name: "Ethan",
        address: {
            state: 'Rajasthan'
        },
        age: 18,
        gender: "Male",
        grade: "F",
        review: ""
    },
    {
        name: "Henry",
        address: {
            state: 'Tamil Nadu'
        },
        age: 17,
        gender: "Male",
        grade: "C",
        review: ''
    },
    {
        name: "Olivia",
        address: {
            state: 'Kerala'
        },
        age: 18,
        gender: "Female",
        grade: "A",
        review: null
    },
    {
        name: "Sophia",
        address: {
            state: 'Karnataka'
        },
        age: 27,
        gender: "Female",
        grade: "C",
        review: 'asd'
    }
];

// for (let i = 0; i < classroom.length; i++) {
//     console.log(classroom[i].name);
// }
// for (let student of classroom) {
//     if(student.age > 18) {
//         console.log(student.name + " Can Vote");
//     }
// }

// for (let student of classroom) {
//     if(student.grade === "F") {
//         console.log(student.name);
//     }
// }

// for(let student of classroom) {
//     if(student.grade === "A" || student.grade === "B" || student.grade === "C") {
//         console.log(student.name);
//     }
// }

// class StudentDetails {
//     constructor(name, rollNo, age, gender){
//         this.name = name;
//         this.rollNo = rollNo;
//         this.age = age;
//         this.gender = gender;
//     }
//     aboutStudent(){
//         return `Name: ${this.name}, Roll No: ${this.rollNo}, Age: ${this.age}, Gender: ${this.gender}`;
//     }

//     changeName(newName){
//         this.name = newName;
//         console.log("Name changed to: " + this.name);
//     }
// }

// let myName= "Eleven";
// let myRollNo= "11";
// let myAge = "18";
// let myGender = "female"

// let student1 = new StudentDetails("oliver", '01', "17", "male");
// // let student2 = new StudentDetails(myName, myRollNo, myAge, myGender);
// // console.log(student2);

// // console.log(student1.aboutStudent());
// // student1.changeName("Lucas");
// // console.log(student1);

// class Person {
//     constructor(name, age, gender){
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//     }
//     speak(){
//         return "Speaks Native Language";
//     }

//     eat(food){
//         return "Eats food " + food;
//     }
// }

// class Teacher extends Person{
//     constructor(name, age, gender, company){
//         super(name, age, gender);
//         this.company = company;
//     }
//     speak(){
//         return "Speaks English and Hindi";
//     }
//     // eat(food){
//     //     return "Eats only"+" "+ food;
//     // }

//     speakAtHome(){
//         return super.speak();
//     }
// }
// let person1 = new Person("Erica", 15, "female");
// let teacher1 = new Teacher("Mr. Smith", 40, "male", "Hawkins High School");
// console.log(teacher1);
// console.log(teacher1.speak());
// console.log(person1);
// console.log(person1.speak());

// console.log(teacher1.eat("pizza and coke"))

// console.log(teacher1.speakAtHome())

class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    get info(){
        return `Username: ${this.username}, Email: ${this.email}`;
    }
    set updateEmail(newEmail){
        this.email = newEmail;
    }
}

let user1 = new User("WillByers", "willbyers@example.com", "password123");
// console.log(user1.info);
// user1.updateEmail = "willbyers_new@example.com";
// console.log(user1.info);



class Person {
	constructor(name, age){
		this._name = name; 
        this._age = age;
	}
	get name(){
		return this._name;
	}
	set age(updatedAge){
		this._age = updatedAge;
	}
}

class Student extends Person {
	constructor(name, age){
		super(name, age);
	}
	study(){
		console.log(`${this.name} is studying`)
	}
}

class Teacher extends Person {
	constructor(name, age){
		super(name, age);
	}
	teach(){
		console.log(`${this.name} is teaching`)
	}
}

// const person = new Person("John", 25);
// console.log(person.name);
// person.age = 26;
// console.log(person._age);

// const student = new Student("Mike", 20);
// student.study();

// const teacher = new Teacher("Sarah", 35);
// teacher.teach();

class Animal {
	constructor(species){
		this._species = species;
	}
	get species(){
		return this._species;
	}
    makeSound(){
        console.log(`The ${this.species} makes a sound`);
    }
}

class Dog extends Animal {
	constructor(species){
		super(species);
	}
	bark(){
		console.log("woof")
	}
}

class Cat extends Animal {
	constructor(species){
		super(species);
	}
	purr(){
		console.log("purr")
	}
}

const myCat = new Cat("Siamese");
// myCat.makeSound();
// myCat.purr();

const myDog = new Dog("Husky");
// myDog.makeSound();
// myDog.bark();

class Rectangle {
	constructor(width, height){
		this._width = width;
		this._height = height;
	}
	get width(){
		return this._width;
	}
	get height(){
		return this._height;
	}
	getArea(){
		return `${this.width*this.height}`
	}
}

class Square extends Rectangle {
	constructor(side){
		super(side, side);
	}
	getPerimeter(){
		return `${4*this.width}`
	}
	
}
const square = new Square(7);
// console.log(square.width); // Output: 7
// console.log(square.height); // Output: 7
// console.log(square.getArea()); // Output: 49
// console.log(square.getPerimeter()); // Output: 28
// console.log("-----");
// const rectangle = new Rectangle(5, 10);
// console.log(rectangle.width); // Output: 5
// console.log(rectangle.height); // Output: 10
// console.log(rectangle.getArea()); // Output: 50

//calculator

// function Calculator(){
//     this.read=function(){
//         this.num1 = parseInt(prompt("Enter first number: "));
//         this.num2 = parseInt(prompt("Enter second number: "));
//     }
//     this.sum = function(){
//         return this.num1 + this.num2;
//     }
//     this.mul = function(){
//         return this.num1 * this.num2;
//     }
// }

// const result1 = new Calculator();
// result1.read();
// console.log(result1.sum());
// console.log(result1.mul());

class BankAccount {
    constructor(){
        this.balance = 0;
    }
    deposit(amount){
        this.balance += amount;
        console.log(`Deposited amount: ${amount}, Balance: ${this.balance}`);
    }
    withdraw(amount){
        if(amount > this.balance){
            console.log("Insufficient balance");
        }
        else{
            this.balance -= amount;
            console.log(`Withdrew amount: ${amount}, Balance: ${this.balance}`);
        }
    }
}

console.log()
const myAccount = new BankAccount();
myAccount.deposit(500);
myAccount.withdraw(200);
myAccount.withdraw(400);
myAccount.deposit(1000);