// --------------------
// Кортежи (tuples)
// --------------------

/*
Кортежи (tuples) в TypeScript — это массивы с фиксированной длиной и строго заданными типами элементов по позициям.

Кортеж — это типизированный массив, где каждое значение имеет свой определённый тип и порядок.
*/

let user: [string, number];
user = ['John', 25];

let gold: [number, number, number] = [255, 215, 0];

// Пример с функцией
function getUserData(): [string, number] {
  return ['Mary', 30];
}

const [userName, age] = getUserData();
console.log(userName);
console.log(age);

// ---------------------------------------------------
// Именованные кортежи (named tuples) c TS v.4 и выше
// ---------------------------------------------------

const orange: [red: number, green: number, blue: number] = [255, 165, 0];
console.log(orange);

let userProfile: [userName: string, userAge: number];
userProfile = ["Sam", 25];