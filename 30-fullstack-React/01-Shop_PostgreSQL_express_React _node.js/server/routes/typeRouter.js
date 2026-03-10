import { Router } from "express";
const router = new Router();
import typeController from "../controllers/typeController.js";
import { checkRole } from "../middleware/CheckRoleMiddleware.js";

router.post("/", checkRole("ADMIN"), typeController.create);
router.get("/type", typeController.getAll);

export default router;