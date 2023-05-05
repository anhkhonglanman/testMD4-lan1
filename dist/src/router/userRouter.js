"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = __importDefault(require("../controller/userController"));
const userRouter = (0, express_1.Router)();
userRouter.post('/signup', userController_1.default.signup);
userRouter.get('/:id', userController_1.default.showUser);
userRouter.put('/:id', userController_1.default.editUser);
exports.default = userRouter;
//# sourceMappingURL=userRouter.js.map