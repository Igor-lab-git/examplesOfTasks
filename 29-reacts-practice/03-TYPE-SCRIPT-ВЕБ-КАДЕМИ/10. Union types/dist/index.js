"use strict";
// --------------------
// Union types
// --------------------
/*
Union types (объединённые типы) в TypeScript — это способ указать, что значение может иметь один из нескольких типов.

union — это тип, который допускает несколько вариантов: A | B | C.
Например: string | number | boolean
*/
let someId;
someId = 100;
someId = "sadfi1231jlkdsaj213";
let email = null;
email = "john@mail.com";
email = null;
let userId;
userId = 700;
userId = "324uhwfdjskhi23";
// ---------------
// Нюанс в использовании union types
// ---------------
function changeTypeId(id) {
    // parseInt(id);
    // parseInt('5');
    console.log(id);
    return id;
}
changeTypeId('5');
changeTypeId(5);
