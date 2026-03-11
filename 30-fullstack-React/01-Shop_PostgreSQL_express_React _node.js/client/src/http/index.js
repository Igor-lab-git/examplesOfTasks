import axios from "axios";




const $host = axios.create({
    baseURL: import.meta.env.VITE_API_URL
}); //Создание базового подключения
// Создаем "трубу" для связи с сервером.
// baseURL - адрес сервера (например http://localhost:5000/api)

const $authHost = axios.create({
    baseURL: import.meta.env.VITE_API_URL
}); //То же самое для авторизации
//Это такая же "труба", но с токеном.

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
    return config;
};  //Перехватчик (Interceptor)
//Это функция, которая перед каждым запросом добавляет токен из localStorage.

$authHost.interceptors.request.use(authInterceptor);
//Подключаем перехватчик
//Говорим: "Каждый раз, когда шлешь запрос через $authHost, сначала добавь токен".

export {
    $host,
    $authHost
}


// Что куда идет:
// $host - для публичных запросов:
// Получить список товаров
// Зарегистрироваться
// Войти
// Посмотреть товар
// $authHost - для защищенных запросов:
// Добавить товар (админ)
// Изменить корзину
// Сделать заказ
// Личный кабинет