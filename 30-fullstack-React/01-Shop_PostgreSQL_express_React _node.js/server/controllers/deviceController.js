import models from "../models/models.js";
import * as uuid from 'uuid';
import path from "path";
import { fileURLToPath } from 'url';
const { Device, DeviceInfo } = models;
import ApiError from "../error/ApiError.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class DeviceController {
  async create(req, res, next) {
    try {
      let { name, price, brandId, typeId, description } = req.body;
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

      if(description) {
        const descriptionArray = typeof description === "string" ? description : JSON.stringify(description);
        descriptionArray.forEach((desc) => {
          DeviceInfo.create({
            title: desc.title,
            description: desc.description,
            id: createDevice.id,
          })
        })
      };

      return res.json(createDevice);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    };
  };

  async getAll(req, res) {
    let { brandId, typeId, limit, page } = req.query;
    page = page || 1
    limit = limit || 1;
    let offset = page * limit - limit;

    let devices = [];

    if(!brandId && !typeId ) {
      devices = await Device.findAndCountAll({limit, offset});
    }

    if(brandId && !typeId ) {
      devices = await Device.findAndCountAll({where: { brandId }, limit, offset});
    }

    if(!brandId && typeId ) {
      devices = await Device.findAndCountAll({where: { typeId }, limit, offset});
    }

    if(brandId && typeId ) {
      devices = await Device.findAndCountAll({where: { brandId, typeId }, limit, offset});
    }
    return res.json(devices);
    // res.json({ message: "GetAll DeviceRouter :)" });
  }


  async getOne(req, res, next) {
    try {
      const {id} = req.params;
      const findDevice = await Device.findOne({
        where: {id},
        include: [{ model: DeviceInfo, as: "info" }],
      });

      // if (!findDevice) {
      //   return next(ApiError.notFound(`Устройство с id ${id} не найдено`)); //fix-notFound
      // }
      res.json(findDevice);
      // res.json({ message: "GetOne DeviceRouter :)" });
    } catch (error) {
      console.error('Ошибка в getOne:', error);
      return next(ApiError.badRequest(error.message));
    }

  }
}

export default new DeviceController();

//51-00