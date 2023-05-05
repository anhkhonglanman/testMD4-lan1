import {Router} from "express";
import userRouter from "./userRouter";
import houseRouter from "./houseRouter";

const router = Router();
router.use('/users', userRouter);
router.use('/houses',houseRouter)
export default router;