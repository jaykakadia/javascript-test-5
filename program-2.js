//  Write a JavaScript program to create a class called 'Rectangle' with properties for width and height. Include two methods to calculate rectangle area and perimeter. Create an instance of the 'Rectangle' class and calculate its area and perimeter.

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  perimeter() {
    return 2 * (this.width + this.height);
  }
  area() {
    return this.width * this.height;
  }
}
const rect = new Rectangle(2, 4)
console.log(rect.area());
console.log(rect.perimeter());
