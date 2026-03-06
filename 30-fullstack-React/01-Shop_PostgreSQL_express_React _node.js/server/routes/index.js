import { Router } from "express";
const router = new Router();
import deviceRouter from "./deviceRouter.js";
import userRouter from "./userRouter.js";
import brandRouter from "./brandRouter.js";
import typeRouter from "./typeRouter.js";

router.use("/user", userRouter);
router.use("/type", typeRouter);
router.use("/brand", brandRouter);
router.use("/device", deviceRouter);

export default router;


// // Это обрабатывает HTTP запросы
// router.get("/type", typeController.getAll); // "Кто-то пришел по URL /type"
// async getAll(req, res) { // req = HTTP запрос, res = HTTP ответ
//     // Здесь мы в мире HTTP
//     const types = await Type.findAll(); //С этим методом findAll Идем в базу за данными
//     return res.json(types); // Отправляем HTTP ответ
// }