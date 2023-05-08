"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const contractService_1 = __importDefault(require("../service/contractService"));
const houseService_1 = __importDefault(require("../service/houseService"));
class ContractController {
    constructor() {
        this.getContract = async (req, res) => {
            let id = req['decode'].id;
            let contract = await contractService_1.default.getContractByUserID(id);
            res.status(201).json(contract);
        };
        this.getContractById = async (req, res) => {
            let id = req.params.id;
            console.log(id);
            let contract = await contractService_1.default.getContractByID(id);
            res.status(201).json(contract);
        };
        this.editContractByClient = async (req, res) => {
            let idContract = req.params.id;
            let contract = await contractService_1.default.updateContractByClient(parseInt(idContract), req.body);
            res.status(201).json(contract);
        };
        this.getAll = async (req, res) => {
            let contract = await contractService_1.default.showAll();
            res.status(201).json(contract);
        };
        this.createContractByClient = async (req, res) => {
            let userId = req['decode'].id;
            let houseId = req.body.houseId;
            console.log(houseId);
            console.log(userId);
            let house = await houseService_1.default.findHouseById(houseId);
            let price = house.price;
            let startMonth = req.body.startMonth;
            let endMonth = req.body.endMonth;
            let month = this.tinhSoThang(startMonth, endMonth);
            let cost = month * price;
            await contractService_1.default.addContractByClient(houseId, req.body, cost, parseInt(userId));
            res.status(201).json("them hop dong  thanh cong");
        };
        this.tinhSoThang = (thangBatDau, thangKetThuc) => {
            let thang1 = new Date(thangBatDau);
            let thang2 = new Date(thangKetThuc);
            let soThang = (thang2.getFullYear() - thang1.getFullYear()) * 12;
            soThang -= thang1.getMonth();
            soThang += thang2.getMonth();
            return soThang <= 0 ? 0 : soThang;
        };
    }
}
exports.default = new ContractController();
//# sourceMappingURL=contractController.js.map