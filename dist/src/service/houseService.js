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
                    city: true
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
            console.log(house);
            let newHouse = new house_1.House();
            newHouse.price = house.price;
            newHouse.description = house.description;
            newHouse.user = id;
            newHouse.phuong = house.phuongid;
            newHouse.houseStatus = house.status;
            await this.houseRepository.save(newHouse);
        };
        this.updateHouse = async (id, house) => {
            await this.houseRepository.update({ id: id }, house);
        };
        this.findHouseById = async (id) => {
            let houses = await this.houseRepository.find({ id: id });
            return houses[0];
        };
        this.delete = async (id) => {
            if (id) {
                await this.houseRepository.delete({ id: id });
            }
            else {
                return 'khong ton tai';
            }
        };
        this.houseRepository = data_source_1.AppDataSource.getRepository(house_1.House);
    }
}
exports.default = new HouseService();
//# sourceMappingURL=houseService.js.map