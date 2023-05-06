"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_1 = require("../middleware/auth");
const city_1 = require("../entity/city");
const phuong_1 = require("../entity/phuong");
const quan_1 = require("../entity/quan");
class AddressService {
    constructor() {
        this.getCity = async () => {
            return await this.cityRepository.find();
        };
        this.checkUser = async (user) => {
            let userFind = await this.cityRepository.query(`select *
                                                        from user
                                                        where username = "${user.username}"`);
            let usserFinds = userFind[0];
            if (usserFinds) {
                let pass = await bcrypt_1.default.compare(user.password, usserFinds.password);
                if (pass) {
                    let payload;
                    if (usserFinds.role === 1) {
                        payload = {
                            id: usserFinds.id,
                            username: user.username,
                            role: "client"
                        };
                    }
                    else {
                        payload = {
                            id: usserFinds.id,
                            username: user.username,
                            role: "owner"
                        };
                    }
                    return jsonwebtoken_1.default.sign(payload, auth_1.SECRET, {
                        expiresIn: 36000 * 10 * 100
                    });
                }
                else {
                    return 'khong dung pass';
                }
            }
            else {
                return 'khong dung tai khoan hoac mat khau';
            }
        };
        this.findUserById = async (userId) => {
            let userFind = await this.cityRepository.findOneBy({
                id: userId
            });
            return userFind;
        };
        this.updateUser = async (id, user) => {
            await this.cityRepository.update({ id: id }, user);
        };
        this.checkUsersignup = async (user) => {
            let userFind = await this.cityRepository.findOne({
                where: {
                    username: user.username,
                }
            });
            return userFind;
        };
        this.cityRepository = data_source_1.AppDataSource.getRepository(city_1.City);
        this.quanRepository = data_source_1.AppDataSource.getRepository(quan_1.Quan);
        this.phuongRepository = data_source_1.AppDataSource.getRepository(phuong_1.Phuong);
    }
}
exports.default = new AddressService();
//# sourceMappingURL=addressService.js.map