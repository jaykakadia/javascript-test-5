// Write a JavaScript program that creates a class called 'Shape' with a method to calculate the area. Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class and override the area calculation method. Create an instance of the 'Circle' class and calculate its area. Similarly, do the same for the 'Triangle' class.
class Shape {
    calcArea() {
        throw new Error("calcArea() must be implemented");
    }
}
class Circle extends Shape {
    constructor(rad) {
        if(rad <= 0) {
            throw new Error("Radius must be greater than zero");
        }
        super();
        this.rad = rad;
    }
    calcArea() {
        return Math.PI * this.rad ** 2;
    }
}
class Triangle extends Shape {
    constructor(base, height) {
        if(base <= 0 || height <= 0) {
            throw new Error("Base and height must be greater than zero");
        }
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
