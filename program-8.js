// Write a JavaScript program that creates a class called 'Animal' with properties for species and sound. Include a method to make the animal's sound. Create a subclass called 'Dog' that inherits from the 'Animal' class and adds an additional property for color. Override the make sound method to include the dog's color. Create an instance of the 'Dog' class and make it make its sound.

class Animal {
    constructor(species, sound) {
        this.species = species;
        this.sound = sound;
    }
    makeSound() {
        return `The animal is of ${this.species} and make a sound as ${this.sound}`;
    }
}
class Dog extends Animal {
    constructor( sound, color) {
        super("Dog", sound);
        this.color = color;
    }
    makeSound() {
        return `${super.makeSound()} and has a color of ${this.color}`;
    }
}
const dog = new Dog ("Bark", "Black");
console.log(dog.makeSound());
