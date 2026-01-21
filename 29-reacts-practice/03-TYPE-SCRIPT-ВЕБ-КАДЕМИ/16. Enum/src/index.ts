// --------------------
// Enums
// --------------------

/*
enum в TypeScript — это специальный тип данных, позволяющий задать набор именованных констант.
enum используется, чтобы перечислить все допустимые значения переменной и сделать код более читаемым, безопасным и удобным для автодополнения.
*/

enum UserRole {
	Admin = 'admin',
	Manager = 'manager',
	Guest = 'guest',
}

function getUserRole() {
	return 'admin';
}

const userRole = getUserRole();

if (userRole === UserRole.Manager) {
	console.log('Give Admin access');
} else if (userRole === UserRole.Manager) {

}
	// -----------------------------
	// Использование enum с fetch
	// -----------------------------

	enum HttpStatusCode {
		OK = 200,
		NotFound = 404,
		InternalServerError = 500,
	}

// Функция
async function fetchUserData(userId: number) {
	const response = await fetch(`/api/users/${userId}`);

	if (response.status === HttpStatusCode.OK) {
		const data = await response.json();
		console.log('User loaded', data);
	} else if (response.status === HttpStatusCode.NotFound) {
		console.error('User not found.');
	} else if (response.status === HttpStatusCode.InternalServerError) {
		console.error('Server error.');
	} else {
		console.warn('Unhandled status code:', response.status);
	}
}