"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const user_1 = require("../entity/user");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_1 = require("../middleware/auth");
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
            let userFind = await this.userRepository.query(`select *
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
            let userFind = await this.userRepository.findOneBy({
                id: userId
            });
            return userFind;
        };
        this.updateUser = async (id, user) => {
            await this.userRepository.update({ id: id }, user);
        };
        this.checkUsersignup = async (user) => {
            let userFind = await this.userRepository.findOne({
                where: {
                    username: user.username,
                }
            });
            return userFind;
        };
        this.userRepository = data_source_1.AppDataSource.getRepository(user_1.User);
    }
}
exports.default = new UserService();
//# sourceMappingURL=userService.js.map