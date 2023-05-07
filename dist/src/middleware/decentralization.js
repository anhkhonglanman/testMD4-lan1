"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decentralization = void 0;
const decentralization = (req, res, next) => {
    if (req.decode.role === 1) {
        next();
    }
    else {
        res.status(401).json({
            message: 'You must be an administrator'
        });
    }
};
exports.decentralization = decentralization;
//# sourceMappingURL=decentralization.js.map