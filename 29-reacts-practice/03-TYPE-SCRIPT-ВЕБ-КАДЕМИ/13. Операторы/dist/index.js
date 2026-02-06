"use strict";
/* -------------------------
// Операторы в TypeScript
// -------------------------
readonly,
? (опциональное свойство или параметр),
| (union type) объединение типа,
& (intersection type) паересечение типа,
as (type assertion) утверждение типа,
typeof,
keyof,
in,
! (non-null assertion) ненулевое утверждение,
?? (nullish coalescing) нулевое слияние,
??= (nullish assignment) нулевое назначение
*/
// interface User {
// 	readonly id: number;
// 	name: string;
// }
// const user: User = { id: 1, name: 'John' };
// user.id = 2;
/*
? (опциональное свойство или параметр)
Говорит TypeScript, что это свойство или аргумент необязательный.
*/
// interface Product {
// 	title: string;
// 	description?: string; // может быть, а может не быть
// }
// function greet(name?: string) {
// 	console.log(name ?? 'Привет, гость!');
// }
// greet();
/*
| (union type)
Объединение типов — значение может быть одним из нескольких типов.
*/
// let value: string | number;
// value = 'hello';
// value = 42;
/*
& (intersection type)
Пересечение типов — объединяет свойства нескольких типов в один.
*/
// type A = { name: string };
// type B = { age: number };
// type Person = A & B;
// const p: Person = { name: 'Alex', age: 30 };
// interface A {
// 	name: string;
// }
// interface B {
// 	age: number;
// }
// // Person наследует свойства от A и B
// interface Person extends A, B {
// 	role: string;
// }
// const p: Person = { name: 'Alex', age: 30, role: "admin" };
/*
as (type assertion)
Указывает, что мы уверены в типе значения.
*/
// let value = 'hello' as string;
// let input = document.querySelector('input') as HTMLInputElement;
/*
in
Используется в mapped types и для перебора ключей в типах.
*/
// type Keys = 'a' | 'b' | 'c';
// type Flags = { [K in Keys]: boolean }; // { a: boolean; b: boolean; c: boolean }
// const obj: Flags = {
// 	a: true,
// 	b: true,
// 	c: false
// }
// Mapped types — это способ перебрать ключи и на основе них динамически собрать новый тип. Это как цикл по ключам, но в типах.
/*
! (non-null assertion)
Говорит TypeScript: «я уверен, что значение не null и не undefined».
*/
// const el = document.querySelector('div')!;
// const input = document.querySelector('input');
// input!.focus(); // ← утверждаем, что input точно есть (не null)
// const value: string | null = getValue();
// console.log(value!.length); // ← говорим: "value точно не null"
// Ref в React
// const divRef = useRef<HTMLDivElement>(null);
// useEffect(() => {
// 	divRef.current!.style.background = 'red';
// }, []);
/*
⚠️ Важно: когда НЕ стоит использовать !
Когда ты не на 100% уверен, что значение определено.

Лучше использовать if, optional chaining (?), null checks, asserts или type guards.
*/
// console.log(user.profile!.name!.toUpperCase());
// // Альтернатива
// if (user.profile?.name) {
// 	console.log(user.profile.name.toUpperCase());
// }
/*
?? (nullish coalescing) нулевое слияние
Если значение null или undefined — использует запасной вариант.
*/
// function greet(name?: string) {
// 	console.log(name ?? 'Привет, гость!');
// }
// greet(); //'Привет, гость!'
// greet('Bob'); // Bob
/*
??= (nullish assignment)
Присваивает значение, если переменная null или undefined.
*/
let x; // undefined
x !== null && x !== void 0 ? x : (x = 'default');
console.log("x: ", x); // default
let y = "James";
y !== null && y !== void 0 ? y : (y = 'default name');
console.log("y: ", y); // James
