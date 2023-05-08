"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../middleware/auth");
const checkRoleLandlord_1 = require("../middleware/checkRoleLandlord");
const checkOwnerShip_1 = require("../middleware/checkOwnerShip");
const houseController_1 = __importDefault(require("../controller/houseController"));
const houseRouter = (0, express_1.Router)();
houseRouter.get('/', houseController_1.default.showAllHouse);
houseRouter.get('/search', houseController_1.default.searchHouse);
houseRouter.get('/:id', houseController_1.default.showHouseById);
houseRouter.post('/', auth_1.auth, checkRoleLandlord_1.checkRoleLandlord, houseController_1.default.createHouse);
houseRouter.put('/:id', houseController_1.default.editHouseById);
houseRouter.delete('/:id', auth_1.auth, checkRoleLandlord_1.checkRoleLandlord, checkOwnerShip_1.checkOwnerShip, houseController_1.default.delete);
exports.default = houseRouter;
//# sourceMappingURL=houseRouter.js.map