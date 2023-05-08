"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkOwnerShip = void 0;
const houseService_1 = __importDefault(require("../service/houseService"));
const checkOwnerShip = async (req, res, next) => {
    let idHouse = req.params.id;
    let idOwner = req['decode'].id;
    let house = await houseService_1.default.findHouseById(parseInt(idHouse));
    if (house.user.id == idOwner) {
        return next();
    }
    else {
        res.status(401).json({
            message: "ban khong co quyen ben checkowen",
            success: false
        });
    }
};
exports.checkOwnerShip = checkOwnerShip;
//# sourceMappingURL=checkOwnerShip.js.map