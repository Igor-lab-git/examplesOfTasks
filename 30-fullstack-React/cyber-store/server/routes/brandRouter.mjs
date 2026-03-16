import express from 'express';
import brandController from "../controllers/BrandController.mjs"

const router = express.Router();

router.post('/', brandController.createBrand);
router.get('/', brandController.getAllBrand);
router.delete('/', brandController.deleteBrandeById);

export default router;