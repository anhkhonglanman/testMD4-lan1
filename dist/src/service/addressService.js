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
        this.getQuan = async () => {
            return await this.cityRepository.find();
        };
        this.getPhuong = async () => {
            return await this.cityRepository.find();
        };
        this.cityRepository = data_source_1.AppDataSource.getRepository(city_1.City);
        this.quanRepository = data_source_1.AppDataSource.getRepository(quan_1.Quan);
        this.phuongRepository = data_source_1.AppDataSource.getRepository(phuong_1.Phuong);
    }
}
exports.default = new AddressService();
//# sourceMappingURL=addressService.js.map