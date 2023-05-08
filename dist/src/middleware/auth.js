"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = exports.SECRET = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.SECRET = '123456';
const auth = (req, res, next) => {
    let authorziation = req.headers.authorization;
    if (authorziation) {
        let accessToken = req.headers.authorization.split(" ")[1];
        if (accessToken) {
            jsonwebtoken_1.default.verify(accessToken, exports.SECRET, (err, payload) => {
                if (err) {
                    res.status(401).json({
                        error: err.message,
                        message: "ban chua dang nhap"
                    });
                }
                else {
                    req.decode = payload;
                    return next();
                }
            });
        }
        else {
            res.status(401).json({
                message: "ban chua dang nhap"
            });
        }
    }
    else {
        res.status(401).json({
            message: "ban chua dang nhap"
        });
    }
};
exports.auth = auth;
//# sourceMappingURL=auth.js.map