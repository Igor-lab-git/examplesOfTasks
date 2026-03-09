import models from '../models/models.js';
const { Type } = models;
import ApiError from "../error/ApiError.js";

class TypeController {
  async create(req, res) {
    //  console.log('Request body:', req.body); // Что приходит?
    // console.log('Request headers:', req.headers); // Какие заголовки?
    const { name } = req.body // из POST запроса извлекаем тело запроса
    const type = await Type.create({name});
    return res.json(type);
    //return res.json({ message: "Created typeRouter :)" });
  };

  async getAll(req, res) {
    const getAllType = await Type.findAll();
    return res.json(getAllType)
    // res.json({ message: "GetAll typeRouter :)" });
  };
};

export default new TypeController();
