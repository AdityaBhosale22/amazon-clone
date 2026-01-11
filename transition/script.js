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

class StudentDetails {
    constructor(name, rollNo, age, gender){
        this.name = name;
        this.rollNo = rollNo;
        this.age = age;
        this.gender = gender;
    }
    aboutStudent(){
        return `Name: ${this.name}, Roll No: ${this.rollNo}, Age: ${this.age}, Gender: ${this.gender}`;
    }

    changeName(newName){
        this.name = newName;
        console.log("Name changed to: " + this.name);
    }
}

let myName= "Eleven";
let myRollNo= "11";
let myAge = "18";
let myGender = "female"

let student1 = new StudentDetails("oliver", '01', "17", "male");
// let student2 = new StudentDetails(myName, myRollNo, myAge, myGender);
// console.log(student2);

// console.log(student1.aboutStudent());
// student1.changeName("Lucas");
// console.log(student1);

class Person {
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    speak(){
        return "Speaks Native Language";
    }

    eat(food){
        return "Eats food " + food;
    }
}

class Teacher extends Person{
    constructor(name, age, gender, company){
        super(name, age, gender);
        this.company = company;
    }
    speak(){
        return "Speaks English and Hindi";
    }
    // eat(food){
    //     return "Eats only"+" "+ food;
    // }

    speakAtHome(){
        return super.speak();
    }
}
let person1 = new Person("Erica", 15, "female");
let teacher1 = new Teacher("Mr. Smith", 40, "male", "Hawkins High School");
// console.log(teacher1);
// console.log(teacher1.speak());
// console.log(person1);
// console.log(person1.speak());

console.log(teacher1.eat("pizza and coke"))

console.log(teacher1.speakAtHome())