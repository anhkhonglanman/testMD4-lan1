"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const contractService_1 = __importDefault(require("../service/contractService"));
class ContractController {
    constructor() {
        this.getContract = async (req, res) => {
            let id = req['decode'].id;
            let contract = await contractService_1.default.getContractByUserID(id);
            console.log(contract);
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
    }
}
exports.default = new ContractController();
//# sourceMappingURL=contractController.js.map