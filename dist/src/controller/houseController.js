"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
6;
const houseService_1 = __importDefault(require("../service/houseService"));
class HouseController {
    constructor() {
        this.showAllHouse = async (req, res) => {
            let house = await houseService_1.default.findAllHouse();
            console.log(house);
            res.status(201).json(house);
        };
        this.createHouse = async (req, res) => {
            let newHouse = await houseService_1.default.createHouse(req.body);
            console.log(newHouse);
            res.status(201).json(newHouse);
        };
    }
}
exports.default = new HouseController();
//# sourceMappingURL=houseController.js.map