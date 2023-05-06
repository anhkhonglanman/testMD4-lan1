import {Router} from "express";
import userRouter from "./userRouter";
import houseRouter from "./houseRouter";
import addressController from "../controller/addressController";

const router = Router();
router.use('/users', userRouter);
router.use('/houses',houseRouter)

router.get('/city', addressController.getCity);
export default router;