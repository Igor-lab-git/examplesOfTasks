"use strict";
// ---------------------
// Функции
// ---------------------
function addNumbers(a, b) {
    return a + b;
}
const result = addNumbers(5, 5);
console.log(result);
const substractNumbers = (a, b) => {
    return a - b;
};
// Если функция ничего не возвращает, тогда указываем тип void
// void с англ. - пустота
function sayHello() {
    console.log("Hello!");
}
// TypeScript может сам определять тип возвращаемого значения у функции
function someFunc(name) {
    return `Hello, ${name}`;
}
const greeting = someFunc('Yurij');
console.log(greeting);
