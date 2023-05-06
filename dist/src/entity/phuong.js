"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Phuong = void 0;
const typeorm_1 = require("typeorm");
const quan_1 = require("./quan");
const house_1 = require("./house");
let Phuong = class Phuong {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], Phuong.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Phuong.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Phuong.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => quan_1.Quan, (quan) => quan.phuong),
    __metadata("design:type", quan_1.Quan)
], Phuong.prototype, "quan", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => house_1.House, (house) => house.phuong),
    __metadata("design:type", Array)
], Phuong.prototype, "house", void 0);
Phuong = __decorate([
    (0, typeorm_1.Entity)()
], Phuong);
exports.Phuong = Phuong;
//# sourceMappingURL=phuong.js.map