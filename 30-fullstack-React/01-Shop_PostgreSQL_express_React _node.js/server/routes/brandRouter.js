import { Router } from "express";
const router = new Router();
import brandController from "../controllers/brandController.js";

router.post("/", brandController.create);
router.get("/brand", brandController.getAll);

export default router;