"use strict";
// --------------------
// ? опциональное свойство или параметр
// --------------------
const user1 = {
    username: 'Alice',
};
const user2 = {
    username: 'Bob',
    email: 'bob@example.com',
};
// 2. Опциональный параметр в функции
function greet(name, title) {
    return title ? `Hello, ${title} ${name}` : `Hello, ${name}`;
}
greet('Alice'); // Hello, Alice
greet('Alice', 'Dr.'); // Hello, Dr. Alice
// 3. Опциональные аргументы с условной проверкой
function logMessage(message, level) {
    console.log('level:', level);
    if (level === 'error') {
        console.error('[ERROR]', message);
    }
    else {
        console.log('[INFO]', message);
    }
}
logMessage('Something happened');
logMessage('Something failed', 'info');
// 4. В классе
class Product {
    constructor(title, description) {
        this.title = title;
        this.description = description;
    }
}
const phone01 = new Product('Yota phone');
console.log(phone01);
// [LOG]: Product: {
//   "title": "Yota phone",
//   "description": undefined
// }
const phone02 = new Product('Galaxy phone', 'some description');
console.log(phone02);
// [LOG]: Product: {
//   "title": "Galaxy phone",
//   "description": "some description"
// }
/*
Важно помнить
? означает type | undefined, но не null.
Если нужно и null, и undefined, нужно указать явно: string | null | undefined.
*/
