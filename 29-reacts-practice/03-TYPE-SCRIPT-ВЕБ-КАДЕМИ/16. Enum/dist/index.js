"use strict";
// --------------------
// Enums
// --------------------
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/*
enum в TypeScript — это специальный тип данных, позволяющий задать набор именованных констант.
enum используется, чтобы перечислить все допустимые значения переменной и сделать код более читаемым, безопасным и удобным для автодополнения.
*/
var UserRole;
(function (UserRole) {
    UserRole["Admin"] = "admin";
    UserRole["Manager"] = "manager";
    UserRole["Guest"] = "guest";
})(UserRole || (UserRole = {}));
function getUserRole() {
    return 'admin';
}
const userRole = getUserRole();
if (userRole === UserRole.Manager) {
    console.log('Give Admin access');
}
else if (userRole === UserRole.Manager) {
}
// -----------------------------
// Использование enum с fetch
// -----------------------------
var HttpStatusCode;
(function (HttpStatusCode) {
    HttpStatusCode[HttpStatusCode["OK"] = 200] = "OK";
    HttpStatusCode[HttpStatusCode["NotFound"] = 404] = "NotFound";
    HttpStatusCode[HttpStatusCode["InternalServerError"] = 500] = "InternalServerError";
})(HttpStatusCode || (HttpStatusCode = {}));
// Функция
function fetchUserData(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`/api/users/${userId}`);
        if (response.status === HttpStatusCode.OK) {
            const data = yield response.json();
            console.log('User loaded', data);
        }
        else if (response.status === HttpStatusCode.NotFound) {
            console.error('User not found.');
        }
        else if (response.status === HttpStatusCode.InternalServerError) {
            console.error('Server error.');
        }
        else {
            console.warn('Unhandled status code:', response.status);
        }
    });
}
