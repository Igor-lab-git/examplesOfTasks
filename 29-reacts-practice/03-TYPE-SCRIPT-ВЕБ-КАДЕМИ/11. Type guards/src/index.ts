// --------------------
// Type guards (проверка типов)
// --------------------

type Id = number | string;

let userId: Id;
userId = '700';

function changeTypeId(id: Id): Id {

	if (typeof id === "string") {
		return parseInt(id);
	} else {
		return id.toString()
	}

}
const id1 = changeTypeId('40');
const id2 = changeTypeId(500);

console.log(id1);
console.log(id2);

// ------------------
// Tagged interfaces (интерфейсы с меткой (с тегом))
// ------------------

interface User {
	type: 'user';
	username: string;
	email: string;
	id: Id;
}

interface Person {
	type: 'person';
	firstname: string;
	age: number;
	id: Id;
}

function logDetails (userInfo: User | Person ) {

	if (userInfo.type === 'user') {
		console.log(`
			This user has id ${userInfo.id}
			and name ${userInfo.username} and email ${userInfo.email}
			`);
	}

	if (userInfo.type === "person") {
		console.log(`
			This person has id ${userInfo.id}
			and name ${userInfo.firstname} and age ${userInfo.age}
			`);
	}
}

logDetails({
	type: 'user',
	username: 'John',
	email: 'some@mail.com',
	id: 20,
});

logDetails({
	type: 'person',
	firstname: "Mary",
	age: 25,
	id: 35,
});