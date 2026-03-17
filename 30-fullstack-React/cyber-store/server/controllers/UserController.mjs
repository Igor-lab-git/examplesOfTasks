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

            const hashPassword = await bcrypt.hash(password, 5);
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
            };

            const user = await db.User.findOne({where: {email}});

            if (!user) {
                return next(ApiError.internal(`Пользователь с таким email: ${email} не существует :(`));
            };

            let comparePassword = await bcrypt.compare(password, user.password);
            if (!comparePassword) {
                return next(ApiError.internal(`Не правильный пароль :(, введите другой`));
            };

            const token = generateJWT(user.id, user.email, user.role);
            return res.status(200).json({
                message: "success",
                token,
                data: user
            });

        } catch (error) {
            return res.status(500).json({error: error.message});
        }
    }

    check = async (req, res, next) => {
        try {
            const {id} = await req.query;
           if (!id) {
            return  next(ApiError.badRequest("ID не задан :("));
            };
            res.json(id);
        } catch(error) {
           return res.status(500).json({error: error.message});
        }
    }
};

export default new UserController();

//1-00