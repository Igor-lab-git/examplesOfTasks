const user = {
  id: 1,
  name: "Jenna",
  age: 25,
  isLove: true,
};

console.log("name" in user);


array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
array2 = [11, 22, 33, 44, 55];
array3 = [
  {model: "toyota", price: 1000},
  {model: "opel", price: 800},
  {model: "reno", price: 600},
  {model: "lada", price: 450}
];

const price = array3.reduce((acc, car) => acc += car.price, 0);

console.log(Array.isArray(array3));

class Comment {
  constructor(text) {
    this.text = text
    this.votesQty = 0
  }

  upvote() {
    this.votesQty += 1;
  }
}

const comment = new Comment("Jenna");
comment.upvote()
console.log(comment);
console.log(comment.__proto__);


