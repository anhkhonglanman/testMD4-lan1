import {Router} from 'express'
import houseController from "../controller/houseController";
const houseRouter = Router()
houseRouter.get('/', houseController.showAllHouse);
houseRouter.post('/', houseController.createHouse);

export default houseRouter