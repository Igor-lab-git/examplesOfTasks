import db from "../services/DatabaseService.mjs"
import ApiError from "../error/ApiError.mjs";

class BrandController {

    createBrand = async (req, res, next) => {
        try {
            const { name } = req.body;

            if(!name || name.trim().length === 0) {
                return next(ApiError.badRequest("Имя бренда не указано :("))
            }
                const brand = await db.Brand.create({name});

                if(brand) {
                    return res.status(201).send(brand);
                }
        } catch (error) {
            return res.status(500).send("Database error");
        }
    }

    getAllBrand = async (req, res) => {
        try {
            const brandsAll = await Brand.findAll();

            if(brandsAll.length === 0) {
                return res.status(200).send({
                    message: "Список Брендов пуст :(",
                    data: [],
                });
            };
                return res.status(200).send({
                    count: brandsAll.length,
                    data: brandsAll
                });
        } catch (error) {
            return res.status(500).send("Database error");
        }
    }

    deleteBrandeById = async (req, res) => {
        try {
            const { id } = req.query;

            if (!id) {
                return res.status(400).json({ message: "ID не указан" });
            };
            // 1. Сначала находим запись
            const type = await db.Brand.findByPk(id);

            // 2. Проверяем, существует ли она
            if (!type) {
                return res.status(404).json({ message: `Бренд с id: ${id} не найден` });
            };
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
