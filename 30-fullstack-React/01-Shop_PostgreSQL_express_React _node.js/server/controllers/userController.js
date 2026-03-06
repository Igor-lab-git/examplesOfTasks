import ApiError from "../error/ApiError.js";

class UserController {
  async registration(req, res) {
    res.json({ message: "Registrated serRouter :)" });
  }

  async login(req, res) {
    res.json({ message: "Login serRouter :)" });
  }

  async check(req, res, next) {
    const {id} = req.query;
    if(!id) {
       return next(ApiError.badRequest("Не задан ID"));
    }
    const {message} = req.query;
    res.json(id);
    res.json(message);
    // res.json({ message: "Check serRouter :)" });
    // http://localhost:8000/api/user/auth?id=7&message=JENNA
  }
}

export default new UserController();
