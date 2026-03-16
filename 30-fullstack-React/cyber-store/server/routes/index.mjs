import express from 'express';
const router = express.Router();

import userRouter from "./userRouter.mjs";
import typeRouter from "./typeRouter.mjs";
import brandRouter from "./brandRouter.mjs";
import deviceRouter from "./deviceRouter.mjs";

router.use('/user', userRouter);
router.use('/type', typeRouter);
router.use('/brand', brandRouter);
router.use('/device', deviceRouter);

export default router;