import {Brand, Type} from "../models/models.js";

class BrandController {

    createBrand = async (req, res) => {
        try {
            const { name } = req.body;
            if (name) {
                const brand = await Brand.create({name});
                return res.status(201).send(brand);
            }
        } catch (error) {
            return res.status(500).send("Database error");
        }
    }

    getAllBrand = async (req, res) => {
        try {
            const brandsAll = await Brand.findAll();
            if(brandsAll) {
                return res.status(200).send(brandsAll);
            }
        } catch (error) {
            return res.status(500).send("Database error");
        }
    }

    deleteBrandeById = async (req, res) => {
        try {
            const { id } = req.query;

            if (!id) {
                return res.status(400).json({ message: "ID не указан" });
            }
            // 1. Сначала находим запись
            const type = await Brand.findByPk(id);

            // 2. Проверяем, существует ли она
            if (!type) {
                return res.status(404).json({ message: "Бренд не найден" });
            }
            // 3. Удаляем
            await type.destroy();

            // 4. Отправляем ответ
            return res.status(200).json({
                message: "Бренд успешно удалён",
                id: id
            });

        } catch (error) {
            console.error("Ошибка удаления бренда:", error);
            return res.status(500).json({ error: error.message });
        }
    }
};

export default new BrandController();

//40