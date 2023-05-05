"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const user_1 = require("../entity/user");
const bcrypt_1 = __importDefault(require("bcrypt"));
class UserService {
    constructor() {
        this.createUser = async (user) => {
            let password = await bcrypt_1.default.hash(user.password, 10);
            let newUser = new user_1.User();
            newUser.name = user.name;
            newUser.phoneNumber = user.phoneNumber;
            newUser.address = user.address;
            newUser.username = user.username;
            newUser.password = password;
            newUser.role = parseInt(user.role);
            await this.userRepository.save(newUser);
            return newUser;
        };
        this.checkUser = async (user) => {
            let userFind = await this.userRepository.findOne({
                where: {
                    username: user.username,
                }
            });
            return userFind;
        };
        this.findUserById = async (userId) => {
            let userFind = await this.userRepository.findOneBy({
                id: userId
            });
            return userFind;
        };
        this.updateUser = async (id, user) => {
            console.log(user);
            console.log(id);
            await this.userRepository.update({ id: id }, user);
        };
        this.userRepository = data_source_1.AppDataSource.getRepository(user_1.User);
    }
}
exports.default = new UserService();
//# sourceMappingURL=userService.js.map