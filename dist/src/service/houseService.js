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
        this.houseRepository = data_source_1.AppDataSource.getRepository(house_1.House);
    }
}
exports.default = new HouseService();
//# sourceMappingURL=houseService.js.map