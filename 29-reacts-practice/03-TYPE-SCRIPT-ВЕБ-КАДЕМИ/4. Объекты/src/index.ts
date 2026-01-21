// ----------
// Объекты
// ----------

let user: {firstName: string; age: number; id: number} = {
	firstName: "Bob",
	age: 20,
	id: 846544
}

user.firstName = 'Sam';
// user.isAdmin = true;

// ---------------------------------------
// Автоматическое определение типа объекта
// ---------------------------------------

let person = {
	name: 'John',
	age: 35,
};

console.log(person);