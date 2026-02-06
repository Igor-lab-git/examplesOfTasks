"use strict";
// --------------------
// Кортежи (tuples)
// --------------------
/*
Кортежи (tuples) в TypeScript — это массивы с фиксированной длиной и строго заданными типами элементов по позициям.

Кортеж — это типизированный массив, где каждое значение имеет свой определённый тип и порядок.
*/
let user;
user = ['John', 25];
let gold = [255, 215, 0];
// Пример с функцией
function getUserData() {
    return ['Mary', 30];
}
const [userName, age] = getUserData();
console.log(userName);
console.log(age);
// ---------------------------------------------------
// Именованные кортежи (named tuples) c TS v.4 и выше
// ---------------------------------------------------
const orange = [255, 165, 0];
console.log(orange);
let userProfile;
userProfile = ["Sam", 25];
