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


    // createHouse = async (house) => {
    //     console.log(house)
    //     let newHouse = new House();
    //     newHouse.price = house.price;
    //     newHouse.description = house.description;
    //     newHouse.user = house.userid;
    //     newHouse.phuong = house.phuong
    //     newHouse.houseStatus = house.status;
    //     await this.houseRepository.save(newHouse);
    // }


}

export default new HouseService()
