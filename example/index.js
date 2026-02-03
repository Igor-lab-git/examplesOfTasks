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




class  Header {
  selectors = {
      rootHeaderAttribute: "[data-js-header]",
      overlayMenuAttribute: "[data-js-header-overlay]",
      burgerMenuAttribute: "[data-js-header-burger-button]",
  };
  stateClasses = {
      isActive: "is-active",
      isLock: "is-lock",
  }

  constructor() {
      this.rootElement = document.querySelector(this.selectors.rootHeaderAttribute);
      this.overlayElement = this.rootElement.querySelector(this.selectors.overlayMenuAttribute);
      this.burgerButtonElement = this.rootElement.querySelector(this.selectors.burgerMenuAttribute);
      this.bindEvents = () => {
        this.burgerButtonElement.addEventListener("click", () => {
          this.burgerButtonElement.classList.toggle(this.stateClasses.isActive);
          this.overlayElement.classList.toggle(this.stateClasses.isActive);
          document.documentElement.classList.toggle(this.stateClasses.isLock);
      })
    };
  }


  bindEvents() {
      this.burgerButtonElement.addEventListener("click", this.onBurgerButtonClick)
  }
}

new Header();

const colorPalette = [
  '#FFE6E6', // светло-красный
  '#E6FFE6', // светло-зеленый  
  '#E6E6FF', // светло-синий
  '#FFFFE6', // светло-желтый
  '#FFE6FF', // светло-розовый
  '#E6FFFF', // светло-голубой
  '#F0E6FF', // светло-фиолетовый
  '#FFF0E6', // светло-оранжевый
  '#E6FFF0', // светло-бирюзовый
  '#FFFAE6'  // светло-кремовый
];

const ffff = [Math.floor(Math.random() * colorPalette.length)];
console.log(colorPalette[ffff]);
