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
exports.Quan = void 0;
const typeorm_1 = require("typeorm");
const city_1 = require("./city");
const phuong_1 = require("./phuong");
const house_1 = require("./house");
let Quan = class Quan {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Quan.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Quan.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => city_1.City, (city) => city.quan),
    __metadata("design:type", city_1.City)
], Quan.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => phuong_1.Phuong, (phuong) => phuong.quan),
    __metadata("design:type", Array)
], Quan.prototype, "phuong", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => house_1.House, (house) => house.phuong),
    __metadata("design:type", Array)
], Quan.prototype, "House", void 0);
Quan = __decorate([
    (0, typeorm_1.Entity)()
], Quan);
exports.Quan = Quan;
//# sourceMappingURL=quan.js.map