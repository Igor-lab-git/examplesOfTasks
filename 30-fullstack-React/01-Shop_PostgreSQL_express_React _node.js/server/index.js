import dotenv from 'dotenv';
import express from "express";
import sequelize from './db/db.js';
import models from "./models/models.js";
import cors from "cors";
import router from "./routes/index.js";
import fileUpload from 'express-fileupload';
import path from "path";
import { fileURLToPath } from 'url';
import errorHandler from './middleware/ErrorHandlingMiddleware.js';
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 5000;
const app = express();
app.use(fileUpload({}));
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "static")));

app.use("/api", router);

app.get("/", (req, res) => {
    res.status(200).json({message: "WORKING!!! :)"})
});

//Обработка ошибок идет последней, после неё ничего нет, по этой причине внутри него мы не вызываем функцию next
app.use(errorHandler);

 const start = async() => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
        console.log('✅ Подключение к БД успешно');
        
        // Ваш код...
        
    } catch (error) {
        console.error('❌ Ошибка:', error);
    }
}

start();

//HTTP Запрос → Роутер → Контроллер → Модель (Sequelize) → База данных

// Метафора:
// Модель (Type) - это как склад с товарами (знает только как товары хранить)
// Контроллер - это менеджер, который говорит складу: "дай все товары" или "положи новый товар"
// Роутер - это секретарь, который направляет клиентов к нужному менеджеру
// Склад не должен сам решать, кому отдавать товары - это работа менеджера!
