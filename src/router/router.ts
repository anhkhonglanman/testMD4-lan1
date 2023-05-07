import {Router} from "express";
import userRouter from "./userRouter";
import addressController from "../controller/addressController";
import houseRouter from "./houseRouter";
import contractRouter from "./contractRouter";

const router = Router();
router.use('/users', userRouter);
router.use('/houses',houseRouter);
router.use('/contract', contractRouter)
router.get('/city', addressController.getCity);
// router.get('/quan', addressController.getQuan);
// router.get('/phuong', addressController.getPhuong);


export default router;