import houseService from "../service/houseService";
import {Request, Response} from "express";
class HouseController {
    showAllHouse = async (req: Request, res: Response) => {
        let house = await houseService.findAllHouse()
        res.status(201).json(house);
    }
    searchHouse = async (req: Request, res: Response) => {
        console.log(req.query)
        if (!req.query.priceLow) {
            req.query.priceLow = "0";
        }
        // if (!req.query.status) {
        //     req.query.status = "1"
        // }

        let house = await houseService.findHouse(req.query)
        console.log(house)
        res.status(201).json(house);
        // res.status(201).json("ok");
    }


}

export default new HouseController();