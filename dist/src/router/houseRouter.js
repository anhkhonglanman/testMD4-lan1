"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const houseController_1 = __importDefault(require("../controller/houseController"));
const houseRouter = (0, express_1.Router)();
houseRouter.get('/', houseController_1.default.showAllHouse);
houseRouter.get('/search', houseController_1.default.searchHouse);
houseRouter.get('/:id', houseController_1.default.showHouseById);
exports.default = houseRouter;
//# sourceMappingURL=houseRouter.js.map