import {AppDataSource} from "../data-source";
import {House} from "../entity/house";
import bcrypt from "bcrypt";
import {User} from "../entity/user";
import jwt from "jsonwebtoken";
import {Request, Response} from "express";

class HouseService {
    private houseRepository;

    constructor() {
        this.houseRepository = AppDataSource.getRepository(House);
    }

    findAllHouse = async () => {

        let houses = await this.houseRepository.find()
        return houses
    }


    addHouse = async (house,id) => {
        console.log(house)
        let newHouse = new House();
        newHouse.price = house.price;
        newHouse.description = house.description;
        newHouse.user=id;
        newHouse.phuong = house.phuongid
        newHouse.houseStatus = house.status;
        await this.houseRepository.save(newHouse);
    }
    updateHouse = async (id, house) => {
        await this.houseRepository.update({id: id}, house);
    }
    findHouseById = async (id) => {

        let houses = await this.houseRepository.find({id:id})
        return houses[0]
    }
    delete= async (id) => {
        if (id){
            await this.houseRepository.delete({id:id})
        }else {
            return'khong ton tai'
        }

    }


}

export default new HouseService()
