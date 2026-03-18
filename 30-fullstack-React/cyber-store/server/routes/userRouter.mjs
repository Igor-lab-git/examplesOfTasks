import express from 'express';
import UserController from '../controllers/UserController.mjs';
const router = express.Router();
import verifyToken from '../middleware/authMiddleware.mjs';

router.post('/registration', UserController.registration); // // Создание нового аккаунта
router.post('/login', UserController.login); //// Вход в систему (получение токена)
router.get('/auth', verifyToken, UserController.check);  //// Проверка прав доступа "Что вам можно?" Authorization

export default router;