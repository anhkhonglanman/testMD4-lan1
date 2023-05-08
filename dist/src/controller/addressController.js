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
            let id = req.query.city;
            console.log(req.query, id);
            let city = await addressService_1.default.getQuan(id);
            res.status(201).json(city);
        };
        this.getPhuong = async (req, res) => {
            let id = req.query.quan;
            console.log(req.query, id);
            let quan = await addressService_1.default.getPhuong(id);
            res.status(201).json(quan);
        };
    }
}
exports.default = new AddressController();
//# sourceMappingURL=addressController.js.map