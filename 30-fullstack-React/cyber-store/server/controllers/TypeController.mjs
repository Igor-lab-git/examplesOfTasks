import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { fileURLToPath } from 'url';
import db from "../services/DatabaseService.mjs";
import ApiError from "../error/ApiError.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// const iconsDir = path.join(__dirname, '..', 'static', 'icons');

class TypeControllers {

    createType = async (req, res, next) => {
        try {
            const { name } = req.body;
            const files = req.files;
            
            if(!name || name.trim().length === 0) {
                return next(ApiError.badRequest("Имя типа не указано :("));
            }

            const existingType = await db.Type.findOne({ where: { name } });

            if (existingType) {
                return next(ApiError.badRequest("Тип с таким именем уже существует"));
            }

            let iconPath = null;

            if (files && files.icon) {
                const icon = files.icon;
                const fileName = uuidv4() + path.extname(icon.name);
                // ✅ Сохраняем в уже существующую папку icons
                await icon.mv(path.join(__dirname, '..', "static", "icons", fileName));
                iconPath = fileName;
            }
            
            const type = await db.Type.create({
                name,
                icon: iconPath
            });

            const baseUrl = `${req.protocol}://${req.get('host')}`;
            const typeWithUrl = {
                ...type.toJSON(),
                iconUrl: type.icon ? `${baseUrl}${type.icon}` : null
            };
            
            return res.status(201).json(typeWithUrl);

        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: error.message });
        }
    };

    getAllType = async (req, res) => {
        try {
            const typeAll = await db.Type.findAll();
            
            // Добавляем полный URL для иконок
            const baseUrl = `${req.protocol}://${req.get('host')}`;
            const typesWithUrls = typeAll.map(type => {
                const typeData = type.toJSON();
                if (typeData.icon) {
                // ✅ icon уже только имя файла
                typeData.icon = `${baseUrl}/static/icons/${typeData.icon}`;
            }
                return typeData;
            });

            if(typesWithUrls.length === 0) {
                return res.status(200).send({
                    message: "Список типов пуст :(",
                    data: [],
                });
            };
            
            return res.status(200).json({
                count: typesWithUrls.length,
                data: typesWithUrls,
            });

        } catch (error) {
            res.status(500).json({error: error.message});
        }
    };

    deleteTypeById = async (req, res) => {
        try {
            const { id } = req.query;

            if (!id) {
                return res.status(400).json({ message: "ID не указан",});
            }
            // 1. Сначала находим запись
            const type = await db.Type.findByPk(id);

            // 2. Проверяем, существует ли она
            if (!type) {
                return res.status(404).json({ message: "Тип не найден" });
            }
            // 3. Удаляем
            await type.destroy();

            // 4. Отправляем ответ
            return res.status(200).json({
                message: `Тип с id: ${id} успешно удалён `,
                id: id
            });

        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
};

export default new TypeControllers();