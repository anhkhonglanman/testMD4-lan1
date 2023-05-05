"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const user_1 = require("../entity/user");
class UserService {
    constructor() {
        this.checkUser = async (user) => {
            let userFind = await this.userRepository.find({ username: user.username, password: user.password });
            return userFind;
        };
        this.userRepository = data_source_1.AppDataSource.getRepository(user_1.User);
    }
}
exports.default = new UserService();
//# sourceMappingURL=userService.js.map