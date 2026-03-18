import ApiError from "../error/ApiError.mjs";
import bcrypt from "bcrypt";
import db from "../services/DatabaseService.mjs"
import jwt from "jsonwebtoken";
import { configDotenv } from "dotenv";

configDotenv(); // ДЛЯ подгрузки переменных из .env

const generateJWT = (id, email, role) => {
    return jwt.sign({
            id,
            email,
            role
        },
        process.env.SECRET_JWT_KEY,
        {expiresIn: "24h"});
};

class UserController {

    registration = async (req, res, next) => {
        try {
            const { email, password, role } = req.body;

            if(!email || !password) {
                return next(ApiError.badRequest("Не корректный email или пароль :("));
            };

            const candidate = await db.User.findOne({where: {email}}); // находим такой email если уже есть в базе, тогда отказываем

            if(candidate) {
                return next(ApiError.badRequest(
                    `Пользователь с email: ${candidate.email} уже существует. Введите другой email`
                ));
            };

            const hashPassword = await bcrypt.hash(password, 5);  // хеширование пароля
            const user = await db.User.create({email, role, password: hashPassword}); //если всё ок, хэшируем пароль и создаём пользователя
            const basket = await db.Basket.create({userId: user.id}); // и сразу создаём под него карзину если захочет зайти или что то добавить в неё
            const token = generateJWT(user.id, user.email, user.role) // после регистрации создаём токен на 24 часа

            if (user) {
               return res.status(201).json({
                message: "success",
                token: token,
                data: user
               });
            };


        } catch (error) {
           return res.status(500).json({error: error.message});
        }
    };

    login = async (req, res, next) => {
        try {
            const { email, password } = req.body;

            if(!email?.trim() || !password?.trim()) {
                return next(ApiError.badRequest("Не корректный email или пароль :("));
            }; //валидация введённых данных

            const user = await db.User.findOne({where: {email}});

            if (!user) {
                return next(ApiError.badRequest(`Пользователь с таким email: ${email} не существует :(`));
            };

            let comparePassword = await bcrypt.compare(password, user.password); //сравнить пароль
            if (!comparePassword) {
                return next(ApiError.badRequest(`Не правильный пароль :(, введите другой`));
            };

            const token = generateJWT(user.id, user.email, user.role);
            return res.status(200).json({
                message: "success",
                token,
                data: user
            });

        } catch (error) {
            return res.status(500).json({error: error.message});
        };
    };

    check = async (req, res, next) => {
        try {

            // 1. Просто возвращаем данные пользователя из токена и проверяем что токен работоспособен
        // Никакой генерации нового токена!
        return res.status(200).json({
            success: "success",
            user: {
                id: req.user.id,
                email: req.user.email,
                role: req.user.role
            },
            message: "Токен валиден, пользователь аутентифицирован"
        });
        
        // ИЛИ если нужно обновить токен (refresh):
        // Но тогда функция должна называться refreshToken

            // const token = generateJWT(req.user.id, req.user.email, req.user.role);
            // return res.status(200).json({token}); // старая реализация как на видео
        } catch(error) {
           return res.status(500).json({error: error.message});
        }
    }
};

export default new UserController();

//1-00
// GET /auth проверяет: "Действителен ли мой токен и кто я?"
// POST /login создает: "Вот тебе токен, входи"
// POST /register создает: "Новый пользователь в системе"
// verifyToken используется для: "Пропускать только с валидным токеном"
// Авторизация (доп. проверки) решает: "Можно ли этому пользователю делать это"