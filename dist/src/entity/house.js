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
exports.House = void 0;
const typeorm_1 = require("typeorm");
const image_1 = require("./image");
const contract_1 = require("./contract");
const user_1 = require("./user");
const phuong_1 = require("./phuong");
const housestatus_1 = require("./housestatus");
const quan_1 = require("./quan");
const city_1 = require("./city");
let House = class House {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], House.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], House.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], House.prototype, "area", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 300 }),
    __metadata("design:type", String)
], House.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => image_1.Image, (image) => image.house),
    __metadata("design:type", Array)
], House.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => contract_1.Contract, (contract) => contract.house),
    __metadata("design:type", Array)
], House.prototype, "contract", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_1.User, (user) => user.house),
    __metadata("design:type", user_1.User)
], House.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => phuong_1.Phuong, (phuong) => phuong.house),
    __metadata("design:type", phuong_1.Phuong)
], House.prototype, "phuong", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => housestatus_1.HouseStatus, (houseStatus) => houseStatus.house),
    __metadata("design:type", housestatus_1.HouseStatus)
], House.prototype, "houseStatus", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => quan_1.Quan, (quan) => quan.house),
    __metadata("design:type", quan_1.Quan)
], House.prototype, "quan", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => city_1.City, (city) => city.house),
    __metadata("design:type", city_1.City)
], House.prototype, "city", void 0);
House = __decorate([
    (0, typeorm_1.Entity)()
], House);
exports.House = House;
//# sourceMappingURL=house.js.map