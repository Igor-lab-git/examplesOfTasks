import express from 'express';
import brandController from "../controllers/BrandController.mjs";
const router = express.Router();
import checkRole from '../middleware/checkRoleMiddleware.mjs';

router.post('/', checkRole("ADMIN"), brandController.createBrand);
router.get('/', brandController.getAllBrand);
router.delete('/', checkRole("ADMIN"), brandController.deleteBrandeById);

export default router;