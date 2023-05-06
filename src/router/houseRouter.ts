import {Router} from 'express'
import houseController from "../controller/houseController";
import {auth} from "../middleware/auth";
let houseRouter = Router();

// houseRouter.use(auth)
// houseRouter.use(decentralization)
houseRouter.get('/', houseController.showAllHouse);
houseRouter.get('/search', houseController.searchHouse);
// houseRouter.post('/', houseController.createHouse);
// day la ham by

export default houseRouter