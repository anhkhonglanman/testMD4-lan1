"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userService_1 = __importDefault(require("../service/userService"));
class UserController {
    constructor() {
        this.signup = async (req, res) => {
            let check = await userService_1.default.checkUsersignup(req.body);
            if (!check) {
                let newUser = await userService_1.default.createUser(req.body);
                res.status(201).json(newUser);
            }
            else {
                res.status(201).json('tai khoan da ton tai');
            }
        };
        this.showUser = async (req, res) => {
            let userId = req.params.id;
            let user = await userService_1.default.findUserById(userId);
            res.status(201).json(user);
            return user;
        };
        this.editUser = async (req, res) => {
            let user = req.body;
            let id = req.params.id;
            let newUser = await userService_1.default.updateUser(id, user);
            res.status(201).json(newUser);
        };
        this.login = async (req, res) => {
            let userData = req.body;
            let user = await userService_1.default.checkUser(userData);
            res.status(200).json(user);
        };
    }
}
exports.default = new UserController();
//# sourceMappingURL=userController.js.map