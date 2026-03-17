import db from "../services/DatabaseService.mjs"
import ApiError from "../error/ApiError.mjs";

class TypeControllers {

    createType = async (req, res, next) => {
        try {
            const { name } = req.body;
            if(!name || name.trim().length === 0) {
                return next(ApiError.badRequest("Имя типа не указано :("));
            };

            const existingType = await db.Type.findOne({ where: { name } });
            if (existingType) {
                return next(ApiError.badRequest("Тип с таким именем уже существует"));
            };
                const type = await db.Type.create({name});
                return res.status(201).json(type);

        } catch (error) {
            return res.status(500).json("Database error");
        }
    }

    getAllType = async (req, res) => {
        try {
            const typeAll = await Type.findAll();

            if(typeAll.length === 0) {
                return res.status(200).send({
                    message: "Список типов пуст :(",
                    data: [],
                });
            };
            return res.status(200).json({
                count: typeAll.length,
                data: typeAll,
            });

        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }

    deleteTypeById = async (req, res) => {
        try {
            const { id } = req.query;

            if (!id) {
                return res.status(400).json({ message: "ID не указан",});
            }
            // 1. Сначала находим запись
            const type = await Type.findByPk(id);

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