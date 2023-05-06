"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const houseService_1 = __importDefault(require("../service/houseService"));
class HouseController {
    constructor() {
        this.showAllHouse = async (req, res) => {
            let house = await houseService_1.default.findAllHouse();
            res.status(201).json(house);
        };
        this.searchHouse = async (req, res) => {
            console.log(req.query);
            if (!req.query.priceLow) {
                req.query.priceLow = "0";
            }
            let house = await houseService_1.default.findHouse(req.query);
            console.log(house);
            res.status(201).json(house);
        };
    }
}
exports.default = new HouseController();
//# sourceMappingURL=houseController.js.map