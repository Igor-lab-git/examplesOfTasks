"use strict";
// ----------------------------------------
// Типы со строго ограниченными значениями
// ----------------------------------------
let error = 'internal';
function checkAccess(role) {
    if (role === 'admin') {
        console.log('Access granted to all sections.');
    }
    else if (role === 'manager') {
        console.log('Access to management panel.');
    }
    else {
        console.log('Limited access.');
    }
}
checkAccess('admin');
function sendRequest(method, url) {
    console.log(`Sending ${method} request to ${url}`);
}
sendRequest('GET', '/api/users');
// sendRequest('PATCH', '/api/users');
