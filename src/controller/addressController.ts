import {Request, Response} from "express";
import userService from "../service/userService";
import addressService from "../service/addressService";

class AddressController {

    getCity = async (req: Request, res: Response) => {
        let city = await addressService.getCity();
        res.status(200).json({
            success: true,
            data: city}
        )
    }
    showUser = async (req: Request, res: Response) => {
        let userId = req.params.id;
        let user = await userService.findUserById(userId)
        res.status(200).json({
            success: true,
            data: user}
        )

    }

    editUser = async (req: Request, res: Response) => {
        let user = req.body;
        let id = req.params.id
        let newUser = await userService.updateUser(id, user);
        res.status(200).json({
            success: true,
            data: newUser}
        )
    }


    login = async (req: Request, res: Response) => {
        let userData = req.body;
        await userService.checkUser(userData);
        res.status(200).json({
            success: true,}
        );


    }

}

export default new AddressController();