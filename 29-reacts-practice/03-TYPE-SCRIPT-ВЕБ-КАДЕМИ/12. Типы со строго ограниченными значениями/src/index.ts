// ----------------------------------------
// Типы со строго ограниченными значениями
// ----------------------------------------

type LoginError = 'unauthorized' | 'nouser' | 'wrongcredentials' | 'internal';

let error: LoginError = 'internal';
// let error2: LoginError = 'some other value';

// Пример 1: Тип для ролей пользователя

type UserRole = 'admin' | 'manager' | 'guest';

function checkAccess(role: UserRole) {
	if (role === 'admin') {
		console.log('Access granted to all sections.');
	} else if (role === 'manager') {
		console.log('Access to management panel.');
	} else {
		console.log('Limited access.');
	}
}

checkAccess('admin');
// checkAccess('user');

// Пример 2: Тип для HTTP методов

type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

function sendRequest(method: HTTPMethod, url: string) {
	console.log(`Sending ${method} request to ${url}`);
}

sendRequest('GET', '/api/users');
// sendRequest('PATCH', '/api/users');