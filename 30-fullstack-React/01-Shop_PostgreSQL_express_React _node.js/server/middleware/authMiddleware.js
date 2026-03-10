import jwt from "jsonwebtoken";

export function checkToken(req, res, next) {
    if(req.method === "OPTIONS") {
      return next();
    };

    try {
        const token = req.headers.authorization.split(' ')[1]; 
        console.log(token);
        //Токен извлекается из заголовка Authorization: Bearer <token>
        if(!token) {
            return res.status(401).json({message: "Не авторизован"});
        }

        const decoded = jwt.verify(token, process.env.SECRET_KEY); //Проверяется с помощью jwt.verify()
        req.user = decoded; //Данные пользователя добавляются в req.user
         next();

    } catch (e) {
        return res.status(401).json({message: "Не авторизован"});
    };
};