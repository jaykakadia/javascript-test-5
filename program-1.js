// Write a JavaScript program to create a class called "Person" with properties for name, age and country. Include a method to display the person's details. Create two instances of the 'Person' class and display their details.

class Person {
    constructor(name, age, country){
        this.name = name;
        this.age = age;
        this.country = country;
    }
    info(){
        return `Hi there my name is ${this.name}. I am ${this.age} years old. I live in ${this.country}`
    }
}
const jay = new Person("jay" , 22, "india");
let jay2 = new Person("jay2" , 22, "india2");


console.log(jay.info());
console.log(jay2.info());