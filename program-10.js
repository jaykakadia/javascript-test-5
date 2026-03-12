// Write a JavaScript program that creates a class called Product with properties for product ID, name, and price. Include a method to calculate the total price by multiplying the price by the quantity. Create a subclass called PersonalCareProduct that inherits from the Product class and adds an additional property for the warranty period. Override the total price calculation method to include the warranty period. Create an instance of the PersonalCareProduct class and calculate its total price.

class Product {
    #ID = Math.floor(10000 + Math.random() * 90000);
    name;
    price;
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    
    get id() {
        return this.#ID;
    }

    totalPrice(quantity) {
        return this.price * quantity;
    }
}

class PersonalCareProduct extends Product {
    constructor(name, price, warrantyPeriod) {
        super(name, price);
        this.warrantyPeriod = warrantyPeriod;
    }
    totalPrice(quantity) {
        return super.totalPrice(quantity) + this.warrantyPeriod;
    }
}

const myTrimmer = new PersonalCareProduct("Trimmer", 50, 2);
console.log("Product ID:", myTrimmer.id); 
console.log("Total Price for 2:", myTrimmer.totalPrice(2));
