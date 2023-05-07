"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = __importDefault(require("../controller/userController"));
const auth_1 = require("../middleware/auth");
const userRouter = (0, express_1.Router)();
userRouter.post('/signup', userController_1.default.signup);
userRouter.post('/login', userController_1.default.login);
userRouter.get('/:id', auth_1.auth, userController_1.default.showUser);
userRouter.put('/:id', userController_1.default.editUser);
exports.default = userRouter;
//# sourceMappingURL=userRouter.js.map