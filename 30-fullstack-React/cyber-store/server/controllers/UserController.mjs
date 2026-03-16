import ApiError from "../error/ApiError.mjs"

class UserController {

    registration = async (req, res) => {
        try {
            // const { email, password } = req.body;
            const body = {email: "Igor@yandex.ru", password: "qwerty"};

            if (body) {
                res.send("Пользователь успешно зарегестрировался", body);
            }
        } catch (error) {
            res.status(500).send({error: error.message});
        }

    }

    login = async (req, res) => {

    }

    check = async (req, res, next) => {
        const {id} = await req.query;
        if (!id) {
            return  next(ApiError.badRequest("ID не задан :("));
        }
        res.json(id);
    }
};

export default new UserController();