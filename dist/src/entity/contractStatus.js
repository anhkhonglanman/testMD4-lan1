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
exports.ContractStatus = void 0;
const typeorm_1 = require("typeorm");
const contract_1 = require("./contract");
let ContractStatus = class ContractStatus {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ContractStatus.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ContractStatus.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => contract_1.Contract, (contract) => contract.contractStatus),
    __metadata("design:type", contract_1.Contract)
], ContractStatus.prototype, "contract", void 0);
ContractStatus = __decorate([
    (0, typeorm_1.Entity)()
], ContractStatus);
exports.ContractStatus = ContractStatus;
//# sourceMappingURL=contractStatus.js.map