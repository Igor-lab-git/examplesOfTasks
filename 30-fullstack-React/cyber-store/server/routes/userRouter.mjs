import express from 'express';
import UserController from '../controllers/UserController.mjs';
const router = express.Router();

router.post('/registration', UserController.registration);
router.post('/login', UserController.login);
router.get('/auth', UserController.check);

export default router;