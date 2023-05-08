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
        this.getContractByID = async (id) => {
            let contract = await data_source_1.AppDataSource.createQueryBuilder()
                .select("contract")
                .from(contract_1.Contract, "contract")
                .where({ id: id })
                .getOne();
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
        this.addContractByClient = async (id, data, cost, userId) => {
            await this.contractRepository
                .createQueryBuilder()
                .insert()
                .into(contract_1.Contract)
                .values({
                price: data.price,
                startMonth: data.startMonth,
                endMonth: data.endMonth,
                cost: cost,
                house: id,
                user: userId
            })
                .execute();
        };
        this.contractRepository = data_source_1.AppDataSource.getRepository(contract_1.Contract);
    }
}
exports.default = new ContractService();
//# sourceMappingURL=contractService.js.map