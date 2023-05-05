import {Router} from 'express'
import houseController from "../controller/houseController";
const houseRouter = Router()
houseRouter.get('/', houseController.showAllHouse);

export default houseRouter