import {Type} from "../models/models.js";

class TypeControllers {

    createType = async (req, res) => {
        try {
            const { name } = req.body;
            if (name) {
                const type = await Type.create({name});
                return res.status(201).send(type);
            }
        } catch (error) {
            return res.status(500).send("Database error");
        }
    }

    getAllType = async (req, res) => {
        try {
            const typeAll = await Type.findAll();
            if (typeAll) {
                return res.status(200).send(typeAll);
            }
        } catch (error) {
            res.status(500).send({error: error.message});
        }
    }

    deleteTypeById = async (req, res) => {
        try {
            const { id } = req.query;

            if (!id) {
                return res.status(400).json({ message: "ID не указан" });
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
                message: "Тип успешно удалён",
                id: id
            });

        } catch (error) {
            console.error("Ошибка удаления типа:", error);
            return res.status(500).json({ error: error.message });
        }
    }
};

export default new TypeControllers();