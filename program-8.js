// Write a JavaScript program that creates a class called 'Animal' with properties for species and sound. Include a method to make the animal's sound. Create a subclass called 'Dog' that inherits from the 'Animal' class and adds an additional property for color. Override the make sound method to include the dog's color. Create an instance of the 'Dog' class and make it make its sound.

class Animal {
    constructor(species, sound) {
        this.species = species;
        this.sound = sound;
    }
    animalSound() {
        return `The animal is of ${this.species} and make a sound as ${this.sound}`;
    }
}
class Dog extends Animal {
    constructor(species, sound, color) {
        super(species, sound);
        this.color = color;
    }
    animalSound() {
        return `The animal is of ${this.species} and make a sound as ${this.sound} and has a color of ${this.color}`;
    }
}
const dog = new Dog("Dog", "Bark", "Black");
console.log(dog.animalSound());
