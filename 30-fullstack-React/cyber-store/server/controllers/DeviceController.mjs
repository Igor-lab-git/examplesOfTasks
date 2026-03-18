import db from "../services/DatabaseService.mjs"
import ApiError from "../error/ApiError.mjs";
import { v4 as uuidv4 } from 'uuid';
import path, {dirname} from 'path'; 
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

class DeviceController {

    createDevice = async (req, res, next) => {
        try {
            let { name, price, brandId, typeId, info } = req.body;
            const { img } = req.files;
            const { images } = req.files;
            let fileName = uuidv4() + ".jpg";
            img.mv(path.join(__dirname, '..', "static", fileName));  

            if(!name || name.trim().length === 0 || !price) {
                return next(ApiError.badRequest("Не передано имя или цена устройства  :("));
            };

             const device = await db.Device.create({
                name,
                price,
                brandId,
                typeId,
                img: fileName
            });

             if(info) {
                const parsInfo = JSON.parse(info);
                parsInfo.forEach((info) => {
                    db.DeviceInfo.create({
                        title: info.title,
                        description: info.description,
                        deviceId: device.id
                    })
                })
            };


            if(device) {
                return res.status(201).json({ 
                    message: "success",
                    data: device
                 });
            };
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }

    }

    getAllDevice = async (req, res, next) => {
        try {
            let { brandId, typeId, limit, page } = req.query;
            page = page ? Number(page) : 1; // Если указан page то  page иначе 1 страница
            limit = limit ? Number(limit) : 9;
            const offset = page * limit - limit; //считает смещение
            let device;

            if(!brandId && !typeId) {
                device = await db.Device.findAndCountAll({limit, offset});
            };

            if(!brandId && typeId) {
                device = await db.Device.findAndCountAll({where: {typeId}, limit, offset});
            };

            if(brandId && !typeId) {
                device = await db.Device.findAndCountAll({where: {brandId}, limit, offset});
            };

             if(brandId && typeId) {
                device = await db.Device.findAndCountAll({where: {brandId, typeId}, limit, offset});
            };

            return res.status(200).json({ 
                message: "success",
                limit: limit,
                page: page,
                data: device.rows
            });

        } catch(error) {
            return res.status(500).json({ error: error.message });
        }
    };

    getDeviceById = async (req, res, next) => {
        try {
            const {id} = await req.params;
            if(!id) {
                return next(ApiError.badRequest("ID не задан :("));
            };

            const device = await Device.findOne({
                where: {id},
                include: [{model: db.DeviceInfo, as: "info"}],
            });

            if(!device) {
                return res.status(404).json({
                    message: "error",
                    data: `Устройство с id ${id} не найдено`
                });
            };
             if(device) {
                return res.status(200).json({
                    message: "success",
                    data: device
                });
             }
        } catch(error) {
            return res.status(500).json({ error: error.message });
        }
    };
};

export default new DeviceController();