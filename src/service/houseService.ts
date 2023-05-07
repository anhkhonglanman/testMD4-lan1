import {AppDataSource} from "../data-source";
import {House} from "../entity/house";
import bcrypt from "bcrypt";
import {User} from "../entity/user";
import jwt from "jsonwebtoken";
import {Request, Response} from "express";
import {Image} from "../entity/image";

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
                city: true,
                image: true
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

    addHouse = async (house, id) => {
        let newHouse = new House();
        newHouse.price = house.price;
        newHouse.area = house.area;
        newHouse.description = house.description;
        newHouse.user = id;
        newHouse.phuong = house.phuong
        newHouse.quan = house.quanId;
        newHouse.city = house.city;
        await this.houseRepository.save(newHouse);
        return newHouse
    }
    updateHouse = async (id, house) => {
        await this.houseRepository
            .createQueryBuilder()
            .update({
                price: house.price,
                area: house.area,
                description: house.description,
                phuong: house.phuong,
                quan: house.quanId,
                city: house.cityId,
            })
            .execute();
    }
    findHouseById = async (id) => {
       let house= await this.houseRepository.query(`select *
                                                 from house
                                                          join image i on house.id = i.houseId
                                                 where houseId = ${id}`);
       return house[0]
    }
    delete = async (id) => {
        if (id) {
            await this.houseRepository.delete({id: id})
        } else {
            return 'khong ton tai'
        }


    }
    findHouseByIdOwner = async (id) => {

        return await this.houseRepository.query(`select *
                                                 from house
                                                 where userId = ${id}`)
    }


}

export default new HouseService()
