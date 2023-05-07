"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contractController_1 = __importDefault(require("../controller/contractController"));
const auth_1 = require("../middleware/auth");
const contractRouter = (0, express_1.Router)();
contractRouter.get('', contractController_1.default.getAll);
contractRouter.get('/:id', auth_1.auth, contractController_1.default.getContract);
contractRouter.put('/:id', auth_1.auth, contractController_1.default.editContractByClient);
exports.default = contractRouter;
//# sourceMappingURL=contractRouter.js.map