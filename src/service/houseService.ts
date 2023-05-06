import {Request, Response} from "express";
import {AppDataSource} from "../data-source";
import {House} from "../entity/house";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {User} from "../entity/user";

class HouseService {
    private houseRepository;

    constructor() {
        this.houseRepository = AppDataSource.getRepository(House);
    }

    findAllHouse = async () => {

        let houses = await this.houseRepository.find({
            relations: {
                phuong: true,
                quan: true,
                city: true
            }
        })
        return houses
    }

    findHouse = async (query) => {
        if (query.phuongId) {
            return await this.houseRepository.createQueryBuilder("house")
                .where("house.price >= :priceLow", {priceLow: query.priceLow})
                .andWhere(`house.phuongId = :phuongId`, {phuongId: query.phuongId})
                .getMany()
        } else if (query.quanId) {
            return await this.houseRepository.createQueryBuilder("house")
                .where("house.price >= :priceLow", {priceLow: query.priceLow})
                .andWhere(`house.quanId = :quanId`, {quanId: query.quanId})
                .getMany()
        } else if (query.cityId) {
            return await this.houseRepository.createQueryBuilder("house")
                .where("house.price >= :priceLow", {priceLow: query.priceLow})
                .andWhere(`house.cityId = :cityId`, {cityId: query.cityId})
                .getMany()
        } else {
            return await this.houseRepository.createQueryBuilder("house")
                .where("house.price >= :priceLow", {priceLow: query.priceLow})
                .getMany()
        }


        // return await this.houseRepository.createQueryBuilder("house")
        //     .where("house.price >= :priceLow", {priceLow: query.priceLow})
        //     .andWhere(`house.phuongId ${(query.phuongId) ? "=" : ">"} :phuongId`,
        //         {phuongId: (query.phuongId) ? query.phuongId : 0})
        //
        //     .getMany()

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