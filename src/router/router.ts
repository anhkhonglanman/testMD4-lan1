import {Router} from "express";
import userRouter from "./userRouter";
import houseRouter from "./houseRouter";
import {auth} from "../middleware/auth";

const router = Router();
router.use('/users', userRouter);
router.use('/houses',auth,houseRouter);

export default router;