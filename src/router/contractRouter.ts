import {Router} from "express";
import contractController from "../controller/contractController";
import {auth} from "../middleware/auth";
import {checkContractClien} from "../middleware/checkContractClien";
import {decentralization} from "../middleware/decentralization";


const contractRouter = Router();

contractRouter.get('',contractController.getAll)
contractRouter.get('/:id',auth, contractController.getContractById)
contractRouter.put('/:id',auth,decentralization, contractController.editContractByClient)
contractRouter.post('/contract',auth,decentralization,contractController.createContractByClient)
contractRouter.delete('/:id',auth,decentralization,checkContractClien,contractController.cancelContract)


export default  contractRouter