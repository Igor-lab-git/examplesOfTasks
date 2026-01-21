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

const roles: readonly string[] = ['admin', 'manager'];

// roles.push('guest');
// roles[0] = 'user';

// --------------------
// Массив объектов readonly
// --------------------

// const users: readonly { id: number; name: string }[] = [{ id: 1, name: 'Tom' }];

// // users.push({ id: 2, name: 'Alice' });
// users[0].name = "John";
// console.log(users);

type DeepReadonlyUser = Readonly<{
	id: number;
	name: string;
}>;

const users: readonly DeepReadonlyUser[] = [{ id: 1, name: 'Tom' }];