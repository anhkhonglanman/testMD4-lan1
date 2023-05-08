"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const house_1 = require("../entity/house");
class HouseService {
    constructor() {
        this.findAllHouse = async () => {
            let houses = await this.houseRepository.find({
                relations: {
                    phuong: true,
                    quan: true,
                    city: true,
                    image: true
                }
            });
            return houses;
        };
        this.findHouse = async (query) => {
            if (query.phuongId) {
                return await this.houseRepository.createQueryBuilder("house")
                    .where("house.price >= :priceLow", { priceLow: query.priceLow })
                    .andWhere(`house.phuongId = :phuongId`, { phuongId: query.phuongId })
                    .getMany();
            }
            else if (query.quanId) {
                return await this.houseRepository.createQueryBuilder("house")
                    .where("house.price >= :priceLow", { priceLow: query.priceLow })
                    .andWhere(`house.quanId = :quanId`, { quanId: query.quanId })
                    .getMany();
            }
            else if (query.cityId) {
                return await this.houseRepository.createQueryBuilder("house")
                    .where("house.price >= :priceLow", { priceLow: query.priceLow })
                    .andWhere(`house.cityId = :cityId`, { cityId: query.cityId })
                    .getMany();
            }
            else {
                return await this.houseRepository.createQueryBuilder("house")
                    .where("house.price >= :priceLow", { priceLow: query.priceLow })
                    .getMany();
            }
        };
        this.addHouse = async (house, id) => {
            let newHouse = new house_1.House();
            newHouse.price = house.price;
            newHouse.area = house.area;
            newHouse.description = house.description;
            newHouse.user = id;
            newHouse.phuong = house.phuong;
            newHouse.quan = house.quanId;
            newHouse.city = house.city;
            await this.houseRepository.save(newHouse);
            return newHouse;
        };
        this.updateHouse = async (id, house) => {
            await this.houseRepository
                .createQueryBuilder()
                .update({
                price: house.price,
                area: house.area,
                description: house.description,
                phuong: house.phuong,
                quan: house.quanId,
                city: house.cityId,
            }).where({ id: id })
                .execute();
        };
        this.findHouseById = async (id) => {
            return await data_source_1.AppDataSource.createQueryBuilder()
                .select("house")
                .from(house_1.House, "house")
                .innerJoinAndSelect("house.user", "user")
                .leftJoinAndSelect("house.image", "image")
                .where("house.id = :id", { id: id })
                .getOne();
        };
        this.delete = async (id) => {
            if (id) {
                await this.houseRepository.delete({ id: id });
            }
            else {
                return 'khong ton tai';
            }
        };
        this.findHouseByIdOwner = async (id) => {
            return await this.houseRepository.query(`select *
                                                 from house
                                                 where userId = ${id}`);
        };
        this.houseRepository = data_source_1.AppDataSource.getRepository(house_1.House);
    }
}
exports.default = new HouseService();
//# sourceMappingURL=houseService.js.map