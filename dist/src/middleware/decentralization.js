"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decentralization = void 0;
const decentralization = (req, res, next) => {
    if (req.decode.role === 1) {
        next();
    }
    else {
        res.status(200).json({
            message: 'khong co quyen',
            success: false
        });
    }
};
exports.decentralization = decentralization;
//# sourceMappingURL=decentralization.js.map