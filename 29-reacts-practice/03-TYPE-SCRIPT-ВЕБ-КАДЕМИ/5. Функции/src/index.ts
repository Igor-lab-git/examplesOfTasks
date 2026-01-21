// ---------------------
// Функции
// ---------------------

function addNumbers(a: number, b: number): number {
	return a + b;
}

const result = addNumbers(5, 5);
console.log(result);

const substractNumbers = (a: number, b:number): number => {
	return a - b;
}

// Если функция ничего не возвращает, тогда указываем тип void
// void с англ. - пустота

function sayHello(): void {
	console.log("Hello!");
}

// TypeScript может сам определять тип возвращаемого значения у функции

function someFunc(name: string) {
	return `Hello, ${name}`;
}

const greeting = someFunc('Yurij');
console.log(greeting);