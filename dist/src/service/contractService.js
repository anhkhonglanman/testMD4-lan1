"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const contract_1 = require("../entity/contract");
class ContractService {
    constructor() {
        this.getContractByUserID = async (id) => {
            let contract = await this.contractRepository.find({
                relations: {
                    house: true
                },
                where: {
                    house: id
                }
            });
            return contract;
        };
        this.getContractByHouseId = async (id) => {
            let contract = await this.contractRepository.find({
                relations: {
                    house: true,
                    contractStatus: true
                },
                where: {
                    id: id
                }
            });
            return contract;
        };
        this.showAll = async () => {
            let contract = await this.contractRepository.find();
            return contract;
        };
        this.updateContractByClient = async (id, data) => {
            let contract = await this.contractRepository
                .createQueryBuilder()
                .update()
                .set({
                startMonth: data.startMonth,
                endMonth: data.endMonth,
            })
                .where("id = :id", { id: id })
                .execute();
            return contract;
        };
        this.contractRepository = data_source_1.AppDataSource.getRepository(contract_1.Contract);
    }
}
exports.default = new ContractService();
//# sourceMappingURL=contractService.js.map