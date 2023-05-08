"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkRoleLandlord = void 0;
const checkRoleLandlord = (req, res, next) => {
    if (req.decode.role === 2) {
        return next();
    }
    else {
        res.status(401).json({
            message: "ban khong co quyen ben check role",
            success: false
        });
    }
};
exports.checkRoleLandlord = checkRoleLandlord;
//# sourceMappingURL=checkRoleLandlord.js.map