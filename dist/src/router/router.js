"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRouter_1 = __importDefault(require("./userRouter"));
const addressController_1 = __importDefault(require("../controller/addressController"));
const houseRouter_1 = __importDefault(require("./houseRouter"));
const contractRouter_1 = __importDefault(require("./contractRouter"));
const router = (0, express_1.Router)();
router.use('/users', userRouter_1.default);
router.use('/houses', houseRouter_1.default);
router.use('/contract', contractRouter_1.default);
router.get('/city', addressController_1.default.getCity);
exports.default = router;
//# sourceMappingURL=router.js.map