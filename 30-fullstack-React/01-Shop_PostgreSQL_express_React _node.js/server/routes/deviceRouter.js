import { Router } from "express";
const router = new Router();
import deviceController from "../controllers/deviceController.js";

router.post("/", deviceController.create);     
router.get("/device", deviceController.getAll);     
router.get("/:id", deviceController.getOne);

export default router;