import models from '../models/models.js';
const { Brand } = models;
import ApiError from "../error/ApiError.js";

class BrandController {
   async create(req, res) {
     //  console.log('Request body:', req.body); // Что приходит?
    // console.log('Request headers:', req.headers); // Какие заголовки?
    const { name } = req.body;
    const createdBrand = await Brand.create({name});
    return res.json(createdBrand);
    // res.json({ message: "Created brandRouter :)" });
  }

  async getAll(req, res) {
    const getAllBrand = await Brand.findAll();
    return res.json(getAllBrand);
    // res.json({ message: "GetAll brandRouter :)" });
  }
};

export default new BrandController();
