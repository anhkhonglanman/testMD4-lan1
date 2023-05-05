import userService from "../service/userService";
import {Request, Response} from "express";

class UserController {
    private userService;
    constructor() {
        this.userService = userService
    }

    signup = async (req: Request, res: Response) => {
        let newUser = await this.userService.createUser()
        res.status(201).json(newUser)
    }
}