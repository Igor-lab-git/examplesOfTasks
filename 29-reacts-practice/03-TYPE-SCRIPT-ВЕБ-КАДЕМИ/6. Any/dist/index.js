"use strict";
// ----------------
// Тип данных: any
// ----------------
/*
any — это специальный тип в TypeScript, который отключает проверку типов.
any — тип, который позволяет присваивать и использовать любые значения без ограничений со стороны TypeScript.
*/
let userAge;
userAge = 50;
userAge = false;
userAge = 'String';
let title;
title = 'Hello';
title = 30;
title = {
    name: 'Bob',
};
// --------------------
// Тип any в массивах
// --------------------
let someArray = ["Hello", true, 50];
someArray.push(null);
// -------------------
// Тип any и функции
// -------------------
function addTogether(a, b) {
    return a + b;
}
const res1 = addTogether('hello ', 'Sam');
const res2 = addTogether(5, 15);
console.log(res1);
console.log(res2);
