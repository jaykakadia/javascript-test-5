// Write a JavaScript program that creates a class called Product with properties for product ID, name, and price. Include a method to calculate the total price by multiplying the price by the quantity. Create a subclass called PersonalCareProduct that inherits from the Product class and adds an additional property for the warranty period. Override the total price calculation method to include the warranty period. Create an instance of the PersonalCareProduct class and calculate its total price.

class Product {
    static counter = 0;
     #ID;
    name;
    _price;
    constructor(name, price) {
        if (price < 0) {
            throw new Error("Price cannot be negative");
        }
        this.#ID = ++Product.counter;
        this.name = name;
        this.price = price;
    }
    
    get id() {
        return this.#ID;
    }

    totalPrice(quantity) {
        if (quantity < 1) {
            throw new Error("Quantity cannot be less than 1");
        }
        return this.price * quantity;
    }
}

class PersonalCareProduct extends Product {
    constructor(name, price, warrantyPeriod, warrantyCost) {
        super(name, price);
        if (warrantyPeriod < 0 || warrantyCost < 0) {
          throw new Error("Invalid warranty values");
        }
        this.warrantyPeriod = warrantyPeriod;
        this.warrantyCost = warrantyCost;

    }
    totalPrice(quantity) {
        return super.totalPrice(quantity) + (this.warrantyPeriod * this.warrantyCost * quantity);
    }
}

const myTrimmer = new PersonalCareProduct("Trimmer", 50, 2, 10);
const mytoothbrush = new PersonalCareProduct("Toothbrush", 20, 1, 5);
console.log("Product ID:", myTrimmer.id); 
console.log("Product ID:", mytoothbrush.id);
// console.log("Total Price for 2:", myTrimmer.totalPrice(2));
