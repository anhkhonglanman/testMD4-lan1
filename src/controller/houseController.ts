import { Request, Response} from "express";
import houseService from "../service/houseService";
import ImageService from "../service/imageService";
import imageService from "../service/imageService";


class HouseController {
    showAllHouse = async (req: Request, res: Response) => {
        let house = await houseService.findAllHouse()
        res.status(201).json(house);
    }
    searchHouse = async (req: Request, res: Response) => {
        if (!req.query.priceLow) {
            req.query.priceLow = "0";
        }

        let house = await houseService.findHouse(req.query)
        res.status(201).json(house);

    }


    createHouse = async (req: Request, res: Response) => {
       let id=req['decode']['id'];
       let data=req.body;
       let imageData=data.image;
       let house=await  houseService.addHouse(data,id);
       let idHouse=house.id
        await ImageService.addImage(idHouse,imageData)
        res.status(200).json({
            success: true,
            data: house.id}
        )
    }

    editHouseById= async (req: Request, res: Response) => {
        let idHouse=req.params.id
        let data=req.body;
        let imageData = data.image;
        await imageService.upDateImage(imageData,idHouse)
        await  houseService.updateHouse(idHouse,data);
        res.status(200).json({
            success: true
           }
        )
    }
    showHouseById=async (req: Request, res: Response)=>{
        let id=req.params.id
        let house= await houseService.findHouseById(id);
        res.status(200).json({
            success: true,
            data: house}
        )
    }
    delete=async (req: Request, res: Response)=>{
        let id=  parseInt(req.params.id)
        await houseService.delete(id);
        res.status(200).json({
            success: true,}
        )
    }



}

export default new HouseController();