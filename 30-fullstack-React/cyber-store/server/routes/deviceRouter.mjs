import express from 'express';
import deviceController from "../controllers/DeviceController.mjs"
const router = express.Router();

router.post('/', deviceController.createDevice);
router.get('/', deviceController.getAllDevice);
router.get('/:id', deviceController.getDeviceById);

export default router;