// Creating a class Person with a defined constructor that initializes name, age, phone and email properties.
class Person{
    constructor (name, age, phone, email){
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.email = email;
    }

    // adding a method to increase the age of the person
    increaseAge(){
        this.age++;
    }
}

// creating four instances(objects) based on the constructor in the Person class
const person1 = new Person("Andreas", 39, +358123123123, "AC4938@student.jamk.fi");
const person2 = new Person("Rob", 25, +358321321123, "XT123455@student.jamk.fi");
const person3 = new Person("Jon", 55, +358432353233, "UX432155@student.jamk.fi");
const person4 = new Person("Son", 20, +358234432543, "VT123455@student.jamk.fi");

// Printing each person to the console, then using the increase age method to increase age by 1, before printing the instance again to the console
console.log(person1);
person1.increaseAge();
console.log(person1);

console.log(person2);
person2.increaseAge();
console.log(person2);

console.log(person3);
person3.increaseAge();
console.log(person3);
