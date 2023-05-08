"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userService_1 = __importDefault(require("../service/userService"));
const addressService_1 = __importDefault(require("../service/addressService"));
class AddressController {
    constructor() {
        this.getCity = async (req, res) => {
            let city = await addressService_1.default.getCity();
            res.status(200).json({
                success: true,
                data: city
            });
        };
        this.showUser = async (req, res) => {
            let userId = req.params.id;
            let user = await userService_1.default.findUserById(userId);
            res.status(200).json({
                success: true,
                data: user
            });
        };
        this.editUser = async (req, res) => {
            let user = req.body;
            let id = req.params.id;
            let newUser = await userService_1.default.updateUser(id, user);
            res.status(200).json({
                success: true,
                data: newUser
            });
        };
        this.login = async (req, res) => {
            let userData = req.body;
            await userService_1.default.checkUser(userData);
            res.status(200).json({
                success: true,
            });
        };
    }
}
exports.default = new AddressController();
//# sourceMappingURL=addressController.js.map