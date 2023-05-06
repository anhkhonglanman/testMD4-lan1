import {Request, Response} from "express";
import houseService from "../service/houseService";
// import jwt from "jsonwebtoken";

class HouseController {
    showAllHouse = async (req: Request, res: Response) => {
        let house = await houseService.findAllHouse()
        res.status(201).json(house);
    }


    createHouse = async (req: Request, res: Response) => {

    }


}

export default new HouseController();