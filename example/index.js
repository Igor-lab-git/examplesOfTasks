// let firstValue = null;
// const secondValue = true;

// console.log(firstValue ??= "Jenna");


const user = {
    name: "Jenna",
    age: 23,
    isLove: true,
    address: {
        street: "John Doe",
        city: "Los Angeles",
    }
}

console.log("name" in user);


const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const names = ["Jenna", "Alex", "John", "Peter", "Igor"];
const users = [
    { name: "Jenna", age: 23 }, { name: "Alex", age: 26 }, { name: "John", age: 35 }, { name: "Peter", age: 31 }
]


class Book {
    color = "red";
    country = "Russia"
    constructor(name, page) {
        this.name = name;
        this.page = page;
    }

    logPage() {
        return this.page;
    }

  
}

const book1 = new Book("Тургенев", 300);


































