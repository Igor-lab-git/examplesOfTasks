// --------------------
// Generics (Дженерики) - общие типы
// --------------------

/*
Generics — это способ описать обобщённые типы, которые можно переиспользовать с разными конкретными типами, не теряя типизацию. Когда мы не знаем, какой будет тип заранее, но хотим, чтобы он был строго проверяемым.
*/

class StorageContainer<T> {
	private contents: T[];

	constructor() {
		this.contents = [];
	}

	addItem(item: T): void {
		this.contents.push(item);
	}

	getItem(index: number): T | undefined {
		return this.contents[index];
	}
}

const userNames = new StorageContainer<string>();
userNames.addItem('Bob');
userNames.addItem('John');
userNames.addItem('Marry');
userNames.addItem('Mark');
const userName = userNames.getItem(1);
console.log(userName);

const numbers = new StorageContainer<number>();
numbers.addItem(5);
numbers.addItem(10);
numbers.addItem(15);
const number = numbers.getItem(1);
console.log(number);