import {Router} from "express";
import contractController from "../controller/contractController";
import {auth} from "../middleware/auth";


const contractRouter = Router();

contractRouter.get('/:id',auth , contractController.getContract)
contractRouter.get('/house/:id', contractController.getContractByHouseId)

export default contractRouter