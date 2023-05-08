"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const city_1 = require("../entity/city");
const phuong_1 = require("../entity/phuong");
const quan_1 = require("../entity/quan");
class AddressService {
    constructor() {
        this.getCity = async () => {
            return await this.cityRepository.find();
        };
        this.getQuan = async (id) => {
            return await data_source_1.AppDataSource.createQueryBuilder()
                .select("quan")
                .from(quan_1.Quan, "quan")
                .where("quan.cityId = :id", { id: id })
                .getMany();
        };
        this.getPhuong = async (id) => {
            return await data_source_1.AppDataSource.createQueryBuilder()
                .select("phuong")
                .from(phuong_1.Phuong, "phuong")
                .where("phuong.quanId = :id", { id: id })
                .getMany();
        };
        this.getPhuongDetail = async (id) => {
            return await data_source_1.AppDataSource.createQueryBuilder()
                .select("phuong")
                .from(phuong_1.Phuong, "phuong")
                .where("phuong.id = :id", { id: id })
                .innerJoinAndSelect("phuong.quan", "quan")
                .innerJoinAndSelect("quan.city", "city")
                .getOne();
        };
        this.cityRepository = data_source_1.AppDataSource.getRepository(city_1.City);
        this.quanRepository = data_source_1.AppDataSource.getRepository(quan_1.Quan);
        this.phuongRepository = data_source_1.AppDataSource.getRepository(phuong_1.Phuong);
    }
}
exports.default = new AddressService();
//# sourceMappingURL=addressService.js.map