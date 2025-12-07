

// console.log(firstValue ??= "Jenna");

const user = {
  name: "Jenna",
  age: 23,
  isLove: true,
  address: {
    street: "John Doe",
    city: "Los Angeles",
  },
};

class Book {
  color = "red";
  country = "Russia";
  constructor(title, page, price) {
    this.title = title;
    this.page = page;
    this.price = price;
  }
  logPage() {
    return this.page;
  }
}

const list = document.querySelector(".list");

const listItems = document.querySelectorAll(".list > li");

console.log(list.contains(listItems[0]));



