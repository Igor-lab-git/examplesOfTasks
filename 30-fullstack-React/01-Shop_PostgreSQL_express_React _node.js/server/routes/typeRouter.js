import { Router } from "express";
const router = new Router();
import typeController from "../controllers/typeController.js";

router.post("/", typeController.create);
router.get("/type", typeController.getAll);


export default router;