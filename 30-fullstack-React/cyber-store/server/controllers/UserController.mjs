import ApiError from "../error/ApiError.mjs";
import bcrypt from "bcrypt";
import { User, Basket } from "../models/models.js";
import jwt from "jsonwebtoken";
import { configDotenv } from "dotenv";

configDotenv(); // ДЛЯ подгрузки переменных из .env

class UserController {

    registration = async (req, res, next) => {
        try {
            const { email, password, role } = req.body;

            if(!email || !password) {
                return next(ApiError.badRequest("Не корректный email или пароль :("));
            };

            const candidat = await User.findOne({where: {email}}); // находим такой email если уже есть в базе, тогда отказываем

            if(candidat) {
                return next(ApiError.badRequest(
                    `Пользователь с email: ${candidat.email} уже существует. Введите другой email`
                ));
            }

            const hashPassword = await bcrypt.hash(password, 5);
            const user = await User.create({email, role, password: hashPassword}); //если всё ок, хэшируем пароль и создаём пользователь
            const basket = await Basket.create({userId: user.id}); // и сразу создаём под него карзину если захочет зайти или что то добавить в неё
            const token = jwt.sign({
                id: user.id, 
                email, 
                role}, 
                process.env.SECRET_JWT_KEY,
            {expiresIn: "24h"}); // после регистрации создаём токен на 24 часа

            if (user) {
               return res.status(201).json({
                message: "success",
                token: token,
                data: user
               });
            }
        } catch (error) {
           return res.status(500).json({error: error.message});
        }
    };

    login = async (req, res) => {

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