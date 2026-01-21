// --------------------
// Type alias (псевдоним типа)
// --------------------

/*
type alias — это конструкция для создания именованного типа, чтобы переиспользовать или упростить сложные определения.
*/

type User = [name: string, age: number];
let user: User;
user = ['John', 25];

// Пример с массивом
type ColorRGB = [red: number, green: number, blue: number];
const orange: ColorRGB = [255, 165, 0];

function getRandomColor(): ColorRGB {
	const r = Math.floor(Math.random() * 255);
	const g = Math.floor(Math.random() * 255);
	const b = Math.floor(Math.random() * 255);

	return [r, g, b];
}

const someColor = getRandomColor();
console.log(someColor);

// Пример с объектом

type Player = {
	name: string;
	score: number;
}

const playerOne: Player = {
	name: "John",
	score: 75
}

function printPlayerInfo (player: Player ): void {
	console.log(`${player.name} has score ${player.score}.`);
}

printPlayerInfo(playerOne);
printPlayerInfo({
	name: 'Serious Sam',
	score: 99,
});