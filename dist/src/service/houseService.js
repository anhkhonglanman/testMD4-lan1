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
                    image: true,
                    user: true
                },
                select: {
                    user: {
                        name: true,
                        phoneNumber: true
                    }
                }
            });
            return houses;
        };
        this.findHouseById = async (id) => {
            return await data_source_1.AppDataSource.createQueryBuilder()
                .select("house")
                .addSelect("user.name")
                .addSelect("user.phoneNumber")
                .from(house_1.House, "house")
                .leftJoinAndSelect("house.image", "image")
                .innerJoin("house.user", "user")
                .where("house.id = :id", { id: id })
                .getOne();
        };
        this.findHouse = async (query) => {
            const qb = this.houseRepository.createQueryBuilder('house')
                .where('house.price >= :priceLow', { priceLow: query.priceLow })
                .orWhere('house.price <= :priceHigh', { priceHigh: query.priceHigh })
                .orWhere('house.area >= :areaLow', { areaLow: query.areaHigh })
                .orWhere('house.area <= :areaHigh', { areaHigh: query.areaLow });
            if (query.phuongId) {
                qb.andWhere(`house.phuongId = :phuongId`, { phuongId: query.phuongId });
                await qb.getMany();
            }
            else if (query.quanId) {
                qb.andWhere(`house.quanId = :quanId`, { quanId: query.quanId });
                await qb.getMany();
            }
            else if (query.cityId) {
                qb.andWhere(`house.cityId = :cityId`, { cityId: query.cityId });
                await qb.getMany();
            }
            return await qb.getMany();
        };
        this.addHouse = async (house, id) => {
            let newHouse = new house_1.House();
            newHouse.price = house.price;
            newHouse.area = house.area;
            newHouse.description = house.description;
            newHouse.user = id;
            newHouse.phuong = house.phuong;
            newHouse.quan = house.quan;
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
            })
                .execute();
        };
        this.delete = async (id) => {
            if (id) {
                await this.houseRepository.createQueryBuilder()
                    .update(house_1.House)
                    .set({ isRemoved: true })
                    .where("id = :id", { id: id })
                    .execute();
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