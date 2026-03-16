import express from 'express';
import typeController from '../controllers/TypeController.mjs';
const router = express.Router();

router.post('/', typeController.createType);
router.get('/', typeController.getAllType);
router.delete('/', typeController.deleteTypeById);

export default router;