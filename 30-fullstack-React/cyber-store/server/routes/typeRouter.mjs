import express from 'express';
import typeController from '../controllers/TypeController.mjs';
const router = express.Router();
import checkRole from '../middleware/checkRoleMiddleware.mjs';

router.post('/', checkRole("ADMIN"), typeController.createType);
router.get('/', typeController.getAllType);
router.delete('/', checkRole("ADMIN"), typeController.deleteTypeById);

export default router;