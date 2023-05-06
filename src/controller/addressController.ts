import {Request, Response} from "express";
import userService from "../service/userService";
import addressService from "../service/addressService";

class AddressController {

    getCity = async (req: Request, res: Response) => {
        let city = await addressService.getCity();
        res.status(201).json(city);
    }
    showUser = async (req: Request, res: Response) => {
        let userId = req.params.id;
        let user = await userService.findUserById(userId)
        res.status(201).json(user);
        return user
    }

    editUser = async (req: Request, res: Response) => {
        let user = req.body;
        let id = req.params.id
        let newUser = await userService.updateUser(id, user);
        res.status(201).json(newUser);
    }


    login = async (req: Request, res: Response) => {
        let userData = req.body;
        let user = await userService.checkUser(userData);
        console.log(user)
        res.status(200).json(user);


    }

}

export default new AddressController();