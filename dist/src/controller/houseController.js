"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const houseService_1 = __importDefault(require("../service/houseService"));
const imageService_1 = __importDefault(require("../service/imageService"));
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
            let imageData = data.image;
            let house = await houseService_1.default.addHouse(data, id);
            let idHouse = house.id;
            await imageService_1.default.addImage(idHouse, imageData);
            res.status(200).json(house);
        };
        this.editHouseById = async (req, res) => {
            let idHouse = req.params.id;
            let data = req.body;
            let imageData = data.image;
            await imageService_1.default.upDateImage(imageData, idHouse);
            await houseService_1.default.updateHouse(idHouse, data);
            res.status(200).json("ok");
        };
        this.showHouseById = async (req, res) => {
            let id = parseInt(req.params.id);
            console.log(id);
            let house = await houseService_1.default.findHouseById(id);
            console.log(house);
            res.status(200).json(house);
        };
        this.delete = async (req, res) => {
            let id = parseInt(req.params.id);
            let house = await houseService_1.default.delete(id);
            res.status(200).json(house);
        };
    }
}
exports.default = new HouseController();
//# sourceMappingURL=houseController.js.map