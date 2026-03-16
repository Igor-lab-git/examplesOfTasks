import createError from 'http-errors';
import express from 'express';
import path, {dirname} from 'path'; // функция для получения папки из пути
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import {fileURLToPath} from 'url'; //путь к URL-адресу файла //функция для преобразования URL в путь

import testRouter from './routes/test.mjs';
import usersRouter from './routes/users.mjs';
import loginRouter from './routes/login.mjs';

import useController from "./controllers/UserControllers.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 🛣️ USE - каждый запрос проходит через это - тоесть Обработка запросов
app.use(logger('dev'));  // 1. Логируем запрос
app.use(express.json());  // 2. Парсим JSON
app.use(express.urlencoded({extended: false})); //преобразует данные, отправленные через HTML-формы (метод POST), в удобный JavaScript объект.
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); // 3. Ищем статический файл

app.use('/test', testRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);

app.get("/user", useController.getData);
app.get("/user/:id", useController.getData);
app.post("/user/", useController.create);
app.patch("/user/:id", useController.patch);
app.put("/user/:id", useController.update);
app.delete("/user/:id", useController.delete);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    next(createError(404));
}); // для страниц которых нет...ошибка страница не найдена

// error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

export default app;


//24-00