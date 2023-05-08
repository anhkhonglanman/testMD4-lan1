import {AppDataSource} from "../data-source";
import {House} from "../entity/house";
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
                image: true,
                user: true
            },
            select: {
                user: {
                    name: true,
                    phoneNumber: true
                }
            }
        })
        return houses
    }
    findHouseById = async (id) => {
        // let house = await this.houseRepository.query(`select house.*
        //                                          from house
        //                                                   left join image i on house.id = i.houseId
        //                                               where house.id = ${id}`);
        return  await AppDataSource.createQueryBuilder()
            .select("house")
            .addSelect("user.name")
            .addSelect("user.phoneNumber")
            .from(House, "house")
            .leftJoinAndSelect("house.image", "image")
            .innerJoin("house.user", "user")
            .where("house.id = :id", {id: id})
            .getOne()
    }
    findHouse = async (query) => {
        // if (query.phuongId) {
        //     return await this.houseRepository.createQueryBuilder("house")
        //         .where("house.price >= :priceLow", {priceLow: query.priceLow})
        //         .andWhere(`house.phuongId = :phuongId`, {phuongId: query.phuongId})
        //         .getMany()
        // } else if (query.quanId) {
        //     return await this.houseRepository.createQueryBuilder("house")
        //         .where("house.price >= :priceLow", {priceLow: query.priceLow})
        //         .andWhere(`house.quanId = :quanId`, {quanId: query.quanId})
        //         .getMany()
        // } else if (query.cityId) {
        //     return await this.houseRepository.createQueryBuilder("house")
        //         .where("house.price >= :priceLow", {priceLow: query.priceLow})
        //         .andWhere(`house.cityId = :cityId`, {cityId: query.cityId})
        //         .getMany()
        // } else {
        //     return await this.houseRepository.createQueryBuilder("house")
        //         .where("house.price >= :priceLow", {priceLow: query.priceLow})
        //         .getMany()
        // }

        const qb = this.houseRepository.createQueryBuilder('house')
            .where('house.price >= :priceLow', {priceLow: query.priceLow})
            .orWhere('house.price <= :priceHigh', {priceHigh: query.priceHigh})
            // .orWhere('house.area BETWEEN :min AND :max', {min : 50, max : 1000})
            .orWhere('house.area >= :areaLow', {areaLow: query.areaHigh})
            .orWhere('house.area <= :areaHigh', {areaHigh: query.areaLow})
        if (query.phuongId) {
            qb.andWhere(`house.phuongId = :phuongId`, {phuongId: query.phuongId});
            await qb.getMany();
        } else if (query.quanId) {
            qb.andWhere(`house.quanId = :quanId`, {quanId: query.quanId});
            await qb.getMany();
        } else if (query.cityId) {
            qb.andWhere(`house.cityId = :cityId`, {cityId: query.cityId});
            await qb.getMany();
        }
        return await qb.getMany();
        // return await this.houseRepository.createQueryBuilder("house")
        //     .where("house.price >= :priceLow", {priceLow: query.priceLow})
        //     .andWhere(`house.phuongId ${(query.phuongId) ? "=" : ">"} :phuongId`,
        //         {phuongId: (query.phuongId) ? query.phuongId : 0})
        //
        //     .getMany()

    }

    addHouse = async (house, id) => {
        let newHouse = new House();
        newHouse.price = house.price;
        newHouse.area = house.area;
        newHouse.description = house.description;
        newHouse.user = id;
        newHouse.phuong = house.phuong
        newHouse.quan = house.quan;
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
    delete = async (id) => {
        if (id) {
            await this.houseRepository.createQueryBuilder()
                .update(House)
                .set({ isRemoved: true})
                .where("id = :id", { id: id })
                .execute()
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
