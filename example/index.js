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

const getPosts = async () => {
  const result = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await result.json();
  return data;
};

const data = await getPosts();
console.log(Array.isArray(data));



data.forEach((post) => {
  if (post.completed === true) {
    console.log(`${post.id} : ${post.title} : ${post.completed}`);
  }
});
