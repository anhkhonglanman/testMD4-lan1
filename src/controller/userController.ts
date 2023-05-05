import {Request, Response} from "express";
import userService from "../service/userService";

class UserController{

    signup = async (req: Request, res: Response) => {
        let check=await  userService.checkUser(req.body)
        if (!check){
            let newUser = await userService.createUser(req.body);
            res.status(201).json(newUser);
        } else {
            res.status(201).json('tai khoan da ton tai');
        }

    }
    showUser =async (req: Request, res: Response)=>{
        let userId=req.params.id;
        let user = await  userService.findUserById(userId)
        res.status(201).json(user);
        return user
    }

    editUser= async (req: Request, res: Response)=>{
        let user= req.body;
        let id=req.params.id
        let newUser= await  userService.updateUser(id,user);
        res.status(201).json(newUser);
    }
}
export default new UserController();