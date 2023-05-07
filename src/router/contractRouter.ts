import {Router} from "express";
import contractController from "../controller/contractController";
import {auth} from "../middleware/auth";


const contractRouter = Router();
contractRouter.get('',contractController.getAll)
contractRouter.get('/:id',auth, contractController.getContract)
contractRouter.put('/:id',auth, contractController.editContractByClient)

export default  contractRouter