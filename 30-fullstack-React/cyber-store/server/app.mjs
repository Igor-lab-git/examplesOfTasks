import createError from 'http-errors';
import express from 'express';
import path, {dirname} from 'path'; // функция для получения папки из пути
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import {fileURLToPath} from 'url'; //путь к URL-адресу файла //функция для преобразования URL в путь
import router from './routes/index.mjs';
import fileUpload from 'express-fileupload';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 🛣️ USE - каждый запрос проходит через это - тоесть Обработка запросов
app.use(cors());  // разрешает ВСЕМ!
app.use(logger('dev'));  // 1. Логируем запрос
app.use(express.json());  // 2. Парсим JSON
app.use(express.urlencoded({extended: false})); //преобразует данные, отправленные через HTML-формы (метод POST), в удобный JavaScript объект.
app.use(cookieParser());
app.use(fileUpload({}));
app.use(express.static(path.join(__dirname, 'public'))); // 3. Ищем статический файл
// app.use(express.static(path.join(__dirname, 'static'))); // 3. Ищем статический файл
app.use('/static', express.static(path.join(__dirname, 'static')));

app.use("/api", router); // 3. Ищем статический файл

app.get('/', (req, res  ) => {
    res.status(200).json({message: "WORKING!! :) 🛣️🛣️🛣️"})
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
    next(createError(404));
}); // для страниц которых нет...ошибка страница не найдена

// error handler
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message,
        ...(req.app.get('env') === 'development' && {
            error: err
        })
    });
});
export default app;
