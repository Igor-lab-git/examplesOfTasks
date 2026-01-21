// -----------------
// Массивы. arrays
// -----------------

let userNames: string[] = ["Mark", "John", "Sam"];
let ages: number[] = [20, 30, 25];

console.log(userNames);
// userNames.push('Frank'); // Ok
// userNames.push(50); // Error

// ---------------------------
// Неявное определение типа массивов
// ---------------------------

let fruits = ['apple', 'pear', 'banana', 'mango'];
// fruits.push('peaches');
// fruits.push(5);

let things = [1, true, 'Hello!'];
things.push(false);
things.push(500);
things.push('String');
