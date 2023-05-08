import {Router} from 'express'
import houseController from "../controller/houseController";
import {decentralization} from "../middleware/decentralization";
import {auth} from "../middleware/auth";
import {checkRoleLandlord} from "../middleware/checkRoleLandlord";
import {checkOwnerShip} from "../middleware/checkOwnerShip";

const houseRouter = Router()
houseRouter.get('/search', houseController.searchHouse)

houseRouter.get('/', houseController.showAllHouse);
houseRouter.get('/:id', houseController.showHouseById);

houseRouter.post('/', auth, checkRoleLandlord, houseController.createHouse);
houseRouter.put('/:id', auth, checkRoleLandlord, checkOwnerShip,houseController.editHouseById);
houseRouter.delete('/:id', auth, checkRoleLandlord, checkOwnerShip, houseController.delete);


export default houseRouter