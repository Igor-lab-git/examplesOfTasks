"use strict";
// --------------------
// Readonly
// --------------------
/*
Ключевое слово readonly делает переменную или свойство только для чтения — то есть после присвоения значение нельзя изменить.
*/
// --------------------
// Readonly в интерфейсах
// --------------------
// interface User {
// 	readonly id: number;
// 	name: string;
// }
// const user: User = {
// 	id: 1,
// 	name: 'Alice',
// };
// user.name = "Bob";
// user.id = 500;
// --------------------
// Readonly в типах
// --------------------
// type Config = {
// 	readonly apiKey: string;
// 	readonly port: number;
// };
// const config: Config = {
// 	apiKey: 'ABC123',
// 	port: 8080,
// };
// --------------------
// Readonly в массивах
// --------------------
const roles = ['admin', 'manager'];
const users = [{ id: 1, name: 'Tom' }];
