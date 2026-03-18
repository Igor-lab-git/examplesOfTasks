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
            const files = req.files;

            // Обработка главного изображения
            const mainImg = files.img;

            let mainFileImg = uuidv4() + path.extname(mainImg.name); // сохраняем оригинальное расширение
            await mainImg.mv(path.join(__dirname, '..', "static", mainFileImg));

            // Обработка дополнительных изображений
            let imagesArray = [];
            if (files.images) {
                // Если пришло несколько файлов
                const additionalImages = Array.isArray(files.images) ? files.images : [files.images];

                for (const img of additionalImages) {
                    const fileName = uuidv4() + path.extname(img.name);
                    await img.mv(path.join(__dirname, '..', "static", fileName));
                    imagesArray.push(fileName);
                }
            }

            if(!name || name.trim().length === 0 || !price) {
                return next(ApiError.badRequest("Не передано имя или цена устройства  :("));
            };

             const device = await db.Device.create({
                name,
                price,
                brandId,
                typeId,
                 img: mainFileImg,
                 images: imagesArray // сохраняем массив в JSON поле
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

            // ТОЛЬКО ДОБАВЛЯЕМ URL ДЛЯ КАРТИНОК, НЕ МЕНЯЯ ЛОГИКУ
            const baseUrl = `${req.protocol}://${req.get('host')}`;
            const devicesWithUrls = device.rows.map(dev => {
                const devData = dev.toJSON();
                if (devData.img) {
                    devData.img = `${baseUrl}/static/${devData.img}`;
                }
                if (devData.images && devData.images.length > 0) {
                    devData.images = devData.images.map(img =>
                        `${baseUrl}/static/${img}`
                    );
                }
                return devData;
            });

            return res.status(200).json({
                message: "success",
                limit: limit,
                page: page,
                data: devicesWithUrls  // ← здесь данные с URL
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

            // Формируем полные URL для картинок
            const baseUrl = `${req.protocol}://${req.get('host')}`;
            const deviceData = device.toJSON();

            // Главное изображение
            if (deviceData.img) {
                deviceData.img = `${baseUrl}/static/${deviceData.img}`;
            }

            // Дополнительные изображения
            if (deviceData.images && deviceData.images.length > 0) {
                deviceData.images = deviceData.images.map(img =>
                    `${baseUrl}/static/${img}`
                );
            }

            return res.status(200).json({
                message: "success",
                data: deviceData
            });
        } catch(error) {
            return res.status(500).json({ error: error.message });
        }
    };
};

export default new DeviceController();