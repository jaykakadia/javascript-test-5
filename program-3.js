// Write a JavaScript program that creates a class called 'Vehicle' with properties for make, model, and year. Include a method to display vehicle details. Create a subclass called 'Car' that inherits from the 'Vehicle' class and includes an additional property for the number of doors. Override the display method to include the number of doors.
class Vehicle {
  constructor(make, model, year) {
    this.model = model;
    this.make = make;
    this.year = year;
  }
  details() {
    return `The vehicle you have is ${this.model} model which is made by ${this.make} in year ${this.year}`;
  }
}
class Car extends Vehicle {
  constructor(make, model, year, doors) {
    super(make, model, year);
    this.doors = doors;
  }
  details() {
    return `The vehicle you have is ${this.model}, which is made by ${this.make} in year ${this.year} and has ${this.doors} doors.`;

  }
}
let gwagonR = new Car("maruti", "wagonR", 2025, "7");
console.log(gwagonR.details())