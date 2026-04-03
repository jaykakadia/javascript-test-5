// Write a JavaScript program that creates a class `Book` with properties for title, author, and publication year. Include a method to display book details. Create a subclass called 'Ebook' that inherits from the 'Book' class and includes an additional property for book price. Override the display method to include the book price. Create an instance of the 'Ebook' class and display its details.

class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    bookDetail() {
        return `The book is ${this.title} written by ${this.author} in ${this.year}`;
    }
}
class Ebook extends Book {
    constructor(title, author, year, price) {
        super(title, author, year);
        if(price < 0) {
            throw new Error("Price cannot be negative");
        }
        this.price = price;
    }
    bookDetail(){
        return `${super.bookDetail()} with the price of $${this.price}`;
    }
}

// Example usage:
const myEbook = new Ebook("JavaScript The Good Parts", "Douglas Crockford", 2008, 29.99);
console.log(myEbook.bookDetail());