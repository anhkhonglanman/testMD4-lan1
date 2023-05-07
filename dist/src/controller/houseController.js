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
            if (!req.query.priceHigh) {
                req.query.priceLow = "1000000";
            }
            if (!req.query.areaLow) {
                req.query.areaLow = "50";
            }
            if (!req.query.areaHigh) {
                req.query.areaHigh = "1000";
            }
            if (!req.query.cityId) {
                req.query.cityId = "0";
            }
            let house = await houseService_1.default.findHouse(req.query);
            console.log(house);
            res.status(201).json(house);
        };
        this.createHouse = async (req, res) => {
            let id = req['decode']['id'];
            let data = req.body;
            let house = await houseService_1.default.addHouse(data, id);
            res.status(200).json(house);
        };
        this.editHouseById = async (req, res) => {
            let idHouse = req.params.id;
            let data = req.body;
            let house = await houseService_1.default.updateHouse(idHouse, data);
            console.log(idHouse);
            res.status(200).json(house);
        };
        this.showHouseById = async (req, res) => {
            let id = req.params.id;
            let house = await houseService_1.default.findHouseById(id);
            res.status(200).json(house);
        };
        this.delete = async (req, res) => {
            let id = req.params.id;
            let house = await houseService_1.default.delete(id);
            res.status(200).json(house);
        };
        this.findHouse = async (req, res) => {
        };
    }
}
exports.default = new HouseController();
//# sourceMappingURL=houseController.js.map