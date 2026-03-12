// Write a JavaScript program that creates a class called 'Shape' with a method to calculate the area. Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class and override the area calculation method. Create an instance of the 'Circle' class and calculate its area. Similarly, do the same for the 'Triangle' class.
class Shape {
    calcArea() {
        return `Kal ana beta kal`;
    }
}
class Circle extends Shape {
    constructor(rad) {
        super();
        this.rad = rad;
    }
    calcArea() {
        return Math.PI * this.rad ** 2;
    }
}
class Triangle extends Shape {
    constructor(base, height) {
        super();
        this.base = base;
        this.height = height;
    }
    calcArea() {
        return 0.5 * this.base * this.height;
    }
}
const circle = new Circle(5);
console.log("Circle Area:", circle.calcArea());

const triangle = new Triangle(10, 5);
console.log("Triangle Area:", triangle.calcArea());
