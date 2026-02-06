"use strict";
// --------------------
// Generics (Дженерики) - общие типы
// --------------------
/*
Generics — это способ описать обобщённые типы, которые можно переиспользовать с разными конкретными типами, не теряя типизацию. Когда мы не знаем, какой будет тип заранее, но хотим, чтобы он был строго проверяемым.
*/
class StorageContainer {
    constructor() {
        this.contents = [];
    }
    addItem(item) {
        this.contents.push(item);
    }
    getItem(index) {
        return this.contents[index];
    }
}
const userNames = new StorageContainer();
userNames.addItem('Bob');
userNames.addItem('John');
userNames.addItem('Marry');
userNames.addItem('Mark');
const userName = userNames.getItem(1);
console.log(userName);
const numbers = new StorageContainer();
numbers.addItem(5);
numbers.addItem(10);
numbers.addItem(15);
const number = numbers.getItem(1);
console.log(number);
