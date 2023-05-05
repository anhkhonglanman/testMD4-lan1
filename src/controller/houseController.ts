import {Request, Response} from "express";6
import houseService from "../service/houseService";
import jwt from "jsonwebtoken";

class HouseController{
    showAllHouse =async (req: Request, res: Response)=>{
        let house = await  houseService.findAllHouse()
        console.log(house)
        res.status(201).json(house);

    }


    createHouse = async (req: Request, res: Response) => {

            let newHouse = await houseService.createHouse(req.body);
            console.log(newHouse)
            res.status(201).json(newHouse);
        }


    // showUser =async (req: Request, res: Response)=>{
    //     let userId=req.params.id;
    //     let user = await  userService.findUserById(userId)
    //     res.status(201).json(user);
    //     return user
    // }
    //
    // editUser= async (req: Request, res: Response)=>{
    //     let user= req.body;
    //     let id=req.params.id
    //     let newUser= await  userService.updateUser(id,user);
    //     res.status(201).json(newUser);
    // }
}
export default new HouseController();