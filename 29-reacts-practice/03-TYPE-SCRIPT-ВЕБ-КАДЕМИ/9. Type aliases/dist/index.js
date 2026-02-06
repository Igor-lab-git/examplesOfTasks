"use strict";
// --------------------
// Type alias (псевдоним типа)
// --------------------
let user;
user = ['John', 25];
const orange = [255, 165, 0];
function getRandomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return [r, g, b];
}
const someColor = getRandomColor();
console.log(someColor);
const playerOne = {
    name: "John",
    score: 75
};
function printPlayerInfo(player) {
    console.log(`${player.name} has score ${player.score}.`);
}
printPlayerInfo(playerOne);
printPlayerInfo({
    name: 'Serious Sam',
    score: 99,
});
