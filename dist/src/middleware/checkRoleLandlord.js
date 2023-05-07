"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkRoleLandlord = void 0;
const checkRoleLandlord = (req, res, next) => {
    console.log(req.decode);
    if (req.decode.role.id === 2) {
        return next();
    }
    else {
        res.status(401).json({
            message: 'You must be an administrator'
        });
    }
};
exports.checkRoleLandlord = checkRoleLandlord;
//# sourceMappingURL=checkRoleLandlord.js.map