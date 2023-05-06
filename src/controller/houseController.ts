import {request, Request, Response} from "express";
import houseService from "../service/houseService";
import jwt from "jsonwebtoken";


class HouseController {
    showAllHouse = async (req: Request, res: Response) => {
        let house = await houseService.findAllHouse()
        res.status(201).json(house);
    }


    createHouse = async (req: Request, res: Response) => {
       let id=req['decode']['id'];
       let data=req.body;
       let house=await  houseService.addHouse(data,id);
       res.status(200).json(house)

    }
    editHouseById= async (req: Request, res: Response) => {
        let idHouse=req.params.id
        let data=req.body;
        let house=await  houseService.updateHouse(idHouse,data);
        console.log(idHouse)
        res.status(200).json(house)

    }
    showHouseById=async (req: Request, res: Response)=>{
        let id=req.params.id
        let house= await houseService.findHouseById(id);
        res.status(200).json(house)
    }
    delete=async (req: Request, res: Response)=>{
        let id=req.params.id
        let house= await houseService.delete(id);
        res.status(200).json(house)
    }


}

export default new HouseController();