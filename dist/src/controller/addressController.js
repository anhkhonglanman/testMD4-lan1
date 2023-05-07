"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const addressService_1 = __importDefault(require("../service/addressService"));
class AddressController {
    constructor() {
        this.getCity = async (req, res) => {
            let city = await addressService_1.default.getCity();
            res.status(201).json(city);
        };
        this.getQuan = async (req, res) => {
            let city = await addressService_1.default.getQuan();
            res.status(201).json(city);
        };
        this.getPhuong = async (req, res) => {
            let city = await addressService_1.default.getPhuong();
            res.status(201).json(city);
        };
    }
}
exports.default = new AddressController();
//# sourceMappingURL=addressController.js.map