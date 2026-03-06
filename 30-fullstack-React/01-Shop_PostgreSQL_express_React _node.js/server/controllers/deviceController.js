import models from "../models/models.js";
import * as uuid from 'uuid';
import path from "path";
import { fileURLToPath } from 'url';
const { Device } = models;
import ApiError from "../error/ApiError.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class DeviceController {
  async create(req, res, next) {
    try {
      const { name, price, brandId, typeId, info } = req.body;
      const { img } = req.files;
      let fileName = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, "..", "static", fileName));

      const createDevice = await Device.create({ 
        name, 
        price, 
        brandId, 
        typeId, 
        img: fileName,
      });
      
      return res.json(createDevice);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async getAll(req, res) {
    let { brandId, typeId, limit, page } = req.query;
    page = page || 1
    limit = limit || 1;
    let offset = page * limit - limit;

    let devices = [];

    if(!brandId && !typeId ) {
      devices = await Device.findAll({limit, offset});
    }

    if(brandId && !typeId ) {
      devices = await Device.findAll({where: {brandId}, limit, offset});
    }

    if(!brandId && typeId ) {
      devices = await Device.findAll({where: {typeId}, limit, offset});
    }

    if(brandId && typeId ) {
      devices = await Device.findAll({where: {brandId, typeId}, limit, offset});
    }
    return res.json(devices);
    // res.json({ message: "GetAll DeviceRouter :)" });
  }


  async getOne(req, res) {
    res.json({ message: "GetOne DeviceRouter :)" });
  }
}

export default new DeviceController();

//51-00