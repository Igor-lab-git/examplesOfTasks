import express from 'express';
import deviceController from "../controllers/DeviceController.mjs"
const router = express.Router();
import checkRole from '../middleware/checkRoleMiddleware.mjs';

router.post('/', checkRole("ADMIN"), deviceController.createDevice);
router.get('/', deviceController.getAllDevice);
router.get('/:id', deviceController.getDeviceById);

export default router;