import {Router} from 'express'
import userController from "../controller/userController";
const userRouter = Router()
userRouter.post('/signup', userController.signup);
userRouter.post('/login', userController.login);
userRouter.get('/:id', userController.showUser);
userRouter.put('/:id', userController.editUser);
export default userRouter