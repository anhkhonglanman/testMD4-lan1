"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkOwnerShip = void 0;
const checkOwnerShip = (req, res, next) => {
    console.log(req.params.id);
    next();
};
exports.checkOwnerShip = checkOwnerShip;
//# sourceMappingURL=checkOwnerShip.js.map