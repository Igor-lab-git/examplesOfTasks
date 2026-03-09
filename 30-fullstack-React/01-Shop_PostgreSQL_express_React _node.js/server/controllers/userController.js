import ApiError from "../error/ApiError.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import models from "../models/models.js";
import {where} from "sequelize";
const { User, Basket } = models;

const generateJwt = (id, email, role) => {
  return jwt.sign({id, email, role}, process.env.SECRET_KEY, {expiresIn: '24h'});
};

class UserController {
  async registration(req, res, next) {
   try {
     const { email, password, role } = req.body;

     if(!email || !password) {
      return next( ApiError.badRequest("Не корректный email или password"));
     };

     const getPerson = await User.findOne({where: { email }});
     if (getPerson) {
       return next(ApiError.badRequest("Пользователь с таким email существует"));
     }; //если такой getPerson уже есть выкидываем ошибку

     const hashPassword = await bcrypt.hash(password, 5); //если нет такого getPerson хешируем пароль и создаём нового пользователя
     const createUser = await User.create({email, password: hashPassword, role}); // создаём пользователя
     const createBasket = await Basket.create({id: createUser.id}) // и сразуже под него создаём карзину
     const createJwt = generateJwt(createUser.id, createUser.email, createUser.role);
     return res.json({createJwt})
     // res.json({ message: "Registrated serRouter :)" });
   } catch (error) {
     console.error('Ошибка в getOne:', error);
     // return next(ApiError.badRequest(error.message)); //FIX
   }

  };

  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const findUser = await User.findOne({where: {email}});

      if (!findUser) {
       return next(ApiError.internal("Пользователь с таким email не существует"));
      };

      let comparePassword = await bcrypt.compare(password, findUser.password); //проверяем пароль
      if(!comparePassword) {
        return next(ApiError.internal("Не правильный пароль"));
      };  // если не находит ошибка
      const jwt = generateJwt(findUser.id, findUser.email, findUser.role); //создаём токен
      return res.json({jwt}); // и возвращаем токен клиенту для пользования если вошёл под своим login
    } catch (error) {
      console.error('Ошибка в getOne:', error);
    }
    res.json({ message: "Login serRouter :)" });
  };

  async check(req, res, next) {
  // функция check сводится к тому что будут генерировать новый токен и отправлять обратно на клиен при login под своей учёткой, заходя заново в свой аакаунт токен перезаписывается
    try {
      const token = generateJwt(req.user.id, req.user.email, req.user.role); // генерироем токен и возвращаем на клиент
      return res.json({token});
      // res.json({message: "All right"});
    } catch (e) {
      console.log(e);
    }
    // const {id} = req.query;
    // if(!id) {
    //    return next(ApiError.badRequest("Не задан ID"));
    // }
    // const {message} = req.query;
    // res.json(id);
    // res.json(message);
    // res.json({ message: "Check serRouter :)" });
    // http://localhost:8000/api/user/auth?id=7&message=JENNA
  };
}

export default new UserController();
