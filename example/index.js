// import { log } from "node:console";

// const user = {
//   id: 1,
//   name: "Jenna",
//   age: 25,
//   isLove: true,
// };

// console.log("name" in user);


// array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// array2 = [11, 22, 33, 44, 55];
// array3 = [
//   {model: "toyota", price: 1000},
//   {model: "opel", price: 800},
//   {model: "reno", price: 600},
//   {model: "lada", price: 450}
// ];

// const price = array3.reduce((acc, car) => acc += car.price, 0);

// console.log(Array.isArray(array3));

// class Comment {
//   constructor(text) {
//     this.text = text
//     this.votesQty = 0
//   }

//   upvote() {
//     this.votesQty += 1;
//   }
// }

// const comment = new Comment("Jenna");
// comment.upvote()
// console.log(comment);
// console.log(comment.__proto__);




// class  Header {
//   selectors = {
//       rootHeaderAttribute: "[data-js-header]",
//       overlayMenuAttribute: "[data-js-header-overlay]",
//       burgerMenuAttribute: "[data-js-header-burger-button]",
//   };
//   stateClasses = {
//       isActive: "is-active",
//       isLock: "is-lock",
//   }

//   constructor() {
//       this.rootElement = document.querySelector(this.selectors.rootHeaderAttribute);
//       this.overlayElement = this.rootElement.querySelector(this.selectors.overlayMenuAttribute);
//       this.burgerButtonElement = this.rootElement.querySelector(this.selectors.burgerMenuAttribute);
//       this.bindEvents = () => {
//         this.burgerButtonElement.addEventListener("click", () => {
//           this.burgerButtonElement.classList.toggle(this.stateClasses.isActive);
//           this.overlayElement.classList.toggle(this.stateClasses.isActive);
//           document.documentElement.classList.toggle(this.stateClasses.isLock);
//       })
//     };
//   }


//   bindEvents() {
//       this.burgerButtonElement.addEventListener("click", this.onBurgerButtonClick)
//   }
// }

// new Header();

// const colorPalette = [
//   '#FFE6E6', // светло-красный
//   '#E6FFE6', // светло-зеленый  
//   '#E6E6FF', // светло-синий
//   '#FFFFE6', // светло-желтый
//   '#FFE6FF', // светло-розовый
//   '#E6FFFF', // светло-голубой
//   '#F0E6FF', // светло-фиолетовый
//   '#FFF0E6', // светло-оранжевый
//   '#E6FFF0', // светло-бирюзовый
//   '#FFFAE6'  // светло-кремовый
// ];

// const ffff = [Math.floor(Math.random() * colorPalette.length)];
// console.log(colorPalette[ffff]);

// const exceptions = ["", "новости", "для взрослых", "церемония", "концерт"]
// const respons = ["", "новости", "для взрослых", "церемония", "концерт", "Швейцария", "военный", "комедия"]
// const cvv = respons.filter(res => !exceptions.includes(res))
// console.log(cvv);


// const er = {
//   name: "Jenna",
//   adddress: {
//     country: "USA",
//     city: "Los Angeles"
//   }
// }

// const copy = JSON.parse(JSON.stringify(er));
// const copy2 = structuredClone(er);
// console.log(copy === er);
// console.log(copy2 === er);



// const cdcd = (str) => {
//   let res = "";

//   for(let i = str.length -1; i >= 0; i--) {
//    res += str[i]
//   }
//   return res
// };

// console.log(cdcd("JENNA"));

// let company = { // тот же самый объект, сжатый для краткости
//   sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
//   development: {
//     sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
//     internals: [{name: 'Jack', salary: 1300}]
//   }
// };

// function sumSalaries(department) {
//   if(Array.isArray(department)) {
//     return department.reduce((acc, item) => acc + item.salary ,0);
//   } else {
//     let sum = 0;
//     for(let subdep  of Object.values(department)) {
//       sum += sumSalaries(subdep);
//     }
//     return sum;
//   }
// };

// console.log(sumSalaries(company));


// const dead = ['Джон Сноу', 'Джофри', 'Нед Старк', 'Король ночи']
// const deadClone = ['Джон Сноу', 'Джофри', 'Нед Старк', 'Король ночи', 'Джон Сноу', 'Джофри', 'Нед Старк', 'Король ночи']

// const filtered = deadClone.filter((item) => dead.includes(item));

// console.log(filtered);

// func DEBOUNS
const debounce = (func, delay) => {
    let timer;

    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func(...args), delay) 
    }
};

const onResize = () => {
    console.log("JENNA");
};

const onDebounce = debounce(onResize, 600);

onDebounce();
onDebounce();
onDebounce();
onDebounce();
onDebounce();

// BALANCE
const createBancCounter = (initialBalance) => {
    let = balance = initialBalance;
    return {
        addBalance(amount) {
            balance += amount;
            console.log("addBalance: ", balance);
        },
        withdraw(amount) {
            if(balance < amount) {
                console.log("Недостаточно средств на балансе", balance);
            } else {
                balance -= amount;
                console.log("Осталось на балансе", balance);
            }
        },
        getBalance() {
            console.log("Текущий баланс", balance);
        }
    }
};
const bank = createBancCounter(100);
bank.addBalance(500);
bank.addBalance(500);
bank.addBalance(500);
bank.withdraw(800);
bank.getBalance();

