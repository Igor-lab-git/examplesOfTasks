import jwt from "jsonwebtoken";
import { configDotenv } from "dotenv";

configDotenv(); // ДЛЯ подгрузки переменных из .env

const checkRole = (role) => {

    return (req, res, next) => {
    if(req.method === "OPTIONS") {
       return next();
    };

    try {
        const token = req.headers.authorization.split(" ")[1] // вытаскиваем закодированный токен потом чтобы Bearer token(sasasdsdas)

        if(!token) {
            return res.status(401).json({message: "Не авторизован :("})
        };

        const decoded = jwt.verify(token, process.env.SECRET_JWT_KEY); //содержит расшифрованные данные из токена

        if(decoded.role !== role) {
            return res.status(403).json({message: "У вас нет доступа администратора :("})
        };

        req.user = decoded; //сохраняете эти данные в объекте запроса (req) // Сохраняем данные пользователя в запросе для следующих middleware
        return next(); //вызывает следующий middleware или обработчик маршрута

    } catch(error) {
        return res.status(401).json({message: "Пользователь не авторизован :(, зарегестрируйтесь или попробуйте другие данные"})
    }
};
}

export default checkRole;

// 🔵 checkRole - АВТОРИЗАЦИЯ (проверка ЧТО МОЖНО)
// Проверяет токен И роль
    // Пропускает только если роль совпадает