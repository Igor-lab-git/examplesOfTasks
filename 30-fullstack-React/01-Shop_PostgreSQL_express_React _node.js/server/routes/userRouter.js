import { Router } from "express";
const router = new Router();
import userController from "../controllers/userController.js";
import {checkToken} from "../middleware/authMiddleware.js";

router.post("/registration", userController.registration);
router.post("/login", userController.login);
router.get("/auth", checkToken, userController.check); // проверяем авторизованн пользователь или нет

export default router;