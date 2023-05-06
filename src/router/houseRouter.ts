import {Router} from 'express'
import houseController from "../controller/houseController";
const houseRouter = Router()
import {decentralization} from "../middleware/decentralization";


houseRouter.get('/', houseController.showAllHouse);
houseRouter.post('/', houseController.createHouse);
houseRouter.put('/:id', houseController.editHouseById);
houseRouter.get('/:id', houseController.showHouseById);
houseRouter.delete('/:id', houseController.delete);

export default houseRouter